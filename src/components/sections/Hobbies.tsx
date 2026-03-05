"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { hobbies } from "@/data/hobbies";

export default function Hobbies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="hobbies" className="py-24 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="Beyond the code" title="Hobbies" />

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {hobbies.map((hobby, i) => (
            <motion.div
              key={hobby.label}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={
                isInView ? { opacity: 1, y: 0, scale: 1 } : {}
              }
              transition={{
                duration: 0.55,
                delay: i * 0.1,
                ease: [0.34, 1.4, 0.64, 1],
              }}
              className="group relative p-7 rounded-2xl border border-border bg-surface hover:border-opacity-60 transition-all duration-300 overflow-hidden"
              style={
                {
                  "--hobby-color": hobby.color,
                } as React.CSSProperties
              }
            >
              {/* Background glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 30% 50%, ${hobby.color}18 0%, transparent 70%)`,
                }}
              />

              {/* Border accent on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: `inset 0 0 0 1px ${hobby.color}40` }}
              />

              {/* Emoji */}
              <motion.span
                whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
                className="block text-5xl mb-5 select-none cursor-default"
              >
                {hobby.emoji}
              </motion.span>

              {/* Label */}
              <h3
                className="font-heading font-bold text-xl mb-2 transition-colors duration-300"
                style={{ color: hobby.color }}
              >
                {hobby.label}
              </h3>

              {/* Description */}
              <p className="font-sans text-sm text-muted leading-relaxed">
                {hobby.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
