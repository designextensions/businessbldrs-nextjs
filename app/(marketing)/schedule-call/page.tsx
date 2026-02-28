import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import ScheduleCallPage from "@/components/pages/schedule-call";

export const metadata: Metadata = {
  title: seoConfig.contact.title,
  description: seoConfig.contact.description,
  keywords: seoConfig.contact.keywords,
  openGraph: {
    title: seoConfig.contact.title,
    description: seoConfig.contact.description,
    images: seoConfig.contact.ogImage ? [seoConfig.contact.ogImage] : [],
  },
};

export default function Page() {
  return <ScheduleCallPage />;
}
