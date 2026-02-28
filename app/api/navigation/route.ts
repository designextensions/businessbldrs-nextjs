import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { getNavigationItems, getAllNavigationItems, createNavigationItem } from "@/lib/storage";

// GET - public, returns visible items only (admin can pass ?all=true)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const all = searchParams.get("all");
    const items = all === "true" ? await getAllNavigationItems() : await getNavigationItems();
    return NextResponse.json(items);
  } catch (error) {
    console.error("Error fetching navigation items:", error);
    return NextResponse.json({ error: "Failed to fetch navigation items" }, { status: 500 });
  }
}

// POST - admin only
export async function POST(request: NextRequest) {
  const authError = await requireAdmin();
  if (authError) return authError;

  try {
    const body = await request.json();
    const item = await createNavigationItem(body);
    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    console.error("Error creating navigation item:", error);
    return NextResponse.json({ error: "Failed to create navigation item" }, { status: 500 });
  }
}
