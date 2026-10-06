import Image from "next/image";
import type { Project, Shot } from "@/content/projects";
import { ImageReveal } from "@/components/reveal";
import { asset } from "@/lib/asset";

/**
 * A screenshot in a minimal frame. The frame's top bar doubles as the caption.
 * Images always keep their intrinsic aspect ratio (explicit width/height + h-auto) — never cropped or stretched.
 */
function Frame({ shot, sizes, letter, className = "" }: { shot: Shot; sizes: string; letter: string; className?: string }) {
  return (
    <figure className={`group overflow-hidden rounded-md border border-line bg-surface ${className}`}>
      <figcaption className="flex h-8 items-center gap-1.5 border-b border-line px-3">
        <span className="size-2 rounded-full bg-line" aria-hidden="true" />
        <span className="size-2 rounded-full bg-line" aria-hidden="true" />
        <span className="size-2 rounded-full bg-line" aria-hidden="true" />
        <span className="label ml-auto truncate pl-4 text-[0.65rem] text-faint">
          <span aria-hidden="true">{letter} — </span>
          {shot.caption}
        </span>
      </figcaption>
      <div className="overflow-hidden">
        <Image
          src={asset(shot.src)}
          alt={shot.alt}
          width={shot.width}
          height={shot.height}
          sizes={sizes}
          quality={85}
          className="h-auto w-full transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.015]"
        />
      </div>
    </figure>
  );
}

const lift = "shadow-[0_30px_60px_-20px_rgba(0,0,0,0.85)]";

/** Fresh Cart: dominant page, second page overlapping lower-right. Stacks below 640px. */
function Layered({ shots }: { shots: Shot[] }) {
  const [main, second] = shots;
  return (
    <div className="relative">
      <ImageReveal className="sm:w-[90%]">
        <Frame shot={main} letter="A" sizes="(min-width: 1024px) 52vw, (min-width: 640px) 90vw, 100vw" />
      </ImageReveal>
      {second && (
        <div className="parallax relative z-10 mt-5 sm:-mt-[14%] sm:ml-auto sm:w-[68%]">
          <ImageReveal>
            <Frame shot={second} letter="B" className={lift} sizes="(min-width: 1024px) 40vw, (min-width: 640px) 68vw, 100vw" />
          </ImageReveal>
        </div>
      )}
    </div>
  );
}

/** Social App: dominant page aligned right, a detail panel floating lower-left. Stacks below 640px. */
function Detail({ shots }: { shots: Shot[] }) {
  const [main, detail] = shots;
  return (
    <div className="relative">
      <ImageReveal className="sm:ml-auto sm:w-[92%]">
        <Frame shot={main} letter="A" sizes="(min-width: 1024px) 54vw, (min-width: 640px) 92vw, 100vw" />
      </ImageReveal>
      {detail && (
        <div className="parallax relative z-10 mx-auto mt-5 w-[88%] sm:mx-0 sm:-mt-[18%] sm:w-[46%]">
          <ImageReveal>
            <Frame shot={detail} letter="B" className={lift} sizes="(min-width: 1024px) 27vw, (min-width: 640px) 46vw, 88vw" />
          </ImageReveal>
        </div>
      )}
    </div>
  );
}

/**
 * NGEN: wide primary page with a smaller second page overlapping ~20% of its lower-right corner.
 * The second page reveals a beat later and drifts slightly on desktop. Stacks below 640px.
 */
function Overlap({ shots }: { shots: Shot[] }) {
  const [main, second] = shots;
  return (
    <div className="relative">
      <ImageReveal className="sm:w-[86%]">
        <Frame shot={main} letter="A" sizes="(min-width: 1024px) 50vw, (min-width: 640px) 86vw, 100vw" />
      </ImageReveal>
      {second && (
        <div className="parallax relative z-10 mt-5 sm:-mt-[24%] sm:ml-auto sm:w-[54%]">
          <ImageReveal delay={0.15}>
            <Frame shot={second} letter="B" className={lift} sizes="(min-width: 1024px) 32vw, (min-width: 640px) 54vw, 100vw" />
          </ImageReveal>
        </div>
      )}
    </div>
  );
}

function Single({ shots }: { shots: Shot[] }) {
  return (
    <ImageReveal>
      <Frame shot={shots[0]} letter="A" sizes="(min-width: 1024px) 56vw, 100vw" />
    </ImageReveal>
  );
}

/** Fallback for a project without screenshots: a typographic index of its verified features. */
function FeatureIndex({ project }: { project: Project }) {
  return (
    <ImageReveal>
      <div className="relative overflow-hidden rounded-md border border-line bg-surface p-6 sm:p-10">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-4 -top-10 select-none font-display text-[clamp(9rem,22vw,20rem)] font-semibold leading-none tracking-[-0.06em] text-surface-2"
        >
          {project.index}
        </span>
        <p className="label relative">Inside the project</p>
        <ol className="relative mt-8 border-t border-line">
          {project.features.map((f, i) => (
            <li key={f} className="flex items-baseline gap-5 border-b border-line py-4 text-[clamp(1.05rem,1.6vw,1.35rem)] leading-snug">
              <span className="label w-6 shrink-0 text-faint">{String(i + 1).padStart(2, "0")}</span>
              {f}
            </li>
          ))}
        </ol>
      </div>
    </ImageReveal>
  );
}

export function ProjectVisual({ project }: { project: Project }) {
  if (!project.shots.length) return <FeatureIndex project={project} />;
  switch (project.composition) {
    case "layered":
      return <Layered shots={project.shots} />;
    case "detail":
      return <Detail shots={project.shots} />;
    case "overlap":
      return <Overlap shots={project.shots} />;
    default:
      return <Single shots={project.shots} />;
  }
}
