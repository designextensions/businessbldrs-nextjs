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
    <section className="bg-stone-100 py-12 lg:py-16" data-testid="value-stack-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group flex flex-col items-center text-center cursor-default transition-transform duration-300 hover:-translate-y-1"
                data-testid={`value-item-${index + 1}`}
              >
                <div className="w-14 h-14 bg-yellow-400 border-2 border-charcoal-900 flex items-center justify-center mb-3 transition-all duration-300 group-hover:bg-charcoal-900 group-hover:shadow-offset-sm">
                  <Icon className="w-7 h-7 text-charcoal-900 transition-colors duration-300 group-hover:text-yellow-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-charcoal-900 text-sm font-display font-bold tracking-wide mb-1">
                  {value.title}
                </h3>
                <p className="text-stone-500 text-xs leading-relaxed">
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
