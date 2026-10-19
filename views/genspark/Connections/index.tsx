/* Genspark's "200+ connections to the tools and MCPs you already use." with the names from their page as type. */
const NAMES = ["Salesforce", "HubSpot", "Google Workspace", "Microsoft 365", "Notion", "Slack", "Teams", "Box", "Snowflake", "BigQuery", "GitHub"];

export function Connections() {
  return (
    <section id="connections" className="border-t border-[#ededed] py-20">
      <div className="mag-container grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 className="font-display text-[32px] font-medium leading-[1.08] tracking-[-0.03em] text-ink sm:text-[40px]">
            200+ connections to the tools and MCPs you already use.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-black/55">
            Genspark plugs into the systems your team already lives in, from cloud drives and calendars to CRMs, ticketing, dev tools, and any endpoint that speaks the Model Context Protocol (MCP). Auth once, then let agents work across the stack.
          </p>
        </div>
        <ul className="flex flex-wrap content-start gap-2 lg:col-span-7">
          {NAMES.map((n) => (
            <li key={n} className="rounded-pill border border-line-soft bg-white px-4 py-2 text-[14px] font-medium text-ink">{n}</li>
          ))}
          <li className="rounded-pill bg-fill-1 px-4 py-2 text-[14px] text-black/50">and any MCP endpoint</li>
        </ul>
      </div>
    </section>
  );
}
