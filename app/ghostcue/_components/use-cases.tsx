import {
  VideoIcon,
  HandshakeIcon,
  PresentIcon,
  RocketIcon,
  ChatIcon,
  GradCapIcon,
} from "./icons";

const cases = [
  {
    icon: VideoIcon,
    label: "Loom Videos",
    title: "Loom Videos",
    body:
      "Record polished Looms without redoing them over and over. Keep your talking points in front of you and move fast.",
  },
  {
    icon: HandshakeIcon,
    label: "Freelancers & Sales",
    title: "Freelancers & Sales",
    body:
      "Hit the proof points every time. Walk into discovery calls calm, with your structure in view.",
  },
  {
    icon: PresentIcon,
    label: "Pitches & Demos",
    title: "Pitches & Demos",
    body:
      "Keep key points, transitions, and important information visible while you present.",
  },
  {
    icon: RocketIcon,
    label: "Founders",
    title: "Founders",
    body:
      "Investor updates, customer demos, all-hands. Stay clear and consistent without sounding scripted.",
  },
  {
    icon: ChatIcon,
    label: "Interview Prep",
    title: "Interview Prep",
    body:
      "Keep your structure, stories, and best points in view so you don't blank mid-answer.",
  },
  {
    icon: GradCapIcon,
    label: "Creators & Educators",
    title: "Creators & Educators",
    body:
      "Record tutorials, walkthroughs, and lessons with clear notes right on screen. Your notes stay hidden. Your presence stays real.",
  },
];

export function UseCases() {
  return (
    <section
      id="use-cases"
      className="relative py-28"
      style={{
        background:
          "radial-gradient(ellipse at top left, rgba(105,84,194,0.1), transparent 50%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#9F8CFF] mb-4">
            Who it&apos;s for
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
            Built for people who record themselves
          </h2>
          <p className="mt-5 text-white/55 text-lg max-w-xl mx-auto">
            From quick Looms to high-stakes pitches — keep your delivery sharp,
            your notes private.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map(({ icon: Icon, label, title, body }) => (
            <div
              key={label}
              className="group p-7 rounded-2xl relative overflow-hidden border border-white/[0.06] bg-white/[0.02] hover:border-purple-500/40 transition-all duration-300"
            >
              <div
                aria-hidden
                className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(circle, rgba(159,140,255,0.4), transparent 70%)",
                }}
              />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#6954C2]/30 to-[#6954C2]/10 border border-[#6954C2]/30 text-[#c4b8f4] mb-5">
                  <Icon />
                </div>
                <div className="text-[10px] font-medium tracking-widest uppercase text-white/40 mb-2">
                  {label}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-white/55">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
