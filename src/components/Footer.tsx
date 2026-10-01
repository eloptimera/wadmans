import { Link, useRouterState } from "@tanstack/react-router";
import { FORETAG } from "@/lib/foretag";
import { Underline } from "@/components/Heading";
import { InstagramIkon } from "@/components/Instagram";
import { Logotyp } from "@/components/Logotyp";
import { Penselring } from "@/components/Penselring";

const FOOTER_LANK =
  "underline decoration-transparent decoration-[0.1em] underline-offset-[0.4em] transition-colors duration-200 hover:decoration-ultra";

/** Sidorna där formuläret redan är huvudinnehållet visar ingen avslutande uppmaning. */
const UTAN_CTA = ["/offert", "/kontakt"];

export function Footer() {
  const sokvag = useRouterState({ select: (s) => s.location.pathname });
  const visaCta = !UTAN_CTA.includes(sokvag);

  return (
    <footer
      className="relative mt-12 overflow-hidden bg-closing text-closing-foreground"
      style={{ "--ring-a": "var(--closing-foreground)", "--ring-b": "var(--ultra-soft)" } as React.CSSProperties}
    >
      {/* Mjuk tona från sidans ljusa yta in i sidfoten */}
      <div aria-hidden="true" className="relative h-28 bg-gradient-to-b from-background to-closing" />
      <Penselring className="pointer-events-none absolute -top-16 -right-24 hidden size-[30rem] opacity-20 md:block" />
      {visaCta && (
        <div className="container-page relative pt-20 pb-16 sm:pt-28">
          <h2 className="relative max-w-3xl text-[clamp(1.9rem,5vw,4rem)] leading-[1.05]">
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
        className={`container-page relative grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-3 ${visaCta ? "border-t border-closing-foreground/15" : ""}`}
      >
        <div>
          <Logotyp className="size-24" />
          <p className="mt-5 font-display text-xl font-extrabold tracking-[0.1em] uppercase">
            {FORETAG.namn}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-closing-foreground/75">
            Måleri i {FORETAG.ort}
            {FORETAG.erfarenhetAr ? `, med ${FORETAG.erfarenhetAr} års erfarenhet` : ""}
            {FORETAG.aktivtSedan ? `. Aktiva sedan ${FORETAG.aktivtSedan}` : ""}.
          </p>
          <InstagramIkon className="mt-6" />
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
            {FORETAG.vd && <li>Grundare och VD: {FORETAG.vd}</li>}
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
        <div className="container-page relative flex flex-wrap justify-between gap-2 py-6 text-xs text-closing-foreground/70">
          <span>
            © {new Date().getFullYear()} {FORETAG.namn}
          </span>
          {FORETAG.fskatt && <span>Godkänd för F-skatt</span>}
        </div>
      </div>
    </footer>
  );
}
