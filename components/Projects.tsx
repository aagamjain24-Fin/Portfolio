"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { projects, type Project } from "@/lib/data";

function ProjectVisual({ number }: { number: string }) {
  return (
    <svg viewBox="0 0 200 80" className="h-full w-full opacity-40" aria-hidden="true">
      <polyline
        points="0,60 25,45 50,55 75,30 100,40 125,15 150,28 175,10 200,20"
        fill="none"
        stroke="#C9A66B"
        strokeWidth="1.5"
      />
      <text x="8" y="20" fontSize="11" fill="#F5F3EE" fontFamily="var(--font-mono)" opacity="0.5">
        {number}
      </text>
    </svg>
  );
}

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-28 sm:py-32 bg-surface/40">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          label="Projects"
          title="Case Studies"
          description="Finance work drawn directly from my experience — budgeting, variance analysis, modelling, costing and investment research."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={0.05 * i}>
              <button
                onClick={() => setActive(project)}
                className="group flex h-full w-full flex-col rounded-2xl border border-edge bg-surface text-left transition-all duration-300 hover:border-brass-dim hover:-translate-y-1"
              >
                <div className="h-24 border-b border-edge px-6 pt-4">
                  <ProjectVisual number={project.number} />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg text-ink leading-snug">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.skills.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-void/40 border border-edge px-2.5 py-1 text-[11px] font-mono text-muted"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm text-brass">
                    View Case Study
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-void/80 backdrop-blur-sm px-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-2xl border border-edge-strong bg-surface-2 p-8 sm:p-10"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close case study"
                className="absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-edge text-muted hover:text-ink hover:border-brass transition-colors"
              >
                <X className="h-4 w-4" />
              </button>

              <p className="font-mono text-xs text-brass">{active.number}</p>
              <h3 className="mt-3 font-display text-2xl text-ink text-balance">
                {active.title}
              </h3>
              <p className="mt-4 text-muted leading-relaxed">{active.description}</p>

              <p className="mt-6 text-xs font-mono text-muted-2">Skills applied</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {active.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-edge px-3 py-1 text-xs text-ink/90"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
