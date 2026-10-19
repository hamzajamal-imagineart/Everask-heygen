/* Topaz's "Trusted by major companies" row. The names are the ones on their
   page; set as type, since the marks are theirs to license, not ours. */
const NAMES = ["Google", "Coca-Cola", "Target", "NVIDIA", "Tesla", "Quora"];

export function Trusted() {
  return (
    <div className="container-page border-t border-[#ededed] py-8">
      <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-black/40">Trusted by major companies</p>
      <ul className="mt-5 flex flex-wrap items-center gap-x-10 gap-y-3">
        {NAMES.map((n) => (
          <li key={n} className="font-display text-[20px] font-medium tracking-[-0.02em] text-black/30">
            {n}
          </li>
        ))}
      </ul>
    </div>
  );
}
