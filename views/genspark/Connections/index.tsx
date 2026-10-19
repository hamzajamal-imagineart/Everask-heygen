/* Genspark's "200+ connections" as a quiet proof row: the line and the names in muted type, like the logo row on /magnific. */
const NAMES = ["Salesforce", "HubSpot", "Google Workspace", "Microsoft 365", "Notion", "Slack", "Snowflake", "GitHub"];

export function Connections() {
  return (
    <section id="connections" className="border-t border-[#ededed] py-14">
      <div className="mag-container flex flex-col gap-6 md:flex-row md:items-baseline md:justify-between md:gap-10">
        <p className="max-w-md font-display text-[24px] font-medium leading-[1.25] tracking-[-0.03em] text-ink">200+ connections to the tools and MCPs you already use.</p>
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-2 text-[15px] font-medium text-black/35">
          {NAMES.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
