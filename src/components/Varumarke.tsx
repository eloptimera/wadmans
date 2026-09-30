import { FORETAG } from "@/lib/foretag";

/** Ordmärke. Ingen bildfil behövs, så det följer med när företagsuppgifterna byts. */
export function Varumarke({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span aria-hidden="true" className="relative size-7 shrink-0 overflow-hidden rounded-sm bg-foreground">
        <span className="absolute -inset-x-1 top-[0.55rem] h-2.5 -rotate-6 bg-ultra" />
      </span>
      <span className="font-display text-xl leading-none font-semibold tracking-tight">
        {FORETAG.kortnamn}
        <span className="ml-1.5 font-normal text-muted-foreground">{FORETAG.undertitel}</span>
      </span>
    </span>
  );
}
