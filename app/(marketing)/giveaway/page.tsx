import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import GiveawayPage from "@/components/pages/giveaway";

export const metadata: Metadata = {
  title: seoConfig.giveaway.title,
  description: seoConfig.giveaway.description,
  keywords: seoConfig.giveaway.keywords,
  openGraph: {
    title: seoConfig.giveaway.title,
    description: seoConfig.giveaway.description,
    images: [getOgImageUrl(seoConfig.giveaway.title, seoConfig.giveaway.description)],
  },
  alternates: { canonical: "https://businessbldrs.com/giveaway" },
};

export default function Page() {
  return <GiveawayPage />;
}
