// Enda källan till företagsuppgifter. Allt på sajten (sidfot, kontakt, integritetspolicy,
// meta-data, strukturerad data) läser härifrån.
//
// Uppgifterna gäller Wadmans Måleri AB. Ska sajten återanvändas för en annan kund byter man
// värdena här (se README, avsnittet "Anpassa för en kund"). Fält som sätts till null visas inte.
export type Foretag = {
  namn: string;
  kortnamn: string;
  undertitel: string;
  ort: string;
  omrade: string;
  /** Årtal företaget startade, eller null om det inte ska visas. */
  aktivtSedan: number | null;
  /** Grundare och verkställande direktör, eller null om det inte ska visas. */
  vd: string | null;
  /** Antal års erfarenhet i branschen, eller null om det inte ska visas. */
  erfarenhetAr: number | null;
  /** Länk till företagets Instagram, eller null om det inte ska visas. */
  instagram: string | null;
  /** Instagram-namnet som visas i text. */
  instagramNamn: string | null;
  telefon: string;
  telefonLank: string;
  epost: string;
  adress: string;
  orgnr: string;
  /** Sätt till false om företaget saknar F-skatt, så döljs alla ROT-påståenden om F-skatt. */
  fskatt: boolean;
  /** OpenStreetMap-ruta för kartan på kontaktsidan: väst,syd,öst,nord. */
  kartaBbox: string;
};

export const FORETAG: Foretag = {
  namn: "Wadmans Måleri AB",
  kortnamn: "Wadmans",
  undertitel: "Måleri AB",
  ort: "Örebro",
  omrade: "Örebro med omnejd",
  aktivtSedan: null,
  vd: "Henrik Daniel Wadman",
  erfarenhetAr: 25,
  instagram: "https://www.instagram.com/wadmans_maleriab/",
  instagramNamn: "@wadmans_maleriab",
  telefon: "070-496 88 87",
  telefonLank: "+46704968887",
  epost: "danielwadman@hotmail.com",
  adress: "Åsen 365, 705 95 Örebro",
  orgnr: "559530-7231",
  fskatt: true,
  kartaBbox: "15.05,59.20,15.40,59.35",
};
