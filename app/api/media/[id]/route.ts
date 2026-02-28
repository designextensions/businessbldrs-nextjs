import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { getMediaAssetById, deleteMediaAsset } from "@/lib/storage";

// DELETE - admin only
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const authError = await requireAdmin();
  if (authError) return authError;

  try {
    const { id } = await params;
    const asset = await deleteMediaAsset(Number(id));
    if (!asset) {
      return NextResponse.json({ error: "Media asset not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting media asset:", error);
    return NextResponse.json({ error: "Failed to delete media asset" }, { status: 500 });
  }
}

// GET - admin only (fetch single asset)
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const authError = await requireAdmin();
  if (authError) return authError;

  try {
    const { id } = await params;
    const asset = await getMediaAssetById(Number(id));
    if (!asset) {
      return NextResponse.json({ error: "Media asset not found" }, { status: 404 });
    }
    return NextResponse.json(asset);
  } catch (error) {
    console.error("Error fetching media asset:", error);
    return NextResponse.json({ error: "Failed to fetch media asset" }, { status: 500 });
  }
}
