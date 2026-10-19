import { SectionHead } from "../SectionHead";
import { STEPS } from "./Steps.constants";

/* Ported from EverAsk's components/landing/Steps.tsx: the three steps on one
   line, each step's clay object on the left, a thin arrow between them, no
   cards. On phones the steps stack. */
export function Steps() {
  return (
    <section id="how-it-works" className="border-t border-[#ededed] py-20">
      <div className="mag-container">
        <SectionHead title="How it works" />
        <ol className="flex flex-col gap-5 pt-10 sm:flex-row sm:items-start sm:gap-0">
          {STEPS.map((step, i) => (
            <li key={step.title} className="flex flex-1 items-start gap-3 sm:gap-0">
              <span className="mr-3 grid size-12 shrink-0 place-items-center rounded-2xl bg-fill-1">
                <img src={step.icon} alt="" width={40} height={40} className="size-10 object-contain" aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="t-item">{step.title}</h3>
                <p className="mt-1 pr-2 text-[14px] leading-relaxed text-muted sm:pr-6">{step.body}</p>
              </div>
              {i < STEPS.length - 1 && (
                <svg aria-hidden viewBox="0 0 24 24" className="mt-1 hidden size-5 shrink-0 text-line sm:mx-3 sm:block" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12h16m-5-5 5 5-5 5" />
                </svg>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
