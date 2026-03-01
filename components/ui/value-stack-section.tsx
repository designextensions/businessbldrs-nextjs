import { Shield, TrendingUp, Handshake, MessageSquare } from "lucide-react";

export default function ValueStackSection() {
  const values = [
    {
      icon: Shield,
      title: "PROTECT YOUR BRAND",
      description: "Consistent identity that builds trust"
    },
    {
      icon: TrendingUp,
      title: "INCREASE LEADS",
      description: "Marketing that drives real results"
    },
    {
      icon: Handshake,
      title: "CLOSE MORE BUSINESS",
      description: "Convert prospects into customers"
    },
    {
      icon: MessageSquare,
      title: "CLARIFY YOUR MESSAGE",
      description: "StoryBrand framework for clarity"
    }
  ];

  return (
    <section className="relative overflow-hidden" data-testid="value-stack-section">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        loop
      >
        <source src="/assets/Untitled_1754143769049.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-charcoal-900/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center"
                data-testid={`value-item-${index + 1}`}
              >
                <div className="w-14 h-14 bg-white/10 border border-white/20 flex items-center justify-center mb-3">
                  <Icon className="w-7 h-7 text-yellow-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-white text-sm font-display font-bold tracking-wide mb-1">
                  {value.title}
                </h3>
                <p className="text-stone-400 text-xs leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
