import { AppTouchpoints } from "@/views/mag/AppTouchpoints";
import { SiteFooter } from "@/views/mag/SiteFooter";
import { SiteHeader } from "@/views/mag/SiteHeader";
import { Breadcrumbs } from "./Breadcrumbs";
import { Faq } from "./Faq";
import { FinalCta } from "./FinalCta";
import { Hero } from "./Hero";
import { Models } from "./Models";
import { Stats } from "./Stats";
import { Tools } from "./Tools";
import { UseCases } from "./UseCases";
import { topazConfig } from "./config";

export default function TopazView() {
  return (
    <>
      <SiteHeader />
      <main className="mag-page flex-1">
        <Breadcrumbs />
        <Hero />
        <Stats />
        <Tools />
        <UseCases />
        <Models />
        <div className="flex justify-center pb-20">
          <a href={topazConfig.links.start} className="btn-primary !h-11 !px-6 text-[15px]">
            Start enhancing
          </a>
        </div>
        <Faq />
        <FinalCta />
        <AppTouchpoints />
      </main>
      <SiteFooter />
    </>
  );
}
