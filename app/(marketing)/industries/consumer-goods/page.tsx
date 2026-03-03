import type { Metadata } from "next";
import { generateFAQSchema, generateServiceSchema } from "@/lib/structured-data";
import ConsumerGoodsPage from "@/components/pages/industries/consumer-goods";

export const metadata: Metadata = {
  title: "Consumer Goods Marketing Agency | StoryBrand Certified",
  description: "StoryBrand Certified consumer goods marketing agency with 26+ years of experience. We help product brands grow through strategic branding, e-commerce marketing, and compelling storytelling.",
  keywords: "consumer goods marketing agency, product marketing, CPG marketing agency, e-commerce marketing, brand marketing agency, storybrand consumer goods, product launch marketing",
  openGraph: {
    title: "Consumer Goods Marketing Agency | StoryBrand Certified",
    description: "StoryBrand Certified consumer goods marketing agency with 26+ years of experience. We help product brands grow through strategic branding, e-commerce marketing, and compelling storytelling.",
    images: ["/service-branding.jpg"],
  },
  alternates: { canonical: "https://businessbldrs.com/industries/consumer-goods" },
};

const faqSchema = generateFAQSchema([
  {
    question: "How much does consumer goods marketing cost?",
    answer: "Marketing budgets for consumer goods brands vary widely based on your stage, channels, and goals. Most brands invest between $3,000–$15,000 per month for comprehensive marketing including branding, digital advertising, and content creation. We build custom strategies that align with your budget and growth targets.",
  },
  {
    question: "How do you market a product launch?",
    answer: "A successful product launch requires strategic planning months in advance. We start with brand positioning and messaging using the StoryBrand framework, then build launch assets including packaging design, website, video content, and social media campaigns. We create buzz before launch and sustain momentum after with targeted advertising and PR strategies.",
  },
  {
    question: "How does StoryBrand work for product brands?",
    answer: "StoryBrand helps product brands connect with consumers on an emotional level. Instead of listing features, we craft a story where your customer is the hero and your product is the solution to their problem. This framework works across all touchpoints — packaging, website, ads, and social media — creating a consistent, compelling brand narrative that drives sales.",
  },
  {
    question: "What e-commerce marketing strategies work best?",
    answer: "The most effective e-commerce strategies combine a high-converting website with targeted traffic. We focus on SEO to capture organic search traffic, paid advertising on Google and social platforms, email marketing for retention, and conversion rate optimization to maximize every visitor. The key is a clear brand story that differentiates you from competitors.",
  },
  {
    question: "How should consumer brands use social media?",
    answer: "Consumer brands should use social media to build community, showcase lifestyle, and drive purchase intent. We develop platform-specific strategies focusing on visual storytelling through professional photography and video. User-generated content, influencer partnerships, and strategic paid campaigns help amplify your reach and drive both online and retail sales.",
  },
  {
    question: "What's the difference between branding and marketing?",
    answer: "Branding is who you are — your identity, story, values, and visual language. Marketing is how you get the word out — the strategies and channels you use to reach customers. You need both to succeed. We start with strong brand foundations using StoryBrand, then build marketing strategies that amplify your brand across every channel where your customers shop.",
  },
]);
const serviceSchema = generateServiceSchema({
  serviceName: "Consumer Goods Marketing Services",
  description: "StoryBrand Certified consumer goods marketing agency with 26+ years of experience. We help product brands grow through strategic branding, e-commerce marketing, and compelling storytelling.",
  slug: "industries/consumer-goods",
  serviceType: "Consumer Goods Marketing",
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <ConsumerGoodsPage />
    </>
  );
}
