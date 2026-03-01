import { Award, Shield, CheckCircle, Star, BadgeCheck } from 'lucide-react';

export default function CredentialsSection() {
  const credentials = [
    {
      icon: Award,
      title: "StoryBrand Certified Agency",
      highlight: "AWARD WINNING",
      description: "Certified in the proven StoryBrand framework for clear messaging"
    },
    {
      icon: CheckCircle,
      title: "StoryBrand Certified Facilitator",
      highlight: "TRUSTED",
      description: "Expert guidance in brand messaging and communication"
    },
    {
      icon: Shield,
      title: "HubSpot Platinum Partner",
      highlight: "ELITE STATUS",
      description: "Top-tier partnership with the leading CRM platform"
    },
    {
      icon: Star,
      title: "Inc. 5000 Award Winners",
      highlight: "2X RECOGNIZED",
      description: "Honored for exceptional business growth and innovation"
    }
  ];

  return (
    <section className="band-white py-14 lg:py-20 relative overflow-hidden" data-testid="credentials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="label-industrial inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-charcoal-900 border-2 border-charcoal-900 shadow-offset-sm mb-6">
            <BadgeCheck className="w-4 h-4" />
            PROVEN EXPERTISE
          </span>
          <h2 className="headline-lg text-charcoal-900 mb-4">
            EXPERIENCE YOU<br />
            CAN <span className="text-yellow-500">TRUST</span>
          </h2>
          <p className="text-editorial text-stone-600 max-w-xl mx-auto">
            Backed by industry-leading certifications and recognition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((credential, index) => {
            const IconComponent = credential.icon;
            return (
              <div
                key={index}
                className={`p-6 bg-white border-2 border-charcoal-800 hover:border-yellow-400 animate-slide-up stagger-${index + 1}`}
                data-testid={`credential-${index}`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-yellow-400 border-2 border-charcoal-900 flex items-center justify-center mb-5 shadow-offset-sm">
                    <IconComponent className="w-8 h-8 text-charcoal-900" />
                  </div>
                  
                  <span className="label-industrial text-yellow-600 mb-2">
                    {credential.highlight}
                  </span>
                  
                  <h3 className="font-display font-bold text-charcoal-900 mb-3 leading-tight uppercase text-sm">
                    {credential.title}
                  </h3>
                  
                  <p className="text-stone-600 text-sm font-serif">
                    {credential.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
