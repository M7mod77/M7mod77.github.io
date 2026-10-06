import { profile } from "@/content/profile";
import { CopyEmail } from "@/components/copy-email";
import { Reveal } from "@/components/reveal";

export function Contact() {
  const [user, domain] = profile.email.split("@");
  const links = [
    { href: profile.links.linkedin, label: "LinkedIn" },
    { href: profile.links.github, label: "GitHub" },
    { href: profile.links.resume, label: "Résumé (PDF)" },
  ];
  return (
    <section aria-labelledby="contact-title" id="contact" className="container-x border-t border-line pt-[clamp(6rem,16vh,13rem)] pb-[clamp(4rem,10vh,8rem)]">
      <Reveal>
        <p className="label flex items-center gap-3">
          <span className="text-accent">05</span>
          <span className="h-px w-8 bg-line" aria-hidden="true" />
          Contact
        </p>
        <h2 id="contact-title" className="mt-6 font-display text-[clamp(4rem,13vw,13rem)] font-semibold uppercase leading-[0.84] tracking-[-0.025em]">
          Let&rsquo;s <em className="font-serif font-normal normal-case tracking-normal text-accent">talk</em>
        </h2>
      </Reveal>

      <Reveal delay={0.05} className="mt-12 md:mt-16">
        <a
          href={`mailto:${profile.email}`}
          className="group block w-fit max-w-full font-display text-[clamp(1.6rem,5.4vw,5.25rem)] font-medium leading-[1.05] tracking-[-0.03em] transition-colors duration-250 hover:text-accent"
        >
          <span className="break-words">{user}</span>
          <wbr />
          <span className="text-muted transition-colors duration-250 group-hover:text-accent">@{domain}</span>
          <span className="sr-only"> — send an email</span>
        </a>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <CopyEmail email={profile.email} />
          <p className="label ml-1 inline-flex items-center gap-2 normal-case tracking-normal text-[0.85rem]">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            {profile.availability} · Cairo, Egypt
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <ul className="mt-20 grid border-t border-line sm:grid-cols-3">
          {links.map((l) => (
            <li key={l.href} className="border-b border-line sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0">
              <a
                href={l.href}
                target="_blank"
                rel={l.href.startsWith("http") ? "noopener noreferrer" : "noopener"}
                className="group flex items-center justify-between py-6 font-display text-2xl font-medium tracking-tight transition-colors duration-250 hover:text-accent"
              >
                {l.label}
                <span aria-hidden="true" className="text-muted transition-transform duration-250 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
