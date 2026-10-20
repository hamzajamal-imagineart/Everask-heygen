import { AppTouchpoints } from "@/views/mag/AppTouchpoints";
import { SiteFooter } from "@/views/mag/SiteFooter";
import { SiteHeader } from "@/views/mag/SiteHeader";
import { Breadcrumbs } from "./Breadcrumbs";
import { Capabilities } from "./Capabilities";
import { Connections } from "./Connections";
import { Faq } from "./Faq";
import { FinalCta } from "./FinalCta";
import { Hero } from "./Hero";
import { Surfaces } from "./Surfaces";
import { Trust } from "./Trust";

/* Genspark inside EverAsk, in EverAsk's register: hero, one proof line, four photographic rows for the
   surfaces, six capability tiles, a quiet connections row, the guarantees as hairlines, FAQ. */
export default function GensparkView() {
  return (
    <>
      <SiteHeader />
      <main className="mag-page flex-1">
        <Breadcrumbs />
        <Hero />
        <Surfaces />
        <Capabilities />
        <Connections />
        <Trust />
        <Faq />
        <FinalCta />
        <AppTouchpoints />
      </main>
      <SiteFooter />
    </>
  );
}
