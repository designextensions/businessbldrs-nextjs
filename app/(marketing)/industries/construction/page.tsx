import type { Metadata } from "next";
import { generateFAQSchema, generateServiceSchema } from "@/lib/structured-data";
import ConstructionPage from "@/components/pages/industries/construction";

export const metadata: Metadata = {
  title: "Construction Marketing Agency | StoryBrand Certified",
  description: "StoryBrand Certified construction marketing agency helping contractors and builders generate consistent leads. 320% ROI for Hines. Full-service contractor marketing including websites, SEO, and video.",
  keywords: "construction marketing agency, contractor marketing, construction company marketing, builder marketing, storybrand construction, construction digital marketing",
  openGraph: {
    title: "Construction Marketing Agency | StoryBrand Certified",
    description: "StoryBrand Certified construction marketing agency helping contractors and builders generate consistent leads. 320% ROI for Hines.",
    images: ["/service-strategy.jpg"],
  },
  alternates: { canonical: "https://businessbldrs.com/industries/construction" },
};

const faqSchema = generateFAQSchema([
  {
    question: "How much does construction marketing cost?",
    answer: "Construction marketing investment depends on your company size, target market, and goals. Our plans typically range from $3,000 to $12,000+ per month, covering everything from website design and SEO to paid advertising and content creation. We build a custom plan that fits your budget and delivers measurable results.",
  },
  {
    question: "How long does it take to see results from construction marketing?",
    answer: "Paid advertising can generate leads within the first few weeks, while SEO and content marketing build momentum over 3-6 months. Most construction clients see a significant increase in qualified leads within the first 90 days. We provide regular reporting so you can track progress every step of the way.",
  },
  {
    question: "What marketing services do you offer for contractors?",
    answer: "We offer comprehensive marketing services for construction companies including website design, search engine optimization, Google Ads, social media marketing, video production, branding, and StoryBrand messaging. Every service is designed to help contractors generate more leads and win better projects.",
  },
  {
    question: "How important is SEO for construction companies?",
    answer: "SEO is critical for construction companies. Most homeowners and commercial clients start their search for contractors online. If your website doesn't show up on the first page of Google for relevant searches in your area, you're losing projects to competitors who do. We specialize in local SEO strategies that put your business in front of the right people.",
  },
  {
    question: "Can video marketing help my construction business?",
    answer: "Absolutely. Video is one of the most powerful tools for construction marketing. Project walkthroughs, client testimonials, time-lapse builds, and team introductions build trust and showcase your craftsmanship in ways photos and text can't. We handle full-service video production from concept to delivery.",
  },
  {
    question: "How can a small contractor compete with bigger construction companies?",
    answer: "Smaller contractors can absolutely compete with larger companies by having a clearer message, a better website, and a smarter digital strategy. StoryBrand messaging helps you stand out by focusing on what your customers actually care about. Combined with targeted SEO and advertising, you can win projects that used to go to bigger firms.",
  },
]);
const serviceSchema = generateServiceSchema({
  serviceName: "Construction Marketing Services",
  description: "StoryBrand Certified construction marketing agency helping contractors and builders generate consistent leads. 320% ROI for Hines. Full-service contractor marketing including websites, SEO, and video.",
  slug: "industries/construction",
  serviceType: "Construction Marketing",
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <ConstructionPage />
    </>
  );
}
