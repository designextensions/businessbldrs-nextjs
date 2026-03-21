import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import BreakwaterConstructionPage from "@/components/pages/breakwater-construction";

export const metadata: Metadata = {
  title: seoConfig.caseStudyBreakwater.title,
  description: seoConfig.caseStudyBreakwater.description,
  keywords: seoConfig.caseStudyBreakwater.keywords,
  openGraph: {
    title: seoConfig.caseStudyBreakwater.title,
    description: seoConfig.caseStudyBreakwater.description,
    images: [getOgImageUrl(seoConfig.caseStudyBreakwater.title, seoConfig.caseStudyBreakwater.description)],
  },
  alternates: { canonical: "https://businessbldrs.com/portfolio/breakwater-construction" },
};

export default function Page() {
  return <BreakwaterConstructionPage />;
}
