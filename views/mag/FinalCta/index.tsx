import { magConfig } from "../config";
import { EVERASK_BRAND } from "../Lockup/Lockup.constants";
import { MAG_MEDIA } from "../media.constants";
import { HERO_SUBHEAD, HERO_TONE } from "../Hero/Hero.constants";

/* EverAsk's sky FinalCta (components/landing/FinalCta.tsx): the page closes
   where it opened, the hero clip's first frame in a rounded band, the line in white with
   its second half in the serif, a white pill and a glass pill. */
export function FinalCta() {
  return (
    <section id="get-started" className="px-2 pt-10 pb-3 sm:px-3">
      <div className="relative isolate overflow-hidden rounded-[24px] py-24 sm:rounded-[36px] lg:py-32" style={{ backgroundColor: HERO_TONE }}>
        <img src={MAG_MEDIA.heroPoster} alt="" loading="lazy" className="absolute inset-0 -z-10 size-full object-cover object-[50%_70%]" />
        <span aria-hidden className="absolute inset-0 -z-10" style={{ backgroundImage: `linear-gradient(to bottom, ${HERO_TONE}f2 0%, ${HERO_TONE}b3 45%, ${HERO_TONE}33 100%)` }} />
        <div className="container-page text-center">
          <h2 className="t-statement mx-auto max-w-3xl font-display font-medium text-white">
            Be Magnific,
            <br />
            <span className="font-serif text-[1.12em] font-normal italic">inside EverAsk.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/85">{HERO_SUBHEAD}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href={magConfig.links.start} className="btn-primary !bg-white !text-ink hover:!bg-white/90">
              Start creating
            </a>
            <a href={`${EVERASK_BRAND.site}/pricing`} className="glass inline-flex h-12 items-center rounded-pill px-7 text-[16px] font-medium">
              See pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
