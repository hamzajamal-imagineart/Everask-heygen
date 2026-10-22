"use client";

import { EVERASK_BRAND } from "../mag/Lockup/Lockup.constants";
import { SEO_SKY, startHref } from "./config";
import type { SeoPage } from "./types";

/* "Start building" (StartBuilding.tsx there): back up to the hero composer,
   focused, so what the reader picked up on the way down goes straight in. */
export function StartBuilding() {
  const go = () => {
    const field = document.getElementById("page-prompt");
    if (!field) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    field.scrollIntoView({ block: "center", behavior: reduce ? "instant" : "smooth" });
    field.focus({ preventScroll: true });
  };
  return (
    <div className="flex justify-center pb-16 lg:pb-20">
      <button type="button" onClick={go} className="btn-primary !h-11 !px-6 text-[15px]">
        Start building
      </button>
    </div>
  );
}

/* The sky FinalCta (FinalCta.tsx there): the page closes where it opened,
   the sky world cropped to its cloud, the master line in white with its
   second half in the serif. */
export function FinalCta({ page }: { page: SeoPage }) {
  return (
    <section id="get-started" className="px-2 pt-10 pb-3 sm:px-3">
      <div className="relative isolate overflow-hidden rounded-[24px] py-24 sm:rounded-[36px] lg:py-32" style={{ backgroundColor: SEO_SKY.tone }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={SEO_SKY.poster} alt="" loading="lazy" className="absolute inset-0 -z-10 size-full object-cover object-[50%_88%]" />
        <span
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{ backgroundImage: `linear-gradient(to bottom, ${SEO_SKY.tone}f2 0%, ${SEO_SKY.tone}b3 45%, ${SEO_SKY.tone}33 100%)` }}
        />
        <div className="container-page text-center">
          <h2 className="t-statement mx-auto max-w-3xl !text-white">
            One prompt in.
            <br />
            <span className="font-serif text-[1.12em] font-normal italic">Real work out.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/85">{page.subhead}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href={startHref(page.slug)} className="btn-primary !bg-white !text-ink hover:!bg-white/90">
              {page.primaryCta}
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
