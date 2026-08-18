import type { Metadata } from "next";
import { InquireSoonLink, PageFrame, PageIntro } from "@/components/PageIntro";
import { SectionRule } from "@/components/SectionRule";
import { approachSteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "How Forbidden AI works: scope, build, ship. Written proposal first. You own the repo.",
  alternates: { canonical: "/approach" },
};

export default function ApproachPage() {
  return (
    <PageFrame>
      <PageIntro
        kicker="02 / Approach"
        title="A short sequence. No theatre."
        lede="Most projects fail in the gaps between vendors, decks, and “we’ll know it when we see it.” We keep the sequence short so those gaps do not appear."
      />

      <ol className="mt-20">
        {approachSteps.map((step, index) => (
          <li key={step.number}>
            {index > 0 ? <SectionRule className="my-12 md:my-16" /> : null}
            <div className="grid gap-8 md:grid-cols-[8rem_minmax(0,1fr)] md:gap-16">
              <p className="font-mono text-sm tracking-[0.16em] text-white/35">
                {step.number}
              </p>
              <div className="max-w-2xl">
                <h2 className="font-display text-4xl tracking-tight">
                  {step.title}
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/68">
                  {step.body}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <SectionRule className="my-16 md:my-24" />

      <aside className="max-w-2xl">
        <p className="font-mono text-[0.72rem] tracking-[0.16em] text-white/45 uppercase">
          What you keep
        </p>
        <p className="mt-4 text-lg leading-8 text-white/68">
          The code, the repository, the credentials, and a written record of
          what was decided. If we stay on after launch, it is because you asked
          — not because the system is a black box.
        </p>
      </aside>

      <div className="mt-14">
        <InquireSoonLink />
      </div>
    </PageFrame>
  );
}
