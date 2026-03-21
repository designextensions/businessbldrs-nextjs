"use client";

import { useState, useEffect, useRef } from "react";
import HubSpotNativeForm from "@/components/ui/hubspot-native-form";
import {
  Send, FileSearch, Trophy, ArrowDown, Clock, ChevronRight,
  Star, Award, Globe, FileText, CheckCircle, Users, Sparkles
} from "lucide-react";

/* ─── countdown target: grant entry deadline ─── */
const DEADLINE = new Date("2026-04-25T23:59:59");

function useCountdown(target: Date) {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  if (!now) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: false };
  const diff = Math.max(0, target.getTime() - now.getTime());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
    expired: diff === 0,
  };
}

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export default function SWSPage() {
  const cd = useCountdown(DEADLINE);
  const formRef = useRef<HTMLDivElement>(null);
  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const whatYouWin = useInView();
  const howItWorks = useInView();
  const formSection = useInView();
  const whoWeAre = useInView();

  return (
    <div className="min-h-screen">

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="band-dark relative min-h-[92vh] flex items-center justify-center overflow-hidden">
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

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-400 border-2 border-yellow-500 px-5 py-2 mb-8 animate-slide-up">
            <Award className="w-4 h-4 text-charcoal-900" />
            <span className="label-industrial text-charcoal-900">
              EXCLUSIVE TO SCALE WITH STABILITY ATTENDEES
            </span>
          </div>

          <h1 className="headline-xl text-white mb-6 animate-slide-up stagger-1" style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)" }}>
            <span className="text-yellow-400">$25,000</span><br />
            SMALL BUSINESS GRANT
          </h1>

          <p className="text-xl md:text-2xl text-stone-300 max-w-2xl mx-auto mb-4 leading-relaxed animate-slide-up stagger-2">
            Win a Custom Messaging &amp; Website Redesign
          </p>

          {/* Price anchor */}
          <div className="inline-flex items-baseline gap-3 mb-10 animate-slide-up stagger-3">
            <span className="text-stone-500 line-through text-2xl md:text-3xl font-display">$25,000 VALUE</span>
            <span className="text-yellow-400 font-display text-4xl md:text-5xl font-black tracking-tight">ENTER FREE</span>
          </div>

          {/* Countdown */}
          {!cd.expired && (
            <div className="mb-10 animate-slide-up stagger-4">
              <p className="label-industrial text-stone-400 mb-3">
                <Clock className="w-3.5 h-3.5 inline -mt-0.5 mr-1" />
                ENTRY DEADLINE
              </p>
              <div className="inline-flex gap-3 md:gap-4">
                {[
                  { val: cd.days, label: "DAYS" },
                  { val: cd.hours, label: "HRS" },
                  { val: cd.minutes, label: "MIN" },
                  { val: cd.seconds, label: "SEC" },
                ].map((t) => (
                  <div key={t.label} className="bg-white/10 backdrop-blur-sm border border-white/20 px-3 md:px-4 py-2 min-w-[60px]">
                    <div className="font-display text-2xl md:text-3xl text-white tabular-nums">{String(t.val).padStart(2, "0")}</div>
                    <div className="label-industrial text-stone-400 text-[10px]">{t.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-2 bg-yellow-400 border-2 border-foreground hover:bg-yellow-500 rounded-none shadow-offset-sm hover-press px-8 py-4 font-display uppercase text-foreground font-bold text-lg transition-colors animate-slide-up stagger-5"
          >
            Enter to Win
            <ArrowDown className="w-5 h-5" />
          </button>

          {/* Credential strip */}
          <div className="mt-10 flex flex-wrap justify-center gap-4 md:gap-6 animate-slide-up stagger-5">
            {["StoryBrand Certified", "HubSpot Platinum Partner", "26+ Years", "500+ Websites"].map((c) => (
              <span key={c} className="label-industrial text-stone-500 text-xs">
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-white/40">
          <ArrowDown className="w-5 h-5" />
        </div>
      </section>

      {/* ═══════════════ WHAT YOU WIN ═══════════════ */}
      <section className="band-yellow py-16 md:py-20 border-y-4 border-charcoal-800" ref={whatYouWin.ref}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="headline-md text-charcoal-900 mb-3">
              WHAT YOU WIN
            </h2>
            <p className="text-charcoal-700 text-lg max-w-xl mx-auto">
              One winner receives a complete messaging and website package — everything you need to grow.
            </p>
          </div>

          <div className={`grid md:grid-cols-2 gap-6 md:gap-8 transition-all duration-700 ${whatYouWin.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {/* BrandScript card */}
            <div className="bg-charcoal-900 text-white p-8 border-2 border-charcoal-800 shadow-[4px_4px_0px_0px_hsl(30,6%,10%)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-yellow-400 border-2 border-charcoal-800 flex items-center justify-center shadow-offset-sm">
                  <FileText className="w-6 h-6 text-charcoal-900" />
                </div>
                <div>
                  <h3 className="font-display uppercase text-lg">StoryBrand BrandScript</h3>
                  <span className="label-industrial text-yellow-400">$7,500 VALUE</span>
                </div>
              </div>
              <ul className="space-y-2">
                {[
                  "Complete messaging framework",
                  "Brand voice & positioning",
                  "Key talking points & one-liners",
                  "Marketing roadmap",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-stone-300">
                    <CheckCircle className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Website Redesign card */}
            <div className="bg-charcoal-900 text-white p-8 border-2 border-charcoal-800 shadow-[4px_4px_0px_0px_hsl(30,6%,10%)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-yellow-400 border-2 border-charcoal-800 flex items-center justify-center shadow-offset-sm">
                  <Globe className="w-6 h-6 text-charcoal-900" />
                </div>
                <div>
                  <h3 className="font-display uppercase text-lg">Custom Website Redesign</h3>
                  <span className="label-industrial text-yellow-400">$17,500 VALUE</span>
                </div>
              </div>
              <ul className="space-y-2">
                {[
                  "Full StoryBrand website build",
                  "Mobile-responsive design",
                  "SEO-optimized from day one",
                  "Conversion-focused layout",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-stone-300">
                    <CheckCircle className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Total callout */}
          <div className="text-center mt-10">
            <div className="inline-block bg-charcoal-900 border-2 border-charcoal-800 shadow-[4px_4px_0px_0px_hsl(30,6%,10%)] px-8 py-4">
              <span className="font-display text-2xl md:text-3xl text-white uppercase">
                $25,000 <span className="text-yellow-400">Total Value</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ HOW IT WORKS ═══════════════ */}
      <section className="py-20 band-stone" ref={howItWorks.ref}>
        <div className={`max-w-5xl mx-auto px-6 transition-all duration-700 ${howItWorks.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-center mb-16">
            <h2 className="headline-lg text-foreground mb-4">
              How It <span className="text-yellow-400">Works</span>
            </h2>
            <p className="text-xl text-stone-500 max-w-xl mx-auto">
              Three steps. Two minutes. One business transformed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Send, step: "01", title: "Enter", desc: "Fill out the form below with your business details. It takes less than 2 minutes." },
              { icon: FileSearch, step: "02", title: "We Review", desc: "Our team reviews every entry to find the business that will benefit most from this investment." },
              { icon: Trophy, step: "03", title: "Winner Announced", desc: "One winner will be selected and notified by email with next steps to kick off the project." },
            ].map((s, i) => (
              <div key={s.step} className="text-center" style={{ transitionDelay: `${i * 120}ms` }}>
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-yellow-400 border-2 border-charcoal-800 flex items-center justify-center mx-auto shadow-offset">
                    <s.icon className="w-9 h-9 text-charcoal-900" />
                  </div>
                  <span className="absolute -top-2 -right-2 bg-charcoal-900 text-yellow-400 font-display text-xs px-2 py-0.5 border border-charcoal-700">
                    {s.step}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl uppercase text-foreground mb-3">{s.title}</h3>
                <p className="text-stone-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ ENTRY FORM ═══════════════ */}
      <section className="band-dark py-20" ref={formRef}>
        <div
          ref={formSection.ref}
          className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${formSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center mb-12">
            <h2 className="headline-lg text-white mb-4">
              <span className="text-yellow-400">Enter</span> the Grant
            </h2>
            <p className="text-xl text-stone-400 max-w-2xl mx-auto">
              Tell us about your business and you could win a $25,000 messaging and website package.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form — takes 2/3 */}
            <div className="lg:col-span-2">
              <div className="bento-card shadow-offset">
                <div className="p-6 border-b-2 border-foreground/20 flex items-center justify-between">
                  <div>
                    <h3 className="headline-md text-foreground text-xl mb-1">GRANT APPLICATION</h3>
                    <p className="text-stone-500 text-sm">Takes less than 2 minutes</p>
                  </div>
                  <span className="label-industrial bg-yellow-400 text-foreground px-3 py-1 hidden sm:inline-block">FREE</span>
                </div>
                <div className="p-6">
                  <HubSpotNativeForm
                    formId="be3f7837-27dc-4af7-9d8a-5403d7c79bb9"
                    submitLabel="Enter the Grant"
                    successMessage="Thank you for entering! We'll review your application and announce the winner soon."
                    fields={[
                      { name: "firstname", label: "First Name", type: "text", required: true, placeholder: "First name", halfWidth: true },
                      { name: "lastname", label: "Last Name", type: "text", required: true, placeholder: "Last name", halfWidth: true },
                      { name: "email", label: "Email", type: "email", required: true, placeholder: "you@company.com" },
                      { name: "phone", label: "Phone Number", type: "tel", required: true, placeholder: "(555) 123-4567" },
                      { name: "company", label: "Company Name", type: "text", required: true, placeholder: "Your company" },
                      { name: "message", label: "Tell us about your business", type: "textarea", required: true, placeholder: "Tell us about your business and why you'd like to win the $25,000 grant..." },
                    ]}
                  />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Scarcity card */}
              <div className="bento-card shadow-offset bg-yellow-400 border-charcoal-800">
                <div className="p-6 text-center">
                  <div className="font-display text-6xl text-charcoal-900 mb-1">1</div>
                  <div className="font-display uppercase text-charcoal-900 text-lg mb-2">Winner Selected</div>
                  <div className="text-charcoal-700 text-sm">
                    One business wins a <strong>$25,000</strong> messaging &amp; website package.
                  </div>
                </div>
              </div>

              {/* Credentials card */}
              <div className="bento-card shadow-offset">
                <div className="p-6 border-b-2 border-foreground/20">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <h3 className="font-display uppercase text-foreground">Why Business Builders</h3>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  {[
                    { label: "StoryBrand Certified", sub: "Endorsed by Donald Miller" },
                    { label: "HubSpot Platinum Partner", sub: "Top-tier CRM expertise" },
                    { label: "26+ Years in Business", sub: "Since 1999" },
                  ].map((d) => (
                    <div key={d.label} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
                      <div>
                        <div className="font-display uppercase text-sm text-foreground">{d.label}</div>
                        <div className="text-stone-500 text-xs">{d.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deadline reminder */}
              {!cd.expired && (
                <div className="bento-card shadow-offset border-yellow-400 bg-charcoal-900">
                  <div className="p-5 text-center">
                    <Clock className="w-5 h-5 text-yellow-400 mx-auto mb-2" />
                    <p className="label-industrial text-stone-400 mb-1">ENTRY DEADLINE</p>
                    <p className="font-display text-white text-lg">
                      {cd.days}d {cd.hours}h {cd.minutes}m left
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ WHO WE ARE ═══════════════ */}
      <section className="band-white py-20 border-t-4 border-charcoal-800" ref={whoWeAre.ref}>
        <div className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${whoWeAre.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-center mb-12">
            <h2 className="headline-lg text-charcoal-900 mb-4">
              Who We <span className="text-yellow-400">Are</span>
            </h2>
            <p className="text-xl text-stone-500 max-w-2xl mx-auto">
              Business Builders is a full-service marketing agency with 26+ years of experience helping businesses clarify their message and grow.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Sparkles, stat: "26+", label: "Years in Business" },
              { icon: Globe, stat: "500+", label: "Websites Built" },
              { icon: Users, stat: "300+", label: "Clients Served" },
              { icon: Star, stat: "4.9", label: "Google Rating" },
            ].map((item, i) => (
              <div
                key={item.label}
                className="bento-card shadow-offset p-5 md:p-6 text-center"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <item.icon className="w-7 h-7 text-yellow-400 mx-auto mb-3" />
                <div className="font-display text-3xl md:text-4xl text-charcoal-900 mb-1">{item.stat}</div>
                <p className="label-industrial text-stone-500 text-xs">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FINAL CTA ═══════════════ */}
      <section className="band-dark py-20 border-t-4 border-yellow-400">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="headline-lg text-white mb-4">
            YOUR BUSINESS COULD BE <span className="text-yellow-400">NEXT</span>
          </h2>
          <p className="text-xl text-stone-400 mb-4 max-w-xl mx-auto">
            $25,000 in messaging and website services. One winner. Don&rsquo;t miss your chance.
          </p>
          {!cd.expired && (
            <p className="text-stone-500 mb-8">
              Entries close in <strong className="text-yellow-400">{cd.days} days</strong>
            </p>
          )}

          {/* Countdown mini */}
          {!cd.expired && (
            <div className="mb-8">
              <div className="inline-flex gap-3">
                {[
                  { val: cd.days, label: "DAYS" },
                  { val: cd.hours, label: "HRS" },
                  { val: cd.minutes, label: "MIN" },
                  { val: cd.seconds, label: "SEC" },
                ].map((t) => (
                  <div key={t.label} className="bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-2 min-w-[52px]">
                    <div className="font-display text-xl text-white tabular-nums">{String(t.val).padStart(2, "0")}</div>
                    <div className="label-industrial text-stone-400 text-[9px]">{t.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 bg-yellow-400 border-2 border-foreground hover:bg-yellow-500 rounded-none shadow-offset-sm hover-press px-8 py-4 font-display uppercase text-foreground font-bold text-lg transition-colors"
            >
              Enter to Win
              <ArrowDown className="w-5 h-5" />
            </button>
            <a
              href="https://businessbldrs.com"
              className="inline-flex items-center gap-2 border-2 border-stone-600 hover:border-yellow-400 px-6 py-3.5 font-display uppercase text-stone-400 hover:text-yellow-400 text-sm transition-colors"
            >
              Learn More About BB
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
