"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

function FloatingCard({
  className,
  delay,
  children,
}: {
  className: string;
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: [0, -8, 0] }}
      transition={{
        opacity: { duration: 0.8, delay },
        y: { duration: 6, delay: delay + 0.8, repeat: Infinity, ease: "easeInOut" },
      }}
      className={`absolute hidden lg:flex items-center gap-3 rounded-2xl border border-edge bg-white/90 backdrop-blur-sm px-4 py-3 shadow-card ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-ledger-grid opacity-60 [mask-image:radial-gradient(ellipse_60%_55%_at_50%_25%,black,transparent)]" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[480px] w-[900px] rounded-full bg-accent-soft blur-3xl" />

      <FloatingCard className="left-[6%] top-[26%]" delay={0.3}>
        <span className="font-mono text-[11px] text-muted-2">Budget vs Actual</span>
        <span className="font-mono text-sm font-medium text-accent">on track</span>
      </FloatingCard>

      <FloatingCard className="right-[7%] top-[20%]" delay={0.5}>
        <TrendingUp className="h-4 w-4 text-accent" />
        <span className="font-mono text-[11px] text-muted-2">Variance analysis</span>
      </FloatingCard>

      <FloatingCard className="left-[10%] bottom-[16%]" delay={0.7}>
        <div className="flex items-end gap-1 h-6">
          {[40, 65, 50, 80, 60].map((h, i) => (
            <span
              key={i}
              style={{ height: `${h}%` }}
              className="w-1.5 rounded-sm bg-accent/60"
            />
          ))}
        </div>
        <span className="font-mono text-[11px] text-muted-2">MIS dashboard</span>
      </FloatingCard>

      <FloatingCard className="right-[9%] bottom-[22%]" delay={0.9}>
        <span className="font-mono text-[11px] text-muted-2">FY26 Forecast</span>
      </FloatingCard>
    </div>
  );
}
