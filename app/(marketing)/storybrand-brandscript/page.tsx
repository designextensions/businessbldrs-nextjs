import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import StorybrandBrandscriptPage from "@/components/pages/storybrand-brandscript";

export const metadata: Metadata = {
  title: seoConfig.storybrandBrandscript.title,
  description: seoConfig.storybrandBrandscript.description,
  keywords: seoConfig.storybrandBrandscript.keywords,
  openGraph: {
    images: [getOgImageUrl(seoConfig.storybrandBrandscript.title, seoConfig.storybrandBrandscript.description)],
    title: seoConfig.storybrandBrandscript.title,
    description: seoConfig.storybrandBrandscript.description,
  },
  alternates: { canonical: "https://businessbldrs.com/storybrand-brandscript" },
};

export default function Page() {
  return <StorybrandBrandscriptPage />;
}
