import { GraduationCap } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading label="Education" title="Academic Background" />

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {education.map((edu, i) => (
            <Reveal key={edu.id} delay={0.06 * i}>
              <div className="h-full rounded-2xl border border-edge bg-surface p-8">
                <GraduationCap className="h-5 w-5 text-brass" />
                <h3 className="mt-5 font-display text-lg text-ink leading-snug">
                  {edu.degree}
                </h3>
                <p className="mt-2 text-brass text-sm">{edu.institution}</p>
                <div className="mt-4 flex items-center justify-between text-xs font-mono text-muted">
                  <span>{edu.period}</span>
                  <span>{edu.location}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
