"use client";
import Link from "next/link";
import SEOHead from "@/components/ui/seo-head";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Hammer, Wrench, Cog, Monitor, Video, Megaphone, Smartphone } from "lucide-react";
;
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import MarketingMasterclassSection from "@/components/ui/marketing-masterclass-section";
import { ApprovedStamp, GrowthChartStamp } from "@/components/ui/vintage-stamps";
import { seoConfig, getBreadcrumbSchema, BASE_URL } from "@/lib/seo-config";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function ServicesPage() {
  const services = [
    {
      id: "messaging",
      title: "Messaging and Strategy",
      description: "You should not build a house without a blueprint, and you should not operate your business without one either. Ensure you have a clear message and strategic plan in place first, before you waste time and money on marketing that doesn't work.",
      icon: <Hammer className="w-8 h-8 text-charcoal-900" />,
      features: [
        "StoryBrand Certified Agency",
        "Messaging Blueprint",
        "Website Blueprint",
        "Marketing Blueprint",
        "Video Blueprint",
        "Development Blueprint"
      ],
      link: "/storybrand-agency"
    },
    {
      id: "branding",
      title: "Branding and Identity",
      description: "Your business is a reflection of who you are. From the look and feel to the overall experience your audience has online, your brand sets the tone for your success. Captivate your audience with a brand identity that tells your story, builds trust, and inspires lasting connections.",
      icon: <Wrench className="w-8 h-8 text-charcoal-900" />,
      features: [
        "Logo Design",
        "Brand Guide Development"
      ],
      link: "/branding-logos"
    },
    {
      id: "website",
      title: "Website Design and Development",
      description: "Your website serves as the digital storefront for your business, often making the first impression on potential customers. With our expertise in website design and development, we ensure your online presence is not only visually captivating but also user-friendly, optimized for conversions, and aligned with your business goals.",
      icon: <Monitor className="w-8 h-8 text-charcoal-900" />,
      features: [
        "WordPress Development",
        "Shopify Development",
        "LMS Platform Development"
      ],
      link: "/website-design"
    },
    {
      id: "video",
      title: "Video Production",
      description: "In today's visually driven world, video content is king, offering unparalleled engagement and storytelling capabilities. From compelling brand stories to product demonstrations and testimonials, our video production services help you connect with your audience on a deeper level, driving awareness, engagement, and conversions.",
      icon: <Video className="w-8 h-8 text-charcoal-900" />,
      features: [
        "Brand Videos",
        "Testimonial Videos",
        "Commercial Production",
        "Custom Video Production"
      ],
      link: "/video-production"
    },
    {
      id: "marketing",
      title: "Digital Marketing",
      description: "In a constantly evolving digital landscape, effective marketing requires a multi-faceted approach. Our digital marketing services leverage data-driven strategies and cutting-edge tools to maximize your online presence, increase brand visibility, and drive targeted traffic that converts into leads and sales.",
      icon: <Megaphone className="w-8 h-8 text-charcoal-900" />,
      features: [
        "SEO",
        "PPC",
        "Social Media",
        "Influencer Partnerships",
        "Email Marketing"
      ],
      link: "/marketing-services"
    },
    {
      id: "development",
      title: "Application Development",
      description: "In today's mobile-first world, having a robust and user-friendly mobile or web application is essential for staying competitive and meeting the needs of your customers. Our application development services blend creativity with technical expertise to build custom solutions tailored to your unique requirements, enhancing user experience, streamlining operations, and driving business growth.",
      icon: <Smartphone className="w-8 h-8 text-charcoal-900" />,
      features: [
        "Web Applications",
        "iOS and Android Apps",
        "WordPress Websites",
        "Hosting and Maintenance"
      ],
      link: "/app-development"
    },
    {
      id: "hubspot",
      title: "HubSpot Implementation",
      description: "HubSpot offers a comprehensive suite of tools for inbound marketing, sales, and customer service, empowering businesses to attract, engage, and delight customers at every stage of the buyer's journey. Our HubSpot implementation services ensure seamless integration and optimization of the platform, enabling you to leverage its full potential to nurture leads, close deals, and delight customers efficiently and effectively.",
      icon: <Cog className="w-8 h-8 text-charcoal-900" />,
      features: [
        "Onboarding & Setup",
        "Strategic Planning",
        "Ongoing Portal Management"
      ],
      link: "/hubspot-implementation"
    }
  ];

  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Marketing Services",
        "provider": {
          "@type": "Organization",
          "name": "Business Builders"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Complete Marketing Solutions",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Marketing Strategy & Planning",
                "description": "Comprehensive strategy development using proven frameworks"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "Brand Identity & Design",
                "description": "Logo design, brand guidelines, and visual identity development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service", 
                "name": "Website Design & Development",
                "description": "Custom websites optimized for conversions and search engines"
              }
            }
          ]
        }
      },
      getBreadcrumbSchema("Services", "/services")
    ]
  };

  return (
    <div className="min-h-screen band-white">
      <SEOHead
        title={seoConfig.services.title}
        description={seoConfig.services.description}
        keywords={seoConfig.services.keywords}
        ogImage="/services-hero-new.jpg"
        canonicalUrl={`${BASE_URL}/services`}
        structuredData={servicesStructuredData}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 band-white overflow-hidden">
        <ApprovedStamp className="absolute top-32 -right-10 w-48 opacity-15 hidden lg:block" />
        <GrowthChartStamp className="absolute bottom-10 -left-10 w-56 opacity-15 hidden lg:block" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden">
              <div className="inline-block px-4 py-2 bg-yellow-400 border-2 border-charcoal-900 shadow-offset-sm mb-6">
                <span className="label-industrial text-charcoal-900">🔧 OUR SOLUTIONS</span>
              </div>
              <h1 className="headline-lg text-charcoal-900 mb-6">
                {seoConfig.services.h1}
              </h1>
              <p className="font-serif text-xl lg:text-2xl text-stone-600 mb-8 leading-relaxed">
                <strong className="text-charcoal-900">Growing a business is hard work.</strong> Our team is here to help you grow without being worn out, stressed out, and ready to quit.
              </p>
              <Button 
                onClick={() => scrollToSection('services')}
                size="lg"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <div className="relative">
              <div className="border-2 border-charcoal-800 shadow-offset">
                <img 
                  src="/services-hero-new.jpg"
                  alt="Business Builders team collaborating on marketing strategy and planning"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 band-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg text-charcoal-900 mb-6">
              SOLUTIONS THAT<br />
              <span className="text-yellow-500">DRIVE SUCCESS</span>
            </h2>
          </div>

          <div className="grid gap-16">
            {services.map((service, index) => (
              <div key={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bento-card p-8 h-full">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-yellow-400 border-2 border-charcoal-900 shadow-offset-sm flex items-center justify-center mr-4">
                        {service.icon}
                      </div>
                      <h3 className="font-display font-bold uppercase text-2xl lg:text-3xl text-charcoal-900">{service.title}</h3>
                    </div>
                    <p className="font-serif text-stone-500 text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                          <span className="text-stone-600 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link href={service.link}>
                      <Button>
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="border-2 border-charcoal-900 shadow-offset">
                    <img 
                      src={
                        index === 0 ? '/service-strategy.jpg' :
                        index === 1 ? '/service-branding.jpg' :
                        index === 2 ? '/service-website.jpg' :
                        index === 3 ? '/service-video-new.jpg' :
                        index === 4 ? '/service-marketing.jpg' :
                        index === 5 ? '/service-development.jpg' :
                        '/service-hubspot.jpg'
                      }
                      alt={`${service.title} - Business Builders professional marketing services`}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Masterclass Section */}
      <MarketingMasterclassSection />

      {/* CTA Section */}
      <section className="py-20 band-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="headline-lg text-white mb-6">
            Ready to <span className="text-yellow-400">Transform</span> Your Business?
          </h2>
          <p className="font-serif text-xl lg:text-2xl text-stone-400 mb-8 max-w-3xl mx-auto">
            Stop wasting time and money on marketing that doesn't work. Let's build a strategy that delivers real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/request-quote">
              <Button size="xl">
                GET A FREE QUOTE TODAY
              </Button>
            </Link>
            <Button 
              variant="outlineLight"
              size="lg"
              asChild
            >
              <a href="tel:877-378-6101">(877) 378-6101</a>
            </Button>
          </div>
        </div>
      </section>
      
      <MegaFooter />
    </div>
  );
}
