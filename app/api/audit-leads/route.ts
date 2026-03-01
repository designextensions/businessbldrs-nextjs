import { NextRequest, NextResponse } from "next/server";
import { hubspotService } from "@/lib/hubspot";
import { createContact } from "@/lib/storage";

const RATE_LIMIT_MAX = 10;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

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

export async function POST(request: NextRequest) {
  try {
    const forwarded = request.headers.get("x-forwarded-for");
    const clientIp = forwarded ? forwarded.split(",")[0].trim() : "unknown";

    if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        { success: false, message: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, domain, honeypot } = body;

    if (honeypot && honeypot.length > 0) {
      return NextResponse.json({ success: true });
    }

    if (!email || !name) {
      return NextResponse.json(
        { success: false, message: "Name and email are required." },
        { status: 400 }
      );
    }

    const contactMessage = `Free Marketing Audit lead. Domain: ${domain || "not provided"}`;

    try {
      await createContact({
        name,
        email,
        company: domain || "",
        message: contactMessage,
        service: "Marketing Audit",
      });
    } catch (dbError) {
      console.error("Database save error (non-critical):", dbError);
    }

    try {
      await hubspotService.createContact({
        name,
        email,
        company: domain || "",
        message: contactMessage,
        service: "Marketing Audit",
      });
    } catch (hubspotError) {
      console.error("HubSpot sync error (non-critical):", hubspotError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Audit lead submission error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit." },
      { status: 500 }
    );
  }
}
