"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

const ROLES = [
  "Senior Frontend Engineer",
  "Product Thinker",
  "Frontend focused fullstack",
  "UI/UX Enthusiast",
];

const WORDS = [
  { text: "DHINESH", accent: false },
  { text: "KS", accent: true },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 80, -60, 0],
            y: [0, -80, 60, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,94,26,0.18) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <motion.div
          animate={{
            x: [0, -100, 80, 0],
            y: [0, 60, -80, 0],
            scale: [1, 0.9, 1.2, 1],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,214,10,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <motion.div
          animate={{
            x: [0, 50, -40, 0],
            y: [0, -50, 40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 10 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,94,26,0.06) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-6xl w-full mx-auto">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-sans text-accent font-semibold text-sm uppercase tracking-[0.25em] mb-6"
        >
          Hello, I&apos;m
        </motion.p>

        {/* Name — each word animates independently */}
        <h1 className="font-heading font-bold text-[clamp(3rem,10vw,9rem)] leading-[0.9] tracking-tight mb-2">
          {WORDS.map(({ text, accent }, i) => (
            <span key={text} className="inline-block overflow-hidden mr-6">
              <motion.span
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 + i * 0.14 }}
                className={`inline-block ${accent ? "text-accent" : "text-foreground"}`}
              >
                {text}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Cycling role */}
        <div className="h-12 mb-8 flex items-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="font-heading font-semibold text-xl md:text-2xl text-muted"
            >
              — {ROLES[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="font-sans text-muted text-base md:text-lg max-w-xl leading-relaxed mb-10"
        >
          Senior Frontend Engineer with 6+ years building scalable web apps,
          UI libraries & design systems, micro-frontends, monorepos, and
          real-time systems — with a focus on performance & security.
          Experienced in crafting seamless UI/UX for SaaS products.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          <button
            onClick={scrollToProjects}
            className="group relative px-8 py-3.5 bg-accent text-white font-heading font-semibold text-sm uppercase tracking-wider rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,94,26,0.4)]"
          >
            <span className="relative z-10">View Work</span>
            <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          <button
            onClick={scrollToContact}
            className="px-8 py-3.5 border border-border text-foreground font-heading font-semibold text-sm uppercase tracking-wider rounded-full transition-all duration-300 hover:border-accent hover:text-accent"
          >
            Get in Touch
          </button>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiArrowDown className="text-muted" size={18} />
        </motion.div>
        <span className="text-muted font-sans text-xs tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
