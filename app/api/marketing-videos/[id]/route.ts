import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { getMarketingVideoById, updateMarketingVideo, deleteMarketingVideo } from "@/lib/storage";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const video = await getMarketingVideoById(Number(id));
    if (!video) {
      return NextResponse.json({ error: "Video not found" }, { status: 404 });
    }
    return NextResponse.json(video);
  } catch (error) {
    console.error("Error fetching marketing video:", error);
    return NextResponse.json({ error: "Failed to fetch marketing video" }, { status: 500 });
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
    const video = await updateMarketingVideo(Number(id), body);
    if (!video) {
      return NextResponse.json({ error: "Video not found" }, { status: 404 });
    }
    return NextResponse.json(video);
  } catch (error) {
    console.error("Error updating marketing video:", error);
    return NextResponse.json({ error: "Failed to update marketing video" }, { status: 500 });
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
    await deleteMarketingVideo(Number(id));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting marketing video:", error);
    return NextResponse.json({ error: "Failed to delete marketing video" }, { status: 500 });
  }
}
