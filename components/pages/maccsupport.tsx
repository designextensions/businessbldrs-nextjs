"use client";
import SEOHead from "@/components/ui/seo-head";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp, Clock, Shield, CreditCard, Users, AlertTriangle, Play, Loader2 } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useQuery } from "@tanstack/react-query";
const maccLogoImage = "/assets/macc-new-logo-web-fotor-20240502122129.png";

const supportFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  website: z.string().url("Please enter a valid website URL"),
  request: z.string().min(10, "Please provide more details about your request")
});

type SupportFormData = z.infer<typeof supportFormSchema>;

interface FAQItem {
  question: string;
  answer: string;
}

export default function MACCSupport() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const { data: tokenData, refetch: refetchToken } = useQuery<{ token: string }>({
    queryKey: ['/api/form-token'],
    staleTime: 25 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  const form = useForm<SupportFormData>({
    resolver: zodResolver(supportFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      website: "",
      request: ""
    }
  });

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const onSubmit = async (data: SupportFormData) => {
    setIsSubmitting(true);
    try {
      const honeypotValue = (document.getElementById('macc-company-field') as HTMLInputElement)?.value || '';
      
      const response = await fetch('/api/macc-support', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          honeypot: honeypotValue,
          spamToken: tokenData?.token,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit support request');
      }

      toast({
        title: "Support Request Submitted",
        description: "Thank you! We'll respond within 24 hours during business hours. You'll receive a confirmation email shortly.",
      });
      refetchToken();
      form.reset();
    } catch (error) {
      console.error('Support form submission error:', error);
      toast({
        title: "Error",
        description: "Failed to submit request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs: FAQItem[] = [
    {
      question: "What if my site is down?",
      answer: "Please contact \"urgent@businessbldrs.com\" immediately. IF YOUR WEBSITE IS DOWN OR HACKED — please email urgent@businessbldrs.com so that our team can work to resolve the issue ASAP."
    },
    {
      question: "When should I expect a response to my requests?",
      answer: "Our normal office hours are from 9 am – 5 pm EST, Monday – Friday. We aim to respond to your support request within 24 hrs, and if the request is submitted after 4 pm EST, it will be responded to the following business day."
    },
    {
      question: "How does billing/project approval work?",
      answer: "For projects requiring billable hours, Business Builders will provide an estimate in advance of the work and your approval will be required before the project begins."
    },
    {
      question: "Who will invoice us?",
      answer: "Work completed by Business Builders will be billed through MACC and be included as an item on your monthly invoice from MACC."
    },
    {
      question: "What types of support requests do you handle?",
      answer: "We handle a wide range of website technical needs including content updates, functionality issues, security concerns, performance optimization, plugin updates, and general maintenance. If you're unsure whether we can help, just ask!"
    },
    {
      question: "Do you provide emergency support?",
      answer: "Yes! For urgent issues like website downtime or security breaches, contact urgent@businessbldrs.com immediately. We prioritize emergency requests and work to resolve critical issues as quickly as possible."
    },
    {
      question: "Can you help with website updates and content changes?",
      answer: "Absolutely! We can help with content updates, adding new pages, updating images, modifying layouts, and making other changes to keep your website current and effective."
    },
    {
      question: "What if I need help outside of business hours?",
      answer: "While our standard support hours are 9 AM - 5 PM EST, Monday - Friday, you can still submit support requests through this form anytime. For true emergencies (site down/hacked), email urgent@businessbldrs.com even outside business hours."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-white text-foreground">
      <SEOHead
        title="MACC Website Support - Business Builders Technical Support"
        description="Get technical support for your MACC website from Business Builders. Submit support requests, get help with website issues, and access resources for website management."
        keywords="MACC support, website support, technical support, Business Builders, website help, website maintenance"
        canonicalUrl="https://businessbldrs.com/maccsupport"
        structuredData={faqSchema}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="band-white pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "MACC Support" }]} />
          
          <div className="text-center mb-16">
            <div className="mb-8">
              <img 
                src={maccLogoImage} 
                alt="MACC - Managed Accounts Client Care support portal logo" 
                className="h-16 mx-auto mb-6"
                width="200"
                height="64"
              />
            </div>
            <h1 className="headline-xl mb-6 text-charcoal-900">
              Website <span className="text-yellow-500">Support Request</span>
            </h1>
            <p className="text-xl lg:text-2xl text-stone-600 max-w-3xl mx-auto">
              Need help with your website? Submit a support request and our team will respond within 24 hours during business hours.
            </p>
          </div>
        </div>
      </section>

      {/* Support Form Section */}
      <section className="py-20 band-stone">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bento-card bg-white">
            <div className="p-8 border-b-2 border-secondary">
              <h2 className="headline-md text-center text-yellow-600">
                Submit Your Support Request
              </h2>
            </div>
            <div className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-secondary font-display uppercase">First Name *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="bg-white border-2 border-secondary text-secondary focus:border-yellow-400"
                              data-testid="input-first-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-secondary font-display uppercase">Last Name *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="bg-white border-2 border-secondary text-secondary focus:border-yellow-400"
                              data-testid="input-last-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-secondary font-display uppercase">Email *</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            {...field}
                            className="bg-white border-2 border-secondary text-secondary focus:border-yellow-400"
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-secondary font-display uppercase">Website *</FormLabel>
                        <FormControl>
                          <Input
                            type="url"
                            placeholder="https://example.com"
                            {...field}
                            className="bg-white border-2 border-secondary text-secondary focus:border-yellow-400"
                            data-testid="input-website"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="request"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-secondary font-display uppercase">Request for website *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Please provide as much information as possible so we can best help you. Links are helpful as well!"
                            rows={6}
                            {...field}
                            className="bg-white border-2 border-secondary text-secondary focus:border-yellow-400 resize-none"
                            data-testid="textarea-request"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {/* Honeypot field - hidden from users */}
                  <div style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
                    <label htmlFor="macc-company-field">Company</label>
                    <input
                      type="text"
                      id="macc-company-field"
                      name="company"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting || !tokenData?.token}
                    className="w-full bg-yellow-400 text-secondary font-display uppercase py-3 hover:bg-yellow-300 transition-all duration-300 disabled:opacity-50 border-2 border-secondary shadow-offset hover-press"
                    data-testid="button-submit-support"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin inline" />
                        Submitting...
                      </>
                    ) : !tokenData?.token ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin inline" />
                        Loading...
                      </>
                    ) : (
                      "Submit Support Request"
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Information Cards Section */}
      <section className="py-20 band-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Emergency Contact */}
            <div className="bg-secondary border-2 border-red-500 p-6 text-center shadow-offset transition-all duration-300 hover:translate-y-[-4px]">
              <AlertTriangle className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-display uppercase mb-3 text-red-400">Site Down?</h3>
              <p className="text-stone-400 text-sm mb-4">
                For urgent issues like downtime or security breaches
              </p>
              <a 
                href="mailto:urgent@businessbldrs.com"
                className="text-red-400 hover:text-red-300 font-display uppercase underline text-sm"
                data-testid="link-urgent-email"
              >
                urgent@businessbldrs.com
              </a>
            </div>

            {/* Response Time */}
            <div className="bg-secondary border-2 border-stone-600 p-6 text-center shadow-offset transition-all duration-300 hover:translate-y-[-4px] hover:border-yellow-400">
              <Clock className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-display uppercase mb-3 text-yellow-400">Response Time</h3>
              <p className="text-stone-400 text-sm">
                24-hour response during business hours (9 AM - 5 PM EST, Mon-Fri)
              </p>
            </div>

            {/* About Business Builders */}
            <div className="bg-secondary border-2 border-stone-600 p-6 text-center shadow-offset transition-all duration-300 hover:translate-y-[-4px] hover:border-yellow-400">
              <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-display uppercase mb-3 text-yellow-400">Who We Are</h3>
              <p className="text-stone-400 text-sm">
                Marketing agency with 26+ years helping companies achieve success
              </p>
            </div>

            {/* Billing */}
            <div className="bg-secondary border-2 border-stone-600 p-6 text-center shadow-offset transition-all duration-300 hover:translate-y-[-4px] hover:border-yellow-400">
              <CreditCard className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-display uppercase mb-3 text-yellow-400">Billing</h3>
              <p className="text-stone-400 text-sm">
                Work billed through MACC on your monthly invoice
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 band-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg mb-6 text-secondary">
              Frequently Asked <span className="text-yellow-500">Questions</span>
            </h2>
            <p className="text-xl text-stone-500">
              Common questions about our support services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bento-card bg-white transition-all duration-300 hover:translate-y-[-2px]">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left p-6 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-inset"
                  aria-expanded={openItems.includes(index)}
                  data-testid={`faq-question-${index}`}
                >
                  <h3 className="text-lg font-display uppercase text-secondary pr-4">
                    {faq.question}
                  </h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  )}
                </button>
                
                {openItems.includes(index) && (
                  <div 
                    className="px-6 pb-6 text-stone-500 leading-relaxed"
                    data-testid={`faq-answer-${index}`}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Masterclass Section */}
      <section className="py-20 band-stone">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="headline-lg mb-6 text-secondary">
              <span className="text-yellow-500">FREE RESOURCE</span>
            </h2>
          </div>
          
          <div className="bento-card bg-white">
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="headline-md mb-6 text-yellow-600">
                    Marketing Masterclass
                  </h3>
                  <p className="text-xl text-stone-500 mb-6 leading-relaxed">
                    Demystify marketing with our Marketing Masterclass! Enjoy this free video series and learn how to generate attention and acquire new customers through clear messaging and smart marketing.
                  </p>
                  <Button 
                    className="bg-yellow-400 text-secondary px-8 py-3 font-display uppercase hover:bg-yellow-300 transition-all duration-300 shadow-offset hover-press border-2 border-secondary"
                    data-testid="button-masterclass-preview"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Course Preview
                  </Button>
                </div>
                <div className="relative">
                  <div className="aspect-video bg-yellow-400 border-2 border-secondary flex items-center justify-center shadow-offset">
                    <Play className="w-16 h-16 text-secondary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MegaFooter />
    </div>
  );
}
