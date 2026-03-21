import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import HinesPage from "@/components/pages/case-studies/hines";

export const metadata: Metadata = {
  title: seoConfig.caseStudyHines.title,
  description: seoConfig.caseStudyHines.description,
  keywords: seoConfig.caseStudyHines.keywords,
  openGraph: {
    title: seoConfig.caseStudyHines.title,
    description: seoConfig.caseStudyHines.description,
    images: [getOgImageUrl(seoConfig.caseStudyHines.title, seoConfig.caseStudyHines.description)],
  },
  alternates: { canonical: "https://businessbldrs.com/case-studies/hines" },
};

export default function Page() {
  return <HinesPage />;
}
