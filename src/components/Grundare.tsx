import { Link } from "@tanstack/react-router";
import { Heading, Underline } from "@/components/Heading";
import { Reveal } from "@/components/Reveal";
import { FORETAG } from "@/lib/foretag";

/**
 * Sektion om grundaren och teamet. Bilderna läses från src/assets/team. Saknas bilder visas bara
 * texten (och en markerad bildplats i utvecklingsläge), så inga tomma ramar hamnar på en publicerad sajt.
 */
const FILER = import.meta.glob("/src/assets/team/*.{jpg,jpeg,png,webp,avif}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

export function Grundare() {
  if (!FORETAG.vd) return null;
  const bilder = Object.entries(FILER)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, url]) => url);
  const visaPlats = bilder.length === 0 && import.meta.env.DEV;
  const harBild = bilder.length > 0 || visaPlats;

  return (
    <section
      className={`container-page grid items-center gap-12 py-16 sm:py-24 ${harBild ? "lg:grid-cols-[0.9fr_1.1fr] lg:gap-20" : ""}`}
    >
      {harBild && (
        <Reveal>
          {bilder.length > 0 ? (
            <div className={bilder.length > 1 ? "grid grid-cols-2 gap-3" : ""}>
              {bilder.map((url, i) => (
                <img
                  key={url}
                  src={url}
                  alt={
                    bilder.length === 1
                      ? `${FORETAG.vd}, grundare av ${FORETAG.namn}`
                      : `Bild ${i + 1} av teamet på ${FORETAG.namn}`
                  }
                  loading="lazy"
                  className={`w-full rounded-lg object-cover ${bilder.length === 1 ? "aspect-[4/5]" : "aspect-[3/4]"} ${i === 0 && bilder.length > 1 ? "col-span-2 aspect-[4/3]" : ""}`}
                />
              ))}
            </div>
          ) : (
            <div className="grid aspect-[4/5] place-items-center rounded-lg border-2 border-dashed border-input p-8 text-center text-sm text-muted-foreground">
              Bildplats (syns bara i utvecklingsläge). Lägg en bild på grundaren eller teamet i
              src/assets/team/
            </div>
          )}
        </Reveal>
      )}

      <Reveal delay={120}>
        <Heading className="max-w-xl text-3xl sm:text-4xl lg:text-5xl">
          Bakom <Underline>företaget</Underline>
        </Heading>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
          {FORETAG.vd} är grundare och VD för {FORETAG.namn}
          {FORETAG.erfarenhetAr ? ` och har ${FORETAG.erfarenhetAr} års erfarenhet i branschen` : ""}.
        </p>
        <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
          Har du ett projekt du funderar på? Ring eller skriv, så berättar vi mer om hur vi jobbar.
        </p>
        <Link
          to="/kontakt"
          className="mt-8 inline-flex font-display text-xs font-bold tracking-[0.14em] uppercase underline decoration-ultra decoration-[0.12em] underline-offset-[0.5em] hover:decoration-foreground"
        >
          Kontakta oss
        </Link>
      </Reveal>
    </section>
  );
}
