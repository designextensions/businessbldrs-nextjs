"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Target, MessageSquare, FileText, Bot, DollarSign, Clock, TrendingUp } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { LazyImage } from "@/components/ui/lazy-image";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const services = [
  {
    title: "StoryBrand Agency",
    description: "As a StoryBrand Certified Agency, we help you clarify your message so customers listen. We use the proven StoryBrand framework to position your customer as the hero and your brand as the guide.",
    icon: MessageSquare,
    features: [
      "StoryBrand BrandScript development",
      "Customer-focused messaging framework",
      "Sales funnel optimization",
      "One-liner & elevator pitch creation",
    ],
    link: "/storybrand-agency",
    image: "/service-strategy.jpg",
  },
  {
    title: "Marketing Blueprint",
    description: "Don't build your marketing without a blueprint. Our StoryBrand Blueprint packages give you a comprehensive plan covering your website wireframe, email sequences, lead generators, and sales funnels.",
    icon: FileText,
    features: [
      "Messaging Blueprint from $1,950",
      "Website wireframe & content plan",
      "Email sequence strategy",
      "Lead generator development",
    ],
    link: "/storybrand-messaging",
    image: "/service-marketing.jpg",
  },
  {
    title: "AI Blueprint",
    description: "Get a clear AI strategy tailored to your business. We assess your operations, identify automation opportunities, and create a custom workflow plan so you can leverage AI confidently and effectively.",
    icon: Bot,
    features: [
      "AI readiness assessment",
      "Custom workflow planning",
      "Tool & platform recommendations",
      "Implementation roadmap",
    ],
    link: "/ai-blueprint",
    image: "/service-website.jpg",
  },
];

const stats = [
  { number: "26+", label: "Years Experience" },
  { number: "✓", label: "StoryBrand Certified" },
  { number: "100+", label: "Blueprints Delivered" },
  { number: "5★", label: "Star Rating" },
];

const whyPlanFirst = [
  {
    icon: DollarSign,
    title: "Save Money",
    description: "Avoid wasted marketing spend by knowing exactly what to invest in before you write a single check.",
  },
  {
    icon: Clock,
    title: "Save Time",
    description: "No more guessing what works. A clear strategy eliminates trial-and-error so you move faster.",
  },
  {
    icon: TrendingUp,
    title: "Get Results",
    description: "A data-driven approach means every dollar you spend is tied to measurable business outcomes.",
  },
];

export default function ServicesPlanPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="band-dark pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Plan" }
          ]} />

          <div className="grid lg:grid-cols-2 gap-16 items-center mt-8">
            <div>
              <div className="inline-block px-4 py-2 bg-yellow-400 mb-6">
                <span className="label-industrial text-charcoal-900">STEP ONE — PLAN</span>
              </div>
              <h1 className="headline-lg mb-6 leading-tight text-white">
                GET THE RIGHT<br />
                <span className="text-yellow-400">STRATEGY FIRST</span>
              </h1>
              <p className="text-xl lg:text-2xl text-stone-300 leading-relaxed mb-4">
                <strong className="text-white">You wouldn't build a house without a blueprint.</strong> Strategic planning is the foundation of every successful marketing effort. We help you clarify your message, understand your audience, and build a roadmap for growth.
              </p>
              <p className="text-lg text-yellow-400 mb-8 font-semibold">
                StoryBrand Certified. 26+ years of experience. Proven frameworks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/request-quote">
                  <Button className="bg-yellow-400 text-charcoal-900 px-10 py-6 font-display font-bold text-lg uppercase border-2 border-yellow-400 shadow-offset hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-offset-sm transition-all duration-200">
                    GET YOUR FREE QUOTE
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button
                  onClick={() => scrollToSection('services')}
                  className="bg-transparent text-white px-10 py-6 font-display font-bold text-lg uppercase border-2 border-stone-500 hover:border-yellow-400 hover:text-yellow-400 transition-all duration-200"
                >
                  VIEW SERVICES
                </Button>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <LazyImage
                src="/service-strategy.jpg"
                alt="Strategic marketing planning and StoryBrand messaging services"
                className="border-2 border-charcoal-700 shadow-offset w-full"
                style={{ aspectRatio: '800/600', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="band-stone py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bento-card p-6 bg-white text-center">
                <div className="text-4xl lg:text-5xl font-display font-black text-yellow-500 mb-3">{stat.number}</div>
                <p className="text-stone-500 text-sm lg:text-base leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="label-industrial inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-charcoal-900 border-2 border-charcoal-900 shadow-offset-sm mb-6">
              <Target className="w-4 h-4" />
              PLANNING SERVICES
            </span>
            <h2 className="headline-lg text-charcoal-900 mb-4">
              BUILD YOUR <span className="text-yellow-500">FOUNDATION</span>
            </h2>
            <p className="text-editorial text-stone-600 max-w-2xl mx-auto">
              Every great result starts with a great plan. Choose the strategic service that fits your needs.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isReversed = index % 2 !== 0;
              return (
                <div key={service.title} className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={isReversed ? 'lg:order-2' : ''}>
                    <div className="bento-card overflow-hidden">
                      <LazyImage
                        src={service.image}
                        alt={service.title}
                        className="w-full h-72 lg:h-80 object-cover"
                      />
                    </div>
                  </div>
                  <div className={isReversed ? 'lg:order-1' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-yellow-500" />
                      </div>
                      <span className="label-industrial text-stone-500">{`0${index + 1}`}</span>
                    </div>
                    <h3 className="headline-md text-charcoal-900 mb-4">{service.title}</h3>
                    <p className="text-stone-600 mb-6 leading-relaxed">{service.description}</p>
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                          <span className="text-sm font-medium text-charcoal-900">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link href={service.link}>
                      <Button variant="secondary" size="lg">
                        LEARN MORE
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="band-stone py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg text-charcoal-900 mb-6">
              WHY STRATEGY<br />
              <span className="text-yellow-400">COMES FIRST</span>
            </h2>
            <p className="text-xl text-stone-500 max-w-3xl mx-auto">
              Most businesses jump straight into tactics — a new website, social media posts, paid ads — without a plan. That's how money gets wasted.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyPlanFirst.map((item, index) => (
              <div key={index} className="bento-card p-8 bg-white">
                <div className="w-16 h-16 bg-yellow-400 flex items-center justify-center mb-6 shadow-offset-sm border-2 border-charcoal-900">
                  <item.icon className="w-8 h-8 text-charcoal-900" />
                </div>
                <h3 className="font-display text-xl font-bold uppercase mb-4 text-charcoal-900">{item.title}</h3>
                <p className="text-stone-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band-yellow py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="headline-lg text-charcoal-900 mb-4">READY TO BUILD YOUR PLAN?</h2>
          <p className="text-editorial text-charcoal-700 mb-8 max-w-2xl mx-auto">
            Let's create a strategic blueprint that sets your business up for lasting success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-quote">
              <Button className="bg-charcoal-900 text-white px-12 py-6 font-display font-bold text-xl uppercase border-2 border-charcoal-900 shadow-offset hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-offset-sm transition-all duration-200">
                GET A FREE QUOTE
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/schedule-call">
              <Button className="bg-transparent text-charcoal-900 px-12 py-6 font-display font-bold text-xl uppercase border-2 border-charcoal-900 hover:bg-charcoal-900 hover:text-white transition-all duration-200">
                SCHEDULE A CALL
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <MegaFooter />
    </div>
  );
}
