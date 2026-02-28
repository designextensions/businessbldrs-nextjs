"use client";
import Link from "next/link";
import SEOHead from "@/components/ui/seo-head";

import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Target, TrendingUp, Zap, MessageSquare, Users, CheckCircle, Star } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { useEffect } from "react";

export default function ScheduleCall() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="min-h-screen band-dark">
      <SEOHead
        title="Schedule a Call - 15 Minute Discovery Call | Business Builders"
        description="Book a free 15-minute discovery call with Business Builders. Connect with our marketing experts to discuss your business goals and growth strategies."
        keywords="schedule call, discovery call, consultation, marketing consultation, business consultation, free call"
        canonicalUrl="https://businessbldrs.com/schedule-call"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Discovery Call Consultation",
          "description": "Free 15-minute discovery call to discuss marketing and business growth strategies",
          "provider": {
            "@type": "Organization",
            "name": "Business Builders"
          },
          "serviceType": "Business Consultation",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        }}
      />
      
      <Navigation />
      
      <main>
        {/* Breadcrumbs */}
        <section className="pt-24 pb-8 band-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs 
              items={[
                { label: "Home", href: "/" },
                { label: "Schedule Call", href: "/schedule-call" }
              ]}
            />
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-16 band-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="label-industrial text-yellow-400 mb-4 block">Book Your Call</span>
              <h1 className="headline-lg font-display uppercase mb-6">
                Book a <span className="text-yellow-400">15 Minute</span><br />
                Discovery Call
              </h1>
              <p className="font-body text-xl lg:text-2xl text-stone-400 leading-relaxed mb-8 max-w-3xl mx-auto">
                Fill out the form below to connect with us on zoom.
              </p>
              <p className="text-lg text-stone-500 mb-8">
                Prefer to e-mail us?{" "}
                <Link href="/request-quote">
                  <span className="text-yellow-400 hover:text-yellow-300 underline cursor-pointer">
                    Use this form.
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 band-stone">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[60%_40%] gap-12 items-start">
              
              {/* Scheduling Widget */}
              <div className="bento-card p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-yellow-400 border-2 border-black shadow-offset-sm flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-black" />
                  </div>
                  <h2 className="headline-md font-display uppercase mb-4 text-black">Schedule Your Call</h2>
                  <p className="text-stone-500">
                    Select a convenient time for your 15-minute discovery call
                  </p>
                </div>
                
                {/* Scheduling Widget Container - HubSpot Meetings Embed */}
                <div className="bg-stone-100 border-2 border-black overflow-hidden min-h-[500px] p-4">
                  <div 
                    className="meetings-iframe-container" 
                    data-src="https://go.businessbldrs.com/meetings/chris736/initial-call-to-review-your-needs?embed=true"
                    data-testid="scheduling-widget"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                
                {/* Contact Details */}
                <div className="bento-card p-8">
                  <h3 className="headline-md font-display uppercase mb-6 text-center text-black">Contact Information</h3>
                  
                  <div className="space-y-6">
                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-yellow-400 border-2 border-black shadow-offset-sm flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold uppercase text-black mb-1">Office Address</h4>
                        <p className="text-stone-500">
                          701 Market Street, Unit 101<br />
                          St. Augustine, FL 32095
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-yellow-400 border-2 border-black shadow-offset-sm flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold uppercase text-black mb-1">Phone</h4>
                        <a 
                          href="tel:877-378-6101" 
                          className="text-yellow-600 hover:text-yellow-500 transition-colors font-medium"
                          data-testid="link-phone"
                        >
                          (877) 378-6101
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-yellow-400 border-2 border-black shadow-offset-sm flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold uppercase text-black mb-1">Email</h4>
                        <a 
                          href="mailto:marketing@businessbldrs.com" 
                          className="text-yellow-600 hover:text-yellow-500 transition-colors font-medium"
                          data-testid="link-email"
                        >
                          marketing@businessbldrs.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="bento-card p-8 text-center">
                  <h3 className="headline-md font-display uppercase mb-4 text-black">Ready to Grow Your Business?</h3>
                  <p className="text-stone-500 mb-6">
                    Let's discuss how our marketing strategies can help you achieve your goals.
                  </p>
                  <Link href="/request-quote">
                    <Button 
                      className="bg-yellow-400 border-2 border-black text-black px-8 py-3 font-display font-bold uppercase tracking-wide hover:bg-yellow-300 shadow-offset hover-press transition-all duration-300"
                      data-testid="button-contact-cta"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Send us a Message
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* What We'll Cover in Your Discovery Call */}
        <section className="py-20 band-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="headline-lg text-white mb-6">
                  What We'll Cover in Your <span className="text-yellow-400">Discovery Call</span>
                </h2>
                <p className="text-xl text-stone-400 mb-8">
                  This is not a sales pitch. It is a focused 15-minute conversation to understand your situation and see if we can help. Here is what we will discuss:
                </p>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-yellow-400 border-2 border-charcoal-800 flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-charcoal-900" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold uppercase text-white mb-1">Your Current Marketing Challenges</h3>
                      <p className="text-stone-400">We will talk about what is working, what is not, and where you feel stuck so we can focus on what matters most.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-yellow-400 border-2 border-charcoal-800 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-charcoal-900" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold uppercase text-white mb-1">Business Goals and Growth Targets</h3>
                      <p className="text-stone-400">Understanding where you want to go helps us recommend the right strategy, whether that is more traffic, leads, or revenue.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-yellow-400 border-2 border-charcoal-800 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-charcoal-900" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold uppercase text-white mb-1">Quick Wins We Can Identify</h3>
                      <p className="text-stone-400">We often spot low-hanging fruit during the initial conversation -- small changes that can make a big impact right away.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-yellow-400 border-2 border-charcoal-800 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-charcoal-900" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold uppercase text-white mb-1">Recommended Next Steps</h3>
                      <p className="text-stone-400">You will leave the call with clear, actionable recommendations you can pursue on your own or with our team's help.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-yellow-400 border-2 border-charcoal-800 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-5 h-5 text-charcoal-900" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold uppercase text-white mb-1">Your Questions Answered</h3>
                      <p className="text-stone-400">Bring any questions you have about digital marketing, website strategy, or how we work. We are an open book.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Who Should Book a Call */}
              <div>
                <div className="bento-card bg-charcoal-800 border-2 border-charcoal-700 p-8 shadow-offset-yellow">
                  <h2 className="headline-md font-display uppercase text-white mb-6">
                    Who Should <span className="text-yellow-400">Book a Call</span>
                  </h2>
                  <p className="text-stone-400 mb-8">
                    Our discovery calls are designed for decision-makers who are ready to take their online presence seriously. This call is the right fit for you if you are:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <p className="text-stone-300">
                        <strong className="text-white">A business owner looking to grow</strong> -- you know your business has potential, but your website and marketing are not keeping up with your ambition.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <p className="text-stone-300">
                        <strong className="text-white">A company needing a marketing partner</strong> -- you are tired of juggling multiple freelancers or agencies and want one team that can handle strategy, design, and execution.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <p className="text-stone-300">
                        <strong className="text-white">An organization ready to invest in its online presence</strong> -- you understand that a strong website and marketing strategy are essential, not optional, and you are prepared to commit the resources to do it right.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial / Social Proof */}
        <section className="py-20 band-yellow">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-7 h-7 text-charcoal-900 fill-charcoal-900" />
              ))}
            </div>
            <blockquote className="text-2xl lg:text-3xl font-display text-charcoal-900 mb-8 leading-relaxed">
              "Business Builders has been our marketing partner for over five years. They took the time to understand our business and built a strategy that actually works. Our website traffic and leads have grown every single year."
            </blockquote>
            <div>
              <p className="font-display font-bold uppercase text-charcoal-900 text-lg">Local Business Owner</p>
              <p className="text-charcoal-700">St. Augustine, FL</p>
            </div>
            <div className="mt-8 flex items-center justify-center gap-8 text-charcoal-800">
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-charcoal-900">26+</div>
                <div className="text-sm uppercase font-display">Years in Business</div>
              </div>
              <div className="w-px h-12 bg-charcoal-800"></div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-charcoal-900">100+</div>
                <div className="text-sm uppercase font-display">Websites Launched</div>
              </div>
              <div className="w-px h-12 bg-charcoal-800"></div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-charcoal-900">95%</div>
                <div className="text-sm uppercase font-display">Client Retention</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MegaFooter />
    </div>
  );
}
