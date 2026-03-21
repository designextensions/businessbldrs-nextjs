import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import BozardFordLincolnPage from "@/components/pages/case-studies/bozard-ford-lincoln";

export const metadata: Metadata = {
  title: seoConfig.caseStudyBozard.title,
  description: seoConfig.caseStudyBozard.description,
  keywords: seoConfig.caseStudyBozard.keywords,
  openGraph: {
    title: seoConfig.caseStudyBozard.title,
    description: seoConfig.caseStudyBozard.description,
    images: [getOgImageUrl(seoConfig.caseStudyBozard.title, seoConfig.caseStudyBozard.description)],
  },
  alternates: { canonical: "https://businessbldrs.com/case-studies/bozard-ford-lincoln" },
};

export default function Page() {
  return <BozardFordLincolnPage />;
}
