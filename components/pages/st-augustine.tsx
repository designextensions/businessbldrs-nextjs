"use client";
import Link from "next/link";
import SEOHead from "@/components/ui/seo-head";

import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Search, MessageSquare, Palette, Video, Smartphone, Settings, MapPin, Phone, Star, CheckCircle, Clock, Users } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { CertifiedStamp, AnvilStamp } from "@/components/ui/vintage-stamps";
const stAugustineImage = "/attached_assets/services-st-augustine-img_1754613904507.webp";
import { getBreadcrumbSchema, BASE_URL, localBusinessSchema } from "@/lib/seo-config";

export default function StAugustine() {
  const services = [
    {
      icon: <Globe className="w-8 h-8 text-charcoal-900" />,
      title: "Website Design",
      description: "Custom, conversion-focused websites built for St. Augustine businesses. Responsive design, fast load times, and SEO-ready from day one.",
      href: "/website-design"
    },
    {
      icon: <Search className="w-8 h-8 text-charcoal-900" />,
      title: "SEO Services",
      description: "Dominate local search results in St. Augustine. We optimize your site for Google Maps, local keywords, and organic rankings.",
      href: "/seo-services"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-charcoal-900" />,
      title: "StoryBrand Messaging",
      description: "Clarify your message so St. Augustine customers instantly understand what you offer and why it matters.",
      href: "/storybrand-messaging"
    },
    {
      icon: <Palette className="w-8 h-8 text-charcoal-900" />,
      title: "Branding & Logos",
      description: "Build a brand identity that stands out in the St. Augustine market. Logo design, brand guides, and visual strategy.",
      href: "/branding-logos"
    },
    {
      icon: <Video className="w-8 h-8 text-charcoal-900" />,
      title: "Video Production",
      description: "Professional video production filmed right here in Northeast Florida. Tell your story with compelling visuals.",
      href: "/video-production"
    },
    {
      icon: <Search className="w-8 h-8 text-charcoal-900" />,
      title: "Marketing Services",
      description: "Full-service digital marketing including Google Ads, social media, email campaigns, and content strategy.",
      href: "/marketing-services"
    },
    {
      icon: <Settings className="w-8 h-8 text-charcoal-900" />,
      title: "HubSpot CRM",
      description: "As a HubSpot Platinum Partner, we implement and optimize CRM solutions for St. Augustine businesses.",
      href: "/hubspot-implementation"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-charcoal-900" />,
      title: "App Development",
      description: "Custom web and mobile applications built to streamline operations and engage your customers.",
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
    "name": "Business Builders - St. Augustine Marketing Agency",
    "image": "https://businessbldrs.com/logo.png",
    "url": "https://businessbldrs.com/st-augustine",
    "telephone": "+1-877-378-6101",
    "priceRange": "$$",
    "description": "St. Augustine marketing agency providing website design, SEO, branding, and digital marketing services since 1999. Located at 701 Market St, Suite 101.",
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
        "name": "St. Augustine",
        "sameAs": "https://en.wikipedia.org/wiki/St._Augustine,_Florida"
      },
      {
        "@type": "City",
        "name": "St. Augustine Beach"
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
      getBreadcrumbSchema("St. Augustine", "/st-augustine"),
      {
        "@type": "WebPage",
        "name": "St. Augustine Marketing Agency | Business Builders",
        "description": "Business Builders is a full-service marketing agency based in St. Augustine, FL since 1999. Website design, SEO, branding, video production, and digital marketing.",
        "url": "https://businessbldrs.com/st-augustine"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-stone-50 text-charcoal-900">
      <SEOHead
        title="St. Augustine Marketing Agency | Business Builders"
        description="Business Builders is St. Augustine's trusted marketing agency since 1999. Website design, SEO, branding, video production & digital marketing. 701 Market St. Call 877-378-6101."
        keywords="st augustine marketing agency, st augustine web design, st augustine seo, marketing company st augustine fl, st augustine digital marketing, web designer st augustine, st augustine advertising agency, marketing agency near me st augustine"
        canonicalUrl={`${BASE_URL}/st-augustine`}
        structuredData={structuredData}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[100vh] flex items-center band-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${stAugustineImage}')`,
          }}
        />
        <div className="absolute inset-0 bg-white/85" />

        <CertifiedStamp className="absolute top-20 -right-10 w-64 h-64 opacity-15 hidden lg:block" />
        <AnvilStamp className="absolute bottom-20 -left-10 w-56 h-56 opacity-10 hidden lg:block" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Breadcrumbs items={[{ label: "St. Augustine" }]} />
          <div className="max-w-4xl mx-auto text-center">
            <span className="label-industrial text-yellow-600 border-2 border-yellow-600 px-4 py-2 inline-block mb-6">
              SINCE 1999 IN ST. AUGUSTINE
            </span>
            <h1 className="headline-xl text-charcoal-900 mb-8">
              St. Augustine's Trusted<br />
              <span className="text-yellow-500">Marketing Agency</span>
            </h1>
            <p className="text-editorial-lg text-stone-600 mb-8 max-w-3xl mx-auto">
              Business Builders has been helping St. Augustine businesses grow since 1999. From our office on Market Street, we deliver website design, SEO, branding, video production, and full-service digital marketing that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/request-quote">
                <Button size="xl">
                  GET A FREE QUOTE
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>
              </Link>
              <a href="tel:877-378-6101">
                <Button size="xl" variant="outline">
                  <Phone className="w-5 h-5 mr-2" />
                  (877) 378-6101
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 band-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustSignals.map((signal, index) => (
              <div key={index} className="text-center">
                <div className="font-display font-black text-5xl text-yellow-400 mb-2">{signal.number}</div>
                <p className="font-display font-bold text-white uppercase tracking-wide text-sm">{signal.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Local Focus */}
      <section className="py-20 band-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="headline-lg text-charcoal-900 mb-8">
                Your Neighbors in<br />
                <span className="text-yellow-500">St. Augustine, Florida</span>
              </h2>
              <div className="space-y-6 font-serif text-lg text-stone-600 leading-relaxed">
                <p>
                  Business Builders isn't just another agency that happens to serve St. Augustine -- we're <strong className="text-charcoal-900">part of this community</strong>. Founded in 1999 while our CEO Jay Owen was a student at Nease High School, we've grown alongside the businesses and families of St. Johns County for over 26 years.
                </p>
                <p>
                  Our office at <strong className="text-charcoal-900">701 Market Street, Suite 101</strong> is in the heart of St. Augustine. We understand the local market, the seasonal tourism patterns, and what it takes for businesses to thrive in Northeast Florida.
                </p>
                <p>
                  As a <strong className="text-charcoal-900">HubSpot Platinum Partner</strong> and <strong className="text-charcoal-900">StoryBrand Certified Agency</strong>, we bring world-class marketing tools and frameworks to local businesses -- without the big-city price tag.
                </p>
              </div>
              <div className="mt-8 flex items-start gap-3">
                <MapPin className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-display font-bold text-charcoal-900">701 Market St, Suite 101</p>
                  <p className="font-serif text-stone-600">St. Augustine, FL 32095</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={stAugustineImage}
                alt="Castillo de San Marcos - Historic St. Augustine, Florida where Business Builders is headquartered"
                className="w-full border-2 border-charcoal-900 shadow-offset"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 band-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg text-charcoal-900 mb-6">
              MARKETING SERVICES FOR<br />
              <span className="text-yellow-500">ST. AUGUSTINE BUSINESSES</span>
            </h2>
            <p className="text-editorial-lg text-stone-600 max-w-3xl mx-auto">
              From website design to SEO to full-service marketing, we offer everything your St. Augustine business needs to grow online.
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

      {/* Why Choose Us */}
      <section className="py-20 band-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg text-white mb-6">
              WHY ST. AUGUSTINE BUSINESSES<br />
              <span className="text-yellow-400">CHOOSE BUSINESS BUILDERS</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="w-8 h-8 text-charcoal-900" />,
                title: "26+ Years of Experience",
                description: "We've been building websites and growing businesses since before Google was a household name. That depth of experience means fewer mistakes and faster results."
              },
              {
                icon: <MapPin className="w-8 h-8 text-charcoal-900" />,
                title: "Locally Based & Owned",
                description: "We're not a remote agency pretending to know your market. We live, work, and raise families in St. Augustine. Your success is our community's success."
              },
              {
                icon: <Star className="w-8 h-8 text-charcoal-900" />,
                title: "5-Star Reviews",
                description: "Our clients consistently rate us 5 stars on Yelp, Google, and Clutch. We earn trust through transparent communication and measurable results."
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-charcoal-900" />,
                title: "Certified Experts",
                description: "HubSpot Platinum Partner and StoryBrand Certified Guide. We bring industry-leading frameworks to every project we deliver."
              },
              {
                icon: <Users className="w-8 h-8 text-charcoal-900" />,
                title: "Dedicated Team",
                description: "You're not passed off to interns. Our experienced team of designers, developers, and strategists work directly on your projects."
              },
              {
                icon: <Globe className="w-8 h-8 text-charcoal-900" />,
                title: "Full-Service Agency",
                description: "From strategy to execution -- website design, SEO, video production, social media, and more -- all under one roof on Market Street."
              }
            ].map((item, index) => (
              <div key={index} className="bg-charcoal-800 border-2 border-charcoal-700 p-8">
                <div className="w-14 h-14 bg-yellow-400 flex items-center justify-center mb-6 border-2 border-charcoal-900">
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-white uppercase mb-4">{item.title}</h3>
                <p className="font-serif text-stone-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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

      {/* Google Map Section */}
      <section className="py-20 band-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="headline-md text-charcoal-900 mb-8">
                Visit Our <span className="text-yellow-500">St. Augustine Office</span>
              </h2>
              <div className="space-y-6 font-serif text-lg text-stone-600 leading-relaxed">
                <p>
                  We're conveniently located on Market Street in St. Augustine. Stop by for a coffee and a conversation about how we can help grow your business.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-display font-bold text-charcoal-900">Business Builders</p>
                    <p className="font-serif text-stone-600">701 Market St, Suite 101</p>
                    <p className="font-serif text-stone-600">St. Augustine, FL 32095</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <a href="tel:877-378-6101" className="font-display font-bold text-charcoal-900 hover:text-yellow-500 transition-colors">
                    (877) 378-6101
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <p className="font-serif text-stone-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/request-quote">
                  <Button size="lg">
                    Schedule a Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="border-2 border-charcoal-900 shadow-offset overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.123456789!2d-81.3145!3d29.8946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e428e1cdae7e4d%3A0x1f9a5a6e7b8c9d0e!2s701%20Market%20St%20Suite%20101%2C%20St.%20Augustine%2C%20FL%2032095!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Business Builders Office - 701 Market St, St. Augustine, FL"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-20 band-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="headline-md text-charcoal-900 mb-6">
              SERVING <span className="text-yellow-500">NORTHEAST FLORIDA</span> & BEYOND
            </h2>
            <p className="text-editorial-lg text-stone-600 max-w-3xl mx-auto">
              While our office is in St. Augustine, we proudly serve businesses throughout Northeast Florida and across the country.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "St. Augustine", "St. Augustine Beach", "Ponte Vedra Beach", "Jacksonville",
              "Jacksonville Beach", "Nocatee", "Palm Coast", "Flagler Beach",
              "World Golf Village", "Fruit Cove", "Hastings", "Green Cove Springs",
              "Orange Park", "Fleming Island", "Palatka", "Daytona Beach"
            ].map((area, index) => (
              <div key={index} className="bento-card p-4 text-center">
                <p className="font-display font-bold text-charcoal-900 text-sm uppercase">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 band-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="headline-lg text-white mb-6">
            Ready to Grow Your<br />
            <span className="text-yellow-400">St. Augustine Business?</span>
          </h2>
          <p className="text-editorial-lg text-stone-400 mb-12 max-w-3xl mx-auto">
            Schedule a free 15-minute discovery call. We'll discuss your goals, review your current marketing, and show you exactly how we can help your business grow.
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
