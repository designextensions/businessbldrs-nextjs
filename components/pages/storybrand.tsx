"use client";
import Link from "next/link";
import SEOHead from "@/components/ui/seo-head";

import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Play, CheckCircle, ArrowRight, Target, Users, TrendingUp } from "lucide-react";

export default function StoryBrand() {
  const brandScriptElements = [
    {
      title: "Character",
      description: "Your character, or customer, is here because they want something. What do they want?"
    },
    {
      title: "To Get a Character Transformation",
      description: "The end result is not the same as the beginning result, especially when you've helped your customer experience success. This is a \"From… to\" statement that should change your customer's life — for the better!"
    },
    {
      title: "Problem",
      description: "There are three parts to the problem.",
      details: [
        "External: The actual problem.",
        "Internal: How the actual problem makes them feel.",
        "Philosophical: A belief statement about the actual problem, usually starting with \"It's just plain wrong that…\" or \"I deserve…\""
      ]
    },
    {
      title: "Meets a Guide",
      description: "The guide, or business, enters the story to help the customer solve their problem through…",
      details: [
        "Empathy: \"I understand…\"",
        "Authority: \"I have helped people just like you for more than 10 years…\""
      ]
    },
    {
      title: "Who Gives Them a Plan",
      description: "The guide gives the character a clear vision for how to solve their problem.",
      details: [
        "Process: Our brains like three steps, so a 1-2-3 step process is always best.",
        "Agreement: An agreement is what you, as a business, promise to your customer."
      ]
    },
    {
      title: "Calls Them to Action",
      description: "It's not enough to give your customer a plan — you have to give them a clear next step.",
      details: [
        "Direct: When a prospective customer is ready to make a move: \"Call today!\"",
        "Transitional: When a prospective customer is interested but not quite ready to make a move: \"Download 5 Ways We Can Help!\""
      ]
    },
    {
      title: "And Helps Avoid Failure",
      description: "The character, or customer, will be unhappy and experience failure after not fulfilling their want through your business."
    },
    {
      title: "Which Leads to Success",
      description: "The character, or customer, will be happy and experience success after fulfilling their want through your business."
    }
  ];

  const benefits = [
    {
      title: "Clarify Your Messaging",
      description: "By following the StoryBrand Framework, you'll have a clear path to creating a message that will actually compel your customer to take action. This means more money and more growth for your business!"
    },
    {
      title: "Help From Start to Finish",
      description: "The best part about working with a StoryBrand Certified Agency is that you don't have to do anything yourself except listen, learn, provide input, and look forward to amazing results. We've got a full team that can take your BrandScript and translate it into marketing materials that get you major results."
    },
    {
      title: "An Outsider's Perspective",
      description: "Just like with anything in life, it can be incredibly helpful to have a third party examine your situation. That's what our team will do, as industry experts. An outsider looking in has a huge advantage, as they can offer a fresh perspective on your business to help you see problems that you might not notice otherwise."
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-foreground">
      <SEOHead
        title="StoryBrand Framework - Your Marketing Strategy Secret Weapon | Business Builders"
        description="Learn how the StoryBrand Framework by Donald Miller can transform your marketing strategy. Business Builders is a certified StoryBrand agency helping businesses clarify their message and grow."
        keywords="StoryBrand framework, Donald Miller, marketing strategy, certified StoryBrand agency, business messaging, brand story, customer journey"
        canonicalUrl="https://businessbldrs.com/storybrand-framework"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "StoryBrand Framework",
          "description": "Learn how the StoryBrand Framework can improve your business marketing strategy",
          "mainEntity": {
            "@type": "Service",
            "name": "StoryBrand Framework Consulting",
            "provider": {
              "@type": "Organization",
              "name": "Business Builders"
            }
          }
        }}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="band-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="headline-xl mb-6">
              <span className="text-yellow-500">STORYBRAND FRAMEWORK</span>
            </h1>
            <p className="text-2xl lg:text-3xl text-charcoal-900 mb-8 font-display uppercase">
              Your Marketing Strategy Secret Weapon
            </p>
            <p className="text-xl text-stone-600 mb-8">
              Are you ready to change the course of your business?
            </p>
          </div>

          {/* Hero Image */}
          <div className="max-w-4xl mx-auto mb-12">
            <img
              src="https://businessbldrs.com/wp-content/uploads/2024/11/marketing-blueprint-img-1-1024x436.png"
              alt="Business Builders marketing strategy blueprint showing the plan-produce-promote framework"
              className="w-full shadow-offset border-2 border-charcoal-900"
            />
          </div>

          {/* Quick Navigation */}
          <div className="bg-stone-100 border-2 border-charcoal-900 p-8 shadow-offset">
            <h3 className="text-xl font-display uppercase mb-6 text-center text-charcoal-900">On this page…</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <button onClick={() => scrollToSection('framework')} className="flex items-center text-charcoal-900 hover:text-yellow-600 transition-colors text-left label-industrial">
                <ChevronRight className="w-4 h-4 mr-2" />
                WHAT IS THE STORYBRAND FRAMEWORK?
              </button>
              <button onClick={() => scrollToSection('brandscript')} className="flex items-center text-charcoal-900 hover:text-yellow-600 transition-colors text-left label-industrial">
                <ChevronRight className="w-4 h-4 mr-2" />
                WHAT IS A STORYBRAND BRANDSCRIPT?
              </button>
              <button onClick={() => scrollToSection('marketing')} className="flex items-center text-charcoal-900 hover:text-yellow-600 transition-colors text-left label-industrial">
                <ChevronRight className="w-4 h-4 mr-2" />
                HOW DOES STORYBRAND APPLY TO MARKETING?
              </button>
              <button onClick={() => scrollToSection('agency')} className="flex items-center text-charcoal-900 hover:text-yellow-600 transition-colors text-left label-industrial">
                <ChevronRight className="w-4 h-4 mr-2" />
                HOW WORKING WITH A CERTIFIED AGENCY CAN HELP
              </button>
              <button onClick={() => scrollToSection('start')} className="flex items-center text-charcoal-900 hover:text-yellow-600 transition-colors text-left label-industrial">
                <ChevronRight className="w-4 h-4 mr-2" />
                START USING THE STORYBRAND FRAMEWORK
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 band-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="headline-md mb-8 text-secondary">
            The StoryBrand Framework by Donald Miller is designed to improve your business's marketing strategy by clarifying your message.
          </h2>
          <p className="text-xl text-stone-500 mb-12 max-w-4xl mx-auto">
            With this framework, you have the power to eliminate confusion, connect with customers, and grow your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button asChild className="bg-yellow-400 text-black px-8 py-4 text-lg font-display uppercase shadow-offset hover-press border-2 border-secondary">
              <Link href="/schedule-call">SCHEDULE A CALL</Link>
            </Button>
            <button className="flex items-center text-yellow-600 hover:text-yellow-500 transition-colors text-lg font-display uppercase">
              <Play className="w-6 h-6 mr-2" />
              Our marketing secret weapon
            </button>
          </div>
        </div>
      </section>

      {/* What is StoryBrand Framework */}
      <section id="framework" className="py-20 band-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="headline-lg mb-12 text-center text-secondary">What is the StoryBrand Framework?</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-stone-500 mb-6">
                Every good story since the beginning of time follows this framework, including original folklores, books, and movies, like Star Wars, Frozen, and The Hunger Games.
              </p>
              <h3 className="text-2xl font-display uppercase mb-6 text-secondary">Here's how it works:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-stone-600">A character steps into the story (that's your customer).</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-stone-600">They have a problem (they need help solving it).</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-stone-600">They meet a guide (that's you!).</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-stone-600">Their guide gives them a plan (how to solve their problem).</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-stone-600">That plan calls them to action (to buy from you to solve their problem).</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://businessbldrs.com/wp-content/uploads/2024/12/Mask-Group-11@2x-1024x665.png"
                alt="StoryBrand Framework diagram showing the seven-part storytelling structure for business messaging"
                className="w-full shadow-offset border-2 border-secondary"
              />
            </div>
          </div>

          <div className="bg-yellow-400 border-2 border-secondary p-8 shadow-offset">
            <h3 className="text-2xl font-display uppercase mb-4 text-secondary">And then?</h3>
            <p className="text-lg text-secondary mb-4">
              Success! If you've followed the StoryBrand Framework, you have met your customer's needs (ideally, you surpassed them!) and they love your business, or your brand. On the flip side, if your customer does not buy from you to solve their problem, that leads to failure, and that failure can look different depending on what your customer needed in the first place.
            </p>
            <p className="text-lg text-secondary">
              There's a good reason why this framework has gained traction and popularity while garnering major results. It allows businesses to shift the focus from their own accomplishments to how they can actually help the customer, turning the customer into the heroic character and the business into the helpful guide. In fact, this framework is so good that we call it our marketing strategy secret weapon.
            </p>
          </div>
        </div>
      </section>

      {/* BrandScript Section */}
      <section id="brandscript" className="py-20 band-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="headline-lg mb-12 text-center text-yellow-400">What is a StoryBrand BrandScript?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandScriptElements.map((element, index) => (
              <div key={index} className="bento-card bg-white p-6 hover:translate-y-[-2px]">
                <h3 className="text-xl font-display uppercase mb-4 text-yellow-600">{element.title}</h3>
                <p className="text-stone-500 mb-4">{element.description}</p>
                {element.details && (
                  <ul className="space-y-2">
                    {element.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-sm text-stone-400 flex items-start">
                        <ArrowRight className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-yellow-500" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Application */}
      <section id="marketing" className="py-20 band-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="headline-lg mb-8 text-secondary">How Does StoryBrand Apply to Marketing?</h2>
              <p className="text-lg text-stone-500 mb-8">
                Nice people, pretty designs, and awesome products and services are great, but clear messaging is the foundation of everything.
              </p>
              <p className="text-lg text-stone-500 mb-8">
                If you want your marketing to be successful, then it rests on your business's ability to clarify its messaging. When you confuse, you lose. That's why following the StoryBrand Framework is so important. It eliminates confusion and brings clarity to who your business is, what it offers, and how it can help prospective customers achieve success.
              </p>
            </div>
            <div>
              <img
                src="https://businessbldrs.com/wp-content/uploads/2024/12/shutterstock_371016464@2x-1024x868.png"
                alt="Team applying StoryBrand messaging strategy to business marketing materials"
                className="w-full shadow-offset border-2 border-secondary"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-yellow-400 w-16 h-16 flex items-center justify-center mx-auto mb-6 border-2 border-secondary shadow-offset">
                <CheckCircle className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-display uppercase mb-4 text-secondary">Eliminate confusion.</h3>
              <p className="text-stone-500">
                People have short attention spans, busy lifestyles, and minimal patience. They don't have the time or desire to figure out what you're saying, what you offer, and how they can get it.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 w-16 h-16 flex items-center justify-center mx-auto mb-6 border-2 border-secondary shadow-offset">
                <CheckCircle className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-display uppercase mb-4 text-secondary">Connect with customers.</h3>
              <p className="text-stone-500">
                StoryBrand lets you show your customer that you truly understand their problem and want to help. Empathy is essential because it helps customers connect with your brand or business.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 w-16 h-16 flex items-center justify-center mx-auto mb-6 border-2 border-secondary shadow-offset">
                <CheckCircle className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-display uppercase mb-4 text-secondary">Grow your business.</h3>
              <p className="text-stone-500">
                When prospective customers feel confident that you can successfully solve their problem, it helps convert them into customers — and that's a fact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certified Agency Benefits */}
      <section id="agency" className="py-20 band-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg mb-8 text-secondary">How Working With A StoryBrand Certified Agency Can Help</h2>
            <p className="text-xl text-stone-500 mb-4">It's always best to work with an expert.</p>
            <p className="text-lg text-stone-400 mb-8">
              For example, when you need your car fixed, you'd much rather have an experienced and knowledgeable mechanic make the repair, not your second cousin who just so happens to like cars.
            </p>
            <p className="text-xl font-display uppercase text-yellow-600">Your marketing isn't any different.</p>
            <p className="text-lg text-stone-500 mt-4">
              Business Builders is a StoryBrand Certified Agency and working with a certified agency can have real benefits for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="https://businessbldrs.com/wp-content/uploads/2024/12/45@2x-1024x590.png"
                alt="Business Builders StoryBrand Certified Agency team delivering marketing results for clients"
                className="w-full shadow-offset border-2 border-secondary"
              />
            </div>
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bento-card bg-white p-6">
                  <h3 className="text-xl font-display uppercase mb-4 text-yellow-600">{benefit.title}</h3>
                  <p className="text-stone-500">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section id="start" className="py-20 band-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="headline-lg mb-8 text-secondary">Start Using the StoryBrand Framework to Grow Your Business!</h2>
          <p className="text-xl text-secondary mb-12">
            Want to learn how you can improve your own messaging even without a BrandScript? Download "5 Messaging Mistakes that Lose You Customers"!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild className="bg-secondary text-white px-8 py-4 text-lg font-display uppercase shadow-offset-yellow hover-press border-2 border-secondary">
              <Link href="/request-quote">GET STARTED TODAY</Link>
            </Button>
            <Button variant="secondary" asChild className="bg-white text-secondary px-8 py-4 text-lg font-display uppercase shadow-offset hover-press border-2 border-secondary">
              <Link href="/resources">DOWNLOAD FREE RESOURCE</Link>
            </Button>
          </div>
        </div>
      </section>

      <MegaFooter />
    </div>
  );
}
