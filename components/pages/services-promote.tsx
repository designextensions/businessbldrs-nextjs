"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Megaphone, TrendingUp, Search, BarChart3, Settings, Target, Share2, DollarSign } from "lucide-react";
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
  const stats = [
    { number: "10M+", label: "Impressions Generated" },
    { number: "500+", label: "Campaigns Run" },
    { number: "Platinum", label: "HubSpot Partner" },
    { number: "Certified", label: "Google Partner" },
  ];

  const benefits = [
    {
      icon: Target,
      title: "Data-Driven",
      description: "Every decision backed by analytics. We don't guess — we test, measure, and optimize for maximum impact.",
    },
    {
      icon: Share2,
      title: "Multi-Channel",
      description: "Reach customers everywhere they are. From search to social to email, we build integrated campaigns that work together.",
    },
    {
      icon: DollarSign,
      title: "Measurable ROI",
      description: "Track every dollar spent. Our transparent reporting shows you exactly what's working and where your money is going.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="band-dark pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Promote" },
          ]} />

          <div className="grid lg:grid-cols-2 gap-16 items-center mt-8">
            <div>
              <div className="inline-block px-4 py-2 bg-yellow-400 mb-6">
                <span className="label-industrial text-charcoal-900">STEP THREE — PROMOTE</span>
              </div>
              <h1 className="headline-lg mb-6 leading-tight text-white">
                PROMOTE YOUR<br />
                <span className="text-yellow-400">BUSINESS ONLINE</span>
              </h1>
              <p className="text-xl lg:text-2xl text-stone-300 leading-relaxed mb-4">
                <strong className="text-white">Great content only works if the right people see it.</strong> We use targeted marketing strategies — SEO, social media, paid ads, and CRM automation — to put your business in front of your ideal customers.
              </p>
              <p className="text-lg text-yellow-400 mb-8 font-semibold">
                Targeted marketing that drives traffic, generates leads, and grows your revenue.
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
                src="/service-marketing.jpg"
                alt="Marketing and promotion services by Business Builders"
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
              <div key={index} className="bento-card p-6 bg-white text-center">
                <div className="text-3xl lg:text-4xl font-display font-black text-yellow-500 mb-3">{stat.number}</div>
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

      <section className="band-stone py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg text-charcoal-900 mb-6">
              MARKETING THAT<br />
              <span className="text-yellow-400">ACTUALLY WORKS</span>
            </h2>
            <p className="text-xl text-stone-500 max-w-3xl mx-auto">
              We don't do marketing for the sake of marketing. Every strategy we build is designed to drive real, measurable business results.
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

      <section className="band-yellow py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="headline-lg text-charcoal-900 mb-6">
            READY TO REACH MORE<br />
            CUSTOMERS?
          </h2>
          <p className="text-xl text-charcoal-700 mb-8 max-w-2xl mx-auto">
            Let's build a marketing strategy that puts your business in front of the right people, at the right time.
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