import type { CSSProperties } from "react";
import { EVERASK_BRAND } from "@/views/mag/Lockup/Lockup.constants";
import { manusConfig } from "../config";
import { MANUS_MEDIA } from "../media.constants";
import { ManusLockup } from "./ManusLockup";

const rise = (ms: number) => ({ className: "animate-sky-rise motion-reduce:animate-none", style: { animationDelay: `${ms}ms` } as CSSProperties });

/* Manus's own tagline first ("Less structure, more intelligence.") and their features line, then ours. */
const SUBHEAD =
  "Less structure, more intelligence. Build apps and games, create video and slides, research at scale and automate the work that keeps coming back. Now inside EverAsk.";

/* The Magnific hero's layout: a rounded frame under the header and breadcrumb,
   a still filling it, the copy centred over a neutral dark overlay. */
export function Hero() {
  return (
    <>
      <section id="top" className="px-2 sm:px-3">
        <div className="relative isolate flex min-h-[max(640px,calc(100svh-140px))] flex-col overflow-hidden rounded-[24px] bg-[#1f4f9a] sm:rounded-[36px]">
          <img src={MANUS_MEDIA.hero} alt="" fetchPriority="high" className="absolute inset-0 -z-10 size-full object-cover object-[50%_55%]" />
          <span aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-black/25" />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.18) 35%, rgba(0,0,0,0.18) 65%, rgba(0,0,0,0) 100%)" }}
          />
          <div className="container-page flex flex-1 flex-col items-center justify-center py-[clamp(48px,6vw,88px)] text-center">
            <h1
              {...rise(80)}
              className="flex max-w-full flex-nowrap items-center justify-center gap-x-[0.3em] whitespace-nowrap font-display font-medium leading-none tracking-[-0.03em] text-white [text-shadow:0_2px_24px_rgba(0,30,80,0.55)]"
              style={{ fontSize: "clamp(22px, 3.9vw, 58px)" }}
            >
              <ManusLockup className="shrink-0 text-[1.12em] drop-shadow-[0_2px_18px_rgba(0,40,110,0.3)]" />
              <span>
                inside <span className="font-serif text-[1.08em] font-normal italic tracking-[-0.01em]">{EVERASK_BRAND.name}</span>
              </span>
            </h1>
            <p {...rise(160)}>
              <span className="mx-auto mt-5 block max-w-2xl text-[17px] leading-relaxed text-white [text-shadow:0_1px_16px_rgba(0,30,80,0.6)]">{SUBHEAD}</span>
            </p>
            <div {...rise(240)} className="mt-8">
              <a href={manusConfig.links.start} className="btn-primary !bg-white !text-ink hover:!bg-white/90">
                Start with Manus
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="hero-end" />
    </>
  );
}
