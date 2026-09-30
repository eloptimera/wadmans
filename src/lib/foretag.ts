// Enda källan till företagsuppgifter. Allt på sajten (sidfot, kontakt, integritetspolicy,
// meta-data, strukturerad data) läser härifrån.
//
// VIKTIGT: uppgifterna nedan är platshållare för Wådmans Måleri. Byt ut dem mot verkliga
// uppgifter innan sajten publiceras (se README, avsnittet "Anpassa för en kund").
// Fält som sätts till null visas inte på sajten.
export type Foretag = {
  namn: string;
  kortnamn: string;
  undertitel: string;
  ort: string;
  omrade: string;
  /** Årtal företaget startade, eller null om det inte ska visas. */
  aktivtSedan: number | null;
  /** Verkställande direktör, eller null om det inte ska visas. */
  vd: string | null;
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
  namn: "Wådmans Måleri",
  kortnamn: "Wådmans",
  undertitel: "Måleri",
  ort: "Göteborg",
  omrade: "Göteborg med omnejd",
  aktivtSedan: null,
  vd: null,
  telefon: "000-000 00 00",
  telefonLank: "+46000000000",
  epost: "info@example.com",
  adress: "Gatuadress 1, 000 00 Göteborg",
  orgnr: "000000-0000",
  fskatt: true,
  kartaBbox: "11.80,57.62,12.15,57.80",
};
