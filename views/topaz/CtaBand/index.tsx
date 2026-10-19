import { topazConfig } from "../config";

/* Topaz's centred CTA band, their lines verbatim; "cloud" instead of "local and cloud" since the API renders in the cloud. */
export function CtaBand() {
  return (
    <section className="border-y border-[#ededed] bg-[#f6f6f7] py-20 lg:py-24">
      <div className="container-page flex flex-col items-center text-center">
        <h2 className="max-w-3xl font-display text-[32px] font-medium leading-[1.08] tracking-[-0.03em] text-ink sm:text-[44px]">
          12 groundbreaking AI tools.
          <br />
          Trained on millions of images.
        </h2>
        <p className="mt-4 text-[16px] text-black/55">Plus, unlimited cloud rendering.</p>
        <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.08em] text-black/40">Upscale, denoise, sharpen and more</p>
        <a href={topazConfig.links.start} className="btn-primary mt-3">
          Start enhancing
        </a>
      </div>
    </section>
  );
}
