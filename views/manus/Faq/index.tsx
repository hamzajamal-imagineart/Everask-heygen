"use client";

import { useFaq } from "@/views/mag/Faq/use-faq";
import { FAQ_ITEMS } from "./Faq.constants";

/* The Magnific page's FAQ shape (EverAsk's two-column hairline rows, ink plus/minus, first open). */
export function Faq() {
  const { open, toggle } = useFaq();
  return (
    <section id="faq" className="border-t border-[#ededed] py-20">
      <div className="mag-container flex flex-col gap-10 lg:flex-row lg:gap-20">
        <div className="flex shrink-0 flex-col items-start gap-6 lg:w-[300px]">
          <h2 className="font-display text-[24px] leading-[1.25] font-medium tracking-[-0.03em] text-[#131318]">Answers to your top questions</h2>
        </div>
        <ul className="flex min-w-0 flex-1 flex-col">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = open[index];
            const panelId = `manus-faq-${index}`;
            return (
              <li key={item.question} className="border-b border-[#ededed] py-5 first:pt-0">
                <button type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => toggle(index)} className="flex w-full cursor-pointer items-center justify-between gap-6 text-left">
                  <span className="text-base leading-[1.6] font-medium text-[#131318]">{item.question}</span>
                  <span aria-hidden="true" className="relative size-4 shrink-0">
                    <span className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 rounded bg-[#131318]" />
                    <span className={`absolute inset-y-0 left-1/2 w-[2px] -translate-x-1/2 rounded bg-[#131318] transition-transform duration-300 ${isOpen ? "scale-y-0" : "scale-y-100"}`} />
                  </span>
                </button>
                <div id={panelId} hidden={!isOpen} className="pt-3">
                  <p className="max-w-[760px] text-[15px] leading-relaxed text-black/50">{item.answer}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
