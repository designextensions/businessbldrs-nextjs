"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Target, MessageSquare, FileText, Bot } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { LazyImage } from "@/components/ui/lazy-image";

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

export default function ServicesPlanPage() {
  return (
    <>
      <Navigation />
      <main>
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Plan", href: "/services/plan" },
          ]}
        />

        <section className="bg-charcoal-900 py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-yellow-400 border-2 border-yellow-400 flex items-center justify-center">
                  <span className="font-display font-black text-2xl text-charcoal-900">01</span>
                </div>
                <span className="label-industrial text-yellow-400">Step One</span>
              </div>
              <h1 className="font-display font-black text-5xl lg:text-7xl text-white uppercase tracking-tight leading-[0.9] mb-6">
                PLAN
              </h1>
              <p className="text-xl lg:text-2xl text-stone-300 mb-4 font-display uppercase tracking-wide">
                Get the Right Strategy
              </p>
              <p className="text-lg text-stone-400 max-w-2xl mb-8">
                You wouldn't build a house without a blueprint. Strategic planning is the foundation of every successful marketing effort. We help you clarify your message, understand your audience, and build a roadmap for growth.
              </p>
              <Link href="/request-quote">
                <Button size="xl" className="bg-yellow-400 text-charcoal-900 hover:bg-yellow-300 border-2 border-yellow-400 font-bold">
                  GET YOUR FREE QUOTE
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-28">
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

        <section className="band-yellow py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="headline-lg text-charcoal-900 mb-4">READY TO BUILD YOUR PLAN?</h2>
            <p className="text-editorial text-charcoal-700 mb-8 max-w-2xl mx-auto">
              Let's create a strategic blueprint that sets your business up for lasting success.
            </p>
            <Link href="/request-quote">
              <Button variant="secondary" size="xl">
                GET A FREE QUOTE
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <MegaFooter />
    </>
  );
}
