import Link from "next/link";
import { GhostLogo, DownloadIcon } from "./icons";

export function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[#0f0f12]/70 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/ghostcue"
          aria-label="GhostCue home"
          className="flex items-center gap-2 group"
        >
          <GhostLogo className="w-8 h-8 transition-transform group-hover:-translate-y-0.5" />
          <span className="text-[15px] font-semibold tracking-tight text-white">
            GhostCue
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <Link
            href="#use-cases"
            className="hover:text-white transition-colors duration-200"
          >
            Use cases
          </Link>
          <Link
            href="#features"
            className="hover:text-white transition-colors duration-200"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="hover:text-white transition-colors duration-200"
          >
            Pricing
          </Link>
        </nav>

        <a
          href="#download"
          className="group inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium text-white bg-gradient-to-b from-[#7c66d4] to-[#5b46b0] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_6px_18px_rgba(105,84,194,0.35)] hover:from-[#8a74e4] hover:to-[#6a55c0] transition-all"
        >
          <DownloadIcon className="opacity-90" />
          <span>Download for Mac</span>
        </a>
      </div>
    </header>
  );
}
