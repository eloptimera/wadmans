import { FORETAG } from "@/lib/foretag";

/** Ordmärke som loggan: namnet i versaler, undertiteln i pigmentfärg under. */
export function Varumarke({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex flex-col items-start leading-none ${className}`}>
      <span className="font-display text-xl font-extrabold tracking-[0.1em] uppercase">
        {FORETAG.kortnamn}
      </span>
      <span className="mt-1 font-display text-[0.62rem] font-semibold tracking-[0.3em] text-ultra uppercase">
        {FORETAG.undertitel}
      </span>
    </span>
  );
}
