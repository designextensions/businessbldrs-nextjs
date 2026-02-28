import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import {
  getFormSubmissions,
  getFormSubmissionsByFormId,
  createFormSubmission,
  getForms,
} from "@/lib/storage";
import { sendEmail } from "@/lib/sendgrid";

// ─── GET - admin only ─────────────────────────────────────────────────────────

export async function GET(request: NextRequest) {
  const authError = await requireAdmin();
  if (authError) return authError;

  try {
    const { searchParams } = new URL(request.url);
    const formId = searchParams.get("formId");

    const submissions = formId
      ? await getFormSubmissionsByFormId(Number(formId))
      : await getFormSubmissions();

    return NextResponse.json(submissions);
  } catch (error) {
    console.error("Error fetching form submissions:", error);
    return NextResponse.json({ error: "Failed to fetch form submissions" }, { status: 500 });
  }
}

// ─── POST - public ────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    const forwarded = request.headers.get("x-forwarded-for");
    const clientIp = forwarded ? forwarded.split(",")[0].trim() : undefined;
    const userAgent = request.headers.get("user-agent") ?? undefined;

    const body = await request.json();
    const {
      formSlug,
      submissionData,
      submitterName,
      submitterEmail,
      source = "website",
    } = body;

    if (!formSlug || !submissionData) {
      return NextResponse.json(
        { success: false, message: "formSlug and submissionData are required" },
        { status: 400 }
      );
    }

    // Look up the form by slug to get its ID and notification settings
    const forms = await getForms();
    const form = forms.find((f) => f.slug === formSlug);

    if (!form) {
      return NextResponse.json(
        { success: false, message: "Form not found" },
        { status: 404 }
      );
    }

    const submission = await createFormSubmission({
      formId: form.id,
      formSlug,
      submissionData,
      submitterName: submitterName ?? null,
      submitterEmail: submitterEmail ?? null,
      ipAddress: clientIp ?? null,
      userAgent: userAgent ?? null,
      isProcessed: false,
    });

    // Send email notification (non-blocking)
    if (form.notificationEmail) {
      try {
        const dataLines = Object.entries(submissionData as Record<string, unknown>)
          .map(([k, v]) => `<p><strong>${k}:</strong> ${v}</p>`)
          .join("");

        await sendEmail({
          to: form.notificationEmail,
          from: "noreply@businessbldrs.com",
          subject: `New submission: ${form.name}`,
          html: `
            <h2>New Form Submission — ${form.name}</h2>
            ${submitterName ? `<p><strong>Name:</strong> ${submitterName}</p>` : ""}
            ${submitterEmail ? `<p><strong>Email:</strong> ${submitterEmail}</p>` : ""}
            ${dataLines}
            <p><em>Submitted on ${new Date().toLocaleString()}</em></p>
          `,
        });
      } catch (emailError) {
        console.error("Failed to send form notification email:", emailError);
        // Do not fail the request on email error
      }
    }

    return NextResponse.json({ success: true, id: submission.id }, { status: 201 });
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process form submission" },
      { status: 500 }
    );
  }
}
