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
        <p className="container-page pt-10 pb-4 text-center text-sm text-[#131318]/70">Genspark is trusted by 7,000+ world-class teams</p>
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
