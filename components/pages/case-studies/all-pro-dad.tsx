"use client";
import SEOHead from "@/components/ui/seo-head";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Target, TrendingUp, Users, Eye, MousePointer, Mail, UserPlus, BarChart, Monitor } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import CaseStudySchema from "@/components/ui/case-study-schema";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import Link from "next/link";
import AnimatedSection from "@/components/ui/animated-section";
import { useQuery } from "@tanstack/react-query";
import type { PortfolioItem } from "@/lib/db/schema";

export default function AllProDadCaseStudy() {
  const { data: portfolioItem, isLoading } = useQuery<PortfolioItem>({
    queryKey: ['/api/portfolio-items/by-title', 'All Pro Dad'],
    enabled: true
  });

  const heroImage = portfolioItem?.image || "@assets/Screenshot 2025-08-02 at 1.54.32 PM_1754157276843.png";
  return (
    <div className="min-h-screen">
      <SEOHead
        title="All Pro Dad Case Study - Nonprofit Website Redesign Success | Business Builders"
        description="Discover how Business Builders helped All Pro Dad achieve 113% increase in new users, 62% increase in page views, and 1,200 new email subscribers through strategic website redesign."
        keywords="nonprofit website design case study, All Pro Dad website redesign, nonprofit digital marketing, website optimization, father organization marketing, nonprofit growth"
        canonicalUrl="https://businessbldrs.com/case-studies/all-pro-dad"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "All Pro Dad Case Study - Nonprofit Website Redesign Success",
          "description": "How Business Builders helped All Pro Dad achieve massive growth through strategic website redesign",
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
            "name": "All Pro Dad",
            "description": "Nonprofit organization dedicated to helping fathers love and lead their families well"
          }
        }}
      />
      <CaseStudySchema
        title="All Pro Dad Case Study - Nonprofit Website Redesign Success"
        description="How Business Builders helped All Pro Dad achieve 113% increase in new users, 62% increase in page views, and 1,200 new email subscribers through strategic website redesign."
        clientName="All Pro Dad"
        image={heroImage}
        slug="all-pro-dad"
        datePublished="2025-01-01"
      />
      <Navigation />

      {/* Breadcrumbs */}
      <div className="pt-32 pb-8 band-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Portfolio", href: "/portfolio" },
            { label: "All Pro Dad", href: "/case-studies/all-pro-dad" }
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
              ALL PRO <span className="text-yellow-500">DAD</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-stone-600 leading-relaxed mb-12 max-w-4xl">
              All Pro Dad is a nonprofit organization dedicated to helping fathers love and lead their families well.
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
                  alt="All Pro Dad - Father and son with baseball"
                  className="w-full h-auto object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <div className="bg-white p-4 border-2 border-charcoal-900">
                  <img 
                    src="https://allprodad.com/wp-content/themes/allprodad/img/logo.png"
                    alt="All Pro Dad Logo"
                    className="h-12 w-auto"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Key Stat */}
          <AnimatedSection variant="fadeInUp" delay={300}>
            <div className="text-center mb-16">
              <div className="headline-lg text-yellow-500 mb-4">10+ MILLION</div>
              <div className="text-xl text-stone-600">Annual Website Visitors</div>
              <p className="text-stone-500 mt-4 max-w-3xl mx-auto">
                All Pro Dad's website receives over 10 million visitors per year. They help dads connect with their kids all over the country by sending out daily emails, putting on big events and hosting monthly father-kids breakfasts.
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
                  WHY THEY <span className="text-yellow-400">CAME TO US</span>
                </h2>
                
                <div className="space-y-6 text-stone-600 leading-relaxed">
                  <p>
                    Their old website got the job done for a time, but with their high traffic and rate of growth, it was time for a serious overhaul.
                  </p>
                  <p>
                    Their website was difficult to navigate, had unclear messaging, loaded slowly and functioned poorly on mobile devices. They needed to update their design, layout and messaging, so they went looking for the right team to solve these issues.
                  </p>
                  <p className="text-yellow-600 font-semibold">
                    A popular website with tons of great info like All Pro Dad should be fast, clear and easy to use.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeInRight" delay={200}>
              <div className="bg-white border-2 border-charcoal-900 p-8 shadow-offset">
                <h3 className="text-2xl font-display uppercase mb-6 text-yellow-500">Key Challenges</h3>
                <ul className="space-y-4 text-stone-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 mt-2 mr-3 flex-shrink-0"></div>
                    Difficult navigation with poor user experience
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 mt-2 mr-3 flex-shrink-0"></div>
                    Unclear messaging and content organization
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 mt-2 mr-3 flex-shrink-0"></div>
                    Slow loading speeds affecting user engagement
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 mt-2 mr-3 flex-shrink-0"></div>
                    Poor mobile device performance
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 mt-2 mr-3 flex-shrink-0"></div>
                    Outdated design not reflecting their mission
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What We Did Section */}
      <section className="band-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="headline-xl text-charcoal-900 mb-6">
                WHAT WE <span className="text-yellow-400">DID</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <AnimatedSection variant="fadeInLeft" delay={100}>
              <div className="space-y-8">
                <div className="bg-white border-2 border-charcoal-900 p-8 shadow-offset">
                  <Target className="w-12 h-12 text-yellow-400 mb-4" />
                  <h3 className="text-2xl font-display uppercase text-charcoal-900 mb-4">Website Optimization</h3>
                  <p className="text-stone-500">
                    We optimized their website for speed, making sure all the pages, blogs and links load quickly and securely.
                  </p>
                </div>
                
                <div className="bg-white border-2 border-charcoal-900 p-8 shadow-offset">
                  <Users className="w-12 h-12 text-yellow-400 mb-4" />
                  <h3 className="text-2xl font-display uppercase text-charcoal-900 mb-4">Content Strategy</h3>
                  <p className="text-stone-500">
                    Our content team updated the copy so it would clearly explain what they do and who they serve.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeInRight" delay={200}>
              <div className="space-y-8">
                <div className="bg-white border-2 border-charcoal-900 p-8 shadow-offset">
                  <Eye className="w-12 h-12 text-yellow-400 mb-4" />
                  <h3 className="text-2xl font-display uppercase text-charcoal-900 mb-4">Visual Design</h3>
                  <p className="text-stone-500">
                    The Design team added inspirational, modern imagery and custom graphics throughout the site.
                  </p>
                </div>
                
                <div className="bg-white border-2 border-charcoal-900 p-8 shadow-offset">
                  <MousePointer className="w-12 h-12 text-yellow-400 mb-4" />
                  <h3 className="text-2xl font-display uppercase text-charcoal-900 mb-4">Custom Navigation</h3>
                  <p className="text-stone-500">
                    Navigation is simplified and organized so users can find exactly what they're looking for quickly.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Website Features */}
          <AnimatedSection variant="scaleIn" delay={300}>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white border-2 border-charcoal-900 p-8 shadow-offset">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-yellow-400 flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-8 h-8 text-charcoal-900" />
                  </div>
                  <h4 className="text-xl font-display uppercase text-charcoal-900 mb-2">Modern Visual Design</h4>
                  <p className="text-stone-500">Clean, inspirational imagery and custom graphics throughout the site</p>
                </div>
              </div>
              
              <div className="bg-white border-2 border-charcoal-900 p-8 shadow-offset">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-yellow-400 flex items-center justify-center mx-auto mb-4">
                    <MousePointer className="w-8 h-8 text-charcoal-900" />
                  </div>
                  <h4 className="text-xl font-display uppercase text-charcoal-900 mb-2">Simplified Navigation</h4>
                  <p className="text-stone-500">Organized structure helping users find content quickly and easily</p>
                </div>
              </div>
              
              <div className="bg-white border-2 border-charcoal-900 p-8 shadow-offset">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-yellow-400 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-charcoal-900" />
                  </div>
                  <h4 className="text-xl font-display uppercase text-charcoal-900 mb-2">Performance Optimized</h4>
                  <p className="text-stone-500">Fast loading speeds for all pages, blogs, and content</p>
                </div>
              </div>
              
              <div className="bg-white border-2 border-charcoal-900 p-8 shadow-offset">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-yellow-400 flex items-center justify-center mx-auto mb-4">
                    <Monitor className="w-8 h-8 text-charcoal-900" />
                  </div>
                  <h4 className="text-xl font-display uppercase text-charcoal-900 mb-2">Mobile Responsive</h4>
                  <p className="text-stone-500">Optimized experience across all devices and screen sizes</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="fadeInUp" delay={400}>
            <div className="bg-yellow-400 border-2 border-charcoal-900 p-8 text-center shadow-offset">
              <h3 className="text-2xl font-display uppercase text-charcoal-900 mb-4">Final Result</h3>
              <p className="text-xl text-charcoal-800">
                Clean, clear, mobile-responsive, and search engine optimized—All Pro Dad now has a wonderful new website to share their very important mission.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Results Section */}
      <section className="band-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="headline-xl mb-6">
                THE <span className="text-yellow-400">RESULTS</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <AnimatedSection variant="fadeInLeft" delay={100}>
              <div className="bg-charcoal-900 border-2 border-charcoal-700 p-8 text-center shadow-offset-yellow">
                <Mail className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <div className="text-4xl font-display text-white mb-2">1,200</div>
                <div className="text-stone-400 font-semibold uppercase tracking-wide">New Email Subscribers</div>
                <div className="text-sm text-stone-500 mt-2">Significant growth in engaged audience</div>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeInUp" delay={200}>
              <div className="bg-charcoal-900 border-2 border-charcoal-700 p-8 text-center shadow-offset-yellow">
                <UserPlus className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <div className="text-4xl font-display text-white mb-2">113%</div>
                <div className="text-stone-400 font-semibold uppercase tracking-wide">Increase in New Users</div>
                <div className="text-sm text-stone-500 mt-2">More fathers discovering the mission</div>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeInRight" delay={300}>
              <div className="bg-charcoal-900 border-2 border-charcoal-700 p-8 text-center shadow-offset-yellow">
                <BarChart className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <div className="text-4xl font-display text-white mb-2">62%</div>
                <div className="text-stone-400 font-semibold uppercase tracking-wide">Increase in Page Views</div>
                <div className="text-sm text-stone-500 mt-2">Higher engagement with content</div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection variant="fadeInUp" delay={400}>
            <div className="bg-charcoal-900 border-2 border-charcoal-700 p-8 shadow-offset-yellow">
              <h3 className="text-2xl font-display uppercase text-yellow-400 mb-6 text-center">
                <TrendingUp className="w-6 h-6 inline mr-2" />
                IMPACT SUMMARY
              </h3>
              <div className="text-center text-stone-400 text-lg leading-relaxed">
                <p className="mb-4">
                  The website redesign transformed All Pro Dad's digital presence, creating a platform that effectively serves their mission of helping fathers love and lead their families well.
                </p>
                <p>
                  With improved navigation, faster loading times, and mobile optimization, the site now better serves its 10+ million annual visitors while driving significant growth in new users and engagement.
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
