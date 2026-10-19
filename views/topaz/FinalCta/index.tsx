import { EVERASK_BRAND } from "@/views/mag/Lockup/Lockup.constants";
import { topazConfig } from "../config";
import { TOPAZ_MEDIA } from "../media.constants";

/* EverAsk's sky band, closing on Topaz's own line "Every pixel. Perfect." */
export function FinalCta() {
  return (
    <section id="get-started" className="px-2 pt-10 pb-3 sm:px-3">
      <div className="relative isolate overflow-hidden rounded-[24px] py-24 sm:rounded-[36px] lg:py-32" style={{ backgroundColor: "#1c6fd6" }}>
        <img src={TOPAZ_MEDIA.ctaSky} alt="" loading="lazy" className="absolute inset-0 -z-10 size-full object-cover object-[50%_60%]" />
        <span aria-hidden className="absolute inset-0 -z-10 bg-black/20" />
        <div className="container-page text-center">
          <h2 className="t-statement mx-auto max-w-3xl font-display font-medium text-white">
            Every pixel. <span className="font-serif text-[1.12em] font-normal italic">Perfect.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/85">Topaz Photo's tools, trained on millions of images, one prompt away in EverAsk.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href={topazConfig.links.start} className="btn-primary !bg-white !text-ink hover:!bg-white/90">
              Start enhancing
            </a>
            <a href={`${EVERASK_BRAND.site}/pricing`} className="glass inline-flex h-12 items-center rounded-pill px-7 text-[16px] font-medium">
              See pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
