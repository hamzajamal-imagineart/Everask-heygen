import type { BadgeIconName } from "./Badge.types";

/* Simple line glyphs, 24 unit grid, 1.6 stroke in currentColor. */
const PATHS: Record<BadgeIconName, string> = {
  /* Person bust */
  avatar: "M12 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8ZM4 20.5c0-3.6 3.6-6 8-6s8 2.4 8 6",
  /* Magnifier */
  research: "M10.5 4a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13ZM15.3 15.3 21 21",
  /* Robot head with antenna */
  agent:
    "M7 7.5h10a3 3 0 0 1 3 3v6.5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V10.5a3 3 0 0 1 3-3ZM12 7.5V4.8M12 2.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM9 12.5h.01M15 12.5h.01M9.5 16h5",
  /* Clapperboard */
  studio: "M3.5 10.5h17v7.5a2.5 2.5 0 0 1-2.5 2.5H6a2.5 2.5 0 0 1-2.5-2.5v-7.5ZM3.5 10.5 2.7 6.1 19.5 3l.8 4.4M7.5 9.8 6.8 6.4M12.5 8.9l-.7-3.4M17.3 8l-.6-3.4",
  /* Two speech bubbles */
  translation:
    "M4.5 3.5h9a2.5 2.5 0 0 1 2.5 2.5v4a2.5 2.5 0 0 1-2.5 2.5H8.8L5.5 15v-2.5h-1A2.5 2.5 0 0 1 2 10V6a2.5 2.5 0 0 1 2.5-2.5ZM19 9.5h.5A2.5 2.5 0 0 1 22 12v4a2.5 2.5 0 0 1-2.5 2.5h-1V21l-3.3-2.5H11A2.5 2.5 0 0 1 8.5 16v-.5",
  /* Toolbox */
  tools:
    "M4.5 7.5h15a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2ZM8.5 7.5V5.5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2M2.5 13h19M9 11.8v2.4M15 11.8v2.4",
};

export function BadgeIcon({ name, className = "size-5" }: { name: BadgeIconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={PATHS[name]} />
    </svg>
  );
}
