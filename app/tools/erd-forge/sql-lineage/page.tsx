import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame } from "@/components/PageIntro";
import { SectionRule } from "@/components/SectionRule";
import { SlashMark } from "@/components/SlashMark";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "SQL Lineage Analyzer Online — Free Column-Level SQL Visualizer",
  description:
    "Paste SQL to visualize table and column-level lineage in your browser. Trace CTEs, joins, subqueries, and downstream impact across 9 SQL dialects including Snowflake, BigQuery, PostgreSQL, and SQL Server. Powered by WebAssembly — zero server uploads.",
  openGraph: {
    title: "SQL Lineage Analyzer Online — ERD Forge by Forbidden AI",
    description:
      "Free browser-based SQL lineage visualizer. Trace column-level lineage, CTEs, and table dependencies across 9 SQL dialects with zero server uploads. Export PNG, SVG, and CSV.",
    url: `${site.url}/tools/erd-forge/sql-lineage`,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SQL Lineage Analyzer Online — Free Browser Visualizer",
    description:
      "Column-level SQL lineage & CTE dependency diagrams in your browser via WebAssembly. Zero uploads. No account.",
  },
  alternates: {
    canonical: `${site.url}/tools/erd-forge/sql-lineage`,
  },
  keywords: [
    "sql lineage analyzer online",
    "sql lineage visualizer",
    "sql lineage tool",
    "column level lineage sql",
    "sql lineage diagram",
    "sqlflow alternative",
    "sql parser lineage",
    "snowflake sql lineage visualizer",
    "bigquery sql lineage tool",
    "postgresql sql lineage diagram",
  ],
};

const dialects = [
  { id: "snowflake", label: "Snowflake" },
  { id: "bigquery", label: "BigQuery" },
  { id: "postgresql", label: "PostgreSQL" },
  { id: "mssql", label: "SQL Server (T-SQL)" },
  { id: "redshift", label: "Redshift" },
  { id: "mysql", label: "MySQL" },
  { id: "oracle", label: "Oracle" },
  { id: "databricks", label: "Databricks" },
  { id: "sqlite", label: "SQLite" },
] as const;

const capabilities = [
  {
    number: "01",
    title: "Column-Level SQL Lineage",
    summary:
      "Switch between table-level and column-level views to inspect how individual fields flow through SELECT projections, expressions, JOINs, WHERE clauses, and GROUP BY keys.",
  },
  {
    number: "02",
    title: "CTE & Subquery Stitching",
    summary:
      "Trace multi-step WITH CTE pipelines, set operations, window functions, and multi-statement SQL scripts in a left-to-right or top-to-bottom interactive DAG.",
  },
  {
    number: "03",
    title: "Upstream & Downstream Impact",
    summary:
      "Click any source table, CTE, or output node to highlight every upstream feeder and downstream consumer before altering columns or refactoring production SQL.",
  },
  {
    number: "04",
    title: "Client-Side Rust WASM Parser",
    summary:
      "Runs WebAssembly SQL parsing inside a dedicated browser Web Worker. Proprietary warehouse queries never leave your machine—no API keys, telemetry, or backend upload.",
  },
  {
    number: "05",
    title: "Cross-Link With Your ERD",
    summary:
      "Match referenced SQL tables against your ERD Forge schema catalog, spot phantom tables missing from your schema, and add discovered tables to your ERD in one click.",
  },
  {
    number: "06",
    title: "PNG, SVG & CSV Export",
    summary:
      "Export architecture-ready PNG or vector SVG lineage graphs for PRs and RFCs, or download column-level dependency mappings as structured CSV.",
  },
] as const;

const comparisons = [
  {
    approach: "ERD Forge SQL Lineage",
    execution: "100% browser WebAssembly",
    setup: "None — open and paste SQL",
    privacy: "Queries stay on your device",
    bestFor: "Instant visual table & column lineage, CTE debugging, RFC diagrams",
  },
  {
    approach: "Commercial Cloud Analyzers (e.g. SQLFlow)",
    execution: "Remote server / commercial license",
    setup: "Web upload or on-prem container",
    privacy: "SQL sent to server unless self-hosted",
    bestFor: "Deep proprietary stored-procedure suites requiring enterprise parsing",
  },
  {
    approach: "Python CLI Libraries (sqllineage / sqlglot)",
    execution: "Local Python runtime",
    setup: "Python env + pip install + scripting",
    privacy: "Local execution",
    bestFor: "Automated CI/CD scripts and programmatic AST pipelines",
  },
  {
    approach: "Data Catalogs (DataHub / OpenMetadata)",
    execution: "Self-hosted platform / SaaS",
    setup: "Docker/Kubernetes + metadata ingestion",
    privacy: "Self-hosted or vendor cloud",
    bestFor: "Org-wide governance across warehouses, Airflow, and BI tools",
  },
] as const;

const faqs = [
  {
    question: "What is SQL lineage?",
    answer:
      "SQL lineage maps how data moves and transforms across SQL queries, CTEs, views, and pipelines—showing which source tables and columns feed downstream tables and final outputs.",
  },
  {
    question: "Does ERD Forge support column-level SQL lineage?",
    answer:
      "Yes. You can toggle between Table view and Column view to inspect column-to-column derivations across joins, aggregations, window functions, and multi-CTE queries, and export column mappings to CSV.",
  },
  {
    question: "Do my SQL queries leave my browser?",
    answer:
      "No. ERD Forge parses SQL locally in a browser Web Worker using WebAssembly. No SQL script, table name, or schema definition is uploaded to a remote server.",
  },
  {
    question: "How does static SQL AST lineage differ from warehouse query logs?",
    answer:
      "Static AST parsing analyzes SQL code directly without needing warehouse credentials or executing queries, making it ideal for reviewing PRs, debugging CTEs, and modeling changes before deployment.",
  },
] as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "ERD Forge SQL Lineage Analyzer",
      applicationCategory: "DeveloperApplication",
      applicationSubCategory: "SQL Lineage Visualizer",
      operatingSystem: "Web Browser",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      description:
        "Free browser-based SQL lineage visualizer and analyzer. Paste SQL queries to generate interactive table and column-level lineage diagrams across 9 SQL dialects using WebAssembly.",
      featureList: [
        "Table-level and column-level SQL lineage graphs",
        "CTE, subquery, union, and window function dependency tracing",
        "9 SQL dialects: Snowflake, BigQuery, PostgreSQL, SQL Server, Redshift, MySQL, Oracle, Databricks, SQLite",
        "Local-first Rust WebAssembly SQL parser — zero server uploads",
        "Upstream and downstream node impact highlighting",
        "Export lineage graphs to PNG, SVG, and column mappings to CSV",
      ],
      author: {
        "@type": "Organization",
        name: "Forbidden AI",
        url: site.url,
      },
      url: `${site.url}/tools/erd-forge/sql-lineage`,
      downloadUrl: `${site.url}/tools/erd-forge/app/?mode=lineage`,
      isAccessibleForFree: true,
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function SqlLineagePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageFrame>
        {/* ── Hero Section ── */}
        <section aria-labelledby="lineage-hero-heading" className="relative pt-4 md:pt-8">
          <SlashMark className="pointer-events-none absolute -top-4 -right-10 w-[min(72vw,34rem)] text-white/8 md:-top-2 md:right-[4%]" />
          <p className="font-mono text-[0.72rem] tracking-[0.16em] text-white/45 uppercase">
            <Link href="/tools/erd-forge" className="hover:text-white/80">
              Tools / ERD Forge
            </Link>{" "}
            / SQL Lineage
          </p>

          <h1
            id="lineage-hero-heading"
            className="mt-6 max-w-4xl font-display text-[2.5rem] leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5rem]"
          >
            SQL Lineage Analyzer.
            <span className="mt-2 block italic text-white/88">
              Trace tables, CTEs, and columns in your browser.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
            Paste any SQL pipeline to visualize interactive table and column-level lineage
            across 9 SQL dialects. Powered by local WebAssembly—no database connection, no
            sign-up, and zero server uploads.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="/tools/erd-forge/app/?mode=lineage"
              rel="noopener"
              className="inline-flex items-center gap-3 bg-white px-7 py-3.5 text-sm font-medium tracking-wide text-black transition-all duration-300 ease-out hover:bg-white/90 hover:shadow-[0_0_24px_rgba(255,255,255,0.25)]"
            >
              <span>Open SQL Lineage Analyzer</span>
              <span aria-hidden>→</span>
            </a>

            <Link
              href="/tools/erd-forge"
              className="inline-flex items-center gap-2 border border-white/20 px-6 py-3.5 text-sm font-medium tracking-wide text-white/80 transition-all duration-300 ease-out hover:border-white/50 hover:text-white"
            >
              <span>ERD Schema Designer</span>
            </Link>

            <a
              href="https://github.com/fobiddenai/erd-forge"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/15 px-5 py-3.5 text-sm font-medium tracking-wide text-white/65 transition-all duration-300 ease-out hover:border-white/40 hover:text-white"
            >
              <span>GitHub</span>
              <span aria-hidden>↗</span>
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-6 font-mono text-xs text-white/50">
            <div>
              <span className="text-white/80">Engine:</span> Client-Side Rust WASM
            </div>
            <div>
              <span className="text-white/80">Granularity:</span> Table &amp; Column-Level
            </div>
            <div>
              <span className="text-white/80">Exports:</span> PNG, SVG &amp; CSV
            </div>
          </div>
        </section>

        <SectionRule className="my-16 md:my-24" />

        {/* ── Dialect Launchers ── */}
        <section aria-labelledby="dialects-heading">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-[0.72rem] tracking-[0.16em] text-white/45 uppercase">
                01 / Supported Dialects
              </p>
              <h2
                id="dialects-heading"
                className="mt-3 font-display text-3xl tracking-tight md:text-4xl"
              >
                Launch directly with your SQL dialect.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/55">
              Select a warehouse or database dialect to open the interactive SQL Lineage
              workspace pre-configured for that grammar.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {dialects.map((dialect) => (
              <a
                key={dialect.id}
                href={`/tools/erd-forge/app/?mode=lineage&dialect=${dialect.id}`}
                rel="noopener"
                className="group flex items-center justify-between border border-white/12 px-5 py-4 text-sm text-white/80 transition-colors duration-200 hover:border-white/45 hover:text-white"
              >
                <span>{dialect.label}</span>
                <span
                  aria-hidden
                  className="font-mono text-xs text-white/40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-white"
                >
                  →
                </span>
              </a>
            ))}
          </div>
        </section>

        <SectionRule className="my-16 md:my-24" />

        {/* ── Capabilities Section ── */}
        <section aria-labelledby="lineage-capabilities-heading">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-[0.72rem] tracking-[0.16em] text-white/45 uppercase">
                02 / Capabilities
              </p>
              <h2
                id="lineage-capabilities-heading"
                className="mt-3 font-display text-3xl tracking-tight md:text-4xl"
              >
                Built for debugging complex SQL pipelines fast.
              </h2>
            </div>
            <a
              href="/tools/erd-forge/app/?mode=lineage"
              rel="noopener"
              className="text-sm text-white/55 transition-all duration-300 ease-out hover:text-white"
            >
              Open visualizer →
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

        {/* ── Comparison Section ── */}
        <section aria-labelledby="comparison-heading">
          <p className="font-mono text-[0.72rem] tracking-[0.16em] text-white/45 uppercase">
            03 / Choosing an Approach
          </p>
          <h2
            id="comparison-heading"
            className="mt-3 max-w-3xl font-display text-3xl tracking-tight md:text-4xl"
          >
            Lightweight browser visualizer vs. CLI parsers &amp; heavy catalogs.
          </h2>

          <div className="mt-10 overflow-x-auto border border-white/12">
            <table className="w-full min-w-[680px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-white/12 font-mono text-xs text-white/50 uppercase">
                  <th className="px-5 py-4 font-medium">Tool Category</th>
                  <th className="px-5 py-4 font-medium">Execution</th>
                  <th className="px-5 py-4 font-medium">Setup</th>
                  <th className="px-5 py-4 font-medium">Data Handling</th>
                  <th className="px-5 py-4 font-medium">Best Fit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-white/70">
                {comparisons.map((row, idx) => (
                  <tr key={row.approach} className={idx === 0 ? "bg-white/[0.03] text-white" : ""}>
                    <td className="px-5 py-4 font-medium">{row.approach}</td>
                    <td className="px-5 py-4">{row.execution}</td>
                    <td className="px-5 py-4">{row.setup}</td>
                    <td className="px-5 py-4">{row.privacy}</td>
                    <td className="px-5 py-4">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <SectionRule className="my-16 md:my-24" />

        {/* ── FAQ & Bottom CTA ── */}
        <section aria-labelledby="faq-heading" className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div>
            <p className="font-mono text-[0.72rem] tracking-[0.16em] text-white/45 uppercase">
              04 / FAQ
            </p>
            <h2
              id="faq-heading"
              className="mt-3 font-display text-3xl tracking-tight md:text-4xl"
            >
              Common questions on static SQL lineage.
            </h2>

            <dl className="mt-10 space-y-8">
              {faqs.map((item) => (
                <div key={item.question} className="border-t border-white/10 pt-6">
                  <dt className="font-display text-xl text-white">{item.question}</dt>
                  <dd className="mt-3 text-[0.95rem] leading-7 text-white/65">
                    {item.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex flex-col justify-between border border-white/12 p-8">
            <div>
              <p className="font-mono text-[0.7rem] tracking-[0.14em] text-white/45 uppercase">
                Start Analyzing
              </p>
              <h3 className="mt-4 font-display text-2xl tracking-tight text-white">
                Inspect your next SQL query in seconds.
              </h3>
              <p className="mt-4 text-[0.95rem] leading-7 text-white/65">
                Load the built-in E-Commerce CTE or Customer 360 sample, or paste your
                own production SQL script directly in the browser.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href="/tools/erd-forge/app/?mode=lineage"
                rel="noopener"
                className="inline-flex items-center justify-center gap-3 bg-white px-6 py-3.5 text-sm font-medium tracking-wide text-black transition-all duration-300 ease-out hover:bg-white/90"
              >
                <span>Launch SQL Lineage Analyzer</span>
                <span aria-hidden>→</span>
              </a>
              <Link
                href="/tools/erd-forge"
                className="inline-flex items-center justify-center gap-2 border border-white/20 px-6 py-3.5 text-sm font-medium tracking-wide text-white/80 transition-all duration-300 ease-out hover:border-white/50 hover:text-white"
              >
                <span>Explore ERD Forge Schema Designer</span>
              </Link>
            </div>
          </div>
        </section>
      </PageFrame>
    </>
  );
}

