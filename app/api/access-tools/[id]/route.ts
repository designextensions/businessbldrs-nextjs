import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import {
  getAccessToolById,
  updateAccessTool,
  deleteAccessTool,
} from "@/lib/storage";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const tool = await getAccessToolById(Number(id));
    if (!tool) {
      return NextResponse.json({ error: "Access tool not found" }, { status: 404 });
    }
    return NextResponse.json(tool);
  } catch (error) {
    console.error("Error fetching access tool:", error);
    return NextResponse.json({ error: "Failed to fetch access tool" }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const authError = await requireAdmin();
  if (authError) return authError;

  try {
    const { id } = await params;
    const body = await request.json();
    const tool = await updateAccessTool(Number(id), body);
    if (!tool) {
      return NextResponse.json({ error: "Access tool not found" }, { status: 404 });
    }
    return NextResponse.json(tool);
  } catch (error) {
    console.error("Error updating access tool:", error);
    return NextResponse.json({ error: "Failed to update access tool" }, { status: 500 });
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const authError = await requireAdmin();
  if (authError) return authError;

  try {
    const { id } = await params;
    await deleteAccessTool(Number(id));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting access tool:", error);
    return NextResponse.json({ error: "Failed to delete access tool" }, { status: 500 });
  }
}
