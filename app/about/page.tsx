import type { Metadata } from "next";
import { InquireSoonLink, PageFrame, PageIntro } from "@/components/PageIntro";
import { SectionRule } from "@/components/SectionRule";
import { Wordmark } from "@/components/Wordmark";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Forbidden AI is a small studio in India working with clients worldwide. Early, independent, and allergic to hype.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <PageFrame>
      <PageIntro
        kicker="03 / About"
        title="A small studio. India. Clients anywhere."
        lede="We are at the beginning. That is not a branding line — it is the true state of the company. We would rather say that than invent a pedigree."
      />

      <div className="mt-16 max-w-md">
        <Wordmark className="h-auto w-full" />
      </div>

      <SectionRule className="my-16 md:my-20" />

      <div className="grid gap-14 md:grid-cols-2">
        <div className="max-w-xl space-y-6 text-lg leading-8 text-white/68">
          <p>
            Forbidden AI designs, builds, and advises on software and AI. The
            name is a filter: we refuse the unsafe, the theatrical, and the
            work that only exists to look like work.
          </p>
          <p>
            We are based in India and take on teams wherever they are. Time
            zones are a logistics problem, not a personality. When we have an
            office address, it will appear here. Until then, the studio is the
            work.
          </p>
        </div>
        <dl className="space-y-8 border-l border-white/12 pl-8">
          <div>
            <dt className="font-mono text-[0.7rem] tracking-[0.14em] text-white/40 uppercase">
              Base
            </dt>
            <dd className="mt-2 text-white/80">India</dd>
          </div>
          <div>
            <dt className="font-mono text-[0.7rem] tracking-[0.14em] text-white/40 uppercase">
              Reach
            </dt>
            <dd className="mt-2 text-white/80">Working worldwide</dd>
          </div>
          <div>
            <dt className="font-mono text-[0.7rem] tracking-[0.14em] text-white/40 uppercase">
              Practices
            </dt>
            <dd className="mt-2 text-white/80">Software · Consulting · AI</dd>
          </div>
          <div>
            <dt className="font-mono text-[0.7rem] tracking-[0.14em] text-white/40 uppercase">
              Domain
            </dt>
            <dd className="mt-2 text-white/80">{site.url.replace("https://", "")}</dd>
          </div>
        </dl>
      </div>

      <SectionRule className="my-16 md:my-20" />

      <blockquote className="max-w-2xl font-display text-3xl leading-snug tracking-tight italic md:text-4xl">
        We keep the useful parts. The rest stays forbidden.
      </blockquote>

      <div className="mt-14">
        <InquireSoonLink />
      </div>
    </PageFrame>
  );
}
