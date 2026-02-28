import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { getMarketingVideos, getAllMarketingVideos, createMarketingVideo } from "@/lib/storage";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const all = searchParams.get("all");
    const videos = all === "true" ? await getAllMarketingVideos() : await getMarketingVideos();
    return NextResponse.json(videos);
  } catch (error) {
    console.error("Error fetching marketing videos:", error);
    return NextResponse.json({ error: "Failed to fetch marketing videos" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const authError = await requireAdmin();
  if (authError) return authError;

  try {
    const body = await request.json();
    const video = await createMarketingVideo(body);
    return NextResponse.json(video, { status: 201 });
  } catch (error) {
    console.error("Error creating marketing video:", error);
    return NextResponse.json({ error: "Failed to create marketing video" }, { status: 500 });
  }
}
