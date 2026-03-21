import type { Metadata } from "next";
import { db } from "@/lib/db";
import { blogArticles } from "@/lib/db/schema";
import { and, eq } from "drizzle-orm";
import ArticlePage from "@/components/pages/article";
import { notFound } from "next/navigation";
import { getOgImageUrl } from "@/lib/og-utils";
import { getArticleSchema, getArticleVideoSchemas } from "@/lib/seo-config";

export const dynamicParams = true;

async function getPublishedArticleBySlug(slug: string) {
  return db.query.blogArticles.findFirst({
    where: and(
      eq(blogArticles.slug, slug),
      eq(blogArticles.isPublished, true),
    ),
  });
}

async function getPublishedArticleSlugs() {
  return db
    .select({ slug: blogArticles.slug })
    .from(blogArticles)
    .where(eq(blogArticles.isPublished, true));
}

export async function generateStaticParams() {
  const articles = await getPublishedArticleSlugs();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = await getPublishedArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `https://businessbldrs.com/resources/articles/${slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      images: article.image ? [article.image] : [getOgImageUrl(article.title, article.excerpt || "")],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getPublishedArticleBySlug(slug);
  if (!article) {
    notFound();
  }

  const articleJsonLd = getArticleSchema({
    title: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: article.date,
    slug: article.slug,
    author: article.author,
  });

  const videoSchemas = getArticleVideoSchemas({
    title: article.title,
    description: article.excerpt,
    datePublished: article.date,
    content: article.content ?? undefined,
  });

  let jsonLd;
  if (videoSchemas.length > 0) {
    const { "@context": _ctx, ...articleWithoutContext } = articleJsonLd;
    jsonLd = { "@context": "https://schema.org", "@graph": [articleWithoutContext, ...videoSchemas] };
  } else {
    jsonLd = articleJsonLd;
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ArticlePage article={article} />
    </>
  );
}
