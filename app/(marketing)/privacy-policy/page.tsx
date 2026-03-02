import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import PrivacyPolicyPage from "@/components/pages/privacy-policy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: seoConfig.about.description,
  keywords: seoConfig.about.keywords,
  openGraph: {
    title: "Privacy Policy",
    description: seoConfig.about.description,
    images: seoConfig.about.ogImage ? [seoConfig.about.ogImage] : [],
  },
  alternates: { canonical: "https://businessbldrs.com/privacy-policy" },
};

export default function Page() {
  return <PrivacyPolicyPage />;
}
