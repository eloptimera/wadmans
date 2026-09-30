import { Link, useRouterState } from "@tanstack/react-router";
import { FORETAG } from "@/lib/foretag";
import { Underline } from "@/components/Heading";

const FOOTER_LANK =
  "underline decoration-transparent decoration-[0.1em] underline-offset-[0.4em] transition-colors duration-200 hover:decoration-ultra";

/** Sidorna där formuläret redan är huvudinnehållet visar ingen avslutande uppmaning. */
const UTAN_CTA = ["/offert", "/kontakt"];

export function Footer() {
  const sokvag = useRouterState({ select: (s) => s.location.pathname });
  const visaCta = !UTAN_CTA.includes(sokvag);

  return (
    <footer className="mt-24 bg-closing text-closing-foreground">
      {visaCta && (
        <div className="container-page pt-20 pb-16 sm:pt-28">
          <h2 className="max-w-3xl text-[clamp(2.25rem,6vw,4.75rem)] leading-[1]">
            Berätta om ditt projekt. Vi ger dig en <Underline>gratis offert</Underline>
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/offert" className="btn-base btn-inverse">
              Begär en gratis offert
            </Link>
            <a href={`tel:${FORETAG.telefonLank}`} className="btn-base btn-inverse-outline">
              Ring {FORETAG.telefon}
            </a>
          </div>
        </div>
      )}

      <div
        className={`container-page grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-3 ${visaCta ? "border-t border-closing-foreground/15" : ""}`}
      >
        <div>
          <p className="font-display text-3xl font-semibold tracking-tight">{FORETAG.namn}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-closing-foreground/75">
            Måleri i {FORETAG.ort}
            {FORETAG.aktivtSedan ? `. Aktiva sedan ${FORETAG.aktivtSedan}.` : "."}
          </p>
        </div>

        <div>
          <p className="eyebrow text-closing-foreground/70">Kontakt</p>
          <ul className="mt-4 space-y-2 text-sm text-closing-foreground/90">
            <li>
              <a href={`tel:${FORETAG.telefonLank}`} className={FOOTER_LANK}>
                {FORETAG.telefon}
              </a>
            </li>
            <li>
              <a href={`mailto:${FORETAG.epost}`} className={FOOTER_LANK}>
                {FORETAG.epost}
              </a>
            </li>
            <li>{FORETAG.adress}</li>
            <li>Org.nr {FORETAG.orgnr}</li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-closing-foreground/70">Sidor</p>
          <ul className="mt-4 space-y-2 text-sm text-closing-foreground/90">
            <li>
              <Link to="/om-oss" className={FOOTER_LANK}>
                Om oss
              </Link>
            </li>
            <li>
              <Link to="/rot" className={FOOTER_LANK}>
                ROT-avdrag
              </Link>
            </li>
            <li>
              <Link to="/offert" className={FOOTER_LANK}>
                Begär offert
              </Link>
            </li>
            <li>
              <Link to="/kontakt" className={FOOTER_LANK}>
                Kontakt
              </Link>
            </li>
            <li>
              <Link to="/integritetspolicy" className={FOOTER_LANK}>
                Integritetspolicy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-closing-foreground/15">
        <div className="container-page flex flex-wrap justify-between gap-2 py-6 text-xs text-closing-foreground/70">
          <span>
            © {new Date().getFullYear()} {FORETAG.namn}
          </span>
          {FORETAG.fskatt && <span>Godkänd för F-skatt</span>}
        </div>
      </div>
    </footer>
  );
}
