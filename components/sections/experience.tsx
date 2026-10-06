import { education, experience, training } from "@/content/career";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

function List({ title, items, strong }: { title: string; items: string[]; strong?: boolean }) {
  return (
    <div>
      <h4 className={`label ${strong ? "text-text" : ""}`}>{title}</h4>
      <ul className="mt-4 border-t border-line">
        {items.map((i) => (
          <li key={i} className={`border-b border-line py-3 leading-snug ${strong ? "text-text" : "text-text/75"}`}>
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Experience() {
  return (
    <section aria-labelledby="experience-title" id="experience" className="container-x py-[clamp(6rem,14vh,12rem)]">
      <SectionHeading id="experience-title" number="03" label="Experience" title="Where I work" emphasis="work" />

      {/* Employment */}
      <Reveal>
        <article aria-labelledby="kayfa-title" className="grid gap-10 border-t border-line pt-10 lg:grid-cols-12 lg:gap-12">
          <header className="lg:col-span-5">
            <p className="label">{experience.period}</p>
            <h3 id="kayfa-title" className="mt-4 font-display text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[0.92] tracking-[-0.04em]">
              <a href={experience.url} target="_blank" rel="noopener noreferrer" className="link-grow hover:text-accent">
                {experience.company}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </h3>
            <p className="mt-3 text-lg">{experience.role}</p>
            <p className="mt-6 text-muted">
              Product:{" "}
              <a href={experience.product.href} className="link-grow text-text hover:text-accent">
                {experience.product.name} — see the case study ↑
              </a>
            </p>
          </header>
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7">
            <List title="Frontend" items={experience.frontend} strong />
            <List title="Backend" items={experience.backend} />
          </div>
        </article>
      </Reveal>

      {/* Training — deliberately quieter than employment */}
      <div className="mt-[clamp(5rem,12vh,9rem)] grid gap-10 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-5">
          <h3 className="font-display text-3xl font-medium tracking-tight">Training</h3>
          <p className="mt-2 max-w-[36ch] text-muted">Programs completed before and alongside professional work.</p>
        </Reveal>
        <Reveal className="lg:col-span-7">
          <ol className="border-t border-line">
            {training.map((t) => (
              <li key={t.program} className="grid gap-1 border-b border-line py-5 sm:grid-cols-[10.5rem_1fr] sm:gap-6">
                <span className="label pt-1">{t.period}</span>
                <div>
                  <p className="font-medium">{t.program}</p>
                  <p className="text-muted">{t.org}</p>
                  <p className="mt-2 font-mono text-xs text-text/60">{t.focus}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal className="lg:col-span-5">
          <h3 className="font-display text-3xl font-medium tracking-tight">Education</h3>
        </Reveal>
        <Reveal className="lg:col-span-7">
          <div className="grid gap-1 border-y border-line py-5 sm:grid-cols-[10.5rem_1fr] sm:gap-6">
            <span className="label pt-1">{education.period}</span>
            <div>
              <p className="font-medium">{education.program}</p>
              <p className="text-muted">
                {education.org} · {education.note}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
