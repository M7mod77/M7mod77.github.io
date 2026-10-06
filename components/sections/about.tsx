import Image from "next/image";
import portrait from "@/assets/portrait.webp";
import { about, profile } from "@/content/profile";
import { SectionHeading } from "@/components/section-heading";
import { ImageReveal, Reveal } from "@/components/reveal";

export function About() {
  return (
    <section aria-labelledby="about-title" id="about" className="container-x py-[clamp(6rem,14vh,12rem)]">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <ImageReveal className="mx-auto max-w-[420px] lg:mx-0">
            <figure className="group relative overflow-hidden">
              <Image
                src={portrait}
                alt="Mahmoud Elsallal at his graduation, in a black gown and cap, smiling — black-and-white except for his red tie"
                sizes="(min-width: 1024px) 420px, (min-width: 448px) 420px, 100vw"
                placeholder="blur"
                quality={85}
                className="h-auto w-full brightness-[0.88] transition-[filter] duration-700 group-hover:brightness-100"
              />
              {/* Let the photo dissolve into the page */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,var(--color-bg)_0%,transparent_32%),linear-gradient(to_right,rgb(10_10_10/0.45),transparent_22%,transparent_78%,rgb(10_10_10/0.45))]" aria-hidden="true" />
              <figcaption className="label absolute bottom-4 left-4 text-text/70">Cairo · 2026</figcaption>
            </figure>
          </ImageReveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 lg:pt-6">
          <SectionHeading id="about-title" number="02" label="About" title="Frontend, with the full stack in view" emphasis="full stack" />
          <Reveal>
            <p className="max-w-[34ch] font-display text-[clamp(1.5rem,2.4vw,2.1rem)] font-medium leading-[1.2] tracking-tight">{about[0]}</p>
            <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-muted">{about[1]}</p>
            <a
              href={profile.links.resume}
              target="_blank"
              rel="noopener"
              className="label link-grow mt-10 inline-block pb-1 text-accent"
            >
              Download résumé ↗<span className="sr-only"> (PDF, opens in a new tab)</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
