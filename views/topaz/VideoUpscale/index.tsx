import { SectionHead } from "@/views/mag/SectionHead";
import { VideoCompare } from "../VideoCompare";
import { topazVideoConfig as topazConfig } from "../config";
import { VIDEO_FEATURES, VIDEO_PAIRS } from "./VideoUpscale.constants";

/* The video half (Hamza, 19 Oct: "we are offering both image and video
   upscales"): Topaz's video-upscale page in EverAsk's register. Their
   "Upscale almost any video." line and intro, then their four audiences on
   their own before/after clips as synced video sliders, two rows of a
   portrait beside a landscape clip with equal heights (Hamza: the 5/7-column
   bento "looks imbalanced"), each at the clip's own ratio, then their key
   features as a hairline list beside the "Why" lines. */
export function VideoUpscale() {
  return (
    <section id="video" className="border-t border-[#ededed] py-20 lg:py-28">
      <div className="mag-container">
        <SectionHead
          title="Upscale almost any video."
          description="Our AI video upscaling technology is built from the ground up to deliver premium results. With millions of video frames processed, our video upscaler makes it easy to enhance your footage to 1080p or 4K. Preserve detail, improve clarity, and enhance motion."
        />
        {/* Two rows, each a portrait clip beside a landscape one. The column widths are the clips'
            ratios (0.8fr : 1.78fr), so both tiles in a row come out the same height with nothing
            cropped; the second row is mirrored. Phones stack them. */}
        <div className="mt-10 flex flex-col gap-4">
          {[VIDEO_PAIRS.slice(0, 2), [...VIDEO_PAIRS.slice(2, 4)].reverse()].map((row, r) => (
            <ul
              key={r}
              className="grid grid-cols-1 gap-4 md:[grid-template-columns:var(--cols)]"
              style={{ "--cols": row.map((v) => `${v.pair.ratio}fr`).join(" ") } as React.CSSProperties}
            >
              {row.map((v, i) => (
                <li key={v.label} className="min-w-0">
                  <VideoCompare before={v.pair.before} after={v.pair.after} poster={v.pair.poster} ratio={v.pair.ratio} label={v.label} handleY={v.pair.ratio < 1 ? 60 : 50} demo={r === 0 && i === 0} />
                  <p className="mt-3 px-1 text-[14px] text-black/50">{v.line}</p>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h3 className="font-display text-[28px] font-medium leading-[1.1] tracking-[-0.03em] text-ink sm:text-[34px]">Why Topaz's video upscaler</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-black/55">
              Most tools just stretch your footage. Topaz's AI video upscaler actually upscales video the smart way, recreating fine details and sharpening motion. Whether you're restoring old clips or leveling up new content, the results speak for themselves.
            </p>
            <ul className="mt-6 space-y-2 text-[15px] text-ink">
              <li className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-action" />Fine motion detail. Sharpen edges and smooth frame transitions.</li>
              <li className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-action" />Natural clarity. Remove pixelation, blur, and noise.</li>
              <li className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-action" />High-resolution output. Ideal for YouTube, social media, or display.</li>
            </ul>
            <a href={topazConfig.links.start} className="btn-primary mt-8">
              Start upscaling video
            </a>
          </div>
          <ul className="border-t border-[#ededed] lg:col-span-7">
            {VIDEO_FEATURES.map((f) => (
              <li key={f.name} className="grid gap-1 border-b border-[#ededed] py-5 sm:grid-cols-[200px_minmax(0,1fr)] sm:gap-6">
                <h4 className="font-display text-[17px] font-medium leading-snug tracking-[-0.01em] text-ink">{f.name}</h4>
                <p className="text-[14px] leading-relaxed text-black/50">{f.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
