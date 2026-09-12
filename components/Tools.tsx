import { Sheet, BarChart3, Database, FileSpreadsheet, Blocks, Sparkles, Check } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { excelSkills, toolGroups, aiTools } from "@/lib/data";

const toolIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Power BI": BarChart3,
  Tableau: BarChart3,
  "Tally ERP": FileSpreadsheet,
  "Microsoft Office": Blocks,
  SQL: Database,
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

        <Reveal className="mt-16">
          <div className="rounded-2xl border border-edge bg-white p-8 sm:p-10 shadow-card">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <Sheet className="h-5 w-5" />
              </div>
              <h3 className="font-display font-semibold text-2xl text-ink">Excel Toolkit</h3>
            </div>
            <p className="mt-4 text-sm text-muted-2 font-mono uppercase tracking-wide">Primary tool</p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
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

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {toolGroups.map((tool, i) => {
            const Icon = toolIcons[tool.name] ?? Blocks;
            return (
              <Reveal key={tool.name} delay={0.05 * i}>
                <div className="h-full rounded-2xl border border-edge bg-white p-6 shadow-card transition-colors hover:border-accent/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-accent" />
                      <p className="font-medium text-ink">{tool.name}</p>
                    </div>
                    {tool.level && (
                      <span className="rounded-full bg-base-alt border border-edge px-2.5 py-1 text-[11px] font-mono text-muted-2">
                        {tool.level}
                      </span>
                    )}
                  </div>
                  <ul className="mt-4 space-y-2">
                    {tool.skills.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-muted">
                        <Check className="mt-0.5 h-3.5 w-3.5 flex-none text-accent" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
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
