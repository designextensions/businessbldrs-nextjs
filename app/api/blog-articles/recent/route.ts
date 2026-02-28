import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { eq, desc } from "drizzle-orm";
import { blogArticles } from "@/lib/db/schema";

// GET - public, returns most recent published articles
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") || "6", 10);

    const articles = await db
      .select()
      .from(blogArticles)
      .where(eq(blogArticles.isPublished, true))
      .orderBy(desc(blogArticles.createdAt))
      .limit(limit);
    return NextResponse.json(articles);
  } catch (error) {
    console.error("Error fetching recent articles:", error);
    return NextResponse.json({ error: "Failed to fetch recent articles" }, { status: 500 });
  }
}
