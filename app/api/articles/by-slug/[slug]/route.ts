import { NextRequest, NextResponse } from "next/server";
import { getBlogArticleBySlug } from "@/lib/storage";

// GET - public
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const article = await getBlogArticleBySlug(slug);
    if (!article) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 });
    }
    return NextResponse.json(article);
  } catch (error) {
    console.error("Error fetching article by slug:", error);
    return NextResponse.json({ error: "Failed to fetch article" }, { status: 500 });
  }
}
