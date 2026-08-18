import type { Metadata } from "next";
import { InquireSoonLink, PageFrame, PageIntro } from "@/components/PageIntro";
import { SectionRule } from "@/components/SectionRule";
import { practices } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Software, consulting, and AI from Forbidden AI — what we take on, and what we will not.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <PageFrame>
      <PageIntro
        kicker="01 / Services"
        title="What we take on, and what we will not."
        lede="Three practices, one studio. We write the boundary down so the work does not quietly become something else."
      />

      <div className="mt-20 space-y-0">
        {practices.map((practice, index) => (
          <article key={practice.slug}>
            {index > 0 ? <SectionRule className="my-14 md:my-16" /> : null}
            <div className="grid gap-10 md:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
              <div>
                <p className="font-mono text-[0.7rem] tracking-[0.14em] text-white/40">
                  {practice.number}
                </p>
                <h2 className="mt-3 font-display text-4xl tracking-tight">
                  {practice.title === "AI" ? (
                    <span className="bg-linear-to-r from-[#146BFF] to-[#8A20FF] bg-clip-text text-transparent">
                      AI
                    </span>
                  ) : (
                    practice.title
                  )}
                </h2>
              </div>
              <div>
                <p className="max-w-xl text-lg leading-8 text-white/68">
                  {practice.summary}
                </p>
                <div className="mt-10 grid gap-10 sm:grid-cols-2">
                  <div>
                    <h3 className="font-mono text-[0.7rem] tracking-[0.14em] text-white/40 uppercase">
                      We take on
                    </h3>
                    <ul className="mt-4 space-y-3 text-[0.95rem] leading-7 text-white/78">
                      {practice.takeOn.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-mono text-[0.7rem] tracking-[0.14em] text-white/40 uppercase">
                      We leave
                    </h3>
                    <ul className="mt-4 space-y-3 text-[0.95rem] leading-7 text-white/55">
                      {practice.leave.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <SectionRule className="my-16 md:my-24" />
      <InquireSoonLink />
    </PageFrame>
  );
}
