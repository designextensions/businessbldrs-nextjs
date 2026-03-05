import type { Metadata } from "next";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import getQueryClient from "@/lib/getQueryClient";
import { getMarketingVideos, getBlogArticles } from "@/lib/storage";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import { generateFAQSchema } from "@/lib/structured-data";
import ResourcesPage from "@/components/pages/resources";

export const metadata: Metadata = {
  title: seoConfig.resources.title,
  description: seoConfig.resources.description,
  keywords: seoConfig.resources.keywords,
  openGraph: {
    title: seoConfig.resources.title,
    description: seoConfig.resources.description,
    images: [getOgImageUrl(seoConfig.resources.title, seoConfig.resources.description)],
  },
  alternates: { canonical: "https://businessbldrs.com/resources" },
};

const faqSchema = generateFAQSchema([
  {
    question: "Are Business Builders resources free to access?",
    answer: "Yes, all our resources including marketing videos, expert articles, and most downloadable templates are completely free to access. Some premium downloads may require an email address so we can deliver the file to you, but we never charge for our educational marketing content."
  },
  {
    question: "How often do you publish new content?",
    answer: "We publish new articles weekly and add new video content and downloadable resources regularly. Our team draws on over 26 years of marketing experience to create practical, actionable content that helps businesses grow. Subscribe to our newsletter or check back often to stay up to date with the latest resources."
  },
  {
    question: "Can I share these resources with my team?",
    answer: "Absolutely! We encourage you to share our articles, videos, and downloadable resources with your team, colleagues, and business partners. Our goal is to help as many businesses as possible succeed with better marketing. Feel free to share links to any of our resources."
  },
  {
    question: "What topics do your resources cover?",
    answer: "Our resources cover a wide range of digital marketing topics including SEO strategy, website design best practices, social media marketing, email campaigns, StoryBrand messaging, HubSpot CRM, video marketing, branding, and business growth strategies. Whether you are a small business owner or a marketing professional, you will find content relevant to your needs."
  }
]);

export default async function Page() {
  const queryClient = getQueryClient();
  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ["/api/marketing-videos"],
      queryFn: getMarketingVideos,
    }),
    queryClient.prefetchQuery({
      queryKey: ["/api/blog-articles/featured"],
      queryFn: getBlogArticles,
    }),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ResourcesPage />
    </HydrationBoundary>
  );
}
