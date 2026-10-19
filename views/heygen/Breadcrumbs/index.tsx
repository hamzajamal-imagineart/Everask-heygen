import { BREADCRUMB_TRAIL } from "./Breadcrumbs.constants";

/* EverAsk's Breadcrumbs in its `onFilm` variant (components/landing/Breadcrumbs.tsx):
   white over the hero video, under the transparent header, since this page has no
   white band between header and hero. */
export function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="absolute inset-x-0 top-[76px] z-10">
      <ol className="hg-container flex flex-wrap items-center gap-1.5 py-3.5 text-sm text-white/70 [text-shadow:0_1px_8px_rgb(0_0_0/0.35)]">
        {BREADCRUMB_TRAIL.map((crumb, i) => {
          const isLast = i === BREADCRUMB_TRAIL.length - 1;
          return (
            <li key={crumb.href} className="inline-flex items-center gap-1.5">
              {isLast ? (
                <span aria-current="page" className="text-white">
                  {crumb.name}
                </span>
              ) : (
                <a href={crumb.href} className="transition-colors hover:text-white">
                  {crumb.name}
                </a>
              )}
              {!isLast && (
                <svg aria-hidden viewBox="0 0 20 20" className="size-3.5 text-white/50" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
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
