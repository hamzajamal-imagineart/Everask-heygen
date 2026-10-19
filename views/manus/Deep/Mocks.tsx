/* Small coded pictures of four Manus features, after the coded UI on their
   feature pages, in EverAsk's tokens. */
const Card = ({ children, title }: { children: React.ReactNode; title: string }) => (
  <div className="rounded-xl border border-line-soft bg-white p-4 text-[12px] leading-snug text-ink shadow-[0_8px_30px_rgba(0,20,60,0.06)]">
    <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.08em] text-black/40">{title}</p>
    {children}
  </div>
);

/* Wide Research: one main agent fanning out to sub-agents, each with its own box. */
export function WideResearchMock() {
  return (
    <Card title="Wide Research · 50 competitors · 50 sub-agents">
      <div className="flex items-center gap-3">
        <span className="rounded-pill bg-ink px-3 py-1.5 text-[11px] font-medium text-white">Main agent</span>
        <span className="h-px flex-1 bg-line" />
        <ul className="grid grid-cols-5 gap-1.5">
          {Array.from({ length: 15 }).map((_, i) => (
            <li key={i} className={`size-6 rounded-md ${i < 11 ? "bg-action" : "bg-fill-1"}`} />
          ))}
        </ul>
      </div>
      <p className="mt-3 text-[11px] text-black/50">Each sub-agent: its own VM, tools and internet access, fresh context. 11 of 50 done.</p>
    </Card>
  );
}

/* Automations: Manus's "Updates" list. */
export function AutomationsMock() {
  const rows = [
    ["Automated sales reporting from Google Sheets", "Today 8:00 AM", "Sent to task"],
    ["Review new GitHub pull requests", "Today 10:42 AM", "Sent to task"],
    ["Follow up on Shopify refunds in Gmail", "Today 1:15 PM", "Condition not met"],
    ["Log Gmail invoices in Google Sheets", "Today 2:03 PM", "Running"],
  ];
  return (
    <Card title="Automations · Updates">
      <ul className="divide-y divide-line-soft">
        {rows.map(([n, t, s]) => (
          <li key={n} className="flex items-center gap-3 py-2">
            <span className="min-w-0 flex-1 truncate font-medium">{n}</span>
            <span className="text-[11px] text-black/40">{t}</span>
            <span className={`rounded-pill px-2 py-0.5 text-[10px] font-medium ${s === "Running" ? "bg-action text-white" : s === "Condition not met" ? "bg-fill-1 text-black/50" : "bg-fill-1 text-ink"}`}>{s}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

/* Cloud Computer: the status card from "My Computer". */
export function CloudComputerMock() {
  return (
    <Card title="My Computer · Cloud computers">
      <div className="flex items-center gap-3">
        <span className="size-2.5 rounded-full bg-[#24a148]" />
        <span className="font-medium">Cloud Computer</span>
        <span className="text-[11px] text-black/50">Online · Ubuntu 24.04 LTS</span>
      </div>
      <ul className="mt-3 grid grid-cols-3 gap-2">
        {[["CPU", "18%"], ["Memory", "2.1 / 8 GB"], ["Storage", "14 / 50 GB"]].map(([k, v]) => (
          <li key={k} className="rounded-lg bg-fill-1 p-2">
            <p className="text-[10px] uppercase tracking-[0.06em] text-black/40">{k}</p>
            <p className="mt-0.5 font-medium">{v}</p>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-[11px] text-black/50">Telegram bot · hourly Python job · daily site check, all running with the laptop closed.</p>
    </Card>
  );
}

/* Browser Operator: three steps. */
export function BrowserMock() {
  const steps = ["Connect Browser", "Grant Access", "Autonomous Action"];
  return (
    <Card title="Manus Browser Operator">
      <ol className="flex items-center gap-2">
        {steps.map((s, i) => (
          <li key={s} className="flex items-center gap-2">
            <span className="grid size-6 place-items-center rounded-full bg-ink text-[10px] font-medium text-white">{i + 1}</span>
            <span className="text-[12px] font-medium">{s}</span>
            {i < steps.length - 1 && <span className="mx-1 h-px w-5 bg-line" />}
          </li>
        ))}
      </ol>
      <p className="mt-3 font-mono text-[11px] text-black/60">→ linkedin.com · reading 7 unread messages · drafting 2 replies</p>
    </Card>
  );
}
