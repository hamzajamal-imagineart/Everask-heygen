/* Genspark's "Purpose-built for the work each team owns." Only the Finance tab's copy is public on
   their page (the others are tabs without text), so that is the one shown, with its sheet mock. */
const BULLETS = [
  "Automated variance analysis and commentary drafts",
  "Live financial models rebuilt from source systems",
  "Board-ready decks generated from actuals + forecasts",
  "Audit trails for every AI-touched calculation",
];
const ROWS = [
  ["Revenue", "$12.4M", "+3.2%"],
  ["COGS", "$4.1M", "-1.1%"],
  ["OpEx", "$5.8M", "+2.0%"],
  ["EBITDA", "$2.5M", "+4.8%"],
];

export function Teams() {
  return (
    <section id="teams" className="border-t border-[#ededed] py-20">
      <div className="mag-container">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-10">
          <h2 className="font-display text-[24px] leading-[1.25] font-medium tracking-[-0.03em] text-ink">Purpose-built for the work each team owns.</h2>
          <p className="text-[15px] leading-relaxed text-black/50 md:max-w-md">Reference workflows, prompt libraries, and agent recipes tuned for each function, so teams see results in days, not quarters.</p>
        </div>
        <div className="mt-10 grid gap-6 rounded-2xl bg-[#f6f6f7] p-6 lg:grid-cols-12 lg:gap-12 lg:p-10">
          <div className="lg:col-span-5">
            <ul className="flex flex-wrap gap-2">
              {["Finance", "Marketing", "Sales", "Engineering", "Operations"].map((t, i) => (
                <li key={t} className={`rounded-pill px-3.5 py-1.5 text-[13px] font-medium ${i === 0 ? "bg-ink text-white" : "bg-white text-black/50"}`}>{t}</li>
              ))}
            </ul>
            <h3 className="mt-6 font-display text-[28px] font-medium leading-[1.1] tracking-[-0.03em] text-ink">Finance</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-black/55">Move from month-end scramble to always-on close. Agents pull data, reconcile, and draft the board narrative before the meeting.</p>
            <ul className="mt-5 space-y-2 text-[14px] text-ink">
              {BULLETS.map((b) => (
                <li key={b} className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-action" />{b}</li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-line-soft bg-white p-4 text-[12px] shadow-[0_8px_30px_rgba(0,20,60,0.06)]">
              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.08em] text-black/40">Finance workspace · month-end close</p>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-[10px] text-black/40">
                    {["Line", "Actual", "Var"].map((h) => (
                      <th key={h} className="border-b border-line-soft py-1.5 text-left font-medium">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((r) => (
                    <tr key={r[0]}>
                      {r.map((c, i) => (
                        <td key={i} className={`border-b border-line-soft py-1.5 ${i === 2 ? (c.startsWith("+") ? "text-action" : "text-black/60") : ""}`}>{c}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-3 flex gap-2">
                <span className="rounded-pill bg-fill-1 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.06em] text-ink">Draft commentary</span>
                <span className="rounded-pill bg-action px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.06em] text-white">Send to CFO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
