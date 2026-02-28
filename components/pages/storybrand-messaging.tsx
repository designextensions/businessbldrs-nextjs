"use client";
import Link from "next/link";
import SEOHead from "@/components/ui/seo-head";

import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Users, Target, FileText, Mail, BarChart3, Zap } from "lucide-react";
;
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import ServicePageSchema from "@/components/ui/service-page-schema";
import ServiceFAQSchema from "@/components/ui/service-faq-schema";
import Breadcrumbs from "@/components/ui/breadcrumbs";

export default function StoryBrandMessaging() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const blueprintPackages = [
    {
      name: "Messaging Blueprint",
      price: "$1,950",
      description: "Strategic Consult at Business Builders or via Zoom",
      duration: "Approx. 1 hour",
      features: [
        "Messaging Framework with StoryBrand BrandScript",
        "Explanatory Paragraph",
        "One-Liner"
      ]
    },
    {
      name: "Website Blueprint",
      price: "$4,500",
      description: "Strategic Consult at Business Builders or via Zoom",
      duration: "Approx. 2 hours",
      features: [
        "Messaging Framework with StoryBrand BrandScript",
        "Explanatory Paragraph",
        "One-Liner",
        "Website Wireframe with homepage copy written"
      ]
    },
    {
      name: "Marketing Blueprint",
      price: "$9,500",
      description: "Strategic Consult at Business Builders or via Zoom",
      duration: "Approx. 3 hours",
      popular: true,
      features: [
        "Messaging Framework with StoryBrand BrandScript",
        "Explanatory Paragraph",
        "One-Liner",
        "Website Wireframe with homepage copy written",
        "Marketing Audit",
        "Outline Marketing Plan + Marketing Workflow Plan",
        "Lead-Generating PDF",
        "Email Nurturing Campaign (5 emails + HubSpot install)",
        "Content Multiplication Plan",
        "Outline of Suggested Next Steps"
      ]
    },
    {
      name: "Premier Blueprint",
      price: "$13,500",
      description: "Strategic Consult at Business Builders or via Zoom",
      duration: "8 Hours - Two sessions over two days",
      premium: true,
      features: [
        "Messaging Framework with StoryBrand BrandScript (x2)",
        "Explanatory Paragraph (x2)",
        "One-Liner (x2)",
        "Website Wireframe with homepage copy written (x2)",
        "Marketing Audit",
        "Outline Marketing Plan + Marketing Workflow Plan",
        "Lead-Generating PDF",
        "Email Nurturing Campaign (5 emails + HubSpot install)",
        "Content Multiplication Plan",
        "Outline of Suggested Next Steps"
      ]
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "SCHEDULE A 15 MINUTE CALL",
      description: "A quick, free, 15-minute call is all it takes to get started.",
      icon: Users
    },
    {
      number: "02", 
      title: "CREATE A BLUEPRINT",
      description: "Meet with our team to strategize and create a custom marketing blueprint for your business.",
      icon: FileText
    },
    {
      number: "03",
      title: "GROW YOUR BUSINESS", 
      description: "We'll execute the plan and you'll watch your business grow.",
      icon: BarChart3
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <ServicePageSchema
        serviceName="StoryBrand Messaging Blueprint"
        description="Strategic marketing blueprint using the proven StoryBrand framework to clarify your message, create effective marketing plans, and acquire more customers. Packages from $1,950."
        slug="storybrand-messaging"
        serviceType="Marketing Consulting"
      />
      <ServiceFAQSchema
        serviceName="StoryBrand Messaging"
        slug="storybrand-messaging"
        faqs={[
          {
            question: "What is the StoryBrand framework?",
            answer: "The StoryBrand framework is a proven marketing methodology developed by Donald Miller that helps businesses clarify their messaging by positioning the customer as the hero and your business as the guide. It uses a 7-part storytelling structure to create clear, compelling messaging that resonates with your target audience and drives them to take action."
          },
          {
            question: "How is a Marketing Blueprint different from a regular marketing plan?",
            answer: "A Marketing Blueprint goes beyond a traditional marketing plan by starting with your core messaging using the StoryBrand BrandScript. It includes a clear one-liner, website wireframe with homepage copy, a 12-month marketing plan, lead-generating assets, and email nurturing campaigns. Everything is built on a foundation of crystal-clear messaging that speaks directly to your customers."
          },
          {
            question: "How long does the StoryBrand Blueprint process take?",
            answer: "The process starts with a strategic consultation that ranges from 1 hour for the Messaging Blueprint to two full days for the Premier Blueprint. After the consultation, deliverables are typically completed within 2-4 weeks depending on the package selected. The Marketing and Premier Blueprints include implementation planning for a full 12-month marketing strategy."
          },
          {
            question: "Do I need to be familiar with StoryBrand before starting?",
            answer: "No prior knowledge of StoryBrand is needed. Our certified StoryBrand guides walk you through the entire framework during the consultation. We handle all the strategy and copywriting, translating your business expertise into clear, customer-focused messaging that drives results."
          }
        ]}
      />
      <SEOHead
        title="StoryBrand Messaging Blueprint - Clear Marketing Strategy | Business Builders"
        description="Get crystal clear messaging with our StoryBrand framework. Create a marketing blueprint that gets attention and acquires customers. Custom packages from $1,950."
        keywords="StoryBrand messaging, marketing blueprint, brand strategy, clear messaging, marketing plan, customer acquisition, StoryBrand framework"
        canonicalUrl="https://businessbldrs.com/storybrand-messaging"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "StoryBrand Messaging Blueprint",
          "provider": {
            "@type": "Organization",
            "name": "Business Builders"
          },
          "description": "Strategic marketing blueprint using the proven StoryBrand framework to clarify your message and create effective marketing plans",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "StoryBrand Blueprint Packages",
            "itemListElement": blueprintPackages.map(pkg => ({
              "@type": "Offer",
              "name": pkg.name,
              "price": pkg.price.replace('$', ''),
              "priceCurrency": "USD",
              "description": pkg.description
            }))
          }
        }}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 band-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "StoryBrand Messaging" }
          ]} />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="overflow-hidden">
              <div className="inline-block px-4 py-2 bg-yellow-400 mb-6">
                <span className="label-industrial text-black">SERVICES</span>
              </div>
              <h1 className="headline-lg mb-4 leading-tight text-charcoal-900 font-display uppercase">
                MARKETING<br />
                <span className="text-yellow-500">BLUEPRINT</span>
              </h1>
              <p className="text-xl text-stone-600 mb-8 font-display uppercase tracking-wide">Powered by StoryBrand</p>
              <p className="text-xl lg:text-2xl text-stone-600 leading-relaxed mb-8">
                <strong className="text-charcoal-900">You wouldn't build a house without a blueprint, and you shouldn't run your business without one, either.</strong> Kick off or revamp your marketing with a blueprint to set your business up for success!
              </p>
              
              <Link href="/request-quote">
                <Button 
                  className="bg-yellow-400 text-black px-12 py-6 font-display uppercase font-bold text-xl hover:bg-yellow-300 transition-all duration-300 shadow-offset hover-press border-2 border-black"
                >
                  SCHEDULE A CALL
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="bento-card p-2">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                  srcSet="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80 400w, https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80 800w, https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=900&q=80 1200w"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  width={800}
                  height={600}
                  loading="eager"
                  alt="Business Builders team developing StoryBrand messaging framework and brand strategy for clients"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 band-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg font-display uppercase mb-8">
              Get Started <span className="text-yellow-400">Today!</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-yellow-400 flex items-center justify-center mx-auto mb-6 shadow-offset border-2 border-black">
                  <step.icon className="w-10 h-10 text-black" />
                </div>
                <div className="text-yellow-400 text-6xl font-display mb-4">{step.number}</div>
                <h3 className="text-xl font-display uppercase font-bold mb-4">{step.title}</h3>
                <p className="text-stone-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 band-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bento-card p-2">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                srcSet="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80 400w, https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80 800w, https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=900&q=80 1200w"
                sizes="(max-width: 768px) 100vw, 50vw"
                width={800}
                height={600}
                loading="lazy"
                alt="Business Builders marketing strategy team meeting to develop StoryBrand messaging for client growth"
                className="w-full"
              />
            </div>
            <div>
              <h2 className="headline-lg font-display uppercase mb-8">
                Get Attention & Acquire Customers with a <span className="text-yellow-400">Marketing Plan</span>
              </h2>
              <p className="text-xl text-stone-500 leading-relaxed mb-8">
                Without a clear marketing plan, you might as well be lighting your dollars on fire. We're here to help you clarify your message and create a plan so your marketing efforts will get attention and acquire customers.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-yellow-400 mt-1 mr-4 flex-shrink-0" />
                  <span className="text-stone-500">2-part workshop led by a team of experts that's helped hundreds of businesses grow</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-yellow-400 mt-1 mr-4 flex-shrink-0" />
                  <span className="text-stone-500">Crystal clear messaging–built with the proven StoryBrand framework–to talk to your customers (so they'll listen and take action!)</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-yellow-400 mt-1 mr-4 flex-shrink-0" />
                  <span className="text-stone-500">A 12-month marketing plan outlining next steps & quarterly objectives to make your marketing efforts clear and effective</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 band-dark" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg font-display uppercase mb-8 text-white">
              Blueprint <span className="text-yellow-400">Pricing</span>
            </h2>
            <p className="text-xl text-stone-400">Choose the perfect blueprint package for your business needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {blueprintPackages.map((pkg, index) => (
              <div 
                key={index} 
                className={`relative p-8 border-2 transition-all duration-300 hover:-translate-y-1 shadow-offset bg-white ${
                  pkg.popular 
                    ? 'border-yellow-400' 
                    : pkg.premium
                    ? 'border-purple-400'
                    : 'border-black'
                }`}
                data-testid={`pricing-card-${pkg.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="label-industrial bg-yellow-400 text-black px-4 py-2 whitespace-nowrap border-2 border-black">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                {pkg.premium && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="label-industrial bg-purple-400 text-black px-4 py-2 border-2 border-black">
                      PREMIUM
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-display uppercase font-bold mb-2">{pkg.name}</h3>
                  <p className="text-stone-500 text-sm mb-4">{pkg.description}</p>
                  <p className="text-stone-500 text-sm mb-6">{pkg.duration}</p>
                  <div className="text-4xl font-display font-black text-yellow-400 mb-2">{pkg.price}</div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-sm text-stone-500">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link href="/request-quote">
                  <Button 
                    className={`w-full py-3 font-display uppercase font-bold transition-all duration-300 border-2 border-black shadow-offset-sm hover-press ${
                      pkg.popular 
                        ? 'bg-yellow-400 text-black hover:bg-yellow-300' 
                        : pkg.premium
                        ? 'bg-purple-400 text-black hover:bg-purple-300'
                        : 'bg-black text-white hover:bg-gray-800'
                    }`}
                  >
                    GET STARTED
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 band-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg font-display uppercase mb-8">
              What Our <span className="text-yellow-400">Clients Are Saying</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bento-card p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-400 border-2 border-secondary flex items-center justify-center mr-4">
                  <span className="text-secondary font-display font-bold text-2xl">ME</span>
                </div>
                <div>
                  <h4 className="text-xl font-display uppercase font-bold">Mark Evans</h4>
                  <p className="text-yellow-400 font-display">Evans Automotive</p>
                </div>
              </div>
              <p className="text-stone-500 leading-relaxed">
                "The StoryBrand framework completely transformed how we communicate with our customers. Our messaging is now crystal clear and our conversion rates have increased significantly."
              </p>
            </div>
            
            <div className="bento-card p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-400 border-2 border-secondary flex items-center justify-center mr-4">
                  <span className="text-secondary font-display font-bold text-2xl">LB</span>
                </div>
                <div>
                  <h4 className="text-xl font-display uppercase font-bold">Letti Bozard</h4>
                  <p className="text-yellow-400 font-display">Bozard Ford Lincoln</p>
                </div>
              </div>
              <p className="text-stone-500 leading-relaxed">
                "Working with Business Builders on our marketing blueprint was the best investment we made. The strategic approach and clear messaging have driven real results for our dealership."
              </p>
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
              <p className="text-stone-500">Bring your StoryBrand messaging to life with a professional website designed to convert visitors into customers.</p>
            </Link>
            <Link href="/branding-logos" className="bento-card border-2 border-charcoal-800 p-8 hover:shadow-offset transition-all duration-300 group">
              <h3 className="text-xl font-bold text-charcoal-900 mb-3 group-hover:text-yellow-600">Branding & Logos</h3>
              <p className="text-stone-500">Create a visual identity that reinforces your StoryBrand messaging and captivates your audience.</p>
            </Link>
            <Link href="/marketing-strategy-consulting" className="bento-card border-2 border-charcoal-800 p-8 hover:shadow-offset transition-all duration-300 group">
              <h3 className="text-xl font-bold text-charcoal-900 mb-3 group-hover:text-yellow-600">Marketing Strategy</h3>
              <p className="text-stone-500">Turn your messaging blueprint into a full marketing strategy with expert consulting and execution planning.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 band-dark" id="contact">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="headline-lg font-display uppercase mb-8 text-white">
            Ready to Build Your <span className="text-yellow-400">Marketing Blueprint?</span>
          </h2>
          <p className="text-xl text-stone-400 leading-relaxed mb-12">
            Get crystal clear messaging with the proven StoryBrand framework and create a marketing plan that gets attention and acquires customers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/request-quote">
              <Button 
                className="bg-yellow-400 text-black px-12 py-6 font-display uppercase font-bold text-xl hover:bg-yellow-300 transition-all duration-300 shadow-offset hover-press border-2 border-black"
              >
                SCHEDULE A CALL
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
            </Link>
            <a href="https://storybrand.com/guide/" target="_blank" rel="noopener noreferrer">
              <Button 
                className="bg-white text-black border-2 border-black px-12 py-6 font-display uppercase font-bold text-xl hover:bg-stone-100 transition-all duration-300 shadow-offset hover-press"
              >
                Learn More About StoryBrand
              </Button>
            </a>
          </div>
        </div>
      </section>

      <MegaFooter />
    </div>
  );
}
