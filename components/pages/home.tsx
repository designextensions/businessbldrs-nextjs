"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { useQueryClient } from "@tanstack/react-query";
import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import MegaFooter from "@/components/ui/mega-footer";
import CriticalCSS from "@/components/ui/critical-css";
import ThirdPartyOptimizer from "@/components/ui/third-party-optimizer";
import SitemapMeta from "@/components/ui/sitemap-generator";

const ValueStackSection = dynamic(() => import("@/components/ui/value-stack-section"));
const ProblemSection = dynamic(() => import("@/components/ui/problem-section"));
const ProcessSection = dynamic(() => import("@/components/ui/process-section"));
const IndustriesSection = dynamic(() => import("@/components/ui/industries-section"));
const PortfolioSection = dynamic(() => import("@/components/ui/portfolio-section"));
const GettingStartedSection = dynamic(() => import("@/components/ui/getting-started-section"));
const CredentialsSection = dynamic(() => import("@/components/ui/credentials-section"));
const TestimonialsSection = dynamic(() => import("@/components/ui/testimonials-section"));
const MarketingMasterclassSection = dynamic(() => import("@/components/ui/marketing-masterclass-section"));
const FAQSection = dynamic(() => import("@/components/ui/faq-section"));


export default function Home() {
  const queryClient = useQueryClient();

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
  }, [queryClient]);

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
        
        <MegaFooter />
      </main>
    </>
  );
}
