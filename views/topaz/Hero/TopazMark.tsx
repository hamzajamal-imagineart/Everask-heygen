/* Topaz Labs' mark alone: the three stepped squares from the wordmark, drawn in currentColor. */
export function TopazMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 3.005 13.8 13.815" fill="currentColor" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Topaz" className={className}>
      <path d="M4.58763 12.2318H0V16.8194H4.58763V12.2318Z" />
      <path d="M9.18908 7.64274H4.60145V12.2304H9.18908V7.64274Z" />
      <path d="M13.7974 3.00537H9.2098V7.59301H13.7974V3.00537Z" />
    </svg>
  );
}
