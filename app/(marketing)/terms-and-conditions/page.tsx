import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import TermsAndConditionsPage from "@/components/pages/terms-and-conditions";

export const metadata: Metadata = {
  title: "Terms & Conditions | Business Builders",
  description: seoConfig.about.description,
  keywords: seoConfig.about.keywords,
  openGraph: {
    title: "Terms & Conditions | Business Builders",
    description: seoConfig.about.description,
    images: seoConfig.about.ogImage ? [seoConfig.about.ogImage] : [],
  },
};

export default function Page() {
  return <TermsAndConditionsPage />;
}
