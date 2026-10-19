import { SectionHead } from "@/views/mag/SectionHead";
import { AutomationsMock, BrowserMock, CloudComputerMock, WideResearchMock } from "./Mocks";

/* Four of Manus's feature pages as EverAsk's z-fold: their headline and
   paragraph beside a small coded picture of the feature. */
const ROWS = [
  { title: "Most AI tools fail at scale. Manus doesn't.", kicker: "Wide Research", body: "Business centric research that processes hundreds of data points simultaneously, delivering actionable intelligence for your commercial decisions. Each sub-agent runs independently with full capabilities: its own VM, tools, and internet access, and a fresh context for every item.", mock: <WideResearchMock /> },
  { title: "AI workflow automation that runs on a schedule or trigger.", kicker: "Automations", body: "Tell Manus what should happen and when. It does the work in your connected apps and brings back a result you can review. Start from a time, an app event, or a plain description of the routine. Every run shows up in Updates, so you always know what happened.", mock: <AutomationsMock /> },
  { title: "A cloud computer that keeps your AI agents and bots running 24/7.", kicker: "Cloud Computer", body: "Keep bots, website checks, and apps running around the clock on a computer in the cloud. Host a Discord or Telegram bot, check a website every morning, run Python scripts on a schedule, and pick up the next task on the same computer with your setup still there.", mock: <CloudComputerMock /> },
  { title: "Your browser already works. Now, connect it to Manus.", kicker: "Manus Browser Operator", body: "Manus works directly within your current browser session, securely utilizing your existing logins and active tabs to complete tasks on sites you already use and trust. Give it a multi-step goal, and it will plan, navigate, click, and execute the entire workflow.", mock: <BrowserMock /> },
];

export function Deep() {
  return (
    <section id="deep" className="border-t border-[#ededed] py-20">
      <div className="mag-container">
        <SectionHead title="Four things Manus does that chat can't." description="Research that scales, work that runs on its own, a computer that stays on, and a browser that acts. Manus's own words on each." />
        <ul className="flex flex-col gap-12 pt-12 md:gap-16">
          {ROWS.map((row, i) => (
            <li key={row.kicker} className="mag-zfold-row grid items-center gap-6 sm:grid-cols-2 sm:gap-12 md:gap-14 lg:gap-20">
              <div className={`w-full ${i % 2 === 0 ? "sm:order-2" : ""}`}>
                <div className="rounded-2xl bg-[#f6f6f7] p-4 sm:p-6">{row.mock}</div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-action">{row.kicker}</p>
                <h3 className="mt-2 font-display text-[24px] font-medium leading-[1.1] tracking-[-0.015em] text-ink sm:text-[30px]">{row.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted sm:text-[16px]">{row.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
