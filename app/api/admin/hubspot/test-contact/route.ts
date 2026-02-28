import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { hubspotService } from "@/lib/hubspot";

export async function POST() {
  const authError = await requireAdmin();
  if (authError) return authError;

  try {
    const timestamp = Date.now();
    const testContact = {
      name: `Test Contact ${timestamp}`,
      email: `test-${timestamp}@businessbldrs.com`,
      phone: "555-000-0000",
      company: "Test Company",
      service: "Website Design",
      message: `This is a test contact from the admin panel created at ${new Date().toISOString()}`,
    };

    const result = await hubspotService.createContact(testContact);

    return NextResponse.json({
      success: true,
      hubspotResult: result,
      testContact,
      message: result
        ? "Contact successfully sent to HubSpot!"
        : "HubSpot not configured — contact was not sent",
    });
  } catch (error) {
    console.error("HubSpot test contact error:", error);
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Failed to create test contact",
      },
      { status: 500 }
    );
  }
}
