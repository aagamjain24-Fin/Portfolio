import { Sheet, BarChart3, Database, FileSpreadsheet, Blocks, Sparkles } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { excelSkills, otherTools, aiTools } from "@/lib/data";

const toolIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Power BI": BarChart3,
  Tableau: BarChart3,
  "Tally ERP": FileSpreadsheet,
  "Microsoft Office": Blocks,
  "SQL — Basic": Database,
};

export function Tools() {
  return (
    <section className="relative py-24 sm:py-28 bg-base-alt">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          label="Toolkit"
          title="Tools & Technologies"
          description="Excel is where the day-to-day modelling and reporting happens; the rest support reporting, reconciliation and data work around it."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div className="h-full rounded-2xl border border-edge bg-white p-8 sm:p-10 shadow-card">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Sheet className="h-5 w-5" />
                </div>
                <h3 className="font-display font-semibold text-2xl text-ink">Excel Toolkit</h3>
              </div>
              <p className="mt-4 text-sm text-muted-2 font-mono uppercase tracking-wide">Primary tool</p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {excelSkills.map((skill) => (
                  <div
                    key={skill}
                    className="rounded-xl border border-edge px-4 py-3 text-sm text-ink hover:border-accent hover:bg-accent-soft transition-colors"
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
                  <div className="h-full rounded-2xl border border-edge bg-white p-6 shadow-card transition-colors hover:border-accent/30">
                    <Icon className="h-5 w-5 text-accent" />
                    <p className="mt-4 text-sm text-ink">{tool}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={0.1} className="mt-6">
          <div className="rounded-2xl border border-edge bg-white p-8 sm:p-10 shadow-card">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="font-display font-semibold text-2xl text-ink">
                AI &amp; Productivity Tools
              </h3>
            </div>
            <p className="mt-3 text-sm text-muted max-w-xl">
              Used alongside — not in place of — my own analysis, for research,
              documentation and workflow support.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {aiTools.map((tool) => (
                <div
                  key={tool.name}
                  className="rounded-xl border border-edge px-4 py-3.5"
                >
                  <p className="text-sm font-medium text-ink">{tool.name}</p>
                  <p className="mt-1 text-xs text-muted-2">{tool.use}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
