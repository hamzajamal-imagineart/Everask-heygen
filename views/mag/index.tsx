import { AppTouchpoints } from "./AppTouchpoints";
import { Faq } from "./Faq";
import { Features } from "./Features";
import { FinalCta } from "./FinalCta";
import { Hero } from "./Hero";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { StartBuilding } from "./StartBuilding";
import { Suite } from "./Suite";
import { UseCases } from "./UseCases";

export default function MagView() {
  return (
    <>
      <SiteHeader />
      <main className="mag-page flex-1">
        <Hero />
        <UseCases />
        <Suite />
        <Features />
        <StartBuilding />
        <Faq />
        <FinalCta />
        <AppTouchpoints />
      </main>
      <SiteFooter />
    </>
  );
}
