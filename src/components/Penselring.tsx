import { useId } from "react";

/**
 * Penselringen från loggan: två svepande drag med ojämn kant. Färgerna styrs av
 * CSS-variablerna --ring-a och --ring-b så att samma ring fungerar på ljus och mörk yta.
 */
export function Penselring({ className = "" }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" className={className} fill="none">
      <defs>
        <filter id={id} x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="4" />
          <feDisplacementMap in="SourceGraphic" scale="7" />
        </filter>
      </defs>
      <g filter={`url(#${id})`} strokeLinecap="round">
        <path d="M100 14 A86 86 0 1 0 186 100" stroke="var(--ring-a)" strokeWidth="13" />
        <path d="M56 28 A86 86 0 0 1 172 66" stroke="var(--ring-b)" strokeWidth="9" />
      </g>
    </svg>
  );
}
