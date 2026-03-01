import type { Metadata } from "next";
import ServicesPromotePage from "@/components/pages/services-promote";

export const metadata: Metadata = {
  title: "Marketing & Promotion Services | Business Builders",
  description: "Reach your ideal customers with SEO, social media marketing, HubSpot CRM, and full-service digital marketing strategies that drive real results.",
  keywords: "digital marketing, seo services, social media marketing, hubspot crm, marketing agency",
  openGraph: {
    title: "Marketing & Promotion Services | Business Builders",
    description: "Reach your ideal customers with SEO, social media marketing, HubSpot CRM, and full-service digital marketing strategies that drive real results.",
  },
};

export default function Page() {
  return <ServicesPromotePage />;
}
