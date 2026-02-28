"use client";
import SEOHead from "@/components/ui/seo-head";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, Target, TrendingUp, Users, Eye, MousePointer, DollarSign } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import CaseStudySchema from "@/components/ui/case-study-schema";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import Link from "next/link";
import AnimatedSection from "@/components/ui/animated-section";
import { useQuery } from "@tanstack/react-query";
import type { PortfolioItem } from "@/lib/db/schema";

export default function BozardFordLincolnCaseStudy() {
  const { data: portfolioItem, isLoading } = useQuery<PortfolioItem>({
    queryKey: ['/api/portfolio-items/by-title', 'Bozard Ford Lincoln'],
    enabled: true
  });

  const heroImage = portfolioItem?.image || "https://businessbldrs.com/wp-content/uploads/2025/01/bozard-ford.jpg";
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Bozard Ford Lincoln Case Study - Automotive Marketing Success | Business Builders"
        description="Discover how Business Builders helped Bozard Ford Lincoln achieve 4+ million impressions, 40,000 clicks, and record-breaking sales through strategic video production and digital marketing."
        keywords="automotive marketing case study, ford lincoln dealership marketing, video production automotive, digital marketing success story, automotive advertising, St Augustine Ford dealer"
        canonicalUrl="https://businessbldrs.com/case-studies/bozard-ford-lincoln"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Bozard Ford Lincoln Case Study - Automotive Marketing Success",
          "description": "How Business Builders helped Bozard Ford Lincoln achieve record-breaking sales through strategic marketing",
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
            "name": "Bozard Ford Lincoln",
            "description": "Family-owned automotive dealership in St. Augustine, Florida"
          }
        }}
      />
      <CaseStudySchema
        title="Bozard Ford Lincoln Case Study - Automotive Marketing Success"
        description="How Business Builders helped Bozard Ford Lincoln achieve 4+ million impressions, 40,000 clicks, and record-breaking sales through strategic video production and digital marketing."
        clientName="Bozard Ford Lincoln"
        image={heroImage}
        slug="bozard-ford-lincoln"
        datePublished="2025-01-01"
      />
      <Navigation />

      {/* Breadcrumbs */}
      <div className="pt-32 pb-8 band-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Portfolio", href: "/portfolio" },
            { label: "Bozard Ford Lincoln", href: "/case-studies/bozard-ford-lincoln" }
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
              BOZARD FORD <span className="text-yellow-500">LINCOLN</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-stone-600 leading-relaxed mb-12 max-w-4xl">
              Accurate data tracking is crucial to proper client safety and meeting regulatory requirements.
            </p>
          </AnimatedSection>

          {/* Results Grid */}
          <AnimatedSection variant="fadeInUp" delay={200}>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white border-2 border-charcoal-900 p-8 text-center shadow-offset-yellow">
                <div className="headline-md text-yellow-500 mb-2">4+ MILLION</div>
                <div className="text-stone-600 font-semibold uppercase tracking-wide">TOTAL IMPRESSIONS</div>
              </div>
              <div className="bg-white border-2 border-charcoal-900 p-8 text-center shadow-offset-yellow">
                <div className="headline-md text-yellow-500 mb-2">40,000</div>
                <div className="text-stone-600 font-semibold uppercase tracking-wide">CLICKS</div>
              </div>
              <div className="bg-white border-2 border-charcoal-900 p-8 text-center shadow-offset-yellow">
                <div className="headline-md text-yellow-500 mb-2">$$$</div>
                <div className="text-stone-600 font-semibold uppercase tracking-wide">RECORD BREAKING SALES</div>
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
                  alt="Bozard Ford Lincoln automotive dealership"
                  className="w-full h-auto object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Project Overview */}
      <section className="band-stone py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection variant="fadeInLeft">
              <div>
                <h2 className="headline-lg text-charcoal-900 mb-8">
                  PROJECT <span className="text-yellow-400">OVERVIEW</span>
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-display uppercase text-yellow-500 mb-4 flex items-center">
                      <Target className="w-5 h-5 mr-2" />
                      Scope
                    </h3>
                    <ul className="space-y-2 text-stone-600">
                      <li>• Video Production</li>
                      <li>• Broadcast TV</li>
                      <li>• Display Advertising</li>
                      <li>• Paid Search</li>
                      <li>• Social Media Ads</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-display uppercase text-yellow-500 mb-4 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      KPIs
                    </h3>
                    <ul className="space-y-2 text-stone-600">
                      <li>• Awareness</li>
                      <li>• Impressions</li>
                      <li>• Engagement</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeInRight" delay={200}>
              <div className="bg-white border-2 border-charcoal-900 p-8 shadow-offset">
                <h3 className="text-2xl font-display uppercase mb-6 text-yellow-500">
                  Stand out from the typical automotive style ads.
                </h3>
                <div className="space-y-4 text-stone-600 leading-relaxed">
                  <p>
                    Bozard Ford Lincoln has been family-owned and operated since 1949 in St. Augustine, Florida. With a focus on building long-lasting customer relationships and serving their community, they have made their mark as an award-winning dealership.
                  </p>
                  <p>
                    Bozard Ford has been the recipient of numerous dealer awards, including the Ford President's Award, which is the highest honor given by the Ford Motor Company for customer satisfaction.
                  </p>
                  <p>
                    Bozard Ford Lincoln worked with Business Builders to provide direction and vision in regards to their digital marketing presence, wanting to stand out from the typical automotive style ads.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Campaign Stories */}
      <section className="band-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="headline-xl text-charcoal-900 mb-6">
                CAMPAIGN <span className="text-yellow-400">STORIES</span>
              </h2>
              <p className="text-xl text-stone-500 max-w-3xl mx-auto">
                A series of compelling video campaigns that helped Bozard Ford Lincoln connect with their community.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <AnimatedSection variant="fadeInLeft" delay={100}>
              <div className="space-y-8">
                <div className="bg-white border-2 border-charcoal-900 p-8 shadow-offset">
                  <h3 className="text-2xl font-display uppercase text-yellow-500 mb-4">DRIVEN TO INSPIRE SUMMER</h3>
                  <p className="text-stone-500">Seasonal campaign highlighting summer adventures and freedom.</p>
                </div>
                
                <div className="bg-white border-2 border-charcoal-900 p-8 shadow-offset">
                  <h3 className="text-2xl font-display uppercase text-yellow-500 mb-4">DRIVEN TO CONNECT</h3>
                  <p className="text-stone-500">Focusing on community connections and relationships.</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeInRight" delay={200}>
              <div className="space-y-8">
                <div className="bg-white border-2 border-charcoal-900 p-8 shadow-offset">
                  <h3 className="text-2xl font-display uppercase text-yellow-500 mb-4">DRIVEN TO CARE</h3>
                  <p className="text-stone-500">Emphasizing customer care and service excellence.</p>
                </div>
                
                <div className="bg-white border-2 border-charcoal-900 p-8 shadow-offset">
                  <h3 className="text-2xl font-display uppercase text-yellow-500 mb-4">DRIVEN TO INSPIRE STORY</h3>
                  <p className="text-stone-500">Brand storytelling that inspires and motivates.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Video Gallery */}
          <AnimatedSection variant="scaleIn" delay={300}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { src: "https://businessbldrs.com/wp-content/uploads/2025/01/Bozard-8.webp", title: "Campaign Video 1" },
                { src: "https://businessbldrs.com/wp-content/uploads/2025/01/Bozard-7.webp", title: "Campaign Video 2" },
                { src: "https://businessbldrs.com/wp-content/uploads/2025/01/Bozard-6.webp", title: "Campaign Video 3" },
                { src: "https://businessbldrs.com/wp-content/uploads/2025/01/Bozard-5.webp", title: "Campaign Video 4" }
              ].map((video, index) => (
                <div key={index} className="relative group cursor-pointer">
                  <div className="bg-white border-2 border-charcoal-900 overflow-hidden hover:transform hover:-translate-y-1 transition-all duration-300 shadow-offset">
                    <div className="relative">
                      <img 
                        src={video.src}
                        alt={video.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-charcoal-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 bg-yellow-400 flex items-center justify-center">
                          <Play className="w-8 h-8 text-charcoal-900 ml-1" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-charcoal-900 font-semibold text-sm">{video.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="band-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="headline-xl mb-6">
                RESULTS & <span className="text-yellow-400">IMPACT</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <AnimatedSection variant="fadeInLeft" delay={100}>
              <div className="bg-charcoal-900 border-2 border-charcoal-700 p-8 text-center shadow-offset-yellow">
                <Eye className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <div className="text-3xl font-display text-white mb-2">4+ Million</div>
                <div className="text-stone-400 uppercase tracking-wide">Total Impressions</div>
                <div className="text-sm text-stone-500 mt-2">Massive reach across all platforms</div>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeInUp" delay={200}>
              <div className="bg-charcoal-900 border-2 border-charcoal-700 p-8 text-center shadow-offset-yellow">
                <MousePointer className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <div className="text-3xl font-display text-white mb-2">40,000</div>
                <div className="text-stone-400 uppercase tracking-wide">Clicks Generated</div>
                <div className="text-sm text-stone-500 mt-2">High engagement from targeted audiences</div>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeInRight" delay={300}>
              <div className="bg-charcoal-900 border-2 border-charcoal-700 p-8 text-center shadow-offset-yellow">
                <DollarSign className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <div className="text-3xl font-display text-white mb-2">Record Sales</div>
                <div className="text-stone-400 uppercase tracking-wide">Revenue Growth</div>
                <div className="text-sm text-stone-500 mt-2">Best performing sales period in company history</div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection variant="fadeInUp" delay={400}>
            <div className="bg-charcoal-900 border-2 border-charcoal-700 p-8 shadow-offset-yellow">
              <h3 className="text-2xl font-display uppercase text-yellow-400 mb-6 text-center">
                <Users className="w-6 h-6 inline mr-2" />
                CLIENT FEEDBACK
              </h3>
              <div className="text-center text-stone-400 italic text-lg">
                "Business Builders helped us completely transform our marketing approach. Instead of typical car dealer ads, we now have compelling stories that truly connect with our community. The results speak for themselves - record-breaking sales and unprecedented engagement."
              </div>
              <div className="text-center text-yellow-400 font-semibold mt-4">
                - Bozard Ford Lincoln Team
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
              GET RESULTS LIKE THESE
            </h2>
            <p className="text-xl text-charcoal-800 mb-12 max-w-3xl mx-auto">
              Turn to the team at Business Builders when you need web design, marketing, or branding services in Jacksonville and St. Augustine, FL.
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
