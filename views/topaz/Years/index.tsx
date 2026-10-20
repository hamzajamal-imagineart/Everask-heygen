import { topazImageConfig as topazConfig } from "../config";
import { TOPAZ_MEDIA } from "../media.constants";

/* Topaz's "Trusted by pro photographers for 20+ years." two-column block: the
   claim, paragraph and CTA on the left; their four audiences as a 2×2 on the
   right, each with our picture above it (theirs have a small icon). */
const USE_CASES = [
  { title: "Wildlife & Astro Photography", body: "Zoom in with lossless crop, sharpen details, and denoise high ISO shots captured in unpredictable conditions.", image: TOPAZ_MEDIA.usecaseWildlife },
  { title: "Sports Photography", body: "Sharpen motion blur and denoise indoor shots with poor lighting.", image: TOPAZ_MEDIA.usecaseSports },
  { title: "Events & Weddings", body: "Never miss the important moment to low lighting or soft focus. Topaz Photo lets you fix the details without reshooting.", image: TOPAZ_MEDIA.usecaseEvents },
  { title: "Archival Images", body: "Remove dust and scratches, adjust lighting and color, and restore images to their original sharpness.", image: TOPAZ_MEDIA.usecaseArchival },
];

export function Years() {
  return (
    <section id="years" className="py-20 lg:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="text-[14px] text-black/50">
            <span className="font-medium text-ink">“Topaz Photo is an indispensable part of my editing workflow.”</span> Charles D, Trustpilot review
          </p>
          <h2 className="mt-8 font-display text-[36px] font-medium leading-[1.05] tracking-[-0.03em] text-ink sm:text-[48px]">Trusted by pro photographers for 20+ years.</h2>
          <p className="mt-5 max-w-md text-[16px] leading-relaxed text-black/55">
            You're getting the culmination of two decades of photo enhancement technology, all in Topaz Photo. What started as standalone denoising and sharpening tools are now more advanced than ever, in an all-in-one application.
          </p>
          <div className="mt-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-black/40">Get started today</p>
            <p className="mt-1 text-[14px] text-black/55">Upscale, denoise, sharpen and more</p>
            <a href={topazConfig.links.start} className="btn-primary mt-4">
              Start enhancing
            </a>
          </div>
        </div>
        <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:col-span-7">
          {USE_CASES.map((u) => (
            <li key={u.title}>
              <div className="relative overflow-hidden rounded-2xl bg-fill-1" style={{ aspectRatio: 16 / 9 }}>
                <img src={u.image} alt={u.title} loading="lazy" className="absolute inset-0 size-full object-cover" />
              </div>
              <h3 className="mt-4 flex items-center gap-2 font-display text-[17px] font-medium tracking-[-0.01em] text-ink">
                <span className="size-1.5 rounded-full bg-action" />
                {u.title}
              </h3>
              <p className="mt-1.5 text-[14px] leading-relaxed text-black/50">{u.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
