import type { Metadata } from "next";
import ServicesProducePage from "@/components/pages/services-produce";

export const metadata: Metadata = {
  title: "Creative Production Services | Business Builders",
  description: "Professional website design, video production, branding, and app development. We create content that converts visitors into customers.",
  keywords: "website design, video production, branding, app development, creative services",
  openGraph: {
    title: "Creative Production Services | Business Builders",
    description: "Professional website design, video production, branding, and app development. We create content that converts visitors into customers.",
  },
};

export default function Page() {
  return <ServicesProducePage />;
}
