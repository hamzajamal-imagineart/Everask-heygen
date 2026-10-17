"use client";

import { SectionHead } from "../SectionHead";
import { HG_MEDIA } from "../media.constants";
import { useStories } from "./use-stories";

export function Stories() {
  const { story, prev, next } = useStories();

  return (
    <section id="stories" className="bg-hg-page pt-20 pb-20 lg:pt-[120px]">
      <div className="hg-container">
        <SectionHead badge="Customer Stories" icon={HG_MEDIA.iconStories} tint="#bfd5ff" title="Powering ambitious teams worldwide">
          From solo creators to global enterprises, see the stories people are telling with HeyGen and the new possibilities AI
          video unlocks for every kind of creator.
        </SectionHead>
        <div className="mt-[60px] grid items-center gap-10 lg:grid-cols-2 lg:gap-[60px]">
          <div className="tile rounded-[24px]">
            <img src={story.image} alt="" className="aspect-[16/9] w-full object-cover" />
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 sm:flex-row">
              {story.stats.map((stat) => (
                <div key={stat.label} className="flex flex-1 flex-col items-center gap-1 rounded-2xl bg-tint px-8 py-5 text-center">
                  <span className="hg-h3 text-[44px] leading-none text-cobalt">{stat.value}</span>
                  <span className="text-[14px] leading-[1.4] font-medium text-body">{stat.label}</span>
                </div>
              ))}
            </div>
            <p className="hg-h3 text-[24px] leading-[1.25] text-ink md:text-[30px]">{story.quote}</p>
            <div className="text-[15px] leading-[1.5] text-body">
              <p>{story.name}</p>
              <p>{story.role}</p>
            </div>
            <div className="flex gap-3">
              <button type="button" aria-label="Previous testimonial" onClick={prev} className="rail-btn cursor-pointer">
                <svg viewBox="0 0 16 16" className="size-4 rotate-180" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
              </button>
              <button type="button" aria-label="Next testimonial" onClick={next} className="rail-btn cursor-pointer">
                <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
