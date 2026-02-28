"use client";
import Link from "next/link";
import SEOHead from "@/components/ui/seo-head";

import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Globe, Code, Server, Clock, AlertTriangle, Target, Users, TrendingUp, Lightbulb, Wrench, Quote } from "lucide-react";
;
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import ServicePageSchema from "@/components/ui/service-page-schema";
import ServiceFAQSchema from "@/components/ui/service-faq-schema";
import Breadcrumbs from "@/components/ui/breadcrumbs";

export default function AppDevelopment() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const problemIndicators = [
    "Losing your business because your technology is outdated",
    "Wasting time logging into dozen of apps",
    "Burning your team out on technology"
  ];

  const transformationBenefits = [
    "Spend more time serving your customers",
    "Have a happier team",
    "Increase your profits"
  ];

  const processSteps = [
    {
      number: "01",
      title: "CONNECT & PLAN",
      description: "Schedule a 15 min discovery call now to discuss your goals and get custom pricing. Then we'll discover the right problems to solve and develop a plan to get you there.",
      icon: Target
    },
    {
      number: "02",
      title: "BUILD",
      description: "Our team works alongside yours to build applications that fit your business and complex needs through user-focused planning and goals-driven design.",
      icon: Code
    },
    {
      number: "03",
      title: "SUPPORT",
      description: "We help keep your website or application up-to-date, optimize for speed and security, and provide the ideal user experience through new features and enhancements.",
      icon: Wrench
    }
  ];

  const developmentServices = [
    {
      icon: Globe,
      title: "WordPress Websites",
      description: "Attract and engage your target audience with a cutting-edge website."
    },
    {
      icon: Smartphone,
      title: "iOS + Android Apps",
      description: "Create the perfect mobile experience for your customers that can scale with your business."
    },
    {
      icon: Code,
      title: "Web Application",
      description: "Our team builds custom solutions for businesses just like yours so you can get ahead of the competition."
    },
    {
      icon: Server,
      title: "Hosting & Maintenance",
      description: "Keep your site fast, secure and updated. We will care for and manage your site so you can spend your time doing what you do best."
    }
  ];

  const portfolioProjects = [
    {
      title: "SilverBlaze",
      category: "Web Development",
      image: "/attached_assets/silverblaze.png",
      url: "https://www.silverblaze.com/"
    },
    {
      title: "Tru Technology",
      category: "Web Development",
      image: "/attached_assets/tru-technology.png",
      url: "https://trutech.com/"
    },
    {
      title: "Morcare",
      category: "Web Development",
      image: "/attached_assets/morcare.png",
      url: "https://www.morcarellc.com/"
    },
    {
      title: "Harris Affinity",
      category: "Web Development",
      image: "/attached_assets/harris-affinity.png",
      url: "https://www.harrisaffinity.com/"
    },
    {
      title: "Breakwater Construction",
      category: "Case Study",
      image: "/attached_assets/breakwater-construction-case-study.png",
      url: "https://businessbldrs.com/portfolio/breakwater-construction/"
    },
    {
      title: "Broadmoor, LLC",
      category: "Web Development",
      image: "/attached_assets/broadmoor-llc.png",
      url: "https://www.broadmoorllc.com/"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <ServicePageSchema
        serviceName="Custom App Development"
        description="Custom software and app development services including WordPress websites, iOS and Android apps, web applications, and hosting and maintenance. Streamline your business with tailored technology solutions."
        slug="app-development"
        serviceType="Software Development"
      />
      <ServiceFAQSchema
        serviceName="App Development"
        slug="app-development"
        faqs={[
          {
            question: "What types of apps and software do you build?",
            answer: "We build a wide range of custom solutions including WordPress websites, native iOS and Android mobile apps, web applications, custom integrations, and enterprise software. Each solution is tailored to your specific business needs and designed to streamline your processes, improve productivity, and scale with your growth."
          },
          {
            question: "How long does custom app development take?",
            answer: "Development timelines vary based on project complexity. A WordPress website typically takes 6-12 weeks, while custom web applications and mobile apps can take 3-6 months. We start every project with a discovery phase to define scope, then provide a detailed timeline and milestones so you know exactly what to expect."
          },
          {
            question: "How much does custom app development cost?",
            answer: "Costs depend on the type and complexity of the project. WordPress websites start around $7,500, while custom web applications and mobile apps are scoped individually based on features and requirements. Schedule a free 15-minute discovery call to discuss your project, and we will provide a custom quote with transparent pricing."
          },
          {
            question: "Do you provide ongoing support after launch?",
            answer: "Yes, we offer comprehensive hosting and maintenance services to keep your website or application fast, secure, and up to date. Our support includes regular updates, security monitoring, performance optimization, and feature enhancements so you can focus on running your business."
          }
        ]}
      />
      <SEOHead
        title="Custom App Development Services - iOS, Android, Web Apps | Business Builders"
        description="Get ahead with custom software and app development. WordPress websites, iOS/Android apps, web applications, and hosting services that streamline your business processes."
        keywords="app development, custom software, iOS app development, Android app development, web applications, WordPress websites, hosting maintenance, St Augustine app development"
        canonicalUrl="https://businessbldrs.com/app-development"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Custom App Development Services",
          "provider": {
            "@type": "Organization",
            "name": "Business Builders"
          },
          "description": "Custom software and app development services including WordPress websites, iOS/Android apps, web applications, and hosting maintenance",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Development Services",
            "itemListElement": developmentServices.map(service => ({
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
      <section className="relative pt-32 pb-20 band-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "App Development" }
          ]} />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mt-8">
            <div>
              <div className="inline-block px-4 py-2 bg-yellow-400 mb-6">
                <span className="label-industrial text-black">SERVICES</span>
              </div>
              <h1 className="headline-lg mb-8 leading-tight text-charcoal-900">
                APP<br />
                <span className="text-yellow-500">DEVELOPMENT</span>
              </h1>
              <p className="text-xl lg:text-2xl text-stone-600 leading-relaxed mb-8">
                <strong className="text-charcoal-900">Get Ahead of the Curve with Custom Software Development.</strong> Streamline your business processes with custom software and app development.
              </p>
              
              <Link href="/request-quote">
                <Button 
                  className="bg-yellow-400 text-black px-12 py-6 font-bold text-xl hover:bg-yellow-300 transition-all duration-300 shadow-offset hover-press border-2 border-black"
                >
                  SCHEDULE A CALL
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="bento-card overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                  srcSet="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80 400w, https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80 800w, https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=900&q=80 1200w"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  width={800}
                  height={600}
                  loading="eager"
                  alt="Custom mobile and web application development by Business Builders on multiple devices"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 band-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bento-card overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                  srcSet="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80 400w, https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80 800w, https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=900&q=80 1200w"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  width={800}
                  height={600}
                  loading="lazy"
                  alt="Business team reviewing outdated technology systems that need custom app development solutions"
                  className="w-full"
                />
              </div>
            </div>
            <div>
              <h2 className="headline-lg font-display uppercase mb-8">
                Is Your Business <span className="text-yellow-400">Falling Behind?</span>
              </h2>
              <p className="text-xl text-stone-500 leading-relaxed mb-8">
                You can't get ahead if you're falling behind. How do you know if you're behind? Well, you're probably…
              </p>
              
              <div className="space-y-4">
                {problemIndicators.map((problem, index) => (
                  <div key={index} className="flex items-start">
                    <AlertTriangle className="w-6 h-6 text-red-600 mt-1 mr-4 flex-shrink-0" />
                    <span className="text-stone-500">{problem}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-20 band-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="headline-lg font-display uppercase mb-8">
                Transform the Way You <span className="text-yellow-400">Do Business</span>
              </h2>
              <p className="text-xl text-stone-500 leading-relaxed mb-8">
                New technology means new success. Custom software and app development may be right for you if you're looking to…
              </p>
              
              <div className="space-y-4">
                {transformationBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <TrendingUp className="w-6 h-6 text-yellow-500 mt-1 mr-4 flex-shrink-0" />
                    <span className="text-stone-500">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="bento-card overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                  srcSet="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80 400w, https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80 800w, https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=900&q=80 1200w"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  width={800}
                  height={600}
                  loading="lazy"
                  alt="Modern business technology dashboard showing digital transformation through custom web applications"
                  className="w-full"
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
            <h2 className="headline-lg font-display uppercase mb-8 text-white">
              Ready to <span className="text-yellow-400">Get Ahead?</span>
            </h2>
            <Link href="/request-quote">
              <Button 
                className="bg-yellow-400 text-black px-10 py-5 font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-offset hover-press border-2 border-black"
              >
                SCHEDULE A CALL
              </Button>
            </Link>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-yellow-400 border-2 border-black shadow-offset flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-10 h-10 text-black" />
                </div>
                <div className="text-yellow-400 text-6xl font-display mb-4">{step.number}</div>
                <h3 className="text-xl font-display uppercase mb-4 text-white">{step.title}</h3>
                <p className="text-stone-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 band-stone">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bento-card p-12 bg-white">
            <Quote className="w-16 h-16 text-yellow-400 mx-auto mb-8" />
            <blockquote className="text-2xl lg:text-3xl font-display uppercase mb-8 leading-relaxed">
              "Helped increase our productivity..."
            </blockquote>
            <p className="text-xl text-stone-500 leading-relaxed mb-8">
              We appreciate everything Business Builder does for us. They keep us out in the forefront of our space.
            </p>
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-yellow-400 border-2 border-black flex items-center justify-center mr-4">
                <span className="text-black font-display font-bold text-2xl">DG</span>
              </div>
              <div className="text-left">
                <h4 className="text-lg font-display uppercase">DEWAYNE GIBSON</h4>
                <p className="label-industrial text-yellow-500">CEO - ENTERPRISE SELLING SOLUTION</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Services Section */}
      <section className="py-20 band-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg font-display uppercase mb-8">
              Our Development <span className="text-yellow-400">Services</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentServices.map((service, index) => (
              <div key={index} className="text-center p-8 bento-card bg-white">
                <div className="w-16 h-16 bg-yellow-400 border-2 border-black shadow-offset-sm flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-display uppercase mb-4">{service.title}</h3>
                <p className="text-stone-500 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 band-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg font-display uppercase mb-8 text-white">
              We love to work with a <span className="text-yellow-400">diverse group of clients</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden bento-card mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="label-industrial text-yellow-400 bg-black px-2 py-1">{project.category}</span>
                  </div>
                </div>
                <h3 className="text-lg font-display uppercase mb-2 text-white group-hover:text-yellow-400 transition-colors">
                  {project.title}
                </h3>
                <Button 
                  variant="outline"
                  className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 text-sm font-display uppercase"
                >
                  LEARN MORE
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-20 band-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bento-card overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                  srcSet="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80 400w, https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80 800w, https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=900&q=80 1200w"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  width={800}
                  height={600}
                  loading="lazy"
                  alt="Business Builders development team collaborating on custom application projects"
                  className="w-full"
                />
              </div>
            </div>
            <div>
              <h2 className="headline-lg font-display uppercase mb-8">
                What Makes Our App Development Services <span className="text-yellow-400">Different?</span>
              </h2>
              <p className="text-lg text-stone-500 leading-relaxed mb-6">
                At Business Builders, we know you want to scale your business and improve your productivity. In order to do that, you need the tools that help you do it.
              </p>
              <p className="text-lg text-stone-500 leading-relaxed mb-6">
                The problem is that you may not know what you need, or how to get it, which can leave you feeling stuck, frustrated, and overwhelmed.
              </p>
              <p className="text-lg text-stone-500 leading-relaxed mb-8">
                We believe you deserve the tools you need to scale your business, and we know that custom applications can help you do it. We've seen firsthand the impact a custom business application can have because we've created applications used by millions that have generated hundreds of millions of dollars in revenue.
              </p>
              
              <Link href="/request-quote">
                <Button 
                  className="bg-yellow-400 text-black px-10 py-5 font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-offset hover-press border-2 border-black"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
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
              <p className="text-stone-500">Professional website design and development with responsive layouts, SEO optimization, and conversion focus.</p>
            </Link>
            <Link href="/hubspot-implementation" className="bento-card border-2 border-charcoal-800 p-8 hover:shadow-offset transition-all duration-300 group">
              <h3 className="text-xl font-bold text-charcoal-900 mb-3 group-hover:text-yellow-600">HubSpot Implementation</h3>
              <p className="text-stone-500">Integrate your custom applications with HubSpot CRM for seamless customer management and marketing automation.</p>
            </Link>
            <Link href="/marketing-services" className="bento-card border-2 border-charcoal-800 p-8 hover:shadow-offset transition-all duration-300 group">
              <h3 className="text-xl font-bold text-charcoal-900 mb-3 group-hover:text-yellow-600">Marketing Services</h3>
              <p className="text-stone-500">Drive traffic to your custom application with comprehensive digital marketing strategies and campaigns.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 band-dark" id="contact">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="headline-lg font-display uppercase mb-8 text-white">
            Ready to Get Ahead with <span className="text-yellow-400">Custom Development?</span>
          </h2>
          <p className="text-xl text-stone-400 leading-relaxed mb-12">
            Transform your business with custom software and app development. Let's build the tools you need to scale, improve productivity, and get ahead of the competition.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/request-quote">
              <Button 
                className="bg-yellow-400 text-black px-12 py-6 font-bold text-xl hover:bg-yellow-300 transition-all duration-300 shadow-offset hover-press border-2 border-black"
                data-testid="button-schedule-call-cta"
              >
                SCHEDULE A CALL
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button 
                variant="outline"
                className="border-2 border-white bg-transparent text-white px-12 py-6 font-bold text-xl hover:bg-white hover:text-black transition-all duration-300"
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
