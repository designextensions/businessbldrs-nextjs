import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import {
  getDownloadableResources,
  getAllDownloadableResources,
  createDownloadableResource,
} from "@/lib/storage";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const all = searchParams.get("all");
    const resources =
      all === "true"
        ? await getAllDownloadableResources()
        : await getDownloadableResources();
    return NextResponse.json(resources);
  } catch (error) {
    console.error("Error fetching downloadable resources:", error);
    return NextResponse.json({ error: "Failed to fetch downloadable resources" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const authError = await requireAdmin();
  if (authError) return authError;

  try {
    const body = await request.json();
    const resource = await createDownloadableResource(body);
    return NextResponse.json(resource, { status: 201 });
  } catch (error) {
    console.error("Error creating downloadable resource:", error);
    return NextResponse.json({ error: "Failed to create downloadable resource" }, { status: 500 });
  }
}
