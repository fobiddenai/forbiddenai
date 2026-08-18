import Link from "next/link";
import { WordmarkType } from "@/components/Wordmark";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-white/10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10 px-6 py-12 md:flex-row md:items-end md:justify-between md:px-10 lg:px-16">
        <div className="space-y-3">
          <WordmarkType />
          <p className="font-mono text-[0.7rem] tracking-[0.08em] text-white/45 uppercase">
            {site.location}
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 text-[0.8rem] text-white/55">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="font-mono text-[0.7rem] text-white/35">
          © {new Date().getFullYear()} {site.legalName}
        </p>
      </div>
    </footer>
  );
}
