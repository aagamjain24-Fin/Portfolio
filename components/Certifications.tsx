import { Award, Clock } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { certifications } from "@/lib/data";

export function Certifications() {
  return (
    <section className="relative py-28 sm:py-32 bg-surface/40">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading label="Certifications" title="Certifications" />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <Reveal key={cert.id} delay={0.04 * i}>
              <div className="h-full rounded-2xl border border-edge bg-surface p-6 transition-colors hover:border-brass-dim">
                {cert.status ? (
                  <Clock className="h-5 w-5 text-brass" />
                ) : (
                  <Award className="h-5 w-5 text-brass" />
                )}
                <h3 className="mt-4 text-sm font-medium text-ink leading-snug">
                  {cert.name}
                </h3>
                {cert.issuer && (
                  <p className="mt-1.5 text-xs text-muted-2">{cert.issuer}</p>
                )}
                {cert.status && (
                  <span className="mt-3 inline-block rounded-full border border-brass-dim/60 bg-brass-soft px-2.5 py-1 text-[11px] font-mono text-brass">
                    {cert.status}
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
