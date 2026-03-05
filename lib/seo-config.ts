export interface PageSEO {
  title: string;
  description: string;
  h1: string;
  keywords: string;
  ogImage?: string;
}

export const seoConfig: Record<string, PageSEO> = {
  home: {
    title: "Business Builders | Full-Service Marketing Agency",
    description: "Business Builders helps businesses grow with StoryBrand messaging, web design, SEO, HubSpot implementation, and digital marketing.",
    h1: "Marketing Agency",
    keywords: "marketing agency, storybrand marketing agency, web design, seo services, hubspot partner, business builders",
    ogImage: "https://businessbldrs.com/og-image.jpg"
  },
  stAugustine: {
    title: "St. Augustine Marketing Agency",
    description: "St. Augustine full-service marketing agency since 1999. HubSpot Platinum Partner & StoryBrand Certified. Web design, SEO, social media, branding & video. Call 877-378-6101.",
    h1: "St. Augustine Marketing Agency",
    keywords: "st augustine marketing agency, st augustine digital marketing, st augustine seo, st augustine web design, marketing company st augustine fl",
    ogImage: "https://businessbldrs.com/og-image.jpg"
  },
  about: {
    title: "About Us | 26+ Years of Marketing Excellence",
    description: "About Business Builders — a St. Augustine marketing agency since 1999. Meet our team of HubSpot-certified, StoryBrand-trained marketing experts.",
    h1: "Your Upgraded Marketing Team",
    keywords: "about business builders, st augustine marketing team",
    ogImage: "https://businessbldrs.com/wp-content/uploads/2024/12/BB-2023-Office-Content-Shoot-6961-1024x576.jpg"
  },
  services: {
    title: "Full-Service Marketing Solutions",
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
    title: "Contact Us | St. Augustine Marketing Agency",
    description: "Request a free marketing quote from Business Builders. Web design, SEO, social media, HubSpot & branding services in St. Augustine & Jacksonville.",
    h1: "Contact Us",
    keywords: "contact business builders, st augustine marketing contact"
  },
  portfolio: {
    title: "Marketing Case Studies & Results",
    description: "See our work — website design, branding, video & marketing projects for businesses across Florida. Case studies with measurable results.",
    h1: "Portfolio & Case Studies",
    keywords: "marketing case studies, portfolio, client results"
  },
  articles: {
    title: "Marketing Blog & Resources",
    description: "Marketing tips, strategies, and resources from Business Builders. Expert advice on SEO, HubSpot, social media, and growing your business.",
    h1: "Marketing Articles & Resources",
    keywords: "marketing blog, marketing tips, business growth resources"
  },
  downloads: {
    title: "Free Marketing Templates & Guides",
    description: "Download free marketing templates, checklists, and guides. 26+ years of marketing expertise distilled into actionable resources for your business.",
    h1: "Free Marketing Downloads",
    keywords: "free marketing templates, marketing guides, business checklists"
  },
  requestQuote: {
    title: "Request a Free Marketing Quote",
    description: "Get a free marketing consultation and quote from Business Builders. Tell us about your business goals and we'll create a custom marketing plan.",
    h1: "Request a Free Quote",
    keywords: "free marketing quote, marketing consultation, business growth plan"
  },
  team: {
    title: "Meet Our Marketing Team",
    description: "Meet the talented marketing experts at Business Builders. Our team brings 26+ years of combined experience in web design, SEO, and digital marketing.",
    h1: "Meet Our Team",
    keywords: "business builders team, marketing experts, st augustine marketing team"
  },
  testimonials: {
    title: "Client Testimonials & Reviews",
    description: "Read what our clients say about working with Business Builders. Real testimonials from businesses, ministries, and nonprofits we've helped grow.",
    h1: "Client Testimonials",
    keywords: "business builders reviews, marketing agency testimonials, client success stories"
  },
  websiteDesign: {
    title: "Website Design & Development",
    description: "Custom website design & development in St. Augustine FL. Responsive, SEO-optimized, ADA-compliant sites built to convert visitors into customers.",
    h1: "Website Design & Development",
    keywords: "website design, web development, wordpress development, shopify development"
  },
  seoServices: {
    title: "SEO Services St. Augustine",
    description: "Professional SEO services in St. Augustine & Jacksonville FL. Keyword research, on-page optimization, local SEO & analytics. Free SEO audit available.",
    h1: "SEO Services",
    keywords: "seo services, search engine optimization, local seo, st augustine seo"
  },
  videoProduction: {
    title: "Video Production Services",
    description: "Professional video production for marketing in St. Augustine & Jacksonville FL. Brand videos, testimonials, social media content & aerial footage.",
    h1: "Video Production Services",
    keywords: "video production, brand videos, testimonial videos, commercial production"
  },
  hubspot: {
    title: "HubSpot Implementation & Services",
    description: "HubSpot Platinum Partner in Florida. CRM setup, marketing automation, sales pipeline, onboarding & training. Get more from your HubSpot investment.",
    h1: "HubSpot Implementation",
    keywords: "hubspot implementation, hubspot partner, hubspot services"
  },
  whatIsStorybrand: {
    title: "What Is StoryBrand? The 7-Part Framework Explained",
    description: "Learn what StoryBrand is, how the 7-part framework works, and why it helps businesses clarify their message and convert more customers.",
    h1: "What Is StoryBrand?",
    keywords: "what is storybrand, storybrand framework, donald miller storybrand, building a storybrand, storybrand explained, 7 part storybrand framework"
  },
  storybrandBrandscript: {
    title: "What Is a StoryBrand BrandScript? (And How to Write One)",
    description: "The StoryBrand BrandScript is the foundation of all your marketing. Learn what it is, what it includes, and how a certified agency builds one for your business.",
    h1: "StoryBrand BrandScript",
    keywords: "storybrand brandscript, how to write a brandscript, brandscript template, storybrand messaging, brand messaging framework"
  },
  storybrandWebsite: {
    title: "What Does a StoryBrand Website Look Like?",
    description: "Discover the 8 must-have elements of a StoryBrand website — and the common mistakes that kill conversions. See how Business Builders builds sites that convert.",
    h1: "What a StoryBrand Website Looks Like",
    keywords: "storybrand website, storybrand web design, storybrand website design, storybrand homepage, website that converts"
  },
  whatIsAStorybrandAgency: {
    title: "What Does a StoryBrand Certified Agency Do?",
    description: "Learn what a StoryBrand Certified Agency actually does, the services they provide, and what questions to ask before hiring one. Business Builders is certified by Donald Miller.",
    h1: "What Does a StoryBrand Certified Agency Do?",
    keywords: "what is a storybrand agency, storybrand certified agency, what does a storybrand agency do, how to find a storybrand agency, certified storybrand guide"
  },
  storybrandAgency: {
    title: "StoryBrand Certified Agency",
    description: "Business Builders is a StoryBrand Certified Agency with 26+ years of experience. Endorsed by Donald Miller. We clarify your message, build your marketing, and grow your business.",
    h1: "StoryBrand Marketing Agency",
    keywords: "storybrand certified agency, storybrand agency, storybrand marketing agency, certified storybrand guide, donald miller storybrand agency, storybrand agency florida"
  },
  storybrandMessaging: {
    title: "StoryBrand Messaging Blueprint",
    description: "Build a clear StoryBrand messaging blueprint with proven frameworks, brand scripts, and actionable marketing plans.",
    h1: "StoryBrand Messaging Blueprint",
    keywords: "storybrand messaging, marketing blueprint, storybrand brandscript, brand messaging strategy"
  },
  storybrandFramework: {
    title: "StoryBrand Framework Guide",
    description: "Learn the StoryBrand Framework and how clear messaging helps businesses connect with customers and increase conversions.",
    h1: "StoryBrand Framework",
    keywords: "storybrand framework, donald miller storybrand, storybrand 7 part framework, brandscript guide"
  },
  socialMedia: {
    title: "Social Media Marketing Services",
    description: "Social media marketing services in St. Augustine & Jacksonville FL. Strategy, content creation, scheduling & reporting for Facebook, Instagram, LinkedIn.",
    h1: "Social Media Marketing",
    keywords: "social media marketing, social media management, social media advertising"
  },
  appDevelopment: {
    title: "App Development Services",
    description: "Custom mobile app development for iOS, Android & web in St. Augustine FL. From concept to launch, we build apps that grow your business.",
    h1: "Application Development",
    keywords: "app development, mobile app development, web application development"
  },
  resources: {
    title: "Marketing Resources & Tools",
    description: "Free marketing resources, tools, and guides from Business Builders. Access templates, checklists, videos, and expert insights to grow your business.",
    h1: "Marketing Resources",
    keywords: "marketing resources, marketing tools, free marketing guides"
  },
  events: {
    title: "Marketing Events & Workshops",
    description: "Join Business Builders for marketing workshops, webinars, and events. Learn marketing strategies and network with business professionals.",
    h1: "Events & Workshops",
    keywords: "marketing events, business workshops, marketing webinars"
  },
  palmCoast: {
    title: "Palm Coast Marketing Agency | Web Design & SEO",
    description: "Business Builders serves Palm Coast businesses with website design, SEO, branding, video production & digital marketing. 26+ years experience. Based in nearby St. Augustine. Call 877-378-6101.",
    h1: "Palm Coast's Go-To Marketing Agency",
    keywords: "palm coast marketing agency, palm coast web design, palm coast seo, marketing company palm coast fl"
  },
  ponteVedra: {
    title: "Ponte Vedra Beach Marketing Agency | Web Design & SEO",
    description: "Business Builders serves Ponte Vedra Beach businesses with website design, SEO, branding, video production & digital marketing. 26+ years experience. Based in nearby St. Augustine. Call 877-378-6101.",
    h1: "Ponte Vedra Beach's Trusted Marketing Agency",
    keywords: "ponte vedra beach marketing agency, ponte vedra web design, ponte vedra seo, marketing company ponte vedra fl"
  },
  orangePark: {
    title: "Orange Park Marketing Agency | Web Design & SEO",
    description: "Business Builders serves Orange Park businesses with website design, SEO, branding, video production & digital marketing. 26+ years experience. Based in nearby St. Augustine. Call 877-378-6101.",
    h1: "Orange Park's Go-To Marketing Agency",
    keywords: "orange park marketing agency, orange park web design, orange park seo, clay county marketing agency"
  },
  gainesville: {
    title: "Gainesville Marketing Agency | Web Design & SEO",
    description: "Business Builders serves Gainesville businesses with website design, SEO, branding, video production & digital marketing. 26+ years experience. HubSpot Platinum Partner. Call 877-378-6101.",
    h1: "Gainesville's Trusted Marketing Agency",
    keywords: "gainesville marketing agency, gainesville web design, gainesville seo, alachua county marketing agency"
  },
  daytonaBeach: {
    title: "Daytona Beach Marketing Agency | Web Design & SEO",
    description: "Business Builders serves Daytona Beach businesses with website design, SEO, branding, video production & digital marketing. 26+ years experience. Based in nearby St. Augustine. Call 877-378-6101.",
    h1: "Daytona Beach's Go-To Marketing Agency",
    keywords: "daytona beach marketing agency, daytona beach web design, daytona beach seo, volusia county marketing agency"
  },
  giveaway: {
    title: "Win Free Tickets to the Future Focused Leaders Summit | Business Builders",
    description: "Enter to win 1 of 5 free tickets ($1,947 value) to the Future Focused Leaders Summit: AI & Community. April 6-8, 2026 in St. Augustine Beach, FL. Apply now.",
    h1: "Win Tickets to the Future Focused Leaders Summit",
    keywords: "future focused leaders summit, free tickets giveaway, ai summit florida, business leadership event, st augustine conference 2026",
    ogImage: "https://businessbldrs.com/og-image.jpg"
  },
  grant: {
    title: "$25,000 Small Business Grant | Business Builders",
    description: "Enter to win a $25,000 Messaging & Website Redesign. Exclusive to Scale with Stability attendees. Includes StoryBrand BrandScript + full website redesign.",
    h1: "$25,000 Small Business Grant",
    keywords: "small business grant, free website redesign, storybrand brandscript, scale with stability, business builders grant",
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
    "image": article.image || "https://businessbldrs.com/logo-full.png",
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
        "url": "https://businessbldrs.com/logo-full.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://businessbldrs.com/resources/articles/${article.slug}`
    }
  };
}
