import { TOPAZ_MEDIA } from "../media.constants";

/* Topaz's "Every pixel. Perfect." band with the line set over the picture.
   Here it plays Topaz's own video-upscale clip as a muted loop (Hamza, 19 Oct:
   "we don't need a slider, just play this video"); the clip is square, so
   the 16:9 band crops it top and bottom with object-cover. */
export function Showcase() {
  const v = TOPAZ_MEDIA.tz.videoUpscale;
  return (
    <section id="every-pixel" className="px-2 pt-4 sm:px-3">
      <div className="relative isolate overflow-hidden rounded-[24px] bg-[#1a2230] sm:rounded-[36px]" style={{ aspectRatio: 16 / 9 }}>
        <video src={v.src} poster={v.poster} autoPlay loop muted playsInline preload="metadata" aria-hidden="true" className="absolute inset-0 -z-10 size-full object-cover" />
        <span aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-black/20" />
        <div className="pointer-events-none absolute inset-0 grid place-items-center">
          <h2 className="t-statement px-6 text-center font-display font-medium text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.5)]">
            Every pixel. <span className="font-serif text-[1.12em] font-normal italic">Perfect.</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
