"use client";
import Link from "next/link";
import Image from "next/image";
import SEOHead from "@/components/ui/seo-head";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Users, TrendingUp, Shield, Eye, Globe, Check, Video, Camera, Mic, Lightbulb } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import ServicePageSchema from "@/components/ui/service-page-schema";
import ServiceFAQSchema, { videoProductionFAQs } from "@/components/ui/service-faq-schema";
import Breadcrumbs from "@/components/ui/breadcrumbs";
const videoProductionPhoto = "/assets/stock_images/professional_video_p_a35e2814.jpg";

export default function VideoProduction() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    {
      icon: Users,
      title: "Engagement",
      description: "People are more likely to engage with video content than any other type of content."
    },
    {
      icon: TrendingUp,
      title: "Conversions",
      description: "According to research, videos can increase conversions by up to 80%."
    },
    {
      icon: Shield,
      title: "Trust",
      description: "Videos can help you establish trust with your potential customers by providing a face and voice to your brand."
    },
    {
      icon: Globe,
      title: "Traffic",
      description: "Video content can improve your search engine ranking and drive more traffic to your website."
    },
    {
      icon: Eye,
      title: "Visibility",
      description: "Video content is highly shareable, making it an excellent tool for increasing brand awareness and reaching new audiences."
    }
  ];

  const packages = [
    {
      name: "Standard Package",
      price: "$5,500",
      popular: false,
      features: [
        { label: "Filming location(s)", value: "Your location" },
        { label: "Shoot time", value: "1/2 day filming" },
        { label: "Dedicated Producer & Project Coordinator", value: "1/2 day filming" },
        { label: "Edited video(s)", value: "1 Edited video" },
        { label: "Video delivery", value: "2 weeks (from filming date)" },
        { label: "Rounds of free revisions", value: "2 Rounds" },
        { label: "Video script", value: "Script-to-screen Gameplan from our team" }
      ]
    },
    {
      name: "Advance Package",
      price: "$16,500",
      popular: true,
      features: [
        { label: "Filming location(s)", value: "Up to 2 locations" },
        { label: "Shoot time", value: "1 day filming" },
        { label: "Dedicated Producer & Project Coordinator", value: "+Dedicated director of Photography" },
        { label: "Edited video(s)", value: "2 Edited videos" },
        { label: "Video delivery", value: "1 month (from filming date)" },
        { label: "Rounds of free revisions", value: "2 Rounds" },
        { label: "Video script", value: "Script-to-screen Gameplan from our team" }
      ]
    },
    {
      name: "Hollywood Package",
      price: "Schedule a call",
      premium: true,
      features: [
        { label: "Filming location(s)", value: "Up to 2 locations" },
        { label: "Shoot time", value: "1 day filming" },
        { label: "Dedicated Team", value: "Producer, Director of Photography, Hair & Makeup, Sound Department, Lighting Department, Distribution Specialist" },
        { label: "Edited video(s)", value: "1 Edited video, 3 versions" },
        { label: "Video delivery", value: "Premium timeline" },
        { label: "Rounds of free revisions", value: "2 Rounds" },
        { label: "Video script", value: "Script-to-screen Gameplan from our team" }
      ]
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "SCHEDULE A 15 MINUTE CALL",
      description: "A quick call is all it takes to get started.",
      icon: Users
    },
    {
      number: "02",
      title: "CHOOSE A VIDEO PACKAGE",
      description: "Pick the video package that best fits your needs and goals (or work with us to create something completely custom for your business).",
      icon: Video
    },
    {
      number: "03",
      title: "GROW YOUR BUSINESS",
      description: "We'll execute the plan and you'll watch your business grow.",
      icon: TrendingUp
    }
  ];

  const additionalOptions = [
    "Talent/Location/Crew sourcing (Nationwide network)",
    "Distribution Management for organic or paid video marketing campaigns",
    "LMS (Learning Management System) course video content (MasterClass style courses)",
    "Retainer-Style Video Partnerships for Monthly Video Content at a Discounted Rate",
    "Animated Explainer Videos",
    "Social Video Ads",
    "Other Custom Video Content (Ask us about your idea!)"
  ];

  return (
    <div className="min-h-screen bg-white">
      <ServicePageSchema
        serviceName="Video Production"
        description="Professional video production services that produce results. From Standard to Hollywood packages starting at $5,500. Increase conversions by up to 80% with video marketing."
        slug="video-production"
        serviceType="Content Marketing"
      />
      <ServiceFAQSchema
        serviceName="Video Production"
        slug="video-production"
        faqs={videoProductionFAQs}
      />
      <SEOHead
        title="Video Production Services - Professional Video Marketing | Business Builders"
        description="Professional video production services that produce results. From Standard to Hollywood packages starting at $5,500. Increase conversions by up to 80% with video marketing."
        keywords="video production, video marketing, professional videos, business videos, video advertising, St Augustine video production, Jacksonville video production"
        canonicalUrl="https://businessbldrs.com/video-production"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Video Production Services",
          "provider": {
            "@type": "Organization",
            "name": "Business Builders"
          },
          "description": "Professional video production services that help businesses increase engagement, conversions, and brand trust through high-quality video content",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Video Production Packages",
            "itemListElement": packages.map(pkg => ({
              "@type": "Offer",
              "name": pkg.name,
              "price": pkg.price.replace('$', '').replace(',', ''),
              "priceCurrency": "USD",
              "description": `${pkg.name} video production package`
            }))
          }
        }}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="band-white pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Video Production" }
          ]} />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="overflow-hidden">
              <div className="inline-block px-4 py-2 border-2 border-charcoal-900 mb-6">
                <span className="label-industrial text-charcoal-900">SERVICES</span>
              </div>
              <h1 className="headline-lg mb-8 leading-tight text-charcoal-900 font-display uppercase">
                VIDEO<br />
                <span className="text-yellow-500">PRODUCTION</span>
              </h1>
              <p className="text-xl lg:text-2xl text-stone-600 leading-relaxed mb-8">
                <strong className="text-charcoal-900">Your videos should produce results.</strong> Most people have videos, but few have videos that work for them. We can help you craft a video that will get you more leads, improve your reputation, and help your business grow.
              </p>
              
              <Button 
                onClick={() => scrollToSection('packages')}
                className="bg-yellow-400 text-black px-12 py-6 font-display font-bold text-xl uppercase hover:bg-yellow-300 transition-all duration-300 shadow-offset hover-press border-2 border-black"
              >
                VIEW PACKAGES
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
            </div>
            
            <div className="relative">
              <div className="bento-card p-2 bg-white">
                <Image
                  src={videoProductionPhoto}
                  alt="Professional video production camera equipment and filming"
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

      {/* Benefits Section */}
      <section className="band-stone py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg mb-8 font-display uppercase">
              The Benefits of <span className="text-yellow-400">Video Marketing</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group bento-card p-6 bg-white">
                <div className="w-20 h-20 bg-yellow-400 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border-2 border-black shadow-offset-sm">
                  <benefit.icon className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-xl font-display font-bold uppercase mb-4">{benefit.title}</h3>
                <p className="text-stone-500 leading-relaxed text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="band-dark py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="headline-lg mb-8 text-white font-display uppercase">
            DON'T WASTE YOUR TIME AND MONEY ON AN <span className="text-yellow-400">AVERAGE VIDEO.</span>
          </h2>
          <p className="text-xl text-stone-400 leading-relaxed mb-8">
            <strong className="text-white">Video marketing can have a big impact.</strong>
          </p>
          <p className="text-lg text-stone-400 leading-relaxed">
            But if you don't do it right, you'll wind up with boring, low-quality videos that don't get you the results you deserve.
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="band-white py-20" id="packages">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg mb-8 font-display uppercase">
              WE HAVE <span className="text-yellow-400">3 CUSTOM OPTIONS</span> TO FIT YOUR GROWTH NEEDS
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`relative p-8 border-2 transition-all duration-300 shadow-offset hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_hsl(30,6%,10%)] bg-white ${
                  pkg.popular 
                    ? 'border-yellow-400' 
                    : pkg.premium
                    ? 'border-purple-400'
                    : 'border-black'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="label-industrial bg-yellow-400 text-black px-4 py-2 border-2 border-black">
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
                  <h3 className="text-2xl font-display font-bold uppercase mb-4">{pkg.name}</h3>
                  <div className="text-3xl font-display font-black text-yellow-500 mb-6">
                    {pkg.price.includes('$') ? (
                      <>starting at<br />{pkg.price}</>
                    ) : (
                      pkg.price
                    )}
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="border-b-2 border-stone-200 pb-3">
                      <div className="font-semibold text-sm text-yellow-600 mb-1">{feature.label}</div>
                      <div className="text-stone-500 text-sm">{feature.value}</div>
                    </div>
                  ))}
                </div>
                
                <Link href="/request-quote">
                  <Button 
                    className={`w-full py-3 font-display font-bold uppercase transition-all duration-300 shadow-offset-sm hover-press ${
                      pkg.popular 
                        ? 'bg-yellow-400 text-black hover:bg-yellow-300 border-2 border-black' 
                        : pkg.premium
                        ? 'bg-purple-400 text-black hover:bg-purple-300 border-2 border-black'
                        : 'bg-black text-white hover:bg-stone-800 border-2 border-black'
                    }`}
                  >
                    SIGN UP
                  </Button>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <h3 className="headline-md mb-8 font-display uppercase">Build a Custom Video Package</h3>
            <Link href="/request-quote">
              <Button 
                className="bg-yellow-400 text-black px-12 py-6 font-display font-bold text-xl uppercase hover:bg-yellow-300 transition-all duration-300 shadow-offset hover-press border-2 border-black"
              >
                SCHEDULE A CALL
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="band-stone py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center bento-card p-8 bg-white">
                <div className="w-20 h-20 bg-yellow-400 flex items-center justify-center mx-auto mb-6 border-2 border-black shadow-offset-sm">
                  <step.icon className="w-10 h-10 text-black" />
                </div>
                <div className="text-yellow-500 text-6xl font-display font-black mb-4">{step.number}</div>
                <h3 className="text-xl font-display font-bold uppercase mb-4">{step.title}</h3>
                <p className="text-stone-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Options Section */}
      <section className="band-dark py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="headline-lg mb-8 text-white font-display uppercase">
              ADDITIONAL OPTIONS <span className="text-yellow-400">AVAILABLE:</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {additionalOptions.map((option, index) => (
              <div key={index} className="flex items-start">
                <Check className="w-6 h-6 text-yellow-400 mt-1 mr-4 flex-shrink-0" />
                <span className="text-stone-400">{option}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retainer Section */}
      <section className="band-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bento-card p-2 bg-white">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                srcSet="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80 400w, https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80 800w, https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=900&q=80 1200w"
                sizes="(max-width: 768px) 100vw, 50vw"
                width={800}
                height={600}
                loading="lazy"
                alt="Video production equipment and setup"
                className="w-full"
              />
            </div>
            <div>
              <h2 className="headline-lg mb-8 font-display uppercase">
                Flexible Retainer Packages for <span className="text-yellow-400">Ongoing Video Success</span>
              </h2>
              <p className="text-xl text-stone-500 leading-relaxed mb-8">
                If your business could use a boost with high-quality videos on a regular basis, take advantage of our retainer-style packages and get more for your money every month with a video partnership.
              </p>
              <p className="text-lg text-stone-500 leading-relaxed mb-12">
                Schedule a call today to plan ahead for your year and ensure the growth of your business year over year.
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
            <Link href="/social-media-marketing" className="bento-card border-2 border-charcoal-800 p-8 hover:shadow-offset transition-all duration-300 group">
              <h3 className="text-xl font-bold text-charcoal-900 mb-3 group-hover:text-yellow-600">Social Media Marketing</h3>
              <p className="text-stone-500">Amplify your video content across all major social platforms with strategic posting and audience targeting.</p>
            </Link>
            <Link href="/branding-logos" className="bento-card border-2 border-charcoal-800 p-8 hover:shadow-offset transition-all duration-300 group">
              <h3 className="text-xl font-bold text-charcoal-900 mb-3 group-hover:text-yellow-600">Branding & Logos</h3>
              <p className="text-stone-500">Create a cohesive visual identity that strengthens your brand across video, web, and print media.</p>
            </Link>
            <Link href="/website-design" className="bento-card border-2 border-charcoal-800 p-8 hover:shadow-offset transition-all duration-300 group">
              <h3 className="text-xl font-bold text-charcoal-900 mb-3 group-hover:text-yellow-600">Website Design</h3>
              <p className="text-stone-500">Showcase your video content on a professional website designed to convert visitors into customers.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="band-dark py-20" id="contact">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="headline-lg mb-8 text-white font-display uppercase">
            Ready to Create Videos That <span className="text-yellow-400">Produce Results?</span>
          </h2>
          <p className="text-xl text-stone-400 leading-relaxed mb-12">
            Don't settle for average videos. Let's create high-quality video content that gets you more leads, improves your reputation, and helps your business grow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/request-quote">
              <Button 
                className="bg-yellow-400 text-black px-12 py-6 font-display font-bold text-xl uppercase hover:bg-yellow-300 transition-all duration-300 shadow-offset hover-press border-2 border-black"
                data-testid="button-schedule-call-cta"
              >
                SCHEDULE A CALL
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
            </Link>
            <Button 
              onClick={() => scrollToSection('packages')}
              variant="outline"
              className="border-2 border-white bg-transparent text-white px-12 py-6 font-display font-bold text-xl uppercase hover:bg-white hover:text-black transition-all duration-300"
              data-testid="button-view-packages"
            >
              VIEW PACKAGES
            </Button>
          </div>
        </div>
      </section>

      <MegaFooter />
    </div>
  );
}
