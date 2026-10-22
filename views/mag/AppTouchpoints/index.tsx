import type { ReactNode } from "react";
import { LOCKUP_MARK_STYLE } from "../Lockup/Lockup.constants";
import {
  APPSTORE_PATH,
  AVATAR,
  BRAND_NAME,
  IOS_URL,
  IPHONE,
  MACBOOK,
  MAC_URL,
  TOUCHPOINT_COPY,
  type TouchpointCopy,
} from "./AppTouchpoints.constants";

/* Ported from the EverAsk site (components/landing/website/AppTouchpoints.tsx),
   the "image-models" cluster's entry: the agent on an iPhone and on a Mac, each
   with its download, and the run drawn into each screen. */

/* The source's wide Section, without its fade-in. */
function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="scroll-mt-20 border-t border-line-soft py-16 lg:py-20 [.hero-end+&]:border-t-0 [&#how-it-works]:border-t-0 [#how-it-works+&]:border-t-0">
      <div className="container-page">
        <div className="flex flex-wrap items-baseline justify-between gap-x-12 gap-y-3">
          <h2 className="t-title">{title}</h2>
        </div>
        <div className="mt-8 lg:mt-10">{children}</div>
      </div>
    </section>
  );
}

/* Icons.layout from the source's icon set. */
function MacIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
      <path d="M4 4h16v16H4V4Zm0 5h16M9 9v11" />
    </svg>
  );
}

/* BrandMark brand="appstore" mono. */
function AppStoreMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d={APPSTORE_PATH} />
    </svg>
  );
}

/* The EverAsk mark, through a CSS mask in currentColor. */
function ProductMark({ className = "" }: { className?: string }) {
  return <span role="img" aria-label={BRAND_NAME} className={className} style={LOCKUP_MARK_STYLE} />;
}

export function AppTouchpoints({ copy = TOUCHPOINT_COPY }: { copy?: TouchpointCopy }) {
  const c = copy;
  return (
    <Section title={`${BRAND_NAME} on your phone and your Mac`}>
      <div className="grid gap-4 lg:grid-cols-2">
        {/* iPhone */}
        <div className="relative isolate flex min-h-[360px] flex-col justify-between overflow-hidden rounded-3xl bg-fill-1 p-7 lg:p-8">
          <div className="relative z-10 sm:max-w-[52%]">
            <h3 className="font-display text-[24px] font-medium leading-[1.15] tracking-[-0.02em] text-ink">{BRAND_NAME} for iPhone</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{c.phone}</p>
            {IOS_URL ? (
              <a
                href={IOS_URL}
                className="mt-6 inline-flex h-11 items-center gap-2.5 rounded-pill bg-ink px-5 text-[14px] font-medium text-white transition-colors hover:bg-ink/90"
              >
                <AppStoreMark className="size-4" />
                Download on the App Store
              </a>
            ) : (
              <span
                aria-disabled
                className="mt-6 inline-flex h-11 items-center gap-2.5 rounded-pill bg-fill-2 px-5 text-[14px] font-medium text-muted"
              >
                <AppStoreMark className="size-4" />
                Coming soon to the App Store
              </span>
            )}
          </div>
          {/* The phone: a photographed iPhone with the run's chat on its screen,
              upright on a blue glow, floating. */}
          <span aria-hidden className="pointer-events-none absolute right-[2%] top-[18%] -z-10 hidden size-[300px] rounded-full bg-[radial-gradient(closest-side,rgb(0_136_255/0.32),transparent)] blur-2xl sm:block" />
          <div aria-hidden className="pointer-events-none absolute right-[7%] top-9 hidden w-[37%] max-w-[218px] animate-[device-float_7s_ease-in-out_infinite] motion-reduce:animate-none sm:block">
            <div className="relative aspect-[873/1874] drop-shadow-[0_28px_30px_rgba(0,20,60,0.28)]">
              <div className="app-mock app-mock-screen absolute bottom-[1.92%] left-[4.7%] right-[4.58%] top-[1.92%] flex flex-col overflow-hidden rounded-[30px] bg-white text-left">
                <PhoneRun c={c} />
                <span aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(118deg,rgb(255_255_255/0.2),rgb(255_255_255/0.05)_34%,transparent_34.5%)]" />
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IPHONE} alt="" className="absolute inset-0 size-full" loading="lazy" />
            </div>
          </div>
        </div>

        {/* Mac */}
        <div className="relative isolate flex min-h-[360px] flex-col justify-between overflow-hidden rounded-3xl bg-fill-1 p-7 lg:p-8">
          <div className="relative z-10 sm:max-w-[44%]">
            <h3 className="font-display text-[24px] font-medium leading-[1.15] tracking-[-0.02em] text-ink">{BRAND_NAME} for Mac</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{c.mac}</p>
            {MAC_URL ? (
              <a
                href={MAC_URL}
                className="mt-6 inline-flex h-11 items-center gap-2.5 rounded-pill bg-ink px-5 text-[14px] font-medium text-white transition-colors hover:bg-ink/90"
              >
                <MacIcon className="size-4" />
                Download for macOS
              </a>
            ) : (
              <span
                aria-disabled
                className="mt-6 inline-flex h-11 items-center gap-2.5 rounded-pill bg-fill-2 px-5 text-[14px] font-medium text-muted"
              >
                <MacIcon className="size-4" />
                Coming soon for macOS
              </span>
            )}
          </div>
          {/* The Mac: a photographed MacBook with the run on its screen, the
              whole of it inside the card on the right, down to the base, on
              a blue glow. */}
          <span aria-hidden className="pointer-events-none absolute -right-[4%] bottom-[6%] -z-10 hidden h-[300px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgb(0_136_255/0.3),transparent)] blur-2xl sm:block" />
          <div aria-hidden className="pointer-events-none absolute bottom-8 right-6 hidden w-[56%] max-w-[560px] sm:block">
            <span className="absolute -bottom-1 left-[6%] right-[6%] h-4 rounded-[50%] bg-[rgb(0_20_60/0.28)] blur-md" />
            <div className="relative aspect-[1746/1038]">
              <div className="app-mock absolute bottom-[9.54%] left-[9.45%] right-[9.45%] top-[2.7%] flex flex-col overflow-hidden bg-white">
                <div className="h-[18px] shrink-0 bg-fill-1" />
                <div className="relative min-h-0 flex-1">
                  <DesktopRun c={c} />
                </div>
                <span aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(118deg,rgb(255_255_255/0.2),rgb(255_255_255/0.05)_34%,transparent_34.5%)]" />
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={MACBOOK} alt="" className="absolute inset-0 size-full" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Check = () => (
  <svg viewBox="0 0 16 16" className="size-3 shrink-0 text-action" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="8" r="6.5" />
    <path d="M5.5 8.5l2 2 3.5-4" />
  </svg>
);

/* EverAsk's side of the chat: its mark, the steps it took, its answer and
   the line it finished on. */
function Answer({ c, compact }: { c: TouchpointCopy; compact?: boolean }) {
  return (
    <div className="flex gap-2">
      <span className="grid size-[22px] shrink-0 place-items-center rounded-full bg-action text-white">
        <ProductMark className="block size-3" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[10.5px] font-medium leading-[22px] text-ink">{BRAND_NAME}</p>
        <ul className="mt-1 space-y-1">
          {c.steps.map((step) => (
            <li key={step} className="flex items-center gap-1.5 text-[9.5px] text-muted">
              <Check />
              {step}
            </li>
          ))}
        </ul>
        <p className={`mt-2 text-[10.5px] leading-snug text-ink ${compact ? "line-clamp-3" : ""}`}>{c.reply}</p>
        <div className="mt-2 inline-flex max-w-full items-center gap-1.5 rounded-lg border border-line-soft px-2 py-1.5">
          <span className="size-1.5 shrink-0 rounded-full bg-[#24a148]" />
          <span className="truncate text-[9.5px] text-ink">{c.done}</span>
        </div>
      </div>
    </div>
  );
}

/* The person's ask: their photo and the prompt in a blue bubble. */
function Ask({ c, desk }: { c: TouchpointCopy; desk?: boolean }) {
  return (
    <div className="flex items-end justify-end gap-1.5">
      <p className={`max-w-[78%] bg-action text-white ${desk ? "rounded rounded-br-[2px] px-2.5 py-1.5 text-[9.5px] leading-snug" : "rounded-lg rounded-br-[3px] px-3 py-2 text-[9.5px] leading-snug"}`}>{c.prompt}</p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={AVATAR} alt="" className="size-[22px] shrink-0 rounded-full object-cover" loading="lazy" />
    </div>
  );
}

/* The run as it is on iOS: the status bar around the island, the project's
   header, the chat, and the composer over the home bar. */
function PhoneRun({ c }: { c: TouchpointCopy }) {
  return (
    <>
      <div className="flex h-[30px] shrink-0 items-center justify-between px-5 pt-1 text-[10px] font-semibold text-ink">
        <span>9:41</span>
        <span className="flex items-center gap-1">
          <svg viewBox="0 0 18 12" className="h-2 w-3" fill="currentColor"><rect x="0" y="8" width="3" height="4" rx="1" /><rect x="5" y="5.5" width="3" height="6.5" rx="1" /><rect x="10" y="3" width="3" height="9" rx="1" /><rect x="15" y="0" width="3" height="12" rx="1" /></svg>
          <svg viewBox="0 0 24 12" className="h-2.5 w-5" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="0.6" y="0.6" width="20" height="10.8" rx="3" /><rect x="2.4" y="2.4" width="14" height="7.2" rx="1.6" fill="currentColor" stroke="none" /><path d="M22.4 4.2v3.6" strokeLinecap="round" /></svg>
        </span>
      </div>
      <div className="flex shrink-0 items-center gap-2 border-b border-line-soft px-3 pb-2 pt-1.5">
        <svg viewBox="0 0 16 16" className="size-3 text-action" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 3L5 8l5 5" /></svg>
        <span className="min-w-0 flex-1 truncate text-center text-[11px] font-semibold text-ink">{c.project}</span>
        <span className="size-3" />
      </div>
      <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-hidden px-3 pt-3">
        <Ask c={c} />
        <Answer c={c} compact />
      </div>
      <div className="shrink-0 px-2.5 pb-1.5 pt-2">
        <div className="flex h-8 items-center gap-2 rounded-full border border-line pl-2 pr-1">
          <span className="grid size-5 shrink-0 place-items-center rounded-full bg-fill-1 text-[12px] leading-none text-muted">+</span>
          <span className="min-w-0 flex-1 truncate text-[10px] text-muted">{c.ask}</span>
          <span className="grid size-6 shrink-0 place-items-center rounded-full bg-action text-white">
            <svg viewBox="0 0 16 16" className="size-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 13V3M4 7l4-4 4 4" /></svg>
          </span>
        </div>
        <div className="mx-auto mt-2 h-1 w-20 rounded-full bg-ink" />
      </div>
    </>
  );
}

/* The same run at desktop size: the app's rail on the left, the chat on the
   right, filling the Mac's screen. */
function DesktopRun({ c }: { c: TouchpointCopy }) {
  return (
    <div className="absolute inset-0 flex text-left [zoom:0.66]">
      <div className="flex w-11 shrink-0 flex-col items-center gap-3.5 border-r border-line-soft bg-fill-1 py-4 text-muted">
        <span className="grid size-6 place-items-center rounded-md bg-action text-white">
          <ProductMark className="block size-3.5" />
        </span>
        <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M8 3.5v9M3.5 8h9" /></svg>
        <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2.5" y="2.5" width="11" height="11" rx="2" /><path d="M2.5 6.5h11" /></svg>
        <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="7" cy="7" r="4" /><path d="M10 10l3.5 3.5" /></svg>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={AVATAR} alt="" className="mt-auto size-6 rounded-full object-cover" loading="lazy" />
      </div>
      {/* The chat, on the screen's left (the half the card shows): the thread
          takes what height is left and clips, so the prompt box always shows
          at the foot of the screen. */}
      <div className="flex min-w-0 flex-1 flex-col px-6 pb-3 pt-4">
        <div className="flex shrink-0 items-center gap-2 border-b border-line-soft pb-2">
          <span className="truncate text-[11px] font-medium text-ink">{c.project}</span>
          <span className="text-[9px] text-muted">Today</span>
        </div>
        <div className="min-h-0 flex-1 overflow-hidden">
          <div className="mt-4 flex w-full max-w-[250px] flex-col gap-3">
            <Ask c={c} desk />
            <Answer c={c} compact />
          </div>
        </div>
        {/* The prompt box: slim, square-cornered, with attach and send. */}
        <div className="mt-2 flex h-7 w-full max-w-[250px] shrink-0 items-center gap-1.5 rounded-lg border border-line bg-white pl-1.5 pr-1 shadow-[0_1px_2px_rgb(0_0_0/0.04)]">
          <svg viewBox="0 0 16 16" className="size-3 shrink-0 text-muted" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M8 3.5v9M3.5 8h9" /></svg>
          <span className="min-w-0 flex-1 truncate text-[9px] text-muted">{c.ask}</span>
          <span className="grid size-5 shrink-0 place-items-center rounded-md bg-action text-white">
            <svg viewBox="0 0 16 16" className="size-2.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 13V3M4 7l4-4 4 4" /></svg>
          </span>
        </div>
      </div>
    </div>
  );
}
