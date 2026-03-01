"use client";

import IndustryPageTemplate from "@/components/pages/industry-page-template";
import { AlertTriangle, TrendingDown, Search } from "lucide-react";

export default function ManufacturingPage() {
  return (
    <IndustryPageTemplate
      industry="Manufacturing"
      slug="manufacturing"
      heroHeadline="GROW YOUR"
      heroHighlight="MANUFACTURING BUSINESS"
      heroDescription="Manufacturers need to reach new markets and connect with decision-makers who are searching online. Relying on trade shows and cold calls alone isn't enough anymore. We help manufacturers build a digital presence that generates qualified leads."
      heroTagline="StoryBrand Certified. 450% more leads for Rulon International."
      heroImage="/service-branding.jpg"
      heroImageAlt="Manufacturing marketing strategy for industrial businesses"
      stats={[
        { number: "450%", label: "More leads for Rulon International" },
        { number: "26+", label: "Years marketing experience" },
        { number: "500+", label: "Projects delivered" },
        { number: "StoryBrand", label: "Certified Agency" },
      ]}
      painPoints={[
        {
          icon: AlertTriangle,
          title: "Complex Sales Cycle",
          description: "Long B2B sales cycles with multiple decision-makers make it hard to attribute results. Without clear messaging at every touchpoint, prospects drop off before they ever become customers.",
        },
        {
          icon: TrendingDown,
          title: "Outdated Marketing",
          description: "Still relying on trade shows and cold calls to generate business? These methods alone can't keep up with competitors who are capturing leads online 24/7 with modern digital marketing.",
        },
        {
          icon: Search,
          title: "Hard to Differentiate",
          description: "When your products seem like commodities, competing on price is a race to the bottom. Without a clear brand story, purchasing managers have no reason to choose you over cheaper alternatives.",
        },
      ]}
      problemHeadline="MANUFACTURING MARKETING NEEDS A NEW BLUEPRINT"
      problemDescription="Most manufacturers have outdated websites, no content strategy, and zero digital presence. While purchasing managers and engineers are researching solutions online, your competitors are showing up first. It's time for a new approach to manufacturing marketing."
      guideCredentials={[
        "StoryBrand Certified Agency",
        "450% lead increase for Rulon International",
        "B2B marketing expertise",
        "26+ years of marketing experience",
        "Full rebrand + video + web capabilities",
      ]}
      caseStudy={{
        title: "Rulon International",
        slug: "rulon-international",
        metric: "450%",
        description: "We helped Rulon International completely rebrand and implement digital marketing that generated 450% more qualified leads.",
      }}
      portfolioTitles={["Rulon International", "Premier Thermal", "Solar Stik", "Force Design"]}
      faqs={[
        {
          question: "How much does manufacturing marketing cost?",
          answer: "Manufacturing marketing investment varies based on your goals, target markets, and competitive landscape. Our plans typically range from $4,000 to $15,000+ per month and can include website redesign, SEO, content marketing, paid advertising, and video production. We create a custom strategy that aligns with your budget and growth objectives.",
        },
        {
          question: "How is B2B manufacturing marketing different from B2C?",
          answer: "B2B manufacturing marketing focuses on longer sales cycles, multiple decision-makers, and technical audiences. Content needs to educate and build trust over time. We create strategies that speak to engineers, purchasing managers, and C-suite executives with the right message at the right stage of the buying process.",
        },
        {
          question: "How important is SEO for manufacturers?",
          answer: "SEO is essential for manufacturers. Over 70% of B2B buyers start their research with a Google search. If your company doesn't appear when purchasing managers search for your products or solutions, you're losing business to competitors who do. We specialize in technical SEO and content strategies that rank for industry-specific terms.",
        },
        {
          question: "Should we invest in digital marketing or keep focusing on trade shows?",
          answer: "The most successful manufacturers do both, but digital marketing provides a consistent lead generation engine that works 24/7, not just a few days a year. Digital marketing also lets you nurture leads before and after trade shows, maximizing your ROI from every event. We help you build an integrated strategy that leverages both channels.",
        },
        {
          question: "How do we reach purchasing managers and engineers online?",
          answer: "We use a combination of SEO, targeted content marketing, LinkedIn advertising, and email nurturing to reach technical buyers where they research. By creating valuable content that addresses their specific challenges and questions, we position your company as the trusted expert in your space.",
        },
        {
          question: "Can you help rebrand a legacy manufacturing company?",
          answer: "Absolutely. We've helped legacy manufacturers like Rulon International completely transform their brand for the modern market. From logo and visual identity to messaging and website, we help established companies maintain their heritage while presenting a fresh, professional image that resonates with today's buyers.",
        },
      ]}
      ctaHeadline="READY TO GROW YOUR MANUFACTURING BUSINESS?"
      ctaDescription="Let's build a marketing strategy that reaches new markets and drives qualified leads."
      seo={{
        title: "Manufacturing Marketing Agency | StoryBrand Certified | Business Builders",
        description: "StoryBrand Certified manufacturing marketing agency helping industrial companies generate qualified leads. 450% more leads for Rulon International. Full-service B2B manufacturing marketing including websites, SEO, and video.",
        keywords: "manufacturing marketing agency, industrial marketing, B2B manufacturing marketing, factory marketing, storybrand manufacturing, industrial digital marketing",
      }}
    />
  );
}
