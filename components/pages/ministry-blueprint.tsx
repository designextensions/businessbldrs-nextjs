"use client";
import Link from "next/link";
import SEOHead from "@/components/ui/seo-head";

import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import { Button } from "@/components/ui/button";
import { Check, Phone, Calendar, Target, Users, MessageCircle } from "lucide-react";
;

export default function MinistryBlueprint() {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Ministry Blueprint - Business Builders"
        description="Reach more people and expand your ministry with improved communication and marketing. Our Ministry Blueprint provides a tailored plan to enhance your outreach efforts, connect with people and fulfill the mission."
        keywords="ministry marketing, church growth, ministry communication, church outreach, ministry blueprint, church marketing"
        canonicalUrl="https://businessbldrs.com/ministry-blueprint"
      />
      <Navigation />
      
      <div className="pt-24">
        <section className="band-stone py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="label-industrial text-yellow-600 mb-4 inline-block">
                  Business Builders
                </span>
                <h1 className="headline-lg text-charcoal-900 mb-6">
                  Ministry <span className="text-yellow-400">Blueprint</span>
                </h1>
                <p className="text-xl text-stone-500 mb-8 leading-relaxed">
                  Reach more people and expand your ministry with improved communication and marketing.
                </p>
                <p className="text-lg text-stone-600 mb-8">
                  Our Ministry Blueprint provides a tailored plan to enhance your outreach efforts, connect with people and fulfill the mission.
                </p>
                <Link href="/schedule-call">
                  <Button 
                    size="lg"
                    className="bg-yellow-400 hover:bg-yellow-500 text-charcoal-900 border-2 border-charcoal-800 px-8 py-3 text-lg font-display font-bold uppercase shadow-offset hover-press"
                    data-testid="button-schedule-call-hero"
                  >
                    Schedule a Call
                  </Button>
                </Link>
              </div>
              <div className="lg:pl-8">
                <img
                  src="/ministry-baptism-scene.png"
                  alt="Ministry outreach and baptism scene - Business Builders Ministry Blueprint helps churches grow their digital presence"
                  className="w-full bento-card"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="band-white py-20">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="headline-lg text-charcoal-900 mb-8">
                A lot of ministry leaders struggle with communication & marketing efforts that don't actually work.
              </h2>
              <p className="text-xl text-stone-500 mb-12">
                The Ministry Blueprint is a strategic planning tool that helps you:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 border-2 border-charcoal-800 flex items-center justify-center mx-auto mb-4 shadow-offset">
                    <Target className="w-8 h-8 text-charcoal-900" />
                  </div>
                  <h3 className="font-display font-bold text-xl uppercase text-charcoal-900 mb-2">Enhance your outreach</h3>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 border-2 border-charcoal-800 flex items-center justify-center mx-auto mb-4 shadow-offset">
                    <Users className="w-8 h-8 text-charcoal-900" />
                  </div>
                  <h3 className="font-display font-bold text-xl uppercase text-charcoal-900 mb-2">Engage your community</h3>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 border-2 border-charcoal-800 flex items-center justify-center mx-auto mb-4 shadow-offset">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-xl uppercase text-charcoal-900 mb-2">Fulfill your mission</h3>
                </div>
              </div>

              <Link href="/schedule-call">
                <Button 
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-charcoal-900 border-2 border-charcoal-800 px-8 py-3 font-display font-bold uppercase shadow-offset hover-press"
                  data-testid="button-schedule-call-problem"
                >
                  Schedule a Call
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="band-yellow py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="headline-lg text-charcoal-900 mb-8">
                Results
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bento-card bg-white p-8 text-center">
                <div className="text-4xl font-display font-black text-yellow-600 mb-2">5.1 million</div>
                <p className="text-stone-500">Organic social media impressions in 90 days</p>
              </div>
              <div className="bento-card bg-white p-8 text-center">
                <div className="text-4xl font-display font-black text-yellow-600 mb-2">10x</div>
                <p className="text-stone-500">Monthly website visitor growth in just 2 years</p>
              </div>
              <div className="bento-card bg-white p-8 text-center">
                <div className="text-4xl font-display font-black text-green-600 mb-2">5000%+</div>
                <p className="text-stone-500">Increase in text messaging list</p>
              </div>
            </div>

            <div className="bento-card bg-white p-8 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <img
                  src="/debbie-stiegler-testimonial.png"
                  alt="Debbie Stiegler, Executive Director of Ministry at Abundant Life - Business Builders client testimonial"
                  className="w-24 h-24 object-cover border-2 border-charcoal-800"
                />
                <div className="text-center md:text-left">
                  <h3 className="font-display font-bold text-xl uppercase text-charcoal-900 mb-2">Outstanding Support and Service!</h3>
                  <p className="text-stone-500 mb-4">
                    Your audit of our website and social media channels gave us confidence in your team's discernment and allowed you to speak to future plans together.
                  </p>
                  <div>
                    <div className="font-semibold text-charcoal-900">Debbie Stiegler</div>
                    <div className="text-yellow-600 font-medium">Executive Director of Ministry, Abundant Life</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="band-white py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="headline-lg text-charcoal-900 mb-4">
                Clear messaging. More attention. Greater growth.
              </h2>
              <p className="text-xl text-stone-500 max-w-4xl mx-auto">
                The Ministry Blueprint offers a simple, step-by-step plan to help your church communicate more effectively, engage your community and foster spiritual growth in your congregation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bento-card p-8 text-center bg-yellow-50">
                <div className="w-16 h-16 bg-yellow-400 text-charcoal-900 border-2 border-charcoal-800 flex items-center justify-center text-2xl font-display font-black mx-auto mb-6 shadow-offset">
                  01
                </div>
                <h3 className="font-display font-bold text-xl uppercase text-charcoal-900 mb-4">
                  Schedule a Consultation
                </h3>
                <p className="text-stone-500">
                  Contact us to discuss your church's unique needs and challenges.
                </p>
              </div>

              <div className="bento-card p-8 text-center bg-yellow-50">
                <div className="w-16 h-16 bg-yellow-400 text-charcoal-900 border-2 border-charcoal-800 flex items-center justify-center text-2xl font-display font-black mx-auto mb-6 shadow-offset">
                  02
                </div>
                <h3 className="font-display font-bold text-xl uppercase text-charcoal-900 mb-4">
                  Receive Your Customized Ministry Blueprint
                </h3>
                <p className="text-stone-500">
                  We'll spend a half-day consulting session with your team to develop a tailored plan that aligns with your mission and goals.
                </p>
              </div>

              <div className="bento-card p-8 text-center bg-green-50">
                <div className="w-16 h-16 bg-green-500 text-white border-2 border-charcoal-800 flex items-center justify-center text-2xl font-display font-black mx-auto mb-6 shadow-offset">
                  03
                </div>
                <h3 className="font-display font-bold text-xl uppercase text-charcoal-900 mb-4">
                  Implement Your Plan with Confidence
                </h3>
                <p className="text-stone-500">
                  Begin enhancing your ministry efforts using our strategic guidance and content creation playbook.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="band-stone py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="headline-lg text-charcoal-900 mb-8">
                What To Expect
              </h2>
              <p className="text-xl text-stone-500 max-w-4xl mx-auto">
                Unlock your church's full potential with our Ministry Blueprint—a comprehensive plan designed to deepen community connections and grow your congregation through effective ministry planning. Your Ministry Blueprint will include:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bento-card bg-white p-8">
                <h3 className="font-display font-bold text-xl uppercase text-charcoal-900 mb-4">Brand Messaging (BrandScript)</h3>
                <p className="text-stone-500">
                  Develop a clear and compelling message that communicates your church's mission, vision and values to your community.
                </p>
              </div>

              <div className="bento-card bg-white p-8">
                <h3 className="font-display font-bold text-xl uppercase text-charcoal-900 mb-4">One-Liner</h3>
                <p className="text-stone-500">
                  Craft a concise statement that encapsulates what your church offers and how it serves the spiritual needs of the community.
                </p>
              </div>

              <div className="bento-card bg-white p-8">
                <h3 className="font-display font-bold text-xl uppercase text-charcoal-900 mb-4">Explanatory Paragraph</h3>
                <p className="text-stone-500">
                  Clear messaging to use across bulletins, social media and introductions that communicates your church's purpose, beliefs and community support.
                </p>
              </div>

              <div className="bento-card bg-white p-8">
                <h3 className="font-display font-bold text-xl uppercase text-charcoal-900 mb-4">Website Planning</h3>
                <p className="text-stone-500">
                  Plan the structure of your church's website to ensure it effectively guides visitors and members to important information and resources.
                </p>
              </div>

              <div className="bento-card bg-white p-8">
                <h3 className="font-display font-bold text-xl uppercase text-charcoal-900 mb-4">Homepage Copy & Wireframe</h3>
                <p className="text-stone-500">
                  A plan for your website's main page layout and content to welcome visitors, informs members and encourages engagement.
                </p>
              </div>

              <div className="bento-card bg-white p-8">
                <h3 className="font-display font-bold text-xl uppercase text-charcoal-900 mb-4">Ministry Assessment</h3>
                <p className="text-stone-500">
                  Review your church's current outreach efforts, communication materials and engagement strategies to identify strengths and areas for improvement.
                </p>
              </div>
            </div>

            <div className="bento-card bg-white p-8">
              <h3 className="headline-md text-charcoal-900 mb-6">12-Month Ministry Plan</h3>
              <p className="text-stone-500 mb-8">
                Develop a strategic plan outlining your ministry goals and activities for the next year, focusing on outreach, engagement and spiritual growth.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-orange-50 p-6 border-2 border-orange-400">
                  <h4 className="font-display font-bold text-orange-600 mb-3 uppercase text-sm">Months 1-3: Establish Foundations</h4>
                  <ul className="text-sm text-stone-500 space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      Define clear messaging and update communication materials
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      Plan website structure and create homepage wireframe
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 border-2 border-blue-400">
                  <h4 className="font-display font-bold text-blue-600 mb-3 uppercase text-sm">Months 4-6: Enhance Outreach</h4>
                  <ul className="text-sm text-stone-500 space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      Implement new community outreach initiatives
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      Develop content for sermons, events and programs
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 border-2 border-green-400">
                  <h4 className="font-display font-bold text-green-600 mb-3 uppercase text-sm">Months 7-9: Deepen Engagement</h4>
                  <ul className="text-sm text-stone-500 space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Create content to engage congregation members
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Plan and promote community events
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 border-2 border-purple-400">
                  <h4 className="font-display font-bold text-purple-600 mb-3 uppercase text-sm">Months 10-12: Reflect and Plan Ahead</h4>
                  <ul className="text-sm text-stone-500 space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                      Review past year's activities and assess progress
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                      Adjust plans and set new objectives
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="band-white py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="headline-lg text-charcoal-900 mb-8">
                Common Questions
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bento-card p-8">
                <h3 className="font-display font-bold text-xl uppercase text-charcoal-900 mb-4">
                  How can the Ministry Blueprint help our church?
                </h3>
                <p className="text-stone-500">
                  The Ministry Blueprint provides a customized plan to clarify your messaging, improve community outreach and engage your congregation more effectively, helping you fulfill your church's mission.
                </p>
              </div>

              <div className="bento-card p-8">
                <h3 className="font-display font-bold text-xl uppercase text-charcoal-900 mb-4">
                  Is the Ministry Blueprint suitable for churches of all sizes?
                </h3>
                <p className="text-stone-500">
                  Yes, we tailor our services to meet the unique needs of your church, whether you're a small community church or a larger congregation.
                </p>
              </div>
            </div>

            <div className="text-center mt-16">
              <p className="text-lg text-stone-500 mb-8 text-editorial">
                Our collaborative approach ensures that your Ministry Blueprint is tailored to your church's specific needs and reflects your congregation's heart and vision.
              </p>
              <Link href="/schedule-call">
                <Button 
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-charcoal-900 border-2 border-charcoal-800 px-8 py-3 text-lg font-display font-bold uppercase shadow-offset hover-press"
                  data-testid="button-schedule-call-faq"
                >
                  Schedule a Call
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="band-dark py-20">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h2 className="headline-lg text-white mb-6">
                Ready to Transform Your Ministry?
              </h2>
              <p className="text-xl text-stone-400 mb-8 max-w-3xl mx-auto">
                Join the churches and ministries that have enhanced their outreach and deepened their community connections with our proven Ministry Blueprint.
              </p>
              <Link href="/schedule-call">
                <Button 
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-charcoal-900 border-2 border-charcoal-800 px-8 py-3 text-lg font-display font-bold uppercase shadow-offset-yellow hover-press"
                  data-testid="button-schedule-consultation-cta"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Your Consultation
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      <MegaFooter />
    </div>
  );
}
