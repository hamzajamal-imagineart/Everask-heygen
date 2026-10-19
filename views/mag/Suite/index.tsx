"use client";

import { MAG_MEDIA } from "../media.constants";
import { SUITE_MEDIA, SUITE_TABS } from "./Suite.constants";
import { useSuite } from "./use-suite";

export function Suite() {
  const { activeTab, setActiveTab } = useSuite();

  return (
    <section id="suite" className="py-20 md:py-[105px]">
      <div className="mag-container">
        <div className="mx-auto flex max-w-[672px] flex-col items-center text-center">
          <h2 className="mag-h2">One place to create anything</h2>
          <p className="mag-lede pt-4">Pick your starting point. Every tool, every model, every format.</p>
        </div>
        <div className="flex justify-center pt-14">
          <div className="max-w-full overflow-x-auto">
            <div className="mag-pill-group" role="tablist" aria-label="Ways to use EverAsk">
              {SUITE_TABS.map((tab, index) => (
                <button
                  key={tab.label}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === index}
                  className="mag-pill px-6 font-normal"
                  onClick={() => setActiveTab(index)}
                >
                  {tab.label}
                  {tab.isNew && (
                    <span className="inline-flex h-[18px] items-center rounded px-1.5 text-[10px] font-medium tracking-[0.02em] text-action bg-[rgba(0,136,255,0.12)]">
                      New
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mag-container mt-6">
        <div className="relative overflow-hidden rounded-xl bg-[#362f2b] text-white lg:h-[650px]">
          <div className="relative aspect-[16/9] lg:absolute lg:inset-0 lg:aspect-auto">
            <img src={MAG_MEDIA.suitePanel} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            <div
              className="absolute inset-y-0 left-0 hidden w-[500px] lg:block"
              style={{ background: "linear-gradient(to right, #362f2b 0%, #362f2b 40%, rgba(54,47,43,0) 100%)" }}
              aria-hidden="true"
            />
            <div className="absolute inset-y-0 left-0 hidden w-[400px] backdrop-blur-2xl lg:block" aria-hidden="true" />
          </div>
          <div className="relative flex flex-col justify-between gap-10 p-8 lg:h-full lg:w-[400px] lg:p-10">
            <div>
              <h3 className="text-xl leading-[1.5] font-medium">Pro-level production, end to end</h3>
              <p className="max-w-[320px] pt-2 text-sm leading-[1.6] text-white/70">
                Start with an idea. Direct the shots. Add sound. Explore variations. Explore workflows. Connect in Spaces. Your
                team, creating together.
              </p>
            </div>
            <ul className="flex flex-col">
              {SUITE_MEDIA.map((medium) => (
                <li key={medium.label} className="py-3">
                  <div className="flex items-center gap-3">
                    <img src={medium.icon} alt="" width={20} height={20} aria-hidden="true" />
                    <span className="text-base leading-[1.6] font-medium">{medium.label}</span>
                  </div>
                  {medium.description && (
                    <div className="max-w-[320px]">
                      <p className="pt-2 text-sm leading-[1.6] text-white/70">{medium.description}</p>
                      <div className="mt-4 flex h-0.5 w-full" aria-hidden="true">
                        <span className="w-2/5 bg-white" />
                        <span className="flex-1 bg-white/20" />
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
