"use client";
import SEOHead from "@/components/ui/seo-head";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Target, TrendingUp, Users, Building, Calendar, CheckCircle } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import CaseStudySchema from "@/components/ui/case-study-schema";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import Link from "next/link";
import AnimatedSection from "@/components/ui/animated-section";
import { useQuery } from "@tanstack/react-query";
import type { PortfolioItem } from "@/lib/db/schema";

export default function BreakwaterConstructionCaseStudy() {
  const { data: portfolioItem, isLoading } = useQuery<PortfolioItem>({
    queryKey: ['/api/portfolio-items/by-title', 'Breakwater Construction'],
    enabled: true
  });

  const heroImage = portfolioItem?.image || "https://businessbldrs.com/wp-content/uploads/2025/01/breakwater-construction.jpg";

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Breakwater Construction Case Study - Construction Marketing Success | Business Builders"
        description="Discover how Business Builders helped Breakwater Construction achieve 22% growth in just one year through strategic marketing and branding initiatives."
        keywords="construction marketing case study, pool builder marketing, construction company marketing, contractor marketing strategy, construction industry growth, custom pool builder marketing"
        canonicalUrl="https://businessbldrs.com/case-studies/breakwater-construction"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Breakwater Construction Case Study - Construction Marketing Success",
          "description": "How Business Builders helped Breakwater Construction achieve 22% growth through strategic marketing",
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
          "datePublished": "2025-01-01",
          "about": {
            "@type": "Organization",
            "name": "Breakwater Construction",
            "description": "Custom pool builder and construction company specializing in luxury outdoor living spaces"
          }
        }}
      />
      <CaseStudySchema
        title="Breakwater Construction Case Study - Construction Marketing Success"
        description="How Business Builders helped Breakwater Construction achieve 22% growth in just one year through strategic marketing and branding initiatives."
        clientName="Breakwater Construction"
        image={heroImage}
        slug="breakwater-construction"
        datePublished="2025-01-01"
      />
      <Navigation />

      {/* Breadcrumbs */}
      <div className="pt-32 pb-8 band-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Portfolio", href: "/portfolio" },
            { label: "Breakwater Construction", href: "/case-studies/breakwater-construction" }
          ]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="band-white pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeInUp">
            <div className="mb-8">
              <Link href="/portfolio">
                <Button variant="outline" className="border-2 border-charcoal-900 text-charcoal-900 hover:bg-stone-100 mb-6">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Portfolio
                </Button>
              </Link>
              <div className="inline-block px-4 py-2 bg-yellow-400 mb-6">
                <span className="label-industrial text-charcoal-900">PORTFOLIO</span>
              </div>
            </div>
            
            <h1 className="headline-xl mb-6">
              BREAKWATER <span className="text-yellow-500">CONSTRUCTION</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-stone-600 leading-relaxed mb-12 max-w-4xl">
              How Breakwater Construction Achieved 22% Growth in Just One Year with Strategic Marketing
            </p>
          </AnimatedSection>

          {/* Key Results */}
          <AnimatedSection variant="fadeInUp" delay={200}>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white border-2 border-charcoal-900 p-8 text-center shadow-offset-yellow">
                <div className="headline-md text-yellow-500 mb-2">22%</div>
                <div className="text-stone-600 font-semibold uppercase tracking-wide">GROWTH IN ONE YEAR</div>
              </div>
              <div className="bg-white border-2 border-charcoal-900 p-8 text-center shadow-offset-yellow">
                <div className="headline-md text-yellow-500 mb-2">200%</div>
                <div className="text-stone-600 font-semibold uppercase tracking-wide">INCREASE IN LEADS</div>
              </div>
              <div className="bg-white border-2 border-charcoal-900 p-8 text-center shadow-offset-yellow">
                <div className="headline-md text-yellow-500 mb-2">150%</div>
                <div className="text-stone-600 font-semibold uppercase tracking-wide">WEBSITE TRAFFIC BOOST</div>
              </div>
            </div>
          </AnimatedSection>

          {/* Hero Image */}
          <AnimatedSection variant="scaleIn" delay={400}>
            <div className="relative overflow-hidden mb-16 border-2 border-charcoal-900 shadow-offset-yellow">
              {isLoading ? (
                <div className="w-full h-96 bg-stone-100 animate-pulse flex items-center justify-center">
                  <div className="text-stone-500">Loading image...</div>
                </div>
              ) : (
                <img 
                  src={heroImage}
                  alt="Breakwater Construction custom pool project"
                  className="w-full h-auto object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="band-stone py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection variant="fadeInLeft">
              <div>
                <h2 className="headline-lg text-charcoal-900 mb-8">
                  THE <span className="text-yellow-400">CHALLENGE</span>
                </h2>
                
                <div className="space-y-6 text-stone-600 leading-relaxed">
                  <p>
                    Breakwater Construction, a premium custom pool builder, was facing increased competition in the luxury outdoor living market. Their existing marketing efforts weren't generating enough qualified leads to support their growth ambitions.
                  </p>
                  <p>
                    With limited brand visibility and an outdated digital presence, they needed a comprehensive marketing strategy to establish themselves as the premier choice for high-end pool construction and outdoor living spaces.
                  </p>
                  <p className="text-yellow-600 font-semibold">
                    The goal was to position Breakwater as the go-to luxury pool builder while dramatically increasing lead generation and project bookings.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeInRight" delay={200}>
              <div className="bg-white border-2 border-charcoal-900 p-8 shadow-offset">
                <h3 className="text-2xl font-display uppercase mb-6 text-yellow-500">Services Provided</h3>
                <ul className="space-y-4">
                  {[
                    "Brand Strategy & Positioning",
                    "Website Design & Development", 
                    "Search Engine Optimization",
                    "Pay-Per-Click Advertising",
                    "Social Media Marketing",
                    "Content Marketing Strategy",
                    "Lead Generation System",
                    "Marketing Analytics & Reporting"
                  ].map((service) => (
                    <li key={service} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-stone-600">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="band-yellow py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="headline-lg text-charcoal-900 mb-6">
                MEASURABLE RESULTS
              </h2>
              <p className="text-xl text-charcoal-800 max-w-3xl mx-auto">
                Within 12 months, Breakwater Construction saw dramatic improvements across all key performance indicators
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection variant="fadeInUp" delay={100}>
              <div className="bg-white border-2 border-charcoal-900 p-6 text-center shadow-offset">
                <Target className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
                <div className="text-3xl font-display text-yellow-500 mb-2">22%</div>
                <div className="text-charcoal-900 font-semibold mb-2">Revenue Growth</div>
                <div className="text-sm text-stone-500">Year-over-year increase</div>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeInUp" delay={200}>
              <div className="bg-white border-2 border-charcoal-900 p-6 text-center shadow-offset">
                <TrendingUp className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
                <div className="text-3xl font-display text-yellow-500 mb-2">200%</div>
                <div className="text-charcoal-900 font-semibold mb-2">Lead Increase</div>
                <div className="text-sm text-stone-500">Qualified prospects</div>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeInUp" delay={300}>
              <div className="bg-white border-2 border-charcoal-900 p-6 text-center shadow-offset">
                <Users className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
                <div className="text-3xl font-display text-yellow-500 mb-2">150%</div>
                <div className="text-charcoal-900 font-semibold mb-2">Website Traffic</div>
                <div className="text-sm text-stone-500">Organic & paid visits</div>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeInUp" delay={400}>
              <div className="bg-white border-2 border-charcoal-900 p-6 text-center shadow-offset">
                <Building className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
                <div className="text-3xl font-display text-yellow-500 mb-2">85%</div>
                <div className="text-charcoal-900 font-semibold mb-2">Project Close Rate</div>
                <div className="text-sm text-stone-500">Lead to customer conversion</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Strategy Overview */}
      <section className="band-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="headline-lg text-charcoal-900 mb-6">
                OUR <span className="text-yellow-400">STRATEGY</span>
              </h2>
              <p className="text-xl text-stone-500 max-w-3xl mx-auto">
                A comprehensive approach to establish Breakwater as the premier luxury pool builder
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8">
            <AnimatedSection variant="fadeInLeft" delay={100}>
              <div className="bg-white border-2 border-charcoal-900 p-8 shadow-offset">
                <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center mb-6">
                  <span className="text-charcoal-900 font-display text-xl">1</span>
                </div>
                <h3 className="text-xl font-display uppercase text-yellow-500 mb-4">Brand Positioning</h3>
                <p className="text-stone-500 leading-relaxed">
                  Established Breakwater as the luxury choice through premium messaging, professional photography, and consistent brand experience across all touchpoints.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeInUp" delay={200}>
              <div className="bg-white border-2 border-charcoal-900 p-8 shadow-offset">
                <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center mb-6">
                  <span className="text-charcoal-900 font-display text-xl">2</span>
                </div>
                <h3 className="text-xl font-display uppercase text-yellow-500 mb-4">Digital Presence</h3>
                <p className="text-stone-500 leading-relaxed">
                  Created a stunning website showcasing their portfolio, implemented SEO strategies, and established strong social media presence to capture and convert prospects.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeInRight" delay={300}>
              <div className="bg-white border-2 border-charcoal-900 p-8 shadow-offset">
                <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center mb-6">
                  <span className="text-charcoal-900 font-display text-xl">3</span>
                </div>
                <h3 className="text-xl font-display uppercase text-yellow-500 mb-4">Lead Generation</h3>
                <p className="text-stone-500 leading-relaxed">
                  Implemented targeted advertising campaigns, conversion optimization, and automated follow-up systems to maximize lead quality and conversion rates.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="band-dark py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeInUp">
            <h2 className="headline-lg mb-6">
              READY TO GROW YOUR <span className="text-yellow-400">CONSTRUCTION BUSINESS?</span>
            </h2>
            <p className="text-xl text-stone-400 mb-8 leading-relaxed">
              Let's discuss how we can help you achieve similar results with a strategic marketing approach tailored to your construction company.
            </p>
            <Link href="/marketing-services">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-300 text-charcoal-900 font-bold px-8 py-4 border-2 border-yellow-400 shadow-offset">
                Start Your Growth Journey
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <MegaFooter />
    </div>
  );
}
