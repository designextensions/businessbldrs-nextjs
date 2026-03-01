"use client";
import SEOHead from "@/components/ui/seo-head";

import { lazy, Suspense, useEffect, useMemo } from "react";
import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import { queryClient } from "@/lib/queryClient";
import MegaFooter from "@/components/ui/mega-footer";
import { seoConfig, organizationSchema, BASE_URL } from "@/lib/seo-config";
import CriticalCSS from "@/components/ui/critical-css";
import ThirdPartyOptimizer from "@/components/ui/third-party-optimizer";
import SitemapMeta from "@/components/ui/sitemap-generator";

const ValueStackSection = lazy(() => import("@/components/ui/value-stack-section"));
const ProblemSection = lazy(() => import("@/components/ui/problem-section"));
const ProcessSection = lazy(() => import("@/components/ui/process-section"));
const IndustriesSection = lazy(() => import("@/components/ui/industries-section"));
const PortfolioSection = lazy(() => import("@/components/ui/portfolio-section"));
const GettingStartedSection = lazy(() => import("@/components/ui/getting-started-section"));
const CredentialsSection = lazy(() => import("@/components/ui/credentials-section"));
const TestimonialsSection = lazy(() => import("@/components/ui/testimonials-section"));
const MarketingMasterclassSection = lazy(() => import("@/components/ui/marketing-masterclass-section"));
const FAQSection = lazy(() => import("@/components/ui/faq-section"));


export default function Home() {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const homeStructuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://businessbldrs.com/#organization",
        "name": "Business Builders",
        "alternateName": "Business Builders Marketing Agency",
        "url": "https://businessbldrs.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://businessbldrs.com/logo.png",
          "width": 200,
          "height": 60
        },
        "description": "Award-winning marketing agency with 26+ years of proven results helping businesses, ministries, and nonprofits grow through strategic planning, website design, SEO, and digital marketing.",
        "foundingDate": "1999",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "",
          "addressLocality": "St. Augustine",
          "addressRegion": "FL",
          "postalCode": "",
          "addressCountry": "US"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+1-877-378-6101",
            "contactType": "customer service",
            "areaServed": "US",
            "availableLanguage": "English"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/businessbldrs",
          "https://www.linkedin.com/company/business-builders"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "50+"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://businessbldrs.com/#website",
        "url": "https://businessbldrs.com",
        "name": "Business Builders - Marketing Agency",
        "description": "Professional marketing agency helping businesses grow",
        "publisher": {
          "@id": "https://businessbldrs.com/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://businessbldrs.com/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ]
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
  }), []);

  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: ['/api/team'],
      staleTime: 15 * 60 * 1000,
    });
    queryClient.prefetchQuery({
      queryKey: ['/api/portfolio'],
      staleTime: 5 * 60 * 1000,
    });
  }, []);

  return (
    <>
      <SEOHead
        title={seoConfig.home.title}
        description={seoConfig.home.description}
        keywords={seoConfig.home.keywords}
        canonicalUrl={`${BASE_URL}/`}
        structuredData={homeStructuredData}
        ogImage={seoConfig.home.ogImage}
      />
      <CriticalCSS />

      <ThirdPartyOptimizer delayMs={2000} />
      <SitemapMeta />
      <Navigation />
      <main className="min-h-screen overflow-x-hidden">
        <header>
          <HeroSection />
        </header>
        
        <Suspense fallback={null}>
          <ValueStackSection />
          <div id="problem" data-section="problem">
            <ProblemSection scrollToSection={scrollToSection} />
          </div>
          <ProcessSection />
          <IndustriesSection />
          <PortfolioSection />
          <TestimonialsSection />
          <GettingStartedSection />
          <CredentialsSection />
          <MarketingMasterclassSection />
          <FAQSection />
        </Suspense>
        
        <footer>
          <MegaFooter />
        </footer>
      </main>
    </>
  );
}
