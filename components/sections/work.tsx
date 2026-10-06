import { featured, more } from "@/content/projects";
import { SectionHeading } from "@/components/section-heading";
import { ProjectShowcase } from "@/components/project-showcase";
import { ProjectLinks } from "@/components/project-links";
import { ProjectVisual } from "@/components/project-visual";
import { Reveal } from "@/components/reveal";

export function Work() {
  return (
    <section aria-labelledby="work-title" id="work" className="container-x py-[clamp(6rem,14vh,12rem)]">
      <SectionHeading id="work-title" number="01" label="Work" title="Selected work" emphasis="work" />

      <div className="space-y-[clamp(6rem,14vh,11rem)]">
        {featured.map((p, i) => (
          <ProjectShowcase key={p.slug} project={p} flip={i % 2 === 1} />
        ))}
      </div>

      <div className="mt-[clamp(7rem,16vh,12rem)]" aria-labelledby="more-title">
        <Reveal>
          <h3 id="more-title" className="label flex items-center gap-3">
            <span className="h-px w-8 bg-line" aria-hidden="true" />
            More projects
          </h3>
        </Reveal>
        {more.map((p) => (
          <article key={p.slug} id={`work-${p.slug}`} aria-labelledby={`${p.slug}-title`} className="mt-8 grid gap-10 border-t border-line pt-10 lg:grid-cols-12 lg:gap-12">
            <Reveal className="lg:col-span-5">
              <p className="label">
                <span className="text-accent">P/{p.index}</span> · {p.year}
              </p>
              <h4 id={`${p.slug}-title`} className="mt-4 font-display text-[clamp(2rem,3.6vw,3.25rem)] font-semibold leading-none tracking-[-0.035em]">
                {p.title}
              </h4>
              <p className="mt-2 text-muted">{p.tagline}</p>
              <p className="mt-6 max-w-[48ch] leading-relaxed text-text/90">{p.shows}</p>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${p.title} stack`}>
                {p.stack.map((s) => (
                  <li key={s} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-text/80">{s}</li>
                ))}
              </ul>
              <div className="mt-7">
                <ProjectLinks project={p} />
              </div>
            </Reveal>
            <div className="lg:col-span-7">
              <ProjectVisual project={p} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
