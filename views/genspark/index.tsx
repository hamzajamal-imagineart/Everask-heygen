import { AppTouchpoints } from "@/views/mag/AppTouchpoints";
import { SiteFooter } from "@/views/mag/SiteFooter";
import { SiteHeader } from "@/views/mag/SiteHeader";
import { Breadcrumbs } from "./Breadcrumbs";
import { Capabilities } from "./Capabilities";
import { Connections } from "./Connections";
import { Faq } from "./Faq";
import { FinalCta } from "./FinalCta";
import { Hero } from "./Hero";
import { Proof } from "./Proof";
import { Surfaces } from "./Surfaces";
import { Teams } from "./Teams";
import { Trust } from "./Trust";
import { gensparkConfig } from "./config";

/* genspark.ai/business's section order (minus pricing and the blog), in EverAsk's register. */
export default function GensparkView() {
  return (
    <>
      <SiteHeader />
      <main className="mag-page flex-1">
        <Breadcrumbs />
        <Hero />
        <Proof />
        <Surfaces />
        <Connections />
        <Capabilities />
        <Teams />
        <Trust />
        <div className="flex justify-center py-20">
          <a href={gensparkConfig.links.start} className="btn-primary !h-11 !px-6 text-[15px]">Start with Genspark</a>
        </div>
        <Faq />
        <FinalCta />
        <AppTouchpoints />
      </main>
      <SiteFooter />
    </>
  );
}
