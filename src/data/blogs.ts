export interface Blog {
  title: string;
  description: string;
  url: string;
  date?: string;
  tags?: string[];
  slug?: string;
}

export const blogs: Blog[] = [
  {
    title: "The Hidden Code Sharing Problem in Micro Frontends",
    description:
      "An exploration of the subtle code-sharing challenges when building micro-frontends and practical approaches to reduce duplication.",
    url: "https://dev.to/dhinesh_ks_9db13f15d64f7/micro-frontends-the-hidden-code-sharing-problem-4j90",
    date: "2024-01-01",
    tags: ["micro-frontends", "architecture", "javascript"],
    slug: "micro-frontends-hidden-code-sharing",
  },
  {
    title: "The Hidden Problem with Embedded Chat Widgets (and How Iframes Fix It)",
    description:
      "How to isolate styling and scripts for embeddable chat widgets using cross-origin iframes to avoid collisions and leaks.",
    url: "https://dev.to/dhinesh_ks_9db13f15d64f7/building-a-new-gen-chat-widget-css-and-javascript-isolation-with-cross-origin-iframes-4ag6",
    date: "2024-02-10",
    tags: ["widgets", "iframes", "css", "isolation"],
    slug: "chat-widget-css-js-isolation",
  },
  {
    title: "Decoupling UI from Code in Modern Chat Widgets",
    description:
      "Designing a JSON-driven rendering architecture to enable flexible, data-driven chat widget rendering across platforms.",
    url: "https://dev.to/dhinesh_ks_9db13f15d64f7/building-a-new-gen-chat-widget-json-driven-rendering-architecture-2542",
    date: "2024-03-05",
    tags: ["architecture", "json", "rendering"],
    slug: "chat-widget-json-driven-rendering",
  },
];

export default blogs;
