import { Reveal } from "@/components/reveal";

type Props = {
  id: string;
  number: string;
  label: string;
  /** Title; wrap one word in `emphasis` to set it in the editorial serif italic. */
  title: string;
  emphasis?: string;
};

export function SectionHeading({ id, number, label, title, emphasis }: Props) {
  const parts = emphasis ? title.split(emphasis) : [title];
  return (
    <Reveal className="mb-14 md:mb-20">
      <p className="label flex items-center gap-3">
        <span className="text-accent">{number}</span>
        <span className="h-px w-8 bg-line" aria-hidden="true" />
        {label}
      </p>
      <h2 id={id} className="mt-5 font-display text-[clamp(2.75rem,7vw,6rem)] font-medium leading-[0.92] tracking-[-0.035em]">
        {parts[0]}
        {emphasis && <em className="font-serif font-normal tracking-normal text-text/90">{emphasis}</em>}
        {parts[1]}
      </h2>
    </Reveal>
  );
}
