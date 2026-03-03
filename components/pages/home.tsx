"use client";
import { lazy, Suspense, useEffect } from "react";
import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import { queryClient } from "@/lib/queryClient";
import MegaFooter from "@/components/ui/mega-footer";
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
      <CriticalCSS />

      <ThirdPartyOptimizer delayMs={2000} />
      <SitemapMeta />
      <Navigation />
      <main className="min-h-screen overflow-x-hidden">
        <header>
          <HeroSection />
        </header>
        
        <Suspense fallback={null}>
          <div id="problem" data-section="problem">
            <ProblemSection scrollToSection={scrollToSection} />
          </div>
          <ValueStackSection />
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
