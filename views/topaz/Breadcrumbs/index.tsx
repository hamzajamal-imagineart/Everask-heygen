import { EVERASK_BRAND } from "@/views/mag/Lockup/Lockup.constants";

/* The same trail as the Magnific page, one level down: Features › Upscaling
   models › Topaz. The cluster href follows EverAsk's model-cluster pattern. */
const TRAIL = [
  { name: "Features", href: `${EVERASK_BRAND.site}/features` },
  { name: "Upscaling models", href: `${EVERASK_BRAND.site}/features/upscaling/models` },
  { name: "Topaz", href: "#top" },
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
                <span aria-current="page" className="text-ink">
                  {crumb.name}
                </span>
              ) : (
                <a href={crumb.href} className="transition-colors hover:text-ink">
                  {crumb.name}
                </a>
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
