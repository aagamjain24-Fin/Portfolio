import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-28 bg-base-alt">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          label="Experience"
          title="Work Experience"
          description="Practical FP&A work in a manufacturing environment, alongside investment-analysis exposure at a boutique advisory."
        />

        <div className="mt-16 relative">
          <div className="absolute left-[15px] sm:left-[19px] top-2 bottom-2 w-px bg-edge" />

          <div className="space-y-14">
            {experience.map((role, i) => (
              <Reveal key={role.id} delay={0.05 * i}>
                <div className="relative pl-10 sm:pl-14">
                  <div className="absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full border border-accent/30 bg-white font-mono text-xs text-accent shadow-card">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div className="rounded-2xl border border-edge bg-white p-6 sm:p-8 shadow-card">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="font-display font-semibold text-xl sm:text-2xl text-ink">
                        {role.company}
                      </h3>
                      <span className="font-mono text-xs text-muted-2">{role.period}</span>
                    </div>
                    <p className="mt-1 text-accent font-medium">{role.role}</p>
                    <p className="text-sm text-muted-2">{role.location}</p>

                    <ul className="mt-5 space-y-3">
                      {role.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-muted leading-relaxed">
                          <span className="mt-2.5 h-1 w-1 flex-none rounded-full bg-accent" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {role.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-base-alt border border-edge px-3 py-1 text-xs font-mono text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {role.relatedModels && (
                      <a
                        href="#models"
                        className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-dark transition-colors"
                      >
                        View related financial models
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
