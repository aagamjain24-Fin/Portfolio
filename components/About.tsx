import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { profile, highlights, aboutAreas } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading label="About" title="About Me" />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <Reveal delay={0.1}>
              <p className="text-muted leading-relaxed">{profile.summary}</p>
            </Reveal>
            <Reveal delay={0.18} className="mt-8">
              <p className="text-sm font-mono font-medium text-accent mb-4 uppercase tracking-wide">
                Areas of practice
              </p>
              <div className="flex flex-wrap gap-2">
                {aboutAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-edge bg-base-alt px-3.5 py-1.5 text-sm text-ink"
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
                <div className="group h-full rounded-2xl border border-edge bg-white p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover hover:border-accent/30">
                  <p className="font-display font-semibold text-xl text-accent">{h.value}</p>
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
