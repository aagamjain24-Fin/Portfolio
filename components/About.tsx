import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { profile, highlights, aboutAreas } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <SectionHeading label="About" title="About Me" />
            <Reveal delay={0.1} className="mt-6">
              <p className="text-muted leading-relaxed">{profile.summary}</p>
            </Reveal>
            <Reveal delay={0.18} className="mt-8">
              <p className="text-sm font-mono text-brass mb-4">Areas of practice</p>
              <div className="flex flex-wrap gap-2">
                {aboutAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-edge px-3.5 py-1.5 text-sm text-ink/90"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-4 content-start">
            {highlights.map((h, i) => (
              <Reveal key={h.label} delay={0.08 * i}>
                <div className="group h-full rounded-2xl border border-edge bg-surface p-6 transition-colors hover:border-brass-dim">
                  <p className="font-display text-2xl text-brass">{h.value}</p>
                  <p className="mt-2 text-sm text-muted leading-snug">{h.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
