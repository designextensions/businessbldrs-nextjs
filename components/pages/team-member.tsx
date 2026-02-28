"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TeamMemberDetailSkeleton } from "@/components/ui/team-skeleton";
import { 
  Mail, 
  ArrowLeft, 
  Quote, 
  Award, 
  Heart,
  Coffee,
  Camera,
  User
} from "lucide-react";
import TeamMemberSEO from "@/components/ui/TeamMemberSEO";
import type { TeamMember } from "@/lib/db/schema";

function TeamMemberBio() {
  const params = useParams();
  const slug = params?.slug as string | undefined;
  
  const { data: teamMember, isLoading, error } = useQuery<TeamMember>({
    queryKey: ['/api/team', slug],
    staleTime: 15 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });

  if (isLoading) {
    return <TeamMemberDetailSkeleton />;
  }

  if (error || !teamMember) {
    return (
      <div className="min-h-screen band-dark">
        <Navigation />
        <div className="pt-32 flex items-center justify-center min-h-[calc(100vh-8rem)]">
          <div className="text-center">
            <h1 className="headline-md text-white mb-4">Team Member Not Found</h1>
            <p className="text-stone-400 mb-6">The team member you're looking for doesn't exist.</p>
            <Link href="/team">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-display uppercase shadow-offset border-2 border-black">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Team
              </Button>
            </Link>
          </div>
        </div>
        <MegaFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <TeamMemberSEO member={teamMember} />
      
      <Navigation />

      {/* Header Section - Light Band */}
      <section className="pt-32 pb-16 band-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/team">
            <Button variant="outline" className="mb-8 border-2 border-charcoal-900 bg-transparent text-charcoal-900 hover:bg-charcoal-900 hover:text-white font-display uppercase">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Team
            </Button>
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="order-2 lg:order-1">
              <div className="bento-card p-2 bg-white border-charcoal-900 shadow-offset">
                <img
                  src={teamMember.image}
                  alt={`${teamMember.name}, ${teamMember.title} at Business Builders marketing agency`}
                  className="w-full max-w-md mx-auto h-auto"
                />
              </div>
            </div>

            {/* Header Info */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <span className="label-industrial text-charcoal-900 mb-4 inline-block border-2 border-charcoal-900 px-3 py-1">
                <User className="w-3 h-3 mr-1 inline" />
                TEAM MEMBER
              </span>
              
              <h1 className="headline-lg text-charcoal-900 mb-4">
                {teamMember.name}
              </h1>
              
              <div className="mb-6">
                <h2 className="text-xl md:text-2xl text-yellow-500 font-display uppercase mb-2">
                  {teamMember.title}
                </h2>
                {teamMember.funTitle && (
                  <p className="text-lg text-stone-600 font-serif italic">
                    "{teamMember.funTitle}"
                  </p>
                )}
              </div>

              <p className="text-lg text-stone-600 leading-relaxed mb-8 max-w-xl">
                {teamMember.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  asChild 
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-display uppercase shadow-offset border-2 border-black"
                >
                  <a href={`mailto:${teamMember.email}`}>
                    <Mail className="w-5 h-5 mr-2" />
                    Contact {teamMember.name.split(' ')[0]}
                  </a>
                </Button>
                <Button 
                  asChild
                  size="lg"
                  className="bg-transparent border-2 border-charcoal-900 text-charcoal-900 hover:bg-charcoal-900 hover:text-white font-display uppercase"
                >
                  <Link href="/request-quote">
                    Get Free Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section - Stone Band */}
      <section className="py-20 band-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Left Sidebar - Quick Info */}
            <div className="lg:col-span-1 space-y-6">
              {/* Contact Card */}
              <div className="bento-card">
                <div className="bg-yellow-400 text-black p-4 border-b-2 border-black">
                  <h3 className="font-display uppercase flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Contact Info
                  </h3>
                </div>
                <div className="p-6 bg-white">
                  <div className="space-y-4">
                    <Button 
                      asChild 
                      className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-display uppercase shadow-offset-sm border-2 border-black"
                    >
                      <a href={`mailto:${teamMember.email}`}>
                        <Mail className="w-4 h-4 mr-2" />
                        Send Email
                      </a>
                    </Button>
                    <Separator className="bg-stone-300" />
                    <div className="text-sm text-stone-500">
                      <p className="font-display uppercase text-black mb-1">Email:</p>
                      <p>{teamMember.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fun Facts Card */}
              {(teamMember.funTitle || teamMember.outsideWork) && (
                <div className="bento-card">
                  <div className="bg-yellow-400 text-black p-4 border-b-2 border-black">
                    <h3 className="font-display uppercase flex items-center gap-2">
                      <Heart className="w-5 h-5" />
                      Fun Facts
                    </h3>
                  </div>
                  <div className="p-6 bg-white space-y-4">
                    {teamMember.funTitle && (
                      <div>
                        <p className="font-display uppercase text-black mb-1 flex items-center gap-1 text-sm">
                          <Award className="w-4 h-4 text-yellow-500" />
                          Nickname:
                        </p>
                        <p className="text-stone-500 font-serif italic">"{teamMember.funTitle}"</p>
                      </div>
                    )}
                    {teamMember.outsideWork && (
                      <div>
                        <p className="font-display uppercase text-black mb-1 flex items-center gap-1 text-sm">
                          <Coffee className="w-4 h-4 text-yellow-500" />
                          Outside the office:
                        </p>
                        <p className="text-stone-500">{teamMember.outsideWork}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Quote Card */}
              {teamMember.quote && (
                <div className="bento-card bg-yellow-400 border-2 border-black shadow-offset">
                  <div className="p-6 text-center">
                    <Quote className="w-8 h-8 text-black mx-auto mb-4" />
                    <blockquote className="text-lg font-serif italic text-black mb-4">
                      "{teamMember.quote}"
                    </blockquote>
                    {teamMember.quoteAuthor && (
                      <cite className="text-stone-800 text-sm font-display uppercase">
                        — {teamMember.quoteAuthor}
                      </cite>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Main Content - Bio */}
            <div className="lg:col-span-2 space-y-8">
              {/* Full Bio */}
              <div className="bento-card bg-white">
                <div className="p-6 border-b-2 border-black">
                  <h3 className="headline-md flex items-center gap-2">
                    <User className="w-6 h-6 text-yellow-500" />
                    About {teamMember.name.split(' ')[0]}
                  </h3>
                </div>
                <div className="p-6">
                  <div className="prose prose-lg max-w-none">
                    {teamMember.fullBio ? (
                      teamMember.fullBio.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="text-stone-500 mb-4 leading-relaxed">
                          {paragraph}
                        </p>
                      ))
                    ) : (
                      <p className="text-stone-500 leading-relaxed text-lg">
                        {teamMember.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Additional Photos Section */}
              {teamMember.additionalPhotos && teamMember.additionalPhotos.length > 0 && (
                <div className="bento-card bg-white">
                  <div className="p-6 border-b-2 border-black">
                    <h3 className="font-display uppercase text-xl flex items-center gap-2">
                      <Camera className="w-5 h-5 text-yellow-500" />
                      More Photos
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {teamMember.additionalPhotos.map((photo, index) => (
                        <div key={index} className="bento-card p-1">
                          <img
                            src={photo}
                            alt={`${teamMember.name} at Business Builders - additional photo ${index + 1}`}
                            className="w-full h-auto shadow-offset-sm"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* CTA Section */}
              <div className="bento-card bg-yellow-400 border-2 border-black shadow-offset">
                <div className="p-8 text-center">
                  <h3 className="headline-md text-black mb-4">Ready to Work Together?</h3>
                  <p className="text-lg mb-6 text-stone-800">
                    {teamMember.name.split(' ')[0]} and the Business Builders team are ready to help grow your business.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      asChild 
                      size="lg"
                      className="bg-black text-white hover:bg-stone-800 font-display uppercase shadow-offset border-2 border-black"
                    >
                      <Link href="/request-quote">
                        Get Free Quote
                      </Link>
                    </Button>
                    <Button 
                      asChild
                      size="lg"
                      className="bg-white border-2 border-black text-black hover:bg-black hover:text-white font-display uppercase shadow-offset"
                    >
                      <a href={`mailto:${teamMember.email}`}>
                        <Mail className="w-4 h-4 mr-2" />
                        Email {teamMember.name.split(' ')[0]}
                      </a>
                    </Button>
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

export default TeamMemberBio;
