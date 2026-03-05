import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import StorybrandWebsitePage from "@/components/pages/storybrand-website";

export const metadata: Metadata = {
  title: seoConfig.storybrandWebsite.title,
  description: seoConfig.storybrandWebsite.description,
  keywords: seoConfig.storybrandWebsite.keywords,
  openGraph: {
    images: [getOgImageUrl(seoConfig.storybrandWebsite.title, seoConfig.storybrandWebsite.description)],
    title: seoConfig.storybrandWebsite.title,
    description: seoConfig.storybrandWebsite.description,
  },
  alternates: { canonical: "https://businessbldrs.com/storybrand-website" },
};

export default function Page() {
  return <StorybrandWebsitePage />;
}
