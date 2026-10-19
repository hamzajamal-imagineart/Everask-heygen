"use client";

import { FAQ_ITEMS } from "./Faq.constants";
import { useFaq } from "./use-faq";

export function Faq() {
  const { open, toggle } = useFaq();

  return (
    <section id="faq" className="bg-[#f4f3ef] py-20 md:py-24">
      <div className="mag-container flex flex-col gap-10 lg:flex-row lg:gap-20">
        <div className="flex shrink-0 flex-col items-start gap-6 lg:w-[300px]">
          <h2 className="text-[32px] leading-[1.375] font-medium text-[#131318]">Answers to your top questions</h2>
        </div>
        <ul className="flex min-w-0 flex-1 flex-col gap-2">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = open[index];
            const panelId = `faq-panel-${index}`;
            return (
              <li key={item.question} className="rounded-xl bg-white/60">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <span className="text-base leading-[1.6] font-medium text-[#131318]">{item.question}</span>
                  <span aria-hidden="true" className="relative size-4 shrink-0">
                    <span className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 rounded bg-action" />
                    <span
                      className={`absolute inset-y-0 left-1/2 w-[2px] -translate-x-1/2 rounded bg-action transition-transform duration-300 ${isOpen ? "scale-y-0" : "scale-y-100"}`}
                    />
                  </span>
                </button>
                <div id={panelId} hidden={!isOpen} className="px-6 pb-6">
                  <p className="max-w-[760px] text-[15px] leading-[1.7] text-[#5c5c66]">
                    {item.answer}
                    {item.link && (
                      <>
                        {" "}
                        <a href={item.link.href} className="font-medium text-action underline-offset-4 hover:underline">
                          {item.link.label} →
                        </a>
                      </>
                    )}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
