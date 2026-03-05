"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  title: string;
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  className,
}: SectionHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className={cn("mb-16", className)}>
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="inline-block text-accent font-heading font-semibold text-sm uppercase tracking-[0.2em] mb-3"
      >
        {label}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-4 h-1 w-16 bg-accent origin-left rounded-full"
      />
    </div>
  );
}
