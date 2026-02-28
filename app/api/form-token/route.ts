import { NextResponse } from "next/server";
import { createHmac, randomUUID } from "crypto";

const TOKEN_SECRET = process.env.FORM_TOKEN_SECRET || process.env.SESSION_SECRET || "fallback-secret";

/**
 * GET /api/form-token
 *
 * Generates a short-lived HMAC-SHA256 signed token used by public contact forms
 * to prove the form was loaded from the browser (not submitted programmatically).
 *
 * Token format (base64-encoded): `<nonce>:<timestamp>:<hmac-sha256-signature>`
 *
 * The server validates:
 *  - Presence and structure of the token
 *  - The HMAC signature matches (proves server issued it)
 *  - The timestamp is within the allowed window (1 hour)
 */
export async function GET() {
  try {
    const nonce = randomUUID();
    const timestamp = Date.now().toString();
    const signature = createHmac("sha256", TOKEN_SECRET)
      .update(`${nonce}:${timestamp}`)
      .digest("hex");

    const raw = `${nonce}:${timestamp}:${signature}`;
    const token = Buffer.from(raw).toString("base64");

    return NextResponse.json({ token });
  } catch (error) {
    console.error("Error generating form token:", error);
    return NextResponse.json({ error: "Failed to generate token" }, { status: 500 });
  }
}
