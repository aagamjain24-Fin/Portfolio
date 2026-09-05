import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-edge">
      <div className="mx-auto max-w-content px-6 py-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="font-display text-sm tracking-[0.08em] text-ink">AAGAM JAIN</p>
          <p className="text-xs text-muted-2 mt-1">{profile.title}</p>
        </div>

        <div className="flex items-center gap-4 text-xs text-muted">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-brass transition-colors">
            LinkedIn
          </a>
          <span className="text-edge-strong">·</span>
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-brass transition-colors">
            GitHub
          </a>
          <span className="text-edge-strong">·</span>
          <a href={`mailto:${profile.email}`} className="hover:text-brass transition-colors">
            Email
          </a>
        </div>

        <p className="text-xs text-muted-2">© 2026 Aagam Jain</p>
      </div>
    </footer>
  );
}
