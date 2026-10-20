"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { HG_MEDIA } from "../media.constants";

/* The AI Studio showcase (Hamza, 20 Oct): EverAsk's own workspace, rebuilt from the Figma frame
   "superagent" (H-Drafts, node 866:14016): the agent chat on the left, the generation canvas on the
   right. Copy is changed to a HeyGen avatar-video job, the canvas holds our own presenter renders
   (no stock images from the Figma), and the frame is laid out at 1760×1100 (the slot's 1.6 ratio,
   the Figma frame is 1920×1024) then scaled to the card's width, so it stays sharp at any size. */
const W = 1760;
const H = 1100;

/* Clean presenter stills only (no baked captions): six made for this canvas (GPT Image 2, the hero
   tiles' pale-blue studio look) and seven of the page's own; the bottom row, partly cut off by the
   frame, repeats three. */
const TILES = [
  HG_MEDIA.heroPortfolio,
  HG_MEDIA.studioTile1,
  HG_MEDIA.heroCounsel,
  HG_MEDIA.studioTile2,
  HG_MEDIA.studioTile3,
  HG_MEDIA.heroProductivity,
  HG_MEDIA.studioTile4,
  HG_MEDIA.heroInterview,
  HG_MEDIA.heroHome,
  HG_MEDIA.studioTile5,
  HG_MEDIA.translationPoster,
  HG_MEDIA.studioTile6,
  HG_MEDIA.heroTherapist,
  HG_MEDIA.studioTile3,
  HG_MEDIA.studioTile1,
  HG_MEDIA.heroCounsel,
];
const DURATIONS = ["0:58", "0:42", "1:12", "0:36", "0:51", "0:44", "1:05", "0:39", "0:47", "0:33", "1:20", "0:41", "0:55", "0:38", "0:58", "1:02"];

/* Thin line icons in the app's 1.5 stroke. */
function I({ d, className = "size-[18px]", fill = false }: { d: string; className?: string; fill?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={fill ? "currentColor" : "none"} stroke={fill ? "none" : "currentColor"} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d={d} />
    </svg>
  );
}
const P = {
  newChat: "M12 20h9M16.5 3.5a2.1 2.1 0 1 1 3 3L7 19l-4 1 1-4Z",
  search: "M11 4a7 7 0 1 1 0 14 7 7 0 0 1 0-14ZM20 20l-4-4",
  history: "M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5M12 7v5l3 2",
  plug: "M9 2v6M15 2v6M6 8h12v3a6 6 0 0 1-12 0V8ZM12 17v5",
  library: "M4 4v16M9 4v16M14 4l5 16",
  dots: "M5 12h.01M12 12h.01M19 12h.01",
  chevron: "m6 9 6 6 6-6",
  chevronR: "m9 6 6 6-6 6",
  tick: "m5 12 4 4 10-10",
  copy: "M9 9h11v11H9zM5 15H4V4h11v1",
  retry: "M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5",
  up: "M7 10v11H3V10h4Zm0 0 4-8a3 3 0 0 1 3 3v4h6a2 2 0 0 1 2 2.3l-1.4 8A2 2 0 0 1 18.6 21H7",
  down: "M17 14V3h4v11h-4Zm0 0-4 8a3 3 0 0 1-3-3v-4H4a2 2 0 0 1-2-2.3l1.4-8A2 2 0 0 1 5.4 3H17",
  plus: "M12 5v14M5 12h14",
  mic: "M12 3a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3ZM5 11a7 7 0 0 0 14 0M12 18v3",
  x: "M6 6l12 12M18 6 6 18",
  panel: "M3 4h18v16H3zM15 4v16",
  expand: "M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7",
  pip: "M3 5h18v14H3zM12 12h7v5h-7z",
  sliders: "M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0M14 4v4M8 10v4M16 16v4",
  download: "M12 4v12m0 0-5-5m5 5 5-5M4 20h16",
  frame: "M4 8V4h4M16 4h4v4M20 16v4h-4M8 20H4v-4",
  more: "M12 5h.01M12 12h.01M12 19h.01",
  play: "M8 5v14l11-7Z",
  wave: "M4 10v4M8 7v10M12 4v16M16 7v10M20 10v4",
};

function NavIcon({ d, on = false }: { d: string; on?: boolean }) {
  return <span className={`grid size-8 place-items-center rounded-lg ${on ? "bg-[#f1f1f3] text-[#131318]" : "text-[#5b5b66]"}`}><I d={d} /></span>;
}

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex h-8 items-center justify-between px-2 text-[13px]">
      <span className="text-[#7a7a85]">{label}</span>
      <span className="flex items-center gap-1.5 font-medium text-[#131318]">
        {children}
        <I d={P.chevronR} className="size-3 text-[#9a9aa4]" />
      </span>
    </div>
  );
}

export function StudioApp() {
  const box = useRef<HTMLDivElement>(null);
  const [s, setS] = useState(0.66);
  useLayoutEffect(() => {
    const el = box.current;
    if (!el) return;
    const fit = () => setS(el.clientWidth / W);
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={box} className="relative w-full overflow-hidden" style={{ aspectRatio: `${W} / ${H}` }}>
      <div
        role="img"
        aria-label="The EverAsk workspace: a chat asking for a 60-second launch video with a HeyGen avatar on the left, and a canvas of finished avatar videos on the right"
        className="absolute top-0 left-0 flex origin-top-left bg-white font-sans text-[#131318]"
        style={{ width: W, height: H, transform: `scale(${s})` }}
      >
        {/* Side nav */}
        <aside className="flex w-12 shrink-0 flex-col items-center gap-2 border-r border-[#efeff1] py-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/everask-mark.svg" loading="lazy" decoding="async" alt="" className="mb-3 size-6" />
          <NavIcon d={P.newChat} />
          <NavIcon d={P.search} />
          <span className="grid size-8 place-items-center rounded-lg bg-[#f1f1f3]">
            <span className="size-[18px] rounded-full bg-[conic-gradient(#ff6b9a,#ffb547,#5fd38d,#4aa8ff,#a37bff,#ff6b9a)] p-[3px]">
              <span className="block size-full rounded-full bg-white" />
            </span>
          </span>
          <NavIcon d={P.history} />
          <NavIcon d={P.plug} />
          <NavIcon d={P.library} />
          <span className="mt-auto grid size-8 place-items-center rounded-full bg-[#0088ff]">
            <span className="size-3.5 rounded-full border-2 border-white" />
          </span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={HG_MEDIA.studioTile4} loading="lazy" decoding="async" alt="" className="mt-2 size-8 rounded-full object-cover object-[50%_20%]" />
        </aside>

        {/* Chat */}
        <section className="flex w-[520px] shrink-0 flex-col border-r border-[#efeff1] px-4">
          <header className="flex h-14 items-center justify-between pt-2">
            <span className="flex items-center gap-1 text-[13px] text-[#6b6b76]">
              Product launch video <I d={P.chevron} className="size-3" />
            </span>
            <span className="flex items-center gap-4 text-[#5b5b66]">
              <I d={P.dots} />
              <I d={P.newChat} />
            </span>
          </header>
          <div className="mt-4 flex justify-end">
            <p className="rounded-[20px] bg-[#f1f1f3] px-4 py-3 text-[16px] leading-6">Make a 60-second launch video with my avatar</p>
          </div>
          <div className="mt-8 text-[16px] leading-7 text-[#1d1d24]">
            <p>On it. I&apos;ll write the script and render it with your HeyGen avatar, then line up a Spanish version.</p>
            <ul className="mt-3 space-y-2 text-[14.5px] text-[#2a2a33]">
              {["Write a 60-second launch script", "Render the video with HeyGen Avatar V", "Translate to Spanish with lip-sync"].map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <span className="grid size-[18px] place-items-center rounded-full bg-[#e9e9ee] text-[#7a7a85]"><I d={P.tick} className="size-3" /></span>
                  {t}
                  <I d={P.chevron} className="size-3 text-[#7a7a85]" />
                </li>
              ))}
            </ul>
            <p className="mt-4">Your launch video and its Spanish cut are in the canvas. Want captions or a vertical version for social next?</p>
          </div>
          <div className="mt-4 flex items-center gap-4 text-[#6b6b76]">
            <I d={P.copy} className="size-4" />
            <I d={P.retry} className="size-4" />
            <I d={P.up} className="size-4" />
            <I d={P.down} className="size-4" />
            <span className="flex items-center gap-1 text-[12.5px]">HeyGen Avatar V <I d={P.chevron} className="size-3" /></span>
          </div>

          <div className="mt-auto rounded-[20px] border border-[#ececf0] p-3 shadow-[0_4px_18px_rgba(0,0,0,0.05)]">
            <p className="px-1 pt-1 pb-6 text-[15px] text-[#8a8a94]">Ask anything …</p>
            <div className="flex items-center gap-2 text-[#3b3b44]">
              {[P.plus, P.library, P.plug].map((d) => (
                <span key={d} className="grid size-8 place-items-center rounded-full border border-[#ececf0]"><I d={d} className="size-4" /></span>
              ))}
              <span className="ml-auto flex items-center gap-1 text-[14px] font-medium">Ultra <I d={P.chevron} className="size-3.5" /></span>
              <I d={P.mic} className="ml-3 size-[18px]" />
              <span className="grid size-8 place-items-center rounded-full bg-[#0088ff] text-white"><I d={P.wave} className="size-4" /></span>
            </div>
          </div>
          <p className="py-2.5 text-center text-[11.5px] text-[#8a8a94]">EverAsk can make mistakes. Check important info.</p>
        </section>

        {/* Canvas */}
        <section className="flex min-w-0 flex-1 flex-col overflow-hidden px-4">
          <header className="flex h-16 items-center justify-between">
            <span className="flex items-center gap-3">
              <span className="flex items-center gap-2 rounded-lg bg-[#f4f4f6] px-2.5 py-1.5 text-[13px]">
                <span className="grid size-4 place-items-center rounded bg-[#ff5fa2] text-white"><I d={P.play} className="size-2.5" fill /></span>
                Videos
                <I d={P.x} className="ml-6 size-3 text-[#7a7a85]" />
              </span>
              <I d={P.plus} className="size-4 text-[#5b5b66]" />
            </span>
            <span className="flex items-center gap-5 text-[#3b3b44]">
              <I d={P.pip} className="size-4" />
              <I d={P.expand} className="size-4" />
              <I d={P.panel} className="size-4" />
            </span>
          </header>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <span className="grid size-7 place-items-center rounded-full bg-[#f1f1f3] text-[#5b5b66]"><I d={P.sliders} className="size-3.5" /></span>
              <span className="flex rounded-full bg-[#f1f1f3] p-0.5 text-[12px]">
                <span className="rounded-full bg-white px-3 py-1 font-medium shadow-[0_1px_2px_rgba(0,0,0,0.08)]">Generations</span>
                <span className="px-3 py-1 text-[#7a7a85]">Templates</span>
              </span>
            </span>
            <span className="flex items-center gap-5 text-[#5b5b66]">
              <span className="relative h-[3px] w-[140px] rounded-full bg-[#e6e6ea]">
                <span className="absolute inset-y-0 left-0 w-[45%] rounded-full bg-[#131318]" />
                <span className="absolute top-1/2 left-[45%] size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#131318]" />
              </span>
              <I d={P.frame} className="size-4" />
              <I d={P.download} className="size-4" />
              <I d={P.more} className="size-4" />
              <span className="rounded-full bg-[#0088ff] px-3.5 py-1.5 text-[13px] font-medium text-white">Share</span>
            </span>
          </div>

          <div className="relative mt-3 grid grid-cols-4 gap-4">
            {TILES.map((src, i) => (
              <div key={i} className={`relative overflow-hidden rounded-2xl bg-[#f1f1f3] ${i < 4 ? "h-[262px]" : "h-[238px]"}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="" loading="lazy" className="size-full object-cover" />
                <span className="absolute bottom-2.5 left-2.5 flex items-center gap-1 rounded-full bg-black/45 px-2 py-0.5 text-[11px] font-medium text-white backdrop-blur-sm">
                  <I d={P.play} className="size-2.5" fill />
                  {DURATIONS[i]}
                </span>
                {i === 0 && (
                  <>
                    <span className="absolute top-2.5 right-2.5 flex gap-1.5">
                      <span className="grid size-7 place-items-center rounded-full bg-white/90 text-[#3b3b44]"><I d={P.download} className="size-3.5" /></span>
                      <span className="grid size-7 place-items-center rounded-full bg-white/90 text-[#3b3b44]"><I d={P.dots} className="size-3.5" /></span>
                    </span>
                    <span className="absolute inset-x-0 bottom-2.5 flex justify-center gap-1.5 pl-12 text-[12px] font-medium">
                      <span className="flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1"><I d={P.plus} className="size-3" /> Edit</span>
                      <span className="rounded-full bg-white/90 px-2.5 py-1">Captions</span>
                      <span className="rounded-full bg-white/90 px-2.5 py-1">Translate</span>
                    </span>
                  </>
                )}
              </div>
            ))}

            {/* Video settings over the first tile, as in the Figma */}
            <div className="absolute top-0 left-0 w-[242px] rounded-2xl bg-white p-2 shadow-[0_8px_30px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.04]">
              <p className="px-2 pt-1.5 pb-1 text-[12px] text-[#7a7a85]">Video settings</p>
              <Row label="Model">
                <span className="size-2.5 rotate-45 rounded-[2px] bg-[#7559ff]" /> HeyGen
              </Row>
              <Row label="Aspect ratio">16:9</Row>
              <Row label="Avatar">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={HG_MEDIA.heroPortfolio} loading="lazy" decoding="async" alt="" className="size-4 rounded-full object-cover object-top" /> Avatar V
              </Row>
              <Row label="Voice">
                <span className="size-3 rounded-full bg-[conic-gradient(#ffb547,#ff6b9a,#ffb547)]" /> Warm
              </Row>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
