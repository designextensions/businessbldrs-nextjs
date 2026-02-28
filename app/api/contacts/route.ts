import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { getContacts, createContact } from "@/lib/storage";
import { hubspotService } from "@/lib/hubspot";
import { insertContactSchema } from "@/lib/db/schema";
import { createHmac } from "crypto";

// ─── In-memory rate limiter (5 requests per IP per 10 minutes) ────────────────

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

const rateLimitMap = new Map<string, { count: number; windowStart: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, windowStart: now });
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return false;
  }

  entry.count += 1;
  return true;
}

// ─── Token validation ─────────────────────────────────────────────────────────

const TOKEN_SECRET = process.env.FORM_TOKEN_SECRET || process.env.SESSION_SECRET || "fallback-secret";
const TOKEN_MAX_AGE_MS = 60 * 60 * 1000; // 1 hour

function validateServerToken(token: string | undefined): { valid: boolean; reason?: string } {
  if (!token) return { valid: false, reason: "missing token" };

  try {
    const decoded = Buffer.from(token, "base64").toString("utf-8");
    const [nonce, timestamp, signature] = decoded.split(":");

    if (!nonce || !timestamp || !signature) {
      return { valid: false, reason: "malformed token" };
    }

    const ts = parseInt(timestamp, 10);
    if (isNaN(ts)) return { valid: false, reason: "invalid timestamp" };

    const age = Date.now() - ts;
    if (age < 0 || age > TOKEN_MAX_AGE_MS) {
      return { valid: false, reason: "token expired" };
    }

    const expected = createHmac("sha256", TOKEN_SECRET)
      .update(`${nonce}:${timestamp}`)
      .digest("hex");

    if (expected !== signature) {
      return { valid: false, reason: "invalid signature" };
    }

    return { valid: true };
  } catch {
    return { valid: false, reason: "token parse error" };
  }
}

// ─── GET - admin only ─────────────────────────────────────────────────────────

export async function GET(_request: NextRequest) {
  const authError = await requireAdmin();
  if (authError) return authError;

  try {
    const contactList = await getContacts();
    return NextResponse.json(contactList);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return NextResponse.json({ error: "Failed to fetch contacts" }, { status: 500 });
  }
}

// ─── POST - public with spam prevention ───────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    // Determine client IP
    const forwarded = request.headers.get("x-forwarded-for");
    const clientIp = forwarded ? forwarded.split(",")[0].trim() : "unknown";

    // Rate limiting
    if (!checkRateLimit(clientIp)) {
      console.log(`[Spam BLOCKED] Rate limit exceeded for IP: ${clientIp}`);
      return NextResponse.json(
        { success: false, message: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { honeypot, spamToken, formLoadedAt: _formLoadedAt, ...contactData } = body;

    console.log(
      `[Spam Check] IP: ${clientIp}, honeypot: "${honeypot || ""}", hasToken: ${!!spamToken}`
    );

    // Spam check 1: honeypot must be empty
    if (honeypot && honeypot.length > 0) {
      console.log(`[Spam BLOCKED] Honeypot filled from IP: ${clientIp}`);
      // Silently reject — don't tip off bots
      return NextResponse.json({ success: true, id: "rejected" });
    }

    // Spam check 2: validate server-side HMAC token
    const tokenResult = validateServerToken(spamToken);
    if (!tokenResult.valid) {
      console.log(
        `[Spam BLOCKED] Token validation failed: ${tokenResult.reason} from IP: ${clientIp}`
      );
      return NextResponse.json({ success: true, id: "rejected" });
    }

    console.log(`[Spam PASSED] Contact form passed all checks from IP: ${clientIp}`);

    // Validate contact data with Zod
    const parsed = insertContactSchema.safeParse(contactData);
    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          errors: parsed.error.issues.map((issue) => ({
            field: issue.path.join("."),
            message: issue.message,
          })),
        },
        { status: 400 }
      );
    }

    const contact = await createContact(parsed.data);

    // Sync to HubSpot (non-blocking, failure does not fail the request)
    try {
      const hubspotContact = await hubspotService.createContact(parsed.data);
      if (hubspotContact) {
        console.log("Successfully sent contact to HubSpot:", hubspotContact.id);
      }
    } catch (hubspotError) {
      console.error("HubSpot integration error (non-critical):", hubspotError);
    }

    return NextResponse.json({ success: true, id: contact.id });
  } catch (error) {
    console.error("Contact form submission error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit contact form" },
      { status: 500 }
    );
  }
}
