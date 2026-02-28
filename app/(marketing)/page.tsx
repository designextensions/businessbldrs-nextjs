import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import HomePage from "@/components/pages/home";

export const metadata: Metadata = {
  title: seoConfig.home.title,
  description: seoConfig.home.description,
  keywords: seoConfig.home.keywords,
  openGraph: {
    title: seoConfig.home.title,
    description: seoConfig.home.description,
    images: seoConfig.home.ogImage ? [seoConfig.home.ogImage] : [],
  },
};

export default function Page() {
  return <HomePage />;
}
