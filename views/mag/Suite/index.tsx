import { SUITE_ROWS } from "./Suite.constants";

/* Magnific's upscalers in the magnific.com suite layout (Hamza, 19 Oct): a
   centred heading, then equal two-column rows, the text on the left and the
   16:9 clip on the right for the first row, swapping every row, in EverAsk's
   type and tokens. Each row eases up as it scrolls into view (styles.css,
   .mag-zfold-row). On phones the clip sits above its text. */
export function Suite() {
  return (
    <section id="suite" className="border-t border-[#ededed] py-20">
      <div className="mag-container">
        <h2 className="mx-auto max-w-3xl text-center font-display text-[30px] leading-[1.15] font-medium tracking-[-0.03em] text-ink sm:text-[36px]">
          Every Magnific upscaler. Inside EverAsk.
        </h2>
        <ul className="flex flex-col gap-12 pt-14 md:gap-16">
          {SUITE_ROWS.map((row, i) => (
            <li key={row.title} className="mag-zfold-row grid items-center gap-6 sm:grid-cols-2 sm:gap-12 md:gap-14 lg:gap-20">
              <div className={`w-full ${i % 2 === 0 ? "sm:order-2" : ""}`}>
                <div className="relative aspect-video overflow-hidden rounded-2xl bg-fill-1">
                  {row.video ? (
                    <video src={row.video} aria-label={row.title} autoPlay loop muted playsInline preload="metadata" className="absolute inset-0 size-full object-cover" />
                  ) : (
                    <img src={row.image} alt={row.title} loading="lazy" className="absolute inset-0 size-full object-cover" />
                  )}
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="font-display text-[24px] font-medium leading-[1.1] tracking-[-0.015em] text-ink sm:text-[30px]">{row.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted sm:text-[16px]">{row.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
