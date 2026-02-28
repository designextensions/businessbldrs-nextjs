interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQSchemaProps {
  serviceName: string;
  slug: string;
  faqs: FAQItem[];
}

export default function ServiceFAQSchema({ serviceName, slug, faqs }: ServiceFAQSchemaProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c')
      }}
    />
  );
}

export const websiteDesignFAQs: FAQItem[] = [
  {
    question: "How long does it take to build a custom website?",
    answer: "Most custom website designs take 6-12 weeks depending on complexity. Simple sites may be completed in 4-6 weeks, while complex e-commerce or custom functionality sites may take 12-16 weeks."
  },
  {
    question: "What is included in your website design packages?",
    answer: "Our website design packages include custom design, responsive development, SEO optimization, content integration, contact forms, analytics setup, and training. We also include ongoing support and maintenance options."
  },
  {
    question: "Do you offer website redesign services?",
    answer: "Yes, we specialize in website redesigns that modernize your online presence while preserving SEO equity. We analyze your current site, identify improvements, and create a fresh design that converts visitors into customers."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely. Every website we build uses responsive design principles to ensure perfect display on all devices - desktops, tablets, and smartphones. Mobile-first design is a core part of our process."
  }
];

export const seoServicesFAQs: FAQItem[] = [
  {
    question: "How long does SEO take to show results?",
    answer: "SEO typically takes 3-6 months to show significant results. However, you may see improvements in rankings and traffic within the first few weeks. Long-term success requires ongoing optimization and content creation."
  },
  {
    question: "What's included in your SEO services?",
    answer: "Our SEO services include technical audits, keyword research, on-page optimization, content strategy, link building, local SEO, monthly reporting, and competitor analysis. We create customized strategies based on your goals."
  },
  {
    question: "Do you guarantee first page rankings?",
    answer: "We don't guarantee specific rankings because Google's algorithm is complex and constantly changing. However, we do guarantee measurable improvements in organic traffic, keyword rankings, and online visibility using proven white-hat techniques."
  },
  {
    question: "What is local SEO and do I need it?",
    answer: "Local SEO optimizes your online presence to attract customers in your geographic area. If you serve local customers, local SEO is essential for appearing in Google Maps, local search results, and the map pack."
  }
];

export const hubspotFAQs: FAQItem[] = [
  {
    question: "What is HubSpot and why do I need it?",
    answer: "HubSpot is an all-in-one CRM platform that manages marketing, sales, and customer service. It helps businesses attract visitors, convert leads, and close customers more efficiently with automation and analytics."
  },
  {
    question: "Are you a certified HubSpot partner?",
    answer: "Yes, Business Builders is a HubSpot Platinum Partner. This means we have demonstrated expertise in HubSpot implementation, have completed rigorous certifications, and have a proven track record of successful deployments."
  },
  {
    question: "How long does HubSpot implementation take?",
    answer: "Basic HubSpot setup can be completed in 2-4 weeks. Full implementation with custom integrations, workflow automation, and team training typically takes 6-12 weeks depending on complexity."
  },
  {
    question: "Do you provide HubSpot training?",
    answer: "Yes, comprehensive training is included in all our HubSpot implementation packages. We train your team on CRM usage, marketing automation, sales tools, and reporting so you can maximize your investment."
  }
];

export const socialMediaFAQs: FAQItem[] = [
  {
    question: "Which social media platforms should my business be on?",
    answer: "The best platforms depend on your target audience and business type. B2B companies typically focus on LinkedIn, while B2C brands often prioritize Instagram and Facebook. We analyze your audience and recommend the right platform mix."
  },
  {
    question: "How often should I post on social media?",
    answer: "Posting frequency varies by platform. Generally, 1-2 posts per day on Facebook and LinkedIn, 1-3 posts per day on Instagram, and 3-5 tweets per day on Twitter are recommended. Quality and consistency matter more than quantity."
  },
  {
    question: "Do you manage social media advertising?",
    answer: "Yes, we manage paid social media campaigns across all major platforms including Facebook Ads, Instagram Ads, LinkedIn Ads, and TikTok Ads. We create, optimize, and report on campaigns to maximize your ROI."
  },
  {
    question: "Can you help with content creation?",
    answer: "Absolutely. Our team creates engaging content including graphics, videos, copywriting, and photography tailored to each platform. We develop content calendars aligned with your marketing goals and brand voice."
  }
];

export const brandingFAQs: FAQItem[] = [
  {
    question: "What's included in a brand identity package?",
    answer: "Our brand identity packages include logo design, color palette, typography selection, brand guidelines, business card design, and brand voice development. Extended packages add social media templates, letterhead, and marketing collateral."
  },
  {
    question: "How long does logo design take?",
    answer: "Our logo design process typically takes 2-4 weeks. This includes initial concepts, revisions, and final delivery of files in all necessary formats for print and digital use."
  },
  {
    question: "Do you offer brand strategy consulting?",
    answer: "Yes, we provide brand strategy consulting using the StoryBrand Framework. We help clarify your messaging, define your target audience, and create a compelling brand story that resonates with customers."
  },
  {
    question: "Can you rebrand an existing business?",
    answer: "Absolutely. We specialize in rebranding projects that refresh your visual identity while maintaining brand equity. We carefully transition existing customers to your new brand through strategic rollout planning."
  }
];

export const aiBlueprintFAQs: FAQItem[] = [
  {
    question: "What is an AI Blueprint?",
    answer: "An AI Blueprint is a comprehensive strategic plan that maps out exactly how your business can leverage artificial intelligence to improve efficiency, reduce costs, and gain a competitive edge. It includes an assessment of your current operations, identification of high-impact AI opportunities, custom workflow designs, and a phased implementation roadmap."
  },
  {
    question: "How long does the AI Blueprint process take?",
    answer: "The AI Blueprint process typically takes 2-4 weeks from discovery to final delivery. This includes an initial discovery session, research and analysis, strategy development and workflow design, and a final presentation with your complete blueprint document."
  },
  {
    question: "Do I need technical knowledge to use AI in my business?",
    answer: "Not at all. The AI Blueprint translates complex AI capabilities into plain-language strategies that any business leader can understand and act on. We handle the complexity so you can focus on running your business."
  },
  {
    question: "What kind of ROI can I expect from AI integration?",
    answer: "ROI varies by industry and implementation, but our clients typically see 30-60% reductions in manual task time, 2-5x improvements in content output, and measurable increases in lead quality and customer engagement within the first 90 days."
  }
];

export const aiDevelopmentFAQs: FAQItem[] = [
  {
    question: "What types of AI tools can you build for my business?",
    answer: "We build a wide range of custom AI solutions including intelligent chatbots, automated workflow engines, AI-powered search and knowledge bases, data intelligence dashboards, content generation pipelines, email and lead automation systems, and CRM integrations. Every solution is tailored to your specific business needs."
  },
  {
    question: "How do AI workflows integrate with my existing systems?",
    answer: "Our AI workflows are designed to plug directly into the tools you already use — HubSpot, Salesforce, Google Workspace, Slack, your CRM, email platforms, and more. We use APIs, webhooks, and native integrations to connect your AI tools seamlessly so your team doesn't have to change their daily habits."
  },
  {
    question: "How long does it take to build and deploy AI workflows?",
    answer: "Most AI workflow projects take 4-8 weeks from kickoff to deployment. Simple automations can be live in 2-3 weeks, while complex builds like custom knowledge bases or multi-step workflow engines typically take 6-10 weeks. We start with a blueprint review so you know the timeline upfront."
  },
  {
    question: "Do you provide ongoing support after deployment?",
    answer: "Absolutely. Every AI solution we build comes with post-launch support including monitoring, optimization, and troubleshooting. We offer ongoing maintenance plans with performance tracking, model tuning, workflow updates, and priority support to keep your tools improving over time."
  }
];

export const videoProductionFAQs: FAQItem[] = [
  {
    question: "What types of videos do you produce?",
    answer: "We produce corporate videos, testimonial videos, product demos, event coverage, social media content, explainer videos, and promotional commercials. Each video is tailored to your marketing goals and target audience."
  },
  {
    question: "How much does video production cost?",
    answer: "Our video packages start at $5,500 for Standard productions and range up to $15,000+ for Hollywood-quality productions. Pricing depends on length, complexity, location, and post-production requirements."
  },
  {
    question: "Do you handle scripting and storyboarding?",
    answer: "Yes, our video production services include concept development, scriptwriting, storyboarding, and pre-production planning. We ensure your message is clear and compelling before filming begins."
  },
  {
    question: "Where do you film videos?",
    answer: "We film on location at your business, at our studio, or at any location you choose. We serve clients throughout Northeast Florida including St. Augustine, Jacksonville, and surrounding areas."
  }
];
