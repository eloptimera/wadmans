import { Instagram } from "lucide-react";
import { FORETAG } from "@/lib/foretag";

/** Liten klickbar Instagram-ikon, t.ex. i sidfoten. Renderas inte om företaget saknar Instagram. */
export function InstagramIkon({ className = "" }: { className?: string }) {
  if (!FORETAG.instagram) return null;
  return (
    <a
      href={FORETAG.instagram}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${FORETAG.namn} på Instagram`}
      className={`inline-grid size-11 place-items-center rounded-full border border-current/40 transition-colors duration-200 hover:border-orange hover:text-orange ${className}`}
    >
      <Instagram className="size-5" strokeWidth={1.5} aria-hidden="true" />
    </a>
  );
}

/** Sektion som leder besökaren vidare till företagets Instagram. */
export function InstagramBand() {
  if (!FORETAG.instagram) return null;
  return (
    <section className="container-page py-16 sm:py-24">
      <div className="grid items-center gap-8 rounded-lg bg-closing p-8 text-closing-foreground sm:p-12 lg:grid-cols-[1fr_auto]">
        <div className="flex items-start gap-5">
          <Instagram
            className="mt-1 size-9 shrink-0 text-orange"
            strokeWidth={1.4}
            aria-hidden="true"
          />
          <div>
            <h2 className="text-2xl sm:text-3xl">Fler bilder från våra jobb</h2>
            <p className="mt-3 max-w-xl leading-relaxed text-closing-foreground/80">
              På Instagram lägger vi upp bilder från våra projekt. Titta in på {FORETAG.instagramNamn}{" "}
              och se hur det kan se ut före och efter.
            </p>
          </div>
        </div>
        <a
          href={FORETAG.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-base btn-inverse"
        >
          Öppna Instagram
        </a>
      </div>
    </section>
  );
}
