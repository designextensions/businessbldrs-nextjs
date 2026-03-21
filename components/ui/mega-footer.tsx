"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { trackEvent } from "@/components/ui/google-analytics";
import { trackHubSpotFormSubmission } from "@/components/ui/hubspot-analytics";

const BB_Full_Lockup_dark_1_3 = "/attached_assets/BB_Full-Lockup_dark-1-3.png";

export default function MegaFooter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  const { toast } = useToast();

  const submitMutation = useMutation({
    mutationFn: async (emailData: { email: string }) => {
      const response = await fetch("/api/form-submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          formId: 3,
          formSlug: "footer-subscribe",
          submissionData: { email: emailData.email },
          submitterEmail: emailData.email,
          submitterName: "",
        }),
      });

      if (!response.ok) throw new Error("Failed to submit form");
      return response.json();
    },
    onSuccess: () => {
      setEmail("");
      setIsSubmitting(false);
      trackEvent("generate_lead", {
        currency: "USD",
        value: 100,
        event_category: "engagement",
        event_label: "newsletter_subscription",
        form_name: "Footer Newsletter",
      });
      trackHubSpotFormSubmission("newsletter_subscription", { estimated_value: 100 });
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive our latest marketing tips and insights.",
      });
    },
    onError: () => {
      setIsSubmitting(false);
      toast({
        title: "Subscription failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast({ title: "Email required", description: "Please enter your email address.", variant: "destructive" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({ title: "Invalid email", description: "Please enter a valid email address.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    submitMutation.mutate({ email });
  };

  return (
    <footer className="band-dark border-t-4 border-yellow-400" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src={BB_Full_Lockup_dark_1_3}
                alt="Business Builders Logo"
                className="h-12 w-auto mb-6"
                width={224}
                height={94}
              />
              <p className="text-stone-400 font-serif italic leading-relaxed">
                Helping businesses, ministries, and non-profits grow with proven
                marketing strategies since 1999.
              </p>
            </div>

            <div className="space-y-3">
              <a href="tel:877-378-6101" className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-yellow-400 border-2 border-charcoal-900 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-charcoal-900" />
                </div>
                <span className="text-white font-display font-bold group-hover:text-yellow-400 transition-colors">(877) 378-6101</span>
              </a>
              <Link href="/request-quote" className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-charcoal-800 border-2 border-charcoal-700 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-yellow-400" />
                </div>
                <span className="text-stone-400 group-hover:text-yellow-400 transition-colors">Contact Us</span>
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-charcoal-800 border-2 border-charcoal-700 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-yellow-400" />
                </div>
                <span className="text-stone-400">St. Augustine, FL</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-white uppercase tracking-wide mb-6 border-b-2 border-yellow-400 pb-2 inline-block">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/website-design", label: "Website Design" },
                { href: "/marketing-services", label: "Marketing Services" },
                { href: "/branding-logos", label: "Brand Strategy" },
                { href: "/storybrand-agency", label: "StoryBrand Agency" },
                { href: "/storybrand-messaging", label: "StoryBrand Messaging" },
                { href: "/video-production", label: "Video Production" },
                { href: "/hubspot-implementation", label: "HubSpot Implementation" },
                { href: "/seo-services", label: "SEO Services" },
                { href: "/app-development", label: "App Development" },
                { href: "/social-media-marketing", label: "Social Media Marketing" },
                { href: "/marketing-strategy-consulting", label: "Marketing Strategy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-stone-400 hover:text-yellow-400 transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-white uppercase tracking-wide mb-6 border-b-2 border-yellow-400 pb-2 inline-block">
              Company
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "/team", label: "Our Team" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/testimonials", label: "Testimonials" },
                { href: "/resources", label: "Resources" },
                { href: "/grant", label: "Nonprofit Grant" },
                { href: "/request-quote", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-stone-400 hover:text-yellow-400 transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-white uppercase tracking-wide mb-6 border-b-2 border-yellow-400 pb-2 inline-block">
              Newsletter
            </h3>
            <p className="text-stone-400 mb-4 font-serif italic">
              Get marketing tips and insights delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-charcoal-800 border-2 border-charcoal-700 text-white placeholder:text-stone-500 focus:border-yellow-400"
                data-testid="input-newsletter-email"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full"
                data-testid="button-newsletter-subscribe"
              >
                {isSubmitting ? "SUBSCRIBING..." : "SUBSCRIBE"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>

            <div className="mt-8">
              <p className="label-industrial text-stone-500 mb-4">FOLLOW US</p>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, href: "https://www.facebook.com/businessbldrs", label: "Facebook" },
                  { icon: Linkedin, href: "https://www.linkedin.com/company/businessbldrs", label: "LinkedIn" },
                  { icon: Instagram, href: "https://www.instagram.com/businessbldrs/", label: "Instagram" },
                  { icon: Youtube, href: "https://www.youtube.com/channel/UC3SN1I1FwktpF_lMqaZveIg", label: "YouTube" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 bg-charcoal-800 border-2 border-charcoal-700 flex items-center justify-center hover:bg-yellow-400 hover:border-charcoal-900 transition-all group"
                  >
                    <social.icon className="w-5 h-5 text-stone-400 group-hover:text-charcoal-900" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t-2 border-charcoal-800">
          <div className="mb-6">
            <p className="label-industrial text-stone-500 mb-3">SERVICE AREAS</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {[
                { href: "/st-augustine", label: "St. Augustine" },
                { href: "/jacksonville", label: "Jacksonville" },
                { href: "/palm-coast", label: "Palm Coast" },
                { href: "/ponte-vedra", label: "Ponte Vedra" },
                { href: "/orange-park", label: "Orange Park" },
                { href: "/gainesville", label: "Gainesville" },
                { href: "/daytona-beach", label: "Daytona Beach" },
              ].map((area) => (
                <Link key={area.href} href={area.href} className="text-stone-500 hover:text-yellow-400 text-sm transition-colors">
                  {area.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-500 text-sm" suppressHydrationWarning>
              © {currentYear} Business Builders. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="text-stone-500 hover:text-yellow-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="text-stone-500 hover:text-yellow-400 text-sm transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
