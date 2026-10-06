import type { Project } from "@/content/projects";
import { Reveal } from "@/components/reveal";
import { ProjectLinks } from "@/components/project-links";
import { ProjectVisual } from "@/components/project-visual";

function Kicker({ project }: { project: Project }) {
  return (
    <p className="label flex flex-wrap items-center gap-x-3 gap-y-1">
      <span className="text-accent">P/{project.index}</span>
      <span aria-hidden="true">·</span>
      <span>{project.kind}</span>
      <span aria-hidden="true">·</span>
      <span>{project.year}</span>
      {project.status && (
        <span className="rounded-full border border-line px-2 py-0.5 text-[0.65rem] text-text/80">{project.status}</span>
      )}
    </p>
  );
}

function Title({ project }: { project: Project }) {
  return (
    <>
      <h3 id={`${project.slug}-title`} className="mt-5 font-display text-[clamp(2.75rem,5.5vw,5rem)] font-semibold leading-[0.9] tracking-[-0.04em]">
        {project.title}
      </h3>
      <p className="mt-3 text-lg text-muted">{project.tagline}</p>
    </>
  );
}

function Details({ project }: { project: Project }) {
  const blocks = [
    { k: "Challenge", v: project.challenge },
    { k: "Approach", v: project.approach },
    { k: "What it shows", v: project.shows },
    { k: "Role", v: project.role },
  ];
  return (
    <dl className="space-y-6">
      {blocks.map((b) => (
        <div key={b.k} className="grid gap-1 sm:grid-cols-[8.5rem_1fr] sm:gap-4">
          <dt className="label pt-1">{b.k}</dt>
          <dd className="max-w-[46ch] leading-relaxed text-text/90">{b.v}</dd>
        </div>
      ))}
    </dl>
  );
}

function Stack({ project }: { project: Project }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label={`${project.title} stack`}>
      {project.stack.map((s) => (
        <li key={s} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-text/80">
          {s}
        </li>
      ))}
    </ul>
  );
}

/**
 * One featured project as a full editorial spread.
 * Sticky meta column beside the screenshots (`flip` swaps sides on large screens).
 */
export function ProjectShowcase({ project, flip }: { project: Project; flip?: boolean }) {
  return (
    <article id={`work-${project.slug}`} aria-labelledby={`${project.slug}-title`} className="border-t border-line pt-10 md:pt-14">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className={`lg:col-span-5 ${flip ? "lg:order-2 lg:col-start-8" : ""}`}>
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <Kicker project={project} />
              <Title project={project} />
            </Reveal>
            <Reveal delay={0.05} className="mt-10">
              <Details project={project} />
              <div className="mt-8">
                <Stack project={project} />
              </div>
              <div className="mt-8">
                <ProjectLinks project={project} />
              </div>
            </Reveal>
          </div>
        </div>

        <div className={`lg:col-span-7 lg:pt-4 ${flip ? "lg:order-1 lg:col-start-1 lg:row-start-1" : ""}`}>
          <ProjectVisual project={project} />
        </div>
      </div>
    </article>
  );
}
