import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import StorybrandFrameworkPage from "@/components/pages/storybrand";

export const metadata: Metadata = {
  title: seoConfig.storybrandFramework.title,
  description: seoConfig.storybrandFramework.description,
  keywords: seoConfig.storybrandFramework.keywords,
  openGraph: {
    title: seoConfig.storybrandFramework.title,
    description: seoConfig.storybrandFramework.description,
    images: [getOgImageUrl(seoConfig.storybrandFramework.title, seoConfig.storybrandFramework.description)],
  },
  alternates: { canonical: "https://businessbldrs.com/storybrand-framework" },
};

export default function Page() {
  return <StorybrandFrameworkPage />;
}
