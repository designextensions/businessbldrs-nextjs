"use client";
import Link from "next/link";
import SEOHead from "@/components/ui/seo-head";

import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Search, MessageSquare, Palette, Video, Smartphone, Settings, MapPin, Phone, Star, CheckCircle, Clock, Users, Building } from "lucide-react";
;
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { CertifiedStamp, AnvilStamp } from "@/components/ui/vintage-stamps";
import { getBreadcrumbSchema, BASE_URL } from "@/lib/seo-config";

export default function Gainesville() {
  const services = [
    {
      icon: <Globe className="w-8 h-8 text-charcoal-900" />,
      title: "Website Design",
      description: "Custom websites built for Gainesville businesses. Responsive, fast, and optimized to convert visitors into customers.",
      href: "/website-design"
    },
    {
      icon: <Search className="w-8 h-8 text-charcoal-900" />,
      title: "SEO Services",
      description: "Rank higher in Gainesville search results. Local SEO, Google Maps optimization, and organic traffic growth for your business.",
      href: "/seo-services"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-charcoal-900" />,
      title: "StoryBrand Messaging",
      description: "Clarify your message so Gainesville customers instantly understand what you offer. StoryBrand Certified agency.",
      href: "/storybrand-messaging"
    },
    {
      icon: <Palette className="w-8 h-8 text-charcoal-900" />,
      title: "Branding & Logos",
      description: "Stand out in the Gainesville market with professional brand identity, logo design, and visual strategy.",
      href: "/branding-logos"
    },
    {
      icon: <Video className="w-8 h-8 text-charcoal-900" />,
      title: "Video Production",
      description: "Professional video production for Gainesville businesses. Brand stories, testimonials, and promotional content filmed in North Central Florida.",
      href: "/video-production"
    },
    {
      icon: <Search className="w-8 h-8 text-charcoal-900" />,
      title: "Marketing Services",
      description: "Complete digital marketing solutions including Google Ads, social media, email campaigns, and content marketing.",
      href: "/marketing-services"
    },
    {
      icon: <Settings className="w-8 h-8 text-charcoal-900" />,
      title: "HubSpot CRM",
      description: "HubSpot Platinum Partner delivering CRM implementation, marketing automation, and sales enablement for Gainesville businesses.",
      href: "/hubspot-implementation"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-charcoal-900" />,
      title: "App Development",
      description: "Custom web and mobile applications for Gainesville companies looking to streamline operations and engage customers.",
      href: "/app-development"
    }
  ];

  const trustSignals = [
    { number: "26+", label: "Years in Business" },
    { number: "100+", label: "Websites Built" },
    { number: "5", label: "Star Reviews on Yelp" },
    { number: "50+", label: "Active Clients" }
  ];

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://businessbldrs.com/#localbusiness",
    "name": "Business Builders - Gainesville Marketing Agency",
    "image": "https://businessbldrs.com/logo.png",
    "url": "https://businessbldrs.com/gainesville",
    "telephone": "+1-877-378-6101",
    "priceRange": "$$",
    "description": "Gainesville marketing agency providing website design, SEO, branding, and digital marketing services. Based in St. Augustine, serving Gainesville and Alachua County since 1999.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "701 Market St, Suite 101",
      "addressLocality": "St. Augustine",
      "addressRegion": "FL",
      "postalCode": "32095",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 29.8946,
      "longitude": -81.3145
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "21"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Gainesville",
        "sameAs": "https://en.wikipedia.org/wiki/Gainesville,_Florida"
      },
      {
        "@type": "City",
        "name": "Alachua"
      },
      {
        "@type": "City",
        "name": "Newberry"
      },
      {
        "@type": "State",
        "name": "Florida"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/businessbldrs",
      "https://twitter.com/businessbldrs",
      "https://www.linkedin.com/company/businessbldrs",
      "https://www.instagram.com/businessbldrs/",
      "https://www.youtube.com/channel/UC3SN1I1FwktpF_lMqaZveIg"
    ]
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessJsonLd,
      getBreadcrumbSchema("Gainesville", "/gainesville"),
      {
        "@type": "WebPage",
        "name": "Gainesville Marketing Agency | Business Builders",
        "description": "Business Builders is a full-service marketing agency serving Gainesville, FL. Website design, SEO, branding, video production, and digital marketing.",
        "url": "https://businessbldrs.com/gainesville"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-stone-50 text-charcoal-900">
      <SEOHead
        title="Gainesville Marketing Agency | Web Design & SEO | Business Builders"
        description="Business Builders serves Gainesville businesses with website design, SEO, branding, video production & digital marketing. 26+ years experience. HubSpot Platinum Partner. Call 877-378-6101."
        keywords="gainesville marketing agency, gainesville web design, gainesville seo, marketing company gainesville fl, gainesville digital marketing, web designer gainesville, alachua county marketing agency, marketing agency near me gainesville"
        canonicalUrl={`${BASE_URL}/gainesville`}
        structuredData={structuredData}
      />
      <Navigation />

      <section className="relative pt-32 pb-20 overflow-hidden min-h-[100vh] flex items-center band-dark">
        <CertifiedStamp className="absolute top-20 -right-10 w-64 h-64 opacity-10 hidden lg:block" />
        <AnvilStamp className="absolute bottom-20 -left-10 w-56 h-56 opacity-10 hidden lg:block" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Breadcrumbs items={[{ label: "Gainesville" }]} />
          <div className="max-w-4xl mx-auto text-center">
            <span className="label-industrial text-yellow-400 border-2 border-yellow-400 px-4 py-2 inline-block mb-6">
              SERVING GAINESVILLE BUSINESSES
            </span>
            <h1 className="headline-xl text-white mb-8">
              Gainesville's Trusted<br />
              <span className="text-yellow-400">Marketing Agency</span>
            </h1>
            <p className="text-editorial-lg text-stone-400 mb-8 max-w-3xl mx-auto">
              Business Builders delivers full-service marketing to Gainesville businesses. From the University of Florida corridor to downtown Gainesville, we help businesses grow with website design, SEO, branding, and digital marketing that drives measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/request-quote">
                <Button size="xl">
                  GET A FREE QUOTE
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>
              </Link>
              <a href="tel:877-378-6101">
                <Button size="xl" variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-charcoal-900">
                  <Phone className="w-5 h-5 mr-2" />
                  (877) 378-6101
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 band-white border-b-2 border-charcoal-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustSignals.map((signal, index) => (
              <div key={index} className="text-center">
                <div className="font-display font-black text-5xl text-yellow-500 mb-2">{signal.number}</div>
                <p className="font-display font-bold text-charcoal-900 uppercase tracking-wide text-sm">{signal.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 band-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="headline-lg text-charcoal-900 mb-8">
                Why Gainesville Businesses<br />
                <span className="text-yellow-500">Choose Business Builders</span>
              </h2>
              <div className="space-y-6 font-serif text-lg text-stone-600 leading-relaxed">
                <p>
                  Gainesville is a dynamic city anchored by the University of Florida, a thriving healthcare sector, and a growing innovation ecosystem. Whether you're a startup, an established practice, or a growing company, <strong className="text-charcoal-900">your marketing needs to compete at a high level</strong>.
                </p>
                <p>
                  Business Builders has served Florida businesses since 1999 from our headquarters in St. Augustine. We work with Gainesville clients both in-person and remotely, delivering the same high-quality results we're known for across Northeast Florida.
                </p>
                <p>
                  As a <strong className="text-charcoal-900">HubSpot Platinum Partner</strong> and <strong className="text-charcoal-900">StoryBrand Certified Agency</strong>, we bring enterprise-level marketing strategy and tools to Gainesville businesses of all sizes -- from university-area startups to established companies along I-75.
                </p>
              </div>
              <div className="mt-8 flex items-start gap-3">
                <Building className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-display font-bold text-charcoal-900">Headquartered in St. Augustine, FL</p>
                  <p className="font-serif text-stone-600">701 Market St, Suite 101, St. Augustine, FL 32095</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              {[
                {
                  icon: <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0" />,
                  title: "Florida Market Expertise",
                  text: "26+ years of experience serving Florida businesses. We understand the unique dynamics of the Gainesville and North Central Florida market."
                },
                {
                  icon: <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0" />,
                  title: "In-Person & Remote",
                  text: "We work with Gainesville clients both in-person and remotely. Regular video calls, strategic meetings, and hands-on project management."
                },
                {
                  icon: <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0" />,
                  title: "Full-Service Capabilities",
                  text: "Website design, SEO, video production, social media, HubSpot CRM -- everything under one roof, no subcontracting."
                },
                {
                  icon: <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0" />,
                  title: "Proven Track Record",
                  text: "26+ years, 100+ websites, and a portfolio of real results for businesses across Florida and beyond."
                }
              ].map((item, index) => (
                <div key={index} className="bento-card p-6 flex gap-4">
                  {item.icon}
                  <div>
                    <h3 className="font-display font-bold text-charcoal-900 uppercase mb-2">{item.title}</h3>
                    <p className="font-serif text-stone-600 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 band-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg text-charcoal-900 mb-6">
              MARKETING SERVICES FOR<br />
              <span className="text-yellow-500">GAINESVILLE BUSINESSES</span>
            </h2>
            <p className="text-editorial-lg text-stone-600 max-w-3xl mx-auto">
              From web design to SEO to full-service digital marketing, we provide everything Gainesville businesses need to dominate their market.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link key={index} href={service.href}>
                <div className="bento-card p-6 h-full hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-pointer">
                  <div className="w-14 h-14 bg-yellow-400 flex items-center justify-center mb-4 border-2 border-charcoal-900">
                    {service.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg text-charcoal-900 uppercase mb-3">{service.title}</h3>
                  <p className="font-serif text-stone-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 band-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg text-white mb-6">
              GAINESVILLE INDUSTRIES<br />
              <span className="text-yellow-400">WE SERVE</span>
            </h2>
            <p className="text-editorial-lg text-stone-400 max-w-3xl mx-auto">
              We've helped businesses across Gainesville's diverse economy grow their online presence and revenue.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Healthcare & Medical",
                description: "Medical practices, dental offices, specialist clinics, and healthcare providers in the UF Health corridor and beyond."
              },
              {
                title: "Education & Tech Startups",
                description: "EdTech companies, university-affiliated businesses, and technology startups in Gainesville's innovation ecosystem."
              },
              {
                title: "Professional Services",
                description: "Law firms, financial advisors, CPA firms, and consultants serving Gainesville and Alachua County."
              },
              {
                title: "Real Estate & Development",
                description: "Real estate agencies, property developers, and builders in the growing Gainesville housing market."
              },
              {
                title: "Restaurants & Hospitality",
                description: "Restaurants, hotels, event venues, and hospitality businesses serving Gainesville's vibrant community."
              },
              {
                title: "Nonprofits & Ministries",
                description: "Churches, ministries, and nonprofits across Gainesville and North Central Florida. We're passionate about mission-driven organizations."
              }
            ].map((industry, index) => (
              <div key={index} className="bg-charcoal-800 border-2 border-charcoal-700 p-8">
                <h3 className="font-display font-bold text-xl text-yellow-400 uppercase mb-4">{industry.title}</h3>
                <p className="font-serif text-stone-400 leading-relaxed">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 band-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg text-charcoal-900 mb-6">
              WHAT OUR <span className="text-yellow-500">CLIENTS SAY</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bento-card p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="font-serif text-stone-600 text-lg leading-relaxed mb-6 italic">
                "Our experience with Business Builders and the corresponding maintenance plan has been great. The team is always very prompt to respond and act on the issue and perhaps more importantly, is always very friendly and accommodating during the process."
              </p>
              <div className="border-t-2 border-charcoal-900 pt-6">
                <p className="font-display font-bold text-yellow-600 text-lg uppercase">Megan</p>
                <p className="font-serif text-stone-500">Inside Towers</p>
              </div>
            </div>
            <div className="bento-card p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="font-serif text-stone-600 text-lg leading-relaxed mb-6 italic">
                "Business Builders has maintained a website that Ethical Markets is very proud of. Enhancements and suggestions are made to keep the site fresh and modern. The Client Care Team provides impeccable and timely client service."
              </p>
              <div className="border-t-2 border-charcoal-900 pt-6">
                <p className="font-display font-bold text-yellow-600 text-lg uppercase">Hazel and LaRae</p>
                <p className="font-serif text-stone-500">Ethical Markets Media</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/testimonials">
              <Button variant="outline" size="lg">
                View More Testimonials
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 band-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="headline-md text-charcoal-900 mb-6">
              SERVING THE <span className="text-yellow-500">GREATER GAINESVILLE AREA</span>
            </h2>
            <p className="text-editorial-lg text-stone-600 max-w-3xl mx-auto">
              We serve businesses throughout Gainesville, Alachua County, and North Central Florida.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Downtown Gainesville", "University Area", "Haile Plantation", "Tioga",
              "Alachua", "Newberry", "High Springs", "Archer",
              "Micanopy", "Waldo", "Hawthorne", "Williston",
              "Ocala", "Lake City", "Starke", "Palatka"
            ].map((area, index) => (
              <div key={index} className="bento-card p-4 text-center">
                <p className="font-display font-bold text-charcoal-900 text-sm uppercase">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 band-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="headline-lg text-white mb-6">
            Ready to Grow Your<br />
            <span className="text-yellow-400">Gainesville Business?</span>
          </h2>
          <p className="text-editorial-lg text-stone-400 mb-12 max-w-3xl mx-auto">
            Schedule a free 15-minute discovery call. We'll discuss your goals, review your current marketing, and show you exactly how we can help your Gainesville business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-quote">
              <Button size="xl">
                GET YOUR FREE QUOTE
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </Link>
            <a href="tel:877-378-6101">
              <Button size="xl" variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-charcoal-900">
                <Phone className="w-5 h-5 mr-2" />
                CALL (877) 378-6101
              </Button>
            </a>
          </div>
        </div>
      </section>

      <MegaFooter />
    </div>
  );
}
