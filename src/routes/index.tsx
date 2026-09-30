import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Heading, Underline } from "@/components/Heading";
import { Reveal } from "@/components/Reveal";
import { Kulorvagg } from "@/components/Kulorvagg";
import { Logotyp } from "@/components/Logotyp";
import { Marquee } from "@/components/Marquee";
import { Penselring } from "@/components/Penselring";
import { Galleri, HAR_PROJEKTBILDER } from "@/components/Galleri";
import { FORETAG } from "@/lib/foretag";
import { kulorAt, useValdKulor } from "@/lib/kulorer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `Målare i ${FORETAG.ort} | ${FORETAG.namn}` },
      {
        name: "description",
        content: `Professionellt måleri i ${FORETAG.omrade}. Invändigt och utvändigt måleri, spackling, slipning och tapetsering. Begär en gratis offert.`,
      },
      { property: "og:title", content: `Målare i ${FORETAG.ort} | ${FORETAG.namn}` },
      {
        property: "og:description",
        content: "Erfarna målare med precision och personligt engagemang. Begär en gratis offert.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Start,
});

const TJANSTER = [
  { titel: "Invändigt måleri", tagg: "Inomhus", text: "Målning av väggar, tak, kök och snickerier." },
  { titel: "Spackling & slipning", tagg: "Underarbete", text: "Noggrant underarbete för jämna och hållbara resultat." },
  { titel: "Tapetsering", tagg: "Inomhus", text: "Professionell uppsättning av mönstrade och enfärgade tapeter." },
  {
    titel: "Utvändigt måleri",
    tagg: "Utomhus",
    text: "Fasadmålning av villor och fastigheter anpassat efter väder och material.",
  },
] as const;

const SKIKT = [
  {
    namn: "Underlaget",
    text: "Vi går igenom väggen, rensar löst material och lagar sprickor och hål.",
  },
  {
    namn: "Spackel och slip",
    text: "Jämna ytor kräver tid. Här avgörs hur släta väggarna ser ut i strilande ljus.",
  },
  {
    namn: "Grundning",
    text: "Grunden binder underlaget och gör att slutfärgen får samma lyster över hela väggen.",
  },
  {
    namn: "Täckande strykningar",
    text: "Kulören läggs på i tunna, jämna skikt tills den täcker och håller.",
  },
] as const;

function Start() {
  const kulor = kulorAt(useValdKulor());

  return (
    <>
      {/* Hero: mörk öppning, staplad rubrik, kulörvägg och logotyp */}
      <section
        className="relative -mt-[4.75rem] overflow-hidden bg-closing pt-36 text-closing-foreground"
        style={{ "--ring-a": "var(--closing-foreground)", "--ring-b": "var(--ultra-soft)" } as React.CSSProperties}
      >
        <div className="container-page grid items-center gap-12 pb-20 lg:grid-cols-[15rem_1fr_11rem] lg:gap-10 lg:pb-24">
          <div className="order-2 lg:order-1">
            <Kulorvagg />
          </div>

          <div className="order-1 lg:order-2">
            <h1 className="text-[clamp(1.85rem,5vw,4.6rem)] leading-[1.02] font-extrabold">
              <span className="block">Professionellt</span>
              <span className="block text-ultra-soft lg:pl-[12%]">måleri</span>
              <span className="block">i{"\u00a0"}{FORETAG.ort}</span>
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-closing-foreground/80">
              Vi är ett passionerat team av erfarna målare som sätter dina unika visioner i fokus.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/offert" className="btn-base btn-inverse">
                Begär en gratis offert
              </Link>
              <a href={`tel:${FORETAG.telefonLank}`} className="btn-base btn-inverse-outline">
                Ring {FORETAG.telefon}
              </a>
            </div>
          </div>

          <div className="relative order-3 hidden self-end lg:block">
            <Penselring className="absolute -inset-6 size-[calc(100%+3rem)] opacity-60" />
            <Logotyp className="relative" />
          </div>
        </div>
        <Marquee items={TJANSTER.map((t) => t.titel)} />
      </section>

      {/* Om företaget */}
      <section className="container-page grid gap-10 py-20 sm:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <Reveal>
          <Heading className="max-w-2xl text-3xl sm:text-4xl lg:text-5xl">
            Varje projekt är en <Underline>prioritet</Underline>
          </Heading>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {FORETAG.aktivtSedan ? `Sedan ${FORETAG.aktivtSedan} har ` : ""}
            {FORETAG.namn} {FORETAG.aktivtSedan ? "levererat" : "levererar"} högkvalitativa
            måleriarbeten med stor precision och ett personligt engagemang i{" "}
            {FORETAG.omrade}. För oss är varje projekt en prioritet, varje detalj viktig och varje
            kund värd det allra bästa.
          </p>
          <Link
            to="/om-oss"
            className="mt-8 inline-flex items-center gap-2 font-semibold underline decoration-ultra decoration-[0.12em] underline-offset-[0.4em] hover:decoration-foreground"
          >
            Läs mer om oss
            <ArrowUpRight size={18} strokeWidth={1.75} aria-hidden="true" />
          </Link>
        </Reveal>

        <Reveal delay={120}>
          <dl className="grid gap-px overflow-hidden rounded-lg border border-border bg-border">
            {FORETAG.aktivtSedan && (
              <div className="bg-card p-6">
                <dt className="eyebrow">Aktiva sedan</dt>
                <dd className="mono mt-3 text-5xl">{FORETAG.aktivtSedan}</dd>
              </div>
            )}
            <div className="bg-card p-6">
              <dt className="eyebrow">Arbetsområde</dt>
              <dd className="mt-3 font-display text-2xl leading-tight sm:text-3xl">
                {FORETAG.omrade}
              </dd>
            </div>
          </dl>
        </Reveal>
      </section>

      {/* Tjänster: första kortet målas i den kulör besökaren valt */}
      <section className="bg-muted py-20 sm:py-28">
        <div className="container-page">
          <Reveal>
            <Heading className="max-w-2xl text-3xl sm:text-4xl lg:text-5xl">
              Målning för hus, lägenheter och <Underline>fastigheter</Underline>
            </Heading>
          </Reveal>

          <div className="mt-12 grid gap-3 md:grid-cols-6">
            {TJANSTER.map((t, i) => {
              const live = i === 0;
              const span = i === 0 ? "md:col-span-4" : i === 3 ? "md:col-span-4" : "md:col-span-2";
              return (
                <Reveal key={t.titel} delay={i * 80} className={span}>
                  <article
                    className={`flex h-full min-h-[16rem] flex-col justify-between rounded-lg border border-border p-8 transition-colors duration-700 ${live ? "" : "bg-card"}`}
                    style={live ? { backgroundColor: kulor.hex, color: kulor.ink } : undefined}
                  >
                    <span className="mono text-xs uppercase">
                      {live ? `${t.tagg}, ${kulor.namn} ${kulor.hex}` : t.tagg}
                    </span>
                    <div className="mt-12">
                      <h3 className="text-2xl sm:text-3xl">{t.titel}</h3>
                      <p className="mt-4 max-w-sm leading-relaxed opacity-85">{t.text}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Så byggs en yta + kulörkoder */}
      <section className="container-page grid gap-14 py-20 sm:py-28 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <Reveal>
          <Heading className="text-3xl sm:text-4xl lg:text-5xl">
            Det du ser är sista <Underline>skiktet</Underline>
          </Heading>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
            En jämn, hållbar vägg blir till i flera lager. Så här ser tvärsnittet ut, nerifrån och
            upp.
          </p>
          <div className="mt-10 rounded-lg border border-border bg-card p-6">
            <p className="eyebrow">Kulörkoder</p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              I Sverige beskrivs kulörer ofta med NCS. Koden{" "}
              <span className="mono text-foreground">S 2005-Y20R</span> säger hur mörk (20), hur
              färgstark (05) och åt vilket håll (Y20R, gulaktig med lite rött) kulören går. Visa
              koden för oss så matchar vi den.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ol className="grid gap-2">
            {SKIKT.map((s, i) => (
              <li
                key={s.namn}
                className="grid grid-cols-[0.75rem_1fr] gap-5 rounded-lg border border-border bg-card p-5"
              >
                <span
                  aria-hidden="true"
                  className="rounded-sm"
                  style={{
                    background:
                      i === SKIKT.length - 1
                        ? kulor.hex
                        : `color-mix(in srgb, var(--foreground) ${28 - i * 8}%, var(--card))`,
                  }}
                />
                <div>
                  <h3 className="text-xl">{s.namn}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      {/* Utfört */}
      {HAR_PROJEKTBILDER && (
        <section className="container-page pb-20 sm:pb-28">
          <Reveal>
            <Heading className="max-w-2xl text-3xl sm:text-4xl lg:text-5xl">
              Utfört <Underline>arbete</Underline>
            </Heading>
          </Reveal>
          <div className="mt-10">
            <Galleri />
          </div>
        </section>
      )}

      {/* ROT */}
      {FORETAG.fskatt && (
        <section className="container-page pb-4">
          <Reveal>
            <div className="grid gap-8 rounded-lg border border-foreground p-6 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <Heading className="max-w-xl text-2xl sm:text-3xl">
                  ROT-avdrag direkt på <Underline>fakturan</Underline>
                </Heading>
                <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
                  {FORETAG.namn} har F-skatt, vilket krävs för att du ska kunna använda ROT-avdraget
                  direkt på fakturan för måleriarbeten i ditt hem.
                </p>
              </div>
              <Link to="/rot" className="btn-base btn-primary">
                Räkna på ditt ROT-avdrag
              </Link>
            </div>
          </Reveal>
        </section>
      )}
    </>
  );
}
