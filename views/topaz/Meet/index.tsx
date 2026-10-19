import { HoldToEnhance } from "../HoldToEnhance";
import { TopazWordmark } from "../Hero/TopazWordmark";
import { TOPAZ_MEDIA } from "../media.constants";
import { topazConfig } from "../config";

/* Topaz's "Meet Topaz Photo" block, in light mode (Hamza, 19 Oct): the lockup, "Each tool gets it
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
    <section id="meet" className="mt-4 border-t border-[#ededed] py-20 text-ink lg:py-28">
      <div className="container-page">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-black/40">Meet Topaz Photo</p>
          <span className="mt-6 inline-flex items-center gap-3 rounded-pill bg-fill-1 py-1.5 pl-1.5 pr-4 text-[14px] font-medium text-ink">
            <span className="grid size-8 place-items-center rounded-full bg-ink text-white">
              <TopazWordmark className="h-3 w-auto" />
            </span>
            Topaz Photo
          </span>
          <h2 className="mt-6 font-display text-[34px] font-medium leading-[1.08] tracking-[-0.03em] text-ink sm:text-[48px]">Each tool gets it closer to perfect.</h2>
          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-black/55">
            The ultimate finishing step for every image. Fix issues. Restore focus. Remove noise. Enhance details. Crop in. Prepare for print. Topaz Photo is the magical last step before done. All using AI trained on millions of images.
          </p>
        </div>

        <div className="mt-14">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.08em] text-black/40">Enhanced by Denoise</p>
          <HoldToEnhance before={TOPAZ_MEDIA.tz.wren.before} after={TOPAZ_MEDIA.tz.wren.after} label="Denoise" ratio={TOPAZ_MEDIA.tz.wren.ratio} />
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2 md:items-start">
          {TILES.slice(0, 2).map((t) => (
            <HoldToEnhance key={t.label} before={t.pair.before} after={t.pair.after} label={t.label} ratio={t.ratio} />
          ))}
          <blockquote className="flex flex-col justify-between rounded-2xl bg-[#f6f6f7] p-7">
            <p className="font-display text-[20px] font-medium leading-snug tracking-[-0.01em] text-ink sm:text-[22px]">
              “The sun had already set and it was almost too dark. With some editing adjustments and denoise with @topazlabs, I was able to save the image.”
            </p>
            <footer className="mt-6 flex items-center gap-3 text-[13px] text-black/50">
              <span className="grid size-8 place-items-center rounded-full bg-ink font-medium text-white">J</span>
              Julia Cook, Wildlife Photographer
            </footer>
          </blockquote>
          {TILES.slice(2).map((t) => (
            <HoldToEnhance key={t.label} before={t.pair.before} after={t.pair.after} label={t.label} ratio={t.ratio} />
          ))}
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-[#f6f6f7] p-8">
            <h3 className="font-display text-[24px] font-medium leading-[1.15] tracking-[-0.02em] text-ink">Unlimited cloud rendering.</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-black/55">Take the pressure off your hardware with cloud rendering. You'll get the fastest processing times with the latest AI models. Inside EverAsk, that is how every Topaz job runs.</p>
          </div>
          <div className="rounded-2xl bg-[#f6f6f7] p-8">
            <h3 className="font-display text-[24px] font-medium leading-[1.15] tracking-[-0.02em] text-ink">A seamless addition to your workflow.</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-black/55">Topaz Photo sits in the EverAsk agent next to the other models you use, so an enhance is one prompt away from the rest of the job.</p>
            <a href={topazConfig.links.start} className="btn-primary mt-5 !h-10 !px-5 text-[14px]">
              Start enhancing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
