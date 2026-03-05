import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import ScheduleCallPage from "@/components/pages/schedule-call";

export const metadata: Metadata = {
  title: seoConfig.contact.title,
  description: seoConfig.contact.description,
  keywords: seoConfig.contact.keywords,
  openGraph: {
    title: seoConfig.contact.title,
    description: seoConfig.contact.description,
    images: [getOgImageUrl(seoConfig.contact.title, seoConfig.contact.description)],
  },
  alternates: { canonical: "https://businessbldrs.com/schedule-call" },
};

export default function Page() {
  return <ScheduleCallPage />;
}
