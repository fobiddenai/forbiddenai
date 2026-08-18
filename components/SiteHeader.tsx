"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { WordmarkType } from "@/components/Wordmark";
import { nav, site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-4 md:px-10 lg:px-16">
        <Link href="/" aria-label={`${site.name} home`} className="shrink-0">
          <WordmarkType />
        </Link>
        <nav aria-label="Primary" className="flex flex-wrap items-center justify-end gap-x-5 gap-y-1 text-[0.8rem] tracking-[0.04em] uppercase">
          {nav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "text-white"
                    : "text-white/55 transition-colors hover:text-white"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
