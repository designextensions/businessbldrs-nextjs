"use client";
import Link from "next/link";
import SEOHead from "@/components/ui/seo-head";

import { useState } from "react";
const teamMeetingImg = "/assets/Screenshot_2026-02-16_at_10.23.58_AM_1771255442299.png";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle, Star, Users, Target, TrendingUp, Award, MessageSquare, FileText, BarChart3, Shield, Zap, BookOpen, Quote, ChevronRight } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import ServicePageSchema from "@/components/ui/service-page-schema";
import ServiceFAQSchema from "@/components/ui/service-faq-schema";
import Breadcrumbs from "@/components/ui/breadcrumbs";

export default function StoryBrandAgency() {
  const [activeStep, setActiveStep] = useState(0);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const frameworkSteps = [
    {
      number: "1",
      title: "A Character",
      description: "Your customer is the hero of the story. They have a desire — and your job is to identify what that is."
    },
    {
      number: "2",
      title: "Has a Problem",
      description: "Every hero faces a villain. We identify the external, internal, and philosophical problems your customer is trying to solve."
    },
    {
      number: "3",
      title: "Meets a Guide",
      description: "That's you. We position your business as the trusted guide with empathy and authority to lead the hero to success."
    },
    {
      number: "4",
      title: "Who Gives Them a Plan",
      description: "We create a clear, simple plan that removes confusion and gives your customer confidence to take the next step."
    },
    {
      number: "5",
      title: "Calls Them to Action",
      description: "A clear direct CTA and transitional CTAs that move prospects through your marketing funnel at every stage."
    },
    {
      number: "6",
      title: "That Helps Them Avoid Failure",
      description: "We paint a picture of what's at stake if they don't act — motivating urgency without manipulation."
    },
    {
      number: "7",
      title: "And Ends in Success",
      description: "We show your customer the transformation they'll experience after working with you — their life after the problem is solved."
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "StoryBrand Certified Guides",
      description: "Our team has completed the rigorous StoryBrand certification directly from Donald Miller's organization. We don't just know the framework — we've been trained and tested on it."
    },
    {
      icon: BarChart3,
      title: "26+ Years of Marketing Experience",
      description: "We've been helping businesses grow since 1999. StoryBrand is the latest — and most effective — tool in our arsenal, backed by decades of real-world marketing execution."
    },
    {
      icon: Shield,
      title: "HubSpot Platinum Partner",
      description: "We pair StoryBrand messaging with HubSpot's powerful marketing automation. Your clear message gets delivered through email sequences, landing pages, and workflows that convert."
    },
    {
      icon: Users,
      title: "Full-Service Execution",
      description: "Most StoryBrand guides hand you a BrandScript and send you on your way. We execute. Websites, emails, lead generators, video, SEO — we build everything your marketing plan calls for."
    },
    {
      icon: TrendingUp,
      title: "Proven Results Across Industries",
      description: "From automotive dealerships to pool builders to nonprofits, our StoryBrand-powered marketing has driven measurable growth — 22% revenue increases, 113% more traffic, and 4M+ impressions."
    },
    {
      icon: Target,
      title: "Local Expertise, National Reach",
      description: "Based in St. Augustine, FL, we serve businesses across the country. Our clients span 15+ industries and range from startups to established brands doing $50M+ in revenue."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Schedule a Discovery Call",
      description: "A free 15-minute call to understand your business, your goals, and whether StoryBrand is the right fit. No pressure, no pitch — just a conversation.",
      icon: MessageSquare
    },
    {
      number: "02",
      title: "Create Your BrandScript",
      description: "In a focused workshop with our certified guides, we'll build your StoryBrand BrandScript — the foundation for all your marketing. You'll walk away with crystal-clear messaging.",
      icon: FileText
    },
    {
      number: "03",
      title: "Build Your Marketing Blueprint",
      description: "We translate your BrandScript into a 12-month marketing plan: website wireframes, email sequences, lead generators, and a content strategy — all built on your new messaging.",
      icon: Target
    },
    {
      number: "04",
      title: "Execute and Grow",
      description: "Unlike most StoryBrand agencies, we don't just plan — we build. Our team designs, develops, and deploys everything in your blueprint so you can focus on running your business.",
      icon: TrendingUp
    }
  ];

  const caseStudyResults = [
    {
      client: "Breakwater Construction",
      industry: "Custom Pool Building",
      results: ["22% business growth in one year", "29% revenue increase", "Automated lead nurturing pipeline"],
      link: "/case-studies/breakwater-construction"
    },
    {
      client: "Bozard Ford Lincoln",
      industry: "Automotive",
      results: ["4M+ video impressions", "40,000+ clicks to website", "Record-breaking sales month"],
      link: "/case-studies/bozard-ford-lincoln"
    },
    {
      client: "All Pro Dad",
      industry: "Nonprofit",
      results: ["113% increase in new users", "62% more page views", "1,200 new email subscribers"],
      link: "/case-studies/all-pro-dad"
    }
  ];

  const faqs = [
    {
      question: "What is a StoryBrand Certified Agency?",
      answer: "A StoryBrand Certified Agency has been trained and certified directly by Donald Miller's StoryBrand organization. Certification requires completing an intensive training program, passing certification exams, and demonstrating mastery of the StoryBrand 7-Part Framework. Business Builders is one of a select number of agencies nationwide that holds this certification, meaning we're authorized to use the StoryBrand methodology with our clients."
    },
    {
      question: "How is a StoryBrand agency different from a regular marketing agency?",
      answer: "A StoryBrand marketing agency starts with messaging clarity before doing anything else. Most agencies jump straight to tactics — build a website, run ads, post on social media. But without a clear message, those tactics underperform. We use the StoryBrand BrandScript to clarify your messaging first, then build every piece of your marketing on that foundation. The result is consistent, compelling communication across every channel."
    },
    {
      question: "What does StoryBrand marketing cost?",
      answer: "Our StoryBrand Blueprint packages range from $1,950 for a focused messaging session to $13,500 for a comprehensive two-day workshop with full marketing plan. Most clients choose the Marketing Blueprint at $9,500, which includes a BrandScript, website wireframe, 12-month marketing plan, lead-generating PDF, and a 5-email nurturing campaign. Implementation costs vary based on your needs — websites typically range from $8,000-$25,000."
    },
    {
      question: "Do I need to have read Building a StoryBrand before working with you?",
      answer: "Not at all. While Donald Miller's book is a great introduction to the framework, our certified guides walk you through everything during the workshop. In fact, many of our most successful clients come in with zero StoryBrand knowledge. We handle the strategy — you bring your expertise about your business and customers."
    },
    {
      question: "How long does it take to see results from StoryBrand marketing?",
      answer: "Most clients see immediate clarity in their messaging after the first workshop. Website redesigns using StoryBrand messaging typically launch within 8-12 weeks and show measurable improvements in conversion rates within the first 30 days. Full marketing plans with email sequences, lead generators, and content strategies typically show significant ROI within 3-6 months."
    },
    {
      question: "Can StoryBrand work for my industry?",
      answer: "StoryBrand works for any business that has customers. We've applied the framework successfully across 15+ industries including construction, automotive, healthcare, nonprofits, professional services, real estate, manufacturing, and technology companies. The framework is universal because every customer is a human being who responds to clear, story-driven messaging."
    },
    {
      question: "What's included in a StoryBrand website redesign?",
      answer: "A StoryBrand website redesign starts with your BrandScript and translates it into a conversion-focused website. This includes wireframing based on the StoryBrand website methodology, homepage copy written directly from your BrandScript, interior page strategy, calls-to-action placement, lead generator integration, mobile-responsive design, and SEO optimization. Every section of the site is designed to guide visitors from problem to solution."
    },
    {
      question: "Do you work with businesses outside of Florida?",
      answer: "Yes. While we're based in St. Augustine, FL, we work with businesses across the United States. Our StoryBrand workshops can be conducted in person at our office or via Zoom. Implementation work is handled by our full-service team regardless of location. We currently serve clients in 12+ states."
    }
  ];

  return (
    <div className="min-h-screen">
      <ServicePageSchema
        serviceName="StoryBrand Certified Marketing Agency"
        description="Business Builders is a StoryBrand Certified Agency in St. Augustine, FL. Our certified guides use Donald Miller's 7-Part Framework to clarify your message, build marketing funnels, and grow your business. 26+ years experience. HubSpot Platinum Partner."
        slug="storybrand-agency"
        serviceType="Marketing Agency"
      />
      <ServiceFAQSchema
        serviceName="StoryBrand Marketing Agency"
        slug="storybrand-agency"
        faqs={faqs}
      />
      <SEOHead
        title="StoryBrand Certified Agency | Business Builders — St. Augustine, FL"
        description="Business Builders is a certified StoryBrand marketing agency with 26+ years experience. We clarify your message and grow your business using Donald Miller's proven framework."
        keywords="StoryBrand agency, StoryBrand marketing agency, StoryBrand certified agency, certified StoryBrand guide, Donald Miller StoryBrand, StoryBrand certified, marketing agency St Augustine, StoryBrand framework agency"
        canonicalUrl="https://businessbldrs.com/storybrand-agency"
        structuredData={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ProfessionalService",
              "name": "Business Builders — StoryBrand Certified Agency",
              "url": "https://businessbldrs.com/storybrand-agency",
              "logo": "https://businessbldrs.com/logo.png",
              "image": "https://businessbldrs.com/social-share-home.png",
              "description": "StoryBrand Certified Marketing Agency helping businesses clarify their message and grow using Donald Miller's 7-Part Framework.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "701 Market St Ste 101",
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
              "telephone": "+1-877-378-6101",
              "priceRange": "$$$",
              "openingHours": "Mo-Fr 09:00-17:00",
              "areaServed": [
                { "@type": "City", "name": "St. Augustine" },
                { "@type": "City", "name": "Jacksonville" },
                { "@type": "State", "name": "Florida" },
                { "@type": "Country", "name": "United States" }
              ],
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "Professional Certification",
                  "name": "StoryBrand Certified Agency"
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "Professional Certification",
                  "name": "HubSpot Platinum Partner"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/businessbldrs",
                "https://www.instagram.com/businessbldrs",
                "https://www.linkedin.com/company/business-builders",
                "https://www.youtube.com/@businessbldrs"
              ],
              "knowsAbout": ["StoryBrand Framework", "Digital Marketing", "Website Design", "SEO", "HubSpot CRM", "Brand Strategy", "Content Marketing"]
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://businessbldrs.com" },
                { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://businessbldrs.com/services" },
                { "@type": "ListItem", "position": 3, "name": "StoryBrand Certified Agency", "item": "https://businessbldrs.com/storybrand-agency" }
              ]
            }
          ]
        }}
      />
      <Navigation />

      {/* Hero Section - Dark */}
      <section className="pt-32 pb-16 band-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "StoryBrand Certified Agency" }
          ]} />

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
            <div>
              <span className="label-industrial inline-block px-4 py-2 bg-yellow-400 text-charcoal-900 border-2 border-charcoal-900 shadow-offset-sm mb-6">
                <Award className="w-4 h-4 inline mr-2" />
                STORYBRAND CERTIFIED
              </span>
              <h1 className="headline-lg text-white mb-6">
                STORYBRAND<br />
                <span className="text-yellow-400">MARKETING AGENCY</span>
              </h1>
              <p className="text-editorial text-stone-400 mb-4">
                <strong className="text-white">Your customers don't buy the best products — they buy the ones they understand the fastest.</strong> As a StoryBrand Certified Agency, we clarify your message so customers listen, engage, and buy.
              </p>
              <p className="text-stone-500 leading-relaxed mb-8">
                Business Builders has been helping businesses grow since 1999. We combine the StoryBrand Framework with 26+ years of full-service marketing execution to deliver messaging that converts and marketing that scales.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/request-quote">
                  <Button size="xl">
                    FREE CONSULTATION
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button
                  onClick={() => scrollToSection('how-it-works')}
                  variant="outlineLight"
                  size="lg"
                >
                  SEE HOW IT WORKS
                </Button>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="font-display font-black text-3xl text-yellow-400">26+</div>
                  <div className="label-industrial text-stone-500 text-xs">YEARS</div>
                </div>
                <div className="w-px h-12 bg-charcoal-700" />
                <div className="text-center">
                  <div className="font-display font-black text-3xl text-yellow-400">500+</div>
                  <div className="label-industrial text-stone-500 text-xs">PROJECTS</div>
                </div>
                <div className="w-px h-12 bg-charcoal-700" />
                <div className="text-center">
                  <div className="font-display font-black text-3xl text-yellow-400">15+</div>
                  <div className="label-industrial text-stone-500 text-xs">INDUSTRIES</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="border-2 border-charcoal-700 overflow-hidden">
                <img
                  src={teamMeetingImg}
                  loading="eager"
                  alt="Business Builders StoryBrand certified marketing agency team in St. Augustine office"
                  className="w-full"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 border-2 border-charcoal-900 p-4 shadow-offset">
                <div className="text-center">
                  <div className="text-3xl font-display font-black text-charcoal-900">26+</div>
                  <div className="text-xs font-display uppercase text-charcoal-900">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-4 bg-charcoal-900 border-y-2 border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            {[
              { icon: Award, label: "StoryBrand Certified" },
              { icon: Shield, label: "HubSpot Platinum Partner" },
              { icon: Star, label: "Founded 1999" },
              { icon: TrendingUp, label: "500+ Projects Delivered" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <item.icon className="w-4 h-4 text-yellow-400" />
                <span className="label-industrial text-stone-300 text-xs">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 band-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <span className="label-industrial text-yellow-600 mb-2 block">THE CHALLENGE</span>
              <h2 className="headline-md font-display uppercase mb-8 text-charcoal-900">
                Most Businesses Have a <span className="text-yellow-500">Messaging Problem</span>
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed mb-6">
                You've invested in a great product or service. You've built a team. You've poured time and money into marketing. But something isn't clicking — leads are slow, conversions are flat, and your website isn't working as hard as it should.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed mb-6">
                The problem isn't your business. The problem is your message. When customers can't immediately understand what you offer, how it helps them, and what to do next, they leave. Every day your messaging is unclear, you're losing customers to competitors who communicate better — not necessarily those who do better work.
              </p>
              <p className="text-stone-500 leading-relaxed">
                That's where the StoryBrand Framework comes in. Developed by <strong className="text-charcoal-900">Donald Miller</strong>, StoryBrand is a proven 7-part messaging framework used by thousands of businesses — from startups to Fortune 500 companies — to clarify their message and grow their revenue. And as a <strong className="text-charcoal-900">StoryBrand Certified Agency</strong>, Business Builders is trained and authorized to apply this framework to your business.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-charcoal-900 border-2 border-charcoal-800 p-8">
                <Quote className="w-10 h-10 text-yellow-400 mb-4" />
                <p className="font-display uppercase text-2xl text-white font-bold leading-tight mb-6">
                  When you confuse, you lose.
                </p>
                <p className="text-stone-400 text-sm leading-relaxed mb-6">
                  Every day your messaging is unclear, you're losing customers to competitors who communicate better.
                </p>
                <div className="border-t border-charcoal-700 pt-4">
                  <p className="label-industrial text-yellow-400 text-xs">Donald Miller</p>
                  <p className="text-stone-500 text-xs">Author, Building a StoryBrand</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7-Part Framework - Interactive */}
      <section id="how-it-works" className="py-20 band-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="label-industrial text-yellow-400 mb-2 block">THE METHODOLOGY</span>
            <h2 className="headline-md font-display uppercase text-white mb-4">
              The StoryBrand <span className="text-yellow-400">7-Part Framework</span>
            </h2>
            <p className="text-stone-400 max-w-3xl mx-auto">
              Every great story follows the same structure — and so does every great marketing message. Here's how we apply the StoryBrand Framework to position your customer as the hero and your business as the guide.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 space-y-2">
              {frameworkSteps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`w-full text-left p-4 border-2 transition-all duration-200 flex items-center gap-4 ${
                    activeStep === index
                      ? 'bg-yellow-400 border-charcoal-900 text-charcoal-900'
                      : 'bg-charcoal-800 border-charcoal-700 text-stone-300 hover:border-yellow-400'
                  }`}
                >
                  <span className={`w-8 h-8 flex items-center justify-center font-display font-black text-sm flex-shrink-0 ${
                    activeStep === index ? 'bg-charcoal-900 text-yellow-400' : 'bg-charcoal-700 text-yellow-400'
                  }`}>
                    {step.number}
                  </span>
                  <span className="font-display uppercase font-bold text-sm">{step.title}</span>
                  <ChevronRight className={`w-4 h-4 ml-auto flex-shrink-0 ${activeStep === index ? 'text-charcoal-900' : 'text-stone-600'}`} />
                </button>
              ))}
            </div>

            <div className="lg:col-span-8">
              <div className="bg-charcoal-800 border-2 border-charcoal-700 p-8 lg:p-12 h-full flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-yellow-400 flex items-center justify-center">
                    <span className="font-display font-black text-3xl text-charcoal-900">{frameworkSteps[activeStep].number}</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-display uppercase font-bold text-white">{frameworkSteps[activeStep].title}</h3>
                </div>
                <p className="text-stone-400 text-lg leading-relaxed mb-8">{frameworkSteps[activeStep].description}</p>
                <div className="flex items-center gap-2">
                  {frameworkSteps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveStep(i)}
                      className={`h-1 transition-all duration-200 ${
                        i === activeStep ? 'bg-yellow-400 w-8' : 'bg-charcoal-600 w-4 hover:bg-charcoal-500'
                      }`}
                      aria-label={`Go to step ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/storybrand-framework">
              <Button className="bg-yellow-400 text-charcoal-900 px-8 py-4 font-display uppercase font-bold hover:bg-yellow-300 transition-all duration-300 border-2 border-charcoal-900 shadow-offset hover-press">
                DEEP DIVE INTO THE FRAMEWORK
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 band-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="label-industrial text-yellow-600 mb-2 block">YOUR JOURNEY</span>
            <h2 className="headline-md font-display uppercase">
              How Our StoryBrand <span className="text-yellow-500">Agency Works</span>
            </h2>
            <p className="text-stone-500 max-w-3xl mx-auto mt-4">
              We've streamlined the StoryBrand process into four steps. You bring your business expertise — we handle the rest.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bento-card p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-yellow-400 border-2 border-charcoal-900 flex items-center justify-center shadow-offset-sm flex-shrink-0">
                      <step.icon className="w-6 h-6 text-charcoal-900" />
                    </div>
                    <span className="font-display font-black text-4xl text-stone-200">{step.number}</span>
                  </div>
                  <h3 className="font-display uppercase font-bold text-charcoal-900 mb-3">{step.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ChevronRight className="w-6 h-6 text-stone-300" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/schedule-call">
              <Button size="xl">
                SCHEDULE YOUR FREE CALL
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 band-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="label-industrial text-yellow-600 mb-2 block">WHY US</span>
              <h2 className="headline-md font-display uppercase text-charcoal-900">
                Why Choose Business Builders as Your <span className="text-yellow-500">StoryBrand Agency</span>
              </h2>
            </div>
          </div>
          <p className="text-lg text-stone-500 max-w-3xl mb-12">
            Plenty of marketing agencies claim to know StoryBrand. We're <strong className="text-charcoal-900">certified</strong> — and we've been building businesses for over two decades.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white border-2 border-charcoal-800 p-6 shadow-offset hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-yellow-400 border-2 border-charcoal-900 flex items-center justify-center shadow-offset-sm flex-shrink-0">
                    <item.icon className="w-6 h-6 text-charcoal-900" />
                  </div>
                  <h3 className="font-display uppercase font-bold text-charcoal-900 group-hover:text-yellow-600 transition-colors">{item.title}</h3>
                </div>
                <p className="text-stone-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Results */}
      <section className="py-20 band-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="label-industrial text-yellow-400 mb-2 block">PROOF IT WORKS</span>
              <h2 className="headline-md font-display uppercase text-white">
                Real Results from <span className="text-yellow-400">StoryBrand Marketing</span>
              </h2>
            </div>
            <Link href="/portfolio" className="mt-4 md:mt-0">
              <span className="label-industrial text-stone-400 hover:text-yellow-400 transition-colors inline-flex items-center gap-2">
                VIEW ALL CASE STUDIES <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
          <p className="text-stone-400 max-w-3xl mb-12">
            We don't just talk about clear messaging — we prove it works. Here's what happened when we applied the StoryBrand Framework to our clients' businesses.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudyResults.map((study, index) => (
              <Link key={index} href={study.link} className="group block">
                <div className="bg-charcoal-800 border-2 border-charcoal-700 p-6 hover:border-yellow-400 transition-all duration-300 h-full">
                  <span className="label-industrial text-yellow-400 text-xs">{study.industry}</span>
                  <h3 className="text-xl font-display uppercase font-bold text-white mb-6 group-hover:text-yellow-400 transition-colors">{study.client}</h3>
                  <div className="space-y-3">
                    {study.results.map((result, rIdx) => (
                      <div key={rIdx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-stone-400 text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center text-yellow-400 font-display uppercase text-xs font-bold group-hover:text-yellow-300">
                    Read Case Study <ArrowRight className="w-3 h-3 ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 band-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="label-industrial text-yellow-600 mb-2 block">CLIENT FEEDBACK</span>
            <h2 className="headline-md font-display uppercase">
              What Our Clients Say About <span className="text-yellow-500">Working With Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-charcoal-900 border-2 border-yellow-400 p-8 shadow-offset-yellow">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="flex items-start gap-3 mb-6">
                <Quote className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
                <p className="font-serif italic text-white text-lg leading-relaxed">
                  "The StoryBrand framework completely transformed how we communicate with our customers. Our messaging is now crystal clear and our conversion rates have increased significantly. Business Builders didn't just hand us a script — they built our entire marketing system around it."
                </p>
              </div>
              <div className="border-t border-charcoal-700 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-400 flex items-center justify-center">
                  <span className="font-display font-bold text-charcoal-900 text-sm">ME</span>
                </div>
                <div>
                  <p className="font-display font-bold text-white uppercase text-sm">Mark Evans</p>
                  <p className="text-stone-500 text-xs">Evans Automotive</p>
                </div>
              </div>
            </div>

            <div className="bg-charcoal-900 border-2 border-charcoal-700 p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="flex items-start gap-3 mb-6">
                <Quote className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
                <p className="font-serif italic text-white text-lg leading-relaxed">
                  "Working with Business Builders on our marketing blueprint was the best investment we made. The strategic approach and clear messaging have driven real results for our dealership — including record-breaking sales and over 4 million video impressions."
                </p>
              </div>
              <div className="border-t border-charcoal-700 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-400 flex items-center justify-center">
                  <span className="font-display font-bold text-charcoal-900 text-sm">LB</span>
                </div>
                <div>
                  <p className="font-display font-bold text-white uppercase text-sm">Letti Bozard</p>
                  <p className="text-stone-500 text-xs">Bozard Ford Lincoln</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-20 band-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="label-industrial text-yellow-600 mb-2 block">INVESTMENT</span>
            <h2 className="headline-md font-display uppercase">
              StoryBrand <span className="text-yellow-500">Blueprint Packages</span>
            </h2>
            <p className="text-stone-500 max-w-3xl mx-auto mt-4">
              Every engagement starts with a StoryBrand BrandScript — then scales based on your needs. Here's a quick overview.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Messaging", price: "$1,950", desc: "BrandScript + One-Liner" },
              { name: "Website", price: "$4,500", desc: "BrandScript + Website Wireframe" },
              { name: "Marketing", price: "$9,500", desc: "Full 12-Month Plan", popular: true },
              { name: "Premier", price: "$13,500", desc: "Two-Day Deep Dive", premium: true }
            ].map((pkg, index) => (
              <div key={index} className={`relative bg-white p-6 border-2 shadow-offset text-center ${pkg.popular ? 'border-yellow-400 -translate-y-2' : pkg.premium ? 'border-charcoal-900' : 'border-charcoal-800'}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="label-industrial bg-yellow-400 text-charcoal-900 px-3 py-1 text-xs border-2 border-charcoal-900">MOST POPULAR</span>
                  </div>
                )}
                <h3 className="font-display uppercase font-bold text-charcoal-900 mb-2">{pkg.name}</h3>
                <div className="text-3xl font-display font-black text-yellow-500 mb-2">{pkg.price}</div>
                <p className="text-stone-500 text-sm mb-6">{pkg.desc}</p>
                <Link href="/storybrand-messaging">
                  <Button className={`w-full font-display uppercase text-sm font-bold border-2 border-charcoal-900 shadow-offset-sm hover-press ${pkg.popular ? 'bg-yellow-400 text-charcoal-900 hover:bg-yellow-300' : 'bg-charcoal-900 text-white hover:bg-charcoal-800'}`}>
                    VIEW DETAILS
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/storybrand-messaging" className="label-industrial text-yellow-600 hover:text-yellow-500 inline-flex items-center gap-2">
              See Full Package Details & Comparison <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 band-white" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="label-industrial text-yellow-600 mb-2 block">COMMON QUESTIONS</span>
            <h2 className="headline-md font-display uppercase">
              Frequently Asked <span className="text-yellow-500">Questions</span>
            </h2>
            <p className="text-stone-500 mt-4">
              Everything you need to know about working with a StoryBrand Certified Agency.
            </p>
          </div>

          <div className="border-2 border-charcoal-900 shadow-offset overflow-hidden bg-white">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className={index < faqs.length - 1 ? "border-b-2 border-charcoal-900" : ""}>
                  <AccordionTrigger className="text-left text-sm lg:text-base font-display uppercase text-charcoal-900 hover:text-yellow-600 px-6 py-4 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-stone-500 px-6 pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-20 band-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="label-industrial text-yellow-600 mb-2 block">EXPLORE MORE</span>
            <h2 className="headline-md font-display uppercase">
              Learn More About <span className="text-yellow-500">StoryBrand Marketing</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/storybrand-framework" className="bg-white border-2 border-charcoal-800 p-6 shadow-offset hover:-translate-y-1 transition-all duration-300 group block">
              <BookOpen className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="font-display uppercase font-bold text-charcoal-900 mb-2 group-hover:text-yellow-600 transition-colors">StoryBrand Framework Deep Dive</h3>
              <p className="text-stone-500 text-sm leading-relaxed">Explore the complete StoryBrand 7-Part Framework, BrandScript elements, and how clear messaging transforms your marketing.</p>
            </Link>
            <Link href="/storybrand-messaging" className="bg-white border-2 border-charcoal-800 p-6 shadow-offset hover:-translate-y-1 transition-all duration-300 group block">
              <FileText className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="font-display uppercase font-bold text-charcoal-900 mb-2 group-hover:text-yellow-600 transition-colors">Marketing Blueprint Packages</h3>
              <p className="text-stone-500 text-sm leading-relaxed">View detailed pricing, deliverables, and package comparisons for our StoryBrand Blueprint sessions.</p>
            </Link>
            <Link href="/website-design" className="bg-white border-2 border-charcoal-800 p-6 shadow-offset hover:-translate-y-1 transition-all duration-300 group block">
              <Zap className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="font-display uppercase font-bold text-charcoal-900 mb-2 group-hover:text-yellow-600 transition-colors">StoryBrand Website Design</h3>
              <p className="text-stone-500 text-sm leading-relaxed">See how we translate your BrandScript into a conversion-focused website that turns visitors into customers.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 band-yellow" id="contact">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="headline-md font-display uppercase text-charcoal-900 mb-6">
            Ready to Clarify Your Message and Grow Your Business?
          </h2>
          <p className="text-lg text-charcoal-800 leading-relaxed mb-8 max-w-2xl mx-auto">
            Stop losing customers to confusing marketing. Schedule a free 15-minute discovery call with our StoryBrand Certified team and find out how clear messaging can transform your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/schedule-call">
              <Button
                size="lg"
                className="bg-charcoal-900 text-white px-8 py-4 font-bold hover:bg-charcoal-800 transition-all duration-300 shadow-offset hover-press"
              >
                SCHEDULE A FREE CALL
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/request-quote">
              <Button
                size="lg"
                className="bg-transparent border-2 border-charcoal-900 text-charcoal-900 px-8 py-4 font-bold hover:bg-charcoal-900 hover:text-white transition-all duration-300"
              >
                REQUEST A QUOTE
              </Button>
            </Link>
          </div>

          <p className="text-charcoal-700 mt-8 text-sm">
            Business Builders | 701 Market St, St. Augustine, FL 32095 | 877-378-6101
          </p>
        </div>
      </section>

      <MegaFooter />
    </div>
  );
}
