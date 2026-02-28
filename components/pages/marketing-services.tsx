"use client";
import Link from "next/link";
import SEOHead from "@/components/ui/seo-head";

import { Button } from "@/components/ui/button";
import { ArrowRight, Search, MousePointer, Share2, Users, Mail, TrendingUp, Award, Target, Lightbulb, Zap } from "lucide-react";
;
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import ServicePageSchema from "@/components/ui/service-page-schema";
import ServiceFAQSchema from "@/components/ui/service-faq-schema";
import Breadcrumbs from "@/components/ui/breadcrumbs";

export default function MarketingServices() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const credentials = [
    {
      title: "StoryBrand Certified Agency",
      subtitle: "1 of 30",
      description: "StoryBrand certified agencies in the country.",
      icon: Award
    },
    {
      title: "HubSpot Platinum Partner",
      subtitle: "Only one",
      description: "Of 30 StoryBrand certified agencies, we're the only one that's also a platinum Hubspot partner with 20+ years in business.",
      icon: Award
    },
    {
      title: "Guaranteed Results, Since 1999",
      subtitle: "26+ years",
      description: "We've grown our agency year-over for more than two decades using effective marketing strategies and help others do the same.",
      icon: TrendingUp
    }
  ];

  const marketingSolutions = [
    {
      icon: Search,
      title: "Search Engine Optimization",
      description: "Our SEO marketing services drive organic traffic growth through strategic search engine optimization. We optimize your website content, improve search rankings, and implement proven SEO strategies that help your business dominate Google search results and generate qualified leads."
    },
    {
      icon: MousePointer,
      title: "Paid Search (PPC)",
      description: "Our PPC marketing services deliver immediate results through strategic paid advertising campaigns. We manage Google Ads, Bing Ads, and social media advertising to drive qualified traffic, generate leads, and maximize your marketing ROI with data-driven digital marketing strategies."
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Our social media marketing services amplify your brand across all major platforms. We create engaging content, manage targeted social campaigns, and implement data-driven social media strategies that build brand awareness and drive business growth through effective digital marketing."
    },
    {
      icon: Users,
      title: "Influencer Partnerships",
      description: "Expand your reach with authentic influencer collaborations. We connect you with key industry voices that resonate with your audience, building trust and elevating your brand presence."
    },
    {
      icon: Mail,
      title: "Email Marketing Services",
      description: "Transform email into a powerful revenue channel with our email marketing services. We create personalized email campaigns, automated nurture sequences, and targeted messaging that converts leads into customers through strategic email marketing and business automation."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Plan",
      description: "We start with strategic marketing planning to create clear messaging and comprehensive marketing strategies tailored to your business goals and target audience.",
      icon: Target
    },
    {
      number: "02",
      title: "Produce",
      description: "Our marketing services team produces high-quality digital marketing assets including optimized websites, engaging video content, and conversion-focused marketing materials.",
      icon: Lightbulb
    },
    {
      number: "03",
      title: "Promote",
      description: "We promote your business through integrated digital marketing campaigns using SEO, PPC, social media marketing, and email marketing to reach your ideal customers and drive growth.",
      icon: Zap
    }
  ];

  const portfolioProjects = [
    {
      title: "Bozard Ford Lincoln",
      category: "Marketing • Video",
      image: "/attached_assets/bozard-ford-lincoln.jpg",
      url: "/case-studies/bozard-ford-lincoln"
    },
    {
      title: "Jax Symphony",
      category: "Marketing • Web",
      image: "/attached_assets/jax-symphony.png",
      url: "https://businessbldrs.com/portfolio/jax-symphony-2/"
    },
    {
      title: "Rulon International",
      category: "Branding • Marketing",
      image: "/attached_assets/rulon-international.jpg",
      url: "https://businessbldrs.com/portfolio/rulon-international/"
    },
    {
      title: "Inspire Nurse Leaders",
      category: "Marketing • Web",
      image: "/attached_assets/inspire-nurse-leaders.png",
      url: "https://inspirenurseleaders.com/"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-foreground">
      <ServicePageSchema
        serviceName="Marketing Services"
        description="Comprehensive digital marketing services including SEO, PPC, social media, and email marketing. StoryBrand certified agency and HubSpot Platinum Partner helping businesses grow since 1999."
        slug="marketing-services"
        serviceType="Digital Marketing"
      />
      <ServiceFAQSchema
        serviceName="Marketing Services"
        slug="marketing-services"
        faqs={[
          {
            question: "What marketing services does Business Builders offer?",
            answer: "Business Builders provides comprehensive marketing services including SEO, paid search (PPC), social media marketing, email marketing, influencer partnerships, content marketing, and marketing strategy consulting. As a StoryBrand Certified Agency and HubSpot Platinum Partner, we combine clear messaging with powerful tools to drive measurable results."
          },
          {
            question: "How much do your marketing services cost?",
            answer: "Marketing service costs depend on the scope and channels included in your strategy. We offer customized marketing partnerships tailored to your business goals and budget. Schedule a free consultation call to discuss your needs and receive a personalized proposal with transparent pricing."
          },
          {
            question: "How do you measure marketing success?",
            answer: "We measure success through clear KPIs aligned with your business goals, including website traffic growth, lead generation, conversion rates, cost per acquisition, and overall ROI. We provide detailed monthly reporting with actionable insights and recommendations for continuous improvement."
          },
          {
            question: "Can you work with our existing marketing team?",
            answer: "Absolutely. We frequently collaborate with in-house marketing teams, providing strategic guidance, specialized expertise, and additional capacity where needed. Whether you need full-service marketing management or support in specific areas like SEO or paid advertising, we tailor our approach to complement your team."
          }
        ]}
      />
      <SEOHead
        title="Marketing Services & Digital Marketing Solutions - Business Builders"
        description="Comprehensive marketing services including digital marketing, SEO, PPC, social media, and email marketing. StoryBrand certified agency helping businesses grow since 1999."
        keywords="marketing services, digital marketing, business marketing, SEO services, PPC advertising, social media marketing, email marketing, StoryBrand certified, marketing agency St Augustine"
        canonicalUrl="https://businessbldrs.com/marketing-services"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Digital Marketing Services",
          "provider": {
            "@type": "Organization",
            "name": "Business Builders"
          },
          "description": "Comprehensive digital marketing services that make marketing clear and effective, helping businesses get attention and acquire customers",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Marketing Solutions",
            "itemListElement": marketingSolutions.map(solution => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": solution.title,
                "description": solution.description
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
            { label: "Marketing Services" }
          ]} />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="overflow-hidden">
              <div className="inline-block px-4 py-2 bg-yellow-400 mb-6">
                <span className="label-industrial text-secondary">SERVICES</span>
              </div>
              <h1 className="headline-lg mb-8 leading-tight text-charcoal-900">
                MARKETING<br />
                <span className="text-yellow-500">SERVICES</span>
              </h1>
              <p className="text-xl lg:text-2xl text-stone-600 leading-relaxed mb-8">
                <strong className="text-charcoal-900">Business marketing services can be confusing and expensive. Our comprehensive digital marketing solutions make marketing clear and effective, helping you attract more customers and grow your business with proven marketing strategies.</strong>
              </p>
              
              <Link href="/request-quote">
                <Button 
                  className="bg-yellow-400 text-secondary px-12 py-6 font-display uppercase font-bold text-xl hover:bg-yellow-300 transition-all duration-300 shadow-offset hover-press"
                >
                  SCHEDULE A CALL
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                srcSet="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80 400w, https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80 800w, https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=900&q=80 1200w"
                sizes="(max-width: 768px) 100vw, 50vw"
                width={800}
                height={600}
                loading="eager"
                alt="Business Builders digital marketing team collaborating on SEO, PPC, and social media strategy"
                className="border-2 border-secondary shadow-offset-yellow w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="band-stone py-20 relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {credentials.map((credential, index) => (
              <div key={index} className="text-center p-8 bento-card">
                <div className="w-20 h-20 bg-yellow-400 flex items-center justify-center mx-auto mb-6">
                  <credential.icon className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="font-display uppercase text-2xl font-bold mb-2 text-secondary">{credential.title}</h3>
                <div className="text-4xl font-display font-black text-yellow-500 mb-4">{credential.subtitle}</div>
                <p className="text-stone-500 leading-relaxed">{credential.description}</p>
              </div>
            ))}
          </div>
          
          {/* Badges Section */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 items-start justify-center">
              {[
                "StoryBrand Certified",
                "HubSpot Platinum",
                "Google Partner",
                "BBB Accredited",
                "Inc. 5000",
                "Top Marketing Agency",
                "25+ Years"
              ].map((badge, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-secondary flex items-center justify-center mb-2">
                    <Award className="w-8 h-8 text-yellow-400" />
                  </div>
                  <span className="text-xs font-semibold text-charcoal-900 text-center leading-tight">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Solutions Section */}
      <section className="band-white py-20 relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg mb-8 text-secondary">
              Digital Marketing Services That <span className="text-yellow-400">Drive Results</span>
            </h2>
            <p className="text-xl text-stone-500 max-w-4xl mx-auto">
              Our comprehensive marketing services help businesses grow through strategic digital marketing, proven SEO strategies, and effective business marketing solutions tailored to your industry.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingSolutions.map((solution, index) => (
              <div key={index} className="p-8 bento-card">
                <div className="w-16 h-16 bg-yellow-400 flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-display uppercase text-xl font-bold mb-4 text-secondary">{solution.title}</h3>
                <p className="text-stone-500 leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="band-dark py-20 relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg mb-8 text-white">
              Our <span className="text-yellow-400">Portfolio</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {portfolioProjects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden border-2 border-secondary mb-4 shadow-offset-yellow">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="label-industrial text-yellow-400">{project.category}</span>
                  </div>
                </div>
                <h3 className="font-display uppercase text-lg font-bold mb-2 text-white group-hover:text-yellow-400 transition-colors">
                  {project.title}
                </h3>
                <Button 
                  variant="outline"
                  className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-secondary transition-all duration-300 text-sm font-display uppercase"
                  asChild
                >
                  <a href={project.url} target="_blank" rel="noopener noreferrer">LEARN MORE</a>
                </Button>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/portfolio">
              <Button 
                className="bg-white text-secondary px-10 py-5 font-display uppercase font-bold text-lg hover:bg-stone-100 transition-all duration-300 shadow-offset hover-press"
              >
                VIEW MORE WORKS
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="band-stone py-20 relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg mb-8 text-secondary">
              Our Proven Marketing Services <span className="text-yellow-400">Process</span>
            </h2>
            <p className="text-xl text-stone-500 max-w-4xl mx-auto mb-8">
              Since 1999, our digital marketing agency has helped businesses succeed with our systematic Plan-Produce-Promote methodology that delivers measurable marketing results.
            </p>
            <Link href="/request-quote">
              <Button 
                className="bg-yellow-400 text-secondary px-10 py-5 font-display uppercase font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-offset hover-press"
              >
                SCHEDULE A CALL
              </Button>
            </Link>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-yellow-400 flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-10 h-10 text-secondary" />
                </div>
                <div className="text-yellow-500 text-6xl font-display font-black mb-4">{step.number}</div>
                <h3 className="font-display uppercase text-2xl font-bold mb-4 text-secondary">{step.title}</h3>
                <p className="text-stone-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="band-white py-20 relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg mb-8 text-secondary">
              What Our <span className="text-yellow-400">Clients Are Saying</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="p-8 bento-card">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-400 border-2 border-secondary flex items-center justify-center mr-4">
                  <span className="text-secondary font-display font-bold text-2xl">ME</span>
                </div>
                <div>
                  <h4 className="font-display uppercase text-xl font-bold text-secondary">Mark Evans</h4>
                  <p className="text-yellow-500 font-semibold">Evans Automotive</p>
                </div>
              </div>
              <p className="text-stone-500 leading-relaxed">
                "Business Builders transformed our digital marketing strategy. Their clear approach and proven results have significantly increased our customer acquisition and brand visibility."
              </p>
            </div>
            
            <div className="p-8 bento-card">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-400 border-2 border-secondary flex items-center justify-center mr-4">
                  <span className="text-secondary font-display font-bold text-2xl">LB</span>
                </div>
                <div>
                  <h4 className="font-display uppercase text-xl font-bold text-secondary">Letti Bozard</h4>
                  <p className="text-yellow-500 font-semibold">Bozard Ford Lincoln</p>
                </div>
              </div>
              <p className="text-stone-500 leading-relaxed">
                "Their expertise as a StoryBrand certified agency and HubSpot Platinum Partner shows in every campaign. The results speak for themselves - increased leads and better ROI."
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/portfolio">
              <Button 
                className="bg-secondary text-white px-10 py-5 font-display uppercase font-bold text-lg hover:bg-secondary/90 transition-all duration-300 shadow-offset-yellow hover-press"
              >
                VIEW MORE WORKS
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
            <Link href="/seo-services" className="bento-card border-2 border-charcoal-800 p-8 hover:shadow-offset transition-all duration-300 group">
              <h3 className="text-xl font-bold text-charcoal-900 mb-3 group-hover:text-yellow-600">SEO Services</h3>
              <p className="text-stone-500">Dominate search results with data-driven SEO strategies that drive organic traffic and qualified leads.</p>
            </Link>
            <Link href="/social-media-marketing" className="bento-card border-2 border-charcoal-800 p-8 hover:shadow-offset transition-all duration-300 group">
              <h3 className="text-xl font-bold text-charcoal-900 mb-3 group-hover:text-yellow-600">Social Media Marketing</h3>
              <p className="text-stone-500">Build authentic connections and drive engagement across all major social platforms with strategic campaigns.</p>
            </Link>
            <Link href="/marketing-strategy-consulting" className="bento-card border-2 border-charcoal-800 p-8 hover:shadow-offset transition-all duration-300 group">
              <h3 className="text-xl font-bold text-charcoal-900 mb-3 group-hover:text-yellow-600">Marketing Strategy</h3>
              <p className="text-stone-500">Expert marketing strategy consulting to develop comprehensive plans that deliver measurable results and growth.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="band-dark py-20 relative" id="contact">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="headline-lg mb-8 text-white">
            Ready for Marketing That <span className="text-yellow-400">Actually Works?</span>
          </h2>
          <p className="text-xl text-stone-400 leading-relaxed mb-12">
            Stop wasting money on confusing marketing. Let's create a clear, effective strategy that gets attention and acquires customers for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/request-quote">
              <Button 
                className="bg-yellow-400 text-secondary px-12 py-6 font-display uppercase font-bold text-xl hover:bg-yellow-300 transition-all duration-300 shadow-offset hover-press"
                data-testid="button-schedule-call-cta"
              >
                SCHEDULE A CALL
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button 
                variant="outline"
                className="border-2 border-white bg-transparent text-white px-12 py-6 font-display uppercase font-bold text-xl hover:bg-white hover:text-secondary transition-all duration-300"
                data-testid="button-view-work"
              >
                VIEW OUR WORK
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <MegaFooter />
    </div>
  );
}
