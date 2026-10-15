import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame } from "@/components/PageIntro";
import { SectionRule } from "@/components/SectionRule";
import { SlashMark } from "@/components/SlashMark";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "ERD Forge — Free Browser-Based Database Schema Designer",
  description:
    "Design, visualize, and document database schemas in your browser. Import SQL DDL from PostgreSQL, MySQL, and SQLite. Analyze query lineage. Local-first — no account, no server, your data never leaves your device. Free and open source.",
  openGraph: {
    title: "ERD Forge — Free Browser-Based Database Schema Designer",
    description:
      "Local-first ERD tool. Import SQL DDL, visualize relationships, analyze query lineage — all in the browser. No sign-up. Built by Forbidden AI.",
    url: `${site.url}/tools/erd-forge`,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ERD Forge — Free ERD Tool in Your Browser",
    description:
      "No sign-up. No server. Your data stays on your device. Built by Forbidden AI.",
  },
  alternates: {
    canonical: `${site.url}/tools/erd-forge`,
  },
  keywords: [
    "ERD tool",
    "database schema designer",
    "ER diagram",
    "free ERD tool",
    "browser based ERD",
    "SQL DDL import",
    "local-first database tool",
    "no account database tool",
    "entity relationship diagram",
    "query lineage analyzer",
    "wa-sqlite",
    "OPFS database designer",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ERD Forge",
  applicationCategory: "DeveloperApplication",
  applicationSubCategory: "Database Tool",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Local-first ERD modeling and data catalog platform. Design database schemas visually, import SQL DDL from PostgreSQL, MySQL, and SQLite, analyze query lineage, and export diagrams — all in the browser. No account. No server. Your data never leaves your device.",
  featureList: [
    "Visual ERD canvas with drag-and-drop tables",
    "SQL DDL import — PostgreSQL, MySQL, SQLite",
    "SQL query lineage analyzer",
    "Local-first OPFS storage — data never leaves the browser",
    "Export diagrams to PNG and SVG",
    "Progressive Web App — installable, works offline",
    "Dark and light theme",
    "Free and open source",
  ],
  author: {
    "@type": "Organization",
    name: "Forbidden AI",
    url: site.url,
  },
  url: `${site.url}/tools/erd-forge`,
  downloadUrl: `${site.url}/tools/erd-forge/app/`,
  softwareVersion: "0.1.0",
  isAccessibleForFree: true,
};

const capabilities = [
  {
    number: "01",
    title: "Visual Schema Modeling",
    summary:
      "Interactive diagramming canvas with drag-and-drop entities, field definition, primary and foreign key mapping, and automatic relationship routing.",
  },
  {
    number: "02",
    title: "Multi-Dialect SQL DDL Import",
    summary:
      "Paste existing CREATE TABLE statements from PostgreSQL, MySQL, or SQLite. ERD Forge parses schemas instantly without a connected database.",
  },
  {
    number: "03",
    title: "SQL Query Lineage Analyzer",
    summary:
      "Inspect complex queries to trace data origin, column transformations, joins, and downstream dependencies across your tables.",
  },
  {
    number: "04",
    title: "Local-First Privacy (OPFS)",
    summary:
      "Powered by SQLite on Origin Private File System (OPFS). Your schemas are stored inside your browser sandboxed storage — zero telemetry, zero server uploads.",
  },
  {
    number: "05",
    title: "Diagram Export & Sharing",
    summary:
      "Export high-resolution PNG or vector SVG diagrams for architecture docs, pull requests, engineering RFCs, and documentation wikis.",
  },
  {
    number: "06",
    title: "Offline-First PWA",
    summary:
      "Install ERD Forge as a desktop or mobile Progressive Web App. Continue modeling schemas without an active internet connection.",
  },
];

export default function ERDForgeLandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageFrame>
        {/* ── Hero Section ── */}
        <section aria-labelledby="hero-heading" className="relative pt-4 md:pt-8">
          <SlashMark className="pointer-events-none absolute -top-4 -right-10 w-[min(72vw,34rem)] text-white/8 md:-top-2 md:right-[4%]" />
          <p className="font-mono text-[0.72rem] tracking-[0.16em] text-white/45 uppercase">
            Tools / Local-First / Open Source
          </p>

          <h1
            id="hero-heading"
            className="mt-6 max-w-4xl font-display text-[2.6rem] leading-[1] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.2rem]"
          >
            ERD Forge.
            <span className="mt-2 block italic text-white/88">
              Database schema designer in your browser.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
            A free, local-first ERD modeling and SQL lineage tool that runs entirely
            on your device. No login. No database connection required. Your schema never
            touches a remote server.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="/tools/erd-forge/app/"
              rel="noopener"
              className="inline-flex items-center gap-3 bg-white px-7 py-3.5 text-sm font-medium tracking-wide text-black transition-all duration-300 ease-out hover:bg-white/90 hover:shadow-[0_0_24px_rgba(255,255,255,0.25)]"
            >
              <span>Open ERD Forge</span>
              <span aria-hidden>→</span>
            </a>

            <a
              href="https://github.com/fobiddenai/erd-forge"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 px-6 py-3.5 text-sm font-medium tracking-wide text-white/80 transition-all duration-300 ease-out hover:border-white/50 hover:text-white"
            >
              <span>GitHub</span>
              <span aria-hidden>↗</span>
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-6 text-xs text-white/50 font-mono">
            <div>
              <span className="text-white/80">Storage:</span> In-Browser OPFS (SQLite)
            </div>
            <div>
              <span className="text-white/80">SQL Dialects:</span> PostgreSQL, MySQL, SQLite
            </div>
            <div>
              <span className="text-white/80">Pricing:</span> 100% Free & Open Source
            </div>
          </div>
        </section>

        <SectionRule className="my-16 md:my-24" />

        {/* ── Capabilities Section ── */}
        <section aria-labelledby="capabilities-heading">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-[0.72rem] tracking-[0.16em] text-white/45 uppercase">
                02 / Capabilities
              </p>
              <h2
                id="capabilities-heading"
                className="mt-3 font-display text-3xl tracking-tight md:text-4xl"
              >
                Everything you need to design and understand schemas.
              </h2>
            </div>
            <a
              href="/tools/erd-forge/app/"
              rel="noopener"
              className="text-sm text-white/55 transition-all duration-300 ease-out hover:text-white"
            >
              Launch canvas →
            </a>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => (
              <article
                key={cap.number}
                className="border border-white/12 p-8 transition-colors duration-300 hover:border-white/25"
              >
                <p className="font-mono text-[0.7rem] tracking-[0.14em] text-white/40">
                  {cap.number}
                </p>
                <h3 className="mt-4 font-display text-2xl tracking-tight text-white">
                  {cap.title}
                </h3>
                <p className="mt-4 text-[0.95rem] leading-7 text-white/65">
                  {cap.summary}
                </p>
              </article>
            ))}
          </div>
        </section>

        <SectionRule className="my-16 md:my-24" />

        {/* ── Privacy & Architecture ── */}
        <section
          aria-labelledby="privacy-heading"
          className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-start"
        >
          <div>
            <p className="font-mono text-[0.72rem] tracking-[0.16em] text-white/45 uppercase">
              03 / Privacy Architecture
            </p>
            <h2
              id="privacy-heading"
              className="mt-3 font-display text-3xl tracking-tight md:text-4xl"
            >
              Your database structure is sensitive. Keep it local.
            </h2>
          </div>

          <div className="space-y-6 text-[0.98rem] leading-7 text-white/65">
            <p>
              Many online database tools require uploading your DDL or connecting your
              live database credentials to their cloud infrastructure. For proprietary
              schemas and production workloads, this creates unnecessary compliance and
              security exposure.
            </p>
            <p>
              ERD Forge executes WebAssembly-compiled SQLite directly inside your browser.
              Tables, foreign keys, and lineage maps are stored in your private browser sandbox
              via the Origin Private File System (OPFS). No data is sent over the network,
              and no login is ever requested.
            </p>
          </div>
        </section>

        <SectionRule className="my-16 md:my-24" />

        {/* ── Attribution / Studio Callout ── */}
        <section
          aria-labelledby="built-by-heading"
          className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:items-end"
        >
          <div>
            <p className="font-mono text-[0.72rem] tracking-[0.16em] text-white/45 uppercase">
              04 / Studio
            </p>
            <h2
              id="built-by-heading"
              className="mt-3 font-display text-3xl tracking-tight md:text-4xl"
            >
              Built by Forbidden AI.
            </h2>
            <p className="mt-5 max-w-xl text-[0.98rem] leading-7 text-white/65">
              ERD Forge was designed and built by{" "}
              <Link
                href="/"
                className="text-white underline underline-offset-4 decoration-white/40 hover:decoration-white"
              >
                Forbidden AI
              </Link>
              , a software studio in India that builds production software, AI integrations,
              and internal tools. We open-source tools when we build something we use ourselves.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row md:justify-end">
            <a
              href="/tools/erd-forge/app/"
              rel="noopener"
              className="inline-flex items-center justify-center gap-3 bg-white px-7 py-3.5 text-sm font-medium tracking-wide text-black transition-all duration-300 ease-out hover:bg-white/90"
            >
              <span>Launch ERD Forge</span>
              <span aria-hidden>→</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/20 px-6 py-3.5 text-sm font-medium tracking-wide text-white/80 transition-all duration-300 ease-out hover:border-white/50 hover:text-white"
            >
              <span>Contact Studio</span>
            </Link>
          </div>
        </section>
      </PageFrame>
    </>
  );
}
