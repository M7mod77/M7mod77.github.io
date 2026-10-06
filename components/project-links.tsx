import type { Project } from "@/content/projects";

/** Only real links render — no placeholder "Live demo" for undeployed projects. */
export function ProjectLinks({ project }: { project: Project }) {
  const { live, code, site } = project.links;
  const items = [
    live && { href: live, label: "Live demo", primary: true },
    code && { href: code, label: "GitHub" },
    site && { href: site.href, label: site.label },
  ].filter(Boolean) as { href: string; label: string; primary?: boolean }[];
  if (!items.length) return null;
  return (
    <ul className="flex flex-wrap gap-3">
      {items.map((l) => (
        <li key={l.href}>
          <a
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex h-11 items-center gap-2 rounded-full border px-5 text-sm font-medium transition-colors duration-250 ${
              l.primary
                ? "border-accent bg-accent text-bg hover:border-accent-press hover:bg-accent-press"
                : "border-line text-text hover:border-text/60"
            }`}
          >
            {l.label}
            <span aria-hidden="true" className="transition-transform duration-250 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
            <span className="sr-only"> — {project.title} (opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
