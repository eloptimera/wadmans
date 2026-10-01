import { createFileRoute, Link } from "@tanstack/react-router";
import { Heading, Underline } from "@/components/Heading";
import { Grundare } from "@/components/Grundare";
import { InstagramBand } from "@/components/Instagram";
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
    titel: "Du bestämmer resultatet",
    text: "Vi börjar med att lyssna på hur du vill ha det. Din bild av resultatet styr hela jobbet.",
  },
  {
    titel: "Detaljerna räknas",
    text: "Från första spackelstrykningen till sista penseldraget lägger vi tid på det som syns och det som inte syns.",
  },
  {
    titel: "Stora och små jobb",
    text: "Ett enda rum eller en hel fasad, vi tar uppdraget på samma allvar.",
  },
] as const;

function OmOss() {
  const kulor = kulorAt(useValdKulor());

  const fakta: { rubrik: string; varde: string }[] = [
    { rubrik: "Företag", varde: FORETAG.namn },
    { rubrik: "Organisationsnummer", varde: FORETAG.orgnr },
    ...(FORETAG.vd
      ? [
          {
            rubrik: "Grundare och VD",
            varde: `${FORETAG.vd}${FORETAG.erfarenhetAr ? `, ${FORETAG.erfarenhetAr} års erfarenhet i branschen` : ""}`,
          },
        ]
      : []),
    ...(FORETAG.aktivtSedan ? [{ rubrik: "Aktiva sedan", varde: String(FORETAG.aktivtSedan) }] : []),
    { rubrik: "Adress", varde: FORETAG.adress },
    { rubrik: "Telefon", varde: FORETAG.telefon },
    { rubrik: "E-post", varde: FORETAG.epost },
    ...(FORETAG.fskatt ? [{ rubrik: "Skatt", varde: "Godkänd för F-skatt" }] : []),
    { rubrik: "Arbetsområde", varde: FORETAG.omrade },
  ];

  return (
    <>
      <section className="container-page pt-16 pb-16 sm:pt-24">
        <Reveal>
          <Heading as="h1" className="max-w-3xl text-3xl sm:text-5xl lg:text-6xl">
            {FORETAG.erfarenhetAr ? (
              <>
                Målare med <Underline>{FORETAG.erfarenhetAr} års</Underline> erfarenhet
              </>
            ) : (
              <>
                Målare i <Underline>{FORETAG.ort}</Underline>
              </>
            )}
          </Heading>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {FORETAG.namn} är ett målerifirma i {FORETAG.ort}
            {FORETAG.vd ? `, grundat av ${FORETAG.vd}` : ""}. Vi målar, spacklar och tapetserar
            hos privatpersoner och fastighetsägare i {FORETAG.omrade}.
          </p>
        </Reveal>
      </section>

      <section className="container-page grid gap-3 pb-12 md:grid-cols-3">
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

      <Grundare />

      <section className="band py-28 sm:py-32">
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

      <InstagramBand />

      <section className="container-page pb-12 sm:pb-20">
        <Reveal className="flex justify-center">
          <Link to="/offert" className="btn-base btn-primary px-10 py-5 text-lg">
            Begär en gratis offert
          </Link>
        </Reveal>
      </section>
    </>
  );
}
