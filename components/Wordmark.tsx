import Image from "next/image";

type WordmarkProps = {
  className?: string;
  priority?: boolean;
};

export function Wordmark({ className, priority = false }: WordmarkProps) {
  return (
    <Image
      src="/logos/forbidden-ai-logo-transparent.png"
      alt="Forbidden AI"
      width={400}
      height={105}
      className={className}
      unoptimized
      priority={priority}
    />
  );
}
