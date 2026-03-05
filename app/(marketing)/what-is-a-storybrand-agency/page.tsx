import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import WhatIsAStorybrandAgencyPage from "@/components/pages/what-is-a-storybrand-agency";

export const metadata: Metadata = {
  title: seoConfig.whatIsAStorybrandAgency.title,
  description: seoConfig.whatIsAStorybrandAgency.description,
  keywords: seoConfig.whatIsAStorybrandAgency.keywords,
  openGraph: {
    images: [getOgImageUrl(seoConfig.whatIsAStorybrandAgency.title, seoConfig.whatIsAStorybrandAgency.description)],
    title: seoConfig.whatIsAStorybrandAgency.title,
    description: seoConfig.whatIsAStorybrandAgency.description,
  },
  alternates: { canonical: "https://businessbldrs.com/what-is-a-storybrand-agency" },
};

export default function Page() {
  return <WhatIsAStorybrandAgencyPage />;
}
