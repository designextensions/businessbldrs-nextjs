import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, FileText, Rocket, CheckCircle } from "lucide-react";
import Link from "next/link";
import { ApprovedStamp } from "./vintage-stamps";

export default function GettingStartedSection() {
  const steps = [
    {
      number: "01",
      icon: Phone,
      title: "15-Min Discovery Call",
      description: "The first step is to create a clear message and plan. Think of it as your roadmap to success.",
      highlights: ["Free consultation", "No obligation", "Expert guidance"],
    },
    {
      number: "02",
      icon: FileText,
      title: "Get a Blueprint",
      description: "Next, we create the deliverables you need to reach your organization's goals and objectives.",
      highlights: ["Custom strategy", "Clear roadmap", "Actionable steps"],
    },
    {
      number: "03",
      icon: Rocket,
      title: "Experience Real Growth",
      description: "Now it's time to share your messaging and deliverables with your audience and watch your business grow!",
      highlights: ["Measurable results", "Ongoing support", "Real ROI"],
    },
  ];

  return (
    <section className="band-stone py-20 lg:py-28 relative overflow-hidden" data-testid="getting-started-section">
      <ApprovedStamp className="absolute -top-10 right-10 w-64 opacity-10 hidden lg:block" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="label-industrial inline-flex items-center gap-2 px-4 py-2 bg-charcoal-900 text-white border-2 border-charcoal-900 mb-6">
            <Rocket className="w-4 h-4" />
            SIMPLE 3-STEP PROCESS
          </span>
          <h2 className="headline-lg text-charcoal-900 mb-4">
            IT'S EASY TO<br />
            <span className="text-yellow-500">GET STARTED</span>
          </h2>
          <p className="text-editorial text-stone-600 max-w-xl mx-auto">
            Our proven process makes growing your business simple, predictable, and stress-free
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index} 
                className={`bento-card p-8 animate-slide-up stagger-${index + 1}`}
                data-testid={`getting-started-step-${index + 1}`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-yellow-400 border-2 border-charcoal-900 shadow-offset flex items-center justify-center">
                      <Icon className="w-10 h-10 text-charcoal-900" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-charcoal-900 border-2 border-yellow-400 flex items-center justify-center">
                      <span className="font-display font-black text-sm text-yellow-400">{step.number}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-display font-bold text-xl text-charcoal-900 mb-4 uppercase">
                    {step.title}
                  </h3>
                  
                  <p className="text-stone-600 mb-6 leading-relaxed font-serif">
                    {step.description}
                  </p>
                  
                  <div className="space-y-2 w-full">
                    {step.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-center justify-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                        <span className="text-charcoal-900 font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-charcoal-900 border-2 border-charcoal-800 p-10 lg:p-14">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="headline-md text-white mb-4">
              STOP WASTING TIME & MONEY ON MARKETING THAT <span className="text-yellow-400">DOESN'T WORK</span>
            </h3>
            <p className="text-stone-400 mb-3 text-lg">
              When you have the right team around you, everything changes.
            </p>
            <p className="text-stone-500 mb-8">
              It would be an honor for our team to become part of your team.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <Link href="/request-quote">
                <Button 
                  size="xl"
                  data-testid="button-getting-started-cta"
                >
                  GET A FREE QUOTE TODAY
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:877-378-6101">
                <Button 
                  variant="outlineLight"
                  size="xl"
                  data-testid="button-getting-started-phone"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (877) 378-6101
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
              <div className="text-center">
                <div className="font-display font-black text-4xl text-yellow-400">26+</div>
                <div className="label-industrial text-stone-500">YEARS</div>
              </div>
              <div className="text-center">
                <div className="font-display font-black text-4xl text-yellow-400">1000+</div>
                <div className="label-industrial text-stone-500">CLIENTS</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <div className="label-industrial text-stone-500">RATED</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
