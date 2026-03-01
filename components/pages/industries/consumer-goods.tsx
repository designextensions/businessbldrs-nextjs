"use client";

import IndustryPageTemplate from "@/components/pages/industry-page-template";
import { Eye, MessageSquare, ShoppingCart } from "lucide-react";

export default function ConsumerGoodsPage() {
  return (
    <IndustryPageTemplate
      industry="Consumer Goods"
      slug="consumer-goods"
      heroHeadline="SELL MORE"
      heroHighlight="PRODUCTS"
      heroDescription="Your product is amazing, but standing out on crowded shelves and in endless online marketplaces is harder than ever. Without a compelling brand story and smart marketing strategy, even the best products get lost in the noise."
      heroTagline="StoryBrand Certified. Branding and marketing that moves products."
      heroImage="/service-branding.jpg"
      heroImageAlt="Consumer goods marketing agency services"
      stats={[
        { number: "26+", label: "Years marketing experience" },
        { number: "500+", label: "Projects delivered" },
        { number: "StoryBrand", label: "Certified Agency" },
        { number: "100%", label: "Brand-focused strategies" },
      ]}
      painPoints={[
        {
          icon: Eye,
          title: "Brand Invisibility",
          description: "You've created a great product, but nobody knows about it. Without brand awareness and visibility, your product sits on shelves while competitors with inferior products outsell you.",
        },
        {
          icon: MessageSquare,
          title: "No Story",
          description: "You're leading with features and specs, but that's not what sells products. Consumers buy stories, emotions, and transformations — not ingredient lists and technical details.",
        },
        {
          icon: ShoppingCart,
          title: "Channel Confusion",
          description: "Between retail, e-commerce, Amazon, social media, and direct-to-consumer, you're not sure where to focus your marketing dollars for maximum impact and return on investment.",
        },
      ]}
      problemHeadline="GREAT PRODUCTS DON'T SELL THEMSELVES"
      problemDescription="You've created something amazing, but the market doesn't know about it yet. Without clear branding and a compelling story, even the best products get overlooked."
      guideCredentials={[
        "StoryBrand Certified Agency",
        "Brand strategy and identity design",
        "E-commerce and product marketing",
        "26+ years of marketing experience",
        "Full-service video production and photography",
      ]}
      portfolioTitles={["Scoville Vodka", "Fit Organic", "1st Products"]}
      faqs={[
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
      ]}
      ctaHeadline="READY TO SELL MORE PRODUCTS?"
      ctaDescription="Let's build a brand and marketing strategy that gets your products in front of the right customers."
      seo={{
        title: "Consumer Goods Marketing Agency | StoryBrand Certified | Business Builders",
        description: "StoryBrand Certified consumer goods marketing agency with 26+ years of experience. We help product brands grow through strategic branding, e-commerce marketing, and compelling storytelling.",
        keywords: "consumer goods marketing agency, product marketing, CPG marketing agency, e-commerce marketing, brand marketing agency, storybrand consumer goods, product launch marketing",
      }}
    />
  );
}
