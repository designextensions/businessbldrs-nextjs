import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { getPortfolioItemById, updatePortfolioItem, deletePortfolioItem } from "@/lib/storage";

// GET - public
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const item = await getPortfolioItemById(Number(id));
    if (!item) {
      return NextResponse.json({ error: "Portfolio item not found" }, { status: 404 });
    }
    return NextResponse.json(item);
  } catch (error) {
    console.error("Error fetching portfolio item:", error);
    return NextResponse.json({ error: "Failed to fetch portfolio item" }, { status: 500 });
  }
}

// PUT - admin only
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const authError = await requireAdmin();
  if (authError) return authError;

  try {
    const { id } = await params;
    const body = await request.json();
    const item = await updatePortfolioItem(Number(id), body);
    if (!item) {
      return NextResponse.json({ error: "Portfolio item not found" }, { status: 404 });
    }
    return NextResponse.json(item);
  } catch (error) {
    console.error("Error updating portfolio item:", error);
    return NextResponse.json({ error: "Failed to update portfolio item" }, { status: 500 });
  }
}

// DELETE - admin only
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const authError = await requireAdmin();
  if (authError) return authError;

  try {
    const { id } = await params;
    const item = await deletePortfolioItem(Number(id));
    if (!item) {
      return NextResponse.json({ error: "Portfolio item not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting portfolio item:", error);
    return NextResponse.json({ error: "Failed to delete portfolio item" }, { status: 500 });
  }
}
