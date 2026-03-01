"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Megaphone, TrendingUp, Search, BarChart3, Settings } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { LazyImage } from "@/components/ui/lazy-image";

const services = [
  {
    title: "Marketing Services",
    description: "Full-service marketing strategy and execution that drives measurable results. We handle everything from campaign planning to analytics so you can focus on running your business.",
    icon: TrendingUp,
    features: [
      "Comprehensive marketing strategy",
      "Campaign planning & execution",
      "Performance analytics & reporting",
      "Email marketing & automation",
    ],
    link: "/marketing-services",
    image: "/service-marketing.jpg",
  },
  {
    title: "SEO Services",
    description: "Get found by the customers who are actively searching for what you offer. Our search engine optimization strategies drive organic traffic and put your business at the top of search results.",
    icon: Search,
    features: [
      "Technical SEO audits",
      "On-page & off-page optimization",
      "Local SEO & Google Business Profile",
      "Content strategy for search",
    ],
    link: "/seo-services",
    image: "/service-website.jpg",
  },
  {
    title: "Social Media Marketing",
    description: "Engage your audience where they spend their time. We create and manage social media strategies that build community, drive engagement, and generate leads across all major platforms.",
    icon: BarChart3,
    features: [
      "Platform-specific content strategy",
      "Community management & engagement",
      "Paid social advertising",
      "Analytics & performance tracking",
    ],
    link: "/social-media-marketing",
    image: "/service-strategy.jpg",
  },
  {
    title: "HubSpot CRM",
    description: "Maximize your investment in HubSpot with expert setup, customization, and ongoing management. As a HubSpot Platinum Partner, we help you automate your sales and marketing pipelines.",
    icon: Settings,
    features: [
      "HubSpot portal setup & migration",
      "Marketing automation workflows",
      "Sales pipeline configuration",
      "Custom reporting dashboards",
    ],
    link: "/hubspot-implementation",
    image: "/service-video-new.jpg",
  },
];

export default function ServicesPromotePage() {
  return (
    <>
      <Navigation />
      <main>
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Promote", href: "/services/promote" },
          ]}
        />

        <section className="bg-charcoal-900 py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-yellow-400 border-2 border-yellow-400 flex items-center justify-center">
                  <span className="font-display font-black text-2xl text-charcoal-900">03</span>
                </div>
                <span className="label-industrial text-yellow-400">Step Three</span>
              </div>
              <h1 className="font-display font-black text-5xl lg:text-7xl text-white uppercase tracking-tight leading-[0.9] mb-6">
                PROMOTE
              </h1>
              <p className="text-xl lg:text-2xl text-stone-300 mb-4 font-display uppercase tracking-wide">
                Reach the Right Audience
              </p>
              <p className="text-lg text-stone-400 max-w-2xl mb-8">
                Great content only works if the right people see it. We use targeted marketing strategies — SEO, social media, paid ads, and CRM automation — to put your business in front of your ideal customers.
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
                <Megaphone className="w-4 h-4" />
                PROMOTION SERVICES
              </span>
              <h2 className="headline-lg text-charcoal-900 mb-4">
                GET IN FRONT OF <span className="text-yellow-500">YOUR CUSTOMERS</span>
              </h2>
              <p className="text-editorial text-stone-600 max-w-2xl mx-auto">
                Targeted marketing that drives traffic, generates leads, and grows your revenue.
              </p>
            </div>

            <div className="space-y-16">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isReversed = index % 2 !== 0;
                return (
                  <div key={service.title} className={`grid lg:grid-cols-2 gap-12 items-center`}>
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
            <h2 className="headline-lg text-charcoal-900 mb-4">READY TO REACH MORE CUSTOMERS?</h2>
            <p className="text-editorial text-charcoal-700 mb-8 max-w-2xl mx-auto">
              Let's build a marketing strategy that puts your business in front of the right people, at the right time.
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
