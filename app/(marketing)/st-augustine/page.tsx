import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import StAugustinePage from "@/components/pages/st-augustine";

export const metadata: Metadata = {
  title: seoConfig.stAugustine.title,
  description: seoConfig.stAugustine.description,
  keywords: seoConfig.stAugustine.keywords,
  openGraph: {
    title: seoConfig.stAugustine.title,
    description: seoConfig.stAugustine.description,
    images: seoConfig.stAugustine.ogImage ? [seoConfig.stAugustine.ogImage] : [],
  },
  alternates: { canonical: "https://businessbldrs.com/st-augustine" },
};

export default function Page() {
  return <StAugustinePage />;
}
