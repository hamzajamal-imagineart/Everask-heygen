import { SectionHead } from "../SectionHead";
import { HG_MEDIA } from "../media.constants";
import { UPDATE_ITEMS } from "./Updates.constants";

export function Updates() {
  return (
    <section id="updates" className="overflow-hidden bg-hg-page pt-20 pb-0 lg:pt-[200px]">
      <div className="hg-container flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHead badge="Updates" icon={HG_MEDIA.iconUpdates} tint="#f3f1eb" title="What's new at HeyGen" align="left">
          Stay up to date with the latest from HeyGen, from new product releases and integrations to awards and milestones.
        </SectionHead>
      </div>
      <div className="hg-scroll mt-[50px] flex snap-x gap-4 overflow-x-auto px-6 pb-[120px] lg:pl-[max(24px,calc((100vw-75rem)/2))]">
        {UPDATE_ITEMS.map((item) => (
          <article
            key={item.title}
            className="card group flex w-[min(385px,calc(100vw-48px))] shrink-0 snap-start flex-col p-3"
          >
            <span className="tile relative block h-[220px]">
              <img src={item.image} alt="" className="size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] motion-reduce:transition-none" />
              <span className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-[11.5px] font-medium text-ink shadow-sm backdrop-blur">{item.date}</span>
            </span>
            <div className="flex flex-1 flex-col gap-3 p-5 pt-6">
              <h3 className="hg-h3 text-[22px] leading-[1.15] text-ink">{item.title}</h3>
              <p className="line-clamp-3 text-[15px] leading-relaxed text-body">{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
