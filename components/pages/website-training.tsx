"use client";
import Link from "next/link";
import SEOHead from "@/components/ui/seo-head";

import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Monitor, Shield, Users, BookOpen, Video, Mail, Settings, Database, Menu as MenuIcon } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";

const heroImage = "/assets/man-reviews-documents-while-video-call_1759161804996.jpg";
const wordpressLoginImage = "/assets/wp-login-1_1759161876567.png";
const dashboardImage = "/assets/dashboard_1759165415740.png";
const elementorImage = "/assets/stock_images/elementor_page_build_11b47153.jpg";

export default function WebsiteTraining() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const trainingSteps = [
    {
      number: "1",
      title: "LOG IN TO YOUR SITE",
      description: "First things first! You have to log in to your site.",
      content: "You should receive credentials to your site from your project manager. If you have not received that access yet, then email us so we can get your credentials over to you.",
      note: "The login screen will look like the screenshot to the right and the URL bar will show: yoursitename.com/wp-admin",
      icon: Monitor
    },
    {
      number: "2", 
      title: "GET FAMILIAR WITH WORDPRESS",
      description: "It's time to get familiar with your site! WordPress is the platform that we used to build your site.",
      content: "Below is a video to help you to get familiar with a general WordPress website backend. Understanding the dashboard is key to managing your content effectively.",
      icon: BookOpen
    },
    {
      number: "3",
      title: "LEARN ELEMENTOR PAGE BUILDER",
      description: "Here is some training for you! Elementor is the page builder we use to design and build the pages on your website.",
      content: "Here is a quick overview of commonly used Elementor features that will help you make updates and customizations to your website.",
      icon: Settings
    }
  ];

  const wordpressAreas = [
    {
      icon: Settings,
      title: "Updates",
      description: "There are frequent updates that will become available to your site, such as plugin updates. This is where you will see the available updates. If you are on a maintenance plan with us, then this isn't an area you need to worry about since we will make these updates for you!"
    },
    {
      icon: BookOpen,
      title: "Pages", 
      description: "All of the pages of your site will stored here."
    },
    {
      icon: MenuIcon,
      title: "Menus",
      description: "You can edit your menus by navigating to Appearance -> Menus."
    },
    {
      icon: BookOpen,
      title: "Posts",
      description: "If you have a blog on your site, this is where all your posts will be housed. The three areas that you should be sure to fill out are: Title, Content, and Featured Image. If your blog has different categories, then that is something you should pay attention to as well when you are creating a new post."
    },
    {
      icon: Database,
      title: "Media",
      description: "This is where all your images, PDFs, etc. will be stored from your site."
    },
    {
      icon: Users,
      title: "Users",
      description: "You can add users to have access to edit your site here. You will need to input a username, email address, and role. A password will be generated for you here."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Website Training - WordPress & Elementor Guide | Business Builders"
        description="Complete website training guide for WordPress and Elementor. Learn how to manage your website with step-by-step instructions, training videos, and support resources."
        keywords="website training, WordPress training, Elementor training, website management, CMS training, website tutorial"
        canonicalUrl="https://businessbldrs.com/website-training"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "Website Training Guide",
          "description": "Comprehensive training for managing WordPress websites with Elementor",
          "provider": {
            "@type": "Organization",
            "name": "Business Builders"
          },
          "courseMode": "online",
          "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "online",
            "instructor": {
              "@type": "Organization", 
              "name": "Business Builders"
            }
          }
        }}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="band-white pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Website Training" }]} />
          <div className="text-center">
            <span className="label-industrial bg-yellow-400 text-black px-4 py-2 border-2 border-black shadow-offset-sm inline-block mb-6">
              TRAINING
            </span>
            <h1 className="headline-lg text-charcoal-900 mb-6">
              <span className="text-yellow-500">WEBSITE</span><br />
              TRAINING
            </h1>
            <p className="text-xl lg:text-2xl text-stone-600 leading-relaxed mb-8 max-w-4xl mx-auto">
              <strong className="text-charcoal-900">Welcome to the Business Builders training page!</strong> Getting familiar with your new website can be intimidating! Here you will find beginning instructions, training videos, tips, and points to remember for your new site all on one page.
            </p>
            
            {/* Hero Image */}
            <div className="flex justify-center mb-8">
              <div className="relative max-w-2xl bento-card overflow-hidden">
                <img 
                  src={heroImage}
                  alt="Man reviews documents while on video call - website training"
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('step-one')}
                className="bg-yellow-400 text-black px-8 py-4 font-display uppercase font-bold text-lg hover:bg-yellow-500 border-2 border-black shadow-offset hover-press"
              >
                Start Training
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                onClick={() => window.open('/maintenance', '_blank')}
                className="bg-transparent border-2 border-charcoal-900 text-charcoal-900 px-8 py-4 font-display uppercase font-bold text-lg hover:bg-charcoal-900 hover:text-white"
              >
                Learn About Maintenance
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Backup Notice Section */}
      <section className="py-16 band-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bento-card bg-yellow-400 border-2 border-black shadow-offset p-8 text-center">
            <Shield className="w-16 h-16 text-black mx-auto mb-6" />
            <h2 className="headline-md text-black mb-4">
              Have peace of mind! Always remember that backups of your site are taken every night.
            </h2>
            <p className="text-xl text-charcoal-800 leading-relaxed max-w-4xl mx-auto">
              This is good news because if you happen to make some updates or get a little too wild with your clicking around (we all do it eventually) and need to undo the changes, then we can revert your site to the last backup taken. Typically, backups are taken every night.*
            </p>
            <p className="text-sm text-charcoal-700 mt-4">
              * Keep in mind that ALL changes that were made since the time of the last backup will be lost.
            </p>
          </div>
        </div>
      </section>

      {/* Training Steps Section */}
      <section className="py-20 band-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg text-white mb-6">
              <span className="text-yellow-400">Three Simple Steps</span> to Get Started
            </h2>
            <p className="text-xl text-stone-400 max-w-4xl mx-auto">
              Follow these steps to become familiar with your website's backend and learn how to make updates effectively.
            </p>
          </div>
          
          <div className="space-y-20">
            {trainingSteps.map((step, index) => (
              <div key={index} id={index === 0 ? 'step-one' : undefined} className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <span className="label-industrial bg-yellow-400 text-black px-4 py-2 border-2 border-black shadow-offset-sm inline-block mb-6">
                    STEP {step.number}
                  </span>
                  <h3 className="headline-md text-white mb-6">{step.title}</h3>
                  <p className="text-xl text-stone-400 leading-relaxed mb-6">{step.description}</p>
                  <p className="text-lg text-stone-500 leading-relaxed mb-4">{step.content}</p>
                  {step.note && (
                    <p className="text-sm text-stone-500 italic">({step.note})</p>
                  )}
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bento-card bg-charcoal-800 border-2 border-charcoal-700 p-8 text-center">
                    {index === 0 && (
                      <div className="bg-charcoal-900 p-4 mb-4">
                        <img 
                          src={wordpressLoginImage}
                          alt="WordPress Login Screen Interface" 
                          className="w-full h-64 object-contain mb-4"
                        />
                        <p className="text-stone-400 text-sm">WordPress login screen (yoursitename.com/wp-admin)</p>
                      </div>
                    )}
                    {index === 1 && (
                      <div className="bg-charcoal-900 p-4 mb-4">
                        <div className="relative w-full" style={{
                          paddingBottom: '62.5%',
                          height: 0,
                          overflow: 'hidden'
                        }}>
                          <iframe
                            src="https://www.loom.com/embed/fdfa8b2705d7468e8a61636e2523694d"
                            loading="lazy"
                            style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: '100%',
                              border: 0
                            }}
                            allowFullScreen
                            title="WordPress Dashboard Training Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          />
                        </div>
                        <p className="text-stone-400 text-sm mt-4">WordPress dashboard training video</p>
                      </div>
                    )}
                    {index === 2 && (
                      <div className="bg-charcoal-900 p-4 mb-4">
                        <div className="relative w-full" style={{
                          paddingBottom: '62.5%',
                          height: 0,
                          overflow: 'hidden'
                        }}>
                          <iframe
                            src="https://www.loom.com/embed/48e87cbedafa4f0c825956e45ba83e11"
                            loading="lazy"
                            style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: '100%',
                              border: 0
                            }}
                            allowFullScreen
                            title="Elementor Page Builder Training Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          />
                        </div>
                        <p className="text-stone-400 text-sm mt-4">Elementor page builder training video</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WordPress Areas Section */}
      <section className="py-20 band-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg text-charcoal-900 mb-6">
              <span className="text-yellow-400">WordPress Areas</span> to Know
            </h2>
            <p className="text-xl text-stone-500 max-w-4xl mx-auto">
              Here are some of the areas of your WordPress site that you may want to get familiar with:
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Dashboard Image */}
            <div className="bento-card bg-white p-6">
              <img 
                src={dashboardImage}
                alt="WordPress Dashboard Interface" 
                className="w-4/5 h-auto mx-auto"
              />
            </div>

            {/* WordPress Areas Accordion */}
            <div className="bento-card bg-white p-8">
              <h3 className="font-display uppercase text-xl font-bold mb-6 text-center text-charcoal-900">
                Here are some of the areas of your WordPress site that<br />
                you may want to get familiar with:
              </h3>
              
              <Accordion type="single" collapsible className="w-full">
                {wordpressAreas.map((area, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-charcoal-200">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div className="flex items-center gap-3">
                        <span className="text-yellow-500 font-bold text-lg">{index + 1}.</span>
                        <span className="text-charcoal-900 font-semibold">{area.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-stone-500 leading-relaxed pt-2 pb-4">
                      {area.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <section className="py-20 band-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="headline-lg text-white mb-6">
            We can keep your WordPress website <span className="text-yellow-400">fast, secure, and updated</span> for you.
          </h2>
          <p className="text-xl text-stone-400 mb-12 max-w-3xl mx-auto">
            Focus on running your business while we handle all the technical aspects of your website maintenance, security, and performance optimization.
          </p>
          <Link href="/maintenance">
            <Button 
              className="bg-yellow-400 text-black px-12 py-5 font-display uppercase font-bold text-xl hover:bg-yellow-500 border-2 border-black shadow-offset hover-press"
            >
              Learn More About Maintenance Plans
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 band-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="headline-lg text-charcoal-900 mb-6">
                Looking for help with <span className="text-yellow-400">something specific?</span>
              </h2>
              <p className="text-xl text-stone-500 leading-relaxed mb-8">
                You can contact our support team with any questions or check out our support documents to see if the answer to your question has already been answered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/request-quote">
                  <Button 
                    className="bg-yellow-400 text-black px-8 py-4 font-display uppercase font-bold text-lg hover:bg-yellow-500 border-2 border-black shadow-offset hover-press"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Contact Us
                  </Button>
                </Link>
                <Link href="/maintenance">
                  <Button 
                    className="bg-transparent border-2 border-yellow-400 text-charcoal-900 px-8 py-4 font-display uppercase font-bold text-lg hover:bg-yellow-400 hover:text-black"
                  >
                    Get Help
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <div className="bento-card bg-yellow-400 border-2 border-black shadow-offset p-8 text-center">
                <div className="w-20 h-20 bg-black flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-yellow-400" />
                </div>
                <h3 className="font-display uppercase text-2xl font-bold mb-4 text-black">Expert Support Team</h3>
                <p className="text-charcoal-800 leading-relaxed mb-6">
                  Our experienced team is here to help you get the most out of your website. Whether you need training, troubleshooting, or custom updates.
                </p>
                <div className="text-black font-display uppercase font-semibold">
                  Available during business hours
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
