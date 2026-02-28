"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Users, Target, Heart, Shield, Star, Coffee } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { CertifiedStamp, AnvilStamp } from "@/components/ui/vintage-stamps";
const teamPhotoImage = "/assets/BB-Team-Photo-1-edited-2_1754613823971.png";
const teamCollabImage = "/assets/BB-2023-Office-Content-Shoot-6961-2048x1152_1754613884042.jpg";
const stAugustineImage = "/assets/services-st-augustine-img_1754613904507.png";
const chrisWebsterImage = "/assets/team-chris-webster.jpg";
import { seoConfig, getBreadcrumbSchema, BASE_URL } from "@/lib/seo-config";
import SEOHead from "@/components/ui/seo-head";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function About() {
  const coreValues = [
    {
      icon: <Star className="w-8 h-8 text-charcoal-900" />,
      title: "QUALITY",
      description: "With every service we provide, our desire is to provide the highest possible quality for our clients."
    },
    {
      icon: <Shield className="w-8 h-8 text-charcoal-900" />,
      title: "EXPERIENCE", 
      description: "Being around since 1999 gives us depth that helps our clients rise to the top."
    },
    {
      icon: <Users className="w-8 h-8 text-charcoal-900" />,
      title: "FAMILY",
      description: "As much as we enjoy the work we do, we seek lives that are rich in people — not just pixels."
    },
    {
      icon: <Heart className="w-8 h-8 text-charcoal-900" />,
      title: "COMMITMENT",
      description: "Many of our customers have been with us for over a decade. We're here for the long haul, and we're committed to relationships that grow businesses."
    },
    {
      icon: <Coffee className="w-8 h-8 text-charcoal-900" />,
      title: "JOY",
      description: "We know it's important to have fun at work. We seek out clients who are fun to work with, and we emphasize fun in and out of the workplace."
    },
    {
      icon: <Target className="w-8 h-8 text-charcoal-900" />,
      title: "FAITH",
      description: "We believe faith is the foundation of everything. All values need a cornerstone — ours is faith in God."
    }
  ];

  const testimonials = [
    {
      content: "Our experience with Business Builders and the corresponding maintenance plan has been great. The team is always very prompt to respond and act on the issue and perhaps more importantly, is always very friendly and accommodating during the process. We enjoy working with the team to rebuild the website and monitor to maintain it thereafter. Thank you for all your help!",
      author: "Megan",
      company: "Inside Towers"
    },
    {
      content: "Business Builders has maintained a website that Ethical Markets is very proud of. Enhancements and suggestions are made to keep the site fresh and modern. The Client Care Team provides impeccable and timely client service and they are always available to assist in problem-solving and brainstorming for out-of-the-box ideas that brings visitors to our website.",
      author: "Hazel and LaRae",
      company: "Ethical Markets Media"
    }
  ];

  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "name": "About Business Builders",
        "description": seoConfig.about.description,
        "mainEntity": {
          "@type": "Organization",
          "name": "Business Builders",
          "foundingDate": "1999",
          "foundingLocation": {
            "@type": "Place",
            "name": "St. Augustine, Florida"
          },
          "founder": {
            "@type": "Person",
            "name": "Jay Owen"
          }
        }
      },
      getBreadcrumbSchema("About Us", "/about")
    ]
  };

  return (
    <div className="min-h-screen bg-stone-50 text-charcoal-900">
      <SEOHead
        title={seoConfig.about.title}
        description={seoConfig.about.description}
        keywords={seoConfig.about.keywords}
        ogImage={seoConfig.about.ogImage}
        canonicalUrl={`${BASE_URL}/about`}
        structuredData={aboutStructuredData}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[100vh] flex items-center band-white">
        {/* Large Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${teamPhotoImage}')`,
          }}
        />
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-white/85" />
        
        <CertifiedStamp className="absolute top-20 -right-10 w-64 h-64 opacity-15 hidden lg:block" />
        <AnvilStamp className="absolute bottom-20 -left-10 w-56 h-56 opacity-10 hidden lg:block" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Breadcrumbs items={[{ label: "About Us" }]} />
          <div className="max-w-4xl mx-auto text-center">
            
            <h1 className="headline-xl text-charcoal-900 mb-8">
              {seoConfig.about.h1}
            </h1>
            <p className="text-editorial-lg text-stone-600 mb-8 max-w-3xl mx-auto">
              <strong className="text-charcoal-900">Your goals become our goals.</strong> With all the companies competing for consumer attention today, a powerful online marketing strategy for your brand is an absolute must. Through high-end website design, effective search engine marketing strategies, and compelling sales copy, we improve traffic to your site and engage visitors with a clear, clean layout that showcases your brand.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 band-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="label-industrial text-yellow-600 border-2 border-yellow-600 px-4 py-2 inline-block mb-6">
                SINCE 1999
              </span>
              <h2 className="headline-lg text-charcoal-900 mb-8">
                We're on a <span className="text-yellow-500">mission</span>
              </h2>
              <div className="space-y-4 text-xl font-serif text-stone-600">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-400 mr-4"></div>
                  <span>to help others grow their businesses</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-400 mr-4"></div>
                  <span>through coaching, marketing, and development</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-400 mr-4"></div>
                  <span>that's friendly, honest, and glorifying to God.</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={teamCollabImage}
                alt="Business Builders Team Working - Collaborative Process"
                className="w-full border-2 border-charcoal-900 shadow-offset"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 band-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="headline-lg text-white mb-6">
            A PROVEN PROCESS TO<br />
            <span className="text-yellow-400">DRIVE RESULTS</span>
          </h2>
          <p className="text-editorial-lg text-stone-400 mb-12 max-w-4xl mx-auto">
            We plan, produce, and promote business with messaging, website, videos, development, and marketing. Then we track the results to create measurable success.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-charcoal-800 border-2 border-yellow-400 p-8 shadow-offset-yellow">
              <div className="w-16 h-16 bg-yellow-400 flex items-center justify-center mx-auto mb-6">
                <span className="text-charcoal-900 font-display font-bold text-2xl">1</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-white uppercase mb-4">PLAN</h3>
              <p className="font-serif text-stone-400">Strategic messaging and comprehensive planning</p>
            </div>
            <div className="bg-charcoal-800 border-2 border-yellow-400 p-8 shadow-offset-yellow">
              <div className="w-16 h-16 bg-yellow-400 flex items-center justify-center mx-auto mb-6">
                <span className="text-charcoal-900 font-display font-bold text-2xl">2</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-white uppercase mb-4">PRODUCE</h3>
              <p className="font-serif text-stone-400">High-quality websites, videos, and marketing materials</p>
            </div>
            <div className="bg-charcoal-800 border-2 border-yellow-400 p-8 shadow-offset-yellow">
              <div className="w-16 h-16 bg-yellow-400 flex items-center justify-center mx-auto mb-6">
                <span className="text-charcoal-900 font-display font-bold text-2xl">3</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-white uppercase mb-4">PROMOTE</h3>
              <p className="font-serif text-stone-400">Strategic marketing and measurable results tracking</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 band-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg text-charcoal-900 mb-6">
              CORE VALUES: <span className="text-yellow-500">WHO WE ARE</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bento-card p-8 text-center">
                <div className="w-16 h-16 bg-yellow-400 flex items-center justify-center mx-auto mb-6 border-2 border-charcoal-900">
                  {value.icon}
                </div>
                <h3 className="font-display font-bold text-2xl text-charcoal-900 uppercase mb-4">{value.title}</h3>
                <p className="font-serif text-stone-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 band-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="headline-md text-charcoal-900 mb-8">
                Based in Sunny<br />
                <span className="text-yellow-500">St. Augustine, Florida</span><br />
                — Serving Businesses Everywhere
              </h2>
              <p className="text-editorial-lg text-stone-600 leading-relaxed mb-8">
                Since 1999, we've been in the business of helping other businesses grow. Our team crafts complete marketing plans with websites, social media, Google ads, SEO, video, and more. When you need website, marketing, branding, or development services, don't settle for companies that overprice and underdeliver.
              </p>
              <Link href="/request-quote">
                <Button size="lg">
                  Schedule a free 15-min call
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src={stAugustineImage}
                alt="Castillo de San Marcos - Historic St. Augustine, Florida"
                className="w-full border-2 border-charcoal-900 shadow-offset"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Jay's Message Section */}
      <section className="py-20 band-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src={chrisWebsterImage}
                alt="Jay Owen - Founder & CEO of Business Builders"
                className="w-full max-w-md mx-auto border-2 border-yellow-400 shadow-offset-yellow"
              />
            </div>
            <div>
              <h2 className="headline-md text-white mb-8">
                A Message from <span className="text-yellow-400">Jay</span>
              </h2>
              <div className="space-y-6 font-serif text-lg text-stone-400 leading-relaxed">
                <p>
                  As a kid, I remember reading an article about a new technology that was coming soon: "the World Wide Web." It sounded pretty amazing, but I had no idea it would be the story of the next two decades for me.
                </p>
                <p>
                  Business Builders (originally named Design Extensions) started while I was a student at Nease High School in St. Augustine, Florida. I had been playing with websites since the age of 12, but at 17, that hobby became real work. That year, we made a grand total of $5,000. Needless to say, we've grown a bit since then — AND we've done it every single year for over two decades.
                </p>
                <p className="text-xl font-display font-bold text-white uppercase">
                  With the right planning, production, and promotion, we can help you do the same.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 band-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg text-charcoal-900 mb-6">
              <span className="text-yellow-500">TESTIMONIALS</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bento-card p-8">
                <p className="font-serif text-stone-600 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t-2 border-charcoal-900 pt-6">
                  <p className="font-display font-bold text-yellow-600 text-lg uppercase">{testimonial.author}</p>
                  <p className="font-serif text-stone-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* View More Testimonials Link */}
          <div className="text-center mt-12">
            <Link href="/testimonials">
              <Button variant="outline" size="lg">
                View More Testimonials
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 band-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-md text-charcoal-900 mb-6">
              Frequently Asked <span className="text-yellow-500">Questions</span>
            </h2>
            <p className="text-xl text-stone-500">Learn more about Business Builders</p>
          </div>

          <div className="border-2 border-charcoal-900 shadow-offset overflow-hidden bg-white">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b-2 border-charcoal-900">
                <AccordionTrigger className="text-left text-lg font-display uppercase text-charcoal-900 hover:text-yellow-600 px-6 py-4 hover:no-underline">
                  How long has Business Builders been in business?
                </AccordionTrigger>
                <AccordionContent className="text-stone-500 px-6 pb-4">
                  Business Builders (originally named Design Extensions) was founded in 1999, giving us over 26 years of experience in web design, marketing, and helping businesses grow. What started as a high school passion project has grown into a full-service digital marketing agency that has helped hundreds of businesses, ministries, and nonprofits succeed online.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b-2 border-charcoal-900">
                <AccordionTrigger className="text-left text-lg font-display uppercase text-charcoal-900 hover:text-yellow-600 px-6 py-4 hover:no-underline">
                  Where is Business Builders located?
                </AccordionTrigger>
                <AccordionContent className="text-stone-500 px-6 pb-4">
                  Business Builders is based in beautiful St. Augustine, Florida, the oldest city in the United States. While our roots are local, we serve clients nationwide and have partnered with businesses, ministries, and nonprofits across the country. Our team works both in-office and remotely to deliver results no matter where our clients are located.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b-2 border-charcoal-900">
                <AccordionTrigger className="text-left text-lg font-display uppercase text-charcoal-900 hover:text-yellow-600 px-6 py-4 hover:no-underline">
                  What industries do you specialize in?
                </AccordionTrigger>
                <AccordionContent className="text-stone-500 px-6 pb-4">
                  We work across a diverse range of industries including automotive, construction, manufacturing, healthcare, nonprofits, ministries, professional services, real estate, and more. Our proven Plan-Produce-Promote process adapts to any industry, and our 26+ years of experience means we have seen what works across many different markets. Whether you are a local business or a national brand, we tailor our strategies to your specific audience.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-lg font-display uppercase text-charcoal-900 hover:text-yellow-600 px-6 py-4 hover:no-underline">
                  What makes Business Builders different from other agencies?
                </AccordionTrigger>
                <AccordionContent className="text-stone-500 px-6 pb-4">
                  Several things set us apart: we are a certified StoryBrand agency that uses proven messaging frameworks to help your brand connect with customers. We are also a HubSpot Platinum Partner with deep CRM and automation expertise. Most importantly, we have been growing every single year since 1999 because we build long-term relationships with our clients -- many have been with us for over a decade. Our faith-driven values of quality, commitment, and joy mean we treat every project like it matters, because it does.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How long has Business Builders been in business?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Business Builders (originally named Design Extensions) was founded in 1999, giving us over 26 years of experience in web design, marketing, and helping businesses grow. What started as a high school passion project has grown into a full-service digital marketing agency that has helped hundreds of businesses, ministries, and nonprofits succeed online."
              }
            },
            {
              "@type": "Question",
              "name": "Where is Business Builders located?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Business Builders is based in beautiful St. Augustine, Florida, the oldest city in the United States. While our roots are local, we serve clients nationwide and have partnered with businesses, ministries, and nonprofits across the country. Our team works both in-office and remotely to deliver results no matter where our clients are located."
              }
            },
            {
              "@type": "Question",
              "name": "What industries do you specialize in?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We work across a diverse range of industries including automotive, construction, manufacturing, healthcare, nonprofits, ministries, professional services, real estate, and more. Our proven Plan-Produce-Promote process adapts to any industry, and our 26+ years of experience means we have seen what works across many different markets. Whether you are a local business or a national brand, we tailor our strategies to your specific audience."
              }
            },
            {
              "@type": "Question",
              "name": "What makes Business Builders different from other agencies?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Several things set us apart: we are a certified StoryBrand agency that uses proven messaging frameworks to help your brand connect with customers. We are also a HubSpot Platinum Partner with deep CRM and automation expertise. Most importantly, we have been growing every single year since 1999 because we build long-term relationships with our clients -- many have been with us for over a decade. Our faith-driven values of quality, commitment, and joy mean we treat every project like it matters, because it does."
              }
            }
          ]
        }).replace(/</g, '\\u003c') }} />
      </section>

      {/* Ready to Forge CTA */}
      <section className="py-20 band-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="headline-lg text-white mb-6">
            Are you ready to <span className="text-yellow-400">forge your future?</span><br />
            We'd love to help.
          </h2>
          <p className="text-editorial-lg text-stone-400 mb-12 max-w-3xl mx-auto">
            Let's work together to transform your business with proven strategies and exceptional results.
          </p>
          <Link href="/request-quote">
            <Button size="xl">
              WE HELP BUSINESS GROW
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </Link>
        </div>
      </section>

      <MegaFooter />
    </div>
  );
}
