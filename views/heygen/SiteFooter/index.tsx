import { EVERASK, EVERASK_FOOTER_FEATURES, EVERASK_FOOTER_LEGAL, EVERASK_FOOTER_PRODUCT } from "../brand.constants";
import { ProductLockup } from "../ProductLockup";
import { FooterColumn } from "./FooterColumn";

export function SiteFooter() {
  return (
    <footer data-tone="dark" className="relative overflow-hidden bg-ink text-white">
      <div className="container-page flex flex-col gap-12 py-16">
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          <div className="max-w-xs">
            <ProductLockup className="text-[15px]" tone="white" />
            <p className="mt-4 font-display t-title font-medium text-white">
              One prompt in.
              <br />
              <span className="text-white/55">Real work out.</span>
            </p>
          </div>
          <div className="grid flex-1 gap-8 sm:grid-cols-3 lg:max-w-2xl">
            <FooterColumn title="Features" links={EVERASK_FOOTER_FEATURES} />
            <FooterColumn title="Product" links={EVERASK_FOOTER_PRODUCT} />
            <FooterColumn title="Legal" links={EVERASK_FOOTER_LEGAL} />
          </div>
        </div>
        <p
          aria-hidden
          className="select-none font-display font-medium leading-[0.8] tracking-[-0.045em] text-white/10"
          style={{ fontSize: "clamp(4rem, 19.4vw, 15.2rem)" }}
        >
          {EVERASK.name}
        </p>
        <div className="flex flex-col gap-2 border-t border-white/12 pt-6 text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p className="kicker">© {new Date().getFullYear()} {EVERASK.name}</p>
          <p className="kicker">{new URL(EVERASK.site).host}</p>
        </div>
      </div>
    </footer>
  );
}
