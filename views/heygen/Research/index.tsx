import { Badge } from "../Badge";
import { HG_MEDIA } from "../media.constants";

export function Research() {
  return (
    <section id="research" className="hg-container py-20 lg:py-[120px]">
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-[60px]">
        <div className="flex flex-col items-start gap-[30px]">
            <Badge icon="research" tint="#edf3ff">
              HeyGen Research
            </Badge>
            <h2 className="hg-h2 max-w-[420px]" style={{ fontSize: "clamp(28px, 2.5vw, 36px)", lineHeight: 1.1 }}>
              Avatar V: Scaling video-reference avatar generation
            </h2>
            <p className="max-w-[450px] text-[15px] leading-[1.5] text-hg-ink-2">
              Built on a five-stage AI training pipeline that captures not just how you look, but how you move, gesture, and
              express yourself.
            </p>
        </div>
        <div className="card relative overflow-hidden p-3">
          <div className="relative grid gap-4 sm:grid-cols-2">
            <div className="tile relative aspect-[4/5]">
              <img src={HG_MEDIA.researchOriginal} alt="Original footage" className="size-full object-cover" />
              <span className="glass-dark absolute bottom-3 left-3 rounded-full px-2.5 py-1 text-[12px] font-medium">Original Footage</span>
            </div>
            <div className="tile relative aspect-[4/5]">
              <img src={HG_MEDIA.researchGenerated} alt="Avatar V generated" className="size-full object-cover" />
              <span className="glass-dark absolute bottom-3 left-3 rounded-full px-2.5 py-1 text-[12px] font-medium">Avatar V Generated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
