import { AppTouchpoints } from "./AppTouchpoints";
import { Breadcrumbs } from "./Breadcrumbs";
import { Faq } from "./Faq";
import { Features } from "./Features";
import { FinalCta } from "./FinalCta";
import { Hero } from "./Hero";
import { Modes } from "./Modes";
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
        <Breadcrumbs />
        <Hero />
        <UseCases />
        <Modes />
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
