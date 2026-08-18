export const site = {
  name: "Forbidden AI",
  legalName: "ForbiddenAI",
  url: "https://forbiddenai.in",
  location: "India · working worldwide",
  tagline: "We keep the useful parts. The rest stays forbidden.",
  lede: "Software, consulting, and AI — built in India, shipped worldwide.",
  description:
    "Forbidden AI is a small studio in India that designs, builds, and advises on software and AI for teams anywhere. We refuse hype, unsafe shortcuts, and theatre.",
} as const;

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/approach", label: "Approach" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const practices = [
  {
    number: "01",
    slug: "software",
    title: "Software",
    summary:
      "Production web apps, internals, and the unglamorous systems that actually run a company.",
    takeOn: [
      "Web products and customer-facing apps",
      "Internal tools, dashboards, and workflows",
      "APIs, backends, and integrations that have to stay up",
    ],
    leave: [
      "Throwaway prototypes dressed up as launches",
      "Rebuilds with no owner on your side",
    ],
  },
  {
    number: "02",
    slug: "consulting",
    title: "Consulting",
    summary:
      "Written scope, architecture, and product advice — before anyone opens an editor.",
    takeOn: [
      "Architecture and build-vs-buy decisions",
      "Product definition when the brief is still muddy",
      "Reviews of what you already have, without a sales pitch attached",
    ],
    leave: [
      "Open-ended retainers with no artifact",
      "Strategy decks that expire in a week",
    ],
  },
  {
    number: "03",
    slug: "ai",
    title: "AI",
    summary:
      "Agents, automation, and product features — only where they earn their keep.",
    takeOn: [
      "AI inside a real product, not a demo",
      "Automation that replaces a known, painful step",
      "Honest assessment of where a model does not belong",
    ],
    leave: [
      "Chatbots for the sake of having a chatbot",
      "“AI transformation” with no system at the end",
    ],
  },
] as const;

export const approachSteps = [
  {
    number: "01",
    title: "Scope",
    body: "We pin down the real problem and the smallest thing that solves it. You get a written proposal with milestones before anything starts.",
  },
  {
    number: "02",
    title: "Build",
    body: "Working software you can click — weekly, not in a status deck. If something is late or wrong, you see it while it is still cheap to change.",
  },
  {
    number: "03",
    title: "Ship",
    body: "We deploy, hand over cleanly, and you own the code and the repo. Stay on for the next iteration if you want. Leave any time if you don’t.",
  },
] as const;
