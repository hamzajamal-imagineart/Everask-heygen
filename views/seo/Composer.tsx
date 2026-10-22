"use client";

import { useState } from "react";

/* EverAsk's hero composer (HeroComposer + PromptBox there), cut to what a
   static page can do: the box with the page's example as its placeholder, the
   page's button into EverAsk, and the starter chips, which drop their prompt
   into the box. */
export function Composer({
  placeholder,
  submitLabel,
  href,
  starters,
}: {
  placeholder: string;
  submitLabel: string;
  href: string;
  starters: { label: string; prompt: string }[];
}) {
  const [text, setText] = useState("");
  const [picked, setPicked] = useState<string>();

  return (
    <>
      <form
        action={href.split("?")[0]}
        className="relative flex w-full flex-col items-start gap-3 rounded-2xl border border-line-soft bg-white p-3 text-start shadow-md"
        onSubmit={(e) => {
          e.preventDefault();
          window.location.href = href;
        }}
      >
        <label htmlFor="page-prompt" className="sr-only">
          Describe the goal
        </label>
        <textarea
          id="page-prompt"
          name="prompt"
          rows={1}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={placeholder}
          className="block min-h-8 w-full resize-none bg-transparent px-2 pt-1.5 text-base leading-6 text-ink placeholder:text-muted focus:outline-none"
        />
        <div className="flex w-full items-center justify-between gap-2">
          <span aria-hidden className="grid size-9 place-items-center rounded-full bg-fill-2 text-ink sm:size-10">
            <svg viewBox="0 0 18 18" className="size-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M3.75 9h10.5M9 3.75v10.5" />
            </svg>
          </span>
          <button type="submit" className="btn-primary !h-10 !px-5 text-[15px]">
            {submitLabel}
          </button>
        </div>
      </form>
      <div className="-mx-4 mt-4 overflow-x-auto px-4 [mask-image:linear-gradient(to_right,transparent,#000_16px,#000_calc(100%-16px),transparent)] [scrollbar-width:none] sm:mx-0 sm:px-0 sm:[mask-image:none] [&::-webkit-scrollbar]:hidden">
        <ul aria-label="Starters" className="mx-auto flex w-max gap-2 py-1 sm:w-auto sm:flex-wrap sm:justify-center">
          {starters.map((s) => (
            <li key={s.label}>
              <button
                type="button"
                aria-pressed={picked === s.label}
                title={s.prompt}
                onClick={() => {
                  setPicked(s.label);
                  setText(s.prompt);
                  document.getElementById("page-prompt")?.focus();
                }}
                className={`inline-flex h-9 items-center whitespace-nowrap rounded-pill px-4 text-[14px] font-medium transition-[background-color,border-color,color,transform] duration-200 ease-out active:scale-[0.97] ${
                  picked === s.label ? "border-white bg-white text-ink hover:bg-white" : "glass"
                }`}
              >
                {s.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
