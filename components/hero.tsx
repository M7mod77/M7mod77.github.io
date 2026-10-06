import { profile } from "@/content/profile";

/** Letters rise out of a mask on first paint (pure CSS, so the LCP element never waits for JS). */
function Line({ text, delay, className }: { text: string; delay: number; className?: string }) {
  return (
    <span className={`block overflow-hidden pb-[0.04em] ${className ?? ""}`} aria-hidden="true">
      {[...text].map((ch, i) => (
        <span key={i} className="hero-letter inline-block" style={{ animationDelay: `${delay + i * 25}ms` }}>
          {ch}
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  const meta = [
    { k: "Based in", v: profile.location },
    { k: "Currently", v: `${profile.currently.title} at ${profile.currently.company}` },
  ];
  return (
    <section id="top" aria-labelledby="hero-name" className="container-x flex min-h-[100svh] flex-col justify-end pt-28 pb-10 md:pb-14">
      <h1 id="hero-name" className="font-display font-semibold uppercase leading-[0.84] tracking-[-0.045em] text-[clamp(3.25rem,14.6vw,15rem)]">
        <span className="sr-only">{profile.fullName}, {profile.role}</span>
        <Line text={profile.firstName} delay={100} />
        <Line text={profile.lastName} delay={260} className="lg:pl-[12%]" />
      </h1>

      <div className="hero-rule mt-8 h-px origin-left bg-line md:mt-10" aria-hidden="true" />

      <div className="hero-fade mt-7 grid gap-8 md:mt-8 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-6 lg:col-span-5">
          <p className="font-display text-[clamp(1.6rem,2.6vw,2.4rem)] font-medium leading-none tracking-tight">
            {profile.role}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-4 max-w-[34ch] text-[clamp(1.05rem,1.4vw,1.25rem)] leading-snug text-muted">{profile.headline}</p>
        </div>

        <dl className="grid grid-cols-2 gap-x-6 gap-y-4 md:col-span-4 md:col-start-7 md:grid-cols-1 lg:col-span-3 lg:col-start-7">
          {meta.map((m) => (
            <div key={m.k}>
              <dt className="label">{m.k}</dt>
              <dd className="mt-1 text-[0.95rem] leading-snug">{m.v}</dd>
            </div>
          ))}
          <div className="col-span-2 md:col-span-1">
            <dt className="sr-only">Availability</dt>
            <dd className="label inline-flex items-center gap-2 normal-case tracking-normal text-[0.85rem]">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
              {profile.availability}
            </dd>
          </div>
        </dl>

        <nav aria-label="Quick links" className="md:col-span-2 md:col-start-11 lg:col-span-3 lg:col-start-10">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 md:flex-col md:items-end md:gap-y-3">
            <li>
              <a href="#work" className="label link-grow pb-1 text-accent">View work ↓</a>
            </li>
            <li>
              <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="label link-grow pb-1 text-text">
                GitHub ↗<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="label link-grow pb-1 text-text">
                LinkedIn ↗<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
