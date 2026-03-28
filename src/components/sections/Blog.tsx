"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import { blogs } from "@/data/blogs";
import { FiExternalLink, FiBookOpen } from "react-icons/fi";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Blog() {
  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="Writing" title="Blog" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((b, i) => (
            <BlogCard key={b.url} blog={b} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogCard({ blog, index }: { blog: (typeof blogs)[0]; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="relative h-full p-6 rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-accent/40">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-sans font-medium uppercase tracking-wider text-accent border border-accent/30 px-2.5 py-1 rounded-full">
            Blog Post
          </span>
          <a href={blog.url} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
            <FiExternalLink size={16} />
          </a>
        </div>

        <h3 className="font-heading font-bold text-xl text-foreground mb-3">
          {blog.title}
        </h3>

        <p className="font-sans text-sm text-muted leading-relaxed mb-6">{blog.description}</p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {(blog.tags ?? []).map((tag) => (
            <span key={tag} className="text-xs font-sans text-muted/80 bg-surface-2 border border-border px-2.5 py-1 rounded-lg">
              {tag}
            </span>
          ))}
        </div>

        <a href={blog.url} target="_blank" rel="noopener noreferrer" className="mt-5 flex items-center gap-2 text-sm font-heading font-semibold text-muted hover:text-accent transition-colors">
          <span>Read Article</span>
          <FiBookOpen size={14} />
        </a>
      </div>
    </motion.div>
  );
}
