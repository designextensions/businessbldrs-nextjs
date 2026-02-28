"use client";
import SEOHead from "@/components/ui/seo-head";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Building2, TrendingUp, Users, Globe, Target, Facebook, BarChart, Home } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import CaseStudySchema from "@/components/ui/case-study-schema";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import Link from "next/link";
import AnimatedSection from "@/components/ui/animated-section";
import { useQuery } from "@tanstack/react-query";
import type { PortfolioItem } from "@/lib/db/schema";

export default function HinesCaseStudy() {
  const { data: portfolioItem, isLoading } = useQuery<PortfolioItem>({
    queryKey: ['/api/portfolio-items/by-title', 'Hines'],
    enabled: true
  });

  const heroImage = portfolioItem?.image || "https://businessbldrs.com/wp-content/uploads/2025/01/Hines-4.jpg";
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Hines Case Study - Real Estate Community Website Development | Business Builders"
        description="Discover how Business Builders helped Hines develop 3 responsive community websites, achieving 532% increase in site traffic and 11% increase in Facebook engagement."
        keywords="real estate website development, Hines case study, community website design, Markland website, Palencia marketing, Southside Quarter development, luxury real estate marketing"
        canonicalUrl="https://businessbldrs.com/case-studies/hines"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Hines Case Study - Real Estate Community Website Development",
          "description": "How Business Builders helped Hines develop multiple community websites with strategic marketing",
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
            "name": "Hines",
            "description": "Global real estate investment, development and management firm, founded in 1957"
          }
        }}
      />
      <CaseStudySchema
        title="Hines Case Study - Real Estate Community Website Development"
        description="How Business Builders helped Hines develop 3 responsive community websites, achieving 532% increase in site traffic and 11% increase in Facebook engagement."
        clientName="Hines"
        image={heroImage}
        slug="hines"
        datePublished="2025-01-01"
      />
      <Navigation />

      {/* Breadcrumbs */}
      <div className="pt-32 pb-8 band-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Portfolio", href: "/portfolio" },
            { label: "Hines", href: "/case-studies/hines" }
          ]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="band-white pb-20 overflow-hidden">
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
            
            <h1 className="headline-lg mb-6">
              <span className="text-yellow-500">HINES</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-stone-600 leading-relaxed mb-12 max-w-4xl">
              Hines is a global real estate investment, development and management firm, founded in 1957.
            </p>
          </AnimatedSection>

          {/* Hero Image */}
          <AnimatedSection variant="scaleIn" delay={200}>
            <div className="relative overflow-hidden mb-16 border-2 border-charcoal-900 shadow-offset-yellow">
              {isLoading ? (
                <div className="w-full h-96 bg-stone-100 animate-pulse flex items-center justify-center">
                  <div className="text-stone-500">Loading image...</div>
                </div>
              ) : (
                <img 
                  src={heroImage}
                  alt="Hines luxury community home"
                  className="w-full h-auto object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </AnimatedSection>

          {/* Key Stat */}
          <AnimatedSection variant="fadeInUp" delay={300}>
            <div className="text-center mb-16">
              <div className="headline-lg text-yellow-500 mb-4">3 WEBSITES</div>
              <div className="text-xl text-stone-600">Community Websites Redesigned</div>
              <p className="text-stone-500 mt-4 max-w-3xl mx-auto">
                Hines Southeast came to Business Builders to fully redesign 3 of their community websites, handling marketing for multiple luxury neighborhoods in Northeast Florida.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="band-stone py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection variant="fadeInLeft">
              <div>
                <h2 className="headline-lg text-charcoal-900 mb-8">
                  THE <span className="text-yellow-400">CHALLENGE</span>
                </h2>
                
                <div className="space-y-6 text-stone-600 leading-relaxed">
                  <p>
                    With Hines building and managing several newer communities in Northeast Florida, they needed a company to handle the websites, marketing and more for each neighborhood.
                  </p>
                  <p>
                    Every community is unique, and we wanted to reflect that with the websites we created for Markland, Palencia, and Southside Quarter.
                  </p>
                  <p className="text-yellow-600 font-semibold">
                    Each project required distinct branding while maintaining Hines' prestigious reputation and luxury standards.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeInRight" delay={200}>
              <div className="bg-white border-2 border-charcoal-900 p-8 shadow-offset">
                <h3 className="text-2xl font-display uppercase mb-6 text-yellow-500">Project Requirements</h3>
                <ul className="space-y-4 text-stone-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 mt-2 mr-3 flex-shrink-0"></div>
                    Three distinct community websites with unique identities
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 mt-2 mr-3 flex-shrink-0"></div>
                    Increase leads for luxury communities
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 mt-2 mr-3 flex-shrink-0"></div>
                    Showcase premium amenities and lifestyle
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 mt-2 mr-3 flex-shrink-0"></div>
                    Strategic social media campaigns
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 mt-2 mr-3 flex-shrink-0"></div>
                    Custom landing pages for available lots
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Communities Section */}
      <section className="band-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="headline-xl text-charcoal-900 mb-6">
                THREE <span className="text-yellow-400">COMMUNITIES</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-16">
            {/* Markland */}
            <AnimatedSection variant="fadeInLeft" delay={100}>
              <div className="bg-white border-2 border-charcoal-900 p-8 shadow-offset">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl font-display uppercase text-yellow-500 mb-4">Markland</h3>
                    <p className="text-stone-500 mb-4">
                      Markland was designed to be a friendly community in St. Johns, FL where neighbors can gather together and enjoy the lifestyle of a larger development on an intimate scale.
                    </p>
                    <p className="text-stone-500">
                      This new neighborhood being developed by the prestigious Hines team features homes from six of the best contractors in the area. The goal of the redesign was to increase leads for the new community while showcasing Markland's luxury atmosphere to potential buyers.
                    </p>
                  </div>
                  <div className="text-center">
                    <Building2 className="w-24 h-24 text-yellow-400 mx-auto mb-4" />
                    <div className="text-2xl font-display uppercase text-charcoal-900">Full Website Redesign</div>
                    <div className="text-stone-500">Luxury Community Marketing</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Palencia */}
            <AnimatedSection variant="fadeInRight" delay={200}>
              <div className="bg-white border-2 border-charcoal-900 p-8 shadow-offset">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1 text-center">
                    <Target className="w-24 h-24 text-yellow-400 mx-auto mb-4" />
                    <div className="text-2xl font-display uppercase text-charcoal-900">Comprehensive Marketing</div>
                    <div className="text-stone-500">Social Media & AdWords</div>
                  </div>
                  <div className="order-1 md:order-2">
                    <h3 className="text-3xl font-display uppercase text-yellow-500 mb-4">Palencia</h3>
                    <p className="text-stone-500 mb-4">
                      Business Builders currently handles several aspects of marketing for Palencia, including social posting, AdWords campaigns, building a custom landing page for their available lots, and more.
                    </p>
                    <p className="text-stone-500">
                      Our goal is to show off their unique, luxury amenities and give people a hub where they can find out useful information about the community, as well as see advertisements for future events.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Southside Quarter */}
            <AnimatedSection variant="fadeInLeft" delay={300}>
              <div className="bg-white border-2 border-charcoal-900 p-8 shadow-offset">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl font-display uppercase text-yellow-500 mb-4">Southside Quarter</h3>
                    <p className="text-stone-500 mb-4">
                      Hines' latest Jacksonville project is Southside Quarter, a 110-acre mixed-use property in Jacksonville's 'Southside' area.
                    </p>
                    <p className="text-stone-500">
                      Southside Quarter had a landing page for the upcoming development, but it was very simple and didn't provide much information. The BB team took the current landing page and built it out into a full website with 7-10 total pages to generate leads for people interested in living there and establishing local businesses.
                    </p>
                  </div>
                  <div className="text-center">
                    <Globe className="w-24 h-24 text-yellow-400 mx-auto mb-4" />
                    <div className="text-2xl font-display uppercase text-charcoal-900">Full Website Development</div>
                    <div className="text-stone-500">110-Acre Mixed-Use Development</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What We Did Section */}
      <section className="band-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="headline-xl mb-6">
                WHAT WE <span className="text-yellow-400">DID TO HELP</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <AnimatedSection variant="fadeInLeft" delay={100}>
              <div className="bg-charcoal-900 border-2 border-charcoal-700 p-8 text-center shadow-offset-yellow">
                <Building2 className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-display uppercase text-white mb-4">Three Distinct Websites</h3>
                <p className="text-stone-400">
                  Created three unique community websites, each reflecting the distinct character and luxury amenities of Markland, Palencia, and Southside Quarter.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeInUp" delay={200}>
              <div className="bg-charcoal-900 border-2 border-charcoal-700 p-8 text-center shadow-offset-yellow">
                <Facebook className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-display uppercase text-white mb-4">Social Media Campaigns</h3>
                <p className="text-stone-400">
                  Used social campaigns to showcase unique, luxury amenities and create engagement with potential buyers and residents.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeInRight" delay={300}>
              <div className="bg-charcoal-900 border-2 border-charcoal-700 p-8 text-center shadow-offset-yellow">
                <Target className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-display uppercase text-white mb-4">Streamlined Process</h3>
                <p className="text-stone-400">
                  Provided potential buyers with comprehensive information using a streamlined process and custom landing pages for available lots.
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection variant="fadeInUp" delay={400}>
            <div className="bg-charcoal-900 border-2 border-charcoal-700 p-8 shadow-offset-yellow">
              <h3 className="text-2xl font-display uppercase text-yellow-400 mb-6 text-center">
                <TrendingUp className="w-6 h-6 inline mr-2" />
                COMPREHENSIVE MARKETING STRATEGY
              </h3>
              <div className="text-center text-stone-400 text-lg leading-relaxed">
                <p className="mb-4">
                  Our approach included full website development, ongoing social media management, targeted AdWords campaigns, and custom landing page creation for each unique community.
                </p>
                <p>
                  Every touchpoint was designed to reflect the luxury lifestyle and premium amenities that make each Hines community distinctive while driving qualified leads and engagement.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Results Section */}
      <section className="band-stone py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="headline-xl text-charcoal-900 mb-6">
                THE <span className="text-yellow-400">RESULTS</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <AnimatedSection variant="fadeInLeft" delay={100}>
              <div className="bg-white border-2 border-charcoal-900 p-8 text-center shadow-offset">
                <Home className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <div className="text-4xl font-display text-charcoal-900 mb-2">3</div>
                <div className="text-stone-600 font-semibold uppercase tracking-wide">Responsive Websites</div>
                <div className="text-sm text-stone-500 mt-2">Fully developed community sites</div>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeInUp" delay={200}>
              <div className="bg-white border-2 border-charcoal-900 p-8 text-center shadow-offset">
                <Facebook className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <div className="text-4xl font-display text-charcoal-900 mb-2">11%</div>
                <div className="text-stone-600 font-semibold uppercase tracking-wide">Increase in Facebook Likes</div>
                <div className="text-sm text-stone-500 mt-2">Growing social media presence</div>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeInRight" delay={300}>
              <div className="bg-white border-2 border-charcoal-900 p-8 text-center shadow-offset">
                <BarChart className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <div className="text-4xl font-display text-charcoal-900 mb-2">532%</div>
                <div className="text-stone-600 font-semibold uppercase tracking-wide">Increase in Site Traffic</div>
                <div className="text-sm text-stone-500 mt-2">Massive traffic growth across communities</div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection variant="fadeInUp" delay={400}>
            <div className="bg-white border-2 border-charcoal-900 p-8 shadow-offset">
              <h3 className="text-2xl font-display uppercase text-yellow-500 mb-6 text-center">
                <TrendingUp className="w-6 h-6 inline mr-2" />
                IMPACT SUMMARY
              </h3>
              <div className="text-center text-stone-600 text-lg leading-relaxed">
                <p className="mb-4">
                  The comprehensive digital strategy for Hines' three communities resulted in significant improvements across all key metrics, with site traffic increasing by over 500%.
                </p>
                <p>
                  Each community now has a distinctive online presence that effectively showcases luxury amenities while generating qualified leads for this prestigious global real estate firm.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Call to Action */}
      <section className="band-yellow py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection variant="fadeInUp">
            <h2 className="headline-xl text-charcoal-900 mb-6">
              WE HELP BUSINESS GROW
            </h2>
            <p className="text-xl text-charcoal-800 mb-12 max-w-3xl mx-auto">
              Let Business Builders help your real estate development or business achieve similar results with comprehensive digital marketing strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/request-quote">
                <Button className="bg-charcoal-900 hover:bg-charcoal-800 text-white px-8 py-4 font-bold text-lg border-2 border-charcoal-900 shadow-offset-sm">
                  REQUEST A QUOTE
                </Button>
              </Link>
              <Link href="/schedule-call">
                <Button 
                  variant="outline"
                  className="border-2 border-charcoal-900 text-charcoal-900 px-8 py-4 font-bold text-lg hover:bg-charcoal-900 hover:text-white"
                >
                  SCHEDULE A CALL
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <MegaFooter />
    </div>
  );
}
