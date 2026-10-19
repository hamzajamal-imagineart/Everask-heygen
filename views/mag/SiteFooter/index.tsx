import { Lockup } from "../Lockup";
import { EVERASK_BRAND } from "../Lockup/Lockup.constants";
import { FOOTER_COLUMNS, type FooterLink } from "./SiteFooter.constants";

/* Ported from the EverAsk site (components/site/SiteFooter.tsx): a hairline
 * rule, the lockup and a promise on the left, link columns on the right, then
 * the wordmark set the full width of the container, with the legal row
 * underneath. Every link is absolute to everask.ai. */
export function SiteFooter() {
  return (
    <>
      {/* Ink surface - the book's 10%. */}
      <footer data-tone="dark" className="relative overflow-hidden bg-ink text-white">
        <div className="container-page flex flex-col gap-12 py-16">
          <div className="flex flex-col justify-between gap-10 lg:flex-row">
            <div className="max-w-xs">
              <Lockup className="text-[15px]" tone="white" />
              <p className="mt-4 font-display t-title font-medium text-white">
                One prompt in.
                <br />
                <span className="text-white/55">Real work out.</span>
              </p>
            </div>

            <div className="grid flex-1 gap-8 sm:grid-cols-3 lg:max-w-2xl">
              {FOOTER_COLUMNS.map((column) => (
                <FooterColumn key={column.title} title={column.title} links={column.links} />
              ))}
            </div>
          </div>

          {/* The wordmark set the full width of the container. */}
          <p
            aria-hidden
            className="select-none font-display font-medium leading-[0.8] tracking-[-0.045em] text-white/10"
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
    </>
  );
}

function FooterColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <h3 className="kicker text-white/50">{title}</h3>
      <ul className="mt-3 space-y-2">
        {links.map((l) => (
          <li key={l.label}>
            {/* Off-site, so a plain anchor rather than a client-side Link. */}
            <a href={l.href} className="text-sm text-white/80 transition-colors hover:text-white">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
