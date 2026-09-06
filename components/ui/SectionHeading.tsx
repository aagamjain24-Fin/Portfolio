import { Reveal } from "./Reveal";

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
}: {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : "text-left"}>
      <div
        className={`flex items-center gap-3 text-xs font-mono font-medium tracking-wide text-accent uppercase ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-6 bg-accent/40" />
        {label}
      </div>
      <h2 className="mt-4 font-display font-semibold text-3xl sm:text-4xl text-ink text-balance">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-xl text-muted leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
