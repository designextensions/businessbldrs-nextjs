import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import JacksonvillePage from "@/components/pages/jacksonville";

export const metadata: Metadata = {
  title: "Jacksonville Marketing Agency | Web Design & SEO | Business Builders",
  description: "Business Builders serves Jacksonville businesses with website design, SEO, branding, video production & digital marketing. 26+ years experience. HubSpot Platinum Partner. Call 877-378-6101.",
  keywords: "jacksonville marketing agency, jacksonville web design, jacksonville seo, marketing company jacksonville fl",
  openGraph: {
    title: "Jacksonville Marketing Agency | Web Design & SEO | Business Builders",
    description: "Business Builders serves Jacksonville businesses with website design, SEO, branding, video production & digital marketing. 26+ years experience. HubSpot Platinum Partner. Call 877-378-6101.",
    images: seoConfig.home.ogImage ? [seoConfig.home.ogImage] : [],
  },
};

export default function Page() {
  return <JacksonvillePage />;
}
