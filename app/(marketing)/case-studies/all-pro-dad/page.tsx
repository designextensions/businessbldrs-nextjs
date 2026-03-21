import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import AllProDadPage from "@/components/pages/case-studies/all-pro-dad";

export const metadata: Metadata = {
  title: seoConfig.caseStudyAllProDad.title,
  description: seoConfig.caseStudyAllProDad.description,
  keywords: seoConfig.caseStudyAllProDad.keywords,
  openGraph: {
    title: seoConfig.caseStudyAllProDad.title,
    description: seoConfig.caseStudyAllProDad.description,
    images: [getOgImageUrl(seoConfig.caseStudyAllProDad.title, seoConfig.caseStudyAllProDad.description)],
  },
  alternates: { canonical: "https://businessbldrs.com/case-studies/all-pro-dad" },
};

export default function Page() {
  return <AllProDadPage />;
}
