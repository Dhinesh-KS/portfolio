"use client";

import { useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, useSpring } from "framer-motion";
import { FiExternalLink, FiGithub, FiBookOpen } from "react-icons/fi";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="Things I've built" title="Projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), {
    stiffness: 200,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      style={{ perspective: 800 }}
    >
      <motion.div
        ref={cardRef}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative h-full p-6 rounded-2xl border border-border bg-surface cursor-default
          transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_40px_rgba(255,94,26,0.08)]"
      >
        {/* Glow overlay on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Type badge */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-sans font-medium uppercase tracking-wider text-accent border border-accent/30 px-2.5 py-1 rounded-full">
            {project.type === "blog" ? "Blog Post" : "Project"}
          </span>
          <div className="flex gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <FiGithub size={16} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <FiExternalLink size={16} />
              </a>
            )}
            {project.blogUrl && (
              <a
                href={project.blogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <FiBookOpen size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-heading font-bold text-xl text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="font-sans text-sm text-muted leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-sans text-muted/80 bg-surface-2 border border-border px-2.5 py-1 rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Main CTA link */}
        <a
          href={project.liveUrl ?? project.blogUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex items-center gap-2 text-sm font-heading font-semibold text-muted hover:text-accent transition-colors group/link"
        >
          <span>{project.type === "blog" ? "Read Article" : "View Live"}</span>
          <FiExternalLink
            size={14}
            className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
          />
        </a>
      </motion.div>
    </motion.div>
  );
}
