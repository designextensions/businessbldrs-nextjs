"use client";
import Link from "next/link";
import Image from "next/image";
import SEOHead from "@/components/ui/seo-head";

import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Shield, Clock, Zap, ArrowRight, Users, FileText, BarChart3, Star, Mail } from "lucide-react";

export default function Maintenance() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const plans = [
    {
      name: "Maintain",
      price: "$99/mo",
      billing: "Billed hourly at $160/hour",
      requestTime: "3 days",
      features: [
        "WordPress Core Updates",
        "WordPress Theme & Plugins Update", 
        "Daily Security Checks",
        "Speed Optimization"
      ],
      popular: false
    },
    {
      name: "Performance", 
      price: "$320/mo",
      billing: "Save 31% on Pre-Packaged hours",
      supportHours: "2 Hours Per Month",
      requestTime: "2 days", 
      features: [
        "WordPress Core Updates",
        "WordPress Theme & Plugins Update",
        "Daily Security Checks", 
        "Speed Optimization",
        "2 Hours Monthly Support"
      ],
      popular: true
    },
    {
      name: "Accelerated",
      price: "$640/mo", 
      supportHours: "4 Hours Per Month",
      requestTime: "1 day",
      frequency: "One time",
      features: [
        "WordPress Core Updates",
        "WordPress Theme & Plugins Update",
        "Daily Security Checks",
        "Speed Optimization", 
        "E-commerce & Advanced Functionality",
        "4 Hours Monthly Support"
      ],
      popular: false
    },
    {
      name: "Custom Plan",
      price: "Contact Us",
      description: "Contact our sales team to get a custom quote",
      features: [
        "All features included",
        "Custom development",
        "Priority support",
        "Tailored to your needs"
      ],
      popular: false
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "PICK A PLAN",
      description: "Choose the maintenance plan that best fits your website's needs. Need help deciding which plan you need? Contact us for more assistance.",
      icon: Users
    },
    {
      number: "02", 
      title: "JUMP ON A QUICK CALL",
      description: "We will send you a meeting link to hop on a quick call to introduce ourselves and discuss your website needs.",
      icon: FileText
    },
    {
      number: "03",
      title: "ENJOY A WORRY-FREE WEBSITE", 
      description: "We will onboard you into our maintenance and hosting plans. Sit back and know that your website is in good hands.",
      icon: BarChart3
    }
  ];

  const quickFeatures = [
    "WordPress Core Updates",
    "Daily Security Checks", 
    "Speed Optimization",
    "Plugin Updates",
    "99.9% Uptime"
  ];

  return (
    <div className="min-h-screen bg-white text-foreground">
      <SEOHead 
        title="Website Maintenance Services - Business Builders"
        description="Professional WordPress maintenance services starting at $99/month. Daily security checks, updates, and support to keep your website running smoothly."
        canonicalUrl="/maintenance"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="band-white pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="label-industrial text-charcoal-900 border-2 border-charcoal-900 px-4 py-2 inline-block mb-6">
                SERVICES
              </span>
              <h1 className="headline-lg mb-6 text-charcoal-900">
                WEBSITE<br />
                <span className="text-yellow-500">MAINTENANCE</span>
              </h1>
              <p className="font-body text-xl lg:text-2xl text-stone-600 leading-relaxed mb-8">
                <strong>We will care for and manage your site so you can spend your time doing what you do best.</strong> Keep your website secure, fast, and up-to-date with our professional maintenance services.
              </p>
              <Button 
                onClick={() => scrollToSection('packages')}
                className="font-display uppercase bg-yellow-400 text-secondary px-8 py-4 font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-offset hover-press border-2 border-charcoal-900"
              >
                View Packages
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                sizes="(max-width: 768px) 100vw, 50vw"
                width={800}
                height={600}
                priority
                alt="Website maintenance and management services dashboard by Business Builders"
                className="shadow-offset w-full border-2 border-charcoal-900"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 band-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="headline-lg mb-6 text-secondary">
            Keep Your Website <span className="text-yellow-500">Running Smoothly</span>
          </h2>
          <p className="text-xl lg:text-2xl text-stone-500 mb-12">
            <strong>Your website deserves the best care.</strong>
          </p>
          
          <div className="grid md:grid-cols-5 gap-6 mb-12">
            {quickFeatures.map((feature, index) => (
              <div key={index} className="bento-card bg-white p-6 text-center">
                <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center mx-auto mb-4 border-2 border-secondary">
                  <Check className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-display uppercase text-secondary">{feature}</h3>
              </div>
            ))}
          </div>
          
          <Link href="/request-quote">
            <Button 
              className="bg-yellow-400 text-secondary px-12 py-5 font-display uppercase text-xl hover:bg-yellow-300 transition-all duration-300 shadow-offset hover-press border-2 border-secondary"
            >
              SCHEDULE A CALL
            </Button>
          </Link>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 band-dark" id="packages">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg mb-8">
              Maintenance <span className="text-yellow-400">Packages</span>
            </h2>
            <p className="text-xl text-stone-400">Choose the perfect maintenance plan for your website needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative p-8 border-2 transition-all duration-300 hover:translate-y-[-4px] ${
                  plan.popular 
                    ? 'border-yellow-400 bg-secondary shadow-offset-yellow' 
                    : 'border-stone-600 bg-secondary shadow-offset'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="label-industrial bg-yellow-400 text-secondary px-4 py-2 whitespace-nowrap border-2 border-secondary">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-display uppercase mb-2">{plan.name}</h3>
                  <div className="text-4xl font-display text-yellow-400 mb-2">{plan.price}</div>
                  {plan.billing && (
                    <p className="text-stone-500 text-sm mb-2">{plan.billing}</p>
                  )}
                  {plan.supportHours && (
                    <p className="text-stone-400 text-sm mb-2">{plan.supportHours}</p>
                  )}
                  {plan.requestTime && (
                    <p className="text-stone-500 text-sm">Request Start Time: {plan.requestTime}</p>
                  )}
                  {plan.description && (
                    <p className="text-stone-500 text-sm mt-2">{plan.description}</p>
                  )}
                </div>
                
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-sm text-stone-400">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link href="/request-quote">
                  <Button 
                    className={`w-full py-3 font-display uppercase transition-all duration-300 border-2 ${
                      plan.popular 
                        ? 'bg-yellow-400 text-secondary border-yellow-400 hover:bg-yellow-300' 
                        : 'bg-white text-secondary border-secondary hover:bg-stone-100'
                    }`}
                  >
                    GET STARTED
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Information */}
      <section className="py-20 band-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg mb-8 text-secondary">
              <span className="text-yellow-500">Support</span> Information
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bento-card bg-white p-8">
                <div className="flex items-center mb-6">
                  <Mail className="w-12 h-12 text-yellow-500 mr-4" />
                  <div>
                    <h3 className="text-2xl font-display uppercase text-secondary mb-2">Email Support</h3>
                    <p className="text-yellow-600 font-medium">support@businessbldrs.com</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <Clock className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                    <h4 className="font-display uppercase text-secondary mb-2">Availability</h4>
                    <p className="text-stone-500">Monday – Friday<br />9:00am – 5:00pm EST</p>
                  </div>
                  <div className="text-center">
                    <Zap className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                    <h4 className="font-display uppercase text-secondary mb-2">Additional Hours</h4>
                    <p className="text-stone-500">$160/hr for requests over allotted monthly hours</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-display uppercase text-secondary mb-6">Important Notes</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-yellow-500 mt-1 mr-4 flex-shrink-0" />
                  <span className="text-stone-500">Support within 3rd party services is not included in our maintenance plans. Only assistance in connecting these services to the website.</span>
                </div>
                <div className="bento-card bg-white p-6">
                  <h4 className="font-display uppercase text-secondary mb-3">Hosting with us but not on a maintenance plan?</h4>
                  <p className="text-stone-500 text-sm">
                    We can assist you with website updates at our non-maintenance client request rate of $200/hour. Hours will be determined based on scope of the project. Please reach out to <strong className="text-yellow-600">support@businessbldrs.com</strong> to submit your non-maintenance client support request.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 band-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg mb-8 text-secondary">
              How to <span className="text-yellow-500">Work With Us</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-yellow-400 flex items-center justify-center mx-auto mb-6 border-2 border-secondary shadow-offset">
                  <step.icon className="w-10 h-10 text-secondary" />
                </div>
                <div className="text-yellow-500 text-6xl font-display mb-4">{step.number}</div>
                <h3 className="text-xl font-display uppercase mb-4 text-secondary">{step.title}</h3>
                <p className="text-stone-500 leading-relaxed">{step.description}</p>
                {step.number === "02" && (
                  <p className="text-sm text-yellow-600 mt-4">
                    Please note that we require our maintenance clients to be on a hosting plan. Hosting plans start at $50/month.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 band-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="headline-lg mb-8">
            You're in <span className="text-yellow-400">Good Hands!</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-secondary border-2 border-stone-700 p-8 text-center shadow-offset">
              <div className="text-4xl font-display text-yellow-400 mb-3">HUNDREDS</div>
              <div className="text-stone-400 font-display uppercase">OF SITES HOSTED</div>
            </div>
            
            <div className="bg-secondary border-2 border-stone-700 p-8 text-center shadow-offset">
              <div className="text-4xl font-display text-yellow-400 mb-3">99.9%</div>
              <div className="text-stone-400 font-display uppercase">UPTIME</div>
            </div>
            
            <div className="bg-secondary border-2 border-stone-700 p-8 text-center shadow-offset">
              <Shield className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <div className="text-stone-400 font-display uppercase">SSL SECURITY INCLUDED</div>
            </div>
          </div>
          
          {/* Testimonial */}
          <div className="bg-secondary border-2 border-yellow-400 p-8 max-w-4xl mx-auto shadow-offset-yellow">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <h3 className="text-2xl font-display uppercase mb-4">
              <span className="text-yellow-400">Outstanding</span> Support and Service!
            </h3>
            <blockquote className="text-lg text-stone-400 mb-6 font-serif italic">
              "Our experience with Business Builders and the corresponding maintenance plan has been great. The team is always very prompt to respond and act on the issue and perhaps more importantly, is always very friendly and accommodating during the process. We enjoyed working with the team to rebuild the website and monitor and maintain it thereafter. Thank you for all your help!"
            </blockquote>
            <cite className="label-industrial text-yellow-400">
              MEGAN WITH INSIDE TOWERS
            </cite>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 band-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg mb-8 text-secondary">
              Frequently Asked <span className="text-yellow-500">Questions</span>
            </h2>
            <p className="text-xl text-stone-500">Get answers to common questions about our maintenance services</p>
          </div>
          
          <div className="border-2 border-secondary shadow-offset overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b-2 border-secondary">
                <AccordionTrigger className="text-left text-lg font-display uppercase text-secondary hover:text-yellow-600 px-6 py-4 hover:no-underline">
                  How fast will requests be handled?
                </AccordionTrigger>
                <AccordionContent className="text-stone-500 px-6 pb-4">
                  Our team typically responds to a request within 24 hours. The complexity of the request will determine the completion time, but we will let you know!
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b-2 border-secondary">
                <AccordionTrigger className="text-left text-lg font-display uppercase text-secondary hover:text-yellow-600 px-6 py-4 hover:no-underline">
                  How will I be billed?
                </AccordionTrigger>
                <AccordionContent className="text-stone-500 px-6 pb-4">
                  The monthly plan costs are set up on automatic payment via Credit Card or ACH with a minimum 12-month agreement. After that time, you can cancel with 30 days' notice.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b-2 border-secondary">
                <AccordionTrigger className="text-left text-lg font-display uppercase text-secondary hover:text-yellow-600 px-6 py-4 hover:no-underline">
                  What is included in my edits?
                </AccordionTrigger>
                <AccordionContent className="text-stone-500 px-6 pb-4">
                  <p className="mb-4">
                    <strong className="text-secondary">Website edits do include:</strong> Edits to text, swapping out images, editing banners & sliders, editing headers or footers, changes to menus and navigation, adjusting plugin settings, and adding new pages (with the design of an existing site page from the website, with any new images and copy provided by the client) and helping to resolve website issues.
                  </p>
                  <p>
                    <strong className="text-secondary">Website edits do not include:</strong> Custom development (PHP, plugins, themes, etc), updating custom code, graphic design, creation or sourcing of content (images, copy, videos, etc), marketing-related tasks like SEO management or Google Analytics goals, building out advanced functionality like LMS systems or eCommerce, or building out custom-designed pages. If you need help with those things, we are happy to partner with you and quote these items outside of your maintenance plan.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b-2 border-secondary">
                <AccordionTrigger className="text-left text-lg font-display uppercase text-secondary hover:text-yellow-600 px-6 py-4 hover:no-underline">
                  How do we communicate?
                </AccordionTrigger>
                <AccordionContent className="text-stone-500 px-6 pb-4">
                  You can simply email in your request to us at <strong className="text-yellow-600">support@businessbldrs.com</strong> and it will create a ticket in our help desk. Our team will reply within 24 hrs to get your request started!
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-b-2 border-secondary">
                <AccordionTrigger className="text-left text-lg font-display uppercase text-secondary hover:text-yellow-600 px-6 py-4 hover:no-underline">
                  Are all plugins updated monthly?
                </AccordionTrigger>
                <AccordionContent className="text-stone-500 px-6 pb-4">
                  We update plugins, theme, and core file updates on a monthly basis! There are some plugins that our team may not update based on the age of the site, as it may break it. We will always update plugins if there are security issues. Most importantly, you don't need to worry about any of the updates because we'll handle them all for you.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left text-lg font-display uppercase text-secondary hover:text-yellow-600 px-6 py-4 hover:no-underline">
                  What's included in hosting?
                </AccordionTrigger>
                <AccordionContent className="text-stone-500 px-6 pb-4">
                  <p className="mb-4">
                    Hosting your website with us allows your website to have a live space on the internet for traffic to visit. Included in hosting, we provide server support to keep your website up and running at a quick speed. If the server that your site lives on goes down, we will work with the server team to get your site back online ASAP. We also take nightly backups of your site so that you do not lose content. We only use the best hosting options which provide server security to your site.
                  </p>
                  <p>
                    You will need to have your website on a maintenance plan in order to receive support for your website. Hosting includes keeping the website online, making sure the server is running fast, nightly backups, security, and hack repairs if something goes south with security.
                  </p>
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
