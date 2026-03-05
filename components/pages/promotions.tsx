"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Gift, Heart, Users, Ticket, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";

const promotions = [
  {
    title: "Nonprofit Marketing Grant",
    href: "/grant",
    icon: Heart,
    image: "/nonprofit-grant-community.jpeg",
    imageAlt: "Community gathering and nonprofit event",
    value: "$50,000",
    tagline: "Annual Philanthropic Initiative",
    description:
      "We're awarding a $50,000 marketing package to a deserving nonprofit or church. The package includes a custom website redesign, StoryBrand messaging strategy, updated brand kit, one year of managed hosting and updates, email and newsletter templates, and a social media template kit with 12 custom posts.",
    audience: "501(c)(3) nonprofits & churches",
    deadline: "March 14, 2026",
    highlights: [
      "Custom website redesign ($15,000 value)",
      "StoryBrand messaging framework ($7,500 value)",
      "Brand kit, hosting & marketing collateral",
    ],
  },
  {
    title: "Scale With Stability Grant",
    href: "/sws",
    icon: Users,
    image: "/jay-owen-headshot.jpg",
    imageAlt: "Jay Owen — CEO of Business Builders",
    value: "$25,000",
    tagline: "Small Business Grant",
    description:
      "Exclusively for Scale With Stability event attendees, this grant awards a $25,000 marketing package including a complete StoryBrand BrandScript with brand voice and marketing roadmap, plus a fully custom, mobile-responsive, SEO-optimized website redesign.",
    audience: "Scale With Stability event attendees",
    deadline: "April 25, 2026",
    highlights: [
      "StoryBrand BrandScript & roadmap ($7,500 value)",
      "Full custom website redesign ($17,500 value)",
      "SEO-optimized & mobile-responsive",
    ],
  },
  {
    title: "Future Focused Leaders Summit Giveaway",
    href: "/giveaway",
    icon: Ticket,
    image: "/embassy-suites-st-augustine.jpeg",
    imageAlt: "Embassy Suites beachfront venue in St. Augustine Beach, FL",
    value: "$1,947",
    tagline: "Win 1 of 5 Free Tickets",
    description:
      "Enter to win one of five free tickets to the Future Focused Leaders Summit — three days of AI workshops, leadership sessions, and networking with 100 hand-picked leaders at Embassy Suites, St. Augustine Beach, FL (April 6–8, 2026).",
    audience: "Business leaders & entrepreneurs",
    deadline: "March 28, 2026",
    highlights: [
      "3 days of workshops & sessions",
      "AI, leadership & networking focus",
      "Beachfront venue in St. Augustine, FL",
    ],
  },
];

export default function PromotionsPage() {
  return (
    <div className="min-h-screen bg-stone-100">
      <Navigation />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Promotions" }]} />

        <div className="max-w-3xl mb-12">
          <span className="label-industrial inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-charcoal-900 border-2 border-charcoal-900 shadow-offset-sm mb-6">
            <Gift className="w-4 h-4" />
            ACTIVE PROMOTIONS
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-charcoal-900 leading-[0.95] mt-4 mb-6">
            Grants &amp; Giveaways
          </h1>
          <p className="text-lg text-charcoal-600 max-w-2xl">
            We believe in giving back. Explore our current promotions, grants, and giveaways designed to help nonprofits, small businesses, and leaders grow.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {promotions.map((promo) => (
            <div
              key={promo.href}
              className="bg-white border-2 border-charcoal-900 shadow-offset flex flex-col"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={promo.image}
                  alt={promo.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/40 to-transparent" />
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-yellow-400 border-2 border-charcoal-900 flex items-center justify-center">
                    <promo.icon className="w-6 h-6 text-charcoal-900" />
                  </div>
                  <span className="label-industrial text-xs text-charcoal-500 uppercase tracking-wider">
                    {promo.tagline}
                  </span>
                </div>

                <h2 className="font-display text-xl sm:text-2xl font-black uppercase text-charcoal-900 leading-tight mb-3">
                  {promo.title}
                </h2>

                <div className="flex items-center gap-2 mb-4">
                  <DollarSign className="w-4 h-4 text-yellow-500" />
                  <span className="font-display text-2xl font-black text-yellow-500">
                    {promo.value}
                  </span>
                  <span className="text-sm text-charcoal-500 uppercase">value</span>
                </div>

                <p className="text-charcoal-600 text-sm leading-relaxed mb-5 flex-1">
                  {promo.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {promo.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-charcoal-700">
                      <ArrowRight className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 text-sm text-charcoal-500 mb-6 border-t border-charcoal-200 pt-4">
                  <Clock className="w-4 h-4" />
                  <span>
                    <strong className="text-charcoal-700">Deadline:</strong> {promo.deadline}
                  </span>
                </div>

                <Link href={promo.href}>
                  <Button className="w-full group" size="lg">
                    LEARN MORE &amp; APPLY
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <MegaFooter />
    </div>
  );
}
