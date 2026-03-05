"use client";

import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import HubSpotForm from "@/components/ui/hubspot-form";
import Image from "next/image";
import {
  Send, FileSearch, Trophy, Calendar, MapPin, Ticket,
  Users, Zap, ArrowDown, Clock, ChevronRight, Mic, Star
} from "lucide-react";

/* ─── countdown target: set your application deadline here ─── */
const DEADLINE = new Date("2026-03-28T23:59:59");

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

const speakers = [
  { name: "Jay Owen", title: "CEO, Business Builders" },
  { name: "Brad Pearce", title: "Future Focused Events" },
  { name: "Dustin Riechmann", title: "Simple Success Coaching" },
  { name: "Tyler Pigott", title: "Lone Fir Creative" },
  { name: "Alex Judd", title: "Path for Growth" },
];

export default function GiveawayPage() {
  const cd = useCountdown(DEADLINE);
  const formRef = useRef<HTMLDivElement>(null);
  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const valueStack = useInView();
  const formSection = useInView();
  const speakerSection = useInView();
  const stepsSection = useInView();

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* ═══════════════ HERO — SPLIT LAYOUT WITH VENUE PHOTO ═══════════════ */}
      <section className="band-dark pt-28 md:pt-32 pb-16 md:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left — Copy + CTA */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-yellow-400 border-2 border-yellow-500 px-5 py-2 mb-6 animate-slide-up">
                <Ticket className="w-4 h-4 text-charcoal-900" />
                <span className="label-industrial text-charcoal-900">
                  ONLY 5 TICKETS — APPLY FREE
                </span>
              </div>

              <h1 className="headline-xl text-white mb-6 animate-slide-up stagger-1" style={{ fontSize: "clamp(2.2rem, 5.5vw, 4rem)" }}>
                WIN YOUR SPOT AT THE{" "}
                <span className="text-yellow-400">FUTURE FOCUSED</span>{" "}
                LEADERS SUMMIT
              </h1>

              <p className="text-lg md:text-xl text-stone-300 mb-4 leading-relaxed animate-slide-up stagger-2 max-w-lg">
                3 days of AI workshops, leadership sessions, and beachfront networking with 100 hand-picked business leaders.
              </p>

              <p className="text-stone-500 mb-8 animate-slide-up stagger-3">
                April 6–8, 2026 &middot; Embassy Suites, St. Augustine Beach, FL
              </p>

              {/* Price anchor */}
              <div className="flex items-baseline gap-3 mb-8 animate-slide-up stagger-4">
                <span className="text-stone-500 line-through text-2xl md:text-3xl font-display">$1,947</span>
                <span className="text-yellow-400 font-display text-4xl md:text-5xl font-black tracking-tight">FREE</span>
              </div>

              {/* Countdown */}
              {!cd.expired && (
                <div className="mb-8 animate-slide-up stagger-5">
                  <p className="label-industrial text-stone-400 mb-3">
                    <Clock className="w-3.5 h-3.5 inline -mt-0.5 mr-1" />
                    APPLICATION DEADLINE
                  </p>
                  <div className="inline-flex gap-2 md:gap-3">
                    {[
                      { val: cd.days, label: "DAYS" },
                      { val: cd.hours, label: "HRS" },
                      { val: cd.minutes, label: "MIN" },
                      { val: cd.seconds, label: "SEC" },
                    ].map((t) => (
                      <div key={t.label} className="bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-2 min-w-[56px] text-center">
                        <div className="font-display text-xl md:text-2xl text-white tabular-nums">{String(t.val).padStart(2, "0")}</div>
                        <div className="label-industrial text-stone-400 text-[10px]">{t.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <button
                onClick={scrollToForm}
                className="inline-flex items-center gap-2 bg-yellow-400 border-2 border-foreground hover:bg-yellow-500 rounded-none shadow-offset-sm hover-press px-8 py-4 font-display uppercase text-foreground font-bold text-lg transition-colors"
              >
                Apply Now — It&rsquo;s Free
                <ArrowDown className="w-5 h-5" />
              </button>
            </div>

            {/* Right — Venue Photo */}
            <div className="relative animate-slide-up stagger-2">
              <div className="border-2 border-white/20 shadow-[6px_6px_0px_0px_hsl(48,96%,53%)] overflow-hidden">
                <Image
                  src="/embassy-suites-st-augustine.jpeg"
                  alt="Embassy Suites by Hilton on St. Augustine Beach — summit venue"
                  width={720}
                  height={480}
                  className="w-full h-auto block"
                  priority
                />
              </div>
              {/* Floating detail tag */}
              <div className="absolute -bottom-4 -left-3 md:-left-4 bg-yellow-400 border-2 border-charcoal-800 shadow-offset-sm px-4 py-2.5 z-10">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-charcoal-900" />
                  <span className="label-industrial text-charcoal-900">ST. AUGUSTINE BEACH, FL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ VALUE STACK — WHAT YOU WIN ═══════════════ */}
      <section className="band-yellow py-16 md:py-20 border-y-4 border-charcoal-800" ref={valueStack.ref}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="headline-md text-charcoal-900 mb-3">
              HERE&rsquo;S WHAT YOU&rsquo;LL WIN
            </h2>
            <p className="text-charcoal-700 text-lg max-w-xl mx-auto">
              One ticket covers everything — sessions, meals, and access to all summit events.
            </p>
          </div>

          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 transition-all duration-700 ${valueStack.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {[
              { icon: Calendar, label: "3 Full Days", desc: "Sun evening through Tue afternoon" },
              { icon: Users, label: "100 Leaders", desc: "Curated, intimate group" },
              { icon: Zap, label: "AI Workshops", desc: "Hands-on implementation" },
              { icon: MapPin, label: "Beachfront", desc: "Embassy Suites on the ocean" },
            ].map((item, i) => (
              <div
                key={item.label}
                className="bg-charcoal-900 text-white p-5 md:p-6 border-2 border-charcoal-800 shadow-[4px_4px_0px_0px_hsl(30,6%,10%)] text-center"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <item.icon className="w-7 h-7 text-yellow-400 mx-auto mb-3" />
                <h3 className="font-display uppercase text-base md:text-lg mb-1">{item.label}</h3>
                <p className="text-stone-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <span className="label-industrial text-charcoal-700">
              Sponsors: Business Builders &middot; HighLevel &middot; Intulse &middot; Anders Virtual CFO
            </span>
          </div>
        </div>
      </section>

      {/* ═══════════════ FORM SECTION — THE APPLICATION ═══════════════ */}
      <section className="band-dark py-20" ref={formRef}>
        <div
          ref={formSection.ref}
          className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${formSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center mb-12">
            <h2 className="headline-lg text-white mb-4">
              <span className="text-yellow-400">Apply</span> to Win
            </h2>
            <p className="text-xl text-stone-400 max-w-2xl mx-auto">
              Tell us about yourself and why you want to attend. Five applicants will be selected to receive a free ticket.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form — takes 2/3 */}
            <div className="lg:col-span-2">
              <div className="bento-card shadow-offset">
                <div className="p-6 border-b-2 border-foreground/20 flex items-center justify-between">
                  <div>
                    <h3 className="headline-md text-foreground text-xl mb-1">YOUR APPLICATION</h3>
                    <p className="text-stone-500 text-sm">Takes less than 2 minutes</p>
                  </div>
                  <span className="label-industrial bg-yellow-400 text-foreground px-3 py-1 hidden sm:inline-block">FREE</span>
                </div>
                <div className="p-6">
                  <HubSpotForm formId="PLACEHOLDER" />
                </div>
              </div>
            </div>

            {/* Sidebar — urgency + proof */}
            <div className="space-y-6">
              {/* Scarcity card */}
              <div className="bento-card shadow-offset bg-yellow-400 border-charcoal-800">
                <div className="p-6 text-center">
                  <div className="font-display text-6xl text-charcoal-900 mb-1">5</div>
                  <div className="font-display uppercase text-charcoal-900 text-lg mb-2">Tickets Available</div>
                  <div className="text-charcoal-700 text-sm">
                    Each valued at <strong>$1,947</strong>. Once they're gone, they're gone.
                  </div>
                </div>
              </div>

              {/* Event details card */}
              <div className="bento-card shadow-offset">
                <div className="p-6 border-b-2 border-foreground/20">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-yellow-400" />
                    <h3 className="font-display uppercase text-foreground">Event Details</h3>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  {[
                    { label: "April 6–8, 2026", sub: "Sun 5 PM – Tue 1 PM" },
                    { label: "Embassy Suites by Hilton", sub: "St. Augustine Beach, FL" },
                    { label: "100 attendees max", sub: "Intimate, curated group" },
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
                    <p className="label-industrial text-stone-400 mb-1">DEADLINE TO APPLY</p>
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

      {/* ═══════════════ SPEAKERS — CREDIBILITY ═══════════════ */}
      <section className="band-white py-20 border-t-4 border-charcoal-800" ref={speakerSection.ref}>
        <div className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${speakerSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-center mb-12">
            <h2 className="headline-lg text-charcoal-900 mb-4">
              Learn From the <span className="text-yellow-400">Best</span>
            </h2>
            <p className="text-xl text-stone-500 max-w-2xl mx-auto">
              Founders, operators, and AI leaders sharing real strategies — not theory.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {speakers.map((s, i) => (
              <div
                key={s.name}
                className="bento-card shadow-offset p-5 text-center"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-14 h-14 bg-yellow-400 border-2 border-charcoal-800 flex items-center justify-center mx-auto mb-3 shadow-offset-sm">
                  <Mic className="w-6 h-6 text-charcoal-900" />
                </div>
                <h3 className="font-display uppercase text-sm text-foreground mb-0.5">{s.name}</h3>
                <p className="text-stone-500 text-xs">{s.title}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-stone-400 label-industrial">+ MORE SPEAKERS TO BE ANNOUNCED</p>
          </div>

          {/* Topics strip */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {["AI Implementation", "Marketing Strategy", "Business Growth", "Leadership", "Community Building", "Automation"].map((t) => (
              <span key={t} className="label-industrial border-2 border-charcoal-800 px-4 py-2 text-charcoal-900 bg-stone-50">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ HOW IT WORKS — FRICTION REDUCTION ═══════════════ */}
      <section className="py-20 band-stone" ref={stepsSection.ref}>
        <div className={`max-w-5xl mx-auto px-6 transition-all duration-700 ${stepsSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-center mb-16">
            <h2 className="headline-lg text-foreground mb-4">
              How It <span className="text-yellow-400">Works</span>
            </h2>
            <p className="text-xl text-stone-500 max-w-xl mx-auto">
              Three steps. Two minutes. One shot at a $1,947 ticket.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Send, step: "01", title: "Apply", desc: "Fill out the short form above. Tell us who you are and why you want to attend." },
              { icon: FileSearch, step: "02", title: "We Review", desc: "Our team reviews every application looking for leaders who'll get the most from this experience." },
              { icon: Trophy, step: "03", title: "Winners Notified", desc: "Five winners receive their tickets by email with full event details and next steps." },
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

      {/* ═══════════════ FINAL CTA — DRIVE BACK TO FORM ═══════════════ */}
      <section className="band-dark py-20 border-t-4 border-yellow-400">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <Star className="w-5 h-5 text-yellow-400" />
            <Star className="w-5 h-5 text-yellow-400" />
            <Star className="w-5 h-5 text-yellow-400" />
            <Star className="w-5 h-5 text-yellow-400" />
            <Star className="w-5 h-5 text-yellow-400" />
          </div>

          <h2 className="headline-lg text-white mb-4">
            Don&rsquo;t Miss <span className="text-yellow-400">This</span>
          </h2>
          <p className="text-xl text-stone-400 mb-4 max-w-xl mx-auto">
            5 free tickets. $1,947 value each. 100-person event on the beach. This is your shot.
          </p>
          {!cd.expired && (
            <p className="text-stone-500 mb-8">
              Applications close in <strong className="text-yellow-400">{cd.days} days</strong>
            </p>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 bg-yellow-400 border-2 border-foreground hover:bg-yellow-500 rounded-none shadow-offset-sm hover-press px-8 py-4 font-display uppercase text-foreground font-bold text-lg transition-colors"
            >
              Apply Now — Free
              <ArrowDown className="w-5 h-5" />
            </button>
            <a
              href="https://www.futurefocusedevents.com/summit26"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-stone-600 hover:border-yellow-400 px-6 py-3.5 font-display uppercase text-stone-400 hover:text-yellow-400 text-sm transition-colors"
            >
              Or Buy Your Ticket
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <MegaFooter />
    </div>
  );
}
