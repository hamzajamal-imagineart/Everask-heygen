import { HoldToEnhance } from "../HoldToEnhance";
import { TopazWordmark } from "../Hero/TopazWordmark";
import { TOPAZ_MEDIA } from "../media.constants";
import { topazConfig } from "../config";

/* Topaz's dark "Meet Topaz Photo" block: the lockup, "Each tool gets it
   closer to perfect." and its paragraph centred, then one big Denoise
   before/after, then a grid of hold-to-enhance tiles with a photographer's
   quote among them; under it their rendering note. Topaz's own pairs where
   they have one (wren, cow, face, lighting, remove), ours for Color and
   Upscale; every tile at its picture's own ratio. */
const TILES = [
  { label: "Sharpen", pair: TOPAZ_MEDIA.tz.cow, ratio: TOPAZ_MEDIA.tz.cow.ratio },
  { label: "Recover Faces", pair: TOPAZ_MEDIA.tz.face, ratio: TOPAZ_MEDIA.tz.face.ratio },
  { label: "Lighting", pair: TOPAZ_MEDIA.tz.lighting, ratio: TOPAZ_MEDIA.tz.lighting.ratio },
  { label: "Color", pair: TOPAZ_MEDIA.hero.color, ratio: 16 / 9 },
  { label: "Remove", pair: TOPAZ_MEDIA.tz.remove, ratio: TOPAZ_MEDIA.tz.remove.ratio },
  { label: "Upscale", pair: TOPAZ_MEDIA.hero.upscale, ratio: 16 / 9 },
];

export function Meet() {
  return (
    <section id="meet" className="mt-4 bg-[#0d1117] py-20 text-white lg:py-28">
      <div className="container-page">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-white/40">Meet Topaz Photo</p>
          <span className="mt-6 inline-flex items-center gap-3 rounded-pill bg-white/10 py-1.5 pl-1.5 pr-4 text-[14px] font-medium">
            <span className="grid size-8 place-items-center rounded-full bg-white text-ink">
              <TopazWordmark className="h-3 w-auto" />
            </span>
            Topaz Photo
          </span>
          <h2 className="mt-6 font-display text-[34px] font-medium leading-[1.08] tracking-[-0.03em] sm:text-[48px]">Each tool gets it closer to perfect.</h2>
          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-white/60">
            The ultimate finishing step for every image. Fix issues. Restore focus. Remove noise. Enhance details. Crop in. Prepare for print. Topaz Photo is the magical last step before done. All using AI trained on millions of images.
          </p>
        </div>

        <div className="mt-14">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.08em] text-white/40">Enhanced by Denoise</p>
          <HoldToEnhance before={TOPAZ_MEDIA.tz.wren.before} after={TOPAZ_MEDIA.tz.wren.after} label="Denoise" ratio={TOPAZ_MEDIA.tz.wren.ratio} />
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2 md:items-start">
          {TILES.slice(0, 2).map((t) => (
            <HoldToEnhance key={t.label} before={t.pair.before} after={t.pair.after} label={t.label} ratio={t.ratio} />
          ))}
          <blockquote className="flex flex-col justify-between rounded-2xl bg-white/[0.06] p-7">
            <p className="font-display text-[20px] font-medium leading-snug tracking-[-0.01em] text-white sm:text-[22px]">
              “The sun had already set and it was almost too dark. With some editing adjustments and denoise with @topazlabs, I was able to save the image.”
            </p>
            <footer className="mt-6 flex items-center gap-3 text-[13px] text-white/55">
              <span className="grid size-8 place-items-center rounded-full bg-white/10 font-medium text-white">J</span>
              Julia Cook, Wildlife Photographer
            </footer>
          </blockquote>
          {TILES.slice(2).map((t) => (
            <HoldToEnhance key={t.label} before={t.pair.before} after={t.pair.after} label={t.label} ratio={t.ratio} />
          ))}
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-white/[0.06] p-8">
            <h3 className="font-display text-[24px] font-medium leading-[1.15] tracking-[-0.02em]">Unlimited cloud rendering.</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-white/60">Take the pressure off your hardware with cloud rendering. You'll get the fastest processing times with the latest AI models. Inside EverAsk, that is how every Topaz job runs.</p>
          </div>
          <div className="rounded-2xl bg-white/[0.06] p-8">
            <h3 className="font-display text-[24px] font-medium leading-[1.15] tracking-[-0.02em]">A seamless addition to your workflow.</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-white/60">Topaz Photo sits in the EverAsk agent next to the other models you use, so an enhance is one prompt away from the rest of the job.</p>
            <a href={topazConfig.links.start} className="mt-5 inline-flex h-10 items-center rounded-pill bg-white px-5 text-[14px] font-medium text-ink hover:bg-white/90">
              Start enhancing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
