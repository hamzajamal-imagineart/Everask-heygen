import { AppTouchpoints } from "./AppTouchpoints";
import { Breadcrumbs } from "./Breadcrumbs";
import { Faq } from "./Faq";
import { Features } from "./Features";
import { FinalCta } from "./FinalCta";
import { Hero } from "./Hero";
import { Models } from "./Models";
import { Originals } from "./Originals";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { StartBuilding } from "./StartBuilding";
import { StartSimple } from "./StartSimple";
import { Steps } from "./Steps";
import { Suite } from "./Suite";
import { Teams } from "./Teams";
import { UseCases } from "./UseCases";

export default function MagView() {
  return (
    <>
      <SiteHeader />
      <main className="mag-page flex-1">
        <Breadcrumbs />
        <Hero />
        <Models />
        <Steps />
        <Suite />
        <Features />
        <StartSimple />
        <UseCases />
        <Originals />
        <Teams />
        <StartBuilding />
        <Faq />
        <FinalCta />
        <AppTouchpoints />
      </main>
      <SiteFooter />
    </>
  );
}
