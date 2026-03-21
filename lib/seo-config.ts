export interface PageSEO {
  title: string;
  description: string;
  h1: string;
  keywords: string;
  ogImage?: string;
}

export const seoConfig: Record<string, PageSEO> = {
  home: {
    title: "Full-Service Marketing Agency",
    description: "Business Builders helps businesses grow with StoryBrand messaging, web design, SEO, HubSpot implementation, and digital marketing since 1999.",
    h1: "Marketing Agency",
    keywords: "marketing agency, storybrand marketing agency, web design, seo services, hubspot partner, business builders",
    ogImage: "https://businessbldrs.com/og-image.jpg"
  },
  stAugustine: {
    title: "St. Augustine Marketing Agency",
    description: "St. Augustine marketing agency since 1999. HubSpot Platinum Partner & StoryBrand Certified. Web design, SEO, social media & branding.",
    h1: "St. Augustine Marketing Agency",
    keywords: "st augustine marketing agency, st augustine digital marketing, st augustine seo, st augustine web design, marketing company st augustine fl",
    ogImage: "https://businessbldrs.com/og-image.jpg"
  },
  about: {
    title: "About Us — 26+ Years of Excellence",
    description: "About Business Builders — a St. Augustine marketing agency since 1999. Meet our team of HubSpot-certified, StoryBrand-trained marketing experts.",
    h1: "Your Upgraded Marketing Team",
    keywords: "about business builders, st augustine marketing team",
    ogImage: "https://businessbldrs.com/og-image.jpg"
  },
  services: {
    title: "Digital Marketing Services",
    description: "Full-service marketing agency offering web design, SEO, content creation, social media and HubSpot solutions. StoryBrand Certified.",
    h1: "Digital Marketing Services",
    keywords: "marketing services, web design, seo services, hubspot agency"
  },
  marketingServices: {
    title: "Marketing Services & Strategy",
    description: "Comprehensive marketing services including SEO, PPC, social media, email marketing and content strategy. StoryBrand Certified, HubSpot Partner.",
    h1: "Marketing Services",
    keywords: "marketing services, digital marketing, seo, ppc, social media marketing, email marketing, content strategy"
  },
  marketingStrategyConsulting: {
    title: "Marketing Strategy Consulting",
    description: "Expert marketing strategy consulting to accelerate growth. Competitive research, customer journey mapping, channel strategy and measurable KPIs.",
    h1: "Marketing Strategy Consulting",
    keywords: "marketing strategy consulting, marketing consultant, business growth strategy, marketing plan"
  },
  branding: {
    title: "Brand Design Services",
    description: "Professional branding and logo design in St. Augustine FL. Brand strategy, visual identity, photography and print design that stands out.",
    h1: "Brand Design Services",
    keywords: "brand design st augustine, logo design florida, branding agency"
  },
  contact: {
    title: "Contact Us",
    description: "Request a free marketing quote from Business Builders. Web design, SEO, social media, HubSpot and branding in St. Augustine & Jacksonville.",
    h1: "Contact Us",
    keywords: "contact business builders, st augustine marketing contact"
  },
  portfolio: {
    title: "Portfolio & Case Studies",
    description: "See our work — website design, branding, video and marketing projects for Florida businesses. Real case studies with measurable results.",
    h1: "Portfolio & Case Studies",
    keywords: "marketing case studies, portfolio, client results"
  },
  caseStudyBozard: {
    title: "Bozard Ford Lincoln Case Study",
    description: "How Business Builders helped Bozard Ford Lincoln achieve a 285% increase in qualified leads through digital marketing and website redesign.",
    h1: "Bozard Ford Lincoln Case Study",
    keywords: "bozard ford lincoln case study, automotive marketing, car dealership marketing, lead generation"
  },
  caseStudyAllProDad: {
    title: "All Pro Dad Case Study",
    description: "How Business Builders helped All Pro Dad expand their national reach with StoryBrand messaging, web design, and digital marketing strategy.",
    h1: "All Pro Dad Case Study",
    keywords: "all pro dad case study, nonprofit marketing, storybrand messaging, national outreach"
  },
  caseStudyHines: {
    title: "Hines Case Study",
    description: "How Business Builders helped Hines strengthen their brand presence with strategic marketing, web design, and targeted digital campaigns.",
    h1: "Hines Case Study",
    keywords: "hines case study, business marketing, brand strategy, digital campaigns"
  },
  caseStudyRulon: {
    title: "Rulon International Case Study",
    description: "How Business Builders helped Rulon International achieve a 450% increase in qualified leads through digital transformation and marketing.",
    h1: "Rulon International Case Study",
    keywords: "rulon international case study, manufacturing marketing, lead generation, digital transformation"
  },
  caseStudyBreakwater: {
    title: "Breakwater Construction Case Study",
    description: "How Business Builders helped Breakwater Construction grow with StoryBrand messaging, a new website, and targeted digital marketing.",
    h1: "Breakwater Construction Case Study",
    keywords: "breakwater construction case study, construction marketing, storybrand website, contractor marketing"
  },
  articles: {
    title: "Marketing Blog & Resources",
    description: "Marketing tips, strategies, and resources from Business Builders. Expert advice on SEO, HubSpot, social media, and growing your business.",
    h1: "Marketing Articles & Resources",
    keywords: "marketing blog, marketing tips, business growth resources"
  },
  downloads: {
    title: "Free Marketing Templates & Guides",
    description: "Download free marketing templates, checklists, and guides. 26+ years of expertise distilled into actionable resources for your business.",
    h1: "Free Marketing Downloads",
    keywords: "free marketing templates, marketing guides, business checklists"
  },
  requestQuote: {
    title: "Request a Free Marketing Quote",
    description: "Get a free marketing consultation and quote from Business Builders. Share your business goals and we will create a custom marketing plan.",
    h1: "Request a Free Quote",
    keywords: "free marketing quote, marketing consultation, business growth plan"
  },
  costCalculator: {
    title: "Marketing Cost Calculator",
    description: "Estimate your marketing investment with our interactive cost calculator. Get transparent pricing for web design, SEO, and digital marketing.",
    h1: "Marketing Cost Calculator",
    keywords: "marketing cost calculator, marketing pricing, web design cost, seo pricing, digital marketing budget"
  },
  team: {
    title: "Meet Our Marketing Team",
    description: "Meet the talented marketing experts at Business Builders. Our team brings 26+ years of experience in web design, SEO, and digital marketing.",
    h1: "Meet Our Team",
    keywords: "business builders team, marketing experts, st augustine marketing team"
  },
  testimonials: {
    title: "Client Testimonials & Reviews",
    description: "Read what our clients say about working with Business Builders. Real testimonials from businesses, ministries, and nonprofits we helped grow.",
    h1: "Client Testimonials",
    keywords: "business builders reviews, marketing agency testimonials, client success stories"
  },
  websiteDesign: {
    title: "Website Design & Development",
    description: "Custom website design and development in St. Augustine FL. Responsive, SEO-optimized, ADA-compliant sites built to convert visitors.",
    h1: "Website Design & Development",
    keywords: "website design, web development, wordpress development, shopify development"
  },
  maintenance: {
    title: "Website Maintenance & Support",
    description: "Reliable website maintenance and support plans in St. Augustine FL. Security updates, performance monitoring, backups, and ongoing care.",
    h1: "Website Maintenance & Support",
    keywords: "website maintenance, website support, wordpress maintenance, site security updates, website care plans"
  },
  seoServices: {
    title: "SEO Services St. Augustine",
    description: "Professional SEO services in St. Augustine and Jacksonville FL. Keyword research, on-page optimization, local SEO, and analytics reporting.",
    h1: "SEO Services",
    keywords: "seo services, search engine optimization, local seo, st augustine seo"
  },
  freeSeoAudit: {
    title: "Free SEO Audit",
    description: "Get a free SEO audit of your website from Business Builders. Discover ranking opportunities, technical issues, and a plan to increase traffic.",
    h1: "Free SEO Audit",
    keywords: "free seo audit, website audit, seo analysis, site health check, search engine audit"
  },
  videoProduction: {
    title: "Video Production Services",
    description: "Professional video production for marketing in St. Augustine and Jacksonville FL. Brand videos, testimonials, social media, and aerial footage.",
    h1: "Video Production Services",
    keywords: "video production, brand videos, testimonial videos, commercial production"
  },
  hubspot: {
    title: "HubSpot Implementation",
    description: "HubSpot Platinum Partner in Florida. CRM setup, marketing automation, sales pipeline, onboarding and training for your HubSpot investment.",
    h1: "HubSpot Implementation",
    keywords: "hubspot implementation, hubspot partner, hubspot services"
  },
  whatIsStorybrand: {
    title: "What Is StoryBrand?",
    description: "Learn what StoryBrand is, how the 7-part framework works, and why it helps businesses clarify their message and convert more customers.",
    h1: "What Is StoryBrand?",
    keywords: "what is storybrand, storybrand framework, donald miller storybrand, building a storybrand, storybrand explained, 7 part storybrand framework"
  },
  storybrandBrandscript: {
    title: "What Is a StoryBrand BrandScript?",
    description: "The StoryBrand BrandScript is the foundation of all your marketing. Learn what it includes and how a certified agency builds one for your business.",
    h1: "StoryBrand BrandScript",
    keywords: "storybrand brandscript, how to write a brandscript, brandscript template, storybrand messaging, brand messaging framework"
  },
  storybrandWebsite: {
    title: "StoryBrand Website Design",
    description: "Discover the 8 must-have elements of a StoryBrand website and the common mistakes that kill conversions. See sites that actually convert.",
    h1: "What a StoryBrand Website Looks Like",
    keywords: "storybrand website, storybrand web design, storybrand website design, storybrand homepage, website that converts"
  },
  whatIsAStorybrandAgency: {
    title: "StoryBrand Certified Agency Guide",
    description: "Learn what a StoryBrand Certified Agency does, the services they provide, and what to ask before hiring one. We are certified by Donald Miller.",
    h1: "What Does a StoryBrand Certified Agency Do?",
    keywords: "what is a storybrand agency, storybrand certified agency, what does a storybrand agency do, how to find a storybrand agency, certified storybrand guide"
  },
  storybrandAgency: {
    title: "StoryBrand Certified Agency",
    description: "Business Builders is a StoryBrand Certified Agency with 26+ years of experience. Endorsed by Donald Miller. Clear message, proven strategy, real growth.",
    h1: "StoryBrand Marketing Agency",
    keywords: "storybrand certified agency, storybrand agency, storybrand marketing agency, certified storybrand guide, donald miller storybrand agency, storybrand agency florida"
  },
  storybrandMessaging: {
    title: "StoryBrand Messaging Blueprint",
    description: "Build a clear StoryBrand messaging blueprint with proven frameworks, brand scripts, and actionable marketing plans for your business.",
    h1: "StoryBrand Messaging Blueprint",
    keywords: "storybrand messaging, marketing blueprint, storybrand brandscript, brand messaging strategy"
  },
  storybrandFramework: {
    title: "StoryBrand Framework Guide",
    description: "Learn the StoryBrand Framework and how clear messaging helps businesses connect with customers and increase conversions effectively.",
    h1: "StoryBrand Framework",
    keywords: "storybrand framework, donald miller storybrand, storybrand 7 part framework, brandscript guide"
  },
  socialMedia: {
    title: "Social Media Marketing",
    description: "Social media marketing services in St. Augustine and Jacksonville FL. Strategy, content creation, scheduling and reporting across all platforms.",
    h1: "Social Media Marketing",
    keywords: "social media marketing, social media management, social media advertising"
  },
  appDevelopment: {
    title: "App Development Services",
    description: "Custom mobile app development for iOS, Android and web in St. Augustine FL. From concept to launch, we build apps that grow your business.",
    h1: "Application Development",
    keywords: "app development, mobile app development, web application development"
  },
  aiDevelopment: {
    title: "AI Development Services",
    description: "Custom AI and machine learning solutions for businesses. Chatbots, automation, data analysis and intelligent integrations. StoryBrand Certified agency.",
    h1: "AI Development Services",
    keywords: "ai development, machine learning, chatbot development, ai automation, artificial intelligence services"
  },
  resources: {
    title: "Marketing Resources & Tools",
    description: "Free marketing resources, tools, and guides from Business Builders. Access templates, checklists, videos, and expert insights to grow your business.",
    h1: "Marketing Resources",
    keywords: "marketing resources, marketing tools, free marketing guides"
  },
  tools: {
    title: "Free Marketing Tools",
    description: "Free interactive marketing tools from Business Builders. SEO auditors, cost calculators, and marketing scorecards to help you evaluate your strategy.",
    h1: "Marketing Tools",
    keywords: "free marketing tools, seo audit tool, marketing calculator, marketing assessment"
  },
  videos: {
    title: "Marketing Video Library",
    description: "Watch marketing strategy and growth videos from Business Builders. Tips on StoryBrand, SEO, branding, web design, and digital marketing best practices.",
    h1: "Marketing Videos",
    keywords: "marketing videos, storybrand videos, seo tutorial videos, business growth videos"
  },
  websiteTraining: {
    title: "Website Training & Tutorials",
    description: "Step-by-step website training and tutorials from Business Builders. Learn to manage your WordPress site, update content, and optimize performance.",
    h1: "Website Training",
    keywords: "website training, wordpress tutorials, website management training, cms training"
  },
  marketingPlanBuilder: {
    title: "Marketing Plan Builder",
    description: "Build a custom marketing plan for your business with our interactive tool. Define goals, identify channels, and create an actionable growth roadmap.",
    h1: "Marketing Plan Builder",
    keywords: "marketing plan builder, marketing plan template, marketing strategy tool, business marketing plan"
  },
  aiBlueprint: {
    title: "AI Marketing Blueprint",
    description: "Get a custom AI marketing blueprint for your business. Discover how AI can automate tasks, improve targeting, and accelerate your marketing results.",
    h1: "AI Marketing Blueprint",
    keywords: "ai marketing blueprint, ai marketing strategy, ai automation plan, marketing ai integration"
  },
  maccsupport: {
    title: "MACC Partner Support",
    description: "Dedicated marketing and technical support for MACC partners. Website updates, design services, and digital marketing through your MACC partnership.",
    h1: "MACC Partner Support",
    keywords: "macc support, macc partner services, macc marketing support, macc website services"
  },
  privacyPolicy: {
    title: "Privacy Policy",
    description: "Business Builders privacy policy. Learn how we collect, use, and protect your personal data when you visit our website and use our marketing services.",
    h1: "Privacy Policy",
    keywords: "privacy policy, data protection, personal information, business builders privacy"
  },
  portfolioBreakwater: {
    title: "Breakwater Construction Portfolio",
    description: "See how Business Builders transformed Breakwater Construction's brand and digital presence. Website redesign, branding, and marketing portfolio showcase.",
    h1: "Breakwater Construction Portfolio",
    keywords: "breakwater construction portfolio, construction marketing portfolio, website redesign case study"
  },
  events: {
    title: "Marketing Events & Workshops",
    description: "Join Business Builders for marketing workshops, webinars, and networking events. Learn proven marketing strategies from industry professionals.",
    h1: "Events & Workshops",
    keywords: "marketing events, business workshops, marketing webinars"
  },
  palmCoast: {
    title: "Palm Coast Marketing Agency",
    description: "Palm Coast marketing agency offering website design, SEO, branding, video production, and digital marketing. 26+ years experience nearby in St. Augustine.",
    h1: "Palm Coast's Go-To Marketing Agency",
    keywords: "palm coast marketing agency, palm coast web design, palm coast seo, marketing company palm coast fl"
  },
  ponteVedra: {
    title: "Ponte Vedra Beach Marketing Agency",
    description: "Ponte Vedra Beach marketing agency offering website design, SEO, branding, video, and digital marketing. 26+ years experience nearby in St. Augustine.",
    h1: "Ponte Vedra Beach's Trusted Marketing Agency",
    keywords: "ponte vedra beach marketing agency, ponte vedra web design, ponte vedra seo, marketing company ponte vedra fl"
  },
  orangePark: {
    title: "Orange Park Marketing Agency",
    description: "Orange Park marketing agency offering website design, SEO, branding, video production, and digital marketing. 26+ years experience in St. Augustine.",
    h1: "Orange Park's Go-To Marketing Agency",
    keywords: "orange park marketing agency, orange park web design, orange park seo, clay county marketing agency"
  },
  jacksonville: {
    title: "Jacksonville Marketing Agency",
    description: "Jacksonville marketing agency offering website design, SEO, branding, video, and digital marketing. HubSpot Platinum Partner since 1999.",
    h1: "Jacksonville's Trusted Marketing Agency",
    keywords: "jacksonville marketing agency, jacksonville web design, jacksonville seo, marketing company jacksonville fl"
  },
  gainesville: {
    title: "Gainesville Marketing Agency",
    description: "Gainesville marketing agency offering website design, SEO, branding, video, and digital marketing. HubSpot Platinum Partner. 26+ years experience.",
    h1: "Gainesville's Trusted Marketing Agency",
    keywords: "gainesville marketing agency, gainesville web design, gainesville seo, alachua county marketing agency"
  },
  daytonaBeach: {
    title: "Daytona Beach Marketing Agency",
    description: "Daytona Beach marketing agency offering website design, SEO, branding, video production, and digital marketing. 26+ years experience in St. Augustine.",
    h1: "Daytona Beach's Go-To Marketing Agency",
    keywords: "daytona beach marketing agency, daytona beach web design, daytona beach seo, volusia county marketing agency"
  },
  giveaway: {
    title: "Win Future Focused Leaders Tickets",
    description: "Enter to win 1 of 5 free tickets ($1,947 value) to the Future Focused Leaders Summit: AI & Community. April 6-8, 2026 in St. Augustine Beach, FL.",
    h1: "Win Tickets to the Future Focused Leaders Summit",
    keywords: "future focused leaders summit, free tickets giveaway, ai summit florida, business leadership event, st augustine conference 2026",
    ogImage: "https://businessbldrs.com/og-image.jpg"
  },
  ministryBlueprint: {
    title: "Ministry Marketing Blueprint",
    description: "A free marketing blueprint designed for ministries and faith-based organizations. Proven strategies to grow your reach and engage your community.",
    h1: "Ministry Marketing Blueprint",
    keywords: "ministry marketing, church marketing, faith-based marketing, nonprofit marketing blueprint, ministry growth"
  },
  grant: {
    title: "$25,000 Small Business Grant",
    description: "Enter to win a $25,000 Messaging & Website Redesign. Exclusive to Scale with Stability attendees. StoryBrand BrandScript + full website redesign.",
    h1: "$25,000 Small Business Grant",
    keywords: "small business grant, free website redesign, storybrand brandscript, scale with stability, business builders grant",
    ogImage: "https://businessbldrs.com/og-image.jpg"
  },
  sws: {
    title: "$25,000 Grant — Scale with Stability",
    description: "Exclusive to Scale with Stability attendees. Enter to win a $25,000 Messaging & Website Redesign — StoryBrand BrandScript plus full custom website.",
    h1: "$25,000 Small Business Grant",
    keywords: "scale with stability grant, small business grant, free website redesign, storybrand brandscript, sws attendees, business builders grant",
    ogImage: "https://businessbldrs.com/og-image.jpg"
  }
};

export const BASE_URL = "https://businessbldrs.com";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Business Builders",
  "alternateName": "Business Builders Marketing Agency",
  "url": "https://businessbldrs.com",
  "logo": "https://businessbldrs.com/logo-full.png",
  "foundingDate": "1999",
  "description": "Professional marketing agency with 26+ years of experience helping businesses grow through strategic planning, content creation, and targeted promotion.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "701 Market St Ste 101",
    "addressLocality": "St. Augustine",
    "addressRegion": "FL",
    "postalCode": "32095",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-877-378-6101",
    "contactType": "customer service",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://www.facebook.com/businessbldrs",
    "https://twitter.com/businessbldrs",
    "https://www.linkedin.com/company/businessbldrs"
  ]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://businessbldrs.com/#localbusiness",
  "name": "Business Builders",
  "image": "https://businessbldrs.com/logo-full.png",
  "url": "https://businessbldrs.com",
  "telephone": "+1-877-378-6101",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "701 Market St Ste 101",
    "addressLocality": "St. Augustine",
    "addressRegion": "FL",
    "postalCode": "32095",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 29.8946,
    "longitude": -81.3145
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "17:00"
  }
};

export function getBreadcrumbSchema(pageName: string, pagePath: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://businessbldrs.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": pageName,
        "item": `https://businessbldrs.com${pagePath}`
      }
    ]
  };
}

export function extractYouTubeVideoIds(html: string): string[] {
  const regex = /(?:youtube\.com\/embed\/|youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/g;
  const ids: string[] = [];
  let match;
  while ((match = regex.exec(html)) !== null) {
    if (!ids.includes(match[1])) {
      ids.push(match[1]);
    }
  }
  return ids;
}

export function getArticleVideoSchemas(article: {
  title: string;
  description: string;
  datePublished: string;
  content?: string;
}) {
  if (!article.content) return [];
  const videoIds = extractYouTubeVideoIds(article.content);
  return videoIds.map((videoId, index) => ({
    "@type": "VideoObject",
    "name": `${article.title}${videoIds.length > 1 ? ` - Video ${index + 1}` : ''}`,
    "description": article.description,
    "thumbnailUrl": `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
    "embedUrl": `https://www.youtube.com/embed/${videoId}`,
    "uploadDate": article.datePublished,
    "publisher": {
      "@type": "Organization",
      "name": "Business Builders"
    }
  }));
}

export function getArticleSchema(article: {
  title: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  slug: string;
  author?: string;
}) {
  const baseUrl = "https://businessbldrs.com";
  const pageUrl = `${baseUrl}/resources/articles/${article.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": article.image || `${baseUrl}/og-image.png`,
    "datePublished": article.datePublished,
    "dateModified": article.dateModified || article.datePublished,
    "author": article.author
      ? { "@type": "Person", "name": article.author }
      : { "@type": "Organization", "name": "Business Builders" },
    "publisher": {
      "@type": "Organization",
      "name": "Business Builders",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo-full.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": pageUrl
    },
    "url": pageUrl
  };
}
