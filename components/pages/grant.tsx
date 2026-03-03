"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Heart, Palette, MessageSquare, Globe, Server, Wrench, Mail, Share2, CheckCircle, Gift, Users, Building, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";

interface FormData {
  organizationName: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  organizationType: string;
  website: string;
  yearFounded: string;
  missionStatement: string;
  annualBudget: string;
  currentMarketingEfforts: string;
  whyTheyNeedGrant: string;
  howTheyHeardAboutUs: string;
  honeypot: string;
}

const packageItems = [
  {
    icon: Palette,
    title: "Updated Brand Kit",
    description: "Complete visual identity refresh including logo refinements, color palette, typography system, and brand guidelines document.",
    value: "$5,000",
  },
  {
    icon: MessageSquare,
    title: "Custom Messaging Strategy",
    description: "A StoryBrand-based messaging framework that clarifies your mission, engages donors, and inspires action.",
    value: "$7,500",
  },
  {
    icon: Globe,
    title: "Custom Website Redesign",
    description: "A fully custom, mobile-responsive website designed to tell your story and convert visitors into supporters.",
    value: "$15,000",
  },
  {
    icon: Server,
    title: "Website Hosting (1 Year)",
    description: "Fast, secure, managed hosting with SSL certificate, daily backups, and 99.9% uptime guarantee.",
    value: "$2,400",
  },
  {
    icon: Wrench,
    title: "Website Updates (1 Year)",
    description: "Basic content updates, security patches, and minor adjustments to keep your site running smoothly.",
    value: "$6,000",
  },
  {
    icon: Mail,
    title: "Email/Newsletter Templates",
    description: "Professionally designed email templates for newsletters, appeals, and donor communications — delivered for one quarter.",
    value: "$3,600",
  },
  {
    icon: Share2,
    title: "Social Media Templates",
    description: "A branded template kit for social media posts that maintains visual consistency across all platforms.",
    value: "$2,500",
  },
  {
    icon: Heart,
    title: "12 Custom Social Posts",
    description: "Twelve professionally designed, on-brand social media graphics with copy — ready to publish.",
    value: "$3,000",
  },
];

const faqs = [
  {
    question: "Who is eligible to apply for the grant?",
    answer: "Any registered 501(c)(3) nonprofit organization or church is eligible to apply. Your organization must have been active for at least one year and be in good standing. We welcome applications from organizations of all sizes and mission areas.",
  },
  {
    question: "When is the application deadline?",
    answer: "The deadline for the 2026 grant is March 14, 2026. All applications must be received by that date to be considered. We announce the winner shortly after the deadline closes.",
  },
  {
    question: "How is the grant recipient selected?",
    answer: "Our team reviews all applications based on several factors: the clarity and impact of the organization's mission, the potential for marketing to amplify their reach, their current marketing needs, and how effectively the grant package could transform their outreach efforts.",
  },
  {
    question: "What are the obligations of the grant recipient?",
    answer: "The grant recipient agrees to collaborate with our team throughout the project, provide timely feedback and content, and allow us to feature the project as a case study. There is no financial obligation — the entire $50,000 package is provided at no cost.",
  },
  {
    question: "Can we apply again if we aren't selected?",
    answer: "Absolutely. Organizations that are not selected are encouraged to reapply in subsequent years. We keep all applications on file and your previous submission can strengthen a future application as your organization grows.",
  },
  {
    question: "What if we only need some of the services?",
    answer: "The grant package is designed as a comprehensive marketing transformation. However, we work closely with each recipient to customize the deliverables to their specific needs. If certain elements aren't relevant, we can adjust the scope to maximize impact.",
  },
];

export default function GrantPage() {
  const [formData, setFormData] = useState<FormData>({
    organizationName: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    organizationType: "",
    website: "",
    yearFounded: "",
    missionStatement: "",
    annualBudget: "",
    currentMarketingEfforts: "",
    whyTheyNeedGrant: "",
    howTheyHeardAboutUs: "",
    honeypot: "",
  });
  const [formStep, setFormStep] = useState<1 | 2>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isStep1Valid =
    formData.contactName.trim().length >= 2 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactEmail.trim());

  const isStep2Valid =
    formData.organizationName.trim().length >= 2 &&
    formData.organizationType !== "" &&
    formData.missionStatement.trim().length >= 20 &&
    formData.whyTheyNeedGrant.trim().length >= 20;

  const handleStep1Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isStep1Valid || isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/grant-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          step: 1,
          contactName: formData.contactName,
          contactEmail: formData.contactEmail,
          website: formData.website,
          honeypot: formData.honeypot,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setFormStep(2);
        setSubmitStatus("idle");
      } else {
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleStep2Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isStep2Valid || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const res = await fetch("/api/grant-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ step: 2, ...formData }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitStatus("success");
      } else {
        setSubmitStatus("error");
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="band-dark relative pt-32 pb-20 overflow-hidden min-h-[80vh] flex items-center">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          autoPlay
          muted
          playsInline
          loop
        >
          <source src="/attached_assets/0301.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/60 via-charcoal-900/40 to-charcoal-900/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Breadcrumbs items={[{ label: "Nonprofit Grant" }]} />
          <div className="max-w-4xl mx-auto text-center">
            <span className="label-industrial inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-charcoal-900 border-2 border-charcoal-900 shadow-offset-sm mb-6">
              <Heart className="w-4 h-4" />
              GIVING BACK
            </span>
            <h1 className="headline-xl text-white mb-6">
              Nonprofit Marketing <span className="text-yellow-400">Grant</span>
            </h1>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Each year, Business Builders awards one deserving nonprofit or church a comprehensive marketing package
              valued at <strong className="text-yellow-400">$50,000</strong> — completely free. Because every mission
              deserves to be heard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-yellow-400 text-charcoal-900 border-2 border-charcoal-900 shadow-offset hover:bg-yellow-300 font-bold text-lg px-8">
                <a href="#apply">
                  Apply Now <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="band-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="label-industrial text-yellow-600 mb-4 block">$50,000 VALUE</span>
            <h2 className="headline-xl text-charcoal-900 mb-4">What's Included</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              A complete marketing transformation designed to amplify your mission and expand your reach.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packageItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bento-card bg-white p-6 flex flex-col">
                  <div className="w-12 h-12 bg-yellow-50 border-2 border-yellow-200 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="font-bold text-charcoal-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-stone-600 text-sm flex-1 mb-3">{item.description}</p>
                  <div className="label-industrial text-yellow-600 text-sm">{item.value} VALUE</div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-charcoal-900 border-2 border-charcoal-900 text-white">
              <Gift className="w-6 h-6 text-yellow-400" />
              <span className="headline-md">Total Package Value: <span className="text-yellow-400">$50,000</span></span>
            </div>
          </div>
        </div>
      </section>

      <section className="band-stone py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-xl text-charcoal-900 mb-4">Who Can Apply</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              We want to help organizations doing meaningful work in their communities. Here's what we look for.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bento-card bg-white p-8">
              <div className="w-12 h-12 bg-yellow-50 border-2 border-yellow-200 rounded-lg flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="font-bold text-charcoal-900 text-xl mb-3">Eligible Organizations</h3>
              <ul className="space-y-3">
                {[
                  "Registered 501(c)(3) nonprofit organizations",
                  "Churches and faith-based organizations",
                  "Must have been active for at least 1 year",
                  "In good standing with state and federal regulations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-stone-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bento-card bg-white p-8">
              <div className="w-12 h-12 bg-yellow-50 border-2 border-yellow-200 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="font-bold text-charcoal-900 text-xl mb-3">What We Look For</h3>
              <ul className="space-y-3">
                {[
                  "A clear, impactful mission that serves the community",
                  "Genuine need for marketing support and resources",
                  "Willingness to collaborate throughout the project",
                  "Commitment to using the tools to further their mission",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span className="text-stone-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 bento-card bg-white p-8 text-center">
            <Clock className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
            <h3 className="font-bold text-charcoal-900 text-xl mb-2">Application Timeline</h3>
            <p className="text-stone-600 max-w-xl mx-auto">
              The deadline for the 2026 grant is <strong>March 14, 2026</strong>. All applications must be received
              by that date to be considered. The recipient is announced shortly after the deadline closes.
            </p>
          </div>
        </div>
      </section>

      <section id="apply" className="band-dark py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="label-industrial text-yellow-400 mb-4 block">APPLY TODAY</span>
            <h2 className="headline-xl text-white mb-4">Grant Application</h2>
            <p className="text-lg text-stone-400 max-w-2xl mx-auto">
              Tell us about your organization and why you'd be a great fit for our annual marketing grant.
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-sm ${formStep >= 1 ? "bg-yellow-400 border-yellow-400 text-charcoal-900" : "border-stone-500 text-stone-500"}`}>
                {formStep > 1 ? <CheckCircle className="w-5 h-5" /> : "1"}
              </div>
              <span className={`text-sm font-bold ${formStep >= 1 ? "text-yellow-400" : "text-stone-500"}`}>Your Info</span>
            </div>
            <div className={`w-12 h-0.5 ${formStep >= 2 ? "bg-yellow-400" : "bg-stone-600"}`} />
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-sm ${formStep >= 2 ? "bg-yellow-400 border-yellow-400 text-charcoal-900" : "border-stone-500 text-stone-500"}`}>
                2
              </div>
              <span className={`text-sm font-bold ${formStep >= 2 ? "text-yellow-400" : "text-stone-500"}`}>Full Application</span>
            </div>
          </div>

          {submitStatus === "success" ? (
            <div className="bento-card bg-white p-12 text-center">
              <div className="w-16 h-16 bg-green-50 border-2 border-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="headline-md text-charcoal-900 mb-4">Application Received!</h3>
              <p className="text-stone-600 text-lg mb-6 max-w-md mx-auto">
                Thank you for applying for our Nonprofit Marketing Grant. We've received your application and will review
                it carefully. We'll be in touch if we need any additional information.
              </p>
              <Button asChild className="bg-yellow-400 text-charcoal-900 border-2 border-charcoal-900 shadow-offset hover:bg-yellow-300 font-bold">
                <Link href="/">Return to Homepage</Link>
              </Button>
            </div>
          ) : formStep === 1 ? (
            <form onSubmit={handleStep1Submit} className="space-y-8">
              <div className="bento-card bg-white p-8">
                <h3 className="font-bold text-charcoal-900 text-xl mb-2 flex items-center gap-2">
                  <Users className="w-5 h-5 text-yellow-600" />
                  Get Started
                </h3>
                <p className="text-stone-500 text-sm mb-6">Just a few quick details to begin your application.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contactName" className="block text-sm font-bold text-charcoal-900 mb-2">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors text-charcoal-900 bg-white"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contactEmail" className="block text-sm font-bold text-charcoal-900 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="contactEmail"
                      name="contactEmail"
                      value={formData.contactEmail}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors text-charcoal-900 bg-white"
                      placeholder="you@organization.org"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="website" className="block text-sm font-bold text-charcoal-900 mb-2">
                      Website URL
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors text-charcoal-900 bg-white"
                      placeholder="https://yourorganization.org"
                    />
                  </div>
                </div>
              </div>

              <div className="sr-only" aria-hidden="true">
                <label htmlFor="honeypot">Leave this blank</label>
                <input
                  type="text"
                  id="honeypot"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {errorMessage && (
                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 text-red-700 text-center">
                  {errorMessage}
                </div>
              )}

              <div className="text-center">
                <Button
                  type="submit"
                  disabled={!isStep1Valid || isSubmitting}
                  size="lg"
                  className="bg-yellow-400 text-charcoal-900 border-2 border-charcoal-900 shadow-offset hover:bg-yellow-300 font-bold text-lg px-12 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Saving..." : "Continue to Application"}
                  {!isSubmitting && <ArrowRight className="w-5 h-5 ml-2" />}
                </Button>
                <p className="text-stone-400 text-sm mt-4">
                  Step 1 of 2 — we'll save your info so you can come back anytime.
                </p>
              </div>
            </form>
          ) : (
            <form onSubmit={handleStep2Submit} className="space-y-8">
              <div className="bento-card bg-white p-8">
                <h3 className="font-bold text-charcoal-900 text-xl mb-6 flex items-center gap-2">
                  <Building className="w-5 h-5 text-yellow-600" />
                  Organization Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label htmlFor="organizationName" className="block text-sm font-bold text-charcoal-900 mb-2">
                      Organization Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="organizationName"
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors text-charcoal-900 bg-white"
                      placeholder="Your organization's legal name"
                    />
                  </div>
                  <div>
                    <label htmlFor="organizationType" className="block text-sm font-bold text-charcoal-900 mb-2">
                      Organization Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="organizationType"
                      name="organizationType"
                      value={formData.organizationType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors text-charcoal-900 bg-white"
                    >
                      <option value="">Select type...</option>
                      <option value="501(c)(3) Nonprofit">501(c)(3) Nonprofit</option>
                      <option value="Church">Church</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="yearFounded" className="block text-sm font-bold text-charcoal-900 mb-2">
                      Year Founded
                    </label>
                    <input
                      type="text"
                      id="yearFounded"
                      name="yearFounded"
                      value={formData.yearFounded}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors text-charcoal-900 bg-white"
                      placeholder="e.g. 2010"
                    />
                  </div>
                  <div>
                    <label htmlFor="annualBudget" className="block text-sm font-bold text-charcoal-900 mb-2">
                      Annual Budget
                    </label>
                    <select
                      id="annualBudget"
                      name="annualBudget"
                      value={formData.annualBudget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors text-charcoal-900 bg-white"
                    >
                      <option value="">Select range...</option>
                      <option value="Under $50,000">Under $50,000</option>
                      <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                      <option value="$100,000 - $250,000">$100,000 - $250,000</option>
                      <option value="$250,000 - $500,000">$250,000 - $500,000</option>
                      <option value="$500,000 - $1,000,000">$500,000 - $1,000,000</option>
                      <option value="Over $1,000,000">Over $1,000,000</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="bento-card bg-white p-8">
                <h3 className="font-bold text-charcoal-900 text-xl mb-6 flex items-center gap-2">
                  <Users className="w-5 h-5 text-yellow-600" />
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label htmlFor="contactPhone" className="block text-sm font-bold text-charcoal-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="contactPhone"
                      name="contactPhone"
                      value={formData.contactPhone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors text-charcoal-900 bg-white"
                      placeholder="(555) 555-5555"
                    />
                  </div>
                </div>
              </div>

              <div className="bento-card bg-white p-8">
                <h3 className="font-bold text-charcoal-900 text-xl mb-6 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-yellow-600" />
                  Tell Us About Your Mission
                </h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="missionStatement" className="block text-sm font-bold text-charcoal-900 mb-2">
                      Mission Statement <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="missionStatement"
                      name="missionStatement"
                      value={formData.missionStatement}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors resize-vertical text-charcoal-900 bg-white"
                      placeholder="Describe your organization's mission, who you serve, and the impact you make..."
                    />
                  </div>
                  <div>
                    <label htmlFor="currentMarketingEfforts" className="block text-sm font-bold text-charcoal-900 mb-2">
                      Current Marketing Efforts
                    </label>
                    <textarea
                      id="currentMarketingEfforts"
                      name="currentMarketingEfforts"
                      value={formData.currentMarketingEfforts}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors resize-vertical text-charcoal-900 bg-white"
                      placeholder="Tell us about your current website, social media presence, and any marketing you're doing..."
                    />
                  </div>
                  <div>
                    <label htmlFor="whyTheyNeedGrant" className="block text-sm font-bold text-charcoal-900 mb-2">
                      Why Does Your Organization Need This Grant? <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="whyTheyNeedGrant"
                      name="whyTheyNeedGrant"
                      value={formData.whyTheyNeedGrant}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors resize-vertical text-charcoal-900 bg-white"
                      placeholder="Share how this marketing grant could help amplify your mission and what impact it would have..."
                    />
                  </div>
                  <div>
                    <label htmlFor="howTheyHeardAboutUs" className="block text-sm font-bold text-charcoal-900 mb-2">
                      How Did You Hear About This Grant?
                    </label>
                    <select
                      id="howTheyHeardAboutUs"
                      name="howTheyHeardAboutUs"
                      value={formData.howTheyHeardAboutUs}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors text-charcoal-900 bg-white"
                    >
                      <option value="">Select one...</option>
                      <option value="Google Search">Google Search</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Word of Mouth">Word of Mouth</option>
                      <option value="Email">Email</option>
                      <option value="Event">Event</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {submitStatus === "error" && (
                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 text-red-700 text-center">
                  {errorMessage}
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  type="button"
                  onClick={() => setFormStep(1)}
                  variant="outline"
                  size="lg"
                  className="border-2 border-stone-400 text-stone-300 hover:bg-stone-800 hover:text-white font-bold px-8"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back
                </Button>
                <Button
                  type="submit"
                  disabled={!isStep2Valid || isSubmitting}
                  size="lg"
                  className="bg-yellow-400 text-charcoal-900 border-2 border-charcoal-900 shadow-offset hover:bg-yellow-300 font-bold text-lg px-12 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                  {!isSubmitting && <ArrowRight className="w-5 h-5 ml-2" />}
                </Button>
              </div>
              <p className="text-stone-400 text-sm mt-4 text-center">
                By submitting, you agree to be contacted about your application.
              </p>
            </form>
          )}
        </div>
      </section>

      <section className="band-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="headline-xl text-charcoal-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bento-card bg-white">
                <AccordionTrigger className="px-6 py-4 text-left font-bold text-charcoal-900 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-stone-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="band-yellow py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="headline-xl text-charcoal-900 mb-4">Not a Nonprofit?</h2>
          <p className="text-lg text-charcoal-800 mb-8 max-w-2xl mx-auto">
            We'd still love to help your business grow. Get in touch with our team
            to learn about our full range of marketing services.
          </p>
          <Button asChild size="lg" className="bg-charcoal-900 text-white border-2 border-charcoal-900 shadow-offset hover:bg-charcoal-800 font-bold text-lg px-8">
            <Link href="/request-quote">
              Request a Quote <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <MegaFooter />
    </div>
  );
}
