import { SectionHead } from "@/views/mag/SectionHead";
import { GROUPS } from "./Features.constants";

/* Manus's features index ("Explore all Manus features") as five columns of
   hairline rows: the group's title, then each feature's name and line. */
export function Features() {
  return (
    <section id="features" className="border-t border-[#ededed] py-20">
      <div className="mag-container">
        <SectionHead
          title="Explore all Manus features"
          description="Build apps, create media, research the web, automate recurring work and connect the tools you already use."
        />
        <ul className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {GROUPS.map((g) => (
            <li key={g.name}>
              <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-action">{g.name}</p>
              <h3 className="mt-2 font-display text-[18px] font-medium leading-[1.2] tracking-[-0.02em] text-ink">{g.title}</h3>
              <ul className="mt-4 border-t border-[#ededed]">
                {g.items.map(([name, line]) => (
                  <li key={name} className="border-b border-[#ededed] py-3">
                    <p className="text-[14px] font-medium text-ink">{name}</p>
                    <p className="mt-0.5 text-[13px] leading-snug text-black/50">{line}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
