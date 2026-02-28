import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { getPortfolioItems, createPortfolioItem, updatePortfolioItem } from "@/lib/storage";
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
        { success: false, message: "No items found in XML file" },
        { status: 400 }
      );
    }

    const itemsArray: any[] = Array.isArray(items) ? items : [items];
    let imported = 0;
    let skipped = 0;

    // Build attachment map: postId -> imageUrl
    const attachmentMap = new Map<string, string>();
    itemsArray
      .filter((item) => item["wp:post_type"] === "attachment")
      .forEach((attachment) => {
        const postId = attachment["wp:post_id"];
        const attachmentUrl = attachment["wp:attachment_url"];
        if (postId && attachmentUrl) {
          attachmentMap.set(String(postId), String(attachmentUrl));
        }
      });

    // Filter for published portfolio items only
    const portfolioItems = itemsArray.filter(
      (item) =>
        item["wp:post_type"] === "portfolio" && item["wp:status"] === "publish"
    );

    console.log(`Found ${portfolioItems.length} portfolio items in XML`);

    for (const item of portfolioItems) {
      try {
        const title = String(item.title || "Untitled Portfolio Item");
        const slug = String(
          item["wp:post_name"] ||
            title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-|-$/g, "")
        );

        // Extract portfolio URL from postmeta
        let portfolioUrl = "";
        if (item["wp:postmeta"]) {
          const postmeta = Array.isArray(item["wp:postmeta"])
            ? item["wp:postmeta"]
            : [item["wp:postmeta"]];
          const linkMeta = postmeta.find(
            (meta: any) => meta["wp:meta_key"] === "link"
          );
          if (linkMeta) {
            portfolioUrl = String(linkMeta["wp:meta_value"] || "");
          }
        }

        // Extract categories
        let categories: string[] = ["Web"];
        if (item.category) {
          const categoryData = Array.isArray(item.category)
            ? item.category
            : [item.category];
          const portfolioCategories = categoryData.filter(
            (cat: any) => cat.$ && cat.$.domain === "portfolio_category"
          );
          if (portfolioCategories.length > 0) {
            categories = portfolioCategories.map((cat: any) => String(cat._));
          }
        }

        // Find thumbnail image from attachment map
        let imageUrl = "/images/portfolio-placeholder.jpg";
        if (item["wp:postmeta"]) {
          const postmeta = Array.isArray(item["wp:postmeta"])
            ? item["wp:postmeta"]
            : [item["wp:postmeta"]];
          const thumbnailMeta = postmeta.find(
            (meta: any) => meta["wp:meta_key"] === "_thumbnail_id"
          );
          if (thumbnailMeta && thumbnailMeta["wp:meta_value"]) {
            const thumbnailId = String(thumbnailMeta["wp:meta_value"]);
            const originalImageUrl = attachmentMap.get(thumbnailId);
            if (originalImageUrl) {
              // Use the original WordPress image URL directly
              // (no local download in Next.js — rely on next/image remote patterns or store as-is)
              imageUrl = originalImageUrl;
            }
          }
        }

        const portfolioData = {
          title: title.substring(0, 255),
          image: imageUrl,
          url: portfolioUrl,
          categories,
          serviceType: (categories[0] || "web").toLowerCase(),
          description: `Portfolio project: ${title}`,
          clientName: title,
          featured: false,
          orderIndex: imported + 1,
          isActive: true,
        };

        // Check if portfolio item already exists by title or URL
        const existingItems = await getPortfolioItems();
        const existingItem = existingItems.find(
          (p) =>
            p.title === title || (portfolioUrl && p.url === portfolioUrl)
        );

        if (existingItem) {
          await updatePortfolioItem(existingItem.id, portfolioData);
        } else {
          await createPortfolioItem(portfolioData);
        }
        imported++;
      } catch (error) {
        console.error("Error importing portfolio item:", item.title, error);
        skipped++;
      }
    }

    return NextResponse.json({
      success: true,
      imported,
      skipped,
      total: portfolioItems.length,
    });
  } catch (error) {
    console.error("Portfolio XML Import Error:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Failed to import WordPress portfolio XML",
      },
      { status: 500 }
    );
  }
}
