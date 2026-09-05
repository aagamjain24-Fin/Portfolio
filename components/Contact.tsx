import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { profile } from "@/lib/data";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: profile.phoneHref,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/aagam-jain2408",
    href: profile.linkedin,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/aagamjain24",
    href: profile.github,
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          align="center"
          label="Contact"
          title="Let's Connect"
          description="Interested in finance, analytics, FP&A or business opportunities? Let's connect."
        />

        <Reveal delay={0.1} className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-2">
          <MapPin className="h-4 w-4 text-brass" />
          {profile.location}
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={0.05 * i}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-edge bg-surface px-6 py-8 text-center transition-all hover:-translate-y-1 hover:border-brass-dim"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brass-soft text-brass">
                  <c.icon className="h-5 w-5" />
                </span>
                <span className="text-xs font-mono text-muted-2">{c.label}</span>
                <span className="text-sm text-ink/90 break-all">{c.value}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
