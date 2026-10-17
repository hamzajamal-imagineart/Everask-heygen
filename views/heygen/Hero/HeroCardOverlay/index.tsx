import type { HeroCard } from "../Hero.types";

export function HeroCardOverlay({ card }: { card: HeroCard }) {
  return (
    <>
      <span className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/35 to-transparent" />
      <span className="absolute inset-x-3 top-[7%] text-center text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.25)]">
        <span className="block text-[clamp(11px,6.4cqi,15px)] leading-tight font-semibold tracking-[-0.01em]">{card.title}</span>
        <span className="mt-1 block text-[clamp(9px,4.6cqi,11px)] font-medium opacity-85">{card.subtitle}</span>
      </span>
      <span className="absolute top-1/2 left-1/2 flex size-[clamp(34px,17cqi,44px)] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_6px_18px_-6px_rgba(0,0,0,0.35)]">
        <svg viewBox="0 0 24 24" className="ml-0.5 size-[45%] fill-[#131318]" aria-hidden="true">
          <path d="M7 4.5v15a1 1 0 0 0 1.53.85l12-7.5a1 1 0 0 0 0-1.7l-12-7.5A1 1 0 0 0 7 4.5Z" />
        </svg>
      </span>
    </>
  );
}
