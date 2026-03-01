"use client";

import IndustryPageTemplate from "@/components/pages/industry-page-template";
import { TrendingDown, Users, Search } from "lucide-react";

export default function ConstructionPage() {
  return (
    <IndustryPageTemplate
      industry="Construction"
      slug="construction"
      heroHeadline="BUILD YOUR"
      heroHighlight="PIPELINE"
      heroDescription="Construction companies rely too heavily on word of mouth and referrals. When the phone stops ringing, there's no system in place to generate new business. We help contractors build a predictable lead generation engine."
      heroTagline="StoryBrand Certified. Proven results for Breakwater & Hines."
      heroImage="/service-strategy.jpg"
      heroImageAlt="Construction marketing strategy for contractors and builders"
      stats={[
        { number: "320%", label: "ROI for Hines communities" },
        { number: "26+", label: "Years marketing experience" },
        { number: "500+", label: "Projects delivered" },
        { number: "StoryBrand", label: "Certified Agency" },
      ]}
      painPoints={[
        {
          icon: TrendingDown,
          title: "Feast or Famine",
          description: "One month you're turning down work, the next you're scrambling for leads. Inconsistent lead flow makes it impossible to plan, hire, and grow your construction business with confidence.",
        },
        {
          icon: Users,
          title: "Word of Mouth Only",
          description: "Referrals are great, but they're unpredictable. Without a system for generating new business, you're leaving your growth up to chance and hoping the phone rings.",
        },
        {
          icon: Search,
          title: "Low Online Visibility",
          description: "When potential clients search for contractors in your area, your competitors show up instead. If you're not visible online, you're invisible to the customers who need you most.",
        },
      ]}
      problemHeadline="CONSTRUCTION MARKETING IS BROKEN"
      problemDescription="Most construction companies have no marketing strategy at all. They rely on word of mouth, outdated websites, and hope. Meanwhile, competitors who invest in clear messaging and digital marketing are winning the best projects and commanding higher prices."
      guideCredentials={[
        "StoryBrand Certified Agency",
        "320% ROI for Hines real estate",
        "Breakwater Construction case study success",
        "26+ years of marketing experience",
        "Full-service website, SEO, and video production",
      ]}
      caseStudy={{
        title: "Hines",
        slug: "hines",
        metric: "320%",
        description: "We helped Hines develop community-focused marketing that drove 320% ROI across their real estate developments.",
      }}
      portfolioTitles={["Breakwater Construction", "Hines", "Cornerstone Homes", "Amphibian Pool"]}
      faqs={[
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
      ]}
      ctaHeadline="READY TO BUILD YOUR PIPELINE?"
      ctaDescription="Let's create a marketing strategy that keeps your construction business booked."
      seo={{
        title: "Construction Marketing Agency | StoryBrand Certified | Business Builders",
        description: "StoryBrand Certified construction marketing agency helping contractors and builders generate consistent leads. 320% ROI for Hines. Full-service contractor marketing including websites, SEO, and video.",
        keywords: "construction marketing agency, contractor marketing, construction company marketing, builder marketing, storybrand construction, construction digital marketing",
      }}
    />
  );
}
