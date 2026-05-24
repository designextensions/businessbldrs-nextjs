import Link from "next/link";
import { DownloadIcon, GhostLogo } from "./icons";

export function FinalCta() {
  return (
    <section id="download" className="relative py-28">
      <div className="max-w-4xl mx-auto px-6">
        <div
          className="relative rounded-3xl overflow-hidden p-12 sm:p-16 text-center border border-white/[0.08]"
          style={{
            background:
              "linear-gradient(160deg, rgba(105,84,194,0.22), rgba(31,31,36,0.6))",
          }}
        >
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(105,84,194,0.18), transparent 70%)",
            }}
          />
          <div className="relative">
            <div className="mx-auto mb-6 w-16 h-16">
              <GhostLogo className="w-16 h-16" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
              Invisible notes.{" "}
              <span className="bg-gradient-to-r from-[#c4b8f4] to-[#9F8CFF] bg-clip-text text-transparent">
                For your eyes only.
              </span>
            </h2>
            <p className="mt-5 text-white/65 text-lg max-w-xl mx-auto">
              Nail your next Loom, demo, or presentation. Notes in view, never
              on screen.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href="#download"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-white bg-gradient-to-b from-[#7c66d4] to-[#5b46b0] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_12px_36px_rgba(105,84,194,0.45)] hover:from-[#8a74e4] hover:to-[#6a55c0] transition-all"
              >
                <DownloadIcon />
                Download for Mac — Free
              </a>
            </div>
            <div className="mt-5 text-[12px] text-white/45">
              macOS 13+ · Apple Silicon &amp; Intel · No account required
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-12 mt-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <GhostLogo className="w-6 h-6" />
          <span className="text-sm font-semibold tracking-tight">GhostCue</span>
          <span className="ml-3 text-[11px] text-white/35">
            © {new Date().getFullYear()} — Made for Mac
          </span>
        </div>
        <div className="flex items-center gap-6 text-sm text-white/55">
          <Link href="#" className="hover:text-white transition-colors">
            Privacy
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Support
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
