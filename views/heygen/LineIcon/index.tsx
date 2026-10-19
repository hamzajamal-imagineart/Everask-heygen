import type { LineIconName } from "./LineIcon.types";

/* Simple line glyphs, 24 unit grid, 1.6 stroke in currentColor. */
const PATHS: Record<LineIconName, string> = {
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

  /* Pencil */
  pencil: "M4 20l1-4.2L16.3 4.5a2.1 2.1 0 0 1 3 3L8 18.8 4 20ZM14.3 6.5l3 3",
  /* Jigsaw piece */
  puzzle:
    "M5 8.5h3.6a2.2 2.2 0 1 1 3.8 0H16v3.6a2.2 2.2 0 1 1 0 3.8V19.5h-3.6a2.2 2.2 0 1 0-3.8 0H5v-3.6a2.2 2.2 0 1 0 0-3.8V8.5Z",
  /* Camcorder */
  camcorder: "M3.5 7.5h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2ZM15.5 11l5-2.5v8l-5-2.5",
  /* Globe */
  globe: "M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18ZM3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18",
  /* Microphone */
  mic: "M12 3a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3ZM6.5 11.5a5.5 5.5 0 0 0 11 0M12 17v4M9 21h6",
  /* Rocket */
  rocket:
    "M12 2.5c3 2.2 4.5 5.8 4.5 10.2l2.5 3.3-3.5-.5a5 5 0 0 1-7 0l-3.5.5 2.5-3.3C7.5 8.3 9 4.7 12 2.5ZM12 9a1.6 1.6 0 1 1 0 3.2A1.6 1.6 0 0 1 12 9ZM10.3 18.5 9.8 21.5M13.7 18.5l.5 3",
  /* Clipboard with ticks */
  checklist:
    "M9 3.5h6a1 1 0 0 1 1 1V6.5H8V4.5a1 1 0 0 1 1-1ZM8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M8 11.5l1.5 1.5 2.5-3M14 12h3M8 16.5l1.5 1.5 2.5-3M14 17h3",
  /* Studio light on a stand */
  spotlight:
    "M9 4.5h6a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3ZM18 8l3.5-2v7L18 11M12 13.5v7M8.5 20.5h7",
  /* Cog */
  gears:
    "M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z",
};

export function LineIcon({ name, className = "size-5" }: { name: LineIconName; className?: string }) {
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
