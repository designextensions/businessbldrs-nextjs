import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import PrivacyPolicyPage from "@/components/pages/privacy-policy";

export const metadata: Metadata = {
  title: seoConfig.privacyPolicy.title,
  description: seoConfig.privacyPolicy.description,
  keywords: seoConfig.privacyPolicy.keywords,
  openGraph: {
    title: seoConfig.privacyPolicy.title,
    description: seoConfig.privacyPolicy.description,
    images: [getOgImageUrl(seoConfig.privacyPolicy.title, seoConfig.privacyPolicy.description)],
  },
  alternates: { canonical: "https://businessbldrs.com/privacy-policy" },
};

export default function Page() {
  return <PrivacyPolicyPage />;
}
