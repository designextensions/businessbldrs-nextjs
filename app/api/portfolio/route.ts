import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { getPortfolioItems, getAllPortfolioItems, createPortfolioItem } from "@/lib/storage";

// GET - public, returns active items only (admin can pass ?all=true)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const all = searchParams.get("all");
    const items = all === "true" ? await getAllPortfolioItems() : await getPortfolioItems();
    return NextResponse.json(items);
  } catch (error) {
    console.error("Error fetching portfolio items:", error);
    return NextResponse.json({ error: "Failed to fetch portfolio items" }, { status: 500 });
  }
}

// POST - admin only
export async function POST(request: NextRequest) {
  const authError = await requireAdmin();
  if (authError) return authError;

  try {
    const body = await request.json();
    const item = await createPortfolioItem(body);
    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    console.error("Error creating portfolio item:", error);
    return NextResponse.json({ error: "Failed to create portfolio item" }, { status: 500 });
  }
}
