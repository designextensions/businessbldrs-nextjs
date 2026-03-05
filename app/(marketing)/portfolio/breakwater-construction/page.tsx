import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import BreakwaterConstructionPage from "@/components/pages/breakwater-construction";

export const metadata: Metadata = {
  title: seoConfig.portfolio.title,
  description: seoConfig.portfolio.description,
  keywords: seoConfig.portfolio.keywords,
  openGraph: {
    title: seoConfig.portfolio.title,
    description: seoConfig.portfolio.description,
    images: [getOgImageUrl(seoConfig.portfolio.title, seoConfig.portfolio.description)],
  },
  alternates: { canonical: "https://businessbldrs.com/portfolio/breakwater-construction" },
};

export default function Page() {
  return <BreakwaterConstructionPage />;
}
