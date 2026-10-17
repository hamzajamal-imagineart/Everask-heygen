import { SectionHead } from "../SectionHead";
import { HG_MEDIA } from "../media.constants";
import { COMMUNITY_EVENTS } from "./Community.constants";

export function Community() {
  return (
    <section id="community" className="overflow-hidden bg-hg-page py-20 lg:py-[120px]">
      <div className="hg-container flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHead badge="Events" icon={HG_MEDIA.iconEvents} tint="#f3f1eb" title="HeyGen Community" align="left">
          Join us for our upcoming meetups. Whether you&apos;re a beginner or an experienced user, there&apos;s something for
          everyone. Don&apos;t miss out on the opportunity to learn, grow, and be inspired by the Geniverse community!
        </SectionHead>
      </div>
      <div className="hg-scroll mt-[50px] flex snap-x gap-4 overflow-x-auto px-6 lg:pl-[max(24px,calc((100vw-75rem)/2))]">
        {COMMUNITY_EVENTS.map((event) => (
          <div key={event.title} className="tile group relative h-[251px] w-[min(334px,calc(100vw-48px))] shrink-0 snap-start">
            <img src={event.image} alt="" className="size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] motion-reduce:transition-none" />
            <p className="glass-dark absolute bottom-3 left-3 max-w-[calc(100%-24px)] rounded-full px-3 py-1 text-[12px] font-medium">{event.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
