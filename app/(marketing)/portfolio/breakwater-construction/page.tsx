import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import BreakwaterConstructionPage from "@/components/pages/breakwater-construction";

export const metadata: Metadata = {
  title: seoConfig.portfolioBreakwater.title,
  description: seoConfig.portfolioBreakwater.description,
  keywords: seoConfig.portfolioBreakwater.keywords,
  openGraph: {
    title: seoConfig.portfolioBreakwater.title,
    description: seoConfig.portfolioBreakwater.description,
    images: [getOgImageUrl(seoConfig.portfolioBreakwater.title, seoConfig.portfolioBreakwater.description)],
  },
  alternates: { canonical: "https://businessbldrs.com/portfolio/breakwater-construction" },
};

export default function Page() {
  return <BreakwaterConstructionPage />;
}
