import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import MinistryBlueprintPage from "@/components/pages/ministry-blueprint";

export const metadata: Metadata = {
  title: seoConfig.ministryBlueprint.title,
  description: seoConfig.ministryBlueprint.description,
  keywords: seoConfig.ministryBlueprint.keywords,
  openGraph: {
    title: seoConfig.ministryBlueprint.title,
    description: seoConfig.ministryBlueprint.description,
    images: [getOgImageUrl(seoConfig.ministryBlueprint.title, seoConfig.ministryBlueprint.description)],
  },
  alternates: { canonical: "https://businessbldrs.com/ministry-blueprint" },
};

export default function Page() {
  return <MinistryBlueprintPage />;
}
