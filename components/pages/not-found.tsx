"use client";
import Link from "next/link";
import SEOHead from "@/components/ui/seo-head";

import { Button } from "@/components/ui/button";
import { AlertCircle, ArrowLeft } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";

export default function NotFound() {
  return (
    <div className="min-h-screen band-dark">
      <SEOHead
        title="404 - Page Not Found | Business Builders"
        description="Sorry, the page you're looking for doesn't exist. Explore our marketing services, resources, and business solutions."
        keywords="404, page not found, business builders"
        canonicalUrl="https://businessbldrs.com/404"
      />
      <Navigation />
      
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-6">
          <div className="w-24 h-24 bg-yellow-400 border-2 border-black shadow-offset flex items-center justify-center mx-auto mb-8">
            <AlertCircle className="w-12 h-12 text-black" />
          </div>
          
          <h1 className="headline-xl text-yellow-400 mb-6">
            404
          </h1>
          
          <h2 className="headline-md text-white mb-6">
            Page Not Found
          </h2>
          
          <p className="text-xl text-stone-400 mb-12 leading-relaxed">
            The page you're looking for seems to have wandered off. Let's get you back on track.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="bg-yellow-400 text-black px-8 py-4 font-display uppercase font-bold text-lg hover:bg-yellow-500 border-2 border-black shadow-offset hover-press">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Button>
            </Link>
            
            <Link href="/services">
              <Button 
                variant="outline"
                className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 font-display uppercase font-bold text-lg hover:bg-yellow-400 hover:text-black bg-transparent"
              >
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <MegaFooter />
    </div>
  );
}
