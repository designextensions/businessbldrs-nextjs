"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Palette, Globe, Video, Smartphone, Bot } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { LazyImage } from "@/components/ui/lazy-image";

const services = [
  {
    title: "Branding & Logos",
    description: "Your brand is the face of your business. We create memorable visual identities — from logos and color palettes to full brand guides — that tell your story and build instant trust with your audience.",
    icon: Palette,
    features: [
      "Custom logo design",
      "Complete brand guide development",
      "Color palette & typography systems",
      "Brand photography direction",
    ],
    link: "/branding-logos",
    image: "/service-strategy.jpg",
  },
  {
    title: "Website Design",
    description: "Your website is your digital storefront. We design and develop custom websites that are visually stunning, optimized for conversions, and built to turn visitors into leads and customers.",
    icon: Globe,
    features: [
      "WordPress & Shopify development",
      "Conversion-optimized design",
      "Mobile-responsive layouts",
      "LMS platform development",
    ],
    link: "/website-design",
    image: "/service-website.jpg",
  },
  {
    title: "Video Production",
    description: "Professional video content that tells your story and connects with your audience. From brand films to testimonials, we produce high-quality video that drives engagement and builds trust.",
    icon: Video,
    features: [
      "Brand story films",
      "Customer testimonial videos",
      "Social media video content",
      "Drone & aerial footage",
    ],
    link: "/video-production",
    image: "/service-video-new.jpg",
  },
  {
    title: "App Development",
    description: "Custom mobile and web applications designed to solve real business problems. We build intuitive, scalable apps that streamline operations and create better experiences for your customers.",
    icon: Smartphone,
    features: [
      "Native iOS & Android apps",
      "Progressive web applications",
      "Custom business software",
      "API integrations & automation",
    ],
    link: "/app-development",
    image: "/service-marketing.jpg",
  },
  {
    title: "AI Development",
    description: "Custom AI tools and automated workflows that give your business a competitive edge. We build intelligent solutions that save time, reduce costs, and unlock new capabilities.",
    icon: Bot,
    features: [
      "Custom AI chatbots & assistants",
      "Workflow automation tools",
      "AI-powered content systems",
      "Machine learning integrations",
    ],
    link: "/ai-development",
    image: "/service-strategy.jpg",
  },
];

export default function ServicesProducePage() {
  return (
    <>
      <Navigation />
      <main>
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Produce", href: "/services/produce" },
          ]}
        />

        <section className="bg-charcoal-900 py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-yellow-400 border-2 border-yellow-400 flex items-center justify-center">
                  <span className="font-display font-black text-2xl text-charcoal-900">02</span>
                </div>
                <span className="label-industrial text-yellow-400">Step Two</span>
              </div>
              <h1 className="font-display font-black text-5xl lg:text-7xl text-white uppercase tracking-tight leading-[0.9] mb-6">
                PRODUCE
              </h1>
              <p className="text-xl lg:text-2xl text-stone-300 mb-4 font-display uppercase tracking-wide">
                Create the Right Content
              </p>
              <p className="text-lg text-stone-400 max-w-2xl mb-8">
                Once the strategy is set, it's time to bring it to life. We produce professional websites, videos, brands, and applications that convert visitors into customers and make your business stand out.
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
                <Palette className="w-4 h-4" />
                PRODUCTION SERVICES
              </span>
              <h2 className="headline-lg text-charcoal-900 mb-4">
                BRING YOUR VISION <span className="text-yellow-500">TO LIFE</span>
              </h2>
              <p className="text-editorial text-stone-600 max-w-2xl mx-auto">
                Professional creative services that turn your strategy into tangible assets that work for your business.
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
            <h2 className="headline-lg text-charcoal-900 mb-4">READY TO CREATE SOMETHING GREAT?</h2>
            <p className="text-editorial text-charcoal-700 mb-8 max-w-2xl mx-auto">
              Let's produce professional content that captures attention and converts customers.
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
