import Image from "next/image";

type WordmarkProps = {
  className?: string;
  priority?: boolean;
};

export function Wordmark({ className, priority = false }: WordmarkProps) {
  return (
    <Image
      src="/brand/forbidden-ai-wordmark.svg"
      alt="Forbidden AI"
      width={236}
      height={38}
      className={className}
      unoptimized
      priority={priority}
    />
  );
}

export function WordmarkType({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-baseline gap-[0.18em] font-sans text-[1.05rem] font-semibold tracking-[-0.045em] text-white ${className ?? ""}`}
    >
      <span>
        F
        <span className="relative inline-block">
          o
          <svg
            className="pointer-events-none absolute left-1/2 top-[48%] h-[1.32em] w-[1.32em] -translate-x-1/2 -translate-y-1/2"
            viewBox="0 0 32 32"
            aria-hidden
          >
            <circle
              cx="16"
              cy="16"
              r="12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.55"
            />
            <line
              x1="8.4"
              y1="23.6"
              x2="23.6"
              y2="8.4"
              stroke="#F5222D"
              strokeWidth="2.55"
              strokeLinecap="round"
            />
          </svg>
        </span>
        rbidden
      </span>
      <span className="bg-linear-to-r from-[#146BFF] to-[#8A20FF] bg-clip-text text-transparent">
        AI
      </span>
    </span>
  );
}
