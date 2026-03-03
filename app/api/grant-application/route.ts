import { NextRequest, NextResponse } from "next/server";
import { hubspotService } from "@/lib/hubspot";
import { createContact } from "@/lib/storage";
import { sendEmail } from "@/lib/sendgrid";

const RATE_LIMIT_MAX = 5;
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
    const {
      organizationName,
      contactName,
      contactEmail,
      contactPhone,
      organizationType,
      ein,
      website,
      yearFounded,
      missionStatement,
      annualBudget,
      currentMarketingEfforts,
      whyTheyNeedGrant,
      howTheyHeardAboutUs,
      honeypot,
    } = body;

    if (honeypot && honeypot.length > 0) {
      return NextResponse.json({ success: true });
    }

    if (!contactEmail || !contactName || !organizationName || !organizationType || !missionStatement || !whyTheyNeedGrant) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const contactMessage = [
      `Nonprofit Grant Application`,
      `Organization: ${organizationName}`,
      `Type: ${organizationType}`,
      ein ? `EIN: ${ein}` : null,
      website ? `Website: ${website}` : null,
      yearFounded ? `Year Founded: ${yearFounded}` : null,
      annualBudget ? `Annual Budget: ${annualBudget}` : null,
      `Mission Statement: ${missionStatement}`,
      currentMarketingEfforts ? `Current Marketing: ${currentMarketingEfforts}` : null,
      `Why They Need Grant: ${whyTheyNeedGrant}`,
      howTheyHeardAboutUs ? `Heard About Us: ${howTheyHeardAboutUs}` : null,
    ].filter(Boolean).join("\n");

    try {
      await createContact({
        name: contactName,
        email: contactEmail,
        phone: contactPhone || "",
        company: organizationName,
        message: contactMessage,
        service: "Nonprofit Grant Application",
      });
    } catch (dbError) {
      console.error("Database save error (non-critical):", dbError);
    }

    try {
      await hubspotService.createContact({
        name: contactName,
        email: contactEmail,
        phone: contactPhone || "",
        company: organizationName,
        message: contactMessage,
        service: "Nonprofit Grant Application",
      });
    } catch (hubspotError) {
      console.error("HubSpot sync error (non-critical):", hubspotError);
    }

    try {
      const adminEmails = process.env.ADMIN_EMAILS || "";
      const primaryAdmin = adminEmails.split(",")[0]?.trim();
      if (primaryAdmin) {
        await sendEmail({
          to: primaryAdmin,
          from: "noreply@businessbldrs.com",
          subject: `New Nonprofit Grant Application: ${organizationName}`,
          html: `
            <h2>New Nonprofit Grant Application</h2>
            <hr />
            <h3>Organization Details</h3>
            <p><strong>Organization Name:</strong> ${organizationName}</p>
            <p><strong>Organization Type:</strong> ${organizationType}</p>
            ${ein ? `<p><strong>EIN / Tax ID:</strong> ${ein}</p>` : ""}
            ${website ? `<p><strong>Website:</strong> ${website}</p>` : ""}
            ${yearFounded ? `<p><strong>Year Founded:</strong> ${yearFounded}</p>` : ""}
            ${annualBudget ? `<p><strong>Annual Budget:</strong> ${annualBudget}</p>` : ""}
            <h3>Contact Information</h3>
            <p><strong>Name:</strong> ${contactName}</p>
            <p><strong>Email:</strong> ${contactEmail}</p>
            ${contactPhone ? `<p><strong>Phone:</strong> ${contactPhone}</p>` : ""}
            <h3>Application Details</h3>
            <p><strong>Mission Statement:</strong></p>
            <p>${missionStatement}</p>
            ${currentMarketingEfforts ? `<p><strong>Current Marketing Efforts:</strong></p><p>${currentMarketingEfforts}</p>` : ""}
            <p><strong>Why They Need This Grant:</strong></p>
            <p>${whyTheyNeedGrant}</p>
            ${howTheyHeardAboutUs ? `<p><strong>How They Heard About Us:</strong> ${howTheyHeardAboutUs}</p>` : ""}
            <hr />
            <p><em>Submitted on ${new Date().toLocaleString()}</em></p>
          `,
        });
      }
    } catch (emailError) {
      console.error("Email notification error (non-critical):", emailError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Grant application error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
