import { TOPAZ_MEDIA } from "../media.constants";

/* Topaz's "Crystal clear. Highly detailed. Super focused." block: the heading
   and intro centred, then the big visual: Topaz's own video-upscale clip as a
   muted loop in its own square frame (Hamza, 19 Oct: "use the video here"). */
export function Toolbox() {
  const v = TOPAZ_MEDIA.tz.videoUpscale;
  return (
    <section id="showcase" className="border-t border-[#ededed] py-20">
      <div className="container-page flex flex-col items-center text-center">
        <h2 className="max-w-3xl font-display text-[32px] font-medium leading-[1.1] tracking-[-0.03em] text-ink sm:text-[44px]">Crystal clear. Highly detailed. Super focused.</h2>
        <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-black/55">
          Topaz Photo is an intelligent image enhancement software that lets you sharpen details, restore focus, and adjust levels on every shot you take. Choose from 11 AI-powered tools to perfect your images, or let autopilot get you started. Now inside EverAsk.
        </p>
        <div className="relative mt-10 w-full max-w-[900px] overflow-hidden rounded-[24px] bg-fill-1 sm:rounded-[32px]" style={{ aspectRatio: v.ratio }}>
          <video src={v.src} poster={v.poster} autoPlay loop muted playsInline preload="metadata" aria-hidden="true" className="absolute inset-0 size-full object-cover" />
        </div>
      </div>
    </section>
  );
}
