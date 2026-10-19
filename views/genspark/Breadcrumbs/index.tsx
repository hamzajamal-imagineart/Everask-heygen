import { EVERASK_BRAND } from "@/views/mag/Lockup/Lockup.constants";

/* Features › Agents › Genspark. EverAsk has no "Agents" cluster page yet; the href follows its
   /features/<cluster> pattern and needs checking when one ships. */
const TRAIL = [
  { name: "Features", href: `${EVERASK_BRAND.site}/features` },
  { name: "Agents", href: `${EVERASK_BRAND.site}/features/agents` },
  { name: "Genspark", href: "#top" },
];

export function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="bg-white">
      <ol className="container-page flex flex-wrap items-center gap-1.5 py-3.5 text-sm text-body">
        {TRAIL.map((crumb, i) => {
          const isLast = i === TRAIL.length - 1;
          return (
            <li key={crumb.href} className="inline-flex items-center gap-1.5">
              {isLast ? (
                <span aria-current="page" className="text-ink">{crumb.name}</span>
              ) : (
                <a href={crumb.href} className="transition-colors hover:text-ink">{crumb.name}</a>
              )}
              {!isLast && (
                <svg aria-hidden viewBox="0 0 20 20" className="size-3.5 text-muted" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                  <path d="m8 5 5 5-5 5" />
                </svg>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
