import { createFileRoute, Link } from "@tanstack/react-router";
import { Heading, Underline } from "@/components/Heading";
import { Reveal } from "@/components/Reveal";
import { FORETAG } from "@/lib/foretag";
import { kulorAt, useValdKulor } from "@/lib/kulorer";

export const Route = createFileRoute("/om-oss")({
  head: () => ({
    meta: [
      { title: `Om oss | ${FORETAG.namn}` },
      {
        name: "description",
        content: `${FORETAG.namn} är ett målerifirma i ${FORETAG.ort} med erfarna målare. Vi arbetar i ${FORETAG.omrade}.`,
      },
      { property: "og:title", content: `Om oss | ${FORETAG.namn}` },
      {
        property: "og:description",
        content: `Erfarna målare i ${FORETAG.ort} med precision och personligt engagemang.`,
      },
      { property: "og:url", content: "/om-oss" },
    ],
    links: [{ rel: "canonical", href: "/om-oss" }],
  }),
  component: OmOss,
});

const VARDERINGAR = [
  {
    titel: "Dina visioner i fokus",
    text: "Vi lyssnar först. Din bild av resultatet är utgångspunkten för hela arbetet.",
  },
  {
    titel: "Varje detalj är viktig",
    text: "Precision i både underarbete och slutresultat, från första spackelstrykningen.",
  },
  {
    titel: "Varje kund värd det bästa",
    text: "Ett personligt engagemang i varje projekt, stort som smått.",
  },
] as const;

function OmOss() {
  const kulor = kulorAt(useValdKulor());

  const fakta: { rubrik: string; varde: string }[] = [
    { rubrik: "Företag", varde: `${FORETAG.namn} (${FORETAG.undertitel})` },
    { rubrik: "Organisationsnummer", varde: FORETAG.orgnr },
    ...(FORETAG.aktivtSedan ? [{ rubrik: "Aktiva sedan", varde: String(FORETAG.aktivtSedan) }] : []),
    ...(FORETAG.vd ? [{ rubrik: "VD", varde: FORETAG.vd }] : []),
    ...(FORETAG.fskatt
      ? [{ rubrik: "Skatt", varde: "Registrerad för F-skatt, moms och arbetsgivaravgift" }]
      : []),
    { rubrik: "Arbetsområde", varde: FORETAG.omrade },
  ];

  return (
    <>
      <section className="container-page pt-16 pb-16 sm:pt-24">
        <Reveal>
          <Heading as="h1" className="max-w-3xl text-5xl sm:text-6xl">
            Erfarna målare som sätter dina <Underline>visioner</Underline> i fokus
          </Heading>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Vi är ett passionerat team av erfarna målare.{" "}
            {FORETAG.aktivtSedan ? `Sedan ${FORETAG.aktivtSedan} har ` : ""}
            {FORETAG.namn} {FORETAG.aktivtSedan ? "levererat" : "levererar"} högkvalitativa
            måleriarbeten med stor precision och ett personligt engagemang i {FORETAG.omrade}.
          </p>
        </Reveal>
      </section>

      <section className="container-page grid gap-3 pb-20 md:grid-cols-3">
        {VARDERINGAR.map((v, i) => (
          <Reveal key={v.titel} delay={i * 100}>
            <article className="h-full rounded-lg border border-border bg-card p-8">
              <span
                aria-hidden="true"
                className="block h-1.5 w-10 rounded-sm transition-colors duration-700"
                style={{ backgroundColor: i === 0 ? kulor.hex : "var(--ultra)" }}
              />
              <h2 className="mt-8 text-2xl sm:text-3xl">{v.titel}</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{v.text}</p>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="bg-muted py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <Heading className="text-3xl sm:text-4xl">Fakta om företaget</Heading>
          </Reveal>
          <Reveal delay={120}>
            <dl className="divide-y divide-border">
              {fakta.map((f) => (
                <div key={f.rubrik} className="grid gap-1 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
                  <dt className="text-sm font-semibold">{f.rubrik}</dt>
                  <dd className="text-muted-foreground">{f.varde}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-20 sm:py-28">
        <Reveal className="flex justify-center">
          <Link to="/offert" className="btn-base btn-primary px-10 py-5 text-lg">
            Begär en gratis offert
          </Link>
        </Reveal>
      </section>
    </>
  );
}
