import { SectionHead } from "@/views/mag/SectionHead";

/* Genspark's "Everything a modern team needs, in one place." six capabilities, verbatim, as a hairline list. */
const ITEMS = [
  { name: "Autonomous agents", body: "Long-running agents that plan, execute, and self-correct across multi-step workflows, with human-in-the-loop checkpoints." },
  { name: "Real-time research", body: "Live web, market data, and internal knowledge, cited and current, so answers are grounded, not guessed." },
  { name: "Native integrations", body: "200+ connectors to Salesforce, HubSpot, Snowflake, Google Workspace, Microsoft 365, Slack, and more." },
  { name: "Custom skills", body: "Wrap any internal API or workflow into a reusable skill your team's agents can call, no code required." },
  { name: "Team workspaces", body: "Shared prompts, agents, docs, and knowledge, with roles, permissions, and audit history built in." },
  { name: "Multi-model routing", body: "Automatically routes each task to the best available frontier model: GPT, Claude, Gemini, and open source." },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="border-t border-[#ededed] py-20">
      <div className="mag-container">
        <SectionHead
          title="Everything a modern team needs, in one place."
          description="Genspark unifies the capabilities scattered across a dozen point tools, planning, research, execution, collaboration, and governance, into one AI workspace."
        />
        <ul className="mt-10 grid border-t border-[#ededed] md:grid-cols-2 md:gap-x-12">
          {ITEMS.map((it) => (
            <li key={it.name} className="grid gap-1 border-b border-[#ededed] py-5 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-6">
              <h3 className="font-display text-[17px] font-medium leading-snug tracking-[-0.01em] text-ink">{it.name}</h3>
              <p className="text-[14px] leading-relaxed text-black/50">{it.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
