import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export function VideoBackground() {
  const [currentTypeIndex, setCurrentTypeIndex] = useState(0);
  const organizationTypes = ["BUSINESSES", "MINISTRIES", "NON-PROFITS"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTypeIndex((prev) => (prev + 1) % organizationTypes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#1a1917] font-['Inter']">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1917]/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-white font-black text-xl tracking-tight leading-none">
              BUSINESS<span className="text-[#eab308]">★</span><br/>
              <span className="text-[0.65rem] tracking-[0.25em] font-bold">BUILDERS</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-white/80 uppercase tracking-wider">
            <span className="hover:text-white cursor-pointer transition-colors">About</span>
            <span className="hover:text-white cursor-pointer transition-colors">Services</span>
            <span className="hover:text-white cursor-pointer transition-colors">Portfolio</span>
            <span className="hover:text-white cursor-pointer transition-colors">Events</span>
            <span className="hover:text-white cursor-pointer transition-colors">Resources</span>
          </div>
          <button className="px-5 py-2.5 bg-white text-[#1a1917] font-bold text-sm uppercase tracking-wider hover:bg-[#eab308] transition-colors">
            Request a Quote
          </button>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          loop
        >
          <source src="/__mockup/images/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1917]/80 via-[#1a1917]/60 to-[#1a1917]/90" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1917]/50 via-transparent to-[#1a1917]/50" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <span className="inline-block px-5 py-2.5 bg-[#eab308] text-[#1a1917] font-black text-xs uppercase tracking-[0.2em] border-2 border-[#1a1917] shadow-[3px_3px_0_0_#1a1917]">
              AI-POWERED MARKETING FOR{" "}
              <span
                key={currentTypeIndex}
                className="inline-block"
                style={{ animation: "fadeSlide 0.4s ease-out" }}
              >
                {organizationTypes[currentTypeIndex]}
              </span>
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] mb-8 tracking-tight">
            Clear Message. <br />
            <span className="italic">Proven Strategy.</span> <br />
            <span className="text-[#eab308]">Real Growth.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Get a team that leverages the latest in AI, combined with StoryBrand messaging, to help you grow!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 bg-[#1a1917] text-white font-bold tracking-wide text-lg flex items-center justify-center gap-3 border-b-4 border-[#eab308] hover:bg-[#2a2927] transition-all">
              REQUEST A QUOTE
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-transparent text-white font-bold tracking-wide text-lg border-2 border-white/40 hover:border-white hover:bg-white/10 transition-all">
              FREE MARKETING AUDIT
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeSlide {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
