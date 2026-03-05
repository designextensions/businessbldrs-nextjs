import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import { generateFAQSchema, generateServiceSchema } from "@/lib/structured-data";
import MarketingServicesPage from "@/components/pages/marketing-services";

export const metadata: Metadata = {
  title: seoConfig.services.title,
  description: seoConfig.services.description,
  keywords: seoConfig.services.keywords,
  openGraph: {
    title: seoConfig.services.title,
    description: seoConfig.services.description,
    images: [getOgImageUrl(seoConfig.services.title, seoConfig.services.description)],
  },
  alternates: { canonical: "https://businessbldrs.com/marketing-services" },
};

const faqSchema = generateFAQSchema([
  {
    question: "What marketing services does Business Builders offer?",
    answer: "Business Builders provides comprehensive marketing services including SEO, paid search (PPC), social media marketing, email marketing, influencer partnerships, content marketing, and marketing strategy consulting. As a StoryBrand Certified Agency and HubSpot Platinum Partner, we combine clear messaging with powerful tools to drive measurable results."
  },
  {
    question: "How much do your marketing services cost?",
    answer: "Marketing service costs depend on the scope and channels included in your strategy. We offer customized marketing partnerships tailored to your business goals and budget. Schedule a free consultation call to discuss your needs and receive a personalized proposal with transparent pricing."
  },
  {
    question: "How do you measure marketing success?",
    answer: "We measure success through clear KPIs aligned with your business goals, including website traffic growth, lead generation, conversion rates, cost per acquisition, and overall ROI. We provide detailed monthly reporting with actionable insights and recommendations for continuous improvement."
  },
  {
    question: "Can you work with our existing marketing team?",
    answer: "Absolutely. We frequently collaborate with in-house marketing teams, providing strategic guidance, specialized expertise, and additional capacity where needed. Whether you need full-service marketing management or support in specific areas like SEO or paid advertising, we tailor our approach to complement your team."
  }
]);
const serviceSchema = generateServiceSchema({
  serviceName: "Marketing Services",
  description: "Comprehensive digital marketing services including SEO, PPC, social media, and email marketing. StoryBrand certified agency and HubSpot Platinum Partner helping businesses grow since 1999.",
  slug: "marketing-services",
  serviceType: "Digital Marketing",
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <MarketingServicesPage />
    </>
  );
}
