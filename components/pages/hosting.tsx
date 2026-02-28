"use client";
import Link from "next/link";
import SEOHead from "@/components/ui/seo-head";

import { Button } from "@/components/ui/button";
import { CheckCircle, Server, Shield, Zap, Clock, HardDrive, Globe, Lock, ArrowRight, RefreshCw, Gauge, HeadphonesIcon } from "lucide-react";
;
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function HostingPage() {
  const stats = [
    { number: "99.9%", label: "Guaranteed uptime for your website" },
    { number: "24/7", label: "Server monitoring & threat detection" },
    { number: "Nightly", label: "Automated backups of your entire site" },
    { number: "26+", label: "Years of experience managing websites" }
  ];

  const features = [
    {
      icon: Server,
      title: "Managed Cloud Hosting",
      description: "Enterprise-grade servers optimized for speed and reliability — no shared hosting slowdowns."
    },
    {
      icon: Shield,
      title: "SSL Security Certificates",
      description: "Free SSL certificates included with every plan to encrypt data and boost search rankings."
    },
    {
      icon: HardDrive,
      title: "Nightly Backups",
      description: "Automated nightly backups of your entire website so you're never at risk of data loss."
    },
    {
      icon: Zap,
      title: "Speed Optimization",
      description: "Server-level caching, CDN integration, and performance tuning for fast page loads."
    },
    {
      icon: Lock,
      title: "Hack Repair & Malware Removal",
      description: "If your site is ever compromised, we'll clean it up and restore it at no additional cost."
    },
    {
      icon: RefreshCw,
      title: "Automatic Updates",
      description: "Core software, security patches, and plugin updates applied automatically to keep your site secure."
    },
    {
      icon: Gauge,
      title: "Performance Monitoring",
      description: "Continuous uptime and performance monitoring with instant alerts if anything goes wrong."
    },
    {
      icon: HeadphonesIcon,
      title: "Expert Support",
      description: "Direct access to our hosting team — real people who know your site, not a generic help desk."
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Focus on Your Business",
      description: "Stop worrying about servers, updates, and security patches. We handle the technical side so you can focus on growing your business."
    },
    {
      icon: Globe,
      title: "Fast Load Times, Better SEO",
      description: "Google rewards fast websites with higher rankings. Our optimized hosting ensures your site loads quickly for every visitor."
    },
    {
      icon: Shield,
      title: "Peace of Mind",
      description: "With nightly backups, 24/7 monitoring, and hack repair included, your website is always protected and recoverable."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Choose Your Plan",
      description: "Select a hosting plan that fits your website's traffic and needs. Not sure? We'll help you pick the right one."
    },
    {
      number: "02",
      title: "We Migrate & Set Up",
      description: "Our team handles the full migration from your current host — zero downtime, no hassle on your end."
    },
    {
      number: "03",
      title: "Sit Back & Grow",
      description: "Your site runs fast, stays secure, and gets backed up every night. We monitor everything so you don't have to."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Managed Website Hosting - Fast, Secure & Reliable | Business Builders"
        description="Managed website hosting with 99.9% uptime, nightly backups, SSL security, and expert support. Stop worrying about your server — we handle everything. Plans from $50/month."
        keywords="managed website hosting, web hosting services, secure hosting, WordPress hosting, website hosting St Augustine, fast website hosting, SSL hosting"
        ogImage="/service-website.jpg"
        canonicalUrl="https://businessbldrs.com/hosting"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Managed Website Hosting",
          "provider": {
            "@type": "Organization",
            "name": "Business Builders",
            "url": "https://businessbldrs.com"
          },
          "description": "Managed website hosting with 99.9% uptime, nightly backups, SSL security certificates, hack repair, and expert support.",
          "areaServed": {
            "@type": "State",
            "name": "Florida"
          },
          "offers": {
            "@type": "Offer",
            "price": "50",
            "priceCurrency": "USD",
            "description": "Managed hosting starting at $50/month",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": "50",
              "priceCurrency": "USD",
              "billingIncrement": "P1M"
            }
          }
        }}
      />
      <Navigation />

      {/* Hero Section - Dark */}
      <section className="band-dark pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Managed Hosting" }
          ]} />

          <div className="grid lg:grid-cols-2 gap-16 items-center mt-8">
            <div>
              <div className="inline-block px-4 py-2 bg-yellow-400 mb-6">
                <span className="label-industrial text-charcoal-900">MANAGED HOSTING</span>
              </div>
              <h1 className="headline-lg mb-6 leading-tight text-white">
                WEBSITE HOSTING<br />
                <span className="text-yellow-400">YOU CAN COUNT ON</span>
              </h1>
              <p className="text-xl lg:text-2xl text-stone-300 leading-relaxed mb-4">
                <strong className="text-white">Your website is the backbone of your business.</strong> Don't trust it to cheap shared hosting that's slow, insecure, and unreliable.
              </p>
              <p className="text-lg text-yellow-400 mb-8 font-semibold">
                99.9% uptime. Nightly backups. Expert support. Starting at $50/month.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/request-quote">
                  <Button className="bg-yellow-400 text-charcoal-900 px-10 py-6 font-display font-bold text-lg uppercase border-2 border-yellow-400 shadow-offset hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-offset-sm transition-all duration-200">
                    GET STARTED
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button
                  onClick={() => scrollToSection('features')}
                  className="bg-transparent text-white px-10 py-6 font-display font-bold text-lg uppercase border-2 border-stone-500 hover:border-yellow-400 hover:text-yellow-400 transition-all duration-200"
                >
                  LEARN MORE
                </Button>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="bg-charcoal-800 border-2 border-stone-600 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-yellow-400 flex items-center justify-center border-2 border-charcoal-900">
                    <Server className="w-8 h-8 text-charcoal-900" />
                  </div>
                  <div>
                    <p className="text-yellow-400 font-display font-bold text-lg uppercase">What's Included</p>
                    <p className="text-stone-400 text-sm">Every hosting plan comes with:</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    "99.9% uptime guarantee",
                    "SSL security certificate",
                    "Nightly automated backups",
                    "24/7 server monitoring",
                    "Hack repair & malware removal",
                    "Speed optimization & caching",
                    "Expert support from our team"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      <span className="text-stone-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar - White */}
      <section className="band-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-display font-black text-yellow-500 mb-3">{stat.number}</div>
                <p className="text-stone-500 text-sm lg:text-base leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Stone */}
      <section className="band-stone py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg text-charcoal-900 mb-6">
              WHY MANAGED HOSTING<br />
              <span className="text-yellow-400">MATTERS FOR YOUR BUSINESS</span>
            </h2>
            <p className="text-xl text-stone-500 max-w-3xl mx-auto">
              Your website's performance directly impacts your bottom line. Slow load times, downtime, and security breaches cost you customers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bento-card p-8 bg-white">
                <div className="w-16 h-16 bg-yellow-400 flex items-center justify-center mb-6 shadow-offset-sm border-2 border-charcoal-900">
                  <benefit.icon className="w-8 h-8 text-charcoal-900" />
                </div>
                <h3 className="font-display text-xl font-bold uppercase mb-4 text-charcoal-900">{benefit.title}</h3>
                <p className="text-stone-500 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid - White */}
      <section id="features" className="band-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 border-2 border-charcoal-900 mb-6">
              <span className="label-industrial text-charcoal-900">WHAT'S INCLUDED</span>
            </div>
            <h2 className="headline-lg text-charcoal-900 mb-6">
              EVERYTHING YOUR<br />
              <span className="text-yellow-400">WEBSITE NEEDS</span>
            </h2>
            <p className="text-xl text-stone-500 max-w-3xl mx-auto">
              We don't just give you a server and walk away. Our managed hosting includes everything to keep your site fast, secure, and always online.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bento-card p-6 bg-white">
                <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center mb-4 border-2 border-charcoal-900">
                  <feature.icon className="w-6 h-6 text-charcoal-900" />
                </div>
                <h3 className="font-display text-base font-bold uppercase mb-2 text-charcoal-900">{feature.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA - Stone */}
      <section className="band-stone py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="headline-lg text-charcoal-900 mb-6">
                SIMPLE, TRANSPARENT<br />
                <span className="text-yellow-400">HOSTING PRICING</span>
              </h2>
              <p className="text-xl text-stone-500 leading-relaxed mb-6">
                Our managed hosting plans start at <strong className="text-charcoal-900">$50/month</strong> and include everything listed above — no hidden fees, no surprise charges.
              </p>
              <p className="text-lg text-stone-500 leading-relaxed mb-8">
                Need maintenance and support on top of hosting? Check out our <Link href="/maintenance"><span className="text-yellow-500 font-semibold hover:text-yellow-600 underline">maintenance plans</span></Link> which bundle hosting with ongoing WordPress updates, security, and development support.
              </p>
              <Link href="/request-quote">
                <Button className="bg-yellow-400 text-charcoal-900 px-10 py-6 font-display font-bold text-lg uppercase border-2 border-charcoal-900 shadow-offset hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-offset-sm transition-all duration-200">
                  GET A HOSTING QUOTE
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="bento-card p-8 bg-white">
              <div className="text-center mb-8">
                <p className="text-stone-500 text-sm uppercase tracking-wider mb-2">Starting at</p>
                <div className="text-6xl font-display font-black text-yellow-500 mb-2">$50</div>
                <p className="text-stone-400">per month</p>
              </div>
              <ul className="space-y-3">
                {[
                  "99.9% uptime guarantee",
                  "SSL certificate included",
                  "Nightly automated backups",
                  "24/7 monitoring & alerts",
                  "Hack repair at no extra cost",
                  "Speed & caching optimization",
                  "Expert support team"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-stone-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Dark */}
      <section className="band-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg text-white mb-6">
              GET STARTED<br />
              <span className="text-yellow-400">IN 3 EASY STEPS</span>
            </h2>
            <p className="text-xl text-stone-400 max-w-2xl mx-auto">
              Switching to managed hosting is painless — we handle the migration so you don't have to lift a finger.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-charcoal-800 border-2 border-stone-600 p-8 text-center">
                <div className="w-16 h-16 bg-yellow-400 flex items-center justify-center mx-auto mb-6 border-2 border-charcoal-900">
                  <span className="text-2xl font-display font-black text-charcoal-900">{step.number}</span>
                </div>
                <h3 className="text-xl font-display font-bold uppercase text-white mb-4">{step.title}</h3>
                <p className="text-stone-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA - Yellow */}
      <section className="band-yellow py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="headline-lg text-charcoal-900 mb-6">
            STOP WORRYING ABOUT<br />
            YOUR WEBSITE
          </h2>
          <p className="text-xl text-charcoal-700 mb-8 max-w-2xl mx-auto">
            Let us handle the hosting so you can focus on what matters — running your business and serving your customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-quote">
              <Button className="bg-charcoal-900 text-white px-12 py-6 font-display font-bold text-xl uppercase border-2 border-charcoal-900 shadow-offset hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-offset-sm transition-all duration-200">
                GET A FREE CONSULTATION
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
            </Link>
            <Link href="/maintenance">
              <Button className="bg-transparent text-charcoal-900 px-12 py-6 font-display font-bold text-xl uppercase border-2 border-charcoal-900 hover:bg-charcoal-900 hover:text-white transition-all duration-200">
                VIEW MAINTENANCE PLANS
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <MegaFooter />
    </div>
  );
}
