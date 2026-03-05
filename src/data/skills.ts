import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiStorybook,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiGit,
  SiGithubactions,
  SiJenkins,
  SiDocker,
  SiVite,
  SiWebpack,
  SiPnpm,
  SiJest,
  SiSentry,
  SiClaude,
} from "react-icons/si";
import { BsCursorFill } from "react-icons/bs";
import { IconType } from "react-icons";

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Web",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "React Native", icon: SiReact, color: "#61DAFB" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Storybook", icon: SiStorybook, color: "#FF4785" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
    ],
  },
  {
    category: "DevOps & Tooling",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "Webpack", icon: SiWebpack, color: "#8DD6F9" },
      { name: "pnpm", icon: SiPnpm, color: "#F69220" },
    ],
  },
  {
    category: "Testing & Observability",
    skills: [
      { name: "Jest", icon: SiJest, color: "#C21325" },
      { name: "Vitest", icon: SiJest, color: "#6E9F18" },
      { name: "Sentry", icon: SiSentry, color: "#362D59" },
    ],
  },
  {
    category: "AI Tooling",
    skills: [
      { name: "Cursor", icon: BsCursorFill, color: "#ffffff" },
      { name: "Claude", icon: SiClaude, color: "#D97757" },
    ],
  },
];
