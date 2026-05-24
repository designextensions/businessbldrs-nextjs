import { EyeOff } from "./icons";

function TrafficLights() {
  return (
    <div className="flex items-center gap-1.5">
      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
    </div>
  );
}

function CameraTile({ label }: { label: string }) {
  return (
    <div
      className="absolute inset-4 rounded-xl overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at top, rgba(159,140,255,0.16), transparent 60%), linear-gradient(180deg, #1a1a1f 0%, #0a0a0d 100%)",
      }}
    >
      <div className="absolute inset-0 flex items-end justify-center">
        <div className="w-40 h-40 rounded-full bg-gradient-to-b from-[#3a334e] to-[#1f1b2f] -mb-12" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-b from-[#5a4d7a] to-[#39314f] mt-[-30px]" />
      </div>
      <div className="absolute bottom-3 left-3 text-[10px] text-white/50 px-2 py-1 rounded bg-black/40 backdrop-blur">
        {label}
      </div>
    </div>
  );
}

function NotesOverlay() {
  return (
    <div className="absolute top-8 right-8 w-[200px] rounded-xl border border-white/[0.12] shadow-2xl overflow-hidden">
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(38,38,44,0.96), rgba(31,31,36,0.96))",
          backdropFilter: "blur(20px)",
        }}
      >
        <div className="flex items-center justify-between px-3 h-6 border-b border-white/[0.06]">
          <span className="text-[10px] font-medium text-white/70">
            GhostCue
          </span>
          <span className="text-[9px] text-[#9F8CFF]">notes</span>
        </div>
        <div className="p-3 space-y-1.5 text-[11px] leading-relaxed text-white/80">
          <p className="text-[#c4b8f4]">Open with the hook.</p>
          <p className="text-white/65">Show the before/after.</p>
          <p className="text-white/65">Land the close — clear and warm.</p>
        </div>
      </div>
    </div>
  );
}

export function Difference() {
  return (
    <section className="relative py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#9F8CFF] mb-4">
            See the difference
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">
            You see your notes.{" "}
            <span className="text-white/40">They don&apos;t.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Your screen */}
          <div
            className="relative rounded-3xl border border-white/[0.08] p-5 overflow-hidden"
            style={{
              background:
                "linear-gradient(160deg, rgba(105,84,194,0.22), rgba(255,255,255,0.02))",
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-[10px] font-semibold uppercase tracking-widest text-white/60">
                Your screen
              </div>
              <span className="text-[10px] text-[#9F8CFF] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9F8CFF] animate-pulse" />
                Notes visible — only to you
              </span>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-[#0f0f12] aspect-[16/10]">
              <div className="flex items-center gap-3 px-3 h-8 bg-[#1f1f24]/80 border-b border-white/[0.05]">
                <TrafficLights />
              </div>
              <div className="relative h-[calc(100%-2rem)]">
                <CameraTile label="Your face on camera" />
                <NotesOverlay />
              </div>
            </div>
            <div className="mt-4 text-sm text-white/65">
              Your notes float above. Read at a glance, deliver naturally.
            </div>
          </div>

          {/* Their recording */}
          <div className="relative rounded-3xl border border-white/[0.08] p-5 overflow-hidden bg-white/[0.02]">
            <div className="flex items-center justify-between mb-4">
              <div className="text-[10px] font-semibold uppercase tracking-widest text-white/60">
                Their recording
              </div>
              <span className="text-[10px] text-[#22c55e] flex items-center gap-1">
                <EyeOff className="w-3 h-3" />
                Clean recording — no trace of GhostCue
              </span>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-[#0f0f12] aspect-[16/10]">
              <div className="flex items-center gap-3 px-3 h-8 bg-[#1f1f24]/80 border-b border-white/[0.05]">
                <TrafficLights />
                <div className="ml-auto flex items-center gap-1.5 text-[10px] font-semibold text-[#ff5050]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff5050] animate-pulse" />
                  REC
                </div>
              </div>
              <div className="relative h-[calc(100%-2rem)]">
                <CameraTile label="Viewer sees: just you" />
              </div>
            </div>
            <div className="mt-4 text-sm text-white/65">
              Invisible in Loom, Zoom, Meet, and every screen recorder.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
