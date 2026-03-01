"use client";

import IndustryPageTemplate from "@/components/pages/industry-page-template";
import { DollarSign, Users, MessageSquare } from "lucide-react";

export default function AutomotivePage() {
  return (
    <IndustryPageTemplate
      industry="Automotive"
      slug="automotive"
      heroHeadline="SELL MORE"
      heroHighlight="VEHICLES"
      heroDescription="Car dealerships are struggling to stand out in a saturated market. Without a clear message, your ads blend in with every other dealer on the lot. We help automotive businesses cut through the noise and drive real leads."
      heroTagline="StoryBrand Certified. 285% more leads for Bozard Ford Lincoln."
      heroImage="/service-video-new.jpg"
      heroImageAlt="Automotive marketing strategy for car dealerships"
      stats={[
        { number: "285%", label: "More leads for Bozard Ford" },
        { number: "26+", label: "Years marketing experience" },
        { number: "500+", label: "Projects delivered" },
        { number: "StoryBrand", label: "Certified Agency" },
      ]}
      painPoints={[
        {
          icon: DollarSign,
          title: "Wasted Ad Spend",
          description: "Dealerships throw money at ads without clear messaging, burning through budgets with little to show for it. Without a strategy, every dollar spent is a gamble.",
        },
        {
          icon: Users,
          title: "Crowded Market",
          description: "Every dealer claims to have the best price and the best service. When everyone sounds the same, customers have no reason to choose you over the competition.",
        },
        {
          icon: MessageSquare,
          title: "No Clear Message",
          description: "Customers are confused by cluttered marketing that tries to say everything at once. If your message isn't clear, your customers will look elsewhere.",
        },
      ]}
      problemHeadline="MOST AUTOMOTIVE MARKETING FAILS"
      problemDescription="Most dealerships look and sound exactly the same. The same stock photos, the same 'lowest price guaranteed' promises, the same forgettable ads. Without a clear, compelling message, your marketing is just noise — and your customers tune it out."
      guideCredentials={[
        "StoryBrand Certified Agency",
        "285% lead increase for Bozard Ford Lincoln",
        "Full-service video production for dealer campaigns",
        "26+ years of marketing experience",
        "Google Partner & HubSpot Platinum Partner",
      ]}
      caseStudy={{
        title: "Bozard Ford Lincoln",
        slug: "bozard-ford-lincoln",
        metric: "285%",
        description: "We helped Bozard Ford Lincoln clarify their message and implement a comprehensive digital marketing strategy that generated 285% more leads.",
      }}
      portfolioTitles={["Bozard Ford Lincoln"]}
      faqs={[
        {
          question: "How much does automotive marketing cost?",
          answer: "Automotive marketing investment varies based on your dealership's goals, market size, and competitive landscape. We offer customized plans that typically range from $3,000 to $15,000+ per month, depending on the scope of services. We'll work with you to create a plan that fits your budget and delivers measurable ROI.",
        },
        {
          question: "How long does it take to see results from automotive marketing?",
          answer: "Most dealerships start seeing increased traffic and leads within the first 60-90 days. SEO results build over 3-6 months, while paid advertising and social media campaigns can generate leads almost immediately. We set clear expectations and provide monthly reporting so you always know how your investment is performing.",
        },
        {
          question: "What marketing services do you offer for car dealerships?",
          answer: "We provide a full suite of marketing services for automotive businesses including website design, SEO, paid search advertising, social media marketing, video production, email marketing, and StoryBrand messaging. Everything is tailored specifically for the automotive industry to drive showroom traffic and vehicle sales.",
        },
        {
          question: "How does StoryBrand work for the auto industry?",
          answer: "StoryBrand helps your dealership position the customer as the hero and your dealership as the guide. Instead of leading with inventory and prices, we craft a message that speaks to what car buyers actually want — a trusted dealer who makes the buying experience simple and stress-free. This approach has proven to dramatically increase engagement and leads.",
        },
        {
          question: "How do you measure ROI for automotive marketing?",
          answer: "We track everything from website traffic and lead form submissions to phone calls, chat conversations, and showroom visits. Using tools like Google Analytics, HubSpot, and call tracking, we provide transparent monthly reports that show exactly how your marketing investment is performing and where every dollar is going.",
        },
        {
          question: "Do you work with independent dealers or just large dealerships?",
          answer: "We work with dealerships of all sizes, from independent used car dealers to multi-location franchise groups. Our strategies are scalable and customized to fit your specific market, budget, and growth goals. Every dealership deserves marketing that actually works, regardless of size.",
        },
      ]}
      ctaHeadline="READY TO SELL MORE VEHICLES?"
      ctaDescription="Let's build a marketing strategy that gets customers on your lot and into your vehicles."
      seo={{
        title: "Automotive Marketing Agency | StoryBrand Certified | Business Builders",
        description: "StoryBrand Certified automotive marketing agency helping car dealerships generate more leads and sell more vehicles. 285% more leads for Bozard Ford Lincoln. Full-service auto dealer digital marketing.",
        keywords: "automotive marketing agency, car dealership marketing, auto dealer digital marketing, automotive SEO, storybrand automotive, vehicle sales marketing",
      }}
    />
  );
}
