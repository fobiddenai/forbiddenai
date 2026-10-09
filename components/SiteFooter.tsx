import Link from "next/link";
import { Wordmark } from "@/components/Wordmark";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-white/10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-6 py-8 md:flex-row md:items-end md:justify-between md:px-10 lg:px-16">
        <div className="space-y-1">
          <div className="-my-2 -ml-[7px] md:-ml-[9px]">
            <Wordmark className="h-10 md:h-12 w-auto grayscale opacity-100" />
          </div>
          <p className="font-mono text-[0.7rem] tracking-[0.08em] text-white/45 uppercase">
            {site.location}
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 text-[0.8rem] text-white/55">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-all duration-300 ease-out hover:text-white"
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
