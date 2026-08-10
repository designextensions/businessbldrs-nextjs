import { CheckIcon, DownloadIcon } from "./icons";

const freeFeatures = [
  "Write and read notes",
  "Invisible in recordings",
  "Text size and opacity controls",
];

const proFeatures = [
  "Everything in Free",
  "Click-through Mode",
  "Notch Mode",
  "Unlimited windows",
  "Auto-scroll & manual control",
  "Floating quick-action button",
  "Priority support",
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative py-28"
      style={{
        background:
          "radial-gradient(ellipse 70% 50% at 50% 10%, rgba(87,69,184,0.22), transparent 60%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#9F8CFF] mb-4">
            Pricing
          </div>
          <h2 className="text-5xl font-semibold tracking-tight mb-5">
            Simple, honest pricing.
          </h2>
          <p className="text-white/55 text-lg max-w-xl mx-auto">
            Start free. Upgrade once. Keep it forever.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Free */}
          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 flex flex-col">
            <div className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-3">
              Free
            </div>
            <div className="flex items-end gap-2 mb-1">
              <div className="text-[44px] font-bold tracking-tight leading-none">
                $0
              </div>
              <div className="text-sm text-white/40 mb-1.5">forever</div>
            </div>
            <p className="text-sm text-white/55 mb-7">
              Everything you need to record with your notes in view.
            </p>

            <ul className="space-y-3 mb-8 flex-1">
              {freeFeatures.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 text-sm text-white/80"
                >
                  <span className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#22c55e]/15 text-[#4ade80]">
                    <CheckIcon className="w-3 h-3" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#download"
              className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-white bg-white/[0.06] border border-white/10 hover:bg-white/[0.1] transition-all"
            >
              <DownloadIcon />
              Download Free
            </a>
          </div>

          {/* Pro */}
          <div
            className="relative rounded-3xl border border-[#6954C2]/40 p-8 flex flex-col overflow-hidden"
            style={{
              background:
                "linear-gradient(180deg, rgba(105,84,194,0.18), rgba(105,84,194,0.04))",
            }}
          >
            <div
              aria-hidden
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(159,140,255,0.35), transparent 70%)",
              }}
            />
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <div className="text-xs font-semibold uppercase tracking-widest text-[#c4b8f4]">
                  Pro
                </div>
                <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#9F8CFF]/20 text-[#c4b8f4] border border-[#9F8CFF]/30">
                  Founding Member
                </span>
              </div>
              <div className="flex items-end gap-3 mb-1">
                <div className="text-[44px] font-bold tracking-tight leading-none">
                  $29
                </div>
                <div className="self-center text-2xl font-bold tracking-tight line-through text-white/30">
                  $79
                </div>
              </div>
              <p className="text-sm text-white/65 mb-7">
                One-time payment. Lifetime updates. No subscription.
              </p>

              <ul className="space-y-3 mb-8">
                {proFeatures.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm text-white/85"
                  >
                    <span className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#9F8CFF]/25 text-[#c4b8f4]">
                      <CheckIcon className="w-3 h-3" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#download"
                className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-white bg-gradient-to-b from-[#7c66d4] to-[#5b46b0] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_10px_30px_rgba(105,84,194,0.4)] hover:from-[#8a74e4] hover:to-[#6a55c0] transition-all w-full"
              >
                Upgrade to Pro
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
