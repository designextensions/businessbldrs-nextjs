import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import {
  getNavigationItemById,
  updateNavigationItem,
  deleteNavigationItem,
} from "@/lib/storage";

// GET - public
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const item = await getNavigationItemById(Number(id));
    if (!item) {
      return NextResponse.json({ error: "Navigation item not found" }, { status: 404 });
    }
    return NextResponse.json(item);
  } catch (error) {
    console.error("Error fetching navigation item:", error);
    return NextResponse.json({ error: "Failed to fetch navigation item" }, { status: 500 });
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
    const item = await updateNavigationItem(Number(id), body);
    if (!item) {
      return NextResponse.json({ error: "Navigation item not found" }, { status: 404 });
    }
    return NextResponse.json(item);
  } catch (error) {
    console.error("Error updating navigation item:", error);
    return NextResponse.json({ error: "Failed to update navigation item" }, { status: 500 });
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
    const item = await deleteNavigationItem(Number(id));
    if (!item) {
      return NextResponse.json({ error: "Navigation item not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting navigation item:", error);
    return NextResponse.json({ error: "Failed to delete navigation item" }, { status: 500 });
  }
}
