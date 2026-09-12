import { Mail, Phone, Linkedin, Github, MapPin, ArrowDownToLine } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { profile } from "@/lib/data";

const channels = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: profile.phoneHref },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/aagam-jain2408",
    href: profile.linkedin,
  },
  { icon: Github, label: "GitHub", value: "github.com/aagamjain24-Fin", href: profile.github },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-28 bg-base-alt">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          align="center"
          label="Contact"
          title="Let's Connect"
          description="Open to opportunities in Finance, FP&A, Financial Analysis and related roles."
        />

        <Reveal delay={0.1} className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-2">
          <MapPin className="h-4 w-4 text-accent" />
          {profile.location}
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={0.05 * i}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-edge bg-white px-6 py-8 text-center shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover hover:border-accent/30"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft text-accent">
                  <c.icon className="h-5 w-5" />
                </span>
                <span className="text-xs font-mono text-muted-2 uppercase tracking-wide">{c.label}</span>
                <span className="text-sm text-ink break-all">{c.value}</span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 flex flex-wrap justify-center gap-3">
          <a
            href={profile.resumePath}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-edge-strong px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:bg-accent-soft"
          >
            View Resume
          </a>
          <a
            href={profile.resumePath}
            download
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
          >
            Download Resume
            <ArrowDownToLine className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
