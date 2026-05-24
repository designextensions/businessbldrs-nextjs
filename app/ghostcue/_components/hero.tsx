import { DownloadIcon, EyeOff } from "./icons";

function TrafficLights() {
  return (
    <div className="flex items-center gap-1.5">
      <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
      <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
      <span className="w-3 h-3 rounded-full bg-[#28c840]" />
    </div>
  );
}

function MacMockup() {
  return (
    <div className="relative w-full max-w-[560px] mx-auto">
      {/* Glow */}
      <div
        aria-hidden
        className="absolute -inset-10 rounded-[40px] blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(105,84,194,0.45), transparent 60%)",
        }}
      />

      {/* Window */}
      <div
        className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
        style={{
          background:
            "linear-gradient(135deg, #26262C 0%, rgba(87,69,184,0.2) 100%)",
        }}
      >
        {/* Title bar */}
        <div className="flex items-center gap-3 px-4 h-9 bg-[#1f1f24]/80 border-b border-white/[0.05]">
          <TrafficLights />
          <div className="ml-2 px-2.5 py-0.5 rounded-md bg-white/5 text-[11px] text-white/60">
            Loom Recording
          </div>
          <div className="ml-auto flex items-center gap-1.5 text-[10px] font-semibold text-[#ff5050]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5050] animate-pulse" />
            REC
          </div>
        </div>

        {/* Camera tile */}
        <div className="relative aspect-[16/10] p-5">
          <div
            className="absolute inset-5 rounded-xl overflow-hidden"
            style={{
              background:
                "radial-gradient(ellipse at top, rgba(159,140,255,0.18), transparent 60%), linear-gradient(180deg, #1a1a1f 0%, #0f0f12 100%)",
            }}
          >
            {/* Simulated person silhouette */}
            <div className="absolute inset-0 flex items-end justify-center">
              <div className="w-44 h-44 rounded-full bg-gradient-to-b from-[#3a334e] to-[#1f1b2f] -mb-12" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-b from-[#5a4d7a] to-[#39314f] mt-[-30px]" />
            </div>

            {/* "Your face on camera" label */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] text-white/50">
              <span className="px-2 py-1 rounded bg-black/40 backdrop-blur">
                Your face on camera
              </span>
              <span className="px-2 py-1 rounded bg-black/40 backdrop-blur">
                Viewer sees: just you
              </span>
            </div>
          </div>

          {/* GhostCue floating notes panel */}
          <div className="absolute top-10 right-10 w-[250px] rounded-xl overflow-hidden border border-white/[0.12] shadow-2xl ghostcue-float">
            <div
              className="relative"
              style={{
                background:
                  "linear-gradient(180deg, rgba(38,38,44,0.96), rgba(31,31,36,0.96))",
                backdropFilter: "blur(20px)",
              }}
            >
              <div className="flex items-center justify-between px-3 h-7 border-b border-white/[0.06]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#9F8CFF]" />
                  <span className="text-[10px] font-medium text-white/70">
                    GhostCue
                  </span>
                </div>
                <span className="text-[9px] text-white/40 uppercase tracking-wider">
                  only you see this
                </span>
              </div>
              <div className="p-3 space-y-2 text-[12px] leading-relaxed text-white/85">
                <p className="text-[#c4b8f4] font-medium">
                  Hey — I wanted to walk you through our approach.
                </p>
                <p className="text-white/70">
                  The goal is to start lean, validate fast, and improve based on
                  real feedback.
                </p>
                <p className="text-white/55">
                  A few things I want to make sure I cover:
                </p>
                <ul className="space-y-1 text-white/55 text-[11px] pl-3">
                  <li className="relative before:absolute before:-left-3 before:top-1.5 before:w-1 before:h-1 before:rounded-full before:bg-[#9F8CFF]">
                    Stay on message
                  </li>
                  <li className="relative before:absolute before:-left-3 before:top-1.5 before:w-1 before:h-1 before:rounded-full before:bg-[#9F8CFF]">
                    Walk through the demo
                  </li>
                  <li className="relative before:absolute before:-left-3 before:top-1.5 before:w-1 before:h-1 before:rounded-full before:bg-[#9F8CFF]">
                    Close with the offer
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-between px-3 py-2 border-t border-white/[0.06] text-[10px] text-white/50">
                <span className="px-1.5 py-0.5 rounded bg-white/5">
                  Auto-scroll
                </span>
                <span>1.0×</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* "Invisible to recordings" floating chip */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-medium bg-[#0f0f12] border border-white/[0.1] text-white/80 shadow-lg">
        <EyeOff className="w-3.5 h-3.5 text-[#9F8CFF]" />
        Invisible in screen recordings
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32">
      {/* Background ambient glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 0%, rgba(87,69,184,0.22), transparent 60%), radial-gradient(ellipse at top left, rgba(105,84,194,0.12), transparent 50%)",
        }}
      />
      {/* Grid overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[11px] font-medium tracking-widest uppercase text-white/70 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9F8CFF]" />
            For Mac · Built for creators
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-[64px] font-semibold tracking-tight leading-[1.05]">
            <span className="block text-white/95">Read your notes.</span>
            <span className="block bg-gradient-to-r from-[#c4b8f4] via-[#a394e8] to-[#9F8CFF] bg-clip-text text-transparent">
              Sound like yourself.
            </span>
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-md mx-auto lg:mx-0 leading-relaxed">
            Stay on message. Sound natural. Only you see your notes. The private
            notes app your audience will never see.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3 justify-center lg:justify-start">
            <a
              href="#download"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-white bg-gradient-to-b from-[#7c66d4] to-[#5b46b0] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_10px_30px_rgba(105,84,194,0.4)] hover:from-[#8a74e4] hover:to-[#6a55c0] transition-all"
            >
              <DownloadIcon />
              Download for Mac — Free
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-white/80 bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] transition-all"
            >
              See how it works
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-white/50 justify-center lg:justify-start">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[#22c55e]" />
              macOS 13+
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[#22c55e]" />
              Apple Silicon &amp; Intel
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[#22c55e]" />
              No account required
            </span>
          </div>
        </div>

        <div className="relative">
          <MacMockup />
        </div>
      </div>
    </section>
  );
}
