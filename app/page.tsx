import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import { generateFAQSchema } from "@/lib/structured-data";
import HomePage from "@/components/pages/home";

export const metadata: Metadata = {
  title: seoConfig.home.title,
  description: seoConfig.home.description,
  keywords: seoConfig.home.keywords,
  openGraph: {
    title: seoConfig.home.title,
    description: seoConfig.home.description,
    url: "https://businessbldrs.com",
    type: "website",
    images: seoConfig.home.ogImage ? [seoConfig.home.ogImage] : [],
  },
  alternates: { canonical: "https://businessbldrs.com" },
};

const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://businessbldrs.com/#website",
      "url": "https://businessbldrs.com",
      "name": "Business Builders - Marketing Agency",
      "description": "Professional marketing agency helping businesses grow",
      "publisher": {
        "@id": "https://businessbldrs.com/#organization"
      }
    },
    {
      "@type": "Service",
      "@id": "https://businessbldrs.com/#marketing-services",
      "name": "Marketing Services",
      "provider": {
        "@id": "https://businessbldrs.com/#organization"
      },
      "serviceType": "Marketing Agency",
      "description": "Comprehensive marketing services including strategy, website design, SEO, and digital promotion",
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Marketing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Marketing Strategy & Planning",
              "description": "Comprehensive marketing strategy development and business planning services for sustained growth"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Website Design & Development",
              "description": "Custom website design and development with SEO optimization and mobile responsiveness"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Search Engine Optimization",
              "description": "Professional SEO services to improve search rankings and organic traffic"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Digital Marketing & Promotion",
              "description": "Social media marketing, Google Ads, content creation, and comprehensive digital promotion services"
            }
          }
        ]
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://businessbldrs.com/#webpage",
      "url": "https://businessbldrs.com",
      "name": "Business Builders - Marketing Agency | 26+ Years Helping Businesses Grow",
      "isPartOf": {
        "@id": "https://businessbldrs.com/#website"
      },
      "about": {
        "@id": "https://businessbldrs.com/#organization"
      },
      "description": "Award-winning marketing agency with 26+ years of proven results. We help businesses, ministries, and nonprofits grow through strategic planning, website design, SEO, and digital marketing.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://businessbldrs.com/"
          }
        ]
      }
    }
  ]
};

const homeFAQs = [
  {
    question: "How much does marketing cost for a small business?",
    answer: "Marketing costs vary widely based on your goals and industry. Our small business marketing packages typically start at $2,500-$5,000 per month for comprehensive marketing services. We also offer one-time projects like StoryBrand messaging ($3,500-$7,500) and website design ($8,000-$15,000). Every business is different, so we provide custom quotes based on your specific needs and budget."
  },
  {
    question: "What is StoryBrand and how does it help my business?",
    answer: "StoryBrand is a proven messaging framework that clarifies your marketing message so customers listen. It positions your customer as the hero and your business as the guide who helps them solve their problems. Businesses using StoryBrand typically see 30-50% improvements in conversion rates because their messaging becomes crystal clear and customer-focused."
  },
  {
    question: "How long does it take to see results from marketing?",
    answer: "Results timelines depend on the marketing strategy. Website improvements and conversion optimization can show results in 30-60 days. SEO and content marketing typically take 3-6 months for significant results. Paid advertising can generate leads immediately. Our StoryBrand messaging process delivers clarity within 4-6 weeks, which improves all other marketing efforts."
  },
  {
    question: "Do you work with nonprofits and ministries?",
    answer: "Yes! We've helped nonprofits and ministries grow for over 26 years. We understand the unique challenges of mission-driven organizations, including donor communication, volunteer recruitment, and community engagement. We offer special nonprofit rates and have extensive experience with fundraising campaigns, event promotion, and ministry outreach."
  },
  {
    question: "What's included in your marketing services?",
    answer: "Our comprehensive marketing services include strategic planning, StoryBrand messaging, website design and development, SEO optimization, content creation, social media management, email marketing, paid advertising management, and ongoing analytics. We create custom marketing plans based on your specific goals and budget."
  },
  {
    question: "How do I know if my marketing is working?",
    answer: "We provide transparent reporting and measurable KPIs for all our campaigns. You'll receive regular reports showing website traffic, lead generation, conversion rates, and ROI. We set clear goals upfront and track progress monthly so you always know exactly how your marketing investment is performing."
  }
];

const faqSchema = generateFAQSchema(homeFAQs);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <HomePage />
    </>
  );
}
