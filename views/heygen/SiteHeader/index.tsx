"use client";

import { EVERASK, EVERASK_NAV } from "../brand.constants";
import { ProductLockup } from "../ProductLockup";
import { HEADER_EASE } from "./SiteHeader.constants";
import { useSiteHeader } from "./use-site-header";

export function SiteHeader() {
  const { scrolled } = useSiteHeader();

  return (
    <header className={`sticky top-0 z-40 h-[76px] transition-[padding] ${HEADER_EASE} ${scrolled ? "px-3 py-2.5" : "px-0 py-0"}`}>
      <div aria-hidden className={`pointer-events-none absolute inset-0 bg-white transition-opacity ${HEADER_EASE} ${scrolled ? "opacity-100" : "opacity-0"}`} />
      <div
        className={`relative mx-auto flex h-full items-center justify-between gap-6 rounded-lg border transition-[max-width,padding,background-color,border-color,box-shadow,backdrop-filter] ${HEADER_EASE} ${
          scrolled
            ? "max-w-[75rem] border-white/90 bg-white/80 px-3 shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_4px_6px_rgba(0,0,0,0.03),0_12px_48px_rgba(0,0,0,0.1)] backdrop-blur-2xl backdrop-saturate-200"
            : "max-w-[78rem] border-transparent bg-transparent px-6"
        }`}
      >
        <a href={EVERASK.site} aria-label={`${EVERASK.name} home`}>
          <ProductLockup className="text-[15px]" />
        </a>
        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {EVERASK_NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="inline-flex h-9 items-center rounded-pill px-3.5 text-[15px] text-body transition-colors hover:bg-fill-1 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a href={EVERASK.startHref} className="btn-primary !h-10 !px-6 text-[15px]">
          Start free
        </a>
      </div>
    </header>
  );
}
