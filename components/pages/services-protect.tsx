"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Shield, Server, Settings, Heart, DollarSign, Scale } from "lucide-react";
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
    title: "Managed Hosting",
    description: "Enterprise-grade hosting with 99.9% uptime guarantee. We handle server management, SSL certificates, nightly backups, and performance optimization so your website is always fast and available.",
    icon: Server,
    features: [
      "99.9% uptime guarantee",
      "SSL certificates & security",
      "Nightly automated backups",
      "Performance monitoring & optimization",
    ],
    link: "/hosting",
    image: "/service-website.jpg",
  },
  {
    title: "Website Maintenance",
    description: "Keep your website running smoothly with ongoing maintenance and support. We handle WordPress updates, security patches, plugin management, and content updates so you don't have to worry.",
    icon: Settings,
    features: [
      "WordPress core & plugin updates",
      "Security monitoring & patching",
      "Content updates & changes",
      "Monthly performance reports",
    ],
    link: "/maintenance",
    image: "/service-marketing.jpg",
  },
  {
    title: "ADA Compliance",
    description: "Protect your business from accessibility lawsuits and ensure your website is usable by everyone. We audit, remediate, and monitor your site for WCAG 2.1 compliance and ADA accessibility standards.",
    icon: Shield,
    features: [
      "WCAG 2.1 compliance audits",
      "Accessibility remediation",
      "Ongoing monitoring & reporting",
      "Legal risk reduction",
    ],
    link: "/ada-accessibility",
    image: "/service-strategy.jpg",
  },
];

export default function ServicesProtectPage() {
  const stats = [
    { number: "99.9%", label: "Uptime guarantee for your website" },
    { number: "Nightly", label: "Automated backups of your entire site" },
    { number: "24/7", label: "Server monitoring & threat detection" },
    { number: "26+", label: "Years of experience protecting websites" },
  ];

  const whyProtect = [
    {
      icon: Heart,
      title: "Peace of Mind",
      description: "Never worry about your website again. We monitor, update, and protect your site around the clock so you can focus entirely on running your business.",
    },
    {
      icon: DollarSign,
      title: "Cost Savings",
      description: "Prevent expensive emergencies before they happen. Proactive maintenance and monitoring costs a fraction of what emergency repairs and downtime cost.",
    },
    {
      icon: Scale,
      title: "Stay Compliant",
      description: "Avoid legal liability with ongoing ADA compliance monitoring. Accessibility lawsuits are on the rise — protect your business before it's too late.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="band-dark pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Protect" },
          ]} />

          <div className="grid lg:grid-cols-2 gap-16 items-center mt-8">
            <div>
              <div className="inline-block px-4 py-2 bg-yellow-400 mb-6">
                <span className="label-industrial text-charcoal-900">STEP FOUR — PROTECT</span>
              </div>
              <h1 className="headline-lg mb-6 leading-tight text-white">
                PROTECT YOUR<br />
                <span className="text-yellow-400">DIGITAL INVESTMENT</span>
              </h1>
              <p className="text-xl lg:text-2xl text-stone-300 leading-relaxed mb-4">
                <strong className="text-white">Your digital assets are an investment.</strong> We provide ongoing hosting, maintenance, and compliance services to keep your website secure, up-to-date, and performing at its best.
              </p>
              <p className="text-lg text-yellow-400 mb-8 font-semibold">
                99.9% uptime. Nightly backups. 24/7 monitoring. ADA compliance.
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
                src="/service-website.jpg"
                alt="Website protection and managed hosting services by Business Builders"
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
              <Shield className="w-4 h-4" />
              PROTECTION SERVICES
            </span>
            <h2 className="headline-lg text-charcoal-900 mb-4">
              SAFEGUARD YOUR <span className="text-yellow-500">INVESTMENT</span>
            </h2>
            <p className="text-editorial text-stone-600 max-w-2xl mx-auto">
              Ongoing support, security, and compliance to keep your business running smoothly.
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
              WHY PROTECTION<br />
              <span className="text-yellow-400">MATTERS</span>
            </h2>
            <p className="text-xl text-stone-500 max-w-3xl mx-auto">
              Your website is a critical business asset. Protecting it isn't optional — it's essential for long-term success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyProtect.map((item, index) => (
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

      <section className="band-yellow py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="headline-lg text-charcoal-900 mb-6">
            PROTECT YOUR DIGITAL<br />
            INVESTMENT
          </h2>
          <p className="text-xl text-charcoal-700 mb-8 max-w-2xl mx-auto">
            Don't leave your website vulnerable. Let us handle the hosting, maintenance, and compliance so you can focus on growing your business.
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