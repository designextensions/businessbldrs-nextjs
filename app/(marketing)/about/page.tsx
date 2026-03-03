import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { generateFAQSchema } from "@/lib/structured-data";
import AboutPage from "@/components/pages/about";

export const metadata: Metadata = {
  title: seoConfig.about.title,
  description: seoConfig.about.description,
  keywords: seoConfig.about.keywords,
  openGraph: {
    title: seoConfig.about.title,
    description: seoConfig.about.description,
    images: seoConfig.about.ogImage ? [seoConfig.about.ogImage] : [],
  },
  alternates: { canonical: "https://businessbldrs.com/about" },
};

const faqSchema = generateFAQSchema([
  {
    question: "How long has Business Builders been in business?",
    answer: "Business Builders (originally named Design Extensions) was founded in 1999, giving us over 26 years of experience in web design, marketing, and helping businesses grow. What started as a high school passion project has grown into a full-service digital marketing agency that has helped hundreds of businesses, ministries, and nonprofits succeed online."
  },
  {
    question: "Where is Business Builders located?",
    answer: "Business Builders is based in beautiful St. Augustine, Florida, the oldest city in the United States. While our roots are local, we serve clients nationwide and have partnered with businesses, ministries, and nonprofits across the country. Our team works both in-office and remotely to deliver results no matter where our clients are located."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We work across a diverse range of industries including automotive, construction, manufacturing, healthcare, nonprofits, ministries, professional services, real estate, and more. Our proven Plan-Produce-Promote process adapts to any industry, and our 26+ years of experience means we have seen what works across many different markets. Whether you are a local business or a national brand, we tailor our strategies to your specific audience."
  },
  {
    question: "What makes Business Builders different from other agencies?",
    answer: "Several things set us apart: we are a certified StoryBrand agency that uses proven messaging frameworks to help your brand connect with customers. We are also a HubSpot Platinum Partner with deep CRM and automation expertise. Most importantly, we have been growing every single year since 1999 because we build long-term relationships with our clients -- many have been with us for over a decade. Our faith-driven values of quality, commitment, and joy mean we treat every project like it matters, because it does."
  }
]);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <AboutPage />
    </>
  );
}
