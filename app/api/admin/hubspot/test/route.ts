import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { hubspotService } from "@/lib/hubspot";

export async function GET() {
  const authError = await requireAdmin();
  if (authError) return authError;

  try {
    const configured = hubspotService.isConfiguredPublic();

    if (!configured) {
      return NextResponse.json({
        success: true,
        connected: false,
        status: "not_configured",
        message: "HubSpot API key not configured",
      });
    }

    const isConnected = await hubspotService.testConnection();

    return NextResponse.json({
      success: true,
      connected: isConnected,
      status: isConnected ? "connected" : "error",
      message: isConnected
        ? "HubSpot connection successful"
        : "HubSpot connection failed — check API key",
    });
  } catch (error) {
    console.error("HubSpot connection test error:", error);
    return NextResponse.json(
      {
        success: false,
        connected: false,
        status: "error",
        message: error instanceof Error ? error.message : "HubSpot connection test failed",
      },
      { status: 500 }
    );
  }
}
