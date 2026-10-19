import { SectionHead } from "@/views/mag/SectionHead";
import { BrowserMock, DeckMock, InboxMock, RolesMock, SheetMock, TraceMock } from "./Mocks";

/* Genspark's "One workspace. Every job to be done." and "Six surfaces. One
   workspace." as EverAsk's bento: six soft cards, each with Genspark's own
   line for the surface and a small coded picture of it, as their pages do. */
const SURFACES = [
  { kicker: "Flagship", name: "Super Agent", body: "Autonomous agents that plan, research, and complete multi-step work, from market analysis to full launch plans, with you approving the steps that matter.", mock: <TraceMock /> },
  { kicker: "Productivity", name: "AI Sheets & Slides", body: "Native spreadsheets, docs, and decks that build themselves. Prompt a financial model, a pitch deck, or a report, then keep editing like normal.", mock: <SheetMock /> },
  { kicker: "Slides", name: "A paragraph in. A boardroom deck out.", body: "Drop a memo. Get a story-boarded deck, with structure, hierarchy, and the right chart in the right place. Edit any slide natively; the whole deck restyles to match.", mock: <DeckMock /> },
  { kicker: "Browser", name: "AI Browser", body: "Delegate the web. A dedicated browser that fills forms, pulls reports, and files them back, with a scrubbable trace of every click.", mock: <BrowserMock /> },
  { kicker: "Inbox", name: "GenMail", body: "Drafts in your voice, briefs you every morning, and handles the follow-ups you'd forget to send, without ever leaving the thread.", mock: <InboxMock /> },
  { kicker: "Roles", name: "GenTeam", body: "Even a team of one can hire the world's best people. Dozens of ready-made roles that take real assignments and hand back finished work, briefed, reviewed, shipped.", mock: <RolesMock /> },
];

export function Surfaces() {
  return (
    <section id="surfaces" className="border-t border-[#ededed] py-20">
      <div className="mag-container">
        <SectionHead
          title="One workspace. Every job to be done."
          description="One unified workspace. Give every team autonomous agents, AI-native documents, an inbox that drafts, roles you can hire, and a memory layer that remembers. All of it reachable from the EverAsk agent."
        />
        <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SURFACES.map((s) => (
            <li key={s.name} className="flex flex-col gap-5 rounded-2xl bg-[#f6f6f7] p-6">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-action">{s.kicker}</p>
                <h3 className="mt-2 font-display text-[20px] font-medium leading-[1.2] tracking-[-0.02em] text-ink">{s.name}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-black/55">{s.body}</p>
              </div>
              <div className="mt-auto">{s.mock}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
