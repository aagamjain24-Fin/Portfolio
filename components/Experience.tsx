import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-32">
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
                  <div className="absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full border border-brass-dim bg-surface font-mono text-xs text-brass">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-display text-xl sm:text-2xl text-ink">
                      {role.company}
                    </h3>
                    <span className="font-mono text-xs text-muted">{role.period}</span>
                  </div>
                  <p className="mt-1 text-brass">{role.role}</p>
                  <p className="text-sm text-muted-2">{role.location}</p>

                  <ul className="mt-5 space-y-3">
                    {role.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-muted leading-relaxed">
                        <span className="mt-2.5 h-1 w-1 flex-none rounded-full bg-brass" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {role.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-surface border border-edge px-3 py-1 text-xs font-mono text-muted"
                      >
                        {tag}
                      </span>
                    ))}
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
