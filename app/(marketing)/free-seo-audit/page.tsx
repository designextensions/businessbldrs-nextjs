import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import FreeSeoAuditPage from "@/components/pages/free-seo-audit";

export const metadata: Metadata = {
  title: seoConfig.seoServices.title,
  description: seoConfig.seoServices.description,
  keywords: seoConfig.seoServices.keywords,
  openGraph: {
    title: seoConfig.seoServices.title,
    description: seoConfig.seoServices.description,
    images: [getOgImageUrl(seoConfig.seoServices.title, seoConfig.seoServices.description)],
  },
  alternates: { canonical: "https://businessbldrs.com/free-seo-audit" },
};

export default function Page() {
  return <FreeSeoAuditPage />;
}
