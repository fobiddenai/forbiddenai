import Link from "next/link";
import { InquireSoonLink, PageFrame, StudioMeta } from "@/components/PageIntro";
import { SectionRule } from "@/components/SectionRule";
import { SlashMark } from "@/components/SlashMark";
import { Wordmark } from "@/components/Wordmark";
import { approachSteps, practices, site } from "@/lib/site";

export default function HomePage() {
  return (
    <PageFrame>
      <section className="relative min-h-[70vh] pt-2 md:pt-4">
        <SlashMark className="pointer-events-none absolute -top-4 -right-10 w-[min(72vw,34rem)] text-white/8 md:-top-2 md:right-[4%]" />
        <div className="animate-fade-in-up">
          <StudioMeta />
        </div>
        <h1
          className="mt-10 max-w-4xl font-display text-[2.7rem] leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.35rem] animate-fade-in-up"
          style={{ animationDelay: "150ms" }}
        >
          We keep the useful parts.
          <span className="mt-2 block italic text-white/88">
            The rest stays forbidden.
          </span>
        </h1>
        <p
          className="mt-8 max-w-xl text-lg leading-8 text-white/68 md:text-xl animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          {site.lede}
        </p>
      </section>

      <SectionRule className="my-16 md:my-24" />

      <section aria-labelledby="practices-heading">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-[0.72rem] tracking-[0.16em] text-white/45 uppercase">
              01 / Practices
            </p>
            <h2
              id="practices-heading"
              className="mt-3 font-display text-3xl tracking-tight md:text-4xl"
            >
              Three lines of work. No costume.
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm text-white/55 transition-all duration-300 ease-out hover:text-white"
          >
            Full services →
          </Link>
        </div>
        <div className="mt-14 grid gap-12 border-t border-white/12 md:grid-cols-3 md:gap-0">
          {practices.map((practice, index) => (
            <article
              key={practice.slug}
              className={`pt-8 md:px-8 md:pt-10 ${index === 0 ? "md:pl-0" : "md:border-l md:border-white/12"} ${index === 2 ? "md:pr-0" : ""}`}
            >
              <p className="font-mono text-[0.7rem] tracking-[0.14em] text-white/40">
                {practice.number}
              </p>
              <h3 className="mt-4 font-display text-3xl tracking-tight">
                {practice.title === "AI" ? (
                  <span className="bg-linear-to-r from-[#146BFF] to-[#8A20FF] bg-clip-text text-transparent">
                    AI
                  </span>
                ) : (
                  practice.title
                )}
              </h3>
              <p className="mt-5 max-w-sm text-[0.98rem] leading-7 text-white/65">
                {practice.summary}
              </p>
            </article>
          ))}
        </div>
      </section>

      <SectionRule className="my-16 md:my-24" />

      <section
        aria-labelledby="work-heading"
        className="grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-end"
      >
        <div>
          <p className="font-mono text-[0.72rem] tracking-[0.16em] text-white/45 uppercase">
            02 / Work
          </p>
          <h2
            id="work-heading"
            className="mt-3 font-display text-3xl tracking-tight md:text-4xl"
          >
            First engagements in progress.
          </h2>
        </div>
        <p className="max-w-lg text-white/60">
          Nothing invented lives on this page. When we have work we can show —
          named, shipped, owned by the client — it will sit here. Until then,
          the empty space is the honest part.
        </p>
      </section>

      <SectionRule className="my-16 md:my-24" />

      <section aria-labelledby="approach-heading">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-[0.72rem] tracking-[0.16em] text-white/45 uppercase">
              03 / Approach
            </p>
            <h2
              id="approach-heading"
              className="mt-3 font-display text-3xl tracking-tight md:text-4xl"
            >
              Scope. Build. Ship.
            </h2>
          </div>
          <Link
            href="/approach"
            className="text-sm text-white/55 transition-all duration-300 ease-out hover:text-white"
          >
            How we work →
          </Link>
        </div>
        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-16">
          {approachSteps.map((step) => (
            <li key={step.number}>
              <p className="font-mono text-[0.7rem] tracking-[0.14em] text-white/40">
                {step.number}
              </p>
              <h3 className="mt-3 font-display text-2xl">{step.title}</h3>
              <p className="mt-4 text-[0.95rem] leading-7 text-white/62">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <SectionRule className="my-16 md:my-24" />

      <section className="grid gap-12 pb-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <Wordmark className="h-auto w-full max-w-md" priority />
          <p className="mt-8 max-w-md text-lg leading-8 text-white/68">
            A small studio in India. Clients anywhere. Inquiries are not open
            yet — when they are, they will live on this site, not in a buried
            inbox.
          </p>
          <div className="mt-8">
            <InquireSoonLink />
          </div>
        </div>
        <p className="font-display text-3xl leading-snug text-white/88 italic md:text-4xl">
          The name is a filter, not a costume.
        </p>
      </section>
    </PageFrame>
  );
}
