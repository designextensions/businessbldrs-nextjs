import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { generateFAQSchema, generateServiceSchema } from "@/lib/structured-data";
import MarketingStrategyConsultingPage from "@/components/pages/marketing-strategy-consulting";

export const metadata: Metadata = {
  title: seoConfig.services.title,
  description: seoConfig.services.description,
  keywords: seoConfig.services.keywords,
  openGraph: {
    title: seoConfig.services.title,
    description: seoConfig.services.description,
    images: seoConfig.services.ogImage ? [seoConfig.services.ogImage] : [],
  },
  alternates: { canonical: "https://businessbldrs.com/marketing-strategy-consulting" },
};

const faqSchema = generateFAQSchema([
  {
    question: "What does a marketing strategy consultant do?",
    answer: "A marketing strategy consultant analyzes your current marketing efforts, identifies opportunities for growth, and develops a comprehensive plan tailored to your business goals. This includes competitive research, customer journey mapping, channel strategy, budget allocation, and KPI development to ensure measurable results from your marketing investment."
  },
  {
    question: "How much does marketing strategy consulting cost?",
    answer: "Marketing strategy consulting costs vary based on the scope and complexity of your needs. Business Builders offers a free 30-minute strategy consultation to assess your situation. From there, we develop customized proposals based on your specific goals, whether you need a one-time strategic plan or ongoing consulting support."
  },
  {
    question: "How long does it take to see results from a new marketing strategy?",
    answer: "Initial improvements can often be seen within the first 30-60 days of implementing a new strategy, particularly with paid channels. Organic strategies like SEO and content marketing typically show significant results within 3-6 months. We establish clear KPIs and provide monthly reporting so you can track progress throughout the engagement."
  },
  {
    question: "What makes Business Builders different from other marketing consultants?",
    answer: "With over 26 years of experience, Business Builders combines strategic marketing expertise with hands-on execution capabilities. As both a StoryBrand Certified Agency and HubSpot Platinum Partner, we bring proven frameworks and cutting-edge tools to every engagement. We do not just create plans — we help implement them and measure the results."
  }
]);
const serviceSchema = generateServiceSchema({
  serviceName: "Marketing Strategy Consulting",
  description: "Professional marketing strategy consulting to accelerate your business growth. Expert consultants develop comprehensive marketing plans that deliver measurable results and sustainable growth.",
  slug: "marketing-strategy-consulting",
  serviceType: "Marketing Consulting",
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <MarketingStrategyConsultingPage />
    </>
  );
}
