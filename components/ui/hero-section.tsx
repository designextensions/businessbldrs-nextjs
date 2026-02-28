import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { trackEvent } from "@/components/ui/google-analytics";
import { ArrowRight, CheckCircle } from "lucide-react";

const heroVideo = "/assets/Untitled_1754143769049.mp4";

const teamPhotos = [
  { src: "/bb-team-hero.webp", alt: "Business Builders team member" },
  { src: "/attached_assets/BB-Team-Photo-1-edited-2_1754613823971.webp", alt: "Business Builders team" },
  { src: "/attached_assets/BB-2023-Office-Content-Shoot-6961-2048x1152_1754613884042.jpg", alt: "Business Builders office" },
];

export default function HeroSection() {
  const [currentTypeIndex, setCurrentTypeIndex] = useState(0);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const organizationTypes = ["BUSINESSES", "MINISTRIES", "NON-PROFITS"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTypeIndex((prev) => (prev + 1) % organizationTypes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % teamPhotos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const delayVideoLoad = () => {
      if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
        (window as any).requestIdleCallback(() => {
          setShouldLoadVideo(true);
        }, { timeout: 1000 });
      } else {
        setTimeout(() => setShouldLoadVideo(true), 2000);
      }
    };

    const timer = setTimeout(delayVideoLoad, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="pt-24 relative overflow-hidden band-white" data-testid="hero-section">
      {shouldLoadVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          src={heroVideo}
          preload="none"
        />
      )}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-10 lg:py-14">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,430px)] gap-12 lg:gap-16 items-center">
          <div className="text-charcoal-900 lg:max-w-none lg:pr-12">
            <div className="mb-4 animate-slide-up stagger-1">
              <span className="label-industrial inline-block px-4 py-2 bg-yellow-400 text-charcoal-900 border-2 border-charcoal-900 shadow-offset-sm">
                AI-POWERED MARKETING FOR <span className="rotating-text" key={currentTypeIndex}>{organizationTypes[currentTypeIndex]}</span>
              </span>
            </div>
            
            <h1 className="headline-xl text-charcoal-900 mb-6 animate-slide-up stagger-2">
              Clear Message. Proven Strategy. <span className="text-yellow-500">Real Growth.</span>
            </h1>
            
            <p className="text-editorial-lg text-stone-600 mb-8 animate-slide-up stagger-3">Get a team that leverages the latest in AI, combined with StoryBrand messaging, to help you grow!</p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 animate-slide-up stagger-4">
              <Link href="/request-quote">
                <button 
                  onClick={() => trackEvent('click', {
                    event_category: 'engagement',
                    event_label: 'hero_cta_quote_button',
                    button_location: 'hero_section'
                  })}
                  className="w-full sm:w-auto whitespace-nowrap bg-charcoal-900 text-white px-8 py-4 font-bold tracking-wide text-lg flex items-center justify-center gap-3 border-b-4 border-yellow-400 hover:bg-charcoal-800 transition-colors"
                  data-testid="button-hero-quote"
                >
                  REQUEST A QUOTE
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/resources">
                <Button 
                  onClick={() => trackEvent('click', {
                    event_category: 'engagement',
                    event_label: 'hero_resources_button',
                    button_location: 'hero_section'
                  })}
                  variant="outline"
                  size="xl"
                  className="w-full sm:w-auto whitespace-nowrap"
                  data-testid="button-hero-resources"
                >
                  FREE RESOURCES
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative animate-slide-up stagger-3">
            <div className="border-industrial-3 bg-white p-4 shadow-offset-yellow">
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                {teamPhotos.map((photo, i) => (
                  <Image
                    key={photo.src}
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className={`object-cover object-top transition-opacity duration-1000 ${i === currentPhotoIndex ? 'opacity-100' : 'opacity-0'}`}
                    priority={i === 0}
                    sizes="(max-width: 1024px) 100vw, 430px"
                  />
                ))}
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-yellow-400 border-industrial-3 p-4 shadow-offset animate-slide-up stagger-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-charcoal-900 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <div className="label-industrial text-charcoal-900">CERTIFIED</div>
                  <div className="font-display font-bold text-charcoal-900">STORYBRAND AGENCY</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-charcoal-900 border-2 border-yellow-400 p-4 shadow-offset-yellow animate-slide-up stagger-4">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="text-white text-sm font-medium mt-1">5-Star Rated</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
