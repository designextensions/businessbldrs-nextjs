import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import FreeSeoAuditPage from "@/components/pages/free-seo-audit";

export const metadata: Metadata = {
  title: seoConfig.freeSeoAudit.title,
  description: seoConfig.freeSeoAudit.description,
  keywords: seoConfig.freeSeoAudit.keywords,
  openGraph: {
    title: seoConfig.freeSeoAudit.title,
    description: seoConfig.freeSeoAudit.description,
    images: [getOgImageUrl(seoConfig.freeSeoAudit.title, seoConfig.freeSeoAudit.description)],
  },
  alternates: { canonical: "https://businessbldrs.com/free-seo-audit" },
};

export default function Page() {
  return <FreeSeoAuditPage />;
}
