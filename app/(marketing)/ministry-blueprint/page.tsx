import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import MinistryBlueprintPage from "@/components/pages/ministry-blueprint";

export const metadata: Metadata = {
  title: seoConfig.resources.title,
  description: seoConfig.resources.description,
  keywords: seoConfig.resources.keywords,
  openGraph: {
    title: seoConfig.resources.title,
    description: seoConfig.resources.description,
    images: seoConfig.resources.ogImage ? [seoConfig.resources.ogImage] : [],
  },
  alternates: { canonical: "https://businessbldrs.com/ministry-blueprint" },
};

export default function Page() {
  return <MinistryBlueprintPage />;
}
