"use client";
import Link from "next/link";
import SEOHead from "@/components/ui/seo-head";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Quote, Star, ArrowRight, MessageSquare, Users, Award, TrendingUp } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
;

const videoTestimonials = [
  {
    id: 1,
    title: "Bozard Ford Lincoln Success Story",
    description: "See how Business Builders helped Bozard Ford Lincoln clarify their message and triple their qualified leads using the StoryBrand framework.",
    videoId: "EvE97ewdaQo",
    thumbnail: "https://img.youtube.com/vi/EvE97ewdaQo/maxresdefault.jpg",
    clientName: "Letti Bozard",
    clientCompany: "Bozard Ford Lincoln",
    tags: ["StoryBrand", "Lead Generation"]
  },
  {
    id: 2,
    title: "Ameri-Force Brand Transformation",
    description: "Discover how Ameri-Force transformed their brand and marketing with Business Builders — and why they feel like an extension of the team.",
    videoId: "tyuiCfYYzZg",
    thumbnail: "https://img.youtube.com/vi/tyuiCfYYzZg/maxresdefault.jpg",
    clientName: "Tiffany Marie Carrion",
    clientCompany: "Ameri-Force",
    tags: ["Branding", "Strategy"]
  },
  {
    id: 3,
    title: "Marketing Results That Matter",
    description: "Learn about the incredible marketing results achieved through a partnership with Business Builders and their proven framework.",
    videoId: "BBB7rMu6RD0",
    thumbnail: "https://img.youtube.com/vi/BBB7rMu6RD0/maxresdefault.jpg",
    clientName: "Client Partner",
    clientCompany: "Success Story",
    tags: ["Marketing", "Growth"]
  },
  {
    id: 4,
    title: "Exceptional Service & Results",
    description: "Hear about the journey and the exceptional service provided by the Business Builders team throughout the entire process.",
    videoId: "qrUn7G8KbYQ",
    thumbnail: "https://img.youtube.com/vi/qrUn7G8KbYQ/maxresdefault.jpg",
    clientName: "Client Partner",
    clientCompany: "Testimonial",
    tags: ["Service", "Partnership"]
  }
];

const writtenTestimonials = [
  {
    id: 1,
    quote: "It was so easy to talk about our business after working with Business Builders. They feel like an extension of our marketing team.",
    clientName: "Tiffany Marie Carrion",
    clientCompany: "Ameri-Force",
    result: "Complete brand transformation"
  },
  {
    id: 2,
    quote: "They helped us clarify our message and tripled our qualified leads. The StoryBrand framework changed everything for us.",
    clientName: "Letti Bozard",
    clientCompany: "Bozard Ford Lincoln",
    result: "3x qualified leads"
  },
  {
    id: 3,
    quote: "Business Builders understood our vision and brought it to life with a strategy that actually works. Our online presence has never been stronger.",
    clientName: "Satisfied Client",
    clientCompany: "Local Business",
    result: "Stronger online presence"
  },
  {
    id: 4,
    quote: "From the first meeting, I knew we were in good hands. They took the time to understand our business and delivered results beyond our expectations.",
    clientName: "Business Owner",
    clientCompany: "Growing Company",
    result: "Results beyond expectations"
  }
];

export default function Testimonials() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [loadedVideos, setLoadedVideos] = useState<Set<number>>(new Set());

  const featuredVideo = videoTestimonials[0];
  const remainingVideos = videoTestimonials.slice(1);

  const openVideo = (videoId: number) => {
    setSelectedVideo(videoId);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  const handleInlinePlay = (videoId: number) => {
    setLoadedVideos(prev => new Set(prev).add(videoId));
  };

  const videoTestimonialsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Client Video Testimonials",
    "description": "Video testimonials from Business Builders clients sharing their success stories",
    "numberOfItems": videoTestimonials.length,
    "itemListElement": videoTestimonials.map((video, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "VideoObject",
        "name": video.title,
        "description": video.description,
        "thumbnailUrl": video.thumbnail,
        "embedUrl": `https://www.youtube.com/embed/${video.videoId}`,
        "uploadDate": "2024-01-01",
        "publisher": {
          "@type": "Organization",
          "name": "Business Builders"
        }
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://businessbldrs.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Testimonials",
        "item": "https://businessbldrs.com/testimonials"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Client Testimonials - Real Success Stories | Business Builders"
        description="Hear from our clients about how Business Builders transformed their marketing strategies, increased leads, and helped them grow their businesses with proven frameworks."
        keywords="client testimonials, success stories, marketing results, business growth, client reviews, case studies"
        canonicalUrl="https://businessbldrs.com/testimonials"
        structuredData={{
          "@context": "https://schema.org",
          "@graph": [videoTestimonialsSchema, breadcrumbSchema]
        }}
      />
      <Navigation />

      {/* Hero Section - Dark theme with featured video */}
      <section className="pt-32 pb-16 band-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="label-industrial inline-block px-4 py-2 bg-yellow-400 text-charcoal-900 border-2 border-charcoal-900 shadow-offset-sm mb-6">
                <MessageSquare className="w-4 h-4 inline mr-2" />
                CLIENT TESTIMONIALS
              </span>
              <h1 className="headline-lg text-white mb-6">
                CLIENT<br />
                <span className="text-yellow-400">SUCCESS STORIES</span>
              </h1>
              <p className="text-editorial text-stone-400 mb-8">
                Hear directly from our clients about how Business Builders transformed their marketing strategies and helped them achieve remarkable growth.
              </p>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="font-display font-black text-3xl text-yellow-400">300%</div>
                  <div className="label-industrial text-stone-500 text-xs">AVG LEAD GROWTH</div>
                </div>
                <div className="w-px h-12 bg-charcoal-700" />
                <div className="text-center">
                  <div className="font-display font-black text-3xl text-yellow-400">26+</div>
                  <div className="label-industrial text-stone-500 text-xs">YEARS</div>
                </div>
                <div className="w-px h-12 bg-charcoal-700" />
                <div className="text-center">
                  <div className="font-display font-black text-3xl text-yellow-400">5</div>
                  <div className="label-industrial text-stone-500 text-xs">STAR REVIEWS</div>
                </div>
              </div>
            </div>

            {/* Featured Video */}
            <div
              className="relative cursor-pointer group"
              onClick={() => openVideo(featuredVideo.id)}
              onKeyDown={(e) => e.key === 'Enter' && openVideo(featuredVideo.id)}
              role="button"
              tabIndex={0}
              aria-label={`Play ${featuredVideo.title}`}
            >
              <div className="border-2 border-charcoal-700 overflow-hidden">
                <div className="relative aspect-video">
                  <img
                    src={featuredVideo.thumbnail}
                    alt={`${featuredVideo.title} - client video testimonial for Business Builders`}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-charcoal-900/40 group-hover:bg-charcoal-900/30 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-yellow-400 border-2 border-charcoal-900 shadow-offset flex items-center justify-center group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-offset-sm transition-all">
                      <Play className="w-8 h-8 text-charcoal-900 ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    {featuredVideo.tags.map((tag) => (
                      <span key={tag} className="label-industrial bg-yellow-400 text-charcoal-900 px-2 py-1 text-xs">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <span className="label-industrial text-yellow-400 text-xs">{featuredVideo.clientCompany}</span>
                <h3 className="font-display font-bold text-white text-lg mt-1 group-hover:text-yellow-400 transition-colors uppercase">
                  {featuredVideo.title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Written Testimonials - Quote Cards */}
      <section className="band-stone py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="label-industrial text-yellow-600 mb-2 block">IN THEIR WORDS</span>
              <h2 className="headline-md font-display uppercase text-charcoal-900">
                What Our Clients <span className="text-yellow-500">Say</span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {writtenTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`p-6 lg:p-8 border-2 ${index === 0 ? 'border-yellow-400 bg-white shadow-offset-yellow' : 'border-charcoal-800 bg-white shadow-offset'}`}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="flex items-start gap-3 mb-6">
                  <Quote className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
                  <p className="font-serif italic text-charcoal-800 text-lg leading-relaxed">
                    {testimonial.quote}
                  </p>
                </div>
                <div className="border-t-2 border-stone-200 pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-yellow-400 flex items-center justify-center">
                      <span className="text-charcoal-900 font-display font-bold text-sm">
                        {testimonial.clientName.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-display font-bold text-charcoal-900 uppercase text-sm">{testimonial.clientName}</p>
                      <p className="text-stone-500 text-xs">{testimonial.clientCompany}</p>
                    </div>
                  </div>
                  {testimonial.result && (
                    <span className="label-industrial text-yellow-600 text-xs hidden sm:block">{testimonial.result}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Grid */}
      <section className="py-20 band-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="label-industrial text-yellow-600 mb-2 block">VIDEO TESTIMONIALS</span>
              <h2 className="headline-md font-display uppercase text-charcoal-900">
                Watch Their <span className="text-yellow-500">Stories</span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {remainingVideos.map((video) => (
              <div key={video.id} className="bento-card overflow-hidden group">
                <div className="relative">
                  {loadedVideos.has(video.id) ? (
                    <div className="aspect-video">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
                        title={video.title}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <div
                      className="relative aspect-video cursor-pointer"
                      onClick={() => handleInlinePlay(video.id)}
                      onKeyDown={(e) => e.key === 'Enter' && handleInlinePlay(video.id)}
                      role="button"
                      tabIndex={0}
                      aria-label={`Play ${video.title}`}
                    >
                      <img
                        src={video.thumbnail}
                        alt={`${video.title} - client testimonial video thumbnail`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-charcoal-900/40 group-hover:bg-charcoal-900/30 transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 bg-yellow-400 flex items-center justify-center group-hover:scale-110 transition-transform shadow-offset-sm">
                          <Play className="w-7 h-7 text-charcoal-900 ml-1" />
                        </div>
                      </div>
                      <div className="absolute top-3 left-3 flex gap-2">
                        {video.tags.map((tag) => (
                          <span key={tag} className="label-industrial bg-yellow-400 text-charcoal-900 px-2 py-1 text-xs">{tag}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-charcoal-900 uppercase mb-2 group-hover:text-yellow-600 transition-colors line-clamp-1">{video.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed line-clamp-2 mb-4">{video.description}</p>
                  <div className="border-t-2 border-stone-200 pt-3 flex items-center gap-3">
                    <div className="w-8 h-8 bg-charcoal-900 flex items-center justify-center flex-shrink-0">
                      <span className="text-yellow-400 font-display font-bold text-xs">
                        {video.clientName.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-display font-bold text-charcoal-900 text-xs uppercase">{video.clientName}</p>
                      <p className="text-stone-500 text-xs">{video.clientCompany}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 band-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="label-industrial text-yellow-400 mb-2 block">BY THE NUMBERS</span>
            <h2 className="headline-md font-display uppercase text-white">
              Proven <span className="text-yellow-400">Results</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, stat: "300%", label: "Average Lead Increase", desc: "Qualified lead improvement" },
              { icon: Award, stat: "26+", label: "Years Experience", desc: "Proven marketing track record" },
              { icon: Users, stat: "500+", label: "Businesses Served", desc: "Across multiple industries" },
              { icon: Star, stat: "5.0", label: "Client Rating", desc: "Consistent 5-star reviews" },
            ].map((item, i) => (
              <div key={i} className="bg-charcoal-800 border-2 border-charcoal-700 p-6 text-center">
                <item.icon className="w-6 h-6 text-yellow-400 mx-auto mb-3" />
                <div className="font-display font-black text-3xl lg:text-4xl text-yellow-400 mb-2">{item.stat}</div>
                <h3 className="font-display font-bold text-white text-xs uppercase mb-1">{item.label}</h3>
                <p className="text-stone-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 band-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="headline-md font-display uppercase text-charcoal-900 mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-lg text-charcoal-800 mb-8 leading-relaxed max-w-2xl mx-auto">
            Let's discuss how we can help transform your marketing strategy and achieve the growth you've been looking for.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-charcoal-900 text-white px-8 py-4 font-bold hover:bg-charcoal-800 transition-all duration-300 shadow-offset hover-press"
            >
              <Link href="/request-quote">
                Get Your Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-transparent border-2 border-charcoal-900 text-charcoal-900 px-8 py-4 font-bold hover:bg-charcoal-900 hover:text-white transition-all duration-300"
            >
              <Link href="/case-studies">
                View Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && closeVideo()}
        >
          <div className="relative w-full max-w-5xl">
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white hover:text-yellow-400 text-sm font-display uppercase tracking-wide transition-colors"
            >
              ✕ Close
            </button>
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${videoTestimonials.find(v => v.id === selectedVideo)?.videoId}?autoplay=1`}
                className="w-full h-full border-2 border-charcoal-800"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Client Testimonial Video"
              />
            </div>
          </div>
        </div>
      )}

      <MegaFooter />
    </div>
  );
}
