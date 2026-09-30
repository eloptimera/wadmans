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
        className="grain relative isolate aspect-[5/4] overflow-hidden rounded-lg sm:aspect-[16/10] lg:aspect-[3/4]"
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
            <p className="font-display text-xl leading-none font-bold tracking-[0.06em] uppercase sm:text-3xl lg:text-base">
              {kulorAt(visad).namn}
            </p>
            <p className="mono mt-2 text-sm">{kulorAt(visad).hex}</p>
          </div>
        </div>
      </div>

      <div role="group" aria-label="Välj kulör" className="flex flex-wrap justify-center gap-2.5">
        {KULORER.map((k, i) => (
          <button
            key={k.namn}
            type="button"
            aria-pressed={i === visad}
            aria-label={`Måla väggen i ${k.namn}`}
            title={k.namn}
            onClick={() => valj(i)}
            className="size-9 rounded-full border border-closing-foreground/40 transition-transform duration-200 ease-out hover:-translate-y-1 aria-pressed:ring-2 aria-pressed:ring-closing-foreground aria-pressed:ring-offset-2 aria-pressed:ring-offset-closing"
            style={{ backgroundColor: k.hex }}
          />
        ))}
      </div>
    </div>
  );
}
