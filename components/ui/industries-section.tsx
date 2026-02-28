import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function IndustriesSection() {
  const industries = [
    "Accounting",
    "Healthcare",
    "Automotive",
    "Dental",
    "Education",
    "Consumer Goods",
    "Non-Profits",
    "Construction",
    "Manufacturing",
    "Your Industry",
  ];

  return (
    <section className="band-yellow py-20 lg:py-28 relative overflow-hidden" data-testid="industries-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Headline and CTA */}
          <div>
            <h2 className="font-display font-black text-5xl lg:text-6xl xl:text-7xl text-charcoal-900 uppercase tracking-tight leading-[0.9] mb-8">
              WE BUILD<br />
              BUSINESSES<br />
              IN...
            </h2>
            
            <div className="border-l-4 border-charcoal-900 pl-6 mb-8">
              <p className="text-charcoal-800 text-lg lg:text-xl leading-relaxed">
                Everybody is selling something. Our job is to understand your customer and get you in front of them.
              </p>
            </div>
            
            <Link href="/request-quote">
              <Button 
                className="bg-charcoal-900 text-white hover:bg-charcoal-800 border-2 border-charcoal-900 px-8 py-6 text-lg font-bold uppercase tracking-wide"
                data-testid="button-industries-cta"
              >
                GET A FREE QUOTE
              </Button>
            </Link>
          </div>
          
          {/* Right Column - Industry List */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-6 lg:gap-y-8">
            {industries.map((industry, index) => (
              <div 
                key={industry} 
                className="flex items-center gap-4"
                data-testid={`industry-item-${index}`}
              >
                <ArrowRight className="w-5 h-5 text-charcoal-900 flex-shrink-0" />
                <span className="font-display font-bold text-charcoal-900 text-lg lg:text-xl uppercase tracking-wide">
                  {industry}
                </span>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
