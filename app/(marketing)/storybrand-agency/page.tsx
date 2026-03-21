import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { getOgImageUrl } from "@/lib/og-utils";
import { generateFAQSchema, generateServiceSchema } from "@/lib/structured-data";
import StorybrandAgencyPage from "@/components/pages/storybrand-agency";

export const metadata: Metadata = {
  title: seoConfig.storybrandAgency.title,
  description: seoConfig.storybrandAgency.description,
  keywords: seoConfig.storybrandAgency.keywords,
  openGraph: {
    title: seoConfig.storybrandAgency.title,
    description: seoConfig.storybrandAgency.description,
    images: [getOgImageUrl(seoConfig.storybrandAgency.title, seoConfig.storybrandAgency.description)],
  },
  alternates: { canonical: "https://businessbldrs.com/storybrand-agency" },
};

const faqSchema = generateFAQSchema([
  {
    question: "What is a StoryBrand Certified Agency?",
    answer: "A StoryBrand Certified Agency has been trained and certified directly by Donald Miller's StoryBrand organization. Certification requires completing an intensive training program, passing certification exams, and demonstrating mastery of the StoryBrand 7-Part Framework. Business Builders is one of a select number of agencies nationwide that holds this certification, meaning we're authorized to use the StoryBrand methodology with our clients."
  },
  {
    question: "How is a StoryBrand agency different from a regular marketing agency?",
    answer: "A StoryBrand marketing agency starts with messaging clarity before doing anything else. Most agencies jump straight to tactics — build a website, run ads, post on social media. But without a clear message, those tactics underperform. We use the StoryBrand BrandScript to clarify your messaging first, then build every piece of your marketing on that foundation. The result is consistent, compelling communication across every channel."
  },
  {
    question: "What does StoryBrand marketing cost?",
    answer: "Our StoryBrand Blueprint packages range from $1,950 for a focused messaging session to $13,500 for a comprehensive two-day workshop with full marketing plan. Most clients choose the Marketing Blueprint at $9,500, which includes a BrandScript, website wireframe, 12-month marketing plan, lead-generating PDF, and a 5-email nurturing campaign. Implementation costs vary based on your needs — websites typically range from $8,000-$25,000."
  },
  {
    question: "Do I need to have read Building a StoryBrand before working with you?",
    answer: "Not at all. While Donald Miller's book is a great introduction to the framework, our certified guides walk you through everything during the workshop. In fact, many of our most successful clients come in with zero StoryBrand knowledge. We handle the strategy — you bring your expertise about your business and customers."
  },
  {
    question: "How long does it take to see results from StoryBrand marketing?",
    answer: "Most clients see immediate clarity in their messaging after the first workshop. Website redesigns using StoryBrand messaging typically launch within 8-12 weeks and show measurable improvements in conversion rates within the first 30 days. Full marketing plans with email sequences, lead generators, and content strategies typically show significant ROI within 3-6 months."
  },
  {
    question: "Can StoryBrand work for my industry?",
    answer: "StoryBrand works for any business that has customers. We've applied the framework successfully across 15+ industries including construction, automotive, healthcare, nonprofits, professional services, real estate, manufacturing, and technology companies. The framework is universal because every customer is a human being who responds to clear, story-driven messaging."
  },
  {
    question: "What's included in a StoryBrand website redesign?",
    answer: "A StoryBrand website redesign starts with your BrandScript and translates it into a conversion-focused website. This includes wireframing based on the StoryBrand website methodology, homepage copy written directly from your BrandScript, interior page strategy, calls-to-action placement, lead generator integration, mobile-responsive design, and SEO optimization. Every section of the site is designed to guide visitors from problem to solution."
  },
  {
    question: "Do you work with businesses outside of Florida?",
    answer: "Yes. While we're based in St. Augustine, FL, we work with businesses across the United States. Our StoryBrand workshops can be conducted in person at our office or via Zoom. Implementation work is handled by our full-service team regardless of location. We currently serve clients in 12+ states."
  }
]);
const serviceSchema = generateServiceSchema({
  serviceName: "StoryBrand Certified Marketing Agency",
  description: "Business Builders is a StoryBrand Certified Agency in St. Augustine, FL. Our certified guides use Donald Miller's 7-Part Framework to clarify your message, build marketing funnels, and grow your business.",
  slug: "storybrand-agency",
  serviceType: "Marketing Agency",
});

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Donald Miller Endorses Business Builders",
  "description": "Donald Miller, creator of the StoryBrand Framework, endorses Business Builders as a certified StoryBrand agency helping businesses clarify their marketing message.",
  "thumbnailUrl": "https://img.youtube.com/vi/5wzrqaNJlLA/maxresdefault.jpg",
  "uploadDate": "2024-01-01",
  "embedUrl": "https://www.youtube.com/embed/5wzrqaNJlLA",
  "contentUrl": "https://www.youtube.com/watch?v=5wzrqaNJlLA",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
      <StorybrandAgencyPage />
    </>
  );
}
