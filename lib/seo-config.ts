export interface PageSEO {
  title: string;
  description: string;
  h1: string;
  keywords: string;
  ogImage?: string;
}

export const seoConfig: Record<string, PageSEO> = {
  home: {
    title: "St. Augustine Marketing Agency | Business Builders",
    description: "St. Augustine full-service marketing agency since 1999. HubSpot Platinum Partner & StoryBrand Certified. Web design, SEO, social media, branding & video. Call 877-378-6101.",
    h1: "St. Augustine Marketing Agency",
    keywords: "st augustine marketing agency, florida marketing company, business builders",
    ogImage: "https://businessbldrs.com/social-share-home.png"
  },
  about: {
    title: "About Business Builders | 26+ Years of Marketing Excellence",
    description: "About Business Builders — a St. Augustine marketing agency since 1999. Meet our team of HubSpot-certified, StoryBrand-trained marketing experts.",
    h1: "About Business Builders",
    keywords: "about business builders, st augustine marketing team",
    ogImage: "https://businessbldrs.com/wp-content/uploads/2024/12/BB-2023-Office-Content-Shoot-6961-1024x576.jpg"
  },
  services: {
    title: "Marketing Services | Business Builders",
    description: "Full-service marketing agency offering web design, SEO, content creation, social media & HubSpot solutions. StoryBrand Certified.",
    h1: "Digital Marketing Services",
    keywords: "marketing services, web design, seo services, hubspot agency"
  },
  branding: {
    title: "Brand Design Services St. Augustine | Free Consultation",
    description: "Professional branding & logo design in St. Augustine FL. Brand strategy, visual identity, photography & print design that makes your business stand out.",
    h1: "Brand Design Services",
    keywords: "brand design st augustine, logo design florida, branding agency"
  },
  contact: {
    title: "Contact Business Builders | St. Augustine Marketing Agency",
    description: "Request a free marketing quote from Business Builders. Web design, SEO, social media, HubSpot & branding services in St. Augustine & Jacksonville.",
    h1: "Contact Us",
    keywords: "contact business builders, st augustine marketing contact"
  },
  portfolio: {
    title: "Marketing Case Studies & Results | Business Builders",
    description: "See our work — website design, branding, video & marketing projects for businesses across Florida. Case studies with measurable results.",
    h1: "Portfolio & Case Studies",
    keywords: "marketing case studies, portfolio, client results"
  },
  articles: {
    title: "Marketing Blog & Resources | Business Builders",
    description: "Marketing tips, strategies, and resources from Business Builders. Expert advice on SEO, HubSpot, social media, and growing your business.",
    h1: "Marketing Articles & Resources",
    keywords: "marketing blog, marketing tips, business growth resources"
  },
  downloads: {
    title: "Free Marketing Templates & Guides | Business Builders",
    description: "Download free marketing templates, checklists, and guides. 26+ years of marketing expertise distilled into actionable resources for your business.",
    h1: "Free Marketing Downloads",
    keywords: "free marketing templates, marketing guides, business checklists"
  },
  requestQuote: {
    title: "Request a Free Marketing Quote | Business Builders",
    description: "Get a free marketing consultation and quote from Business Builders. Tell us about your business goals and we'll create a custom marketing plan.",
    h1: "Request a Free Quote",
    keywords: "free marketing quote, marketing consultation, business growth plan"
  },
  team: {
    title: "Meet Our Team | Business Builders Marketing Agency",
    description: "Meet the talented marketing experts at Business Builders. Our team brings 26+ years of combined experience in web design, SEO, and digital marketing.",
    h1: "Meet Our Team",
    keywords: "business builders team, marketing experts, st augustine marketing team"
  },
  testimonials: {
    title: "Client Testimonials & Reviews | Business Builders",
    description: "Read what our clients say about working with Business Builders. Real testimonials from businesses, ministries, and nonprofits we've helped grow.",
    h1: "Client Testimonials",
    keywords: "business builders reviews, marketing agency testimonials, client success stories"
  },
  websiteDesign: {
    title: "Website Design & Development | Business Builders",
    description: "Custom website design & development in St. Augustine FL. Responsive, SEO-optimized, ADA-compliant sites built to convert visitors into customers.",
    h1: "Website Design & Development",
    keywords: "website design, web development, wordpress development, shopify development"
  },
  seoServices: {
    title: "SEO Services St. Augustine | Business Builders",
    description: "Professional SEO services in St. Augustine & Jacksonville FL. Keyword research, on-page optimization, local SEO & analytics. Free SEO audit available.",
    h1: "SEO Services",
    keywords: "seo services, search engine optimization, local seo, st augustine seo"
  },
  videoProduction: {
    title: "Video Production Services | Business Builders",
    description: "Professional video production for marketing in St. Augustine & Jacksonville FL. Brand videos, testimonials, social media content & aerial footage.",
    h1: "Video Production Services",
    keywords: "video production, brand videos, testimonial videos, commercial production"
  },
  hubspot: {
    title: "HubSpot Implementation & Services | Business Builders",
    description: "HubSpot Platinum Partner in Florida. CRM setup, marketing automation, sales pipeline, onboarding & training. Get more from your HubSpot investment.",
    h1: "HubSpot Implementation",
    keywords: "hubspot implementation, hubspot partner, hubspot services"
  },
  storybrand: {
    title: "StoryBrand Messaging Framework | Business Builders",
    description: "StoryBrand messaging workshops & brand script development. Clarify your message so customers engage. Certified StoryBrand Guide in Florida.",
    h1: "StoryBrand Messaging",
    keywords: "storybrand, messaging framework, brand messaging, storybrand certified"
  },
  socialMedia: {
    title: "Social Media Marketing Services | Business Builders",
    description: "Social media marketing services in St. Augustine & Jacksonville FL. Strategy, content creation, scheduling & reporting for Facebook, Instagram, LinkedIn.",
    h1: "Social Media Marketing",
    keywords: "social media marketing, social media management, social media advertising"
  },
  appDevelopment: {
    title: "App Development Services | Business Builders",
    description: "Custom mobile app development for iOS, Android & web in St. Augustine FL. From concept to launch, we build apps that grow your business.",
    h1: "Application Development",
    keywords: "app development, mobile app development, web application development"
  },
  resources: {
    title: "Marketing Resources & Tools | Business Builders",
    description: "Free marketing resources, tools, and guides from Business Builders. Access templates, checklists, videos, and expert insights to grow your business.",
    h1: "Marketing Resources",
    keywords: "marketing resources, marketing tools, free marketing guides"
  },
  events: {
    title: "Marketing Events & Workshops | Business Builders",
    description: "Join Business Builders for marketing workshops, webinars, and events. Learn marketing strategies and network with business professionals.",
    h1: "Events & Workshops",
    keywords: "marketing events, business workshops, marketing webinars"
  },
  palmCoast: {
    title: "Palm Coast Marketing Agency | Web Design & SEO | Business Builders",
    description: "Business Builders serves Palm Coast businesses with website design, SEO, branding, video production & digital marketing. 26+ years experience. Based in nearby St. Augustine. Call 877-378-6101.",
    h1: "Palm Coast's Go-To Marketing Agency",
    keywords: "palm coast marketing agency, palm coast web design, palm coast seo, marketing company palm coast fl"
  },
  ponteVedra: {
    title: "Ponte Vedra Beach Marketing Agency | Web Design & SEO | Business Builders",
    description: "Business Builders serves Ponte Vedra Beach businesses with website design, SEO, branding, video production & digital marketing. 26+ years experience. Based in nearby St. Augustine. Call 877-378-6101.",
    h1: "Ponte Vedra Beach's Trusted Marketing Agency",
    keywords: "ponte vedra beach marketing agency, ponte vedra web design, ponte vedra seo, marketing company ponte vedra fl"
  },
  orangePark: {
    title: "Orange Park Marketing Agency | Web Design & SEO | Business Builders",
    description: "Business Builders serves Orange Park businesses with website design, SEO, branding, video production & digital marketing. 26+ years experience. Based in nearby St. Augustine. Call 877-378-6101.",
    h1: "Orange Park's Go-To Marketing Agency",
    keywords: "orange park marketing agency, orange park web design, orange park seo, clay county marketing agency"
  },
  gainesville: {
    title: "Gainesville Marketing Agency | Web Design & SEO | Business Builders",
    description: "Business Builders serves Gainesville businesses with website design, SEO, branding, video production & digital marketing. 26+ years experience. HubSpot Platinum Partner. Call 877-378-6101.",
    h1: "Gainesville's Trusted Marketing Agency",
    keywords: "gainesville marketing agency, gainesville web design, gainesville seo, alachua county marketing agency"
  },
  daytonaBeach: {
    title: "Daytona Beach Marketing Agency | Web Design & SEO | Business Builders",
    description: "Business Builders serves Daytona Beach businesses with website design, SEO, branding, video production & digital marketing. 26+ years experience. Based in nearby St. Augustine. Call 877-378-6101.",
    h1: "Daytona Beach's Go-To Marketing Agency",
    keywords: "daytona beach marketing agency, daytona beach web design, daytona beach seo, volusia county marketing agency"
  }
};

export const BASE_URL = "https://businessbldrs.com";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Business Builders",
  "alternateName": "Business Builders Marketing Agency",
  "url": "https://businessbldrs.com",
  "logo": "https://businessbldrs.com/logo.png",
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
  "image": "https://businessbldrs.com/logo.png",
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
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "21"
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

export function getArticleSchema(article: {
  title: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": article.image || "https://businessbldrs.com/logo.png",
    "datePublished": article.datePublished,
    "dateModified": article.dateModified || article.datePublished,
    "author": {
      "@type": "Organization",
      "name": "Business Builders"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Business Builders",
      "logo": {
        "@type": "ImageObject",
        "url": "https://businessbldrs.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://businessbldrs.com/resources/articles/${article.slug}`
    }
  };
}
