/* Manus's connectors page: "Connect your apps to Manus with MCP connectors", the catalogue names as chips. */
const NAMES = ["Gmail", "Outlook", "Google Calendar", "Google Drive", "Google Sheets", "Slack", "Notion", "GitHub", "Linear", "Shopify", "HubSpot", "Figma", "Mobbin", "Zapier", "Instagram", "Higgsfield"];

export function Connectors() {
  return (
    <section id="connectors" className="border-t border-[#ededed] py-20">
      <div className="mag-container grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 className="font-display text-[32px] font-medium leading-[1.08] tracking-[-0.03em] text-ink sm:text-[40px]">Connect your apps to Manus with MCP connectors.</h2>
          <p className="mt-5 text-[15px] leading-relaxed text-black/55">Connect your apps, add a custom MCP server, or bring an API key. Then ask Manus to use the tools in your work. Start with an app connector, create a custom connector through MCP, or save an external API key.</p>
        </div>
        <ul className="flex flex-wrap content-start gap-2 lg:col-span-7">
          {NAMES.map((n) => (
            <li key={n} className="rounded-pill border border-line-soft bg-white px-4 py-2 text-[14px] font-medium text-ink">{n}</li>
          ))}
          <li className="rounded-pill bg-fill-1 px-4 py-2 text-[14px] text-black/50">any custom MCP server</li>
        </ul>
      </div>
    </section>
  );
}
