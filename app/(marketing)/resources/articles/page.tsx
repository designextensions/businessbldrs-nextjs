import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import ArticlesPage from "@/components/pages/articles";

export const metadata: Metadata = {
  title: seoConfig.articles.title,
  description: seoConfig.articles.description,
  keywords: seoConfig.articles.keywords,
  openGraph: {
    title: seoConfig.articles.title,
    description: seoConfig.articles.description,
    images: seoConfig.articles.ogImage ? [seoConfig.articles.ogImage] : [],
  },
};

export default function Page() {
  return <ArticlesPage />;
}
