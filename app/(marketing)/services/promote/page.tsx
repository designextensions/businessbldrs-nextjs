import type { Metadata } from "next";
import { getOgImageUrl } from "@/lib/og-utils";
import ServicesPromotePage from "@/components/pages/services-promote";

export const metadata: Metadata = {
  title: "Marketing & Promotion Services",
  description: "Reach your ideal customers with SEO, social media marketing, HubSpot CRM, and full-service digital marketing strategies that drive real results.",
  keywords: "digital marketing, seo services, social media marketing, hubspot crm, marketing agency",
  openGraph: {
    images: [getOgImageUrl("Marketing & Promotion Services", "Reach your ideal customers with SEO, social media marketing, HubSpot CRM, and digital marketing strategies.")],
    title: "Marketing & Promotion Services",
    description: "Reach your ideal customers with SEO, social media marketing, HubSpot CRM, and full-service digital marketing strategies that drive real results.",
  },
  alternates: { canonical: "https://businessbldrs.com/services/promote" },
};

export default function Page() {
  return <ServicesPromotePage />;
}
