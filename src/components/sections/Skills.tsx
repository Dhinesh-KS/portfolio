"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="What I work with" title="Skills & Tech" />

        <div className="space-y-14">
          {skillCategories.map((cat, catIndex) => (
            <CategoryBlock key={cat.category} category={cat} index={catIndex} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryBlock({
  category,
  index,
}: {
  category: (typeof skillCategories)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref}>
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        className="font-heading font-semibold text-xs uppercase tracking-[0.2em] text-muted mb-6"
      >
        {category.category}
      </motion.h3>

      <div className="flex flex-wrap gap-3">
        {category.skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            custom={i}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{
              duration: 0.4,
              delay: i * 0.06,
              ease: [0.25, 0.4, 0.25, 1],
            }}
            className="group relative"
          >
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-border bg-surface hover:border-accent/40 transition-all duration-300 cursor-default hover:bg-surface-2">
              <skill.icon
                size={18}
                style={{ color: skill.color }}
                className="shrink-0 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="font-sans text-sm text-foreground/80 group-hover:text-foreground transition-colors whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
