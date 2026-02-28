"use client";
import SEOHead from "@/components/ui/seo-head";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, ExternalLink, CheckCircle } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import AnimatedSection from "@/components/ui/animated-section";
import CaseStudySchema from "@/components/ui/case-study-schema";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { useQuery } from "@tanstack/react-query";
import type { PortfolioItem } from "@/lib/db/schema";

export default function RulonInternationalCaseStudy() {
  const { data: portfolioItem, isLoading } = useQuery<PortfolioItem>({
    queryKey: ['/api/portfolio-items/by-title', 'Rulon International'],
    enabled: true
  });

  const heroImage = portfolioItem?.image || "https://businessbldrs.com/wp-content/uploads/2025/01/Rulon-3.jpg";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Rulon International Case Study - Business Builders Marketing Agency",
    "description": "How Business Builders helped Rulon International, a leading manufacturer of wood ceiling and acoustical wall panels, modernize their brand and messaging through strategic marketing.",
    "author": {
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
      "name": "Rulon International",
      "description": "Leading manufacturer of wood ceiling and acoustical wood wall panels for over 30 years"
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Rulon International Case Study - Business Builders Marketing Agency"
        description="Discover how Business Builders helped Rulon International modernize their brand and messaging, creating a comprehensive digital marketing strategy that drove brand awareness and lead generation."
        keywords="Rulon International, case study, branding, website design, video marketing, digital marketing, wood ceiling panels, acoustical panels, Business Builders"
        canonicalUrl="https://businessbldrs.com/case-studies/rulon-international"
        structuredData={structuredData}
      />
      <CaseStudySchema
        title="Rulon International Case Study - Manufacturing Brand Modernization"
        description="How Business Builders helped Rulon International modernize their brand and messaging, creating a comprehensive digital marketing strategy that drove brand awareness and lead generation."
        clientName="Rulon International"
        image={heroImage}
        slug="rulon-international"
        datePublished="2025-01-01"
      />
      <Navigation />

      {/* Breadcrumbs */}
      <div className="pt-32 pb-8 band-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Portfolio", href: "/portfolio" },
            { label: "Rulon International", href: "/case-studies/rulon-international" }
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
              <span className="text-yellow-500">RULON INTERNATIONAL</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-stone-600 leading-relaxed mb-12 max-w-4xl">
              As their vision and technologies began to evolve over time, they knew their brand and messaging had to continue to modernize as well.
            </p>
          </AnimatedSection>

          {/* Hero Image with Video */}
          <AnimatedSection variant="scaleIn" delay={200}>
            <div className="relative overflow-hidden mb-16 border-2 border-charcoal-900 shadow-offset-yellow">
              {isLoading ? (
                <div className="w-full h-96 bg-stone-100 animate-pulse flex items-center justify-center">
                  <div className="text-stone-500">Loading image...</div>
                </div>
              ) : (
                <img 
                  src={heroImage}
                  alt="Rulon International wood ceiling panels"
                  className="w-full h-auto object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-yellow-400 flex items-center justify-center cursor-pointer hover:bg-yellow-300 transition-colors">
                  <Play className="w-8 h-8 text-charcoal-900 ml-1" />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Key Stat */}
          <AnimatedSection variant="fadeInUp" delay={300}>
            <div className="text-center mb-16">
              <div className="headline-lg text-yellow-500 mb-4">30+ YEARS</div>
              <div className="text-xl text-stone-600">Leading Manufacturer of Wood Ceiling & Acoustical Panels</div>
              <p className="text-stone-500 mt-4 max-w-3xl mx-auto">
                Rulon International reached out to Business Builders in 2019 to assist with their branding evolution, leading to ongoing digital marketing success.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services & KPIs Section */}
      <section className="band-stone py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection variant="fadeInLeft">
              <div className="bg-white border-2 border-charcoal-900 p-8 shadow-offset">
                <h3 className="text-2xl font-display uppercase text-yellow-500 mb-6">Services Provided</h3>
                <ul className="space-y-4">
                  {["Branding", "Blueprint", "Website", "Video", "Marketing"].map((service) => (
                    <li key={service} className="flex items-center text-charcoal-900">
                      <CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />
                      <span className="text-lg">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            
            <AnimatedSection variant="fadeInRight" delay={100}>
              <div className="bg-white border-2 border-charcoal-900 p-8 shadow-offset">
                <h3 className="text-2xl font-display uppercase text-yellow-500 mb-6">KPIs</h3>
                <ul className="space-y-4">
                  {["Clear Messaging", "Brand Awareness", "Lead Generation"].map((kpi) => (
                    <li key={kpi} className="flex items-center text-charcoal-900">
                      <CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />
                      <span className="text-lg">{kpi}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="band-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="headline-lg text-charcoal-900 mb-8">
                Industry Leadership for <span className="text-yellow-400">30+ Years</span>
              </h2>
              <p className="text-xl text-stone-500 leading-relaxed max-w-4xl mx-auto">
                Rulon International has been the leading manufacturer of wood ceiling and acoustical wood wall panels for over 30 years. 
                What started as a logo redesign began to extend into a website project and digital marketing campaign to generate ongoing brand awareness. 
                Our team has since become an extension of Rulon's team, continuing to drive sales through INBOUND digital marketing efforts.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Approach - 3 Step Process */}
      <section className="band-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="headline-lg mb-8">
                Our <span className="text-yellow-400">Approach</span>
              </h2>
              <div className="text-2xl font-display uppercase text-yellow-400">Plan • Produce • Promote</div>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Step 1: Plan */}
            <AnimatedSection variant="fadeInUp" delay={100}>
              <div className="bg-charcoal-900 border-2 border-charcoal-700 p-8 text-center shadow-offset-yellow">
                <div className="w-20 h-20 bg-yellow-400 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-display text-charcoal-900">01</span>
                </div>
                <h3 className="text-2xl font-display uppercase text-white mb-4">Plan</h3>
                <p className="text-stone-400 leading-relaxed">
                  Rulon had a vision of who they wanted to be, but needed help redefining their look and messaging.
                </p>
              </div>
            </AnimatedSection>

            {/* Step 2: Produce */}
            <AnimatedSection variant="fadeInUp" delay={200}>
              <div className="bg-charcoal-900 border-2 border-charcoal-700 p-8 text-center shadow-offset-yellow">
                <div className="w-20 h-20 bg-yellow-400 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-display text-charcoal-900">02</span>
                </div>
                <h3 className="text-2xl font-display uppercase text-white mb-4">Produce</h3>
                <p className="text-stone-400 leading-relaxed">
                  Through a new logo, fresh new website, and high quality video work we were able to help bring that vision to life.
                </p>
              </div>
            </AnimatedSection>

            {/* Step 3: Promote */}
            <AnimatedSection variant="fadeInUp" delay={300}>
              <div className="bg-charcoal-900 border-2 border-charcoal-700 p-8 text-center shadow-offset-yellow">
                <div className="w-20 h-20 bg-yellow-400 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-display text-charcoal-900">03</span>
                </div>
                <h3 className="text-2xl font-display uppercase text-white mb-4">Promote</h3>
                <p className="text-stone-400 leading-relaxed">
                  Once the new look was finalized, it was time to show it off through a targeted campaign created to reach their ideal audience.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Step 1: Plan - Detailed */}
      <section className="band-stone py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection variant="fadeInLeft">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-yellow-400 flex items-center justify-center">
                    <span className="text-2xl font-display text-charcoal-900">01</span>
                  </div>
                  <h2 className="headline-md text-charcoal-900">Plan</h2>
                </div>
                
                <h3 className="text-2xl font-display uppercase text-yellow-500">Defining Your Message</h3>
                
                <p className="text-stone-600 leading-relaxed text-lg">
                  For many years Rulon International focused on their outbound marketing strategy. 
                  Perfecting their sales scripts, attending trade shows and hosting networking events became second nature. 
                  However, when it came to inbound marketing strategy and crafting a digital message that brought sales to them, 
                  they knew they needed a team that could help them showcase their unique approach and skills through a screen.
                </p>
                
                <p className="text-stone-600 leading-relaxed text-lg">
                  Using the Storybrand methodology, our team was able to guide Rulon International through a proven framework 
                  built to clarify their message, and drive sales.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection variant="fadeInRight" delay={200}>
              <div className="bg-white border-2 border-charcoal-900 p-8 shadow-offset">
                <h4 className="text-xl font-display uppercase text-yellow-500 mb-6">StoryBrand Framework</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 mt-2"></div>
                    <span className="text-stone-600">A character</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 mt-2"></div>
                    <span className="text-stone-600">With a problem</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 mt-2"></div>
                    <span className="text-stone-600">Meets a guide who understands their fear</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 mt-2"></div>
                    <span className="text-stone-600">And gives them a plan</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 mt-2"></div>
                    <span className="text-stone-600">That forces them to take action</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 mt-2"></div>
                    <span className="text-stone-600">That results in success</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Step 2: Produce - Website */}
      <section className="band-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection variant="fadeInLeft">
              <div className="relative overflow-hidden border-2 border-charcoal-900 shadow-offset">
                <img 
                  src="https://businessbldrs.com/wp-content/uploads/2025/01/Rulon-1.png"
                  alt="Rulon International website design"
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedSection>
            
            <AnimatedSection variant="fadeInRight" delay={200}>
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-yellow-400 flex items-center justify-center">
                    <span className="text-2xl font-display text-charcoal-900">02</span>
                  </div>
                  <h2 className="headline-md text-charcoal-900">Produce</h2>
                </div>
                
                <h3 className="text-2xl font-display uppercase text-yellow-500">Creating a Website with Intentionality</h3>
                
                <p className="text-stone-600 leading-relaxed text-lg">
                  Once we clarified and realigned Rulon's messaging to focus on their key consumer persona, 
                  it was time to design a high quality website that illustrated the high quality products they handcraft for their customers.
                </p>
                
                <p className="text-stone-600 leading-relaxed text-lg">
                  We knew right away that their website needed to showcase heavy imagery, hoping to capture the eye of talented architects and designers. 
                  With our messaging focusing on the customers journey, and their vision of bringing their award-winning designs to life, 
                  it was imminent that imagery should be a key focus in their updated website design.
                </p>
                
                <a 
                  href="https://rulonco.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-yellow-500 font-semibold hover:text-yellow-400 transition-colors"
                >
                  View Live Site <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Video Production */}
      <section className="band-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeInUp">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-display uppercase text-yellow-400 mb-4">Video</h3>
              <h2 className="headline-lg mb-8">
                Capturing Their Story <span className="text-yellow-400">Through Video</span>
              </h2>
              <p className="text-xl text-stone-400 leading-relaxed max-w-4xl mx-auto">
                With clear messaging and a clean new website, it was time to re-introduce Rulon's brand and service capabilities 
                to their customers and prospects. Through a series of videos that showcased their history, vision and product features, 
                we targeted their ideal customer base across varying media channels.
              </p>
            </div>
          </AnimatedSection>

          {/* Video Gallery */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "https://businessbldrs.com/wp-content/uploads/2025/01/Rulon-4.jpg",
              "https://businessbldrs.com/wp-content/uploads/2025/01/Rulon-3.jpg",
              "https://businessbldrs.com/wp-content/uploads/2025/01/Rulon-2.jpg",
              "https://businessbldrs.com/wp-content/uploads/2025/01/rulon-1.jpg"
            ].map((image, index) => (
              <AnimatedSection key={index} variant="scaleIn" delay={index * 100}>
                <div className="relative overflow-hidden cursor-pointer group border-2 border-charcoal-700 shadow-offset-yellow">
                  <img 
                    src={image}
                    alt={`Rulon International video ${index + 1}`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-charcoal-900/40 group-hover:bg-charcoal-900/60 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center">
                      <Play className="w-5 h-5 text-charcoal-900 ml-0.5" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Step 3: Promote */}
      <section className="band-stone py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection variant="fadeInLeft">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-yellow-400 flex items-center justify-center">
                    <span className="text-2xl font-display text-charcoal-900">03</span>
                  </div>
                  <h2 className="headline-md text-charcoal-900">Promote</h2>
                </div>
                
                <h3 className="text-2xl font-display uppercase text-yellow-500">Amplifying the Message</h3>
                
                <p className="text-stone-600 leading-relaxed text-lg">
                  After extensive research understanding Rulon's target persona, understanding where they spend most of their time, 
                  shop, and search for inspiration, we crafted a targeted paid ad campaign to ensure they get maximum exposure from within their market.
                </p>
                
                <p className="text-stone-600 leading-relaxed text-lg">
                  Using the flywheel model, a concept adapted by HubSpot to explain the momentum you gain when you align your entire organization 
                  around delivering a remarkable customer experience, we were able to target their ideal customer base through every step of the user journey.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection variant="fadeInRight" delay={200}>
              <div className="relative overflow-hidden border-2 border-charcoal-900 shadow-offset">
                <img 
                  src="https://businessbldrs.com/wp-content/uploads/2025/01/Rulon-2.png"
                  alt="Rulon International marketing campaign results"
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Results & CTA */}
      <section className="band-yellow py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeInUp">
            <div className="text-center">
              <h2 className="headline-xl text-charcoal-900 mb-8">
                Ready to Modernize Your Brand?
              </h2>
              <p className="text-xl text-charcoal-800 leading-relaxed mb-12 max-w-3xl mx-auto">
                See how Business Builders can help transform your marketing strategy and drive results like we did for Rulon International.
              </p>
              <Link href="/request-quote">
                <Button className="bg-charcoal-900 text-white px-12 py-4 font-bold text-xl hover:bg-charcoal-800 border-2 border-charcoal-900 shadow-offset-sm">
                  GET A FREE QUOTE
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
