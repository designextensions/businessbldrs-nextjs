import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import RulonInternationalPage from "@/components/pages/case-studies/rulon-international";

export const metadata: Metadata = {
  title: seoConfig.caseStudyRulon.title,
  description: seoConfig.caseStudyRulon.description,
  keywords: seoConfig.caseStudyRulon.keywords,
  openGraph: {
    title: seoConfig.caseStudyRulon.title,
    description: seoConfig.caseStudyRulon.description,
    images: [getOgImageUrl(seoConfig.caseStudyRulon.title, seoConfig.caseStudyRulon.description)],
  },
  alternates: { canonical: "https://businessbldrs.com/case-studies/rulon-international" },
};

export default function Page() {
  return <RulonInternationalPage />;
}
