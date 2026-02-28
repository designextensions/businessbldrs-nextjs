"use client";
import Link from "next/link";
import SEOHead from "@/components/ui/seo-head";

import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Camera, Video, MessageSquare, Target, Lightbulb, Zap } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import ServicePageSchema from "@/components/ui/service-page-schema";
import ServiceFAQSchema, { brandingFAQs } from "@/components/ui/service-faq-schema";
import Breadcrumbs from "@/components/ui/breadcrumbs";
const logoDesignPhoto = "/assets/stock_images/logo_design_branding_c955f376.jpg";
import { seoConfig, getBreadcrumbSchema, BASE_URL } from "@/lib/seo-config";

export default function BrandingLogos() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const brandingServices = [
    {
      icon: MessageSquare,
      title: "StoryBrand",
      description: "People are more likely to engage with video content than any other type of content."
    },
    {
      icon: Palette,
      title: "Logos",
      description: "We'll build you a logo that turns heads and is instantly recognizable to your customers."
    },
    {
      icon: Video,
      title: "Video",
      description: "We'll work with you, your employees, and even your customers to communicate what makes your business truly unique."
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Friendly, courteous, professional staff that has been a pleasure to work with."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "DEFINE YOUR STYLE",
      description: "We start by understanding your vision, values, and target audience to define your unique brand style.",
      icon: Target
    },
    {
      number: "02",
      title: "CREATE A BRAND STRATEGY",
      description: "Develop a comprehensive brand strategy that aligns with your business goals and market position.",
      icon: Lightbulb
    },
    {
      number: "03",
      title: "BUILD YOUR BRAND",
      description: "Design and create all brand elements including logos, colors, typography, and visual identity.",
      icon: Palette
    },
    {
      number: "04",
      title: "IMPLEMENT YOUR STRATEGY",
      description: "Launch your brand across all touchpoints and ensure consistent implementation.",
      icon: Zap
    }
  ];

  const portfolioProjects = [
    {
      title: "Bozard Ford Lincoln",
      category: "Branding • Marketing",
      image: "/attached_assets/bozard-ford-lincoln.jpg",
      url: "/case-studies/bozard-ford-lincoln"
    },
    {
      title: "Rulon International",
      category: "Branding • Marketing",
      image: "/attached_assets/rulon-international.jpg",
      url: "https://businessbldrs.com/portfolio/rulon-international/"
    },
    {
      title: "Jax Symphony",
      category: "Marketing • Web",
      image: "/attached_assets/jax-symphony.png",
      url: "https://businessbldrs.com/portfolio/jax-symphony-2/"
    }
  ];

  const brandingStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": seoConfig.branding.title,
        "provider": {
          "@type": "Organization",
          "name": "Business Builders"
        },
        "description": seoConfig.branding.description,
        "areaServed": ["St. Augustine, FL", "Jacksonville, FL"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Branding Services",
          "itemListElement": brandingServices.map(service => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": service.title,
              "description": service.description
            }
          }))
        }
      },
      getBreadcrumbSchema("Branding & Logos", "/branding-logos")
    ]
  };

  return (
    <div className="min-h-screen bg-white text-foreground">
      <ServicePageSchema
        serviceName="Brand Development & Logo Design"
        description="Logo design, brand strategy, and visual identity creation. Build a brand that turns heads and is instantly recognizable to your customers."
        slug="branding-logos"
        serviceType="Branding"
      />
      <ServiceFAQSchema
        serviceName="Branding & Logo Design"
        slug="branding-logos"
        faqs={brandingFAQs}
      />
      <SEOHead
        title={seoConfig.branding.title}
        description={seoConfig.branding.description}
        keywords={seoConfig.branding.keywords}
        canonicalUrl={`${BASE_URL}/branding-logos`}
        structuredData={brandingStructuredData}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden band-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Branding & Logos" }
          ]} />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="overflow-hidden">
              <span className="label-industrial text-charcoal-900 border-2 border-charcoal-900 px-4 py-2 inline-block mb-6">SERVICES</span>
              <h1 className="headline-lg text-charcoal-900 mb-8 leading-tight">
                {seoConfig.branding.h1}
              </h1>
              <p className="text-xl lg:text-2xl text-stone-600 leading-relaxed mb-8">
                <strong className="text-charcoal-900">Your business is an extension of who you are.</strong> The look, feel and overall experience someone has when they see you online is critical to your success. Your brand should be an experience that captivates your audience and makes them fall in love with your business.
              </p>
              
              <Link href="/request-quote">
                <Button 
                  className="bg-yellow-400 text-black px-12 py-6 font-display uppercase font-bold text-xl hover:bg-yellow-300 transition-all duration-300 shadow-offset hover-press border-2 border-charcoal-900"
                >
                  SCHEDULE A CALL
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="bento-card overflow-hidden shadow-offset">
                <img
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                  srcSet="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80 400w, https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80 800w, https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=900&q=80 1200w"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  width={800}
                  height={600}
                  loading="eager"
                  alt="Professional brand identity design elements, logos, and visual branding by Business Builders"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 band-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg font-display uppercase mb-8">
              Our <span className="text-yellow-400">Approach</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brandingServices.map((service, index) => (
              <div key={index} className="text-center group bento-card p-8">
                <div className="w-20 h-20 bg-yellow-400 border-2 border-secondary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-2xl font-display uppercase font-bold mb-4">{service.title}</h3>
                <p className="text-stone-500 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Design Services Section */}
      <section className="py-20 band-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="headline-lg font-display uppercase mb-8">
                Brand Design Services in <span className="text-yellow-400">St. Augustine & Jacksonville, FL</span>
              </h2>
              <p className="text-xl text-stone-500 leading-relaxed mb-8">
                <strong className="text-foreground">Your brand is how you tell your story.</strong>
              </p>
              <p className="text-lg text-stone-500 leading-relaxed mb-8">
                It encompasses logo design, photography, video, messaging, social media and more. Building a recognizable brand is critical to winning customers and keeping them for life. Our team of brand strategists and designers will create a brand that stands out and influences people to choose you over the competition.
              </p>
              <p className="text-lg text-stone-500 leading-relaxed mb-12">
                Work with us to discover your identity and realize exactly who you're trying to reach, so your company can be more successful than ever. We refine and refresh established companies and launch new brands with confidence.
              </p>
              
              <Link href="/request-quote">
                <Button 
                  className="bg-secondary text-white px-10 py-5 font-display uppercase font-bold text-lg hover:bg-secondary/90 transition-all duration-300 shadow-offset hover-press border-2 border-secondary"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="bento-card overflow-hidden shadow-offset">
                <img
                  src={logoDesignPhoto}
                  alt="Logo design and brand identity creative process"
                  loading="lazy"
                  className="w-full object-cover h-96"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 band-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg font-display uppercase text-white mb-8">
              How to work <span className="text-yellow-400">with us</span>
            </h2>
            <Link href="/request-quote">
              <Button 
                className="bg-yellow-400 text-black px-10 py-5 font-display uppercase font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-offset hover-press"
              >
                SCHEDULE A CALL
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center p-8 bg-secondary/80 border-2 border-stone-700 shadow-offset-yellow">
                <div className="w-20 h-20 bg-yellow-400 border-2 border-secondary flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-10 h-10 text-black" />
                </div>
                <div className="text-yellow-400 text-4xl font-display font-black mb-4">{step.number}</div>
                <h3 className="text-xl font-display uppercase font-bold text-white mb-4">{step.title}</h3>
                <p className="text-stone-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 band-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg font-display uppercase mb-8">
              Related <span className="text-yellow-400">Projects</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {portfolioProjects.map((project, index) => (
              <div key={index} className="group cursor-pointer bento-card overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="label-industrial text-yellow-400 bg-secondary px-3 py-1 border-2 border-yellow-400">{project.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display uppercase font-bold mb-4 group-hover:text-yellow-600 transition-colors">
                    {project.title}
                  </h3>
                  <Button 
                    variant="outline"
                    className="border-2 border-secondary text-secondary hover:bg-yellow-400 hover:border-yellow-400 hover:text-black transition-all duration-300 font-display uppercase"
                    asChild
                  >
                    <a href={project.url} target="_blank" rel="noopener noreferrer">LEARN MORE</a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/portfolio">
              <Button 
                className="bg-secondary text-white px-10 py-5 font-display uppercase font-bold text-lg hover:bg-secondary/90 transition-all duration-300 shadow-offset hover-press border-2 border-secondary"
              >
                VIEW OUR PORTFOLIO
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
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
              <p className="text-stone-500">Bring your brand to life online with a custom website that showcases your identity and converts visitors.</p>
            </Link>
            <Link href="/storybrand-messaging" className="bento-card border-2 border-charcoal-800 p-8 hover:shadow-offset transition-all duration-300 group">
              <h3 className="text-xl font-bold text-charcoal-900 mb-3 group-hover:text-yellow-600">StoryBrand Messaging</h3>
              <p className="text-stone-500">Pair your visual brand with crystal clear messaging using the proven StoryBrand framework.</p>
            </Link>
            <Link href="/video-production" className="bento-card border-2 border-charcoal-800 p-8 hover:shadow-offset transition-all duration-300 group">
              <h3 className="text-xl font-bold text-charcoal-900 mb-3 group-hover:text-yellow-600">Video Production</h3>
              <p className="text-stone-500">Tell your brand story through professional video content that builds trust and drives engagement.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 band-dark" id="contact">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="headline-lg font-display uppercase text-white mb-8">
            Ready to Build Your <span className="text-yellow-400">Brand Identity?</span>
          </h2>
          <p className="text-xl text-stone-400 leading-relaxed mb-12">
            Let's create a brand that captivates your audience and makes them fall in love with your business. Your story deserves to be told beautifully.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/request-quote">
              <Button 
                className="bg-yellow-400 text-black px-12 py-6 font-display uppercase font-bold text-xl hover:bg-yellow-300 transition-all duration-300 shadow-offset hover-press"
                data-testid="button-schedule-call-cta"
              >
                SCHEDULE A CALL
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button 
                variant="outline"
                className="border-2 border-white bg-transparent text-white px-12 py-6 font-display uppercase font-bold text-xl hover:bg-white hover:text-black transition-all duration-300"
                data-testid="button-view-work"
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <MegaFooter />
    </div>
  );
}
