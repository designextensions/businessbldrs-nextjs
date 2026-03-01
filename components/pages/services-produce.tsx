"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Palette, Globe, Video, Smartphone, Bot, Target, Layers, Award } from "lucide-react";
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
  const stats = [
    { number: "500+", label: "Websites Built" },
    { number: "1000+", label: "Videos Produced" },
    { number: "200+", label: "Brands Created" },
    { number: "26+", label: "Years Experience" },
  ];

  const builtToConvert = [
    {
      icon: Target,
      title: "Conversion-Focused",
      description: "Every asset designed to drive action — from websites that capture leads to videos that close sales.",
    },
    {
      icon: Layers,
      title: "Brand Consistency",
      description: "Unified look across all touchpoints — your website, videos, print, and digital all speak the same language.",
    },
    {
      icon: Award,
      title: "Professional Quality",
      description: "Production values that impress — polished work that builds credibility and sets you apart from the competition.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="band-dark pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Produce" },
          ]} />

          <div className="grid lg:grid-cols-2 gap-16 items-center mt-8">
            <div>
              <div className="inline-block px-4 py-2 bg-yellow-400 mb-6">
                <span className="label-industrial text-charcoal-900">STEP TWO — PRODUCE</span>
              </div>
              <h1 className="headline-lg mb-6 leading-tight text-white">
                CREATE THE RIGHT<br />
                <span className="text-yellow-400">CONTENT</span>
              </h1>
              <p className="text-xl lg:text-2xl text-stone-300 leading-relaxed mb-4">
                <strong className="text-white">Once the strategy is set, it's time to bring it to life.</strong> We produce professional websites, videos, brands, and applications that convert visitors into customers and make your business stand out.
              </p>
              <p className="text-lg text-yellow-400 mb-8 font-semibold">
                Websites. Videos. Brands. Apps. AI. All under one roof.
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
                src="/service-video-new.jpg"
                alt="Professional production services by Business Builders"
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
              BUILT TO <span className="text-yellow-400">CONVERT</span>
            </h2>
            <p className="text-xl text-stone-500 max-w-3xl mx-auto">
              Everything we produce is designed with one goal in mind — helping your business grow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {builtToConvert.map((item, index) => (
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
            READY TO CREATE<br />
            SOMETHING GREAT?
          </h2>
          <p className="text-xl text-charcoal-700 mb-8 max-w-2xl mx-auto">
            Let's produce professional content that captures attention and converts customers.
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