"use client";
import Link from "next/link";
import SEOHead from "@/components/ui/seo-head";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, TrendingUp, Users, Scan, Monitor, FileText, Scale, Gavel, Globe, ArrowRight, AlertTriangle, Eye, Keyboard } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function ADAAccessibilityPage() {
  const scannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const containerId = "p66937fb22ddf1fd01bfeb43a";
    const scriptSrc = "https://acsbace.com/embedders/config/66937fb22ddf1fd01bfeb43a";

    if (document.querySelector(`script[src="${scriptSrc}"]`)) return;

    const container = document.getElementById(containerId);
    if (!container) return;

    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;
    container.parentNode?.insertBefore(script, container.nextSibling);

    return () => {
      script.remove();
    };
  }, []);

  const stats = [
    { number: "15,000+", label: "ADA website lawsuits filed in the past 4 years" },
    { number: "4,000", label: "Lawsuits filed in 2025 alone — and growing" },
    { number: "$8T+", label: "Spending power of people with disabilities" },
    { number: "15%", label: "Of the global population lives with a disability" }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Boost Your Reputation",
      description: "Showing that accessibility is a priority enhances your brand perception and gives you a competitive advantage in your market."
    },
    {
      icon: Shield,
      title: "Reduce Your Legal Risk",
      description: "With nearly 4,000 ADA lawsuits filed in 2025, compliance lowers your risk of costly legal action — settlements average $10,000–$20,000+."
    },
    {
      icon: Users,
      title: "Extend Your Market Reach",
      description: "People with disabilities have a spending power of more than $8 trillion. An accessible website means they can find you and buy from you."
    }
  ];

  const features = [
    {
      icon: Scan,
      title: "AI-Powered Scanning & Remediation",
      description: "Automated scans detect and fix accessibility issues across your entire site continuously."
    },
    {
      icon: Eye,
      title: "Screen Reader Support",
      description: "Full compatibility with screen readers so visually impaired users can navigate your site."
    },
    {
      icon: Monitor,
      title: "24-Hour Automatic Updates",
      description: "After any site change, your accessibility fixes update automatically within 24 hours."
    },
    {
      icon: Globe,
      title: "WCAG 2.2 AA Compliance",
      description: "Meets the latest Web Content Accessibility Guidelines for ADA and EAA regulatory compliance."
    },
    {
      icon: Keyboard,
      title: "Keyboard Navigation Support",
      description: "Ensures your site is fully navigable via keyboard for users who can't use a mouse."
    },
    {
      icon: FileText,
      title: "Compliance Reports & Certifications",
      description: "Monthly compliance reports delivered to your inbox with accessibility statement and certifications."
    },
    {
      icon: Gavel,
      title: "Litigation Support",
      description: "Dedicated case manager, claims analysis, and attorney consultation included with Growth and Scale plans."
    },
    {
      icon: Scale,
      title: "Accessibility Toolbar",
      description: "An on-site toolbar that gives your visitors control over font size, contrast, and other display settings."
    }
  ];

  const plans = [
    {
      name: "Micro",
      subtitle: "Up to 5,000 website visits per month",
      price: "$79",
      popular: false,
      checkoutUrl: "https://buy.stripe.com/14A6oz5XG41f6vd6h7f3a0e",
      features: [
        "Automated accessibility scanning",
        "Monthly compliance report",
        "Accessibility toolbar",
        "Accessibility statement & certifications",
        "Up to 5,000 visits/month"
      ]
    },
    {
      name: "Growth",
      subtitle: "Up to 30,000 website visits per month",
      price: "$249",
      popular: true,
      checkoutUrl: "https://buy.stripe.com/14A5kvdq80P3g5Naxnf3a0f",
      features: [
        "Everything in Micro, plus:",
        "Up to 30,000 visits/month",
        "Litigation support package",
        "Priority compliance monitoring",
        "Dedicated account manager"
      ]
    },
    {
      name: "Scale",
      subtitle: "Up to 100,000 website visits per month",
      price: "$629",
      popular: false,
      checkoutUrl: "https://buy.stripe.com/5kQ8wHgCkgO17zh6h7f3a0g",
      features: [
        "Everything in Growth, plus:",
        "Up to 100,000 visits/month",
        "Litigation support package",
        "Advanced compliance reporting",
        "Custom accessibility solutions"
      ]
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Sign Up",
      description: "Choose the plan that fits your website traffic and business needs. We'll handle the rest."
    },
    {
      number: "02",
      title: "We Make You Compliant",
      description: "Our team implements AI-powered accessibility fixes across your entire website — no development work required on your end."
    },
    {
      number: "03",
      title: "Stay Protected",
      description: "Enjoy ongoing compliance monitoring, automatic updates, and peace of mind knowing your business is protected."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="ADA Compliance for Websites - Make Your Site Accessible | Business Builders"
        description="ADA website compliance & accessibility services in Florida. Make your website accessible to all users and reduce legal risk. Plans from $79/month."
        keywords="ADA compliance, website accessibility, ADA compliant websites, accessibility toolbar, legal compliance, disability access"
        ogImage="/service-website.jpg"
        canonicalUrl="https://businessbldrs.com/ada-accessibility"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "ADA Website Compliance Services",
          "provider": {
            "@type": "Organization",
            "name": "Business Builders"
          },
          "description": "Professional ADA compliance services to make websites accessible and reduce legal risk",
          "offers": [
            {
              "@type": "Offer",
              "name": "Micro - ADA Compliance",
              "price": "79",
              "priceCurrency": "USD",
              "description": "Up to 5,000 website visits per month",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "79",
                "priceCurrency": "USD",
                "billingIncrement": "P1M"
              }
            },
            {
              "@type": "Offer",
              "name": "Growth - ADA Compliance",
              "price": "249",
              "priceCurrency": "USD",
              "description": "Up to 30,000 website visits per month with litigation support",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "249",
                "priceCurrency": "USD",
                "billingIncrement": "P1M"
              }
            },
            {
              "@type": "Offer",
              "name": "Scale - ADA Compliance",
              "price": "629",
              "priceCurrency": "USD",
              "description": "Up to 100,000 website visits per month with litigation support",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "629",
                "priceCurrency": "USD",
                "billingIncrement": "P1M"
              }
            }
          ]
        }}
      />
      <Navigation />

      {/* Hero Section - Dark */}
      <section className="band-dark pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "ADA Accessibility" }
          ]} />

          <div className="grid lg:grid-cols-2 gap-16 items-center mt-8">
            <div>
              <div className="inline-block px-4 py-2 bg-yellow-400 mb-6">
                <span className="label-industrial text-charcoal-900">♿ ADA COMPLIANCE</span>
              </div>
              <h1 className="headline-lg mb-6 leading-tight text-white">
                ADA COMPLIANCE<br />
                <span className="text-yellow-400">FOR WEBSITES</span>
              </h1>
              <p className="text-xl lg:text-2xl text-stone-300 leading-relaxed mb-4">
                <strong className="text-white">Florida businesses are being sued for inaccessible websites.</strong> Over 15,000 ADA lawsuits have been filed in the past four years — and the numbers are growing fast.
              </p>
              <p className="text-lg text-yellow-400 mb-8 font-semibold">
                Protect your business. Plans start at just $79/month.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollToSection('pricing')}
                  className="bg-yellow-400 text-charcoal-900 px-10 py-6 font-display font-bold text-lg uppercase border-2 border-yellow-400 shadow-offset hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-offset-sm transition-all duration-200"
                >
                  VIEW PLANS
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
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
                    <AlertTriangle className="w-8 h-8 text-charcoal-900" />
                  </div>
                  <div>
                    <p className="text-yellow-400 font-display font-bold text-lg uppercase">Lawsuit Risk Alert</p>
                    <p className="text-stone-400 text-sm">Based on 2025 federal court data</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-stone-700 pb-3">
                    <span className="text-stone-400">Average settlement cost</span>
                    <span className="text-yellow-400 font-display font-bold text-xl">$20,000+</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-stone-700 pb-3">
                    <span className="text-stone-400">Cases filed by top 16 firms</span>
                    <span className="text-yellow-400 font-display font-bold text-xl">90%</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-stone-700 pb-3">
                    <span className="text-stone-400">FL businesses sued in Jax alone</span>
                    <span className="text-yellow-400 font-display font-bold text-xl">35+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-400">Cost of proactive compliance</span>
                    <span className="text-green-400 font-display font-bold text-xl">$79/mo</span>
                  </div>
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
              HOW CAN ADA COMPLIANCE<br />
              <span className="text-yellow-400">HELP YOUR BUSINESS?</span>
            </h2>
            <p className="text-xl text-stone-500 max-w-3xl mx-auto">
              ADA compliance isn't just about avoiding lawsuits — it's a smart business move that opens doors to new customers and strengthens your brand.
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

      {/* ADA Scanner Tool - Dark */}
      <section className="band-dark py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-2 bg-yellow-400 mb-6">
              <span className="label-industrial text-charcoal-900">FREE WEBSITE SCAN</span>
            </div>
            <h2 className="headline-lg text-white mb-6">
              IS YOUR WEBSITE<br />
              <span className="text-yellow-400">ADA COMPLIANT?</span>
            </h2>
            <p className="text-xl text-stone-300 max-w-2xl mx-auto">
              Find out in seconds. Enter your website below and we'll scan it for accessibility issues — completely free, no obligation.
            </p>
          </div>
          <div className="bg-charcoal-800 border-2 border-stone-600 p-8 lg:p-12" ref={scannerRef}>
            <div id="p66937fb22ddf1fd01bfeb43a"></div>
          </div>
        </div>
      </section>

      {/* What's Included Section - White */}
      <section id="features" className="band-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 border-2 border-charcoal-900 mb-6">
              <span className="label-industrial text-charcoal-900">WHAT'S INCLUDED</span>
            </div>
            <h2 className="headline-lg text-charcoal-900 mb-6">
              ENTERPRISE-GRADE<br />
              <span className="text-yellow-400">ACCESSIBILITY FEATURES</span>
            </h2>
            <p className="text-xl text-stone-500 max-w-3xl mx-auto">
              Our compliance solution uses AI-powered technology to continuously scan, fix, and monitor your website for accessibility issues.
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

      {/* Pricing Section - Stone (KEPT AS-IS) */}
      <section id="pricing" className="py-20 band-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg text-charcoal-900 mb-6">
              ADA COMPLIANCE<br />
              <span className="text-yellow-400">PRICING PLANS</span>
            </h2>
            <p className="text-xl text-stone-500 max-w-2xl mx-auto">Choose the plan that fits your website traffic. All plans include automated compliance scanning and reporting.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`bento-card p-8 text-center relative transition-all duration-300 bg-white ${plan.popular ? 'border-yellow-400 border-[3px] scale-[1.02]' : 'hover:border-yellow-400'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 px-6 py-1 border-2 border-charcoal-900">
                    <span className="label-industrial text-charcoal-900 text-xs">MOST POPULAR</span>
                  </div>
                )}
                <h3 className="text-2xl font-display font-bold uppercase text-charcoal-900 mb-2 mt-2">{plan.name}</h3>
                <p className="text-stone-500 text-sm mb-6">{plan.subtitle}</p>
                <div className="mb-2">
                  <span className="text-5xl font-display font-black text-yellow-500">{plan.price}</span>
                </div>
                <p className="text-stone-400 text-sm mb-8">per month</p>
                <ul className="text-left space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-stone-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href={plan.checkoutUrl} target="_blank" rel="noopener noreferrer" className="block">
                  <Button className={`w-full px-6 py-3 font-display font-bold uppercase border-2 border-charcoal-900 shadow-offset hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-offset-sm transition-all duration-200 ${plan.popular ? 'bg-charcoal-900 text-white hover:bg-charcoal-800' : 'bg-yellow-400 text-charcoal-900'}`}>
                    GET STARTED
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Dark */}
      <section className="band-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg text-white mb-6">
              GET COMPLIANT<br />
              <span className="text-yellow-400">IN 3 EASY STEPS</span>
            </h2>
            <p className="text-xl text-stone-400 max-w-2xl mx-auto">
              We handle the heavy lifting so you can focus on running your business.
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
            PROTECT YOUR<br />
            BUSINESS TODAY
          </h2>
          <p className="text-xl text-charcoal-700 mb-8 max-w-2xl mx-auto">
            The cost of proactive compliance is a fraction of a single lawsuit settlement. Don't wait until you get sued.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-quote">
              <Button className="bg-charcoal-900 text-white px-12 py-6 font-display font-bold text-xl uppercase border-2 border-charcoal-900 shadow-offset hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-offset-sm transition-all duration-200">
                GET A FREE CONSULTATION
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
            </Link>
            <Button
              onClick={() => scrollToSection('pricing')}
              className="bg-transparent text-charcoal-900 px-12 py-6 font-display font-bold text-xl uppercase border-2 border-charcoal-900 hover:bg-charcoal-900 hover:text-white transition-all duration-200"
            >
              VIEW PLANS
            </Button>
          </div>
        </div>
      </section>

      <MegaFooter />
    </div>
  );
}
