import type { Metadata } from "next";
import { db } from "@/lib/db";
import { blogArticles } from "@/lib/db/schema";
import { and, eq } from "drizzle-orm";
import ArticlePage from "@/components/pages/article";
import { notFound } from "next/navigation";
import { getOgImageUrl } from "@/lib/og-utils";

export const dynamicParams = true;

const BASE_URL = "https://businessbldrs.com";

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
    alternates: { canonical: `${BASE_URL}/resources/articles/${slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      images: article.image ? [article.image] : [getOgImageUrl(article.title, article.excerpt || "")],
    },
  };
}

function buildArticleJsonLd(article: {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  slug: string;
}) {
  const pageUrl = `${BASE_URL}/resources/articles/${article.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "image": article.image || `${BASE_URL}/og-image.png`,
    "datePublished": article.date,
    "dateModified": article.date,
    "author": {
      "@type": "Person",
      "name": article.author || "Business Builders",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Business Builders",
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/logo-full.png`,
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    "url": pageUrl,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getPublishedArticleBySlug(slug);
  if (!article) {
    notFound();
  }

  const articleJsonLd = buildArticleJsonLd(article);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ArticlePage article={article} />
    </>
  );
}
