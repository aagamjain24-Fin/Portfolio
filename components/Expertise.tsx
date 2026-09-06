import { LineChart, Calculator, LayoutDashboard, BookOpenCheck } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { expertise } from "@/lib/data";

const icons = {
  fpa: LineChart,
  modelling: Calculator,
  mis: LayoutDashboard,
  accounting: BookOpenCheck,
};

export function Expertise() {
  return (
    <section id="skills" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          label="Skills"
          title="Finance Expertise"
          description="Four areas where day-to-day FP&A work translates directly into value for a finance team."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {expertise.map((card, i) => {
            const Icon = icons[card.id as keyof typeof icons];
            return (
              <Reveal key={card.id} delay={0.06 * i}>
                <div className="group h-full rounded-2xl border border-edge bg-white p-8 shadow-card transition-all duration-300 hover:border-accent/30 hover:shadow-card-hover hover:-translate-y-1">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-display font-semibold text-xl text-ink">{card.title}</h3>
                  <ul className="mt-5 space-y-2.5">
                    {card.items.map((it) => (
                      <li key={it} className="flex gap-3 text-sm text-muted">
                        <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-accent/60" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
