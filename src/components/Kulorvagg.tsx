import { useEffect, useRef, useState } from "react";
import { KULORER, STARTKULOR, kulorAt, valjKulor } from "@/lib/kulorer";

/**
 * Hero-väggen. Sidan laddas med väggen i Kalkvit och startkulören rullas på med ren CSS,
 * så att den färdiga vyn syns även utan JavaScript. Ett klick på en kulör rullar på en ny.
 */
export function Kulorvagg() {
  // bas: kulören som ligger på väggen. mal: kulören som rullas på just nu.
  const [bas, setBas] = useState(0);
  const [mal, setMal] = useState<number | null>(STARTKULOR);
  const [ink, setInk] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  const visad = mal ?? bas;

  function valj(i: number) {
    if (i === visad) return;
    if (timer.current) clearTimeout(timer.current);
    if (mal !== null) {
      setBas(mal);
      setInk(mal);
    }
    setMal(i);
    valjKulor(i);
    /* Textfärgen byter när rollern passerat mitten av väggen. */
    timer.current = setTimeout(() => setInk(i), 420);
  }

  function klar() {
    if (mal === null) return;
    setBas(mal);
    setInk(mal);
    setMal(null);
  }

  return (
    <div className="grid gap-4">
      <div
        className="grain relative isolate aspect-[5/4] overflow-hidden rounded-2xl sm:aspect-[16/10] lg:aspect-[4/5]"
        style={{ backgroundColor: kulorAt(bas).hex, color: kulorAt(ink).ink }}
      >
        {mal !== null && (
          <div
            key={mal}
            aria-hidden="true"
            className="rulla absolute inset-0 z-0"
            style={{ backgroundColor: kulorAt(mal).hex }}
            onAnimationEnd={klar}
          >
            <div className="absolute inset-y-0 right-0 w-6 bg-linear-to-l from-black/20 to-transparent" />
          </div>
        )}
        <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-7">
          <p className="mono text-xs uppercase">Prova en kulör på väggen</p>
          <div>
            <p className="font-display text-4xl leading-none font-semibold sm:text-5xl">
              {kulorAt(visad).namn}
            </p>
            <p className="mono mt-2 text-sm">{kulorAt(visad).hex}</p>
          </div>
        </div>
      </div>

      <div role="group" aria-label="Välj kulör" className="grid grid-cols-4 gap-2">
        {KULORER.map((k, i) => (
          <button
            key={k.namn}
            type="button"
            aria-pressed={i === visad}
            aria-label={`Måla väggen i ${k.namn}`}
            onClick={() => valj(i)}
            className="group flex flex-col overflow-hidden rounded-md bg-muted text-left transition-transform duration-200 ease-out hover:-translate-y-1 aria-pressed:ring-2 aria-pressed:ring-foreground"
          >
            <span className="block h-9 sm:h-11" style={{ backgroundColor: k.hex }} />
            <span className="mono px-2 py-1.5 text-[12px] leading-tight">{k.namn}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
