import type { Metadata } from "next";
import ConsumerGoodsPage from "@/components/pages/industries/consumer-goods";

export const metadata: Metadata = {
  title: "Consumer Goods Marketing Agency | StoryBrand Certified | Business Builders",
  description: "StoryBrand Certified consumer goods marketing agency with 26+ years of experience. We help product brands grow through strategic branding, e-commerce marketing, and compelling storytelling.",
  keywords: "consumer goods marketing agency, product marketing, CPG marketing agency, e-commerce marketing, brand marketing agency, storybrand consumer goods, product launch marketing",
  openGraph: {
    title: "Consumer Goods Marketing Agency | StoryBrand Certified | Business Builders",
    description: "StoryBrand Certified consumer goods marketing agency with 26+ years of experience. We help product brands grow through strategic branding, e-commerce marketing, and compelling storytelling.",
    images: ["/service-branding.jpg"],
  },
};

export default function Page() {
  return <ConsumerGoodsPage />;
}
