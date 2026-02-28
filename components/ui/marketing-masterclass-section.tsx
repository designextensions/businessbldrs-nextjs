import { useState, useEffect, useRef } from "react";
import HubSpotForm from "@/components/ui/hubspot-form";
import { BookOpen, Users, TrendingUp } from "lucide-react";

export default function MarketingMasterclassSection() {
  const [isInView, setIsInView] = useState(false);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isInView) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current);
    }

    return () => observer.disconnect();
  }, [isInView]);

  return (
    <section className="py-20 lg:py-28 band-dark relative overflow-hidden" data-testid="masterclass-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="label-industrial inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-charcoal-900 border-2 border-charcoal-900 shadow-offset-sm mb-6">
            <BookOpen className="w-4 h-4" />
            FREE RESOURCE
          </span>
          <h2 className="headline-lg text-white mb-6">
            MARKETING<br />
            <span className="text-yellow-400">MASTERCLASS</span>
          </h2>
          <p className="text-editorial text-stone-400 max-w-3xl mx-auto">
            Demystify marketing with our free video series. Learn how to
            <span className="text-yellow-400 font-semibold"> generate attention and acquire new customers</span> through
            clear messaging and smart marketing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div ref={videoContainerRef}>
            <div className="border-2 border-charcoal-700 overflow-hidden">
              <div className="aspect-video">
                {isInView ? (
                  <iframe
                    src="https://player.vimeo.com/video/1055723278?h=9bc9d2f125&title=0&byline=0&portrait=0&color=fbbf24&autoplay=1&muted=1&loop=1"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="Marketing Masterclass Course Preview"
                  ></iframe>
                ) : (
                  <div className="w-full h-full bg-charcoal-800 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-yellow-400/30" />
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-charcoal-800 border-2 border-charcoal-700 p-4 text-center">
                <Users className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                <p className="text-sm text-stone-300 font-display uppercase tracking-wide">Target Your Audience</p>
              </div>
              <div className="bg-charcoal-800 border-2 border-charcoal-700 p-4 text-center">
                <TrendingUp className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                <p className="text-sm text-stone-300 font-display uppercase tracking-wide">Clear Messaging</p>
              </div>
              <div className="bg-charcoal-800 border-2 border-charcoal-700 p-4 text-center">
                <BookOpen className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                <p className="text-sm text-stone-300 font-display uppercase tracking-wide">Smart Marketing</p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-charcoal-800 border-2 border-yellow-400 shadow-offset-yellow">
              <div className="p-6 border-b-2 border-charcoal-700">
                <h3 className="headline-md text-white mb-2">GET FREE ACCESS</h3>
                <p className="text-stone-400">Enter your details to receive the complete Marketing Masterclass video series.</p>
              </div>
              <div className="p-6">
                <HubSpotForm
                  portalId="485253"
                  formId="ed6f4c15-7fb3-4e0f-aead-a713c1c65a73"
                  region="na1"
                  className="hubspot-form-container"
                />
                <p className="text-xs text-stone-500 mt-4 text-center">
                  By submitting this form, you agree to receive marketing communications from Business Builders.
                  You can unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="headline-md text-white text-center mb-10">WHAT YOU'LL LEARN</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bento-card bg-charcoal-800 border-charcoal-700 p-6 text-center">
              <div className="w-16 h-16 bg-yellow-400 border-2 border-charcoal-900 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-charcoal-900" />
              </div>
              <h4 className="font-display font-bold text-lg text-white mb-2 uppercase">Strategic Planning</h4>
              <p className="text-stone-400 text-sm leading-relaxed">Learn how to create marketing plans that deliver measurable results for your business.</p>
            </div>
            <div className="bento-card bg-charcoal-800 border-charcoal-700 p-6 text-center">
              <div className="w-16 h-16 bg-yellow-400 border-2 border-charcoal-900 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-charcoal-900" />
              </div>
              <h4 className="font-display font-bold text-lg text-white mb-2 uppercase">Audience Targeting</h4>
              <p className="text-stone-400 text-sm leading-relaxed">Discover how to identify and reach your ideal customers with precision and effectiveness.</p>
            </div>
            <div className="bento-card bg-charcoal-800 border-charcoal-700 p-6 text-center">
              <div className="w-16 h-16 bg-yellow-400 border-2 border-charcoal-900 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-charcoal-900" />
              </div>
              <h4 className="font-display font-bold text-lg text-white mb-2 uppercase">Clear Messaging</h4>
              <p className="text-stone-400 text-sm leading-relaxed">Master communicating your value proposition in a way that resonates and converts.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
