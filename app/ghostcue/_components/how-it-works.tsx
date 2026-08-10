const steps = [
  {
    n: "01",
    title: "Write your notes",
    body:
      "Drop in your script, sticky notes, or talking points. Style for size and opacity.",
  },
  {
    n: "02",
    title: "Position the floater",
    body:
      "Place it right above your camera. Always on top, click-through to the app beneath.",
  },
  {
    n: "03",
    title: "Hit record",
    body:
      "Loom, Zoom, Meet, QuickTime — your notes stay, your audience never sees them.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-28 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#9F8CFF] mb-4">
            How it works
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">
            Three steps to a calmer recording
          </h2>
        </div>

        <div className="relative grid md:grid-cols-3 gap-5">
          {/* Connector line */}
          <div
            aria-hidden
            className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(159,140,255,0.4), transparent)",
            }}
          />
          {steps.map(({ n, title, body }) => (
            <div
              key={n}
              className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full text-sm font-semibold text-[#c4b8f4] bg-[#1a1a1f] border border-[#6954C2]/40 mb-5 relative z-10">
                {n}
              </div>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm leading-relaxed text-white/55">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
