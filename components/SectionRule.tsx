export function SectionRule({ className }: { className?: string }) {
  return (
    <div
      className={`relative h-px w-full bg-white/14 ${className ?? ""}`}
      aria-hidden
    >
      <span className="absolute top-1/2 left-[11%] size-5 -translate-x-1/2 -translate-y-1/2 md:left-[8%]">
        <svg viewBox="0 0 32 32" className="size-full">
          <circle
            cx="16"
            cy="16"
            r="11"
            fill="#000"
            stroke="#fff"
            strokeWidth="2.4"
          />
          <line
            x1="9"
            y1="23"
            x2="23"
            y2="9"
            stroke="#F5222D"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </div>
  );
}
