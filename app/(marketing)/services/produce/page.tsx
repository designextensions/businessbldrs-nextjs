import type { Metadata } from "next";
import { getOgImageUrl } from "@/lib/og-utils";
import ServicesProducePage from "@/components/pages/services-produce";

export const metadata: Metadata = {
  title: "Creative Production Services | Business Builders",
  description: "Professional website design, video production, branding, and app development. We create content that converts visitors into customers.",
  keywords: "website design, video production, branding, app development, creative services",
  openGraph: {
    images: [getOgImageUrl("Creative Production Services | Business Builders", "Professional website design, video production, branding, and app development. We create content that converts visitors into customers.")],
    title: "Creative Production Services | Business Builders",
    description: "Professional website design, video production, branding, and app development. We create content that converts visitors into customers.",
  },
  alternates: { canonical: "https://businessbldrs.com/services/produce" },
};

export default function Page() {
  return <ServicesProducePage />;
}
