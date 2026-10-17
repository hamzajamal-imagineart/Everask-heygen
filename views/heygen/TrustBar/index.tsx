import { HG_MEDIA } from "../media.constants";
import { TRUST_FADE_LEFT, TRUST_FADE_RIGHT, TRUST_LOGOS } from "./TrustBar.constants";

export function TrustBar() {
  return (
    <section className="bg-hg-page pb-[60px]">
      <div className="hg-container py-5">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[14px] font-medium text-black">
          <span className="flex items-center gap-2">
            <img src={HG_MEDIA.iconG2} alt="G2" className="size-8" />
            <span className="flex items-center gap-1" aria-label="4.8 out of 5 stars">
              {[0, 1, 2, 3, 4].map((star) => (
                <img key={star} src={HG_MEDIA.iconStar} alt="" className="h-3.5 w-4" />
              ))}
            </span>
            4.8 / 5 from 1,000+ reviews
          </span>
          <span className="hidden h-5 w-0.5 bg-hg-cyan md:block" aria-hidden="true" />
          <span className="flex items-center gap-2">
            <img src={HG_MEDIA.iconG2} alt="" className="size-8" />
            G2 #1 Most realistic avatars
          </span>
          <span className="hidden h-5 w-0.5 bg-hg-cyan md:block" aria-hidden="true" />
          <span className="flex items-center gap-2">
            <img src={HG_MEDIA.iconForbes} alt="Forbes" className="size-8 rounded-full" />
            Forbes AI 50 Company
          </span>
        </div>
        <div className="relative mt-6 overflow-hidden py-2.5">
          <div className="hg-marquee items-center">
            {[...TRUST_LOGOS, ...TRUST_LOGOS].map((logo, index) => (
              <img key={`${logo.src}-${index}`} src={logo.src} alt="" className="h-[60px] shrink-0 object-contain" style={{ width: logo.width }} />
            ))}
          </div>
          <span className="pointer-events-none absolute inset-y-0 left-0 w-10" style={{ backgroundImage: TRUST_FADE_LEFT }} aria-hidden="true" />
          <span className="pointer-events-none absolute inset-y-0 right-0 w-10" style={{ backgroundImage: TRUST_FADE_RIGHT }} aria-hidden="true" />
        </div>
        <div className="mt-8 flex items-center gap-4">
          <p className="text-[14px] font-medium text-black md:shrink-0">Trusted by over 1,000,000 developers and leading companies.</p>
          <span className="hidden h-px flex-1 bg-black/10 md:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
