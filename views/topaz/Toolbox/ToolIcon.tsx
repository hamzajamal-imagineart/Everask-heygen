/* One line icon per Topaz tool, in EverAsk's stroke style (1.6px, round caps), drawn in currentColor. */
const PATHS: Record<string, React.ReactNode> = {
  denoise: (
    <>
      <circle cx="6" cy="7" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="5" r="1" fill="currentColor" stroke="none" />
      <circle cx="18" cy="8" r="1" fill="currentColor" stroke="none" />
      <circle cx="8" cy="13" r="1" fill="currentColor" stroke="none" />
      <circle cx="16" cy="14" r="1" fill="currentColor" stroke="none" />
      <path d="M4 19c4-3 12-3 16 0" />
    </>
  ),
  sharpen: <path d="M12 3 20 20H4L12 3Zm0 6v8" />,
  faces: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M9 10h.01M15 10h.01M8.5 14.5c1 1.4 2.2 2 3.5 2s2.5-.6 3.5-2" />
    </>
  ),
  lighting: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2.5M12 19v2.5M2.5 12H5m14 0h2.5M5.3 5.3l1.8 1.8m9.8 9.8 1.8 1.8M5.3 18.7l1.8-1.8m9.8-9.8 1.8-1.8" />
    </>
  ),
  color: (
    <>
      <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" />
      <path d="M9 14a3 3 0 0 0 3 3" />
    </>
  ),
  upscale: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M14 10l4-4m0 0h-4m4 0v4M10 14l-4 4m0 0h4m-4 0v-4" />
    </>
  ),
};

export function ToolIcon({ id, className = "size-4" }: { id: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {PATHS[id]}
    </svg>
  );
}
