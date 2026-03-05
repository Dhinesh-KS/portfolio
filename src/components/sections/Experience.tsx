"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { experiences } from "@/data/experience";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.3"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="py-24 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="Where I've worked" title="Experience" />

        <div ref={containerRef} className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border overflow-hidden">
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="absolute inset-0 bg-gradient-to-b from-accent to-accent-yellow"
            />
          </div>

          <div className="space-y-12 pl-8 md:pl-24">
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
      className="relative"
    >
      {/* Timeline dot */}
      <div className="absolute -left-8 md:-left-24 top-1.5 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
          className="w-3 h-3 rounded-full bg-accent border-2 border-background shadow-[0_0_10px_rgba(255,94,26,0.5)]"
        />
      </div>

      {/* Card */}
      <div className="group p-6 rounded-2xl border border-border bg-surface hover:border-accent/30 transition-all duration-300 hover:bg-surface-2">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
          <div>
            <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-accent transition-colors">
              {exp.role}
            </h3>
            <p className="font-heading font-semibold text-accent text-sm mt-0.5">
              {exp.company}
            </p>
          </div>
          <div className="text-right shrink-0">
            <span className="inline-block font-sans text-xs text-muted bg-surface-2 border border-border px-3 py-1 rounded-full">
              {exp.period}
            </span>
            <p className="font-sans text-xs text-muted mt-1">{exp.location}</p>
          </div>
        </div>

        <ul className="space-y-2">
          {exp.highlights.map((point, j) => (
            <li key={j} className="flex gap-3 text-sm text-foreground/75 font-sans leading-relaxed">
              <span className="text-accent mt-1.5 shrink-0 text-xs">▸</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {exp.current && (
          <div className="mt-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Current Role
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
