/* Manus's connectors as a quiet proof row, the names in muted type. */
const NAMES = ["Gmail", "Google Workspace", "Slack", "Notion", "GitHub", "Linear", "Shopify", "HubSpot", "Figma", "Zapier"];

export function Connectors() {
  return (
    <section id="connectors" className="border-t border-[#ededed] py-14">
      <div className="mag-container flex flex-col gap-6 md:flex-row md:items-baseline md:justify-between md:gap-10">
        <p className="max-w-md font-display text-[24px] font-medium leading-[1.25] tracking-[-0.03em] text-ink">Connect your apps, a custom MCP server, or an API key.</p>
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-2 text-[15px] font-medium text-black/35">
          {NAMES.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
