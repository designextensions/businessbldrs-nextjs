import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import StorybrandAgencyPage from "@/components/pages/storybrand-agency";

export const metadata: Metadata = {
  title: seoConfig.storybrandAgency.title,
  description: seoConfig.storybrandAgency.description,
  keywords: seoConfig.storybrandAgency.keywords,
  openGraph: {
    title: seoConfig.storybrandAgency.title,
    description: seoConfig.storybrandAgency.description,
    images: seoConfig.storybrandAgency.ogImage ? [seoConfig.storybrandAgency.ogImage] : [],
  },
  alternates: { canonical: "https://businessbldrs.com/storybrand-agency" },
};

export default function Page() {
  return <StorybrandAgencyPage />;
}
