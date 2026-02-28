"use client";
import Link from "next/link";
import SEOHead from "@/components/ui/seo-head";

import { ArrowRight, CheckCircle, Search, TrendingUp, Target, BarChart3, Users, Zap, Globe, Star, Phone, Mail, Award, Clock, MousePointer, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import ServicePageSchema from "@/components/ui/service-page-schema";
import ServiceFAQSchema, { seoServicesFAQs } from "@/components/ui/service-faq-schema";
import Breadcrumbs from "@/components/ui/breadcrumbs";

export default function SEOServices() {
  const seoServices = [
    {
      icon: Search,
      title: "Keyword Research & Strategy",
      description: "In-depth keyword analysis to identify high-value search terms your customers are using.",
      features: ["Competitive Keyword Analysis", "Long-tail Keyword Discovery", "Search Intent Mapping", "Keyword Difficulty Assessment"]
    },
    {
      icon: TrendingUp,
      title: "On-Page SEO Optimization", 
      description: "Technical optimization of your website pages to improve search engine rankings.",
      features: ["Title Tag Optimization", "Meta Description Writing", "Header Tag Structure", "Internal Linking Strategy"]
    },
    {
      icon: Target,
      title: "Technical SEO Audits",
      description: "Comprehensive technical analysis to identify and fix SEO issues affecting your rankings.",
      features: ["Site Speed Optimization", "Mobile Responsiveness", "XML Sitemap Creation", "Schema Markup Implementation"]
    },
    {
      icon: BarChart3,
      title: "Content SEO Strategy",
      description: "Strategic content creation and optimization to attract your target audience through search.",
      features: ["Content Gap Analysis", "SEO Content Writing", "Blog Optimization", "Landing Page SEO"]
    },
    {
      icon: Users,
      title: "Local SEO Services",
      description: "Specialized local search optimization to help customers find your business in St. Augustine.",
      features: ["Google Business Profile", "Local Citation Building", "Review Management", "Local Keyword Targeting"]
    },
    {
      icon: Globe,
      title: "Link Building & Authority",
      description: "Strategic link building campaigns to increase your website's authority and rankings.",
      features: ["Quality Backlink Acquisition", "Authority Building", "Competitor Link Analysis", "Link Profile Monitoring"]
    }
  ];

  const seoProcess = [
    {
      step: "01",
      title: "SEO Audit & Analysis",
      description: "Comprehensive analysis of your current SEO performance, technical issues, and opportunities for improvement."
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Custom SEO strategy based on your business goals, target audience, and competitive landscape."
    },
    {
      step: "03",
      title: "Implementation & Optimization",
      description: "Execute on-page, technical, and content SEO improvements across your website."
    },
    {
      step: "04",
      title: "Monitoring & Reporting",
      description: "Ongoing performance tracking with detailed monthly reports showing ranking improvements and traffic growth."
    }
  ];

  const seoResults = [
    "Increase organic website traffic by 100-300%",
    "Improve Google search rankings for target keywords",
    "Generate more qualified leads from search engines",
    "Reduce cost per acquisition compared to paid advertising",
    "Build long-term, sustainable online visibility",
    "Enhance local search presence for St. Augustine customers"
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO Services",
    "description": "Professional SEO service, search engine marketing, and SEO expert services to improve your online presence and search rankings.",
    "provider": {
      "@type": "Organization",
      "name": "Business Builders",
      "url": "https://businessbldrs.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "St. Augustine",
        "addressRegion": "FL",
        "addressCountry": "US"
      }
    },
    "serviceType": "SEO Services",
    "areaServed": "St. Augustine, Florida",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "SEO Services",
      "itemListElement": seoServices.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        }
      }))
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <ServicePageSchema
        serviceName="SEO Services"
        description="Search engine optimization services to improve rankings and drive organic traffic. Expert SEO specialists providing keyword research, on-page optimization, and technical SEO audits."
        slug="seo-services"
        serviceType="SEO"
      />
      <ServiceFAQSchema
        serviceName="SEO Services"
        slug="seo-services"
        faqs={seoServicesFAQs}
      />
      <SEOHead 
        title="SEO Service, Search Engine Marketing & SEO Experts - Business Builders"
        description="Business Builders provides seo service, search engine marketing, seo expert, and seo specialists to improve your online presence."
        keywords="SEO service, search engine marketing, SEO expert, SEO specialists, search engine optimization, local SEO, St Augustine SEO"
        canonicalUrl="https://businessbldrs.com/seo-services"
        structuredData={structuredData}
        pageType="website"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 band-white">
        <div className="container mx-auto px-6">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "SEO Services" }
          ]} />

          <div className="max-w-4xl mx-auto text-center">
            <span className="label-industrial text-charcoal-900 mb-6 inline-block">
              SEO Experts Since 1997
            </span>
            
            <h1 className="headline-xl mb-6 leading-tight text-charcoal-900">
              <span className="text-yellow-500">
                SEO Service
              </span>
              <br />
              Search Engine Marketing & Specialists
            </h1>
            
            <p className="text-xl text-stone-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Dominate Google search results with our proven SEO services. Our SEO experts help St. Augustine businesses increase organic traffic, improve search rankings, and generate more qualified leads through strategic search engine optimization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-charcoal-900 font-display uppercase tracking-wide border-2 border-charcoal-800 shadow-offset hover-press" asChild>
                <Link href="/free-seo-audit">
                  <Search className="w-5 h-5 mr-2" />
                  Get Free SEO Audit
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-charcoal-900 font-display uppercase tracking-wide" asChild>
                <Link href="/request-quote">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Get SEO Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Services Grid */}
      <section className="py-20 band-stone">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="headline-lg mb-6 text-charcoal-900">
              Comprehensive SEO Services
            </h2>
            <p className="text-xl text-stone-500 max-w-3xl mx-auto">
              Our SEO specialists provide complete search engine optimization services to help your business rank higher, attract more traffic, and convert visitors into customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoServices.map((service, index) => (
              <div key={index} className="bento-card p-6">
                <div className="w-12 h-12 bg-yellow-400 border-2 border-charcoal-800 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-charcoal-900" />
                </div>
                <h3 className="font-display text-xl uppercase tracking-tight text-charcoal-900 mb-3">{service.title}</h3>
                <p className="text-stone-500 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-stone-500">
                      <CheckCircle className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Process */}
      <section className="py-20 band-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="headline-lg mb-6 text-charcoal-900">
              Our Proven SEO Process
            </h2>
            <p className="text-xl text-stone-500 max-w-3xl mx-auto">
              Our systematic approach to SEO ensures consistent results and long-term success for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seoProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-yellow-400 border-2 border-charcoal-800 shadow-offset flex items-center justify-center text-charcoal-900 font-display text-xl mb-6 mx-auto">
                  {step.step}
                </div>
                <h3 className="font-display text-xl uppercase tracking-tight text-charcoal-900 mb-4">{step.title}</h3>
                <p className="text-stone-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Performance Charts */}
      <section className="py-20 band-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="headline-lg mb-6 text-white">
              Real SEO Performance Results
            </h2>
            <p className="text-xl text-stone-400 max-w-3xl mx-auto">
              See how our SEO strategies have delivered measurable improvements for our clients
            </p>
          </div>

          {/* Progress Bars for SEO Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-charcoal-800 border-2 border-charcoal-700 p-6">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 text-yellow-400 mr-3" />
                <div>
                  <h3 className="font-display text-xl uppercase tracking-tight text-white">Organic Traffic Growth</h3>
                  <p className="text-stone-400 text-sm">Average increase in 6 months</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-stone-400">Month 1-2</span>
                    <span className="text-yellow-400 font-display">+45%</span>
                  </div>
                  <div className="w-full bg-charcoal-700 h-3">
                    <div className="bg-yellow-400 h-3" style={{width: '45%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-stone-400">Month 3-4</span>
                    <span className="text-yellow-400 font-display">+125%</span>
                  </div>
                  <div className="w-full bg-charcoal-700 h-3">
                    <div className="bg-yellow-400 h-3" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-stone-400">Month 5-6</span>
                    <span className="text-yellow-400 font-display">+250%</span>
                  </div>
                  <div className="w-full bg-charcoal-700 h-3">
                    <div className="bg-yellow-400 h-3" style={{width: '100%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-charcoal-800 border-2 border-charcoal-700 p-6">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-yellow-400 mr-3" />
                <div>
                  <h3 className="font-display text-xl uppercase tracking-tight text-white">Keyword Rankings</h3>
                  <p className="text-stone-400 text-sm">First page Google rankings</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-stone-400">Top 3 Rankings</span>
                    <span className="text-yellow-400 font-display">35%</span>
                  </div>
                  <div className="w-full bg-charcoal-700 h-3">
                    <div className="bg-yellow-400 h-3" style={{width: '35%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-stone-400">Top 10 Rankings</span>
                    <span className="text-yellow-400 font-display">68%</span>
                  </div>
                  <div className="w-full bg-charcoal-700 h-3">
                    <div className="bg-yellow-400 h-3" style={{width: '68%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-stone-400">First Page Rankings</span>
                    <span className="text-yellow-400 font-display">92%</span>
                  </div>
                  <div className="w-full bg-charcoal-700 h-3">
                    <div className="bg-yellow-400 h-3" style={{width: '92%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results & Benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="headline-lg mb-6 text-white">
                Measurable SEO Results
              </h2>
              <p className="text-xl text-stone-400 mb-8">
                Our SEO experts deliver tangible results that impact your bottom line. Here's what you can expect from our search engine marketing services:
              </p>
              
              <div className="space-y-4">
                {seoResults.map((result, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-yellow-400 mr-4 flex-shrink-0" />
                    <span className="text-stone-400">{result}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-charcoal-900 font-display uppercase tracking-wide border-2 border-charcoal-800 shadow-offset-yellow hover-press" asChild>
                  <Link href="/request-quote">
                    Start Your SEO Campaign
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-charcoal-800 border-2 border-charcoal-700 p-6 text-center shadow-offset-yellow">
                <Award className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <div className="text-3xl font-display text-yellow-400 mb-2">26+</div>
                <div className="text-stone-400">Years Experience</div>
              </div>
              <div className="bg-charcoal-800 border-2 border-charcoal-700 p-6 text-center shadow-offset-yellow">
                <Globe className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <div className="text-3xl font-display text-yellow-400 mb-2">500+</div>
                <div className="text-stone-400">Websites Optimized</div>
              </div>
              <div className="bg-charcoal-800 border-2 border-charcoal-700 p-6 text-center shadow-offset-yellow">
                <Users className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <div className="text-3xl font-display text-yellow-400 mb-2">95%</div>
                <div className="text-stone-400">Client Retention</div>
              </div>
              <div className="bg-charcoal-800 border-2 border-charcoal-700 p-6 text-center shadow-offset-yellow">
                <TrendingUp className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <div className="text-3xl font-display text-yellow-400 mb-2">1st Page</div>
                <div className="text-stone-400">Google Rankings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Timeline Visualization */}
      <section className="py-20 band-stone">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="headline-lg mb-6 text-charcoal-900">
              Your SEO Journey Timeline
            </h2>
            <p className="text-xl text-stone-500 max-w-3xl mx-auto">
              See what to expect month by month as our SEO experts work to improve your rankings
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-yellow-400"></div>
            
            <div className="space-y-16">
              {/* Month 1-2 */}
              <div className="flex items-center justify-between">
                <div className="w-5/12 text-right pr-8">
                  <div className="bento-card p-6 text-left">
                    <div className="flex items-center justify-end mb-4">
                      <h3 className="font-display text-xl uppercase tracking-tight text-charcoal-900 mr-3">Month 1-2</h3>
                      <Clock className="w-6 h-6 text-yellow-400" />
                    </div>
                    <p className="text-stone-500 mb-3">Technical audit & optimization foundation</p>
                    <div className="text-sm text-yellow-600 font-display">+15-25% organic traffic</div>
                  </div>
                </div>
                <div className="w-8 h-8 bg-yellow-400 border-4 border-charcoal-900 relative z-10"></div>
                <div className="w-5/12"></div>
              </div>

              {/* Month 3-4 */}
              <div className="flex items-center justify-between">
                <div className="w-5/12"></div>
                <div className="w-8 h-8 bg-yellow-400 border-4 border-charcoal-900 relative z-10"></div>
                <div className="w-5/12 pl-8">
                  <div className="bento-card p-6">
                    <div className="flex items-center mb-4">
                      <MousePointer className="w-6 h-6 text-yellow-400 mr-3" />
                      <h3 className="font-display text-xl uppercase tracking-tight text-charcoal-900">Month 3-4</h3>
                    </div>
                    <p className="text-stone-500 mb-3">Content optimization & link building momentum</p>
                    <div className="text-sm text-yellow-600 font-display">+50-75% organic traffic</div>
                  </div>
                </div>
              </div>

              {/* Month 5-6 */}
              <div className="flex items-center justify-between">
                <div className="w-5/12 text-right pr-8">
                  <div className="bento-card p-6 text-left">
                    <div className="flex items-center justify-end mb-4">
                      <h3 className="font-display text-xl uppercase tracking-tight text-charcoal-900 mr-3">Month 5-6</h3>
                      <Eye className="w-6 h-6 text-yellow-400" />
                    </div>
                    <p className="text-stone-500 mb-3">Authority building & ranking acceleration</p>
                    <div className="text-sm text-yellow-600 font-display">+100-150% organic traffic</div>
                  </div>
                </div>
                <div className="w-8 h-8 bg-yellow-400 border-4 border-charcoal-900 relative z-10"></div>
                <div className="w-5/12"></div>
              </div>

              {/* Month 7+ */}
              <div className="flex items-center justify-between">
                <div className="w-5/12"></div>
                <div className="w-8 h-8 bg-yellow-400 border-4 border-charcoal-900 relative z-10"></div>
                <div className="w-5/12 pl-8">
                  <div className="bento-card p-6">
                    <div className="flex items-center mb-4">
                      <Star className="w-6 h-6 text-yellow-400 mr-3" />
                      <h3 className="font-display text-xl uppercase tracking-tight text-charcoal-900">Month 7+</h3>
                    </div>
                    <p className="text-stone-500 mb-3">Sustained growth & market domination</p>
                    <div className="text-sm text-yellow-600 font-display">+200-300% organic traffic</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our SEO Services */}
      <section className="py-20 band-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="headline-lg mb-6 text-charcoal-900">
              Why Choose Business Builders for SEO?
            </h2>
            <p className="text-xl text-stone-500 mb-12">
              Our SEO specialists combine 26+ years of marketing experience with cutting-edge search engine optimization techniques.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 border-2 border-charcoal-800 shadow-offset flex items-center justify-center mb-6 mx-auto">
                  <Star className="w-8 h-8 text-charcoal-900" />
                </div>
                <h3 className="font-display text-xl uppercase tracking-tight text-charcoal-900 mb-4">Proven Track Record</h3>
                <p className="text-stone-500">Over two decades of helping businesses achieve #1 Google rankings and increased organic traffic.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 border-2 border-charcoal-800 shadow-offset flex items-center justify-center mb-6 mx-auto">
                  <Zap className="w-8 h-8 text-charcoal-900" />
                </div>
                <h3 className="font-display text-xl uppercase tracking-tight text-charcoal-900 mb-4">White-Hat Techniques</h3>
                <p className="text-stone-500">We use only Google-approved SEO strategies that provide long-term, sustainable results.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 border-2 border-charcoal-800 shadow-offset flex items-center justify-center mb-6 mx-auto">
                  <Target className="w-8 h-8 text-charcoal-900" />
                </div>
                <h3 className="font-display text-xl uppercase tracking-tight text-charcoal-900 mb-4">Local SEO Experts</h3>
                <p className="text-stone-500">Specialized knowledge of St. Augustine market and local search optimization strategies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="band-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="headline-md text-center mb-12">
            Related <span className="text-yellow-500">Services</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/website-design" className="bento-card border-2 border-charcoal-800 p-8 hover:shadow-offset transition-all duration-300 group">
              <h3 className="text-xl font-bold text-charcoal-900 mb-3 group-hover:text-yellow-600">Website Design</h3>
              <p className="text-stone-500">Professional website design that converts visitors into customers with responsive, SEO-optimized layouts.</p>
            </Link>
            <Link href="/marketing-services" className="bento-card border-2 border-charcoal-800 p-8 hover:shadow-offset transition-all duration-300 group">
              <h3 className="text-xl font-bold text-charcoal-900 mb-3 group-hover:text-yellow-600">Marketing Services</h3>
              <p className="text-stone-500">Comprehensive digital marketing solutions including PPC, email, and social media to amplify your SEO results.</p>
            </Link>
            <Link href="/social-media-marketing" className="bento-card border-2 border-charcoal-800 p-8 hover:shadow-offset transition-all duration-300 group">
              <h3 className="text-xl font-bold text-charcoal-900 mb-3 group-hover:text-yellow-600">Social Media Marketing</h3>
              <p className="text-stone-500">Build brand awareness and drive engagement across all major social platforms with strategic content and campaigns.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 band-yellow">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="headline-lg mb-6 text-charcoal-900">
              Ready to Dominate Google Search Results?
            </h2>
            <p className="text-xl text-charcoal-800 mb-8">
              Get a free SEO audit and discover how our search engine marketing experts can help you outrank your competition.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-charcoal-900 hover:bg-charcoal-800 text-white font-display uppercase tracking-wide border-2 border-charcoal-800 shadow-offset hover-press" asChild>
                <Link href="/free-seo-audit">
                  <Search className="w-5 h-5 mr-2" />
                  Get Free SEO Audit
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-charcoal-900 text-charcoal-900 hover:bg-charcoal-900 hover:text-white font-display uppercase tracking-wide" asChild>
                <Link href="/request-quote">
                  Request SEO Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-charcoal-900 text-charcoal-900 hover:bg-charcoal-900 hover:text-white font-display uppercase tracking-wide transition-all duration-300"
                data-testid="button-call-seo"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Our SEO Experts
              </a>
              <a
                href="mailto:hello@businessbldrs.com"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-charcoal-900 text-charcoal-900 hover:bg-charcoal-900 hover:text-white font-display uppercase tracking-wide transition-all duration-300"
                data-testid="button-email-seo"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email SEO Questions
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <MegaFooter />
    </div>
  );
}
