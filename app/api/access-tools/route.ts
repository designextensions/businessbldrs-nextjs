import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import {
  getAccessTools,
  getAllAccessTools,
  createAccessTool,
} from "@/lib/storage";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const all = searchParams.get("all");
    const tools = all === "true" ? await getAllAccessTools() : await getAccessTools();
    return NextResponse.json(tools);
  } catch (error) {
    console.error("Error fetching access tools:", error);
    return NextResponse.json({ error: "Failed to fetch access tools" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const authError = await requireAdmin();
  if (authError) return authError;

  try {
    const body = await request.json();
    const tool = await createAccessTool(body);
    return NextResponse.json(tool, { status: 201 });
  } catch (error) {
    console.error("Error creating access tool:", error);
    return NextResponse.json({ error: "Failed to create access tool" }, { status: 500 });
  }
}
