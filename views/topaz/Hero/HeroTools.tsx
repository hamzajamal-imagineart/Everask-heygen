"use client";

import { useState } from "react";
import { HeroCompare } from "@/views/mag/Hero/HeroCompare";
import { HERO_TOOLS } from "./Hero.constants";

/* The hero's interaction, after Topaz's own hero (which cycles its tools over a
   before/after): six frosted tool chips under the copy; the picked tool swaps
   the pair behind the whole frame, and the draggable slider (HeroCompare)
   reveals what that tool does. Each tool has its own scene, so the comparison
   is honest to the tool: noise for Denoise, blur for Sharpen, and so on. */
export function HeroTools({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState<(typeof HERO_TOOLS)[number]["id"]>("denoise");
  const tool = HERO_TOOLS.find((t) => t.id === active) ?? HERO_TOOLS[0];
  return (
    <>
      <HeroCompare key={tool.id} before={tool.pair.before} after={tool.pair.after} handleY={84} />
      {children}
      <div className="relative z-20 mt-8 w-full">
        <div className="-mx-4 overflow-x-auto px-4 [mask-image:linear-gradient(to_right,transparent,#000_16px,#000_calc(100%-16px),transparent)] [scrollbar-width:none] sm:mx-0 sm:px-0 sm:[mask-image:none] [&::-webkit-scrollbar]:hidden">
          <ul role="tablist" aria-label="Topaz Photo tools" className="mx-auto flex w-max gap-2 py-1 sm:w-auto sm:flex-wrap sm:justify-center">
            {HERO_TOOLS.map((t) => (
              <li key={t.id} role="presentation">
                <button
                  type="button"
                  role="tab"
                  aria-selected={t.id === active}
                  onClick={() => setActive(t.id)}
                  className={`inline-flex h-9 items-center whitespace-nowrap rounded-pill px-4 text-[14px] font-medium transition-[background-color,border-color,color,transform] duration-200 ease-out active:scale-[0.97] ${
                    t.id === active ? "border border-white bg-white text-ink hover:bg-white" : "glass"
                  }`}
                >
                  {t.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <p className="mx-auto mt-4 max-w-lg text-center text-[14px] leading-relaxed text-white/85 [text-shadow:0_1px_12px_rgba(0,30,80,0.6)]">{tool.line}</p>
      </div>
    </>
  );
}
