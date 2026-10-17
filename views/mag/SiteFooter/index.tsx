import { Lockup } from "../Lockup";
import { EVERASK_BRAND } from "../Lockup/Lockup.constants";
import { FOOTER_COLUMNS } from "./SiteFooter.constants";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="container-page flex flex-col gap-12 py-16">
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          <div className="max-w-xs">
            <Lockup className="text-[15px]" tone="white" />
            <p className="t-title mt-4 font-display font-medium text-white">
              One prompt in.
              <br />
              <span className="text-white/55">Real work out.</span>
            </p>
          </div>
          <div className="grid flex-1 gap-8 sm:grid-cols-3 lg:max-w-2xl">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title}>
                <h3 className="kicker text-white/50">{column.title}</h3>
                <ul className="mt-3 space-y-2">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-sm text-white/80 transition-colors hover:text-white">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <p
          aria-hidden
          className="font-display leading-[0.8] font-medium tracking-[-0.045em] text-white/10 select-none"
          style={{ fontSize: "clamp(4rem, 19.4vw, 15.2rem)" }}
        >
          {EVERASK_BRAND.name}
        </p>
        <div className="flex flex-col gap-2 border-t border-white/12 pt-6 text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p className="kicker">
            © {new Date().getFullYear()} {EVERASK_BRAND.name}
          </p>
          <p className="kicker">{new URL(EVERASK_BRAND.site).host}</p>
        </div>
      </div>
    </footer>
  );
}
