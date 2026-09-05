"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDownToLine, Linkedin, Github, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { HeroBackground } from "./HeroBackground";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-24 pb-16"
    >
      <HeroBackground />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-content w-full px-6"
      >
        <motion.p
          variants={item}
          className="font-mono text-xs tracking-wide text-brass"
        >
          {profile.location}
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl leading-[1.05] text-ink text-balance"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 font-display italic text-xl sm:text-2xl text-brass"
        >
          {profile.title}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-base sm:text-lg text-muted leading-relaxed"
        >
          Turning financial data into actionable business insights through
          FP&amp;A, financial modelling, budgeting and analytics.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-void transition-colors hover:bg-brass"
          >
            Explore My Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={profile.resumePath}
            download
            className="group inline-flex items-center gap-2 rounded-full border border-edge-strong px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-brass hover:bg-brass-soft"
          >
            Download Resume
            <ArrowDownToLine className="h-4 w-4 text-brass transition-transform group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-14 flex items-center gap-5 text-muted"
        >
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-edge hover:border-brass hover:text-brass transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-edge hover:border-brass hover:text-brass transition-colors"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-edge hover:border-brass hover:text-brass transition-colors"
          >
            <Mail className="h-4 w-4" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
