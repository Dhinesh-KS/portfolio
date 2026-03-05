"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { FiSend, FiCheck, FiAlertCircle, FiMail, FiLinkedin, FiPhone } from "react-icons/fi";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedWrapper from "@/components/ui/AnimatedWrapper";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

type Status = "idle" | "loading" | "success" | "error";

const contactLinks = [
  {
    icon: FiMail,
    label: "dhinesh.ks.work@gmail.com",
    href: "mailto:dhinesh.ks.work@gmail.com",
  },
  {
    icon: FiLinkedin,
    label: "linkedin.com/in/dhinesh-ks",
    href: "https://www.linkedin.com/in/dhinesh-ks-836268168/",
  },
  {
    icon: FiPhone,
    label: "+91 97883 48745",
    href: "tel:+919788348745",
  },
];

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="Let's talk" title="Get in Touch" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: info */}
          <AnimatedWrapper direction="left">
            <p className="font-sans text-muted leading-relaxed text-base mb-10">
              I&apos;m open to interesting opportunities, collaborations, and conversations.
              Whether you have a project in mind, a question, or just want to connect —
              reach out and I&apos;ll get back to you.
            </p>

            <div className="space-y-5">
              {contactLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl border border-border bg-surface flex items-center justify-center group-hover:border-accent/50 group-hover:bg-surface-2 transition-all duration-300">
                    <Icon size={16} className="text-muted group-hover:text-accent transition-colors" />
                  </div>
                  <span className="font-sans text-sm text-muted group-hover:text-foreground transition-colors">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </AnimatedWrapper>

          {/* Right: form */}
          <AnimatedWrapper direction="right" delay={0.1}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block font-sans text-xs font-medium uppercase tracking-wider text-muted mb-2">
                  Name
                </label>
                <input
                  {...register("name")}
                  placeholder="John Doe"
                  className="w-full px-4 py-3.5 rounded-xl border border-border bg-surface text-foreground font-sans text-sm placeholder:text-muted/40
                    focus:outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/10 transition-all duration-200"
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-400 font-sans">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block font-sans text-xs font-medium uppercase tracking-wider text-muted mb-2">
                  Email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3.5 rounded-xl border border-border bg-surface text-foreground font-sans text-sm placeholder:text-muted/40
                    focus:outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/10 transition-all duration-200"
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-400 font-sans">{errors.email.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block font-sans text-xs font-medium uppercase tracking-wider text-muted mb-2">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  rows={5}
                  placeholder="Tell me about your project or just say hi..."
                  className="w-full px-4 py-3.5 rounded-xl border border-border bg-surface text-foreground font-sans text-sm placeholder:text-muted/40
                    focus:outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/10 transition-all duration-200 resize-none"
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-400 font-sans">{errors.message.message}</p>
                )}
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === "loading" || status === "success"}
                whileTap={{ scale: 0.97 }}
                className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-accent text-white font-heading font-semibold text-sm uppercase tracking-wider
                  transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,94,26,0.4)] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" && (
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                )}
                {status === "success" && <FiCheck size={16} />}
                {status === "error" && <FiAlertCircle size={16} />}
                {status !== "loading" && <FiSend size={14} />}
                <span>
                  {status === "idle" && "Send Message"}
                  {status === "loading" && "Sending..."}
                  {status === "success" && "Message Sent!"}
                  {status === "error" && "Failed — Try Again"}
                </span>
              </motion.button>

              {/* Status messages */}
              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm font-sans text-green-400"
                >
                  Thanks! I&apos;ll get back to you soon.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm font-sans text-red-400"
                >
                  Something went wrong. Please try emailing me directly.
                </motion.p>
              )}
            </form>
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
}
