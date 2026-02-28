"use client";
import Link from "next/link";
import Image from "next/image";
import SEOHead from "@/components/ui/seo-head";

import { Button } from "@/components/ui/button";
import { ArrowRight, Settings, Users, Zap, BarChart3, Globe, GraduationCap, CheckCircle, Clock, Heart, Award, Target, Lightbulb } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import ServicePageSchema from "@/components/ui/service-page-schema";
import ServiceFAQSchema, { hubspotFAQs } from "@/components/ui/service-faq-schema";
import Breadcrumbs from "@/components/ui/breadcrumbs";
const hubspotDashboardPhoto = "/assets/stock_images/hubspot_crm_software_3d3386af.jpg";
const hubspotAnalyticsPhoto = "/assets/stock_images/hubspot_crm_software_8e448282.jpg";

export default function HubSpotImplementation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const hubspotBenefits = [
    "Resolve issues faster",
    "Build lasting relationships", 
    "Turn happy customers into loyal brand advocates"
  ];

  const serviceOfferings = [
    {
      icon: Settings,
      title: "Custom HubSpot Onboarding",
      description: "Seamlessly transition to HubSpot with a setup tailored to your business needs."
    },
    {
      icon: Users,
      title: "HubSpot CRM Implementation",
      description: "Customize HubSpot CRM to fit your processes and improve customer relationship management."
    },
    {
      icon: Zap,
      title: "Marketing Automation",
      description: "Streamline your campaigns with automation that saves time and boosts efficiency."
    },
    {
      icon: BarChart3,
      title: "Sales Enablement",
      description: "Equip your sales team with tools like pipeline management and performance analytics."
    },
    {
      icon: Globe,
      title: "Content Management",
      description: "Leverage HubSpot CMS to create, optimize, and manage your website and content."
    },
    {
      icon: GraduationCap,
      title: "Training and Ongoing Support",
      description: "Ensure your team stays proficient with HubSpot through comprehensive training and continuous support."
    }
  ];

  const differentiators = [
    {
      icon: Award,
      title: "HubSpot Expertise",
      description: "Tailored strategies and optimizations for your unique needs."
    },
    {
      icon: Target,
      title: "Proven Track Record",
      description: "Years of experience delivering measurable results."
    },
    {
      icon: Lightbulb,
      title: "Continuous Support",
      description: "Dedicated guidance every step of the way."
    }
  ];

  return (
    <div className="min-h-screen">
      <ServicePageSchema
        serviceName="HubSpot Implementation"
        description="Seamless HubSpot CRM setup for maximum impact. As Platinum HubSpot Partners, we provide expert CRM implementation, marketing automation, and ongoing support services."
        slug="hubspot-implementation"
        serviceType="CRM Implementation"
      />
      <ServiceFAQSchema
        serviceName="HubSpot Implementation"
        slug="hubspot-implementation"
        faqs={hubspotFAQs}
      />
      <SEOHead
        title="HubSpot CRM Implementation Services - Platinum Partner | Business Builders"
        description="Seamless HubSpot setup for maximum impact. As Platinum HubSpot Partners, we provide expert CRM implementation, marketing automation, and ongoing support services."
        keywords="HubSpot implementation, HubSpot CRM setup, HubSpot Platinum Partner, marketing automation, sales enablement, CRM implementation, St Augustine HubSpot"
        canonicalUrl="https://businessbldrs.com/hubspot-implementation"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "HubSpot CRM Implementation Services",
          "provider": {
            "@type": "Organization",
            "name": "Business Builders"
          },
          "description": "Comprehensive HubSpot implementation services including CRM setup, marketing automation, sales enablement, and ongoing support by Platinum HubSpot Partners",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "HubSpot Services",
            "itemListElement": serviceOfferings.map(service => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": service.title,
                "description": service.description
              }
            }))
          }
        }}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="band-white relative pt-32 pb-20 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "HubSpot CRM Implementation" }
          ]} />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="overflow-hidden">
              <div className="inline-block px-4 py-2 border-2 border-charcoal-900 mb-6">
                <span className="label-industrial text-charcoal-900">SERVICES</span>
              </div>
              <h1 className="headline-lg mb-8 leading-tight text-charcoal-900">
                HUBSPOT<br />
                <span className="text-yellow-500">IMPLEMENTATION</span>
              </h1>
              <p className="text-xl lg:text-2xl text-stone-600 leading-relaxed mb-8">
                <strong className="text-charcoal-900">At Business Builders, we take pride in being Platinum HubSpot Partners, a distinction that sets us apart.</strong> With our deep expertise in HubSpot's Service Hub, we help businesses simplify their customer service processes and create exceptional client experiences.
              </p>
              
              <Link href="/request-quote">
                <Button 
                  className="bg-yellow-400 text-black px-12 py-6 font-display font-bold text-xl uppercase hover:bg-yellow-300 transition-all duration-300 shadow-offset hover-press"
                >
                  SCHEDULE A CALL
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="bento-card p-2 bg-white">
                <Image
                  src={hubspotDashboardPhoto}
                  alt="HubSpot CRM dashboard analytics and implementation"
                  width={800}
                  height={600}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="w-full object-cover h-96"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose HubSpot Section */}
      <section className="band-stone py-20 relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bento-card p-2 bg-white">
                <img
                  src={hubspotAnalyticsPhoto}
                  alt="HubSpot Service Hub analytics and customer management"
                  loading="lazy"
                  className="w-full object-cover h-96"
                />
              </div>
            </div>
            <div>
              <h2 className="headline-lg mb-8 text-charcoal-900">
                WHY CHOOSE <span className="text-yellow-400">HUBSPOT SERVICE HUB?</span>
              </h2>
              <p className="text-xl text-stone-500 leading-relaxed mb-8">
                HubSpot Service Hub is more than a support tool—it's a powerful, customer-focused platform designed to:
              </p>
              
              <div className="space-y-4 mb-12">
                {hubspotBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-yellow-400 mt-1 mr-4 flex-shrink-0" />
                    <span className="text-stone-500 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-lg text-stone-500 leading-relaxed">
                When you partner with us, you gain access to a team of experts who know how to fully leverage HubSpot's potential to elevate your customer service strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings Section */}
      <section className="band-white py-20 relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg mb-8 text-charcoal-900">
              OUR HUBSPOT <span className="text-yellow-400">SERVICE OFFERINGS</span>
            </h2>
            <p className="text-xl text-stone-500 leading-relaxed max-w-3xl mx-auto">
              As a HubSpot Platinum Partner, we provide a full suite of services to maximize your HubSpot investment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceOfferings.map((service, index) => (
              <div key={index} className="bento-card p-8 bg-white">
                <div className="w-16 h-16 bg-yellow-400 flex items-center justify-center mb-6 shadow-offset-sm">
                  <service.icon className="w-8 h-8 text-charcoal-900" />
                </div>
                <h3 className="font-display text-xl font-bold uppercase mb-4 text-charcoal-900">{service.title}</h3>
                <p className="text-stone-500 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="band-dark py-20 relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="headline-lg mb-8 text-white">
                WHAT SETS <span className="text-yellow-400">BUSINESS BUILDERS APART?</span>
              </h2>
              <p className="text-xl text-stone-400 leading-relaxed mb-12">
                As Platinum Partners, we go beyond basic implementation:
              </p>
              
              <div className="space-y-8">
                {differentiators.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center mr-6 flex-shrink-0 shadow-offset-sm">
                      <item.icon className="w-6 h-6 text-charcoal-900" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold uppercase mb-2 text-white">{item.title}</h3>
                      <p className="text-stone-400 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="border-2 border-yellow-400 p-2 shadow-offset-yellow">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                  srcSet="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80 400w, https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80 800w, https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=900&q=80 1200w"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  width={800}
                  height={600}
                  loading="lazy"
                  alt="Business Builders team working on HubSpot implementation"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platinum Partner Badge Section */}
      <section className="band-stone py-20 relative">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bento-card p-12 bg-white">
            <div className="w-24 h-24 bg-yellow-400 flex items-center justify-center mx-auto mb-8 shadow-offset">
              <Award className="w-12 h-12 text-charcoal-900" />
            </div>
            <h2 className="headline-md mb-6 text-charcoal-900">
              <span className="text-yellow-400">HUBSPOT PLATINUM PARTNER</span>
            </h2>
            <p className="text-xl text-stone-500 leading-relaxed mb-8">
              We take pride in being Platinum HubSpot Partners, a distinction that sets us apart. This prestigious status reflects our deep expertise and commitment to delivering exceptional HubSpot implementations.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                <h4 className="font-display font-bold uppercase mb-2 text-charcoal-900">Years of Experience</h4>
                <p className="text-stone-500">Proven track record with HubSpot implementations</p>
              </div>
              <div>
                <Users className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                <h4 className="font-display font-bold uppercase mb-2 text-charcoal-900">Expert Team</h4>
                <p className="text-stone-500">Certified HubSpot specialists dedicated to your success</p>
              </div>
              <div>
                <Heart className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                <h4 className="font-display font-bold uppercase mb-2 text-charcoal-900">Client Success</h4>
                <p className="text-stone-500">Measurable results and exceptional client experiences</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Build Better Service Section */}
      <section className="band-white py-20 relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bento-card p-2 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                  srcSet="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80 400w, https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80 800w, https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=900&q=80 1200w"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  width={800}
                  height={600}
                  loading="lazy"
                  alt="Team collaboration on HubSpot implementation"
                  className="w-full"
                />
              </div>
            </div>
            <div>
              <h2 className="headline-lg mb-8 text-charcoal-900">
                LET'S BUILD BETTER <span className="text-yellow-400">SERVICE TOGETHER</span>
              </h2>
              <p className="text-xl text-stone-500 leading-relaxed mb-8">
                Ready to elevate your customer service experience? Partner with Business Builders to unlock the full potential of HubSpot Service Hub.
              </p>
              <p className="text-lg text-stone-500 leading-relaxed mb-8">
                We believe you deserve the tools you need to scale your business, and we know that custom applications can help you do it. We've seen firsthand the impact a custom business application can have because we've created applications used by millions that have generated hundreds of millions of dollars in revenue.
              </p>
              
              <Link href="/request-quote">
                <Button 
                  className="bg-yellow-400 text-black px-12 py-6 font-display font-bold text-xl uppercase hover:bg-yellow-300 transition-all duration-300 shadow-offset hover-press"
                >
                  CONTACT US TO GET STARTED TODAY
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="band-dark py-20 relative">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="headline-lg mb-12 text-white">
            HUBSPOT IMPLEMENTATION <span className="text-yellow-400">RESULTS</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="border-2 border-yellow-400 p-8 shadow-offset-yellow">
              <div className="headline-md text-yellow-400 mb-4">95%</div>
              <h4 className="font-display text-xl font-bold uppercase mb-2 text-white">Client Satisfaction</h4>
              <p className="text-stone-400">Exceptional results with HubSpot implementations</p>
            </div>
            <div className="border-2 border-yellow-400 p-8 shadow-offset-yellow">
              <div className="headline-md text-yellow-400 mb-4">50%</div>
              <h4 className="font-display text-xl font-bold uppercase mb-2 text-white">Faster Issue Resolution</h4>
              <p className="text-stone-400">Average improvement in customer support efficiency</p>
            </div>
            <div className="border-2 border-yellow-400 p-8 shadow-offset-yellow">
              <div className="headline-md text-yellow-400 mb-4">30+</div>
              <h4 className="font-display text-xl font-bold uppercase mb-2 text-white">Days Average Setup</h4>
              <p className="text-stone-400">Complete HubSpot implementation timeline</p>
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
              <p className="text-stone-500">Comprehensive digital marketing solutions that integrate seamlessly with your HubSpot CRM platform.</p>
            </Link>
            <Link href="/seo-services" className="bento-card border-2 border-charcoal-800 p-8 hover:shadow-offset transition-all duration-300 group">
              <h3 className="text-xl font-bold text-charcoal-900 mb-3 group-hover:text-yellow-600">SEO Services</h3>
              <p className="text-stone-500">Drive organic traffic to your HubSpot-powered website with proven search engine optimization strategies.</p>
            </Link>
            <Link href="/marketing-strategy-consulting" className="bento-card border-2 border-charcoal-800 p-8 hover:shadow-offset transition-all duration-300 group">
              <h3 className="text-xl font-bold text-charcoal-900 mb-3 group-hover:text-yellow-600">Marketing Strategy</h3>
              <p className="text-stone-500">Develop a comprehensive marketing plan that leverages your HubSpot investment for maximum growth.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="band-yellow py-20 relative" id="contact">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="headline-lg mb-8 text-charcoal-900">
            READY TO MAXIMIZE YOUR HUBSPOT INVESTMENT?
          </h2>
          <p className="text-xl text-charcoal-800 leading-relaxed mb-12">
            As Platinum HubSpot Partners, we provide seamless setup and ongoing support to help you achieve maximum impact with your HubSpot implementation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/request-quote">
              <Button 
                className="bg-charcoal-900 text-white px-12 py-6 font-display font-bold text-xl uppercase hover:bg-charcoal-800 transition-all duration-300 shadow-offset-sm hover-press"
                data-testid="button-get-started-cta"
              >
                GET STARTED TODAY
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
            </Link>
            <Link href="/request-quote">
              <Button 
                variant="outline"
                className="border-2 border-charcoal-900 bg-transparent text-charcoal-900 px-12 py-6 font-display font-bold text-xl uppercase hover:bg-charcoal-900 hover:text-white transition-all duration-300"
                data-testid="button-learn-more"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <MegaFooter />
    </div>
  );
}
