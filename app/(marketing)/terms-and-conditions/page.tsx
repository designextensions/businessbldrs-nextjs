import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import TermsAndConditionsPage from "@/components/pages/terms-and-conditions";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: seoConfig.about.description,
  keywords: seoConfig.about.keywords,
  openGraph: {
    title: "Terms & Conditions",
    description: seoConfig.about.description,
    images: seoConfig.about.ogImage ? [seoConfig.about.ogImage] : [],
  },
  alternates: { canonical: "https://businessbldrs.com/terms-and-conditions" },
};

export default function Page() {
  return <TermsAndConditionsPage />;
}
