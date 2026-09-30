import { useSyncExternalStore } from "react";

/** Exempelkulörer. Namnen är egna och hexvärdena approximationer, inte kulörkoder från ett färgsystem. */
export const KULORER = [
  { namn: "Kalkvit", hex: "#ECEBE6", ink: "#101418" },
  { namn: "Havsdimma", hex: "#8FA8A3", ink: "#101418" },
  { namn: "Dammblå", hex: "#A9BAD0", ink: "#101418" },
  { namn: "Björkrosa", hex: "#E3C4BC", ink: "#101418" },
  { namn: "Senap", hex: "#C99A2E", ink: "#101418" },
  { namn: "Mossa", hex: "#55654A", ink: "#F1F2EE" },
  { namn: "Skiffer", hex: "#4A5560", ink: "#F1F2EE" },
  { namn: "Lingon", hex: "#7A2E3B", ink: "#F1F2EE" },
] as const;

export const STARTKULOR = 1;

/* Liten delad store så att vald kulör följer med från startsidans vägg till resten av sidan. */
let vald: number = STARTKULOR;
const lyssnare = new Set<() => void>();

export function valjKulor(i: number) {
  if (i === vald) return;
  vald = i;
  lyssnare.forEach((l) => l());
}

function prenumerera(l: () => void) {
  lyssnare.add(l);
  return () => {
    lyssnare.delete(l);
  };
}

export function useValdKulor() {
  return useSyncExternalStore(
    prenumerera,
    () => vald,
    () => STARTKULOR,
  );
}

export type Kulor = (typeof KULORER)[number];

/** Slår upp en kulör och faller tillbaka på startkulören, så anroparen aldrig får undefined. */
export function kulorAt(i: number): Kulor {
  return KULORER[i] ?? KULORER[STARTKULOR]!;
}
