import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import MaintenancePage from "@/components/pages/maintenance";

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
  return <MaintenancePage />;
}
