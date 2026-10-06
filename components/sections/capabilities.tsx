import { capabilities } from "@/content/career";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Capabilities() {
  return (
    <section aria-labelledby="capabilities-title" id="capabilities" className="container-x py-[clamp(6rem,14vh,12rem)]">
      <SectionHeading id="capabilities-title" number="04" label="Capabilities" title="What I work with" emphasis="work with" />
      <Reveal>
        <dl className="border-t border-line">
          {capabilities.map((c) => (
            <div key={c.group} className="grid gap-2 border-b border-line py-6 md:grid-cols-12 md:gap-6">
              <dt className="label pt-2 md:col-span-3">{c.group}</dt>
              <dd
                className={`md:col-span-9 ${
                  c.primary
                    ? "font-display text-[clamp(1.75rem,3.4vw,3rem)] font-medium leading-[1.1] tracking-[-0.02em]"
                    : "text-[clamp(1.1rem,1.6vw,1.4rem)] leading-snug text-text/75"
                }`}
              >
                {c.items.map((item, i) => (
                  <span key={item}>
                    <span className="whitespace-nowrap">{item}</span>
                    {i < c.items.length - 1 && (
                      <>
                        <span className="sr-only">,</span> <span className="text-faint" aria-hidden="true">/</span>{" "}
                      </>
                    )}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
