import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import MaintenancePage from "@/components/pages/maintenance";

export const metadata: Metadata = {
  title: seoConfig.websiteDesign.title,
  description: seoConfig.websiteDesign.description,
  keywords: seoConfig.websiteDesign.keywords,
  openGraph: {
    title: seoConfig.websiteDesign.title,
    description: seoConfig.websiteDesign.description,
    images: [getOgImageUrl(seoConfig.websiteDesign.title, seoConfig.websiteDesign.description)],
  },
  alternates: { canonical: "https://businessbldrs.com/maintenance" },
};

export default function Page() {
  return <MaintenancePage />;
}
