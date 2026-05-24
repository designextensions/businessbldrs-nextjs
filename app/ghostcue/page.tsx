import "./_components/ghostcue.css";
import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { UseCases } from "./_components/use-cases";
import { Difference } from "./_components/difference";
import { Features } from "./_components/features";
import { HowItWorks } from "./_components/how-it-works";
import { Pricing } from "./_components/pricing";
import { FinalCta, Footer } from "./_components/cta-footer";

export default function GhostCuePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <UseCases />
        <Difference />
        <Features />
        <HowItWorks />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
