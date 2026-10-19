/* Manus's own figures: Zapier "8,000+ apps" (features page), Wide Research "hundreds" (its page), and
   Cascade's tested numbers from the Manus 2.0 post. */
const STATS = [
  { value: "8,000+", label: "apps reachable through Zapier actions" },
  { value: "Hundreds", label: "of parallel sub-agents in one Wide Research run" },
  { value: "28% less time", label: "and 32% less cost per task with the Cascade harness, in Manus's tested configuration" },
];

export function Proof() {
  return (
    <div className="container-page pt-10 pb-4">
      <dl className="grid gap-6 border-y border-[#ededed] py-8 sm:grid-cols-3 sm:gap-10">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <dd className="font-display text-[28px] font-medium leading-none tracking-[-0.03em] text-ink sm:text-[32px]">{s.value}</dd>
            <dt className="mx-auto mt-2 max-w-[260px] text-[14px] text-black/50">{s.label}</dt>
          </div>
        ))}
      </dl>
    </div>
  );
}
