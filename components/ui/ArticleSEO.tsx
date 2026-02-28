"use client";

// In Next.js, article meta tags are handled by generateMetadata() in
// app/(marketing)/resources/articles/[slug]/page.tsx.
// This stub is kept for import compatibility.

import type { BlogArticle } from "@/lib/db/schema";

interface ArticleSEOProps {
  article: BlogArticle;
}

export default function ArticleSEO(_props: ArticleSEOProps) {
  return null;
}
