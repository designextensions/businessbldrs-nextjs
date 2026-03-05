import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import WhatIsStorybrandPage from "@/components/pages/what-is-storybrand";

export const metadata: Metadata = {
  title: seoConfig.whatIsStorybrand.title,
  description: seoConfig.whatIsStorybrand.description,
  keywords: seoConfig.whatIsStorybrand.keywords,
  openGraph: {
    images: [getOgImageUrl(seoConfig.whatIsStorybrand.title, seoConfig.whatIsStorybrand.description)],
    title: seoConfig.whatIsStorybrand.title,
    description: seoConfig.whatIsStorybrand.description,
  },
  alternates: { canonical: "https://businessbldrs.com/what-is-storybrand" },
};

export default function Page() {
  return <WhatIsStorybrandPage />;
}
