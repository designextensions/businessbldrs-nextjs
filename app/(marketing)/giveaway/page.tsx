import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import GiveawayPage from "@/components/pages/giveaway";

export const metadata: Metadata = {
  title: seoConfig.giveaway.title,
  description: seoConfig.giveaway.description,
  keywords: seoConfig.giveaway.keywords,
  openGraph: {
    title: seoConfig.giveaway.title,
    description: seoConfig.giveaway.description,
    images: seoConfig.giveaway.ogImage ? [seoConfig.giveaway.ogImage] : [],
  },
  alternates: { canonical: "https://businessbldrs.com/giveaway" },
};

export default function Page() {
  return <GiveawayPage />;
}
