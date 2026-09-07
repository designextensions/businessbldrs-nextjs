"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Shield, Scale, FileSearch, Eye, MapPin, Gavel, Wrench, AlertTriangle } from "lucide-react";
import Breadcrumbs from "@/components/ui/breadcrumbs";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const stats = [
  { number: "15,332", label: "ADA website lawsuits filed in federal court over the past four years" },
  { number: "4,000", label: "Cases filed in 2025 alone, and the pace is rising" },
  { number: "35+", label: "Jacksonville businesses sued by a single Florida attorney" },
  { number: "$20,000", label: "Typical settlement, before your own legal fees" },
];

const floridaCities = [
  "Jacksonville", "St. Augustine", "Orlando", "Tampa", "Miami", "Fort Lauderdale",
  "Gainesville", "Daytona Beach", "Palm Coast", "Ponte Vedra", "Orange Park", "Tallahassee",
];

const whatWeFix = [
  {
    icon: Eye,
    title: "Screen reader barriers",
    description: "Missing image descriptions, unlabeled buttons and form fields, and menus a blind visitor cannot open. These are the defects named in almost every Florida complaint.",
  },
  {
    icon: FileSearch,
    title: "Keyboard and focus problems",
    description: "Every link, button, and form has to work without a mouse. We fix focus order, skip links, and hidden traps that stop keyboard users cold.",
  },
  {
    icon: Wrench,
    title: "Contrast, text, and media",
    description: "Low-contrast text, videos without captions, PDFs nobody can read with assistive tech. We remediate the source, not just the surface.",
  },
  {
    icon: Shield,
    title: "Ongoing monitoring",
    description: "Compliance is not a one-time fix. Every content update can break it. We scan monthly and send you a report you can hand to an attorney.",
  },
];

const steps = [
  {
    number: "01",
    title: "Free Florida risk scan",
    description: "We run your site against WCAG 2.1 AA and tell you plainly what a plaintiff's firm would find. No obligation.",
  },
  {
    number: "02",
    title: "Remediation",
    description: "Our team fixes the code, the content, and the media. We work on WordPress, HubSpot, Shopify, Webflow, and custom builds.",
  },
  {
    number: "03",
    title: "Statement, monitoring, support",
    description: "You get a published accessibility statement, monthly monitoring, and litigation support if a demand letter ever shows up.",
  },
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
      "Up to 5,000 visits/month",
    ],
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
      "Dedicated account manager",
    ],
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
      "Custom accessibility solutions",
    ],
  },
];

const faqs = [
  {
    q: "Does the ADA really apply to my Florida business website?",
    a: "Courts in Florida have treated business websites as places of public accommodation under Title III of the ADA for years, and the Department of Justice has said the ADA applies to websites. There is no formal federal technical standard for private businesses yet, which is exactly why plaintiffs' firms keep filing. WCAG 2.1 AA is the standard courts, the DOJ, and settlement agreements point to.",
  },
  {
    q: "Why is Florida hit so hard?",
    a: "A small number of law firms and repeat plaintiffs file in the Middle and Southern Districts of Florida because the process is fast and most owners settle. One attorney alone has filed more than 200 suits across the state. Restaurants, medical practices, retailers, and hotels are the most common targets.",
  },
  {
    q: "Will an accessibility widget protect me?",
    a: "No. In 2025 the FTC reached a $1 million settlement with accessiBe over claims that its overlay made sites compliant. Widgets cannot fix code they do not control. We remediate the actual site and use a toolbar only as a convenience layer on top.",
  },
  {
    q: "I already got a demand letter. Is it too late?",
    a: "No, but move fast. Do not ignore it, and do not reply without counsel. Our Growth and Scale plans include a litigation support package: a documented remediation plan and progress reports your attorney can use to negotiate.",
  },
  {
    q: "How long does remediation take?",
    a: "Most small business sites are remediated in two to four weeks. Large sites and sites with lots of PDFs or video take longer. You get a published accessibility statement on day one so your good-faith effort is on record.",
  },
];

export default function AdaComplianceFloridaPage() {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "ADA Website Compliance in Florida",
    "serviceType": "Website accessibility remediation and monitoring",
    "provider": {
      "@type": "Organization",
      "name": "Business Builders",
      "url": "https://businessbldrs.com",
      "address": { "@type": "PostalAddress", "addressLocality": "St. Augustine", "addressRegion": "FL", "addressCountry": "US" },
    },
    "areaServed": { "@type": "State", "name": "Florida" },
    "offers": plans.map((p) => ({
      "@type": "Offer",
      "name": `ADA Compliance - ${p.name}`,
      "price": p.price.replace("$", ""),
      "priceCurrency": "USD",
      "url": p.checkoutUrl,
    })),
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData).replace(/</g, '\\u003c') }}
      />

      {/* Hero - Dark */}
      <section className="band-dark pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "ADA Accessibility", href: "/ada-accessibility" },
            { label: "Florida" },
          ]} />

          <div className="grid lg:grid-cols-2 gap-16 items-center mt-8">
            <div>
              <div className="inline-block px-4 py-2 bg-yellow-400 mb-6">
                <span className="label-industrial text-charcoal-900">FLORIDA ADA WEBSITE COMPLIANCE</span>
              </div>
              <h1 className="headline-lg mb-6 leading-tight text-white">
                ADA WEBSITE COMPLIANCE<br />
                <span className="text-yellow-400">IN FLORIDA</span>
              </h1>
              <p className="text-xl lg:text-2xl text-stone-300 leading-relaxed mb-4">
                <strong className="text-white">Florida is one of the most sued states in the country for inaccessible websites.</strong> One attorney has filed more than 200 suits here. Restaurants, medical practices, and retailers from Jacksonville to Miami are settling for $20,000 or more.
              </p>
              <p className="text-lg text-yellow-400 mb-8 font-semibold">
                We fix the site, publish your accessibility statement, and monitor it every month. Plans from $79/month.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollToSection('pricing')}
                  className="bg-yellow-400 text-charcoal-900 px-10 py-6 font-display font-bold text-lg uppercase border-2 border-yellow-400 shadow-offset hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-offset-sm transition-all duration-200"
                >
                  VIEW PLANS
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Link href="/request-quote">
                  <Button className="bg-transparent text-white px-10 py-6 font-display font-bold text-lg uppercase border-2 border-stone-500 hover:border-yellow-400 hover:text-yellow-400 transition-all duration-200">
                    FREE RISK SCAN
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="bg-charcoal-800 border-2 border-stone-600 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-yellow-400 flex items-center justify-center border-2 border-charcoal-900">
                    <Gavel className="w-8 h-8 text-charcoal-900" />
                  </div>
                  <div>
                    <p className="text-yellow-400 font-display font-bold text-lg uppercase">Florida Lawsuit Watch</p>
                    <p className="text-stone-400 text-sm">Source: Action News Jax analysis of federal filings</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-stone-700 pb-3">
                    <span className="text-stone-400">Suits by one Florida attorney</span>
                    <span className="text-yellow-400 font-display font-bold text-xl">200+</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-stone-700 pb-3">
                    <span className="text-stone-400">Jacksonville businesses sued</span>
                    <span className="text-yellow-400 font-display font-bold text-xl">35+</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-stone-700 pb-3">
                    <span className="text-stone-400">Cases filed by 16 law firms</span>
                    <span className="text-yellow-400 font-display font-bold text-xl">90%</span>
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

      {/* Stats - White */}
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

      {/* Why Florida - Stone */}
      <section className="band-stone py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="headline-lg text-charcoal-900 mb-6">
                WHY FLORIDA BUSINESSES<br />
                <span className="text-yellow-400">GET SUED FIRST</span>
              </h2>
              <p className="text-xl text-stone-500 leading-relaxed mb-6">
                Florida sits in the Eleventh Circuit, where courts have long treated business websites as places of public accommodation under the ADA. There is still no formal federal technical standard for private companies. That gap is what a handful of law firms and repeat plaintiffs exploit.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed mb-6">
                The playbook is simple. A tester visits your site with a screen reader, documents the barriers, and a complaint lands in the Middle or Southern District of Florida. Most owners settle because fighting costs more than paying. Our <Link href="/resources/articles/florida-ada-website-lawsuits-compliance" className="text-yellow-600 font-semibold hover:underline">report on the Florida lawsuit wave</Link> covers the Jacksonville cases in detail.
              </p>
              <div className="flex items-start gap-3 bg-white border-2 border-charcoal-900 p-5 shadow-offset-sm">
                <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <p className="text-stone-700">
                  <strong className="text-charcoal-900">Most targeted in Florida:</strong> restaurants, medical and dental practices, hotels and vacation rentals, retailers, law firms, and real estate offices.
                </p>
              </div>
            </div>
            <div>
              <div className="bento-card p-8 bg-white">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-6 h-6 text-yellow-500" />
                  <h3 className="font-display text-xl font-bold uppercase text-charcoal-900">Serving all of Florida</h3>
                </div>
                <p className="text-stone-600 mb-6">
                  Business Builders has been headquartered in St. Augustine since 1999. We work with Florida businesses in every county, remotely or on site in Northeast Florida.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {floridaCities.map((city) => (
                    <div key={city} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                      <span className="text-sm font-medium text-charcoal-900">{city}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we fix - Dark */}
      <section id="features" className="band-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg text-white mb-6">
              WHAT WE FIX<br />
              <span className="text-yellow-400">AND KEEP FIXED</span>
            </h2>
            <p className="text-xl text-stone-400 max-w-3xl mx-auto">
              Every plan targets WCAG 2.1 AA, the standard named in DOJ guidance and in nearly every Florida settlement agreement.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {whatWeFix.map((item, index) => (
              <div key={index} className="bg-charcoal-800 border-2 border-stone-600 p-8">
                <div className="w-14 h-14 bg-yellow-400 flex items-center justify-center mb-6 border-2 border-charcoal-900">
                  <item.icon className="w-7 h-7 text-charcoal-900" />
                </div>
                <h3 className="text-xl font-display font-bold uppercase text-white mb-3">{item.title}</h3>
                <p className="text-stone-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - Stone */}
      <section id="pricing" className="band-stone py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-charcoal-900 mb-6">
              <span className="label-industrial text-yellow-400">PRICING PLANS</span>
            </div>
            <h2 className="headline-lg text-charcoal-900 mb-6">
              LESS THAN ONE HOUR<br />
              <span className="text-yellow-400">OF A DEFENSE ATTORNEY</span>
            </h2>
            <p className="text-xl text-stone-500 max-w-2xl mx-auto">
              Month to month. Cancel anytime. Same plans as our <Link href="/ada-accessibility" className="text-yellow-600 font-semibold hover:underline">ADA compliance service</Link>, priced for Florida small businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`bento-card p-8 relative ${plan.popular ? 'bg-charcoal-900 text-white border-yellow-400' : 'bg-white'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-400 border-2 border-charcoal-900">
                    <span className="label-industrial text-charcoal-900">MOST POPULAR</span>
                  </div>
                )}
                <h3 className={`font-display text-2xl font-bold uppercase mb-2 ${plan.popular ? 'text-yellow-400' : 'text-charcoal-900'}`}>{plan.name}</h3>
                <p className={`text-sm mb-6 ${plan.popular ? 'text-stone-300' : 'text-stone-500'}`}>{plan.subtitle}</p>
                <div className="mb-8">
                  <span className={`text-5xl font-display font-black ${plan.popular ? 'text-white' : 'text-charcoal-900'}`}>{plan.price}</span>
                  <span className={plan.popular ? 'text-stone-300' : 'text-stone-500'}>/month</span>
                </div>
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <span className={`text-sm ${plan.popular ? 'text-stone-200' : 'text-charcoal-900'}`}>{feature}</span>
                    </div>
                  ))}
                </div>
                <a href={plan.checkoutUrl} target="_blank" rel="noopener noreferrer" className="block">
                  <Button className={`w-full py-6 font-display font-bold uppercase border-2 transition-all duration-200 ${plan.popular ? 'bg-yellow-400 text-charcoal-900 border-yellow-400 hover:bg-yellow-300' : 'bg-charcoal-900 text-white border-charcoal-900 hover:bg-charcoal-800'}`}>
                    GET STARTED
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process - White */}
      <section className="band-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg text-charcoal-900 mb-6">
              HOW IT WORKS
            </h2>
            <p className="text-xl text-stone-500 max-w-2xl mx-auto">
              Three steps from exposed to protected. We do the work.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bento-card p-8 text-center">
                <div className="w-16 h-16 bg-yellow-400 flex items-center justify-center mx-auto mb-6 border-2 border-charcoal-900 shadow-offset-sm">
                  <span className="text-2xl font-display font-black text-charcoal-900">{step.number}</span>
                </div>
                <h3 className="text-xl font-display font-bold uppercase text-charcoal-900 mb-4">{step.title}</h3>
                <p className="text-stone-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Stone */}
      <section className="band-stone py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="headline-lg text-charcoal-900 mb-4">
              FLORIDA ADA<br />
              <span className="text-yellow-400">QUESTIONS, ANSWERED</span>
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((f, i) => (
              <div key={i} className="bento-card p-8 bg-white">
                <div className="flex items-start gap-4">
                  <Scale className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-lg font-bold uppercase text-charcoal-900 mb-3">{f.q}</h3>
                    <p className="text-stone-600 leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-stone-500 mt-10">
            This page is general information, not legal advice. If you have received a demand letter or complaint, talk to a Florida attorney.
          </p>
        </div>
      </section>

      {/* Bottom CTA - Yellow */}
      <section className="band-yellow py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="headline-lg text-charcoal-900 mb-6">
            GET COMPLIANT BEFORE<br />
            THE LETTER ARRIVES
          </h2>
          <p className="text-xl text-charcoal-700 mb-8 max-w-2xl mx-auto">
            A year of monitoring costs less than one settlement. Start with the plan that fits your traffic, or ask for a free risk scan first.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection('pricing')}
              className="bg-charcoal-900 text-white px-12 py-6 font-display font-bold text-xl uppercase border-2 border-charcoal-900 shadow-offset hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-offset-sm transition-all duration-200"
            >
              VIEW PLANS
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
            <Link href="/request-quote">
              <Button className="bg-transparent text-charcoal-900 px-12 py-6 font-display font-bold text-xl uppercase border-2 border-charcoal-900 hover:bg-charcoal-900 hover:text-white transition-all duration-200">
                FREE RISK SCAN
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
