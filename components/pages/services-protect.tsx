"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Shield, Server, Settings } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { LazyImage } from "@/components/ui/lazy-image";

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
  return (
    <>
      <Navigation />
      <main>
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Protect", href: "/services/protect" },
          ]}
        />

        <section className="bg-charcoal-900 py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-yellow-400 border-2 border-yellow-400 flex items-center justify-center">
                  <span className="font-display font-black text-2xl text-charcoal-900">04</span>
                </div>
                <span className="label-industrial text-yellow-400">Step Four</span>
              </div>
              <h1 className="font-display font-black text-5xl lg:text-7xl text-white uppercase tracking-tight leading-[0.9] mb-6">
                PROTECT
              </h1>
              <p className="text-xl lg:text-2xl text-stone-300 mb-4 font-display uppercase tracking-wide">
                Keep Everything Running
              </p>
              <p className="text-lg text-stone-400 max-w-2xl mb-8">
                Your digital assets are an investment. We provide ongoing hosting, maintenance, and compliance services to keep your website secure, up-to-date, and performing at its best — so your investment is always protected.
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
            <h2 className="headline-lg text-charcoal-900 mb-4">PROTECT YOUR DIGITAL INVESTMENT</h2>
            <p className="text-editorial text-charcoal-700 mb-8 max-w-2xl mx-auto">
              Don't leave your website vulnerable. Let us handle the hosting, maintenance, and compliance so you can focus on growing your business.
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
