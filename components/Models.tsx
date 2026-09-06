"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, FileSpreadsheet, Download, Clock3, ShieldCheck, Layers } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { financialModels, modelFilters, type FinancialModel } from "@/lib/data";

function StatusBadge({ model }: { model: FinancialModel }) {
  if (model.status === "available") return null;
  const Icon = model.status === "credential" ? ShieldCheck : Clock3;
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-base-alt border border-edge px-2.5 py-1 text-[11px] font-mono text-muted-2">
      <Icon className="h-3 w-3" />
      {model.status === "credential" ? "Credential" : model.statusNote}
    </span>
  );
}

// Small, real bar chart built from the workbook's own monthly Budget vs
// Actual figures — not a screenshot, so it stays crisp and responsive.
function BudgetActualChart({ data }: { data: { month: string; budget: number; actual: number }[] }) {
  const max = Math.max(...data.map((d) => Math.max(d.budget, d.actual)));
  return (
    <div className="flex h-full w-full items-end gap-[3px] px-4 pb-3 pt-4">
      {data.map((d) => (
        <div key={d.month} className="flex flex-1 flex-col items-center justify-end gap-[2px]">
          <div className="flex items-end gap-[2px] h-16 w-full justify-center">
            <div
              className="w-1.5 rounded-t-sm bg-edge-strong"
              style={{ height: `${(d.budget / max) * 100}%` }}
            />
            <div
              className="w-1.5 rounded-t-sm bg-accent"
              style={{ height: `${(d.actual / max) * 100}%` }}
            />
          </div>
          <span className="text-[8px] font-mono text-muted-2">{d.month[0]}</span>
        </div>
      ))}
    </div>
  );
}

function SheetOutline({ sheets }: { sheets: string[] }) {
  return (
    <div className="flex h-full w-full flex-col justify-center gap-1.5 px-5 py-4">
      {sheets.slice(0, 5).map((s) => (
        <div key={s} className="flex items-center gap-2">
          <Layers className="h-3 w-3 flex-none text-accent/70" />
          <span className="truncate text-[11px] font-mono text-muted-2">{s}</span>
        </div>
      ))}
      {sheets.length > 5 && (
        <span className="pl-5 text-[11px] font-mono text-muted-2">+{sheets.length - 5} more</span>
      )}
    </div>
  );
}

function ComingSoonVisual() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-base-alt">
      <div className="grid grid-cols-4 gap-1 opacity-50">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="h-3 w-6 rounded-sm border border-dashed border-edge-strong" />
        ))}
      </div>
    </div>
  );
}

function ModelVisual({ model }: { model: FinancialModel }) {
  return (
    <div className="flex h-full w-full items-center bg-base-alt">
      {model.status === "available" && model.chart ? (
        <BudgetActualChart data={model.chart} />
      ) : model.status === "credential" ? (
        <SheetOutline sheets={model.sheets} />
      ) : (
        <ComingSoonVisual />
      )}
    </div>
  );
}

export function Models() {
  const [filter, setFilter] = useState<(typeof modelFilters)[number]>("ALL");
  const [active, setActive] = useState<FinancialModel | null>(null);

  const visible =
    filter === "ALL"
      ? financialModels
      : financialModels.filter((m) => m.categories.includes(filter));

  return (
    <section id="models" className="relative py-24 sm:py-28 bg-base-alt">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          label="Financial Models & Work Samples"
          title="Practical financial modelling, FP&A and analytical work."
          description="I don't just list financial modelling as a skill — here's the work itself."
        />

        <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-2">
          {modelFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 text-xs font-mono uppercase tracking-wide transition-colors ${
                filter === f
                  ? "border-accent bg-accent text-white"
                  : "border-edge bg-white text-muted hover:border-accent/40 hover:text-ink"
              }`}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((model, i) => (
            <Reveal key={model.id} delay={0.05 * i}>
              <div className="group flex h-full flex-col rounded-2xl border border-edge bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover hover:border-accent/30 overflow-hidden">
                <div className="h-28 border-b border-edge">
                  <ModelVisual model={model} />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs text-accent">MODEL {model.number}</span>
                    <StatusBadge model={model} />
                  </div>
                  <h3 className="mt-3 font-display font-semibold text-lg text-ink leading-snug">
                    {model.name}
                  </h3>
                  <p className="mt-1 text-sm text-accent">{model.subtitle}</p>
                  <p className="mt-3 text-sm text-muted leading-relaxed line-clamp-3">
                    {model.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {model.categories.map((c) => (
                      <span
                        key={c}
                        className="rounded-full bg-base-alt border border-edge px-2.5 py-1 text-[11px] font-mono text-muted uppercase"
                      >
                        {c}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <button
                      onClick={() => setActive(model)}
                      className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-accent"
                    >
                      <FileSpreadsheet className="h-3.5 w-3.5" />
                      View Model
                    </button>
                    {model.status === "available" && model.filePath ? (
                      <a
                        href={model.filePath}
                        download
                        className="inline-flex items-center gap-1.5 rounded-full border border-edge-strong px-4 py-2 text-xs font-medium text-ink transition-colors hover:border-accent hover:bg-accent-soft"
                      >
                        <Download className="h-3.5 w-3.5 text-accent" />
                        Download
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/40 backdrop-blur-sm px-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl max-h-[85vh] overflow-y-auto rounded-2xl border border-edge bg-white shadow-card-hover"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close model details"
                className="absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-edge text-muted hover:text-ink hover:border-accent transition-colors bg-white"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="h-32 border-b border-edge rounded-t-2xl overflow-hidden">
                <ModelVisual model={active} />
              </div>

              <div className="p-8 sm:p-10">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs text-accent">MODEL {active.number}</span>
                  <StatusBadge model={active} />
                </div>
                <h3 className="mt-3 font-display font-semibold text-2xl text-ink text-balance">
                  {active.name}
                </h3>
                <p className="mt-1 text-accent">{active.subtitle}</p>
                <p className="mt-4 text-muted leading-relaxed">{active.description}</p>

                {active.metrics && (
                  <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {active.metrics.map((m) => (
                      <div key={m.label} className="rounded-xl border border-edge bg-base-alt px-3 py-3 text-center">
                        <p className="font-display font-semibold text-accent">{m.value}</p>
                        <p className="mt-1 text-[11px] text-muted-2 leading-tight">{m.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                {active.sheets.length > 0 && (
                  <>
                    <p className="mt-6 text-xs font-mono text-muted-2 uppercase tracking-wide">
                      Workbook sheets
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {active.sheets.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-edge px-3 py-1 text-xs font-mono text-muted"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </>
                )}

                <p className="mt-6 text-xs font-mono text-muted-2 uppercase tracking-wide">
                  Skills demonstrated
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {active.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-edge px-3 py-1 text-xs text-ink"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-3">
                  {active.status === "available" && active.filePath ? (
                    <a
                      href={active.filePath}
                      download
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-dark transition-colors"
                    >
                      <Download className="h-4 w-4" />
                      Download Excel
                    </a>
                  ) : active.status === "credential" ? (
                    <span className="inline-flex items-start gap-2 rounded-full bg-base-alt border border-edge px-5 py-2.5 text-sm text-muted-2 max-w-md leading-snug">
                      <ShieldCheck className="h-4 w-4 flex-none mt-0.5 text-accent" />
                      Completed as CFI coursework — the workbook is licensed course
                      material, so it isn&apos;t redistributed publicly here.
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-full bg-base-alt border border-edge px-5 py-2.5 text-sm text-muted-2">
                      <Clock3 className="h-4 w-4" />
                      {active.statusNote}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
