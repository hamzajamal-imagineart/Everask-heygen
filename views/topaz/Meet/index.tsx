import { CompareTile } from "../CompareTile";
import { TopazMark } from "../Hero/TopazMark";
import { TOPAZ_MEDIA } from "../media.constants";
import { topazImageConfig as topazConfig } from "../config";

/* Topaz's "Meet Topaz Photo" block, in light mode (Hamza, 19 Oct): the lockup, "Each tool gets it
   closer to perfect." and its paragraph centred, then one big Denoise
   before/after, then a grid of hold-to-enhance tiles with a photographer's
   quote among them; under it their rendering note. Topaz's own pairs where
   they have one (wren, cow, face, lighting, remove), ours for Color and
   Upscale; every tile at its picture's own ratio. */
/* The bento under the Denoise strip, after Topaz's own: a 4-column, 8-half-row
   grid that is a square overall, every tile filling its cell. Left: Sharpen
   (2×4, square), the quote (2×2), Upscale (2×2). Right: Recover Faces (2×3),
   Lighting (2×2), Color and Remove (1×3 each). Phones stack them at 4:3. */
const CELL = "aspect-[4/3] md:aspect-auto";
const TILES = [
  { label: "Sharpen", pair: TOPAZ_MEDIA.tz.cow, handleY: 50, cell: "md:col-start-1 md:col-span-2 md:row-start-1 md:row-span-4" },
  { label: "Recover Faces", pair: TOPAZ_MEDIA.tz.face, handleY: 50, cell: "md:col-start-3 md:col-span-2 md:row-start-1 md:row-span-3" },
  { label: "Lighting", pair: TOPAZ_MEDIA.tz.lighting, handleY: 55, cell: "md:col-start-3 md:col-span-2 md:row-start-4 md:row-span-2" },
  { label: "Color", pair: TOPAZ_MEDIA.hero.color, handleY: 50, cell: "md:col-start-3 md:col-span-1 md:row-start-6 md:row-span-3" },
  { label: "Remove", pair: TOPAZ_MEDIA.tz.remove, handleY: 50, cell: "md:col-start-4 md:col-span-1 md:row-start-6 md:row-span-3" },
  { label: "Upscale", pair: TOPAZ_MEDIA.hero.upscale, handleY: 55, cell: "md:col-start-1 md:col-span-2 md:row-start-5 md:row-span-4" },
];

export function Meet() {
  return (
    <section id="meet" className="mt-4 border-t border-[#ededed] py-20 text-ink lg:py-28">
      <div className="container-page">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-black/40">Meet Topaz Photo</p>
          <span className="mt-6 inline-flex items-center gap-3 rounded-pill bg-fill-1 py-1.5 pl-1.5 pr-4 text-[14px] font-medium text-ink">
            <span className="grid size-8 place-items-center rounded-full bg-ink text-white">
              <TopazMark className="size-3.5" />
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
          <CompareTile before={TOPAZ_MEDIA.tz.wren.before} after={TOPAZ_MEDIA.tz.wren.after} label="Denoise" ratio={TOPAZ_MEDIA.tz.wren.ratio} handleY={80} />
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:aspect-square md:grid-cols-4 md:grid-rows-8">
          {TILES.map((t) => (
            <div key={t.label} className={`${CELL} ${t.cell}`}>
              <CompareTile before={t.pair.before} after={t.pair.after} label={t.label} handleY={t.handleY} />
            </div>
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
