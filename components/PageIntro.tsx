import Link from "next/link";
import { site } from "@/lib/site";

type PageIntroProps = {
  kicker: string;
  title: string;
  lede?: string;
};

export function PageIntro({ kicker, title, lede }: PageIntroProps) {
  return (
    <header className="relative max-w-3xl">
      <p className="font-mono text-[0.72rem] tracking-[0.16em] text-white/45 uppercase">
        {kicker}
      </p>
      <h1 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl md:text-[3.4rem]">
        {title}
      </h1>
      {lede ? (
        <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">{lede}</p>
      ) : null}
    </header>
  );
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24 lg:px-16">
      {children}
    </div>
  );
}

export function InquireSoonLink({ label = "Inquiries open here, soon" }: { label?: string }) {
  return (
    <Link
      href="/contact"
      className="inline-flex items-center gap-3 text-sm tracking-[0.04em] text-white"
    >
      <span className="size-[0.55rem] rounded-full bg-slash" aria-hidden />
      <span className="border-b border-white/35 pb-0.5 transition-colors hover:border-white">
        {label}
      </span>
    </Link>
  );
}

export function StudioMeta() {
  return (
    <p className="font-mono text-[0.72rem] tracking-[0.14em] text-white/40 uppercase">
      Studio / {site.location} / 2026
    </p>
  );
}
