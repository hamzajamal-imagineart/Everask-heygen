/* Topaz's proof, as EverAsk sets numbers: three figures on one hairline row.
   Each is a line from topazlabs.com/topaz-photo. */
const STATS = [
  { value: "2 billion+", label: "images processed" },
  { value: "12", label: "AI tools, trained on millions of images" },
  { value: "20+ years", label: "trusted by pro photographers" },
];

export function Stats() {
  return (
    <div className="container-page pt-10 pb-4">
      <dl className="grid gap-6 border-y border-[#ededed] py-8 sm:grid-cols-3 sm:gap-10">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <dt className="order-2 text-[14px] text-black/50">{s.label}</dt>
            <dd className="font-display text-[28px] font-medium leading-none tracking-[-0.03em] text-ink sm:text-[32px]">{s.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
