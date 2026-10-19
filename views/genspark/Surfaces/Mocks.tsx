/* Small coded pictures of each Genspark surface, after the ones on their
   Business and Products pages (which are coded UI, not screenshots), drawn in
   EverAsk's tokens: a white card on the soft fill, 11–12px type, azure accents. */

const Card = ({ children, title }: { children: React.ReactNode; title: string }) => (
  <div className="rounded-xl border border-line-soft bg-white p-3 text-[11px] leading-snug text-ink shadow-[0_8px_30px_rgba(0,20,60,0.06)]">
    <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.08em] text-black/40">{title}</p>
    {children}
  </div>
);

export function TraceMock() {
  const steps = [
    { t: "Plan the analysis", m: "planner · 12s", done: true },
    { t: "Extract pricing data", m: "browser + parser · 1m 42s", done: true },
    { t: "Cross-reference G2 & Crunchbase", m: "web · in progress", done: false },
    { t: "Draft comparison matrix", m: "sheets", done: false },
    { t: "Build 12-slide deck", m: "slides", done: false },
  ];
  return (
    <Card title="Task · Q3 competitive analysis · step 3 of 12">
      <ul className="space-y-1.5">
        {steps.map((s) => (
          <li key={s.t} className="flex items-center gap-2">
            <span className={`size-2 shrink-0 rounded-full ${s.done ? "bg-action" : "border border-line"}`} />
            <span className={s.done ? "text-ink" : "text-black/50"}>{s.t}</span>
            <span className="ml-auto text-[10px] text-black/40">{s.m}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function SheetMock() {
  const rows = [
    ["NA", "$4.2M", "+12%", "$4.7M"],
    ["EMEA", "$2.8M", "+8%", "$3.0M"],
    ["APAC", "$1.6M", "+21%", "$2.0M"],
    ["LATAM", "$0.4M", "+34%", "$0.6M"],
  ];
  return (
    <Card title="q3-forecast.xlsx · =ASK()">
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-[10px] text-black/40">
            {["Region", "ARR", "QoQ", "Forecast ✨"].map((h) => (
              <th key={h} className="border-b border-line-soft py-1 text-left font-medium">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]}>
              {r.map((c, i) => (
                <td key={i} className={`border-b border-line-soft py-1 ${i === 3 ? "text-action" : ""}`}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

export function BrowserMock() {
  const log = [
    ["00:12", "opened salesforce.com"],
    ["00:14", "nav Accounts"],
    ["00:19", "filter Q3 · West"],
    ["00:22", "export csv"],
    ["00:28", "✓ 480 rows"],
  ];
  return (
    <Card title="AI Browser · trace">
      <ul className="space-y-1 font-mono text-[10.5px]">
        {log.map(([t, l]) => (
          <li key={t} className="flex gap-3">
            <span className="text-black/40">{t}</span>
            <span className={l.startsWith("✓") ? "text-action" : "text-ink"}>→ {l}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function InboxMock() {
  const mail = [
    ["SC", "Sarah Chen", "Q3 roadmap: beta moved to Aug 14", "9:14"],
    ["ML", "Marcus Lee", "Draft reply · in your voice", "8:42"],
    ["DK", "Dave Kim", "PR ready for review", "Yst"],
  ];
  return (
    <Card title="GenMail · 3 drafts ready · 12 follow-ups queued">
      <ul className="space-y-1.5">
        {mail.map(([i, n, s, t]) => (
          <li key={n} className="flex items-center gap-2">
            <span className="grid size-6 shrink-0 place-items-center rounded-full bg-fill-1 text-[9px] font-medium">{i}</span>
            <span className="min-w-0 flex-1 truncate">
              <span className="font-medium">{n}</span> <span className="text-black/50">{s}</span>
            </span>
            <span className="text-[10px] text-black/40">{t}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function RolesMock() {
  const roles = ["Analyst", "Designer", "Copy", "Engineer", "PM", "Legal", "SEO", "Researcher"];
  return (
    <Card title="GenTeam · 50 roles · assign in one click">
      <ul className="flex flex-wrap gap-1.5">
        {roles.map((r) => (
          <li key={r} className="rounded-pill border border-line-soft px-2.5 py-1 text-[11px]">{r}</li>
        ))}
      </ul>
    </Card>
  );
}

export function DeckMock() {
  const slides = ["Q3 2026 Board Update", "$9.0M total ARR · +21% QoQ", "ARR by region", "Enterprise crosses 50%", "APAC +34%", "Q4 focus: margin"];
  return (
    <Card title="AI Slides · generating slide 7 of 10">
      <ul className="grid grid-cols-3 gap-1.5">
        {slides.map((s, i) => (
          <li key={s} className={`aspect-[16/10] rounded-md border border-line-soft p-1.5 text-[9px] leading-tight ${i === 1 ? "bg-ink text-white" : "bg-fill-1"}`}>
            <span className="block text-[8px] text-current/50">0{i + 1}</span>
            {s}
          </li>
        ))}
      </ul>
    </Card>
  );
}
