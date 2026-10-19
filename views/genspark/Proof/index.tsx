/* Genspark's proof, three figures from genspark.ai/business on one hairline row. */
const STATS = [
  { value: "7,000+", label: "world-class teams trust Genspark" },
  { value: "200+", label: "connections to the tools and MCPs you already use" },
  { value: "70+", label: "models, ChatGPT, Claude, Gemini and more" },
];

export function Proof() {
  return (
    <div className="container-page pt-10 pb-4">
      <dl className="grid gap-6 border-y border-[#ededed] py-8 sm:grid-cols-3 sm:gap-10">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <dd className="font-display text-[28px] font-medium leading-none tracking-[-0.03em] text-ink sm:text-[32px]">{s.value}</dd>
            <dt className="mt-2 text-[14px] text-black/50">{s.label}</dt>
          </div>
        ))}
      </dl>
    </div>
  );
}
