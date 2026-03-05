export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  highlights: string[];
}

export const experiences: ExperienceItem[] = [
  {
    company: "Yellow.ai",
    role: "Software Development Engineer — L2",
    location: "Abu Dhabi, UAE",
    period: "Jun 2025 – Present",
    current: true,
    highlights: [
      "Architected a schema-driven conversational widget with real-time streaming — decoupling UI from data contracts for scalable extensibility.",
      "Led full-stack delivery of an internal project management platform (Next.js, Prisma, SQL, n8n), eliminating DevRev and saving $42K annually.",
      "Cut build times by 70% migrating 4+ MFE repos from Webpack to Rsbuild + Module Federation v2 inside a Turbopack monorepo.",
      "Reduced cold installs by 60% and eliminated phantom dependencies by migrating cloud-app to pnpm — improving DX across the team.",
      "Built the Copilot Playground with a traces & logs visualizer and LLM debug analyser, cutting bot developer debugging time by 50%.",
    ],
  },
  {
    company: "Yellow.ai",
    role: "Software Development Engineer — L2",
    location: "Bangalore, India",
    period: "Feb 2024 – May 2025",
    highlights: [
      "Built Yellow Paper — a customizable Tiptap WYSIWYG editor with IndexedDB-powered offline drafts, adopted across 5+ product modules.",
      "Engineered XMPP-based real-time Internal Ticketing, Custom Views, Activity Logs, and Voice Inbox for the agent-facing platform.",
      "Founded the Hawk-eye utility library, centralizing cross-MFE shared logic and reducing code duplication by 80%.",
      "Contributed to frontend excellence: design system, i18n, telemetry, app security, page load perf, and internal tech talks.",
    ],
  },
  {
    company: "Yellow.ai",
    role: "Software Development Engineer — L1",
    location: "Bangalore, India",
    period: "Jan 2022 – Jan 2024",
    highlights: [
      "Designed and shipped the Free Trial Experience with feature gates — directly boosting trial-to-paid conversions by 15%.",
      "Built guided onboarding and revamped login & bot activation flows as part of a PLG-led product growth initiative.",
      "Automated Stripe-powered subscription renewals and payment flows, improving transaction efficiency by 20%+.",
    ],
  },
  {
    company: "Psiog Digital",
    role: "Software Engineer",
    location: "Chennai, India",
    period: "Aug 2019 – Dec 2021",
    highlights: [
      "Built a cross-platform mobile app with React Native + Expo, backed by Node.js REST APIs and MongoDB.",
      "Improved Core Web Vitals and initial load time by 20% via code splitting, lazy loading, and Lighthouse-validated asset optimization.",
    ],
  },
];
