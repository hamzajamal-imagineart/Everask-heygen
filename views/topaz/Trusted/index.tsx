/* Topaz's proof strip under the hero: "Over 2 billion images processed." and
   the video page's "3M users" as the line (moved here from the reviews block, which Hamza removed), with
   their "Trusted by major companies" names beside it, set as type since the
   marks are theirs. */
const NAMES = ["Google", "Coca-Cola", "Target", "NVIDIA", "Tesla", "Quora"];

export function Trusted({ lead, sub }: { lead: string; sub: string }) {
  return (
    <section id="proof" className="container-page border-t border-[#ededed] py-12">
      <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
        <h2 className="font-display text-[30px] font-medium leading-[1.05] tracking-[-0.03em] text-ink sm:text-[40px] lg:col-span-5">
          {lead}
          <br />
          <span className="text-black/40">{sub}</span>
        </h2>
        <div className="lg:col-span-7">
          <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-black/40">Trusted by major companies</p>
          <ul className="mt-4 flex flex-wrap items-center gap-x-10 gap-y-3">
            {NAMES.map((n) => (
              <li key={n} className="font-display text-[20px] font-medium tracking-[-0.02em] text-black/30">
                {n}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
