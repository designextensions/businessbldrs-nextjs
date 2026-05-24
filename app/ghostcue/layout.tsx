import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GhostCue — Invisible Notes App for Mac",
  description:
    "Read your notes. Sound like yourself. The private notes app your audience will never see.",
  robots: { index: false, follow: false },
};

export default function GhostCueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="ghostcue-root min-h-screen bg-[#0f0f12] text-white antialiased font-sans selection:bg-[#6954C2]/40">
      {children}
    </div>
  );
}
