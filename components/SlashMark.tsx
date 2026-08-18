export function SlashMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden
      className={className}
    >
      <circle
        cx="16"
        cy="16"
        r="12.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
      />
      <line
        x1="8.2"
        y1="23.8"
        x2="23.8"
        y2="8.2"
        stroke="#F5222D"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
