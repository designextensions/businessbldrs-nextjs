"use client";
import Link from "next/link";
import SEOHead from "@/components/ui/seo-head";

import { Button } from "@/components/ui/button";
import { ArrowRight, Share2, Heart, TrendingUp, Users, Calendar, BarChart, MessageSquare, Camera, Video, Target, Lightbulb, Zap, Award } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import ServicePageSchema from "@/components/ui/service-page-schema";
import ServiceFAQSchema, { socialMediaFAQs } from "@/components/ui/service-faq-schema";
import Breadcrumbs from "@/components/ui/breadcrumbs";

export default function SocialMediaMarketing() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const platformServices = [
    {
      icon: Share2,
      title: "Facebook Marketing",
      description: "Leverage Facebook's vast user base with targeted campaigns, engaging content, and community building strategies that drive brand awareness and conversions."
    },
    {
      icon: Camera,
      title: "Instagram Marketing",
      description: "Create visually stunning content and Stories that captivate your audience, build brand aesthetics, and drive engagement through authentic visual storytelling."
    },
    {
      icon: MessageSquare,
      title: "LinkedIn Marketing",
      description: "Build professional relationships and establish thought leadership with B2B content strategies that generate quality leads and business connections."
    },
    {
      icon: Video,
      title: "TikTok & YouTube",
      description: "Reach younger demographics with creative short-form videos and long-form content that entertains, educates, and drives viral engagement."
    },
    {
      icon: Users,
      title: "Community Management",
      description: "Foster meaningful relationships with your audience through active engagement, timely responses, and community-building initiatives that create brand loyalty."
    },
    {
      icon: BarChart,
      title: "Social Media Analytics",
      description: "Track performance metrics, analyze audience behavior, and optimize strategies with comprehensive reporting that delivers actionable insights for growth."
    }
  ];

  const socialMediaFeatures = [
    {
      icon: Target,
      title: "Strategic Content Planning",
      description: "We develop comprehensive content calendars aligned with your business goals, ensuring consistent posting schedules and strategic messaging across all platforms."
    },
    {
      icon: Heart,
      title: "Engagement & Community Building",
      description: "Build authentic relationships with your audience through meaningful interactions, user-generated content campaigns, and community-focused initiatives."
    },
    {
      icon: TrendingUp,
      title: "Paid Social Advertising",
      description: "Maximize ROI with targeted social media advertising campaigns that reach your ideal customers and drive conversions across multiple platforms."
    },
    {
      icon: Calendar,
      title: "Content Creation & Curation",
      description: "Professional content creation including graphics, videos, and copy that reflects your brand voice and resonates with your target audience."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Strategy Development",
      description: "We analyze your brand, audience, and competitors to create a tailored social media strategy that aligns with your business objectives.",
      icon: Target
    },
    {
      number: "02",
      title: "Content Creation",
      description: "Our creative team produces engaging visual and written content that tells your brand story and connects with your audience.",
      icon: Lightbulb
    },
    {
      number: "03",
      title: "Engagement & Growth",
      description: "We actively manage your social presence, engage with your community, and optimize campaigns for maximum reach and engagement.",
      icon: Zap
    }
  ];

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

  const portfolioProjects = [
    {
      title: "Bozard Ford Lincoln",
      category: "Social Media • Marketing",
      image: "/attached_assets/bozard-ford-lincoln.jpg",
      url: "/case-studies/bozard-ford-lincoln"
    },
    {
      title: "Jax Symphony",
      category: "Social Media • Marketing",
      image: "/attached_assets/jax-symphony.png",
      url: "https://businessbldrs.com/portfolio/jax-symphony-2/"
    },
    {
      title: "All Pro Dad",
      category: "Social Media Strategy",
      image: "/attached_assets/all-pro-dad.jpg",
      url: "/case-studies/all-pro-dad"
    },
    {
      title: "Inspire Nurse Leaders",
      category: "Community Management",
      image: "/attached_assets/inspire-nurse-leaders.png",
      url: "https://inspirenurseleaders.com/"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <ServicePageSchema
        serviceName="Social Media Marketing"
        description="Social media marketing services to enhance visibility and engagement across social channels. Expert social media management, content creation, and advertising campaigns."
        slug="social-media-marketing"
        serviceType="Social Media Marketing"
      />
      <ServiceFAQSchema
        serviceName="Social Media Marketing"
        slug="social-media-marketing"
        faqs={socialMediaFAQs}
      />
      <SEOHead
        title="Social Media Marketing Services by Business Builders"
        description="Business Builders provides social media marketing services to enhance visibility and engagement across social channels. Expert social media management, content creation, and advertising campaigns."
        keywords="social media marketing, Facebook marketing, Instagram marketing, LinkedIn marketing, TikTok marketing, social media management, content creation, social media advertising, community management, St Augustine social media"
        canonicalUrl="https://businessbldrs.com/social-media-marketing"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Social Media Marketing Services",
          "provider": {
            "@type": "Organization",
            "name": "Business Builders"
          },
          "description": "Comprehensive social media marketing services that enhance brand visibility and drive engagement across all major social platforms",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Social Media Solutions",
            "itemListElement": platformServices.map(service => ({
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
      <section className="relative pt-32 pb-20 overflow-hidden band-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Marketing Services", href: "/marketing-services" },
            { label: "Social Media Marketing" }
          ]} />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="overflow-hidden">
              <div className="inline-block px-4 py-2 border-2 border-charcoal-900 mb-6">
                <span className="label-industrial text-charcoal-900">SOCIAL MEDIA SERVICES</span>
              </div>
              <h1 className="headline-lg text-charcoal-900 mb-8">
                Social Media Marketing Services for Your Brand
              </h1>
              <p className="text-xl lg:text-2xl text-stone-600 leading-relaxed mb-8">
                <strong className="text-charcoal-900">Build authentic connections and drive meaningful engagement across all social platforms with strategic content and community management.</strong>
              </p>
              
              <Link href="/request-quote">
                <Button 
                  className="bg-yellow-400 text-black px-12 py-6 font-display font-bold text-xl uppercase hover:bg-yellow-300 transition-all duration-300 shadow-offset hover-press border-2 border-black"
                >
                  SCHEDULE A CALL
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                srcSet="https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80 400w, https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80 800w, https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=900&q=80 1200w"
                sizes="(max-width: 768px) 100vw, 50vw"
                width={800}
                height={600}
                loading="eager"
                alt="Business Builders social media marketing strategy dashboard showing engagement and analytics"
                className="border-2 border-white shadow-offset w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 relative band-stone">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {credentials.map((credential, index) => (
              <div key={index} className="text-center p-8 bento-card">
                <div className="w-20 h-20 bg-yellow-400 border-2 border-black flex items-center justify-center mx-auto mb-6">
                  <credential.icon className="w-10 h-10 text-black" />
                </div>
                <h3 className="headline-md text-black mb-2">{credential.title}</h3>
                <div className="text-4xl font-display font-black text-yellow-500 mb-4">{credential.subtitle}</div>
                <p className="text-stone-500 leading-relaxed">{credential.description}</p>
              </div>
            ))}
          </div>
          
          {/* Badges Section */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-center opacity-60">
              {Array.from({length: 7}, (_, i) => (
                <div key={i} className="w-16 h-16 bg-white border-2 border-black flex items-center justify-center shadow-offset-sm">
                  <Award className="w-8 h-8 text-yellow-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Services Section */}
      <section className="py-20 relative band-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg text-black mb-8">
              Social Media Platforms We <span className="text-yellow-400">Master</span>
            </h2>
            <p className="text-xl text-stone-500 max-w-3xl mx-auto">
              From Facebook to TikTok, we help you dominate every social platform with tailored strategies that resonate with your unique audience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformServices.map((service, index) => (
              <div key={index} className="p-8 bento-card">
                <div className="w-16 h-16 bg-yellow-400 border-2 border-black flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-display font-bold text-xl uppercase mb-4 text-black">{service.title}</h3>
                <p className="text-stone-500 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Features Section */}
      <section className="py-20 relative band-dark">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg text-white mb-8">
              Complete Social Media <span className="text-yellow-400">Solutions</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {socialMediaFeatures.map((feature, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-yellow-400 border-2 border-yellow-400 flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-black" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl uppercase mb-4 text-white">{feature.title}</h3>
                  <p className="text-stone-400 leading-relaxed text-lg">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 relative band-stone">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg text-black mb-8">
              Social Media Success <span className="text-yellow-400">Stories</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {portfolioProjects.map((project, index) => (
              <div key={index} className="group cursor-pointer bento-card overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black p-4">
                    <span className="label-industrial text-yellow-400">{project.category}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-display font-bold text-lg uppercase mb-4 text-black group-hover:text-yellow-600 transition-colors">
                    {project.title}
                  </h3>
                  <Button 
                    variant="outline"
                    className="border-2 border-black text-black hover:bg-yellow-400 hover:border-yellow-400 transition-all duration-300 text-sm font-display uppercase"
                  >
                    LEARN MORE
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              onClick={() => window.open('/portfolio', '_self')}
              className="bg-black text-white px-10 py-5 font-display font-bold text-lg uppercase hover:bg-stone-800 transition-all duration-300 shadow-offset hover-press border-2 border-black"
            >
              VIEW MORE WORKS
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 relative band-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg text-black mb-8">
              Our Social Media <span className="text-yellow-400">Process</span>
            </h2>
            <Link href="/request-quote">
              <Button 
                className="bg-yellow-400 text-black px-10 py-5 font-display font-bold text-lg uppercase hover:bg-yellow-300 transition-all duration-300 shadow-offset hover-press border-2 border-black"
              >
                SCHEDULE A CALL
              </Button>
            </Link>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center bento-card p-8">
                <div className="w-20 h-20 bg-yellow-400 border-2 border-black flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-10 h-10 text-black" />
                </div>
                <div className="text-yellow-400 text-6xl font-display font-black mb-4">{step.number}</div>
                <h3 className="font-display font-bold text-2xl uppercase mb-4 text-black">{step.title}</h3>
                <p className="text-stone-500 leading-relaxed">{step.description}</p>
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
            <Link href="/marketing-services" className="bento-card border-2 border-charcoal-800 p-8 hover:shadow-offset transition-all duration-300 group">
              <h3 className="text-xl font-bold text-charcoal-900 mb-3 group-hover:text-yellow-600">Marketing Services</h3>
              <p className="text-stone-500">Comprehensive digital marketing solutions including SEO, PPC, and email marketing to grow your business.</p>
            </Link>
            <Link href="/video-production" className="bento-card border-2 border-charcoal-800 p-8 hover:shadow-offset transition-all duration-300 group">
              <h3 className="text-xl font-bold text-charcoal-900 mb-3 group-hover:text-yellow-600">Video Production</h3>
              <p className="text-stone-500">Professional video content that boosts engagement and conversions across your social media channels.</p>
            </Link>
            <Link href="/branding-logos" className="bento-card border-2 border-charcoal-800 p-8 hover:shadow-offset transition-all duration-300 group">
              <h3 className="text-xl font-bold text-charcoal-900 mb-3 group-hover:text-yellow-600">Branding & Logos</h3>
              <p className="text-stone-500">Build a cohesive brand identity that stands out across every social platform and marketing touchpoint.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative band-dark">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="headline-lg text-white mb-8">
              Ready to Amplify Your <span className="text-yellow-400">Social Presence?</span>
            </h2>
            <p className="text-xl text-stone-400 mb-12 max-w-3xl mx-auto">
              Let's create a social media strategy that builds authentic connections, drives engagement, and grows your business. Our comprehensive approach to social media marketing delivers measurable results across all platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                onClick={() => window.open('/request-quote', '_self')}
                className="bg-yellow-400 text-black px-12 py-6 font-display font-bold text-xl uppercase hover:bg-yellow-300 transition-all duration-300 shadow-offset-yellow hover-press border-2 border-yellow-400"
              >
                GET STARTED TODAY
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
              <Button 
                onClick={() => window.open('/marketing-services', '_self')}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-12 py-6 font-display font-bold text-xl uppercase transition-all duration-300"
              >
                VIEW ALL MARKETING SERVICES
              </Button>
            </div>
          </div>
        </div>
      </section>

      <MegaFooter />
    </div>
  );
}
