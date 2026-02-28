import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import {
  getDownloadableResourceById,
  updateDownloadableResource,
  deleteDownloadableResource,
} from "@/lib/storage";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const resource = await getDownloadableResourceById(Number(id));
    if (!resource) {
      return NextResponse.json({ error: "Resource not found" }, { status: 404 });
    }
    return NextResponse.json(resource);
  } catch (error) {
    console.error("Error fetching downloadable resource:", error);
    return NextResponse.json({ error: "Failed to fetch downloadable resource" }, { status: 500 });
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
    const resource = await updateDownloadableResource(Number(id), body);
    if (!resource) {
      return NextResponse.json({ error: "Resource not found" }, { status: 404 });
    }
    return NextResponse.json(resource);
  } catch (error) {
    console.error("Error updating downloadable resource:", error);
    return NextResponse.json({ error: "Failed to update downloadable resource" }, { status: 500 });
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
    await deleteDownloadableResource(Number(id));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting downloadable resource:", error);
    return NextResponse.json({ error: "Failed to delete downloadable resource" }, { status: 500 });
  }
}
