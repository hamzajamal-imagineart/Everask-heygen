import { SectionHead } from "@/views/mag/SectionHead";

/* Topaz's "Latest features": the three new models as EverAsk's soft cards, copy verbatim. */
const MODELS = [
  { name: "Wonder Model", tag: "Upscale", body: "Upscale, sharpen, and denoise all in just one click. The new Wonder model recovers previously unrecoverable images without settings to tune or decisions to make. Perfect for photos with extremely low resolution." },
  { name: "Standard MAX Model", tag: "Upscale", body: "An entirely new series of model for precise, true-to-input image restoration. The new standard for upscaling. Get higher quality, more natural, and more detailed restoration results. 100x faster than first-generation diffusion models." },
  { name: "Healing Brush", tag: "Retouch", body: "Fix small blemishes and artifacts." },
];

export function Models() {
  return (
    <section id="models" className="border-t border-[#ededed] py-20">
      <div className="mag-container">
        <SectionHead title="The latest Topaz models" description="New in Topaz Photo, and available through the same API EverAsk uses." />
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {MODELS.map((m) => (
            <li key={m.name} className="flex flex-col gap-3 rounded-2xl bg-[#f6f6f7] p-7">
              <span className="inline-flex w-max items-center gap-2 rounded-pill bg-white px-3 py-1 text-[12px] font-medium text-action">
                <span className="size-1.5 rounded-full bg-action" />
                New · {m.tag}
              </span>
              <h3 className="font-display text-[20px] font-medium leading-[1.25] tracking-[-0.02em] text-ink">{m.name}</h3>
              <p className="text-[15px] leading-relaxed text-black/50">{m.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
