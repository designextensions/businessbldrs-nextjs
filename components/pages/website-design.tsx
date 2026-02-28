"use client";
import Link from "next/link";
import SEOHead from "@/components/ui/seo-head";

import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Monitor, Smartphone, Zap, Search, Users, MessageSquare, BarChart3, Camera } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import ServicePageSchema from "@/components/ui/service-page-schema";
import ServiceFAQSchema, { websiteDesignFAQs } from "@/components/ui/service-faq-schema";
import Breadcrumbs from "@/components/ui/breadcrumbs";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function WebsiteDesign() {
  const features = [
    {
      icon: <Smartphone className="w-8 h-8 text-charcoal-900" />,
      title: "Responsive Website Design",
      description: "Our responsive website design ensures your site looks perfect and functions flawlessly on all devices, from desktop to mobile"
    },
    {
      icon: <Zap className="w-8 h-8 text-charcoal-900" />,
      title: "Fast-Loading Website Development",
      description: "Our web development services prioritize speed optimization for better user experience and improved search engine rankings"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-charcoal-900" />,
      title: "Website Performance Analytics",
      description: "Track your website design success with comprehensive analytics and monthly performance reporting that measures business growth"
    },
    {
      icon: <Camera className="w-8 h-8 text-charcoal-900" />,
      title: "Professional Website Photography",
      description: "We source and optimize professional imagery that strengthens your brand identity and enhances your website design"
    },
    {
      icon: <Users className="w-8 h-8 text-charcoal-900" />,
      title: "Conversion-Optimized Lead Forms",
      description: "Strategic lead capture forms integrated into your website design to convert visitors into customers and grow your business"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-charcoal-900" />,
      title: "Live Chat Integration",
      description: "Real-time customer engagement tools built into your website design to capture leads and provide instant customer support"
    }
  ];

  const quickFeatures = [
    "Responsive Design",
    "SEO Optimized", 
    "Fast Loading",
    "Mobile-First",
    "Conversion-Focused"
  ];

  const packages = [
    {
      name: "STARTER",
      price: "$7,500",
      timeline: "4-6 Weeks to Launch",
      features: [
        "Customized Design from Starter Layout",
        "Up to 5 Pages",
        "1 Round of Revisions",
        "Only Homepage Copy (other copy provided by client)"
      ],
      layouts: [
        "Clean & Industrial",
        "Modern & Elegant", 
        "Inviting & Traditional",
        "Quirky & Bold",
        "Professional & Simple"
      ],
      popular: false
    },
    {
      name: "STANDARD",
      price: "$13,000",
      timeline: "8-12 Weeks to Launch",
      features: [
        "Fully Custom Site Design",
        "Up to 10 Pages for Launch",
        "2 Rounds of Revisions",
        "All Copy Included"
      ],
      examples: [
        "franklinbrazing.com",
        "wifiinmotion.com",
        "distincthd.com",
        "ameriforce.com"
      ],
      popular: true
    },
    {
      name: "ADVANCED",
      price: "$23,000",
      timeline: "12-16 Weeks to Launch",
      features: [
        "Fully Custom Site Design",
        "Up to 20 Pages for Launch",
        "2 Rounds of Revisions",
        "All Copy Included"
      ],
      examples: [
        "silverblaze.com",
        "fishertousey.com",
        "rulonco.com",
        "brownbutton.com"
      ],
      popular: false
    }
  ];

  const additionalFeatures = [
    "LMS (Learning Management System) set up using LearnDash or Teachable",
    "Membership Platform using MemberPress",
    "eCommerce set up using WooCommerce",
    "ADA Compliance",
    "Other custom integration (ask us about your idea!)",
    "Other Custom Video Content (Ask us about your idea!)"
  ];

  const processSteps = [
    {
      number: "01",
      title: "SCHEDULE A FREE CONSULTATION",
      description: "Start your website design project with a free 15-minute consultation to discuss your business goals and web development needs."
    },
    {
      number: "02", 
      title: "SELECT YOUR WEBSITE DESIGN PACKAGE",
      description: "Choose from our responsive website design packages that best fit your business requirements and budget for custom web development."
    },
    {
      number: "03",
      title: "LAUNCH & GROW YOUR BUSINESS",
      description: "We deliver your professional website design on time, then watch your business grow with improved online presence and lead generation."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-foreground">
      <ServicePageSchema
        serviceName="Website Design & Development"
        description="Professional website design services and custom web development with responsive design, SEO optimization, and conversion-focused layouts. Expert website design packages for businesses."
        slug="website-design"
        serviceType="Web Design"
      />
      <ServiceFAQSchema
        serviceName="Website Design"
        slug="website-design"
        faqs={websiteDesignFAQs}
      />
      <SEOHead
        title="Website Design & Responsive Web Development Services - Business Builders"
        description="Professional website design services and custom web development with responsive design, SEO optimization, and conversion-focused layouts. Expert website design packages for businesses in St Augustine FL."
        keywords="website design, responsive website design, web development, custom website design, business website design, website design services, professional web design, St Augustine website design, website development"
        canonicalUrl="https://businessbldrs.com/website-design"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Website Design & Development",
          "provider": {
            "@type": "Organization",
            "name": "Business Builders"
          },
          "description": "Professional website design and development services with custom designs, SEO optimization, and mobile responsiveness",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Website Design Packages",
            "itemListElement": [
              {
                "@type": "Offer",
                "name": "Starter Website Package",
                "description": "5-page website with responsive design and basic SEO"
              },
              {
                "@type": "Offer",
                "name": "Professional Website Package", 
                "description": "Up to 10 pages with advanced features and custom design"
              },
              {
                "@type": "Offer",
                "name": "Enterprise Website Package",
                "description": "15+ pages with e-commerce, custom functionality, and premium features"
              }
            ]
          }
        }}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 band-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Website Design" }
          ]} />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-yellow-400 mb-6">
                <span className="label-industrial text-secondary">SERVICES</span>
              </div>
              <h1 className="headline-lg mb-6">
                <span className="text-yellow-500">WEBSITE</span><br />
                <span className="text-charcoal-900">DESIGN</span>
              </h1>
              <p className="font-body text-xl lg:text-2xl text-stone-600 leading-relaxed mb-8">
                <strong className="text-charcoal-900">Professional website design services that grow your business.</strong> Most businesses have a website, few have responsive website design that converts visitors into customers. Our custom web development and website design services help you build a powerful online presence that generates leads and drives growth.
              </p>
              <Button 
                onClick={() => scrollToSection('packages')}
                className="font-display uppercase bg-yellow-400 text-secondary px-8 py-4 font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-offset hover-press border-2 border-secondary"
              >
                View Packages
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                srcSet="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80 400w, https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80 800w, https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=900&q=80 1200w"
                sizes="(max-width: 768px) 100vw, 50vw"
                width={800}
                height={600}
                loading="eager"
                alt="Custom website design and development services by Business Builders marketing agency"
                className="border-2 border-secondary shadow-offset-yellow w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 band-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="headline-lg mb-6 text-secondary">
            Professional Website Design That <span className="text-yellow-400">Grows</span> Your Business
          </h2>
          <p className="text-xl lg:text-2xl text-stone-500 mb-12">
            <strong className="text-secondary">Our custom website design services deliver responsive, conversion-focused websites that help businesses succeed online.</strong> Every website design project includes mobile-responsive development, SEO optimization, and strategic user experience design.
          </p>
          
          <div className="grid md:grid-cols-5 gap-6 mb-12">
            {quickFeatures.map((feature, index) => (
              <div key={index} className="bento-card p-6 text-center">
                <div className="w-12 h-12 bg-yellow-400 border-2 border-secondary flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-display uppercase text-lg font-bold text-secondary">{feature}</h3>
              </div>
            ))}
          </div>
          
          <Link href="/request-quote">
            <Button 
              className="font-display uppercase bg-yellow-400 text-secondary px-12 py-5 font-bold text-xl hover:bg-yellow-300 transition-all duration-300 shadow-offset hover-press border-2 border-secondary"
            >
              SCHEDULE A CALL
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 band-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg mb-8 text-secondary">
              DON'T WASTE YOUR TIME AND MONEY ON AN <span className="text-red-600">AVERAGE WEBSITE</span><br />
              INSTEAD, GET...
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bento-card p-8 text-center">
              <div className="w-16 h-16 bg-yellow-400 border-2 border-secondary flex items-center justify-center mx-auto mb-6">
                <Monitor className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-display uppercase text-2xl font-bold text-secondary mb-4">A custom design</h3>
            </div>
            
            <div className="bento-card p-8 text-center">
              <div className="w-16 h-16 bg-yellow-400 border-2 border-secondary flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-display uppercase text-2xl font-bold text-secondary mb-4">Clear messaging that connects with your target audience</h3>
            </div>
            
            <div className="bento-card p-8 text-center">
              <div className="w-16 h-16 bg-yellow-400 border-2 border-secondary flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-display uppercase text-2xl font-bold text-secondary mb-4">The foundation you need to grow your business</h3>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/request-quote">
              <Button 
                className="font-display uppercase bg-yellow-400 text-secondary px-12 py-5 font-bold text-xl hover:bg-yellow-300 transition-all duration-300 shadow-offset hover-press border-2 border-secondary"
              >
                Get Started Today!
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 band-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-secondary border-2 border-stone-700 p-8 text-center shadow-offset-yellow">
                <div className="w-20 h-20 bg-yellow-400 border-2 border-secondary flex items-center justify-center mx-auto mb-6">
                  <span className="text-secondary font-display font-bold text-2xl">{step.number}</span>
                </div>
                <h3 className="font-display uppercase text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-stone-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 band-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg mb-6 text-secondary">
              Professional Website Design <span className="text-yellow-400">Features</span>
            </h2>
            <p className="text-xl text-stone-500 max-w-4xl mx-auto mb-8">
              <strong className="text-secondary">Our custom website design and web development services include powerful features that drive business growth.</strong> Every website design project combines responsive design, SEO optimization, and conversion-focused elements to help your business succeed online.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bento-card p-8 text-center">
                <div className="w-16 h-16 bg-yellow-400 border-2 border-secondary flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="font-display uppercase text-xl font-bold text-secondary mb-4">{feature.title}</h3>
                <p className="text-stone-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 band-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg mb-6 text-secondary">
              Website Design <span className="text-yellow-400">Packages</span><br />
              Custom Web Development for Every Business
            </h2>
            <p className="text-xl text-stone-500 max-w-4xl mx-auto">
              Our website design services offer flexible packages to meet your business needs. From responsive website design to advanced web development, choose the perfect solution for your online presence.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative p-8 ${pkg.popular ? 'bg-yellow-400 border-2 border-secondary shadow-offset' : 'bento-card'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="label-industrial bg-secondary text-white px-6 py-2">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="font-display uppercase text-2xl font-bold mb-2 text-secondary">{pkg.name}</h3>
                  <div className="text-4xl font-display font-black text-secondary mb-2">{pkg.price}</div>
                  <p className={pkg.popular ? "text-secondary/70" : "text-stone-500"}>{pkg.timeline}</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <Check className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${pkg.popular ? 'text-secondary' : 'text-yellow-500'}`} />
                      <span className={pkg.popular ? "text-secondary/80" : "text-stone-600"}>{feature}</span>
                    </div>
                  ))}
                </div>
                
                {pkg.layouts && (
                  <div className="mb-8">
                    <h4 className="font-display uppercase font-bold text-secondary mb-4">Starter Layout Options:</h4>
                    <div className="space-y-2">
                      {pkg.layouts.map((layout, idx) => (
                        <div key={idx} className="text-stone-500 text-sm">• {layout}</div>
                      ))}
                    </div>
                  </div>
                )}
                
                {pkg.examples && (
                  <div className="mb-8">
                    <h4 className="font-display uppercase font-bold text-secondary mb-4">Example Sites:</h4>
                    <div className="space-y-2">
                      {pkg.examples.map((example, idx) => (
                        <div key={idx} className={`text-sm ${pkg.popular ? 'text-secondary/70' : 'text-yellow-600'}`}>
                          • <a href={`https://${example}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{example}</a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <Link href="/request-quote">
                  <Button 
                    className={`w-full py-4 font-display uppercase font-bold text-lg transition-all duration-300 border-2 border-secondary ${
                      pkg.popular 
                        ? 'bg-secondary text-white hover:bg-secondary/90 shadow-offset-sm' 
                        : 'bg-yellow-400 text-secondary hover:bg-yellow-300 shadow-offset-sm hover-press'
                    }`}
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <p className="text-xl text-stone-500 mb-4">
              <strong className="text-secondary">Complete website design hosting services starting at $50/month - we handle all technical aspects of your website.</strong>
            </p>
            <p className="text-lg text-stone-500 mb-8">
              Our ongoing website maintenance services ensure your custom website design stays updated, secure, and optimized for performance and search engines.
            </p>
            <Link href="/request-quote">
              <Button 
                className="font-display uppercase bg-yellow-400 text-secondary px-12 py-5 font-bold text-xl hover:bg-yellow-300 transition-all duration-300 shadow-offset hover-press border-2 border-secondary"
              >
                SCHEDULE A CALL
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-20 band-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg mb-6 text-white">
              Advanced Website Design <span className="text-yellow-400">Features</span>
            </h2>
            <p className="text-xl text-stone-400 max-w-4xl mx-auto">
              Enhance your website design with custom web development features including e-commerce, membership platforms, and advanced integrations tailored to your business requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="flex items-start bg-secondary border-2 border-stone-700 p-6 shadow-offset-yellow">
                <Check className="w-6 h-6 text-yellow-400 mr-4 flex-shrink-0 mt-1" />
                <span className="text-stone-300 leading-relaxed">{feature}</span>
              </div>
            ))}
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
            <Link href="/seo-services" className="bento-card border-2 border-charcoal-800 p-8 hover:shadow-offset transition-all duration-300 group">
              <h3 className="text-xl font-bold text-charcoal-900 mb-3 group-hover:text-yellow-600">SEO Services</h3>
              <p className="text-stone-500">Dominate search results with data-driven SEO strategies that drive organic traffic and boost your website's visibility.</p>
            </Link>
            <Link href="/marketing-services" className="bento-card border-2 border-charcoal-800 p-8 hover:shadow-offset transition-all duration-300 group">
              <h3 className="text-xl font-bold text-charcoal-900 mb-3 group-hover:text-yellow-600">Marketing Services</h3>
              <p className="text-stone-500">Comprehensive digital marketing solutions that make marketing clear and effective, helping you attract more customers.</p>
            </Link>
            <Link href="/hubspot-implementation" className="bento-card border-2 border-charcoal-800 p-8 hover:shadow-offset transition-all duration-300 group">
              <h3 className="text-xl font-bold text-charcoal-900 mb-3 group-hover:text-yellow-600">HubSpot Implementation</h3>
              <p className="text-stone-500">Maximize your CRM investment with expert HubSpot setup, automation, and ongoing support from Platinum Partners.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 band-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="headline-lg mb-6 text-secondary">
            Ready to <span className="shine-yellow">Transform</span> Your Online Presence?
          </h2>
          <p className="text-xl lg:text-2xl text-secondary/70 mb-12 max-w-3xl mx-auto">
            Let's build a website that not only looks amazing but actually grows your business.
          </p>
          <Link href="/request-quote">
            <Button 
              className="font-display uppercase bg-secondary text-white px-12 py-5 font-bold text-xl hover:bg-secondary/90 transition-all duration-300 shadow-offset-sm border-2 border-secondary"
            >
              SCHEDULE A CALL TODAY
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </Link>
        </div>
      </section>
      
      <MegaFooter />
    </div>
  );
}
