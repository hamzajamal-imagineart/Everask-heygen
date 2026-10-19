import type { BadgeIconName } from "./Badge.types";

/* Simple 2D filled glyphs, 24 unit grid, drawn in currentColor. */
const PATHS: Record<BadgeIconName, string> = {
  /* Person bust */
  avatar:
    "M12 2.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9ZM4 19.2c0-3.6 3.6-6.2 8-6.2s8 2.6 8 6.2c0 1-.8 1.8-1.8 1.8H5.8c-1 0-1.8-.8-1.8-1.8Z",
  /* Magnifier */
  research:
    "M10 2.5a7.5 7.5 0 0 1 5.9 12.1l5.3 5.3a1.4 1.4 0 0 1-2 2l-5.3-5.3A7.5 7.5 0 1 1 10 2.5Zm0 3a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z",
  /* Robot head with antenna */
  agent:
    "M12 1.5a1.5 1.5 0 0 1 1 2.6V6h4.5A3.5 3.5 0 0 1 21 9.5v8a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-8A3.5 3.5 0 0 1 6.5 6H11V4.1a1.5 1.5 0 0 1 1-2.6ZM8.5 11a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6Zm7 0a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM9 17a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H9Z",
  /* Clapperboard */
  studio:
    "M4.2 10.4 3.3 5.6a1.6 1.6 0 0 1 1.3-1.9L18.9 1.4a1.6 1.6 0 0 1 1.9 1.3l.8 4.5-17.4 3.2ZM3.5 12h17v7.5A2.5 2.5 0 0 1 18 22H6a2.5 2.5 0 0 1-2.5-2.5V12Zm3.3 3.2a1 1 0 0 0 0 2h10.4a1 1 0 0 0 0-2H6.8Z",
  /* Two speech bubbles */
  translation:
    "M3 5.5A3.5 3.5 0 0 1 6.5 2h7A3.5 3.5 0 0 1 17 5.5v3a3.5 3.5 0 0 1-3.5 3.5H8.4l-3.1 2.6c-.9.7-2.3.1-2.3-1.1V5.5Zm15.5 1v2a5 5 0 0 1-5 5H9.4c.3 1.7 1.8 3 3.6 3h3.6l3.1 2.6c.9.7 2.3.1 2.3-1.1V10a3.5 3.5 0 0 0-3.5-3.5Z",
  /* Toolbox */
  tools:
    "M9 2.5h6A2.5 2.5 0 0 1 17.5 5v1.5H20a2 2 0 0 1 2 2V12H2V8.5a2 2 0 0 1 2-2h2.5V5A2.5 2.5 0 0 1 9 2.5Zm0 2a.5.5 0 0 0-.5.5v1.5h7V5a.5.5 0 0 0-.5-.5H9ZM2 14h6v1a1 1 0 0 0 2 0v-1h4v1a1 1 0 0 0 2 0v-1h6v5.5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V14Z",
};

export function BadgeIcon({ name, className = "size-5" }: { name: BadgeIconName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d={PATHS[name]} />
    </svg>
  );
}
