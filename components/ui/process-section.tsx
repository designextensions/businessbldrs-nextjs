import { CheckCircle, ArrowRight } from "lucide-react";
import { LazyImage } from "./lazy-image";
import Link from "next/link";
import { Button } from "./button";
import { GrowthChartStamp, PointingHandStamp } from "./vintage-stamps";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "PLAN",
      subtitle: "Get the Right Strategy",
      description: "Strategic blueprints that set the foundation for success.",
      services: ["Messaging Blueprint", "Video Blueprint", "Website Blueprint", "Marketing Blueprint", "AI Blueprint"],
      image: "/service-strategy.jpg",
      imageAlt: "Strategic marketing planning session with Business Builders team developing blueprints"
    },
    {
      number: "02",
      title: "PRODUCE",
      subtitle: "Create the Right Content",
      description: "Professional websites and videos that convert visitors to customers.",
      services: ["Website Development", "Video Production", "Photography", "Brand Identity"],
      image: "/service-video-new.jpg",
      imageAlt: "Professional video production and content creation by Business Builders"
    },
    {
      number: "03",
      title: "PROMOTE",
      subtitle: "Reach the Right Audience",
      description: "Targeted marketing that reaches your ideal customers.",
      services: ["SEO", "PPC", "Social Media", "CRM & HubSpot Integration"],
      image: "/service-marketing.jpg",
      imageAlt: "Digital marketing dashboard showing SEO, PPC, and social media campaign performance"
    },
    {
      number: "04",
      title: "PROTECT",
      subtitle: "Keep Everything Running",
      description: "Ongoing hosting, maintenance, and compliance to keep your investment safe.",
      services: ["Managed Hosting", "Website Maintenance", "ADA Compliance", "Security Monitoring"],
      image: "/service-website.jpg",
      imageAlt: "Managed website hosting dashboard with uptime monitoring and security alerts"
    }
  ];

  return (
    <section id="process" className="band-white py-20 lg:py-28 relative overflow-hidden" data-testid="process-section">
      <GrowthChartStamp className="absolute top-20 -right-20 w-64 h-64 opacity-10 hidden lg:block" />
      <PointingHandStamp className="absolute bottom-10 -left-20 w-80 opacity-10 hidden lg:block" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="label-industrial inline-block px-4 py-2 bg-charcoal-900 text-white border-2 border-charcoal-900 mb-6">
            HOW WE HELP YOU GROW
          </span>
          <h2 className="headline-lg text-charcoal-900 mb-4">
            THE COMPLETE<br />
            <span className="text-yellow-500">GROWTH STACK</span>
          </h2>
          <p className="text-editorial text-stone-600 max-w-2xl mx-auto">
            Every service you need to plan, build, promote, and protect your business — all under one roof.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className={`bento-card p-0 overflow-hidden animate-slide-up stagger-${index + 1}`}
              data-testid={`process-step-${index + 1}`}
            >
              <div className="relative">
                <LazyImage 
                  src={step.image} 
                  alt={step.imageAlt}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 w-16 h-16 bg-yellow-400 border-2 border-charcoal-900 flex items-center justify-center shadow-offset-sm">
                  <span className="font-display font-black text-2xl text-charcoal-900">{step.number}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="label-industrial text-stone-500 mb-2">{step.subtitle}</div>
                <h3 className="headline-md text-charcoal-900 mb-3">{step.title}</h3>
                <p className="text-stone-600 mb-6">{step.description}</p>
                
                <div className="space-y-2">
                  {step.services.map((service, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                      <span className="text-sm font-medium text-charcoal-900">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button size="lg" data-testid="button-process-services">
              VIEW ALL SERVICES
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
