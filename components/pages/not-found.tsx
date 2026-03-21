"use client";
import Link from "next/link";
import SEOHead from "@/components/ui/seo-head";

import { Button } from "@/components/ui/button";
import { AlertCircle, ArrowLeft } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";

export default function NotFound() {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col">
      <SEOHead
        title="404 - Page Not Found | Business Builders"
        description="Sorry, the page you're looking for doesn't exist. Explore our marketing services, resources, and business solutions."
        keywords="404, page not found, business builders"
        canonicalUrl="https://businessbldrs.com/404"
      />
      
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover opacity-20"
          autoPlay
          muted
          playsInline
          loop
          aria-hidden="true"
          poster="/video-poster.jpg"
        >
          <source src="/attached_assets/0301.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-charcoal-900/80" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <Navigation />
      
      <main className="flex-grow flex items-center justify-center relative z-10 py-20">
        <div className="text-center max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <span className="label-industrial inline-block px-4 py-2 bg-yellow-400 text-charcoal-900 border-2 border-charcoal-900 shadow-offset-sm font-bold tracking-widest uppercase text-xs">
              Error 404
            </span>
          </div>
          
          <h1 className="headline-xl text-white mb-4">
            Looks like you're <span className="text-yellow-400">off the map.</span>
          </h1>
          
          <p className="text-xl text-stone-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            The page you're looking for doesn't exist or has been moved. 
            Don't worry, even the best explorers get lost sometimes.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            <Link href="/" className="group">
              <div className="bg-charcoal-900 border-2 border-stone-800 p-6 shadow-offset-sm hover:border-yellow-400 hover:shadow-offset-yellow transition-all text-left h-full">
                <h3 className="font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors uppercase tracking-wider text-sm">Homepage</h3>
                <p className="text-stone-500 text-xs">Start your journey from the beginning.</p>
              </div>
            </Link>
            <Link href="/services" className="group">
              <div className="bg-charcoal-900 border-2 border-stone-800 p-6 shadow-offset-sm hover:border-yellow-400 hover:shadow-offset-yellow transition-all text-left h-full">
                <h3 className="font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors uppercase tracking-wider text-sm">Services</h3>
                <p className="text-stone-500 text-xs">Explore how we help businesses grow.</p>
              </div>
            </Link>
            <Link href="/portfolio" className="group">
              <div className="bg-charcoal-900 border-2 border-stone-800 p-6 shadow-offset-sm hover:border-yellow-400 hover:shadow-offset-yellow transition-all text-left h-full">
                <h3 className="font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors uppercase tracking-wider text-sm">Portfolio</h3>
                <p className="text-stone-500 text-xs">See our proven results in action.</p>
              </div>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/">
              <Button size="lg" className="bg-yellow-400 text-charcoal-900 px-10 py-6 font-bold text-lg hover:bg-yellow-300 border-2 border-charcoal-900 shadow-offset hover-press">
                <ArrowLeft className="w-5 h-5 mr-3" />
                BACK TO BASE
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <MegaFooter />
    </div>
  );
}
