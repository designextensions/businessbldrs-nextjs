"use client";
import SEOHead from "@/components/ui/seo-head";

import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-stone-50">
      <SEOHead 
        title="Terms and Conditions | Business Builders"
        description="Business Builders client terms and conditions governing our marketing services, deliverables, and business relationship."
        keywords="terms and conditions, client agreement, Business Builders"
        canonicalUrl="https://businessbldrs.com/terms-and-conditions"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="band-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-yellow-400 mb-6">
              <span className="label-industrial text-charcoal-900">BUSINESS BUILDERS</span>
            </div>
            <h1 className="headline-xl text-charcoal-900 mb-6">
              CLIENT <span className="text-yellow-500">TERMS AND CONDITIONS</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Terms and Conditions Content */}
      <section className="py-16 band-stone">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bento-card p-8 lg:p-12">
            
            {/* Introduction */}
            <div className="mb-10">
              <h2 className="headline-md text-yellow-400 mb-6">Terms & Conditions Introduction</h2>
              <p className="text-stone-600 text-lg leading-relaxed">
                These Terms & Conditions (the "Terms") along with any Work Order(s), Proposal(s), and/or Statement(s) of Work between you or the company or organization which you represent ("you" or "Company") and Design Extensions, LLC, DBA Business Builders ("we", "us" or "Consultant") form an agreement between you and us, and are collectively referred to herein as the "Agreement."
              </p>
            </div>

            {/* Terms Sections */}
            <div className="space-y-10">
              
              {/* Invoicing */}
              <div>
                <h3 className="text-2xl font-display font-bold uppercase text-charcoal-900 mb-4">Invoicing</h3>
                <p className="text-stone-600 leading-relaxed">
                  Unless otherwise specified in the applicable Work Order: (a) invoices are due within 15 days of receipt; (b) all payments received from the client are non-refundable for any reason; (c) late payments will incur interest at the rate of 18% per annum (or the highest rate permitted by applicable law if such rate is lower) calculated and applied daily based on a 365-day year; and (d) all deposits and advance payments are nonrefundable.
                </p>
              </div>

              {/* Scope of Services */}
              <div>
                <h3 className="text-2xl font-display font-bold uppercase text-charcoal-900 mb-4">Scope of Services</h3>
                <p className="text-stone-600 leading-relaxed">
                  Consultant agrees to provide the services as described in the applicable Work Order, Proposal, and/or Statement of Work.
                </p>
              </div>

              {/* Single Point of Contact */}
              <div>
                <h3 className="text-2xl font-display font-bold uppercase text-charcoal-900 mb-4">Single Point of Contact</h3>
                <p className="text-stone-600 leading-relaxed">
                  For efficient project management and communication, the Company agrees to maintain one consistent point of contact throughout the project. Any change in this contact person, especially after the initial Blueprint phase, may necessitate a reassessment of the project and potentially additional charges for re-quoting or an additional Blueprint phase.
                </p>
              </div>

              {/* Assignment & License */}
              <div>
                <h3 className="text-2xl font-display font-bold uppercase text-charcoal-900 mb-4">Assignment; License</h3>
                <p className="text-stone-600 leading-relaxed">
                  Subject to Consultant's receipt of the fees due under the applicable Work Order: (a) Consultant assigns to Company all right, title, and interest in and to the final versions of the deliverables created by Consultant for Company pursuant to the Proposal (the "Deliverables"); provided that Consultant retains all right, title and interest in and to all preliminary works and versions, and to Consultant's preexisting practices, designs, software, scripts, algorithms, methods, and other intellectual property.
                </p>
              </div>

              {/* Video Footage */}
              <div>
                <h3 className="text-2xl font-display font-bold uppercase text-charcoal-900 mb-4">Ownership and License of Video Footage</h3>
                <p className="text-stone-600 leading-relaxed mb-4">
                  Consultant acknowledges that all rights to any video footage produced under this Agreement shall remain with Company, and that Consultant has no right, title, or interest in such footage. Consultant shall promptly deliver to Company all raw and edited video footage and any other materials created under this Agreement upon completion of the Services.
                </p>
                <p className="text-stone-600 leading-relaxed">
                  Company hereby grants Consultant a nonexclusive, worldwide, royalty-free, perpetual, sublicensable license to use such video footage for promotional and marketing purposes related to Consultant's business.
                </p>
              </div>

              {/* Warranties */}
              <div>
                <h3 className="text-2xl font-display font-bold uppercase text-charcoal-900 mb-4">Warranties</h3>
                <p className="text-stone-600 leading-relaxed">
                  Consultant represents and warrants that: (a) it is not party to any agreement or restricted by any order that would prohibit or disable Consultant from performing its obligations under this Agreement; and (b) it will perform its services in a workmanlike and professional manner, substantially in accordance with agreed-upon specifications, and industry standards.
                </p>
              </div>

              {/* Confidentiality */}
              <div>
                <h3 className="text-2xl font-display font-bold uppercase text-charcoal-900 mb-4">Confidentiality</h3>
                <p className="text-stone-600 leading-relaxed">
                  The parties agree to keep confidential and not disclose to any third party any confidential or proprietary information of the other party that is marked as confidential or would reasonably be considered confidential, except to the extent necessary to perform their obligations under this Agreement or as required by law.
                </p>
              </div>

              {/* Deadlines and Deliverables */}
              <div>
                <h3 className="text-2xl font-display font-bold uppercase text-charcoal-900 mb-4">Deadlines and Deliverables</h3>
                <p className="text-stone-600 leading-relaxed">
                  Consultant shall use commercially reasonable efforts to meet any deadlines or delivery dates specified in the applicable Work Order, Proposal, and/or Statement of Work, subject to any delays or other unforeseen circumstances beyond Consultant's control. If Consultant fails to deliver any Services or Deliverables by the applicable deadline or delivery date, Company may, at its sole discretion, elect to terminate the applicable Work Order without penalty.
                </p>
              </div>

              {/* Changes to Scope */}
              <div>
                <h3 className="text-2xl font-display font-bold uppercase text-charcoal-900 mb-4">Changes to the Scope of Work</h3>
                <p className="text-stone-600 leading-relaxed">
                  In the event that Company requests changes to the scope of work or deliverables after work has commenced, Consultant shall promptly provide an estimate of any additional fees or expenses required to complete the revised scope of work, and shall not proceed with any such changes until receiving written approval and payment of such fees or expenses from Company.
                </p>
              </div>

              {/* Client Approval */}
              <div>
                <h3 className="text-2xl font-display font-bold uppercase text-charcoal-900 mb-4">Client Approval and Revisions</h3>
                <p className="text-stone-600 leading-relaxed">
                  Company shall have the right to review and approve all Deliverables provided under this Agreement, and to request reasonable revisions and modifications to such Deliverables. Consultant shall make such revisions and modifications promptly, subject to the timelines and deadlines set forth in the applicable Work Order, Proposal, and/or Statement of Work.
                </p>
              </div>

              {/* Indemnification */}
              <div>
                <h3 className="text-2xl font-display font-bold uppercase text-charcoal-900 mb-4">Indemnification</h3>
                <p className="text-stone-600 leading-relaxed">
                  Consultant shall indemnify, defend, and hold harmless Company, its officers, directors, employees, agents, and affiliates from and against any and all claims, damages, liabilities, costs, and expenses, including reasonable attorney's fees, arising out of or related to any breach by Consultant of its obligations under this Agreement, or any negligence, willful misconduct, or violation of law by Consultant in connection with the performance of its obligations under this Agreement.
                </p>
              </div>

              {/* Delays */}
              <div>
                <h3 className="text-2xl font-display font-bold uppercase text-charcoal-900 mb-4">Delays</h3>
                <p className="text-stone-600 leading-relaxed">
                  In the case of any unreasonable or persistent delays, Consultant reserves the right to pause the project for up to 90 days and invoice for services rendered through the pause date based on Consultant's hourly rate of $150.00 (not to exceed the total amount of the Fee). Consultant will reschedule the project when Company is ready to recommence, for a mutually convenient time; however, there may be additional fees or expenses required. A change order or new Work Order will be prepared.
                </p>
              </div>

              {/* Termination */}
              <div>
                <h3 className="text-2xl font-display font-bold uppercase text-charcoal-900 mb-4">Termination</h3>
                <p className="text-stone-600 leading-relaxed">
                  Either party may terminate the applicable Work Order if the other party fails to perform any material obligations; provided that, if such failure is curable, the non-breaching party must give the breaching party written notice and at least ten days to cure, and may only terminate if the breach is not cured within the cure period.
                </p>
              </div>

              {/* Liability Limits */}
              <div>
                <h3 className="text-2xl font-display font-bold uppercase text-charcoal-900 mb-4">Exclusions; Limits on Liability</h3>
                <p className="text-stone-600 leading-relaxed">
                  To the extent permitted by applicable law: (a) Neither party shall be liable for any incidental, special, indirect, or consequential damages, whether in an action sounding in breach of contract, tort or otherwise, even if advised in advance of the possibility of such damages; and (b) each party's maximum liability for any and all claims and causes of action arising out of or relating in any way to a work order (including the services and deliverables provided thereunder) shall be limited to the total amount of fees paid or payable under such work order.
                </p>
              </div>

              {/* Promotion */}
              <div>
                <h3 className="text-2xl font-display font-bold uppercase text-charcoal-900 mb-4">Promotion</h3>
                <p className="text-stone-600 leading-relaxed">
                  Company understands and agrees that Consultant may, and Company grants all licenses necessary to enable to Consultant to: (a) describe its services and utilize the Deliverables in connection with promotion and marketing of its business; and (b) utilize Company's name(s), logo(s) and trademark(s) in connection with such promotional and marketing activities, which may include, without limitation, paid (or unpaid) educational seminars, talks, speeches, and the like.
                </p>
              </div>

              {/* Governing Law */}
              <div>
                <h3 className="text-2xl font-display font-bold uppercase text-charcoal-900 mb-4">Governing Law</h3>
                <p className="text-stone-600 leading-relaxed">
                  This Agreement shall be governed by and construed in accordance with the laws of the State of Florida, without giving effect to any choice of law or conflict of law provisions. Any legal action or proceeding arising out of or relating to this Agreement shall be brought in the state or federal courts located in St. Augustine, and the parties hereby consent to the exclusive jurisdiction and venue of such courts.
                </p>
              </div>

              {/* Miscellaneous */}
              <div>
                <h3 className="text-2xl font-display font-bold uppercase text-charcoal-900 mb-4">Miscellaneous</h3>
                <p className="text-stone-600 leading-relaxed mb-4">
                  This Agreement represents the entire agreement of the parties concerning the subject matter hereof, and supersedes all prior and contemporaneous agreements, representations and understandings. (For avoidance of doubt, these Terms do not apply to hosting services provided by the Company, which are subject to the Hosting Terms and Conditions available at <a href="https://businessbldrs.com/hosting-terms-conditions/" className="text-yellow-600 hover:text-yellow-500 font-semibold underline" target="_blank" rel="noopener noreferrer">https://businessbldrs.com/hosting-terms-conditions/</a>).
                </p>
                <p className="text-stone-600 leading-relaxed">
                  This Agreement may only be modified by a written instrument signed by both parties. If any provision of this Agreement is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall be enforced.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-12 pt-8 border-t-2 border-charcoal-800">
              <h3 className="text-2xl font-display font-bold uppercase text-charcoal-900 mb-6">Contact Information</h3>
              <div className="bg-stone-100 p-6 border-2 border-charcoal-800 shadow-offset">
                <p className="text-stone-600 mb-2"><strong className="text-charcoal-900">Design Extensions, LLC, DBA Business Builders</strong></p>
                <p className="text-stone-600 mb-1">701 Market Street, Unit 101</p>
                <p className="text-stone-600 mb-4">St. Augustine, FL 32095</p>
                <p className="text-stone-600 mb-2"><strong className="text-charcoal-900">Phone:</strong> <a href="tel:877-378-6101" className="text-yellow-600 hover:text-yellow-500 font-semibold">(877) 378-6101</a></p>
                <p className="text-stone-600"><strong className="text-charcoal-900">Email:</strong> <a href="mailto:marketing@businessbldrs.com" className="text-yellow-600 hover:text-yellow-500 font-semibold">marketing@businessbldrs.com</a></p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <MegaFooter />
    </div>
  );
}
