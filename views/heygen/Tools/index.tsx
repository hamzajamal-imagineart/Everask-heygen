import { Badge } from "../Badge";
import { CtaButton } from "../CtaButton";
import { heygenConfig } from "../config";
import { HG_MEDIA } from "../media.constants";
import { TOOL_ITEMS } from "./Tools.constants";

export function Tools() {
  return (
    <section id="tools" className="relative isolate overflow-hidden bg-hg-cyan-soft">
      <div className="hg-container relative py-20 lg:py-[120px]">
        <div className="flex flex-col gap-5">
          <Badge icon={HG_MEDIA.iconGift} tint="#fff">
            AI Tools
          </Badge>
          <h2 className="hg-h2 max-w-[800px] text-hg-ink">Powerful AI tools for any creator</h2>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="hg-lede max-w-[700px]">
              EverAsk&apos;s AI video tools handle everything from avatar generation and voice cloning to captions, translation, and
              turning any input into polished video.
            </p>
            <CtaButton href={heygenConfig.links.start} label="Get started for free" arrow />
          </div>
        </div>
        <div className="mt-[60px]">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {TOOL_ITEMS.map((tool) => (
              <div key={tool.title} className="card group flex flex-col p-3">
                <span className="tile block h-[170px] w-full">
                  <img src={tool.image} alt="" className="size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] motion-reduce:transition-none" />
                </span>
                <span className="flex flex-1 flex-col gap-3 p-5 pt-6">
                  <span className="hg-h3 text-[22px] leading-[1.15] text-ink">{tool.title}</span>
                  <span className="text-[15px] leading-relaxed text-body">{tool.text}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
