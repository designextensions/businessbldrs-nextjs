import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { eq, and, desc } from "drizzle-orm";
import { blogArticles } from "@/lib/db/schema";

// GET - public, returns featured published articles
export async function GET() {
  try {
    const articles = await db
      .select()
      .from(blogArticles)
      .where(and(eq(blogArticles.isPublished, true), eq(blogArticles.isFeatured, true)))
      .orderBy(desc(blogArticles.createdAt))
      .limit(6);
    return NextResponse.json(articles);
  } catch (error) {
    console.error("Error fetching featured articles:", error);
    return NextResponse.json({ error: "Failed to fetch featured articles" }, { status: 500 });
  }
}
