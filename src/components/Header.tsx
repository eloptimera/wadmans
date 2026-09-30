import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { FORETAG } from "@/lib/foretag";
import { Varumarke } from "@/components/Varumarke";

const LANKAR = [
  { to: "/", label: "Hem" },
  { to: "/om-oss", label: "Om oss" },
  { to: "/rot", label: "ROT-avdrag" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

const LANK_KLASS =
  "font-display text-xs font-bold tracking-[0.16em] whitespace-nowrap uppercase text-muted-foreground underline decoration-transparent decoration-[0.12em] underline-offset-[0.5em] transition-colors duration-200 hover:text-foreground hover:decoration-ultra";
const LANK_AKTIV = "text-foreground decoration-ultra";

export function Header() {
  const [oppen, setOppen] = useState(false);

  useEffect(() => {
    if (!oppen) return;
    const stang = (e: KeyboardEvent) => e.key === "Escape" && setOppen(false);
    window.addEventListener("keydown", stang);
    return () => window.removeEventListener("keydown", stang);
  }, [oppen]);

  return (
    <header className="sticky top-3 z-50 px-3">
      <div className="relative mx-auto max-w-7xl">
        <div className="flex h-16 items-center justify-between gap-6 rounded-full border border-border bg-background px-4 backdrop-blur-xl sm:px-6">
          <Link to="/" aria-label={`${FORETAG.namn}, startsida`} onClick={() => setOppen(false)}>
            <Varumarke />
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Huvudmeny">
            {LANKAR.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className={LANK_KLASS}
                activeProps={{ className: `${LANK_KLASS} ${LANK_AKTIV}` }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-5 md:flex">
            <a
              href={`tel:${FORETAG.telefonLank}`}
              aria-label={`Ring ${FORETAG.telefon}`}
              className="flex items-center gap-2 text-sm whitespace-nowrap"
            >
              <Phone className="size-4" strokeWidth={1.75} aria-hidden="true" />
              <span className="mono hidden xl:inline">{FORETAG.telefon}</span>
            </a>
            <Link to="/offert" className="btn-base btn-primary min-h-10 px-5 py-2.5">
              Begär offert
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <a
              href={`tel:${FORETAG.telefonLank}`}
              aria-label={`Ring ${FORETAG.telefon}`}
              className="grid size-10 place-items-center"
            >
              <Phone className="size-5" strokeWidth={1.75} aria-hidden="true" />
            </a>
            <button
              type="button"
              aria-label={oppen ? "Stäng meny" : "Öppna meny"}
              aria-expanded={oppen}
              onClick={() => setOppen((o) => !o)}
              className="relative grid size-10 place-items-center"
            >
              <span
                aria-hidden="true"
                className={`absolute h-0.5 w-6 rounded-full bg-current transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${oppen ? "rotate-45" : "-translate-y-1.5"}`}
              />
              <span
                aria-hidden="true"
                className={`absolute h-0.5 w-6 rounded-full bg-current transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${oppen ? "-rotate-45" : "translate-y-1.5"}`}
              />
            </button>
          </div>
        </div>

        {oppen && (
          <nav
            className="absolute inset-x-0 top-full mt-2 flex flex-col rounded-lg border border-border bg-background px-6 py-4 shadow-xl shadow-black/10 md:hidden"
            aria-label="Mobilmeny"
          >
            {LANKAR.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOppen(false)}
                className={`py-3.5 text-base ${LANK_KLASS}`}
                activeProps={{ className: `py-3.5 text-base ${LANK_KLASS} ${LANK_AKTIV}` }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/offert"
              onClick={() => setOppen(false)}
              className="btn-base btn-primary mt-3"
            >
              Begär offert
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
