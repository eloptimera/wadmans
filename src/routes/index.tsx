import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Heading, Underline } from "@/components/Heading";
import { Reveal } from "@/components/Reveal";
import { Kulorvagg } from "@/components/Kulorvagg";
import { Galleri, HAR_PROJEKTBILDER } from "@/components/Galleri";
import { Grundare } from "@/components/Grundare";
import { InstagramBand } from "@/components/Instagram";
import { Marquee } from "@/components/Marquee";
import { FORETAG } from "@/lib/foretag";
import { kulorAt, useValdKulor } from "@/lib/kulorer";
import rum from "@/assets/hero/rum.jpg";
import pensel from "@/assets/hero/pensel.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `Målare i ${FORETAG.ort} | ${FORETAG.namn}` },
      {
        name: "description",
        content: `Målare i ${FORETAG.omrade}. Invändigt och utvändigt måleri, spackling, slipning och tapetsering. Begär en gratis offert.`,
      },
      { property: "og:title", content: `Målare i ${FORETAG.ort} | ${FORETAG.namn}` },
      {
        property: "og:description",
        content: "Måleri för privatpersoner och fastighetsägare. Begär en gratis offert.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Start,
});

const TJANSTER = [
  { titel: "Invändigt måleri", tagg: "Inomhus", text: "Väggar, tak, kök och snickerier." },
  {
    titel: "Spackling & slipning",
    tagg: "Underarbete",
    text: "Underarbetet som gör att färgen ser bra ut och håller.",
  },
  { titel: "Tapetsering", tagg: "Inomhus", text: "Mönstrade och enfärgade tapeter." },
  {
    titel: "Utvändigt måleri",
    tagg: "Utomhus",
    text: "Fasader på villor och fastigheter, med färg och metod som passar väder och material.",
  },
] as const;

const SKIKT = [
  {
    namn: "Underlaget",
    text: "Vi går igenom väggen, tar bort löst material och lagar sprickor och hål.",
  },
  {
    namn: "Spackel och slip",
    text: "Det här tar tid, och det är här det avgörs hur slät väggen blir när solen ligger an snett.",
  },
  {
    namn: "Grundning",
    text: "Grunden binder underlaget så att färgen får samma lyster över hela väggen.",
  },
  {
    namn: "Täckande strykningar",
    text: "Kulören läggs på i tunna, jämna lager tills den täcker.",
  },
] as const;

function Start() {
  const kulor = kulorAt(useValdKulor());

  const rader: string[] = FORETAG.erfarenhetAr
    ? ["Målare", `i ${FORETAG.ort}`, `med ${FORETAG.erfarenhetAr} års`, "erfarenhet"]
    : ["Målare", `i ${FORETAG.ort}`];
  const forskjutning = ["lg:ml-[14%]", "lg:ml-[4%]", "lg:ml-[26%]", "lg:ml-[10%]"];
  const mobilForskjutning = ["ml-0", "ml-[8%]", "ml-[3%]", "ml-[12%]"];

  return (
    <>
      {/* Hero */}
      <section
        id="hero"
        className="relative -mt-[5.25rem] overflow-hidden bg-closing pt-36 text-closing-foreground"
      >
        <div className="container-page relative pb-16 lg:min-h-[38rem] lg:pb-24">
          <div className="relative z-10">
            <h1
              className="text-[clamp(1.9rem,8.6vw,3.25rem)] leading-[1.02] font-extrabold text-orange sm:text-[clamp(3.25rem,8vw,6rem)] lg:text-[clamp(3.5rem,6vw,5.75rem)]"
              style={{ textShadow: "0 2px 28px rgba(10,16,29,0.65)" }}
            >
              {rader.map((r, i) => (
                <span
                  key={r}
                  className={`glid block whitespace-nowrap ${mobilForskjutning[i]} ${forskjutning[i]}`}
                  style={{ animationDelay: `${i * 140}ms` }}
                >
                  {r}
                </span>
              ))}
            </h1>

            <div className="mt-10 max-w-md lg:ml-[30%]">
              <p className="text-lg leading-relaxed text-closing-foreground/85">
                {FORETAG.vd ? `${FORETAG.vd} och ` : ""}
                {FORETAG.namn} målar, spacklar och tapetserar hos privatpersoner och
                fastighetsägare i {FORETAG.omrade}. Berätta vad du vill ha gjort, så återkommer vi
                med en offert.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <Link to="/offert" className="btn-base btn-orange">
                  Begär en gratis offert
                </Link>
                <a
                  href={`tel:${FORETAG.telefonLank}`}
                  className="font-display text-xs font-bold tracking-[0.14em] uppercase underline decoration-orange decoration-[0.12em] underline-offset-[0.5em]"
                >
                  Ring {FORETAG.telefon}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex items-end gap-4 lg:mt-0 lg:block">
            <img
              src={rum}
              alt="Nyspacklade väggar och tak i ett hus inför målning"
              width={900}
              height={1219}
              fetchPriority="high"
              className="aspect-[3/4] w-[58%] rounded-sm object-cover lg:absolute lg:top-0 lg:left-0 lg:w-[17rem]"
            />
            <img
              src={pensel}
              alt="Pensel som stryker grå färg på en vägg"
              width={800}
              height={838}
              className="aspect-[4/3] w-[38%] rounded-sm object-cover lg:absolute lg:right-0 lg:bottom-32 lg:w-[15rem]"
            />
          </div>
        </div>
        <Marquee items={TJANSTER.map((t) => t.titel)} />
        {/* Hero tonar mjukt över i sidans ljusa yta */}
        <div aria-hidden="true" className="h-32 bg-gradient-to-b from-closing to-background" />
      </section>

      {/* Kulörvägg */}
      <section className="container-page grid items-center gap-12 py-12 sm:py-20 lg:grid-cols-[1fr_20rem] lg:gap-20">
        <Reveal>
          <Heading className="max-w-xl text-3xl sm:text-4xl lg:text-5xl">
            Vilken kulör får din <Underline>vägg</Underline>?
          </Heading>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            Prova några kulörer och se hur väggen ändras. Vill du ha hjälp att välja får du gärna
            höra av dig, så tar vi det därifrån.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="rounded-lg bg-closing p-4 text-closing-foreground">
            <Kulorvagg />
          </div>
        </Reveal>
      </section>

      {/* Om företaget */}
      <section className="container-page grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <Reveal>
          <Heading className="max-w-2xl text-3xl sm:text-4xl lg:text-5xl">
            Stora och små jobb, samma <Underline>noggrannhet</Underline>
          </Heading>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {FORETAG.namn} drivs av {FORETAG.vd ?? "oss"}
            {FORETAG.erfarenhetAr ? `, som har ${FORETAG.erfarenhetAr} års erfarenhet av måleri` : ""}
            . Vi arbetar hos privatpersoner och fastighetsägare i {FORETAG.omrade}, och vi lägger
            lika mycket tid på underarbetet som på den sista strykningen.
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
            {FORETAG.erfarenhetAr ? (
              <div className="bg-card p-6">
                <dt className="eyebrow">Erfarenhet</dt>
                <dd className="mono mt-3 text-5xl">{FORETAG.erfarenhetAr} år</dd>
              </div>
            ) : FORETAG.aktivtSedan ? (
              <div className="bg-card p-6">
                <dt className="eyebrow">Aktiva sedan</dt>
                <dd className="mono mt-3 text-5xl">{FORETAG.aktivtSedan}</dd>
              </div>
            ) : null}
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
      <section className="band py-28 sm:py-36">
        <div className="container-page">
          <Reveal>
            <Heading className="max-w-2xl text-3xl sm:text-4xl lg:text-5xl">
              Det här hjälper vi <Underline>till med</Underline>
            </Heading>
          </Reveal>

          <div className="mt-12 grid gap-3 md:grid-cols-6">
            {TJANSTER.map((t, i) => {
              const live = i === 0;
              const span = i === 0 || i === 3 ? "md:col-span-4" : "md:col-span-2";
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
      <section className="container-page grid gap-14 py-16 sm:py-24 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <Reveal>
          <Heading className="text-3xl sm:text-4xl lg:text-5xl">
            Det du ser är sista <Underline>skiktet</Underline>
          </Heading>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
            En vägg som ser bra ut och håller byggs i flera lager. Så här brukar ordningen vara,
            nerifrån och upp.
          </p>
          <div className="mt-10 rounded-lg border border-border bg-card p-6">
            <p className="eyebrow">Kulörkoder</p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              I Sverige anger man ofta kulörer med NCS-koder. Koden{" "}
              <span className="mono text-foreground">S 2005-Y20R</span> betyder 20 % svärta, 5 %
              kulörthet och en gulaktig ton (Y20R). Har du en kod hemma räcker det, så tar vi det
              därifrån.
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

      <Grundare />

      {/* Utfört */}
      {HAR_PROJEKTBILDER && (
        <section className="container-page pb-16 sm:pb-24">
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

      <InstagramBand />

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
                  {FORETAG.namn} har F-skatt, så ROT-avdraget kan dras direkt på fakturan för
                  målningsarbeten i ditt hem.
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
