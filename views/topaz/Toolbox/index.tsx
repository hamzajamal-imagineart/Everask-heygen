import { HeroCompare } from "@/views/mag/Hero/HeroCompare";
import { TOPAZ_MEDIA } from "../media.constants";

/* Topaz's "Crystal clear. Highly detailed. Super focused." block: the heading
   and intro centred, then the big visual (theirs is the app window; ours is
   the Sharpen before/after as a draggable slider, in the still's own 16:9).
   The tool chip row that sat above it was removed (Hamza, 19 Oct). */
export function Toolbox() {
  return (
    <section id="showcase" className="border-t border-[#ededed] py-20">
      <div className="container-page flex flex-col items-center text-center">
        <h2 className="max-w-3xl font-display text-[32px] font-medium leading-[1.1] tracking-[-0.03em] text-ink sm:text-[44px]">Crystal clear. Highly detailed. Super focused.</h2>
        <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-black/55">
          Topaz Photo is an intelligent image enhancement software that lets you sharpen details, restore focus, and adjust levels on every shot you take. Choose from 11 AI-powered tools to perfect your images, or let autopilot get you started. Now inside EverAsk.
        </p>
        <div className="relative mt-10 w-full overflow-hidden rounded-[24px] bg-fill-1 sm:rounded-[32px]" style={{ aspectRatio: 16 / 9 }}>
          <HeroCompare before={TOPAZ_MEDIA.hero.sharpen.before} after={TOPAZ_MEDIA.hero.sharpen.after} handleY={86} />
        </div>
      </div>
    </section>
  );
}
