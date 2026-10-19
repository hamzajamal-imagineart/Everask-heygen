import { AppTouchpoints } from "@/views/mag/AppTouchpoints";
import { SiteFooter } from "@/views/mag/SiteFooter";
import { SiteHeader } from "@/views/mag/SiteHeader";
import { Breadcrumbs } from "./Breadcrumbs";
import { Connectors } from "./Connectors";
import { Deep } from "./Deep";
import { Faq } from "./Faq";
import { Features } from "./Features";
import { FinalCta } from "./FinalCta";
import { Hero } from "./Hero";
import { Studio } from "./Studio";

/* Manus inside EverAsk, in EverAsk's register: hero, four photographic rows for what Manus does, the
   features index as hairlines, Manus 2.0 as tiles, a quiet connectors row, FAQ. */
export default function ManusView() {
  return (
    <>
      <SiteHeader />
      <main className="mag-page flex-1">
        <Breadcrumbs />
        <Hero />
        <Deep />
        <Features />
        <Studio />
        <Connectors />
        <Faq />
        <FinalCta />
        <AppTouchpoints />
      </main>
      <SiteFooter />
    </>
  );
}
