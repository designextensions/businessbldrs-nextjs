import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
const homeSectionImage = "/attached_assets/Home-section-1-img-1-1.webp";
import { PointingHandStamp } from "@/components/ui/vintage-stamps";

export default function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden" data-testid="cta-section">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url('${homeSectionImage}')` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-charcoal-900/95" />
      
      <PointingHandStamp className="absolute top-20 left-10 w-64 opacity-15 hidden lg:block rotate-12" />
      <PointingHandStamp className="absolute bottom-20 right-10 w-64 opacity-15 hidden lg:block -rotate-12 scale-x-[-1]" />
      
      <div className="relative z-10 py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="stamp stamp-certified rotate-[-5deg] inline-block mb-6">
              STOP THE MADNESS
            </span>
          </div>
          
          <h2 className="headline-lg text-white mb-6">
            STOP WASTING TIME & MONEY<br />
            ON MARKETING THAT<br />
            <span className="text-red-400">DOESN'T WORK</span>
          </h2>
          
          <p className="text-editorial-lg text-stone-400 mb-4 max-w-2xl mx-auto">
            When you have the right team around you, everything changes.
          </p>
          <p className="text-lg text-stone-500 mb-10">
            It would be an honor for our team to become part of your team.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/request-quote">
              <Button 
                size="xl"
                data-testid="button-cta-quote"
              >
                GET A FREE QUOTE TODAY
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a href="tel:877-378-6101">
              <Button 
                variant="outlineLight"
                size="xl"
                data-testid="button-cta-phone"
              >
                <Phone className="w-5 h-5 mr-2" />
                (877) 378-6101
              </Button>
            </a>
          </div>
          
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
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
    </section>
  );
}
