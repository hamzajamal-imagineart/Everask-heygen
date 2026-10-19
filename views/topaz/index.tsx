import { AppTouchpoints } from "@/views/mag/AppTouchpoints";
import { SiteFooter } from "@/views/mag/SiteFooter";
import { SiteHeader } from "@/views/mag/SiteHeader";
import { Breadcrumbs } from "./Breadcrumbs";
import { CtaBand } from "./CtaBand";
import { Faq } from "./Faq";
import { Features } from "./Features";
import { FinalCta } from "./FinalCta";
import { Hero } from "./Hero";
import { Meet } from "./Meet";
import { Reviews } from "./Reviews";
import { Showcase } from "./Showcase";
import { Toolbox } from "./Toolbox";
import { Trusted } from "./Trusted";
import { Years } from "./Years";

/* The section order of topazlabs.com/topaz-photo (Hamza: "I want the layout
   to be like Topaz page"), minus pricing, in EverAsk's register. */
export default function TopazView() {
  return (
    <>
      <SiteHeader />
      <main className="mag-page flex-1">
        <Breadcrumbs />
        <Hero />
        <Trusted />
        <Toolbox />
        <Reviews />
        <Showcase />
        <Meet />
        <Years />
        <CtaBand />
        <Features />
        <Faq />
        <FinalCta />
        <AppTouchpoints />
      </main>
      <SiteFooter />
    </>
  );
}
