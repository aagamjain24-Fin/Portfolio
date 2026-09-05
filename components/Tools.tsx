import { Sheet, BarChart3, Database, FileSpreadsheet, Blocks } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { excelSkills, otherTools } from "@/lib/data";

const toolIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Power BI": BarChart3,
  Tableau: BarChart3,
  "Tally ERP": FileSpreadsheet,
  "Microsoft Office": Blocks,
  "SQL — Basic": Database,
};

export function Tools() {
  return (
    <section className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          label="Toolkit"
          title="Tools & Technologies"
          description="Excel is where the day-to-day modelling and reporting happens; the rest support reporting, reconciliation and data work around it."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div className="h-full rounded-2xl border border-brass-dim/50 bg-gradient-to-br from-surface to-surface-2 p-8 sm:p-10">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brass-soft text-brass">
                  <Sheet className="h-5 w-5" />
                </div>
                <h3 className="font-display text-2xl text-ink">Microsoft Excel</h3>
              </div>
              <p className="mt-4 text-sm text-muted-2 font-mono">Primary tool</p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {excelSkills.map((skill) => (
                  <div
                    key={skill}
                    className="rounded-xl border border-edge px-4 py-3 text-sm text-ink/90 hover:border-brass hover:bg-brass-soft transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 content-start">
            {otherTools.map((tool, i) => {
              const Icon = toolIcons[tool] ?? Blocks;
              return (
                <Reveal key={tool} delay={0.05 * i}>
                  <div className="h-full rounded-2xl border border-edge bg-surface p-6 transition-colors hover:border-brass-dim">
                    <Icon className="h-5 w-5 text-brass" />
                    <p className="mt-4 text-sm text-ink/90">{tool}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
