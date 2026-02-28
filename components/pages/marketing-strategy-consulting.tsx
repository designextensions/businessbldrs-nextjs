"use client";
import Link from "next/link";
import SEOHead from "@/components/ui/seo-head";

import { useQuery } from "@tanstack/react-query";
import { ArrowRight, CheckCircle, Users, Target, TrendingUp, Lightbulb, BarChart3, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import ServicePageSchema from "@/components/ui/service-page-schema";
import ServiceFAQSchema from "@/components/ui/service-faq-schema";
import Breadcrumbs from "@/components/ui/breadcrumbs";
;
import type { TeamMember } from "@/lib/db/schema";

export default function MarketingStrategyConsulting() {
  const { data: teamMembers = [] } = useQuery<TeamMember[]>({
    queryKey: ["/api/team"],
  });

  const strategyServices = [
    {
      icon: Target,
      title: "Strategic Marketing Planning",
      description: "Comprehensive marketing strategies tailored to your business goals, target audience, and market positioning.",
      features: ["Market Analysis", "Competitive Research", "Goal Setting", "KPI Development"]
    },
    {
      icon: BarChart3,
      title: "Marketing Performance Consulting", 
      description: "Data-driven insights and optimization strategies to maximize your marketing ROI and campaign effectiveness.",
      features: ["Performance Analytics", "ROI Optimization", "Campaign Analysis", "Conversion Tracking"]
    },
    {
      icon: Users,
      title: "Customer Journey Mapping",
      description: "Detailed customer journey analysis to identify touchpoints and optimize the entire customer experience.",
      features: ["Journey Analysis", "Touchpoint Optimization", "Experience Design", "Funnel Optimization"]
    },
    {
      icon: TrendingUp,
      title: "Growth Strategy Development",
      description: "Scalable growth strategies focused on sustainable business expansion and market penetration.",
      features: ["Growth Planning", "Market Expansion", "Revenue Optimization", "Scaling Strategies"]
    }
  ];

  const consultingProcess = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We begin with a comprehensive analysis of your current marketing efforts, business goals, and market position."
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Based on our findings, we develop a customized marketing strategy aligned with your objectives and budget."
    },
    {
      step: "03",
      title: "Implementation Planning",
      description: "We create detailed implementation plans with timelines, resources, and success metrics for each initiative."
    },
    {
      step: "04",
      title: "Execution & Optimization",
      description: "Our team helps execute the strategy while continuously monitoring and optimizing for better results."
    }
  ];

  const benefits = [
    "Expert strategic guidance from experienced marketing consultants",
    "Customized marketing plans tailored to your industry and goals",
    "Data-driven insights and performance optimization",
    "Scalable strategies that grow with your business",
    "Comprehensive competitor and market analysis",
    "Clear ROI measurement and reporting frameworks"
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Marketing Strategy Consulting",
    "description": "Professional marketing strategy consultant providing strategic marketing, marketing consulting, and tailored marketing plan services for effective growth.",
    "provider": {
      "@type": "Organization",
      "name": "Business Builders",
      "url": "https://businessbldrs.com"
    },
    "serviceType": "Marketing Strategy Consulting",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Marketing Strategy Services",
      "itemListElement": strategyServices.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        },
        "position": index + 1
      }))
    }
  };

  return (
    <div className="min-h-screen">
      <ServicePageSchema
        serviceName="Marketing Strategy Consulting"
        description="Professional marketing strategy consulting to accelerate your business growth. Expert consultants develop comprehensive marketing plans that deliver measurable results and sustainable growth."
        slug="marketing-strategy-consulting"
        serviceType="Marketing Consulting"
      />
      <ServiceFAQSchema
        serviceName="Marketing Strategy Consulting"
        slug="marketing-strategy-consulting"
        faqs={[
          {
            question: "What does a marketing strategy consultant do?",
            answer: "A marketing strategy consultant analyzes your current marketing efforts, identifies opportunities for growth, and develops a comprehensive plan tailored to your business goals. This includes competitive research, customer journey mapping, channel strategy, budget allocation, and KPI development to ensure measurable results from your marketing investment."
          },
          {
            question: "How much does marketing strategy consulting cost?",
            answer: "Marketing strategy consulting costs vary based on the scope and complexity of your needs. Business Builders offers a free 30-minute strategy consultation to assess your situation. From there, we develop customized proposals based on your specific goals, whether you need a one-time strategic plan or ongoing consulting support."
          },
          {
            question: "How long does it take to see results from a new marketing strategy?",
            answer: "Initial improvements can often be seen within the first 30-60 days of implementing a new strategy, particularly with paid channels. Organic strategies like SEO and content marketing typically show significant results within 3-6 months. We establish clear KPIs and provide monthly reporting so you can track progress throughout the engagement."
          },
          {
            question: "What makes Business Builders different from other marketing consultants?",
            answer: "With over 26 years of experience, Business Builders combines strategic marketing expertise with hands-on execution capabilities. As both a StoryBrand Certified Agency and HubSpot Platinum Partner, we bring proven frameworks and cutting-edge tools to every engagement. We do not just create plans — we help implement them and measure the results."
          }
        ]}
      />
      <SEOHead
        title="Marketing Strategy Consultant | Strategic Marketing - Business Builders"
        description="Professional marketing strategy consultant providing strategic marketing, marketing consulting, and tailored marketing plan services for effective growth."
        keywords="marketing strategy consultant, strategic marketing, marketing consulting, marketing plan services, business growth strategy, marketing strategy agency"
        canonicalUrl="https://businessbldrs.com/marketing-strategy-consulting"
        structuredData={structuredData}
        pageType="website"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="band-white pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Marketing Strategy" }
          ]} />

          <div className="text-center mb-16">
            <h1 className="headline-lg text-charcoal-900 mb-6">
              Marketing Strategy Consultant and <span className="text-yellow-500">Marketing Plan Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              Expert marketing strategy consulting to accelerate your business growth. Our strategic marketing consultants 
              develop comprehensive marketing plans that deliver measurable results and sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/request-quote">
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-display uppercase font-bold px-8 py-4 border-2 border-black shadow-offset hover-press">
                  Get Your Marketing Strategy
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/marketing-services">
                <Button size="lg" className="bg-transparent border-2 border-charcoal-900 text-charcoal-900 hover:bg-charcoal-900 hover:text-white px-8 py-4 font-display uppercase font-bold">
                  View Marketing Partnership
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Services */}
      <section className="py-20 band-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg text-charcoal-900 mb-6">
              Strategic Marketing <span className="text-yellow-400">Consulting Services</span>
            </h2>
            <p className="text-xl text-stone-500 max-w-3xl mx-auto">
              Our marketing strategy consultants provide comprehensive solutions to drive your business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {strategyServices.map((service, index) => (
              <div key={index} className="bento-card bg-white border-2 border-charcoal-800 shadow-offset hover:shadow-offset-yellow transition-all duration-300 group">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-yellow-400 border-2 border-black mr-4 group-hover:shadow-offset-sm transition-all">
                      <service.icon className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="font-display uppercase text-xl font-bold text-charcoal-900 group-hover:text-yellow-600 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-stone-500 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-stone-500">
                        <CheckCircle className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Process */}
      <section className="py-20 band-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg text-white mb-6">
              Our Marketing <span className="text-yellow-400">Strategy Process</span>
            </h2>
            <p className="text-xl text-stone-400 max-w-3xl mx-auto">
              A proven methodology for developing and implementing effective marketing strategies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultingProcess.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-yellow-400 border-2 border-black shadow-offset flex items-center justify-center mx-auto group-hover:shadow-offset-yellow transition-all">
                    <span className="text-2xl font-display font-bold text-black">{step.step}</span>
                  </div>
                  {index < consultingProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-yellow-400/50"></div>
                  )}
                </div>
                <h3 className="font-display uppercase text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-stone-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 band-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="headline-lg text-charcoal-900 mb-6">
                Why Choose Our <span className="text-yellow-400">Marketing Strategy Consulting?</span>
              </h2>
              <p className="text-xl text-stone-500 mb-8 leading-relaxed">
                With over 26 years of experience, our marketing strategy consultants have helped hundreds of businesses 
                achieve sustainable growth through strategic marketing planning and execution.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-stone-500">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bento-card bg-yellow-400 border-2 border-black shadow-offset p-8">
                <h3 className="font-display uppercase text-2xl font-bold mb-4 text-black">Ready to Transform Your Marketing?</h3>
                <p className="mb-6 text-charcoal-800">
                  Get a comprehensive marketing strategy audit and personalized growth plan for your business.
                </p>
                <div className="space-y-4 text-black">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-3" />
                    <span className="font-semibold">Free 30-minute strategy consultation</span>
                  </div>
                  <div className="flex items-center">
                    <Lightbulb className="w-5 h-5 mr-3" />
                    <span className="font-semibold">Custom marketing plan recommendations</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="w-5 h-5 mr-3" />
                    <span className="font-semibold">ROI-focused growth strategies</span>
                  </div>
                </div>
                <Link href="/request-quote">
                  <Button className="w-full mt-6 bg-black text-yellow-400 hover:bg-charcoal-800 font-display uppercase font-bold border-2 border-black">
                    Schedule Your Strategy Session
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
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
            <Link href="/marketing-services" className="bento-card border-2 border-charcoal-800 p-8 hover:shadow-offset transition-all duration-300 group">
              <h3 className="text-xl font-bold text-charcoal-900 mb-3 group-hover:text-yellow-600">Marketing Services</h3>
              <p className="text-stone-500">Execute your marketing strategy with comprehensive digital marketing services including SEO, PPC, and email.</p>
            </Link>
            <Link href="/seo-services" className="bento-card border-2 border-charcoal-800 p-8 hover:shadow-offset transition-all duration-300 group">
              <h3 className="text-xl font-bold text-charcoal-900 mb-3 group-hover:text-yellow-600">SEO Services</h3>
              <p className="text-stone-500">Drive long-term organic growth with data-driven SEO strategies aligned to your marketing plan.</p>
            </Link>
            <Link href="/storybrand-messaging" className="bento-card border-2 border-charcoal-800 p-8 hover:shadow-offset transition-all duration-300 group">
              <h3 className="text-xl font-bold text-charcoal-900 mb-3 group-hover:text-yellow-600">StoryBrand Messaging</h3>
              <p className="text-stone-500">Clarify your brand message with the proven StoryBrand framework to connect with customers and drive action.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 band-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="headline-lg text-white mb-6">
            Start Your Strategic Marketing <span className="text-yellow-400">Journey Today</span>
          </h2>
          <p className="text-xl text-stone-400 mb-8 leading-relaxed">
            Partner with experienced marketing strategy consultants who understand what it takes to build 
            and execute winning marketing plans that drive real business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-quote">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-display uppercase font-bold px-8 py-4 border-2 border-black shadow-offset hover-press">
                Get Your Marketing Strategy Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 font-display uppercase font-bold">
                View Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <MegaFooter />
    </div>
  );
}
