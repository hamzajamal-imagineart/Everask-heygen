import { ALL_FEATURES } from "./Features.constants";

/* Topaz's "All features": a two-column list of rows that open (native
   details/summary, a plus that turns into a minus). The "Latest features"
   cards that sat above it were removed (Hamza, 19 Oct). */
export function Features() {
  return (
    <section id="features" className="py-20 lg:py-24">
      <div className="container-page">
        <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-black/40">All features</p>
        <ul className="mt-5 grid gap-x-4 gap-y-3 md:grid-cols-2">
          {ALL_FEATURES.map((f) => (
            <li key={f.name}>
              <details className="group rounded-2xl bg-[#f6f6f7] px-6 py-1 open:pb-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 font-display text-[16px] font-medium tracking-[-0.01em] text-ink [&::-webkit-details-marker]:hidden">
                  {f.name}
                  <span aria-hidden className="relative size-4 shrink-0">
                    <span className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 rounded bg-ink" />
                    <span className="absolute inset-y-0 left-1/2 w-[2px] -translate-x-1/2 rounded bg-ink transition-transform duration-300 group-open:scale-y-0" />
                  </span>
                </summary>
                <p className="text-[14px] leading-relaxed text-black/50">{f.body}</p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
