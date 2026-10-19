"use client";

import { useFaq } from "@/views/mag/Faq/use-faq";
import { FAQ_ITEMS } from "./Faq.constants";

/* Topaz's FAQ shape: the label, then one centred column of rounded rows that open. */
export function Faq() {
  const { open, toggle } = useFaq();
  return (
    <section id="faq" className="border-t border-[#ededed] py-20">
      <div className="container-page">
        <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-black/40">Frequently asked questions</p>
        <ul className="mx-auto mt-10 flex max-w-3xl flex-col gap-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = open[index];
            const panelId = `topaz-faq-${index}`;
            return (
              <li key={item.question} className="rounded-2xl bg-[#f6f6f7] px-6">
                <button type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => toggle(index)} className="flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left">
                  <span className="text-[16px] font-medium text-ink">{item.question}</span>
                  <svg aria-hidden viewBox="0 0 20 20" className={`size-4 shrink-0 text-ink transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                    <path d="m5 8 5 5 5-5" />
                  </svg>
                </button>
                <div id={panelId} hidden={!isOpen} className="pb-5">
                  <p className="text-[15px] leading-relaxed text-black/55">{item.answer}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
