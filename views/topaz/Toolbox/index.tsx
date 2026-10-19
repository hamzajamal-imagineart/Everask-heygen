"use client";

import { useState } from "react";
import { HeroCompare } from "@/views/mag/Hero/HeroCompare";
import { HERO_TOOLS } from "../Hero/Hero.constants";

/* Topaz's tool row and "Crystal clear. Highly detailed. Super focused." block:
   six chips centred, the heading and intro under them, then the big visual
   (theirs is the app window; ours is the picked tool's before/after as a
   draggable slider, in the still's own 16:9). */
export function Toolbox() {
  const [active, setActive] = useState<(typeof HERO_TOOLS)[number]["id"]>("sharpen");
  const tool = HERO_TOOLS.find((t) => t.id === active) ?? HERO_TOOLS[0];
  return (
    <section id="showcase" className="border-t border-[#ededed] py-20">
      <div className="container-page flex flex-col items-center text-center">
        <ul role="tablist" aria-label="Topaz Photo tools" className="flex flex-wrap justify-center gap-2">
          {HERO_TOOLS.map((t) => (
            <li key={t.id} role="presentation">
              <button
                type="button"
                role="tab"
                aria-selected={t.id === active}
                onClick={() => setActive(t.id)}
                className={`inline-flex h-9 items-center whitespace-nowrap rounded-pill px-4 text-[14px] font-medium transition-colors ${
                  t.id === active ? "bg-ink text-white" : "bg-fill-1 text-ink hover:bg-[#ececee]"
                }`}
              >
                {t.label}
              </button>
            </li>
          ))}
        </ul>
        <h2 className="mt-10 max-w-3xl font-display text-[32px] font-medium leading-[1.1] tracking-[-0.03em] text-ink sm:text-[44px]">Crystal clear. Highly detailed. Super focused.</h2>
        <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-black/55">
          Topaz Photo is an intelligent image enhancement software that lets you sharpen details, restore focus, and adjust levels on every shot you take. Choose from 11 AI-powered tools to perfect your images, or let autopilot get you started. Now inside EverAsk.
        </p>
        <p className="mt-3 text-[14px] text-black/45">
          <span className="font-medium text-ink">{tool.label}.</span> {tool.line}
        </p>
        <div className="relative mt-10 w-full overflow-hidden rounded-[24px] bg-fill-1 sm:rounded-[32px]" style={{ aspectRatio: 16 / 9 }}>
          <HeroCompare key={tool.id} before={tool.pair.before} after={tool.pair.after} handleY={86} />
        </div>
      </div>
    </section>
  );
}
