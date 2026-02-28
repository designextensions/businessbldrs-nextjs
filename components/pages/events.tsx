"use client";
import SEOHead from "@/components/ui/seo-head";

import { Button } from "@/components/ui/button";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const futureEvents = [
  {
    id: 1,
    title: "Future Focused Leaders Summit: AI & Community",
    description: "Join us for a transformative summit exploring the intersection of AI and community building. Learn from industry leaders and connect with like-minded professionals.",
    date: "Mon Apr 06, 2026",
    time: "05:00 PM (EDT)",
    location: "St. Augustine, Florida, 32080",
    eventType: "In-Person",
    category: "Marketing",
    image: "https://www.futurefocusedevents.com/public/portals/833650930/siteResources/85614000003449290",
    registrationUrl: "https://www.futurefocusedevents.com/summit26"
  },
  {
    id: 2,
    title: "Agency Builders Retreat 2026",
    description: "An exclusive retreat for agency owners and leaders. Build connections, share strategies, and accelerate your agency's growth with proven frameworks.",
    date: "Wed Apr 08, 2026",
    time: "05:00 PM (EDT)",
    location: "St. Augustine, Florida, 32080",
    eventType: "In-Person",
    category: "Marketing",
    image: "https://www.futurefocusedevents.com/public/portals/833650930/siteResources/85614000003452038",
    registrationUrl: "https://www.futurefocusedevents.com/abr26"
  }
];

export default function Events() {
  return (
    <div className="min-h-screen band-white text-charcoal-900">
      <SEOHead 
        title="Events - Business Builders"
        description="Join Business Builders for upcoming events, workshops, and summits designed to accelerate your business growth. From virtual masterclasses to in-person conferences, find the perfect event for your needs."
        keywords="business events, marketing workshops, leadership summits, virtual events, in-person conferences"
        canonicalUrl="https://businessbldrs.com/events"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden band-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="label-industrial text-charcoal-900 border-2 border-charcoal-900 px-4 py-2 inline-block mb-6">
              EVENTS
            </span>
            <h1 className="headline-lg font-display uppercase mb-6 text-charcoal-900">
              UPCOMING <span className="text-yellow-500">EVENTS</span>
            </h1>
            <p className="text-xl lg:text-2xl text-stone-600 leading-relaxed mb-8 max-w-4xl mx-auto">
              Join us for transformative events designed to accelerate your business growth. From virtual workshops to in-person summits, we offer learning experiences that deliver real results.
            </p>
          </div>
        </div>
      </section>

      <div className="pb-20 band-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {futureEvents.map((event) => (
              <div
                key={event.id}
                className="bento-card overflow-hidden group"
              >
                <div className="relative overflow-hidden border-b-2 border-stone-900">
                  <img
                    src={event.image}
                    alt={`${event.title} - Business Builders event`}
                    loading="lazy"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-white px-3 py-1 border-2 border-stone-900">
                    <MapPin className="w-4 h-4" />
                    <span className="label-industrial">{event.eventType}</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-yellow-400 px-3 py-1 border-2 border-stone-900">
                    <span className="label-industrial">{event.category}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-display uppercase font-bold text-stone-900 mb-3 group-hover:text-yellow-600 transition-colors">
                    {event.title}
                  </h3>
                  
                  <p className="text-stone-500 text-sm mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-stone-600">
                      <Calendar className="w-4 h-4 text-yellow-500" />
                      <span className="font-semibold">{event.date} - {event.time}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-stone-600">
                      <MapPin className="w-4 h-4 text-yellow-500" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <Button
                    asChild
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-stone-900 border-2 border-stone-900 shadow-offset-sm hover-press font-display uppercase tracking-wide"
                  >
                    <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
                      Register Now
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* View All Events CTA */}
          <div className="text-center mt-12">
            <p className="text-stone-500 mb-4">Want to see all upcoming events?</p>
            <Button
              asChild
              variant="outline"
              className="border-2 border-stone-900 text-stone-900 hover:bg-yellow-400 font-display uppercase tracking-wide"
            >
              <a href="https://www.futurefocusedevents.com/events" target="_blank" rel="noopener noreferrer">
                View All Events on Future Focused Events
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <MegaFooter />
    </div>
  );
}
