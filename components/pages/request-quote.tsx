"use client";
import SEOHead from "@/components/ui/seo-head";

import { Button } from "@/components/ui/button";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import HubSpotForm from "@/components/ui/hubspot-form";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Star, MessageSquare, Phone, Clock, FileText, Send, Award, Globe, CheckCircle, Users } from "lucide-react";
import { seoConfig, localBusinessSchema, getBreadcrumbSchema, BASE_URL } from "@/lib/seo-config";

export default function RequestQuote() {
  const contactStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessSchema,
      getBreadcrumbSchema("Contact", "/request-quote")
    ]
  };

  return (
    <div className="min-h-screen band-dark">
      <SEOHead 
        title={seoConfig.contact.title}
        description={seoConfig.contact.description}
        keywords={seoConfig.contact.keywords}
        canonicalUrl={`${BASE_URL}/request-quote`}
        structuredData={contactStructuredData}
      />
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="headline-xl text-white mb-6">
              {seoConfig.contact.h1}
            </h1>
            <p className="text-xl text-stone-400 max-w-3xl mx-auto leading-relaxed">
              Ready to grow your business? Tell us about your project and we'll provide a detailed proposal with transparent pricing and clear timelines.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bento-card shadow-offset">
                  <div className="p-6 border-b-2 border-foreground/20">
                    <h2 className="headline-md text-foreground mb-2">PROJECT DETAILS</h2>
                    <p className="text-stone-500">
                      Help us understand your needs so we can provide the most accurate quote.
                    </p>
                  </div>
                  <div className="p-6">
                    <HubSpotForm 
                      formId="ea6d1545-3b9d-4c04-b6c9-37b6e220252f"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bento-card shadow-offset">
                  <div className="p-6 border-b-2 border-foreground/20">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <h3 className="font-display uppercase text-foreground">Why Business Builders?</h3>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <h4 className="font-display uppercase text-sm text-foreground mb-1">26+ Years of Experience</h4>
                      <p className="text-sm text-stone-500">Proven track record of delivering results for businesses, ministries, and non-profits.</p>
                    </div>
                    <div>
                      <h4 className="font-display uppercase text-sm text-foreground mb-1">3-Step Process</h4>
                      <p className="text-sm text-stone-500">Plan, Produce, Promote - our systematic approach ensures success.</p>
                    </div>
                    <div>
                      <h4 className="font-display uppercase text-sm text-foreground mb-1">Full-Service Team</h4>
                      <p className="text-sm text-stone-500">From strategy to execution, we handle everything in-house.</p>
                    </div>
                    <div>
                      <h4 className="font-display uppercase text-sm text-foreground mb-1">Transparent Pricing</h4>
                      <p className="text-sm text-stone-500">No hidden fees - you'll know exactly what you're getting.</p>
                    </div>
                  </div>
                </div>

                <div className="bento-card shadow-offset">
                  <div className="p-6 border-b-2 border-foreground/20">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-yellow-400" />
                      <h3 className="font-display uppercase text-foreground">Have Questions?</h3>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <p className="text-sm text-stone-500">
                      Not sure what you need? We're here to help you figure out the best solution for your goals.
                    </p>
                    <Button variant="outline" size="sm" asChild className="w-full bg-yellow-400 border-2 border-foreground hover:bg-yellow-500 rounded-none shadow-offset-sm hover-press">
                      <a href="https://go.businessbldrs.com/meetings/chris736/15-minute-discovery-call" target="_blank" rel="noopener noreferrer" data-testid="button-schedule-call" className="text-foreground hover:text-foreground">
                        <Phone className="w-4 h-4 mr-2" />
                        Schedule a Call
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="bento-card shadow-offset">
                  <div className="p-4">
                    <div className="text-center">
                      <span className="label-industrial bg-yellow-400 text-foreground px-3 py-1 inline-block mb-2">Free Consultation</span>
                      <p className="text-sm text-stone-500">
                        Every quote includes a complimentary strategy session to ensure we're the right fit for your project.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20 band-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="headline-lg text-foreground mb-6">
              <span className="text-yellow-400">VISIT</span> OUR OFFICE
            </h2>
            <p className="text-xl text-stone-500 max-w-3xl mx-auto">
              Located in the heart of St. Augustine, Florida
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="bento-card shadow-offset p-4 w-full max-w-4xl">
              <iframe
                src="https://maps.google.com/maps?cid=8925184823014812967&output=embed"
                loading="lazy"
                width="100%"
                height="450px"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
                allowFullScreen
                style={{ border: '0' }}
                data-testid="iframe-google-map"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* What to Expect */}
      <section className="py-20 band-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg text-white mb-6">
              What to <span className="text-yellow-400">Expect</span>
            </h2>
            <p className="text-xl text-stone-400 max-w-3xl mx-auto">
              From first contact to custom proposal, here is how our process works.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-400 border-2 border-charcoal-800 flex items-center justify-center mx-auto mb-6 shadow-offset">
                <Send className="w-9 h-9 text-charcoal-900" />
              </div>
              <h3 className="font-display font-bold text-xl uppercase text-white mb-3">Submit Your Request</h3>
              <p className="text-stone-400">
                Fill out the form above with your project details. The more you share about your goals and timeline, the more accurate your proposal will be.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-400 border-2 border-charcoal-800 flex items-center justify-center mx-auto mb-6 shadow-offset">
                <FileText className="w-9 h-9 text-charcoal-900" />
              </div>
              <h3 className="font-display font-bold text-xl uppercase text-white mb-3">Receive a Custom Proposal</h3>
              <p className="text-stone-400">
                Within 48 hours, our team will put together a detailed proposal tailored to your needs -- including scope, timeline, and transparent pricing with no hidden fees.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-400 border-2 border-charcoal-800 flex items-center justify-center mx-auto mb-6 shadow-offset">
                <Users className="w-9 h-9 text-charcoal-900" />
              </div>
              <h3 className="font-display font-bold text-xl uppercase text-white mb-3">Review and Discuss</h3>
              <p className="text-stone-400">
                We will schedule a call to walk through the proposal together, answer your questions, and make sure the plan fits your budget and business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Business Builders */}
      <section className="py-20 band-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg text-charcoal-900 mb-6">
              Why Choose <span className="text-yellow-400">Business Builders</span>
            </h2>
            <p className="text-xl text-stone-500 max-w-3xl mx-auto">
              We have been helping businesses grow online since 1999. Here is what sets us apart.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bento-card bg-white p-8 text-center shadow-offset">
              <div className="w-16 h-16 bg-yellow-400 border-2 border-charcoal-800 flex items-center justify-center mx-auto mb-6 shadow-offset">
                <Award className="w-8 h-8 text-charcoal-900" />
              </div>
              <h3 className="font-display font-bold text-lg uppercase text-charcoal-900 mb-2">26+ Years Experience</h3>
              <p className="text-stone-500 text-sm">
                Over two decades of building websites and marketing strategies for businesses, ministries, and non-profits across the country.
              </p>
            </div>

            <div className="bento-card bg-white p-8 text-center shadow-offset">
              <div className="w-16 h-16 bg-yellow-400 border-2 border-charcoal-800 flex items-center justify-center mx-auto mb-6 shadow-offset">
                <Globe className="w-8 h-8 text-charcoal-900" />
              </div>
              <h3 className="font-display font-bold text-lg uppercase text-charcoal-900 mb-2">100+ Websites Built</h3>
              <p className="text-stone-500 text-sm">
                From local small businesses to national organizations, we have designed and launched websites that drive real results.
              </p>
            </div>

            <div className="bento-card bg-white p-8 text-center shadow-offset">
              <div className="w-16 h-16 bg-yellow-400 border-2 border-charcoal-800 flex items-center justify-center mx-auto mb-6 shadow-offset">
                <CheckCircle className="w-8 h-8 text-charcoal-900" />
              </div>
              <h3 className="font-display font-bold text-lg uppercase text-charcoal-900 mb-2">StoryBrand Certified</h3>
              <p className="text-stone-500 text-sm">
                We use the proven StoryBrand messaging framework to clarify your message so customers listen and take action.
              </p>
            </div>

            <div className="bento-card bg-white p-8 text-center shadow-offset">
              <div className="w-16 h-16 bg-yellow-400 border-2 border-charcoal-800 flex items-center justify-center mx-auto mb-6 shadow-offset">
                <Star className="w-8 h-8 text-charcoal-900" />
              </div>
              <h3 className="font-display font-bold text-lg uppercase text-charcoal-900 mb-2">HubSpot Platinum Partner</h3>
              <p className="text-stone-500 text-sm">
                As a Platinum HubSpot Solutions Partner, we bring advanced CRM, automation, and inbound marketing expertise to every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 band-stone">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg text-foreground mb-6">
              Frequently Asked <span className="text-yellow-400">Questions</span>
            </h2>
            <p className="text-xl text-stone-500 max-w-3xl mx-auto">
              Common questions about requesting a quote from Business Builders
            </p>
          </div>

          <div className="border-2 border-secondary shadow-offset overflow-hidden bg-white">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b-2 border-secondary">
                <AccordionTrigger className="text-left text-lg font-display uppercase text-secondary hover:text-yellow-600 px-6 py-4 hover:no-underline">
                  How long until I hear back?
                </AccordionTrigger>
                <AccordionContent className="text-stone-500 px-6 pb-4">
                  Our team reviews every request within one business day. You will receive a personalized proposal within 48 hours of submitting your form. For complex projects that require additional research, we will reach out within 24 hours to let you know we are working on it and share an estimated timeline.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b-2 border-secondary">
                <AccordionTrigger className="text-left text-lg font-display uppercase text-secondary hover:text-yellow-600 px-6 py-4 hover:no-underline">
                  What information do you need from me?
                </AccordionTrigger>
                <AccordionContent className="text-stone-500 px-6 pb-4">
                  The more detail you can provide, the better. At a minimum, we need to understand your business, the type of project you have in mind (website, marketing, branding, etc.), your goals, and any timeline or budget considerations. If you are not sure exactly what you need yet, that is completely fine -- we will help you figure it out during the consultation call.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-lg font-display uppercase text-secondary hover:text-yellow-600 px-6 py-4 hover:no-underline">
                  Is the consultation really free?
                </AccordionTrigger>
                <AccordionContent className="text-stone-500 px-6 pb-4">
                  Yes, absolutely. Every quote request includes a complimentary strategy session at no cost and with no obligation. We use this time to understand your business, ask the right questions, and determine if we are a good fit for each other. Whether you move forward with us or not, you will walk away with useful insights about your project.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <MegaFooter />
    </div>
  );
}
