import { Faq } from "./Faq";
import { FinalCta } from "./FinalCta";
import { Hero } from "./Hero";
import { Models } from "./Models";
import { Originals } from "./Originals";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { StartSimple } from "./StartSimple";
import { Teams } from "./Teams";
import { Tools } from "./Tools";
import { UseCases } from "./UseCases";

export default function MagView() {
  return (
    <>
      <SiteHeader />
      <main className="mag-page flex-1">
        <Hero />
        <Models />
        <StartSimple />
        <Tools />
        <UseCases />
        <Originals />
        <Teams />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
