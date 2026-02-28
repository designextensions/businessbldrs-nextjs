import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import WebsiteDesignPage from "@/components/pages/website-design";

export const metadata: Metadata = {
  title: seoConfig.websiteDesign.title,
  description: seoConfig.websiteDesign.description,
  keywords: seoConfig.websiteDesign.keywords,
  openGraph: {
    title: seoConfig.websiteDesign.title,
    description: seoConfig.websiteDesign.description,
    images: seoConfig.websiteDesign.ogImage ? [seoConfig.websiteDesign.ogImage] : [],
  },
};

export default function Page() {
  return <WebsiteDesignPage />;
}
