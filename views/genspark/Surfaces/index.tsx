import { SectionHead } from "@/views/mag/SectionHead";
import { GS_MEDIA } from "../media.constants";

/* Genspark's core surfaces as EverAsk's "Who it's for" z-fold: a still beside
   a short line, sides swapping each row. Their words, cut to the line that
   matters; no fake product UI. */
const ROWS = [
  { kicker: "Flagship", title: "Super Agent", body: "It writes the plan, runs the tools, cites the sources, and drops finished work in your channel. Every step is visible. Interrupt anytime; it picks up where you left off.", image: GS_MEDIA.rowAgent },
  { kicker: "Office", title: "AI Sheets & Slides", body: "Docs that think alongside you. A formula, =ASK(), fills any cell with a reasoned, cited answer. Drop a memo and get a story-boarded deck.", image: GS_MEDIA.rowSheets },
  { kicker: "Browser", title: "AI Browser", body: "Delegate the web. A dedicated browser that fills forms, pulls reports, and files them back, with a scrubbable trace of every click.", image: GS_MEDIA.rowBrowser },
  { kicker: "Inbox", title: "GenMail", body: "Drafts in your voice, briefs you every morning, and handles the follow-ups you'd forget to send, without leaving the thread.", image: GS_MEDIA.rowMail },
];

export function Surfaces() {
  return (
    <section id="surfaces" className="border-t border-[#ededed] py-20">
      <div className="mag-container">
        <SectionHead title="One workspace. Every job to be done." description="Autonomous agents, AI-native documents, an inbox that drafts and a browser that acts. Each one reachable from the EverAsk agent." />
        <ul className="flex flex-col gap-12 pt-12 md:gap-16">
          {ROWS.map((row, i) => (
            <li key={row.title} className="mag-zfold-row grid items-center gap-6 sm:grid-cols-2 sm:gap-12 md:gap-14 lg:gap-20">
              <div className={`w-full ${i % 2 === 0 ? "sm:order-2" : ""}`}>
                <div className="relative aspect-video overflow-hidden rounded-2xl bg-fill-1">
                  <img src={row.image} alt="" loading="lazy" className="absolute inset-0 size-full object-cover" />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-action">{row.kicker}</p>
                <h3 className="mt-2 font-display text-[24px] font-medium leading-[1.1] tracking-[-0.015em] text-ink sm:text-[30px]">{row.title}</h3>
                <p className="mt-3 max-w-[440px] text-[15px] leading-relaxed text-muted sm:text-[16px]">{row.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
