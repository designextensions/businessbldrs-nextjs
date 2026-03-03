import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo-config";
import JacksonvillePage from "@/components/pages/jacksonville";

export const metadata: Metadata = {
  title: "Jacksonville Marketing Agency | Web Design & SEO",
  description: "Business Builders serves Jacksonville businesses with website design, SEO, branding, video production & digital marketing. 26+ years experience. HubSpot Platinum Partner. Call 877-378-6101.",
  keywords: "jacksonville marketing agency, jacksonville web design, jacksonville seo, marketing company jacksonville fl",
  openGraph: {
    title: "Jacksonville Marketing Agency | Web Design & SEO",
    description: "Business Builders serves Jacksonville businesses with website design, SEO, branding, video production & digital marketing. 26+ years experience. HubSpot Platinum Partner. Call 877-378-6101.",
    images: seoConfig.home.ogImage ? [seoConfig.home.ogImage] : [],
  },
  alternates: { canonical: "https://businessbldrs.com/jacksonville" },
};

const jacksonvilleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://businessbldrs.com/#localbusiness",
      "name": "Business Builders - Jacksonville Marketing Agency",
      "image": "https://businessbldrs.com/logo-full.png",
      "url": "https://businessbldrs.com/jacksonville",
      "telephone": "+1-877-378-6101",
      "priceRange": "$$",
      "description": "Jacksonville marketing agency providing website design, SEO, branding, and digital marketing services. Based in St. Augustine, serving the greater Jacksonville metro area since 1999.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "701 Market St, Suite 101",
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
      "areaServed": [
        { "@type": "City", "name": "Jacksonville", "sameAs": "https://en.wikipedia.org/wiki/Jacksonville,_Florida" },
        { "@type": "City", "name": "Jacksonville Beach" },
        { "@type": "City", "name": "Neptune Beach" },
        { "@type": "City", "name": "Atlantic Beach" },
        { "@type": "City", "name": "St. Augustine" },
        { "@type": "State", "name": "Florida" }
      ],
      "sameAs": [
        "https://www.facebook.com/businessbldrs",
        "https://twitter.com/businessbldrs",
        "https://www.linkedin.com/company/businessbldrs",
        "https://www.instagram.com/businessbldrs/",
        "https://www.youtube.com/channel/UC3SN1I1FwktpF_lMqaZveIg"
      ]
    },
    {
      "@type": "WebPage",
      "name": "Jacksonville Marketing Agency | Business Builders",
      "description": "Business Builders is a full-service marketing agency serving Jacksonville, FL. Website design, SEO, branding, video production, and digital marketing from nearby St. Augustine.",
      "url": "https://businessbldrs.com/jacksonville"
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jacksonvilleSchema) }} />
      <JacksonvillePage />
    </>
  );
}
