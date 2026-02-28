"use client";
import Link from "next/link";
import SEOHead from "@/components/ui/seo-head";

import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, Clock, Heart } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
;
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { CertifiedStamp, AnvilStamp } from "@/components/ui/vintage-stamps";
import type { TeamMember } from "@/lib/db/schema";
const teamCollabImage = "/assets/BB-2023-Office-Content-Shoot-6961-2048x1152_1754613884042.jpg";

export default function Team() {
  const { data: teamMembers = [], isLoading } = useQuery<TeamMember[]>({
    queryKey: ['/api/team'],
    staleTime: 0,
    gcTime: 30 * 60 * 1000,
  });

  useEffect(() => {
    if (teamMembers.length > 0) {
      teamMembers.forEach(member => {
        const img = new Image();
        img.src = member.image;
        if (member.additionalPhotos && member.additionalPhotos.length > 0) {
          const additionalImg = new Image();
          additionalImg.src = member.additionalPhotos[0];
        }
      });
    }
  }, [teamMembers]);

  const stats = [
    { icon: Clock, value: "26+", label: "YEARS EXPERIENCE" },
    { icon: Users, value: "1000+", label: "CLIENTS SERVED" },
    { icon: Award, value: "50+", label: "AWARDS WON" },
    { icon: Heart, value: "100%", label: "DEDICATION" },
  ];

  return (
    <div className="min-h-screen bg-white text-charcoal-900">
      <Breadcrumbs items={[
        { label: "About", href: "/about" },
        { label: "Our Team" }
      ]} />
      <SEOHead
        title="Our Expert Team - Meet the Business Builders Marketing Professionals"
        description="Meet our experienced team of marketing professionals, web developers, and business strategists. Led by founder Jay Owen with 26+ years of industry experience."
        keywords="marketing team, business builders team, Jay Owen, marketing professionals, web developers, business strategists, St Augustine marketing agency"
        canonicalUrl="https://businessbldrs.com/team"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "Our Team",
          "description": "Meet the experienced professionals behind Business Builders marketing agency",
          "mainEntity": {
            "@type": "Organization",
            "name": "Business Builders",
            "employee": [
              {
                "@type": "Person",
                "name": "Jay Owen",
                "jobTitle": "Founder & CEO"
              },
              {
                "@type": "Person", 
                "name": "Chris Webster",
                "jobTitle": "President"
              },
              {
                "@type": "Person",
                "name": "Brandon Lowe", 
                "jobTitle": "Director of Projects"
              }
            ]
          }
        }}
      />
      <Navigation />
      
      {/* Hero Section - Light theme matching site-wide style */}
      <section className="relative pt-32 pb-24 overflow-hidden band-white">
        <CertifiedStamp className="absolute top-20 -right-10 w-64 h-64 opacity-5 hidden lg:block" />
        <AnvilStamp className="absolute bottom-10 -left-10 w-56 h-56 opacity-5 hidden lg:block" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-6 py-2 bg-yellow-400 border-2 border-charcoal-900 shadow-offset-sm mb-8">
            <span className="label-industrial text-charcoal-900">MEET YOUR TEAM</span>
          </div>
          <h1 className="headline-lg text-charcoal-900 mb-6 overflow-hidden">
            OUR EXPERT <span className="text-yellow-500">MARKETING</span><br />
            TEAM
          </h1>
          <p className="text-xl lg:text-2xl text-stone-600 leading-relaxed mb-12 max-w-3xl mx-auto font-serif">
            Our team of dedicated professionals brings years of experience and expertise to help your business grow and succeed.
          </p>
          
          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 border-2 border-charcoal-900 bg-white shadow-offset">
                <stat.icon className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                <div className="font-display font-bold text-3xl lg:text-4xl text-charcoal-900 mb-1">{stat.value}</div>
                <div className="label-industrial text-stone-500 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-24 band-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="label-industrial text-yellow-600 border-2 border-yellow-600 px-4 py-2 inline-block mb-6">
              OUR EXPERTS
            </span>
            <h2 className="headline-lg text-charcoal-900 mb-4">
              THE PEOPLE BEHIND<br />
              <span className="text-yellow-500">YOUR SUCCESS</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto font-serif">
              Each team member brings unique skills and dedication to help your business thrive.
            </p>
          </div>
          
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="bg-white border-2 border-charcoal-900 shadow-offset overflow-hidden">
                  <div className="w-full h-72 bg-stone-200 animate-pulse" />
                  <div className="p-6">
                    <div className="h-6 bg-stone-200 mb-2 animate-pulse" />
                    <div className="h-4 bg-stone-200 mb-3 animate-pulse w-3/4" />
                    <div className="h-16 bg-stone-200 animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Link key={member.id || index} href={`/team/${member.slug}`}>
                  <div 
                    className="bg-white border-2 border-charcoal-900 shadow-offset overflow-hidden cursor-pointer group hover:shadow-offset-lg transition-all duration-300 hover:-translate-y-1"
                    data-testid={`card-team-member-${member.id || index}`}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={member.image}
                        alt={`${member.name}, ${member.title} at Business Builders marketing agency`}
                        className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/20 to-transparent opacity-60" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="font-display font-bold uppercase text-xl text-white mb-1 drop-shadow-lg">{member.name}</h3>
                        <p className="label-industrial text-yellow-400 text-sm">{member.title}</p>
                      </div>
                    </div>
                    <div className="p-5 bg-white">
                      <p className="text-stone-600 text-sm leading-relaxed font-serif line-clamp-2">{member.description}</p>
                      <div className="mt-4 pt-4 border-t border-stone-200 font-display font-bold uppercase text-sm text-charcoal-900 flex items-center gap-2 group-hover:text-yellow-600 transition-colors">
                        View Profile
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 band-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="label-industrial text-charcoal-900 border-2 border-charcoal-900 px-4 py-2 inline-block mb-6">
                OUR VALUES
              </span>
              <h2 className="headline-lg text-charcoal-900 mb-8">
                WHAT DRIVES<br />
                <span className="text-yellow-500">OUR TEAM</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-400 border-2 border-charcoal-900 flex items-center justify-center flex-shrink-0">
                    <span className="font-display font-bold text-charcoal-900">01</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold uppercase text-lg text-charcoal-900 mb-2">Quality First</h3>
                    <p className="text-stone-600 font-serif">We deliver the highest quality work because your success depends on it.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-400 border-2 border-charcoal-900 flex items-center justify-center flex-shrink-0">
                    <span className="font-display font-bold text-charcoal-900">02</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold uppercase text-lg text-charcoal-900 mb-2">Relationships Matter</h3>
                    <p className="text-stone-600 font-serif">Many clients have been with us for over a decade. We're here for the long haul.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-400 border-2 border-charcoal-900 flex items-center justify-center flex-shrink-0">
                    <span className="font-display font-bold text-charcoal-900">03</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold uppercase text-lg text-charcoal-900 mb-2">Joy in Work</h3>
                    <p className="text-stone-600 font-serif">We believe work should be fun. We seek clients who are a joy to work with.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="border-2 border-charcoal-900 shadow-offset">
                <img 
                  src={teamCollabImage}
                  alt="Business Builders Team Collaboration"
                  className="w-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 border-2 border-charcoal-900 p-6 shadow-offset hidden lg:block">
                <div className="font-display font-bold text-4xl text-charcoal-900">26+</div>
                <div className="label-industrial text-charcoal-800">YEARS STRONG</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 band-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="headline-lg text-white mb-6">
            READY TO WORK WITH<br />
            <span className="text-yellow-400">OUR AMAZING TEAM?</span>
          </h2>
          <p className="text-xl lg:text-2xl text-stone-400 mb-12 max-w-3xl mx-auto font-serif">
            Let's discuss how our experienced team can help take your business to the next level.
          </p>
          <Link href="/request-quote">
            <Button 
              size="xl"
              data-testid="button-cta-grow"
            >
              GET YOUR FREE QUOTE
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
      
      <MegaFooter />
    </div>
  );
}
