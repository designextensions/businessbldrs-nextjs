import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import StorybrandBrandscriptPage from "@/components/pages/storybrand-brandscript";

export const metadata: Metadata = {
  title: seoConfig.storybrandBrandscript.title,
  description: seoConfig.storybrandBrandscript.description,
  keywords: seoConfig.storybrandBrandscript.keywords,
  openGraph: {
    title: seoConfig.storybrandBrandscript.title,
    description: seoConfig.storybrandBrandscript.description,
  },
  alternates: { canonical: "https://businessbldrs.com/storybrand-brandscript" },
};

export default function Page() {
  return <StorybrandBrandscriptPage />;
}
