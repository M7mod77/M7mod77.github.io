/**
 * Server-rendered reveal wrappers. They only add markup; RevealObserver adds `data-shown`
 * and globals.css animates it. Reduced motion and no-JS both show content immediately.
 */
type Props = { children: React.ReactNode; className?: string; delay?: number };

/** Fade and rise once, when 20% of the element is visible. */
export function Reveal({ children, className, delay = 0 }: Props) {
  return (
    <div data-reveal="" className={className} style={delay ? ({ "--reveal-delay": `${delay}s` } as React.CSSProperties) : undefined}>
      {children}
    </div>
  );
}

/**
 * Clip-path wipe from the bottom, for images. The observed element is the unclipped wrapper:
 * a fully clipped element has a zero-area intersection and would never be reported as visible.
 */
export function ImageReveal({ children, className, delay = 0 }: Props) {
  return (
    <div data-reveal="image" className={className} style={delay ? ({ "--reveal-delay": `${delay}s` } as React.CSSProperties) : undefined}>
      <div className="reveal-clip">{children}</div>
    </div>
  );
}
