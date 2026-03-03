import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { generateFAQSchema } from "@/lib/structured-data";
import ToolsPage from "@/components/pages/tools";

export const metadata: Metadata = {
  title: seoConfig.resources.title,
  description: seoConfig.resources.description,
  keywords: seoConfig.resources.keywords,
  openGraph: {
    title: seoConfig.resources.title,
    description: seoConfig.resources.description,
    images: seoConfig.resources.ogImage ? [seoConfig.resources.ogImage] : [],
  },
  alternates: { canonical: "https://businessbldrs.com/tools" },
};

const faqSchema = generateFAQSchema([
  {
    question: "Are these marketing tools really free?",
    answer: "Yes, all tools on this page are completely free to use with no hidden fees or credit card required. We provide these tools to help businesses of all sizes improve their marketing efforts. Whether you need a cost calculator, SEO audit, or marketing plan builder, you can access them at no cost."
  },
  {
    question: "How accurate is the SEO audit tool?",
    answer: "Our SEO audit tool analyzes key on-page and technical SEO factors that impact your search engine rankings. It checks meta tags, page speed, mobile responsiveness, content structure, and more. While no automated tool can replace a comprehensive manual audit, our tool provides actionable insights to help you identify and fix the most common SEO issues affecting your site."
  },
  {
    question: "Can I use the marketing plan builder without an account?",
    answer: "Yes, you can use the marketing plan builder and all of our tools without creating an account. Simply select the tool you want to use and get started immediately. For some downloadable resources, we may ask for your email so we can send you the file, but the interactive tools are always available without any signup."
  },
  {
    question: "Do you offer more advanced marketing solutions?",
    answer: "Absolutely. These free tools are designed to give you a starting point. For businesses that need more advanced, customized solutions, our team offers full-service marketing including SEO, website design, HubSpot implementation, social media management, and more. Contact us for a free consultation to discuss your specific needs."
  }
]);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ToolsPage />
    </>
  );
}
