import type { Metadata } from "next";
import { PageFrame, PageIntro } from "@/components/PageIntro";
import { SectionRule } from "@/components/SectionRule";
import { SlashMark } from "@/components/SlashMark";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Inquiries to Forbidden AI are opening soon. This page will be the channel — no invented inbox.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <PageFrame>
      <div className="relative">
        <SlashMark className="pointer-events-none absolute top-0 right-0 w-40 text-white/10 md:w-56" />
        <PageIntro
          kicker="04 / Contact"
          title="Inquiries opening soon."
          lede="There is no email, no form, and no office on this page yet — because we do not have them yet. When a channel exists, it will replace this sentence."
        />
      </div>

      <SectionRule className="my-16 md:my-20" />

      <div className="grid max-w-3xl gap-12 md:grid-cols-2">
        <div>
          <h2 className="font-mono text-[0.7rem] tracking-[0.14em] text-white/40 uppercase">
            What to expect
          </h2>
          <p className="mt-4 leading-7 text-white/68">
            A single place to start a conversation about software, consulting,
            or AI. Written, not a calendar link dumped on a stranger.
          </p>
        </div>
        <div>
          <h2 className="font-mono text-[0.7rem] tracking-[0.14em] text-white/40 uppercase">
            Until then
          </h2>
          <p className="mt-4 leading-7 text-white/68">
            Check this page. It will change when we can receive mail. We will
            not invent an address so the footer looks finished.
          </p>
        </div>
      </div>

      <div
        className="mt-20 max-w-xl border border-dashed border-white/18 px-6 py-8"
        aria-disabled="true"
      >
        <p className="font-mono text-[0.7rem] tracking-[0.14em] text-white/35 uppercase">
          Channel
        </p>
        <p className="mt-3 font-display text-2xl italic text-white/55">
          Reserved for an inbox that does not exist yet.
        </p>
      </div>
    </PageFrame>
  );
}
