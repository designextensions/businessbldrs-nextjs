import type { Metadata } from "next";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import getQueryClient from "@/lib/getQueryClient";
import { getPortfolioItems } from "@/lib/storage";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import { generateFAQSchema } from "@/lib/structured-data";
import PortfolioPage from "@/components/pages/portfolio";

export const metadata: Metadata = {
  title: seoConfig.portfolio.title,
  description: seoConfig.portfolio.description,
  keywords: seoConfig.portfolio.keywords,
  openGraph: {
    title: seoConfig.portfolio.title,
    description: seoConfig.portfolio.description,
    images: [getOgImageUrl(seoConfig.portfolio.title, seoConfig.portfolio.description)],
  },
  alternates: { canonical: "https://businessbldrs.com/portfolio" },
};

const faqSchema = generateFAQSchema([
  {
    question: "What types of projects has Business Builders completed?",
    answer: "We have built over 100 websites and completed hundreds of marketing campaigns since 1999. Our portfolio includes custom website designs, e-commerce platforms, SEO campaigns, social media marketing, video production, branding and logo design, HubSpot implementations, and comprehensive digital marketing strategies."
  },
  {
    question: "Can I see results from your marketing campaigns?",
    answer: "Yes, our case studies showcase real results from our client partnerships. For example, Bozard Ford Lincoln saw a 285% increase in qualified leads, and Rulon International achieved a 450% increase in qualified leads through our digital transformation work."
  },
  {
    question: "Do you work with businesses in my industry?",
    answer: "We serve a diverse range of industries including automotive, construction, manufacturing, healthcare, nonprofits, ministries, professional services, hospitality, real estate, and many more."
  },
  {
    question: "How do I get started on a project with Business Builders?",
    answer: "Getting started is easy. Schedule a free 15-minute consultation call where we will discuss your goals, challenges, and vision. We follow our proven Plan-Produce-Promote process to ensure every project delivers measurable results."
  }
]);

export default async function Page() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["/api/portfolio"],
    queryFn: getPortfolioItems,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PortfolioPage />
    </HydrationBoundary>
  );
}
