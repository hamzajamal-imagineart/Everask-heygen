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
import { Proof } from "./Proof";
import { Studio } from "./Studio";
import { manusConfig } from "./config";

/* Manus inside EverAsk, in EverAsk's register: the features index first (as manus.im/features is their
   one marketing overview), four feature deep dives, connectors, Manus 2.0, FAQ. */
export default function ManusView() {
  return (
    <>
      <SiteHeader />
      <main className="mag-page flex-1">
        <Breadcrumbs />
        <Hero />
        <Proof />
        <Features />
        <Deep />
        <Connectors />
        <Studio />
        <div className="flex justify-center py-20">
          <a href={manusConfig.links.start} className="btn-primary !h-11 !px-6 text-[15px]">Start with Manus</a>
        </div>
        <Faq />
        <FinalCta />
        <AppTouchpoints />
      </main>
      <SiteFooter />
    </>
  );
}
