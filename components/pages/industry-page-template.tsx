"use client";
import { useState } from "react";
import Link from "next/link";
import SEOHead from "@/components/ui/seo-head";
import ServicePageSchema from "@/components/ui/service-page-schema";
import ServiceFAQSchema from "@/components/ui/service-faq-schema";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, ChevronDown, HelpCircle, Target, Palette, Megaphone, AlertTriangle } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { LazyImage } from "@/components/ui/lazy-image";
import { useQuery } from "@tanstack/react-query";
import type { LucideIcon } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface PainPoint {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Stat {
  number: string;
  label: string;
}

interface CaseStudyRef {
  title: string;
  slug: string;
  metric: string;
  description: string;
}

interface IndustryPageProps {
  industry: string;
  slug: string;
  heroHeadline: string;
  heroHighlight: string;
  heroDescription: string;
  heroTagline: string;
  heroImage: string;
  heroImageAlt: string;
  stats: Stat[];
  painPoints: PainPoint[];
  problemHeadline: string;
  problemDescription: string;
  guideCredentials: string[];
  portfolioTitles: string[];
  caseStudy?: CaseStudyRef;
  faqs: FAQItem[];
  ctaHeadline: string;
  ctaDescription: string;
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
}

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function IndustryPageTemplate({
  industry,
  slug,
  heroHeadline,
  heroHighlight,
  heroDescription,
  heroTagline,
  heroImage,
  heroImageAlt,
  stats,
  painPoints,
  problemHeadline,
  problemDescription,
  guideCredentials,
  portfolioTitles,
  caseStudy,
  faqs,
  ctaHeadline,
  ctaDescription,
  seo,
}: IndustryPageProps) {
  const [openFAQs, setOpenFAQs] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    setOpenFAQs((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const { data: portfolioItems } = useQuery({
    queryKey: ["/api/portfolio", "industry", slug],
    queryFn: async () => {
      const res = await fetch("/api/portfolio");
      if (!res.ok) return [];
      const items = await res.json();
      return items.filter((item: any) =>
        portfolioTitles.some(
          (title: string) =>
            item.title?.toLowerCase().includes(title.toLowerCase()) ||
            title.toLowerCase().includes(item.title?.toLowerCase())
        )
      );
    },
  });

  const planSteps = [
    {
      number: "01",
      title: "PLAN YOUR STRATEGY",
      description: `We start by understanding your ${industry.toLowerCase()} business, your ideal customers, and what makes you different. Using the StoryBrand framework, we craft a message that resonates.`,
      icon: Target,
      link: "/services/plan",
    },
    {
      number: "02",
      title: "PRODUCE YOUR ASSETS",
      description: `From websites to videos to branding, we create the marketing assets your ${industry.toLowerCase()} business needs to stand out and convert visitors into customers.`,
      icon: Palette,
      link: "/services/produce",
    },
    {
      number: "03",
      title: "PROMOTE YOUR BUSINESS",
      description: `We put your ${industry.toLowerCase()} business in front of the right people through SEO, social media, paid advertising, and email marketing that drives measurable results.`,
      icon: Megaphone,
      link: "/services/promote",
    },
  ];

  return (
    <div className="min-h-screen">
      <ServicePageSchema
        serviceName={`${industry} Marketing Services`}
        description={seo.description}
        slug={`industries/${slug}`}
        serviceType={`${industry} Marketing`}
      />
      <ServiceFAQSchema
        serviceName={`${industry} Marketing`}
        slug={`industries/${slug}`}
        faqs={faqs}
      />
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl={`https://businessbldrs.com/industries/${slug}`}
      />
      <Navigation />

      <section className="band-dark pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Industries", href: "/#industries" },
              { label: industry },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-16 items-center mt-8">
            <div>
              <div className="inline-block px-4 py-2 bg-yellow-400 mb-6">
                <span className="label-industrial text-charcoal-900">
                  {industry.toUpperCase()} MARKETING
                </span>
              </div>
              <h1 className="headline-lg mb-6 leading-tight text-white">
                {heroHeadline}
                <br />
                <span className="text-yellow-400">{heroHighlight}</span>
              </h1>
              <p className="text-xl lg:text-2xl text-stone-300 leading-relaxed mb-4">
                <strong className="text-white">{heroDescription.split(". ")[0]}.</strong>{" "}
                {heroDescription.split(". ").slice(1).join(". ")}
              </p>
              <p className="text-lg text-yellow-400 mb-8 font-semibold">
                {heroTagline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/request-quote">
                  <Button className="bg-yellow-400 text-charcoal-900 px-10 py-6 font-display font-bold text-lg uppercase border-2 border-yellow-400 shadow-offset hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-offset-sm transition-all duration-200">
                    GET YOUR FREE QUOTE
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button
                  onClick={() => scrollToSection("problem")}
                  className="bg-transparent text-white px-10 py-6 font-display font-bold text-lg uppercase border-2 border-stone-500 hover:border-yellow-400 hover:text-yellow-400 transition-all duration-200"
                >
                  LEARN MORE
                </Button>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <LazyImage
                src={heroImage}
                alt={heroImageAlt}
                className="border-2 border-charcoal-700 shadow-offset w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="band-stone py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bento-card p-6 bg-white text-center"
              >
                <div className="text-3xl lg:text-4xl font-display font-black text-yellow-500 mb-3">
                  {stat.number}
                </div>
                <p className="text-stone-500 text-sm lg:text-base leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="problem" className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="label-industrial inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-charcoal-900 border-2 border-charcoal-900 shadow-offset-sm mb-6">
              <AlertTriangle className="w-4 h-4" />
              THE PROBLEM
            </span>
            <h2 className="headline-lg text-charcoal-900 mb-4">
              {problemHeadline}
            </h2>
            <p className="text-editorial text-stone-600 max-w-2xl mx-auto">
              {problemDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div key={index} className="bento-card p-8 bg-white">
                  <div className="w-16 h-16 bg-yellow-400 flex items-center justify-center mb-6 shadow-offset-sm border-2 border-charcoal-900">
                    <Icon className="w-8 h-8 text-charcoal-900" />
                  </div>
                  <h3 className="font-display text-xl font-bold uppercase mb-4 text-charcoal-900">
                    {point.title}
                  </h3>
                  <p className="text-stone-500 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="band-dark py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="label-industrial text-yellow-400 mb-4 block">
                YOUR GUIDE
              </span>
              <h2 className="headline-lg text-white mb-6">
                WE KNOW{" "}
                <span className="text-yellow-400">{industry.toUpperCase()}</span>
              </h2>
              <p className="text-xl text-stone-300 leading-relaxed mb-8">
                With over 26 years of marketing experience and as a StoryBrand
                Certified Agency, we've helped {industry.toLowerCase()} businesses
                across the country clarify their message and grow. We understand
                your industry — and we know what works.
              </p>
              <div className="space-y-4">
                {guideCredentials.map((credential, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-white font-medium">{credential}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              {planSteps.map((step) => {
                const StepIcon = step.icon;
                return (
                  <Link key={step.number} href={step.link}>
                    <div className="bento-card p-6 bg-charcoal-800/50 border-charcoal-700 hover:border-yellow-400/50 transition-all duration-200 group cursor-pointer mb-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center flex-shrink-0 border-2 border-yellow-400">
                          <StepIcon className="w-6 h-6 text-charcoal-900" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="label-industrial text-yellow-400 text-xs">
                              STEP {step.number}
                            </span>
                          </div>
                          <h3 className="font-display font-bold text-lg text-white uppercase mb-2">
                            {step.title}
                          </h3>
                          <p className="text-stone-400 text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-stone-500 group-hover:text-yellow-400 transition-colors flex-shrink-0 mt-1" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {(portfolioItems && portfolioItems.length > 0) || caseStudy ? (
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="label-industrial inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-charcoal-900 border-2 border-charcoal-900 shadow-offset-sm mb-6">
                OUR WORK
              </span>
              <h2 className="headline-lg text-charcoal-900 mb-4">
                {industry.toUpperCase()}{" "}
                <span className="text-yellow-500">SUCCESS STORIES</span>
              </h2>
              <p className="text-editorial text-stone-600 max-w-2xl mx-auto">
                Real results from real {industry.toLowerCase()} businesses we've
                helped grow.
              </p>
            </div>

            {caseStudy && (
              <Link href={`/case-studies/${caseStudy.slug}`}>
                <div className="bento-card p-8 lg:p-12 bg-charcoal-900 text-white mb-12 group hover:shadow-offset-yellow transition-all duration-200 cursor-pointer">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <span className="label-industrial text-yellow-400 mb-4 block">
                        FEATURED CASE STUDY
                      </span>
                      <h3 className="font-display font-black text-3xl lg:text-4xl uppercase mb-4">
                        {caseStudy.title}
                      </h3>
                      <p className="text-stone-300 text-lg leading-relaxed mb-6">
                        {caseStudy.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-yellow-400 font-display font-bold uppercase group-hover:gap-3 transition-all">
                        READ CASE STUDY
                        <ArrowRight className="w-5 h-5" />
                      </span>
                    </div>
                    <div className="text-center">
                      <div className="text-6xl lg:text-8xl font-display font-black text-yellow-400">
                        {caseStudy.metric}
                      </div>
                      <p className="text-stone-400 text-lg mt-2">
                        growth achieved
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {portfolioItems && portfolioItems.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioItems.slice(0, 6).map((item: any) => (
                  <div key={item.id} className="bento-card overflow-hidden group">
                    {item.image && (
                      <div className="h-48 overflow-hidden">
                        <LazyImage
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="font-display font-bold text-lg text-charcoal-900 uppercase mb-2">
                        {item.title}
                      </h3>
                      {item.description && (
                        <p className="text-stone-500 text-sm leading-relaxed mb-4">
                          {item.description}
                        </p>
                      )}
                      <div className="flex flex-wrap gap-2">
                        {item.categories?.map((cat: string, i: number) => (
                          <span
                            key={i}
                            className="text-xs font-display font-bold uppercase px-2 py-1 bg-stone-100 text-stone-600"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ) : null}

      <section className="bg-stone-100 py-20 lg:py-28" id="faq">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[380px_1fr] gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <div className="bg-white p-8 lg:p-10 border-b-4 border-yellow-400">
                <span className="label-industrial inline-flex items-center gap-2 text-yellow-600 mb-6">
                  <HelpCircle className="w-4 h-4" />
                  COMMON QUESTIONS
                </span>
                <h2 className="font-display font-black text-4xl lg:text-5xl text-charcoal-900 uppercase tracking-tight leading-none mb-6">
                  {industry.toUpperCase()}
                  <br />
                  MARKETING
                  <br />
                  <span className="text-yellow-500">FAQ</span>
                </h2>
                <p className="text-stone-600 font-serif text-lg leading-relaxed mb-8">
                  Answers to common questions about marketing for{" "}
                  {industry.toLowerCase()} businesses.
                </p>
                <Link href="/request-quote">
                  <Button className="w-full sm:w-auto justify-between">
                    ASK A QUESTION
                    <ArrowRight className="w-5 h-5 ml-3" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-stone-300 last:border-b-0"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left py-6 flex justify-between items-center gap-4 focus:outline-none group"
                    aria-expanded={openFAQs.includes(index)}
                  >
                    <h3 className="font-display font-bold text-charcoal-900 text-base lg:text-lg pr-4 group-hover:text-yellow-600 transition-colors">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 text-stone-400 transition-transform duration-300 ${
                        openFAQs.includes(index) ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFAQs.includes(index) && (
                    <div className="pb-6 animate-in fade-in slide-in-from-top-2 duration-200">
                      <p className="text-stone-600 leading-relaxed font-serif pr-12">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="band-yellow py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="headline-lg text-charcoal-900 mb-6">{ctaHeadline}</h2>
          <p className="text-xl text-charcoal-700 mb-8 max-w-2xl mx-auto">
            {ctaDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-quote">
              <Button className="bg-charcoal-900 text-white px-12 py-6 font-display font-bold text-xl uppercase border-2 border-charcoal-900 shadow-offset hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-offset-sm transition-all duration-200">
                GET A FREE QUOTE
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
            </Link>
            <Link href="/services">
              <Button className="bg-transparent text-charcoal-900 px-12 py-6 font-display font-bold text-xl uppercase border-2 border-charcoal-900 hover:bg-charcoal-900 hover:text-white transition-all duration-200">
                VIEW ALL SERVICES
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <MegaFooter />
    </div>
  );
}
