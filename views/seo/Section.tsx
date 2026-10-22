import type { ReactNode } from "react";

/* EverAsk's Section (components/landing/Section.tsx): the section's name,
   one hairline above, the content below. `intro` sits on the title's line. */
export function Section({ id, title, intro, children }: { id?: string; title: string; intro?: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-line-soft py-16 lg:py-20 [.hero-end+&]:border-t-0 [&#how-it-works]:border-t-0 [#how-it-works+&]:border-t-0">
      <div className="container-page">
        <div className="flex flex-wrap items-baseline justify-between gap-x-12 gap-y-3">
          <h2 className="t-title">{title}</h2>
          {intro && <p className="max-w-md text-[15px] leading-relaxed text-muted">{intro}</p>}
        </div>
        <div className="mt-8 lg:mt-10">{children}</div>
      </div>
    </section>
  );
}
