"use client";

import { MAG_MEDIA } from "../media.constants";
import { TOOL_FILTERS } from "./Tools.constants";
import { useTools } from "./use-tools";

export function Tools() {
  const { railRef, activeFilter, setActiveFilter, tools, scrollRail } = useTools();

  return (
    <section id="tools" className="py-20 md:py-24">
      <div className="mag-container">
        <div className="flex flex-col gap-4">
          <h2 className="mag-h2 max-w-[576px] text-[#2c0000]">Pick a tool, start creating</h2>
          <p className="max-w-[672px] text-base leading-[1.6] text-[#131318]">
            Generate, upscale, edit—your creative workflow starts here.
          </p>
        </div>
        <div className="flex items-center justify-between gap-4 pt-10">
          <div className="max-w-full overflow-x-auto">
            <div className="mag-pill-group" role="group" aria-label="Filter tools">
              {TOOL_FILTERS.map((filter, index) => (
                <button
                  key={filter.label}
                  type="button"
                  aria-pressed={activeFilter === index}
                  className="mag-pill font-medium"
                  onClick={() => setActiveFilter(index)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              className="flex size-10 items-center justify-center rounded-full bg-black/5 transition-opacity hover:opacity-70"
              aria-label="Scroll tools back"
              onClick={() => scrollRail(-1)}
            >
              <img src={MAG_MEDIA.iconChevronLeft} alt="" width={16} height={16} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="flex size-10 items-center justify-center rounded-full bg-black/5 transition-opacity hover:opacity-70"
              aria-label="Scroll tools forward"
              onClick={() => scrollRail(1)}
            >
              <img src={MAG_MEDIA.iconChevronRight} alt="" width={16} height={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <ul
        ref={railRef}
        className="mag-rail mt-6 flex gap-4 overflow-x-auto px-6 py-2 md:px-[max(24px,calc((100vw-1200px)/2))]"
        aria-label="Tools"
      >
        {tools.map((tool) => (
          <li key={tool.title} className="flex h-[177px] w-[200px] shrink-0 snap-start flex-col gap-3 rounded-3xl bg-white p-[18px]">
            <div className="flex flex-col gap-3">
              <img src={tool.icon} alt="" width={48} height={48} className="size-12 object-contain" aria-hidden="true" />
              <span className="flex flex-col">
                <span className="text-sm leading-[1.6] font-medium text-[#353535]">{tool.title}</span>
                <span className="line-clamp-2 text-xs leading-[1.5] text-[#616161]">{tool.description}</span>
              </span>
            </div>
          </li>
        ))}
        <li className="flex h-[177px] w-[200px] shrink-0 snap-start flex-col gap-3 rounded-3xl bg-white p-[18px]">
          <div className="flex flex-col gap-3">
            <span className="flex size-12 items-center justify-center rounded-2xl">
              <img src={MAG_MEDIA.toolAllTools} alt="" width={20} height={20} aria-hidden="true" />
            </span>
            <span className="text-sm leading-[1.6] font-medium text-[#353535]">All tools</span>
          </div>
        </li>
      </ul>
    </section>
  );
}
