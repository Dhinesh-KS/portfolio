export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  blogUrl?: string;
  type: "app" | "blog";
}

export const projects: Project[] = [
  {
    title: "Wallet App",
    description:
      "A personal finance tracker with intuitive UI, expense categorization, balance overview, and smooth transaction management.",
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "Netlify"],
    liveUrl: "https://dhinesh-wallet-app-ui.netlify.app/",
    githubUrl: "https://github.com/Dhinesh-KS/wallet-app",
    type: "app",
  },
  {
    title: "Food Assistant",
    description:
      "AI-powered restaurant ordering system with multi-turn conversations, schema-driven dynamic UI rendering, and real-time SSE streaming — built with OpenAI GPT-4o-mini.",
    tags: ["Next.js 14", "OpenAI", "TypeScript", "Zustand", "Shadcn/ui", "Clerk", "Tailwind CSS", "Docker"],
    liveUrl: "https://food-assistant.vercel.app/",
    githubUrl: "https://github.com/Dhinesh-KS/food-assistant",
    type: "app",
  },
  {
    title: "Deep Dive: UI Utility Library",
    description:
      "Architecture deep-dive on building Hawk-eye — a centralized UI utility library that cut MFE code duplication by 80% across Yellow.ai's micro-frontend platform.",
    tags: ["MFE", "Architecture", "JavaScript", "Design System", "DX", "Monorepo"],
    blogUrl:
      "https://tech.yellow.ai/p/deep-dive-into-the-ui-utility-library",
    type: "blog",
  },
];
