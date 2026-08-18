import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame } from "@/components/PageIntro";
import { SlashMark } from "@/components/SlashMark";

export const metadata: Metadata = {
  title: "Not found",
};

export default function NotFound() {
  return (
    <PageFrame>
      <SlashMark className="mb-10 w-16 text-white/40" />
      <p className="font-mono text-[0.72rem] tracking-[0.16em] text-white/45 uppercase">
        404
      </p>
      <h1 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">
        This page is forbidden.
      </h1>
      <p className="mt-5 max-w-md text-white/60">
        Or it never existed. Either way, it is not here.
      </p>
      <Link
        href="/"
        className="mt-10 inline-block border-b border-white/35 pb-0.5 text-sm hover:border-white"
      >
        Back to the studio
      </Link>
    </PageFrame>
  );
}
