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
      className="relative flex min-h-screen items-center justify-center pt-24 pb-16 text-center"
    >
      <HeroBackground />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-3xl w-full px-6 flex flex-col items-center"
      >
        <motion.h1
          variants={item}
          className="font-display font-semibold text-5xl sm:text-6xl md:text-7xl leading-[1.05] text-ink text-balance"
        >
          {profile.name}
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent-soft px-4 py-2"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="font-mono text-xs sm:text-sm font-medium tracking-wide text-accent-dark uppercase">
            {profile.tagline}
          </span>
        </motion.div>

        <motion.p variants={item} className="mt-6 text-lg sm:text-xl text-muted">
          {profile.title}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-base sm:text-lg text-muted-2 leading-relaxed"
        >
          Turning financial data into actionable business insights through
          FP&amp;A, financial modelling, budgeting and analytics.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#models"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent"
          >
            View My Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={profile.resumePath}
            download
            className="group inline-flex items-center gap-2 rounded-full border border-edge-strong px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:bg-accent-soft"
          >
            Download Resume
            <ArrowDownToLine className="h-4 w-4 text-accent transition-transform group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-14 flex items-center justify-center gap-5 text-muted">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-edge hover:border-accent hover:text-accent transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-edge hover:border-accent hover:text-accent transition-colors"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-edge hover:border-accent hover:text-accent transition-colors"
          >
            <Mail className="h-4 w-4" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
