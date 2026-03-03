import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import StorybrandMessagingPage from "@/components/pages/storybrand-messaging";

export const metadata: Metadata = {
  title: seoConfig.storybrandMessaging.title,
  description: seoConfig.storybrandMessaging.description,
  keywords: seoConfig.storybrandMessaging.keywords,
  openGraph: {
    title: seoConfig.storybrandMessaging.title,
    description: seoConfig.storybrandMessaging.description,
    images: seoConfig.storybrandMessaging.ogImage ? [seoConfig.storybrandMessaging.ogImage] : [],
  },
  alternates: { canonical: "https://businessbldrs.com/storybrand-messaging" },
};

export default function Page() {
  return <StorybrandMessagingPage />;
}
