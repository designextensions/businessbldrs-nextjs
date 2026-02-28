import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import WebsiteTrainingPage from "@/components/pages/website-training";

export const metadata: Metadata = {
  title: seoConfig.resources.title,
  description: seoConfig.resources.description,
  keywords: seoConfig.resources.keywords,
  openGraph: {
    title: seoConfig.resources.title,
    description: seoConfig.resources.description,
    images: seoConfig.resources.ogImage ? [seoConfig.resources.ogImage] : [],
  },
};

export default function Page() {
  return <WebsiteTrainingPage />;
}
