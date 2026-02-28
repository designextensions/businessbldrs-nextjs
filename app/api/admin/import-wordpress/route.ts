import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import {
  getBlogArticleBySlug,
  createBlogArticle,
  updateBlogArticle,
} from "@/lib/storage";
import xml2js from "xml2js";

// Parse the incoming FormData and return the XML buffer
async function getXmlBuffer(request: NextRequest): Promise<Buffer | null> {
  const formData = await request.formData();
  const file = formData.get("xmlFile");
  if (!file || typeof file === "string") return null;
  const arrayBuffer = await (file as File).arrayBuffer();
  return Buffer.from(arrayBuffer);
}

export async function POST(request: NextRequest) {
  const authError = await requireAdmin();
  if (authError) return authError;

  try {
    const buffer = await getXmlBuffer(request);

    if (!buffer) {
      return NextResponse.json(
        { success: false, message: "No XML file provided. Please ensure you selected a file." },
        { status: 400 }
      );
    }

    const xmlContent = buffer.toString("utf8");
    const parser = new xml2js.Parser({
      explicitArray: false,
      trim: true,
      normalize: true,
      normalizeTags: true,
      ignoreAttrs: false,
    });

    const result = await parser.parseStringPromise(xmlContent);
    const items = result?.rss?.channel?.item;

    if (!items) {
      return NextResponse.json(
        { success: false, message: "No articles found in XML file" },
        { status: 400 }
      );
    }

    const itemsArray: any[] = Array.isArray(items) ? items : [items];
    let imported = 0;
    let skipped = 0;

    for (const item of itemsArray) {
      try {
        // Only import published posts
        if (item["wp:status"] !== "publish" || item["wp:post_type"] !== "post") {
          skipped++;
          continue;
        }

        const title = item.title || "Untitled";
        let content = "";

        if (item["content:encoded"]) {
          content = item["content:encoded"];
        } else if (item.description) {
          content = item.description;
        } else if (item["excerpt:encoded"]) {
          content = item["excerpt:encoded"];
        }

        if (Array.isArray(content)) {
          content = content[0] || "";
        }
        content = String(content || "");

        const rawExcerpt =
          item["excerpt:encoded"] ||
          item.description ||
          content.replace(/<[^>]*>/g, "").substring(0, 200) + "...";
        const excerpt = String(Array.isArray(rawExcerpt) ? rawExcerpt[0] : rawExcerpt || "");

        const author = String(item["dc:creator"] || "Unknown Author");
        const dateRaw = item.pubdate || item["wp:post_date"] || new Date().toISOString();
        const pubDate = new Date(dateRaw).toISOString();
        const slug = String(
          item["wp:post_name"] ||
            title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-|-$/g, "")
        );

        // Extract categories
        const categories = item.category;
        let category = "General";
        if (categories) {
          if (Array.isArray(categories)) {
            const found = categories.find(
              (cat: any) => cat.$ && cat.$.domain === "category"
            );
            category = found?._ || categories[0]?._ || categories[0] || "General";
          } else if (typeof categories === "object" && categories._) {
            category = categories._;
          } else if (typeof categories === "string") {
            category = categories;
          }
        }

        const wordCount = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
        const readTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;

        const articleData = {
          title: title.substring(0, 255),
          excerpt: excerpt.substring(0, 500) ||
            content.replace(/<[^>]*>/g, "").substring(0, 200) + "...",
          author: author.substring(0, 100),
          date: pubDate.split("T")[0],
          readTime,
          category: category.substring(0, 50),
          image: "/images/blog-placeholder.jpg",
          content,
          slug: slug.substring(0, 255),
          isPublished: true,
        };

        const existingArticle = await getBlogArticleBySlug(slug);
        if (existingArticle) {
          await updateBlogArticle(existingArticle.id, articleData);
        } else {
          await createBlogArticle(articleData);
        }
        imported++;
      } catch (error) {
        console.error("Error importing article:", item.title, error);
        skipped++;
      }
    }

    return NextResponse.json({
      success: true,
      imported,
      skipped,
      total: itemsArray.length,
    });
  } catch (error) {
    console.error("WordPress XML Import Error:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "Failed to import WordPress XML",
      },
      { status: 500 }
    );
  }
}
