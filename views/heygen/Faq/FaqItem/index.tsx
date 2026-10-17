"use client";

import type { FaqItemProps } from "./FaqItem.types";
import { useFaqItem } from "./use-faq-item";

export function FaqItem({ q, a, defaultOpen = false }: FaqItemProps) {
  const { open, toggle } = useFaqItem(defaultOpen);

  return (
    <div className="py-5 first:pt-0">
      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-start justify-between gap-6 border-none bg-transparent p-0 text-left t-item"
      >
        <span>{q}</span>
        <svg viewBox="0 0 16 16" className={`mt-1 size-4 shrink-0 text-muted transition-transform duration-300 ease-out ${open ? "rotate-45" : ""}`} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" aria-hidden="true">
          <path d="M8 2v12M2 8h12" />
        </svg>
      </button>
      <div className="hg-faq-panel" data-open={open}>
        <div className="overflow-hidden">
          <div className="flex max-w-2xl flex-col gap-4 pt-2 pr-10">
            {a.map((paragraph) => (
              <p key={paragraph} className="text-[15px] leading-relaxed text-body">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
