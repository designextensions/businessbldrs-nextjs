import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import EventsPage from "@/components/pages/events";

export const metadata: Metadata = {
  title: seoConfig.events.title,
  description: seoConfig.events.description,
  keywords: seoConfig.events.keywords,
  openGraph: {
    title: seoConfig.events.title,
    description: seoConfig.events.description,
    images: [getOgImageUrl(seoConfig.events.title, seoConfig.events.description)],
  },
  alternates: { canonical: "https://businessbldrs.com/events" },
};

export default function Page() {
  return <EventsPage />;
}
