import { EyeOff, Pin, Cursor, ArrowsUpDown, CheckIcon } from "./icons";

const features = [
  {
    icon: EyeOff,
    title: "Excluded from capture",
    body: "Hidden from Loom, Zoom, Meet, and screen recordings.",
  },
  {
    icon: Pin,
    title: "Always on top, never in the way",
    body:
      "Visible over your camera, slides, and browser — without disrupting anything.",
  },
  {
    icon: Cursor,
    title: "Click-through by design",
    body:
      "Your notes float above. Your clicks go through like magic to whatever app is beneath.",
  },
  {
    icon: ArrowsUpDown,
    title: "Smooth delivery",
    body:
      "Auto-scroll that feels natural. Manual control when you need it. Dial in your perfect pace.",
  },
];

const includedFree = [
  "Write and read notes",
  "Invisible in recordings",
  "Text size and opacity controls",
];

const includedPro = [
  "Everything in Free",
  "Click-through Mode",
  "Notch Mode",
  "Unlimited windows",
  "Auto-scroll & manual control",
  "Priority support",
];

export function Features() {
  return (
    <section id="features" className="relative py-28">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(87,69,184,0.15), transparent 60%)",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#9F8CFF] mb-4">
            Core features
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">
            Built for natural delivery
          </h2>
          <p className="mt-5 text-white/55 text-lg max-w-xl mx-auto">
            Everything you need to stay on message and sound like yourself.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-purple-500/30 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#6954C2]/30 to-[#6954C2]/10 border border-[#6954C2]/30 text-[#c4b8f4] mb-5">
                <Icon />
              </div>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm leading-relaxed text-white/55">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7">
            <div className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              Free includes
            </div>
            <ul className="space-y-2.5">
              {includedFree.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 text-sm text-white/75"
                >
                  <span className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#22c55e]/15 text-[#4ade80]">
                    <CheckIcon className="w-3 h-3" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="rounded-2xl border border-[#6954C2]/30 p-7"
            style={{
              background:
                "linear-gradient(180deg, rgba(105,84,194,0.16), rgba(105,84,194,0.04))",
            }}
          >
            <div className="text-xs font-semibold uppercase tracking-widest text-[#c4b8f4] mb-4">
              Pro adds
            </div>
            <ul className="space-y-2.5">
              {includedPro.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 text-sm text-white/85"
                >
                  <span className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#9F8CFF]/20 text-[#c4b8f4]">
                    <CheckIcon className="w-3 h-3" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
