"use client";

import type { CSSProperties } from "react";
import { ORIGINALS } from "./Originals.constants";
import { useOriginals } from "./use-originals";

export function Originals() {
  const { active, setActive } = useOriginals();
  const trackStyle = { transform: `translateX(calc(50cqw - ${active + 0.5} * var(--mag-slide-w)))` } as CSSProperties;

  return (
    <section id="originals" className="py-20 md:py-24">
      <div className="mag-container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-8">
          <div className="max-w-[672px]">
            <h2 className="mag-h2">Made with EverAsk</h2>
            <p className="mag-lede pt-4">Original productions made by talented creatives around the world.</p>
          </div>
        </div>
      </div>
      <div className="mag-originals mt-12 w-full overflow-hidden">
        <ul className="mag-originals-track flex" style={trackStyle}>
          {ORIGINALS.map((slide, index) => {
            const isActive = index === active;
            return (
              <li key={slide.title} className="mag-originals-slide shrink-0" data-active={isActive}>
                <div className="relative aspect-[1354/762] overflow-hidden rounded-3xl text-white">
                  <img src={slide.image} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
                  {!isActive && (
                    <button
                      type="button"
                      className="absolute inset-0 z-10 cursor-pointer"
                      aria-label={`Show ${slide.title}`}
                      onClick={() => setActive(index)}
                    />
                  )}
                  <div className="absolute inset-0 flex flex-col items-start justify-end gap-5 p-6 md:p-12">
                    <div className="flex max-w-[400px] flex-col gap-1">
                      {slide.logo && (
                        <img src={slide.logo} alt="" width={slide.logoWidth} height={slide.logoHeight} className="mb-5" aria-hidden="true" />
                      )}
                      <p className="text-base leading-[1.6] font-medium">{slide.title}</p>
                      <p className="text-sm leading-[1.6]">{slide.description}</p>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex items-center justify-center gap-3 pt-4" role="tablist" aria-label="Originals slides">
        {ORIGINALS.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            role="tab"
            aria-selected={index === active}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all ${index === active ? "w-8 bg-[#616161]" : "w-2.5 bg-[#8f8f8f]"}`}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </section>
  );
}
