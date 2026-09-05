export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-ledger-grid opacity-70 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,black,transparent)]" />
      <div className="absolute inset-0 bg-radial-glow" />

      <svg
        className="absolute left-1/2 top-[18%] w-[140%] max-w-none -translate-x-1/2 opacity-[0.16] animate-drift-line"
        viewBox="0 0 1200 300"
        fill="none"
      >
        <path
          d="M0 210 C 100 180, 160 230, 240 190 S 380 120, 460 150 S 600 230, 690 170 S 840 60, 940 110 S 1100 200, 1200 140"
          stroke="#C9A66B"
          strokeWidth="1.5"
        />
        <path
          d="M0 250 C 120 240, 200 260, 300 235 S 460 190, 560 210 S 720 260, 820 220 S 980 150, 1080 180 S 1160 210, 1200 195"
          stroke="#F5F3EE"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
      </svg>

      <div className="hidden sm:block absolute left-[8%] top-[30%] font-mono text-[11px] text-brass/40 animate-ticker-fade">
        FY26 BUDGET
      </div>
      <div className="hidden sm:block absolute right-[10%] top-[42%] font-mono text-[11px] text-muted/40 animate-ticker-fade [animation-delay:1.2s]">
        VAR &plusmn; 0.0%
      </div>
      <div className="hidden sm:block absolute left-[14%] bottom-[22%] font-mono text-[11px] text-muted/30 animate-ticker-fade [animation-delay:2s]">
        MIS · Q1&ndash;Q4
      </div>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-void to-transparent" />
    </div>
  );
}
