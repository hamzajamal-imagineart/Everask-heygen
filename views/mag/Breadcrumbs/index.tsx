import { BREADCRUMB_TRAIL } from "./Breadcrumbs.constants";

/* Ported from EverAsk's components/landing/Breadcrumbs.tsx: 14px, secondary
   text, chevron separators, the current page in ink, on white between the
   header and the hero frame. */
export function Breadcrumbs({ trail = BREADCRUMB_TRAIL }: { trail?: { name: string; href: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-white">
      <ol className="container-page flex flex-wrap items-center gap-1.5 py-3.5 text-sm text-body">
        {trail.map((crumb, i) => {
          const isLast = i === trail.length - 1;
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
