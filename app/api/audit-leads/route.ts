import { NextRequest, NextResponse } from "next/server";
import { hubspotService } from "@/lib/hubspot";
import { createContact } from "@/lib/storage";
import { sendEmail } from "@/lib/sendgrid";

const RATE_LIMIT_MAX = 10;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_SCORE_STRING_LENGTH = 40;

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

interface PillarScore {
  label: string;
  rating: string;
}

function parseScores(raw: unknown): PillarScore[] {
  if (!Array.isArray(raw)) return [];
  const scores: PillarScore[] = [];
  for (const entry of raw) {
    if (!entry || typeof entry !== "object") continue;
    const { label, rating } = entry as Record<string, unknown>;
    if (typeof label !== "string" || typeof rating !== "string") continue;
    if (!label.trim() || !rating.trim()) continue;
    scores.push({
      label: label.trim().slice(0, MAX_SCORE_STRING_LENGTH),
      rating: rating.trim().slice(0, MAX_SCORE_STRING_LENGTH),
    });
  }
  return scores;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
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

    const scores = parseScores(body.scores);
    const weakestPillar =
      typeof body.weakestPillar === "string"
        ? body.weakestPillar.trim().slice(0, MAX_SCORE_STRING_LENGTH)
        : "";

    let contactMessage = `Free Marketing Score lead. Domain: ${domain || "not provided"}`;
    if (scores.length > 0) {
      const scoreSummary = scores.map((s) => `${s.label} ${s.rating}`).join(", ");
      contactMessage += ` | Scores: ${scoreSummary}`;
    }
    if (weakestPillar) {
      contactMessage += ` | Weakest: ${weakestPillar}`;
    }

    const synced = { db: false, hubspot: false, notified: false, resultsEmail: false };

    try {
      await createContact({
        name,
        email,
        company: domain || "",
        message: contactMessage,
        service: "Marketing Audit",
      });
      synced.db = true;
    } catch (dbError) {
      console.error("[audit-leads] DB SAVE FAILED:", dbError);
    }

    if (!hubspotService.isConfiguredPublic()) {
      console.error("[audit-leads] HUBSPOT NOT CONFIGURED - set HUBSPOT_API_KEY and HUBSPOT_PORTAL_ID");
    } else {
      try {
        const hubspotResult = await hubspotService.createContact({
          name,
          email,
          company: domain || "",
          message: contactMessage,
          service: "Marketing Audit",
        });
        synced.hubspot = hubspotResult !== null;
      } catch (hubspotError) {
        console.error("[audit-leads] HUBSPOT SYNC FAILED:", hubspotError);
      }
    }

    // Team notification email (non-blocking)
    try {
      const notifyTo = process.env.AUDIT_NOTIFICATION_EMAIL || "jay@businessbldrs.com";
      const scoreLines = scores
        .map((s) => `<p><strong>${escapeHtml(s.label)}:</strong> ${escapeHtml(s.rating)}</p>`)
        .join("");
      const scoreText = scores.map((s) => `${s.label}: ${s.rating}`).join("\n");

      synced.notified = await sendEmail({
        to: notifyTo,
        from: "noreply@businessbldrs.com",
        subject: `New Marketing Score lead: ${name}`,
        text: [
          `New Marketing Score lead`,
          `Name: ${name}`,
          `Email: ${email}`,
          `Domain: ${domain || "not provided"}`,
          scoreText,
          weakestPillar ? `Weakest pillar: ${weakestPillar}` : "",
          `Submitted: ${new Date().toLocaleString()}`,
        ]
          .filter(Boolean)
          .join("\n"),
        html: `
          <h2>New Marketing Score Lead</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Domain:</strong> ${escapeHtml(domain || "not provided")}</p>
          ${scoreLines}
          ${weakestPillar ? `<p><strong>Weakest pillar:</strong> ${escapeHtml(weakestPillar)}</p>` : ""}
          <p><em>Submitted on ${new Date().toLocaleString()}</em></p>
        `,
      });
    } catch (notifyError) {
      console.error("[audit-leads] Team notification email failed:", notifyError);
    }

    // Results email to the lead (non-blocking, only when scores exist)
    if (scores.length > 0) {
      try {
        const firstName = String(name).trim().split(" ")[0];
        const scoreRows = scores
          .map(
            (s) => `
              <tr>
                <td style="padding: 10px 12px; border-bottom: 1px solid #e5e5e5; color: #1a1a1a; font-weight: 600;">${escapeHtml(s.label)}</td>
                <td style="padding: 10px 12px; border-bottom: 1px solid #e5e5e5; color: #444444;">${escapeHtml(s.rating)}</td>
              </tr>`
          )
          .join("");

        synced.resultsEmail = await sendEmail({
          to: email,
          from: "noreply@businessbldrs.com",
          subject: "Your Marketing Scorecard from Business Builders",
          html: `
            <div style="font-family: Arial, Helvetica, sans-serif; max-width: 560px; margin: 0 auto; padding: 24px; color: #1a1a1a;">
              <h1 style="color: #1a1a1a; font-size: 24px; margin: 0 0 8px; border-bottom: 4px solid #facc15; padding-bottom: 12px;">Your Marketing Scorecard</h1>
              <p style="font-size: 16px; line-height: 1.5;">Hi ${escapeHtml(firstName)},</p>
              <p style="font-size: 16px; line-height: 1.5;">Thanks for taking the Free Marketing Score. Here are your results across the four pillars:</p>
              <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
                ${scoreRows}
              </table>
              ${
                weakestPillar
                  ? `<p style="font-size: 16px; line-height: 1.5;">The fastest way to improve your marketing is to start with your weakest pillar, ${escapeHtml(weakestPillar)}.</p>`
                  : ""
              }
              <p style="text-align: center; margin: 28px 0;">
                <a href="https://businessbldrs.com/request-quote" style="display: inline-block; background-color: #facc15; color: #1a1a1a; font-weight: 700; font-size: 16px; padding: 14px 28px; text-decoration: none; border-radius: 6px;">Talk to Our Team</a>
              </p>
              <p style="font-size: 14px; line-height: 1.5; color: #444444; text-align: center;">Want to keep learning first? Browse our <a href="https://businessbldrs.com/resources" style="color: #1a1a1a; font-weight: 600;">free resources</a>.</p>
              <p style="font-size: 14px; color: #888888; margin-top: 32px;">Business Builders</p>
            </div>
          `,
        });
      } catch (resultsError) {
        console.error("[audit-leads] Results email failed:", resultsError);
      }
    }

    return NextResponse.json({ success: true, synced });
  } catch (error) {
    console.error("Audit lead submission error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit." },
      { status: 500 }
    );
  }
}
