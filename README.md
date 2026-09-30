# Wadmans

Webbplats byggd med TanStack Start, React och Tailwind. Utseende och text är övertagna från en tidigare kundsajt och ska anpassas för Wadmans.

## Kom igång

```bash
bun install
bun run dev
```

## Formulär

Kontakt- och offertformulären skickas till adressen i `VITE_FORM_ENDPOINT` (se `.env.example`). Ingen databas eller API-nyckel behövs.

## Anpassa för en kund

Allt företagsspecifikt ligger i `src/lib/foretag.ts`. Byt värdena där (namn, ort, telefon, e-post, adress, org.nr, kartans bbox) och sätt `aktivtSedan`, `vd` och `fskatt` till verkliga värden eller `null`/`false`, så döljs motsvarande text automatiskt. Lägg projektbilder i `src/assets/projekt/` så visas galleriet. Sätt `VITE_FORM_ENDPOINT` (se `.env.example`) så att formulären kan skickas. Kulörerna på startsidan ligger i `src/lib/kulorer.ts`.
