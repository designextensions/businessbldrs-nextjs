import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import EventsPage from "@/components/pages/events";

export const metadata: Metadata = {
  title: seoConfig.events.title,
  description: seoConfig.events.description,
  keywords: seoConfig.events.keywords,
  openGraph: {
    title: seoConfig.events.title,
    description: seoConfig.events.description,
    images: seoConfig.events.ogImage ? [seoConfig.events.ogImage] : [],
  },
};

export default function Page() {
  return <EventsPage />;
}
