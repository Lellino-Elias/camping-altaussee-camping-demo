import type { CampsiteConfig } from "../types";

const IMG = "/campsites/camping-altaussee";

const campingAltaussee: CampsiteConfig = {
  name: "Camping Temel",
  shortName: "Temel",
  slug: "camping-altaussee",
  ort: "Altaussee",
  region: "Steiermark",
  brandKind: "Sommerfrische & Camping",
  regionLong: "Ausseerland · Salzkammergut · Steiermark",

  heroVariant: "center",

  claim: "Sommerfrische im Herzen des Ausseerlands",
  claimEmphasis: "Sommerfrische",
  emailDetail: "die ruhige Lage zwischen Wiesen und Bergen, wenige Minuten vom Altausseer See",
  intro:
    "Eingebettet zwischen Wiesen und Feldern, ringsum die Berge des Ausseerlandes und nur wenige Gehminuten vom tiefblauen Altausseer See: Camping Temel ist dein Platz, wenn du Ruhe suchst und die Sommerfrische neu entdecken willst.",

  logo: { src: `${IMG}/logo.png`, alt: "Camping Temel Altaussee — Logo" },

  statement: {
    text: "Hier beginnt Urlaub mit dem süßen Nichtstun — der hohen Kunst, sich einfach Zeit zu nehmen.",
    emphasis: "süßen Nichtstun",
  },

  pillars: [
    {
      title: "Zwischen Wiesen und Bergen",
      text: "Das grüne Areal liegt eingebettet zwischen Wiesen und Feldern, ringsum die Berge des Ausseerlandes — der Altausseer See ist in wenigen Minuten zu Fuß erreicht.",
      image: { src: `${IMG}/pillar-wiesen-berge.webp`, alt: "Stellplätze auf der Wiese mit Holzstadl und Bergkulisse bei Camping Temel" },
    },
    {
      title: "Familie Temel",
      text: "1996 auf dem Bauernhof der Familie Temel errichtet, seit dem Frühjahr 2012 von Līga und Stefan persönlich geführt — hier kennt man seine Gäste noch.",
      image: { src: `${IMG}/pillar-familie-temel.webp`, alt: "Die Gastgeberfamilie Temel in Tracht am Platz" },
    },
    {
      title: "Ruhe hat Vorrang",
      text: "Ein Platz für ruhesuchende Naturgenießer: keine Gruppen, kein Trubel — nur Wiesen, Tiere und das Tempo der Sommerfrische.",
      image: { src: `${IMG}/pillar-tiere-weide.webp`, alt: "Weidetiere auf der Wiese vor den Bergen des Ausseerlandes" },
    },
  ],

  usps: [
    "Stellplätze mit Strom",
    "Sanitär rund um die Uhr",
    "Frisches Brot am Platz",
    "Kostenloses WLAN",
    "700 m zum Altausseer See",
  ],

  trust: {
    heading: "Ein Platz für Ruhesuchende und Naturgenießer",
    headingEmphasis: "Naturgenießer",
    intro:
      "Kein Trubel, keine Gruppen, kein Hundegebell: Camping Temel ist bewusst ein Ort der Ruhe. Dafür kurze Wege ins Dorf, frisches Brot direkt am Platz und die Berge des Ausseerlandes vor dem Vorzelt.",
  },

  awards: [],

  saison: { von: "Mai", bis: "September" },

  hero: {
    aerial: { src: `${IMG}/camping-rezeption-brot.webp`, alt: "Wohnwagen auf grüner Wiese vor der mächtigen Trisselwand im Ausseerland" },
  },

  breather: {
    image: { src: `${IMG}/breather-alpenglow.webp`, alt: "Abendrot auf den Felswänden über dem Campingplatz" },
    line: "Abendlicht auf den Felswänden — die schönste Zeit fürs süße Nichtstun.",
  },

  camping: {
    heading: "Was dich am Platz erwartet",
    intro:
      "60 großzügige, parzellierte Stellplätze für Wohnmobil, Wohnwagen und Zelt — die meisten mit 16-A-Strom. Dazu Sanitär rund um die Uhr, frisches Brot und kostenloses WLAN.",
    features: [
      {
        title: "Großzügige Stellplätze",
        text: "60 parzellierte, teils befestigte Plätze für Wohnmobil, Wohnwagen und Zelt — großzügig angelegt auf ebener Wiese mit Bergblick.",
        image: { src: `${IMG}/camping-stellplaetze-trisselwand.webp`, alt: "Wohnmobile auf der ebenen Wiese vor der mächtigen Felswand am Camping Temel" },
      },
      {
        title: "Strom & Versorgung",
        text: "Die meisten Stellplätze haben einen eigenen 16-A-Stromanschluss; Ver- und Entsorgung für Wohnmobile sowie Frischwasser gibt es direkt am Platz.",
        image: { src: `${IMG}/camping-strom-stellplatz.webp`, alt: "Wohnmobile und Zelt auf den Stellplätzen mit Anschlusssäule vor der Bergkulisse" },
      },
      {
        title: "Frisches Brot am Platz",
        text: "Frisches Brot und Gebäck, täglich von der traditionsreichen Bäckerei Maislinger geliefert — an der Rezeption gibt es Tipps fürs Ausseerland.",
        image: { src: `${IMG}/hero-campsite-trisselwand.webp`, alt: "Holzhütte der Rezeption mit bunten Blumen am Eingang von Camping Temel" },
      },
      {
        title: "Waschen & Frischwasser",
        text: "Waschmaschine gegen Gebühr, Frischwasser und eine Entsorgung für Chemietoiletten — alles unkompliziert und direkt am Platz.",
        image: { src: `${IMG}/camping-waschmaschine.webp`, alt: "Waschmaschine und Spülbecken im Waschbereich am Camping Temel" },
      },
      {
        title: "Zeltwiese",
        text: "Eine eigene Wiese fürs Zelt — eben, grün und mit den Wäldern und Bergen des Ausseerlandes als Kulisse.",
        image: { src: `${IMG}/camping-zeltwiese.webp`, alt: "Zelt und Wohnmobile auf der Wiese von Camping Temel vor dem Gipfel" },
      },
      {
        title: "Mitten im Grünen",
        text: "Kein Durchgangsverkehr, viel Wiese, ringsum Wald und Berge — ein Platz zum Durchatmen und Ankommen.",
        image: { src: `${IMG}/camping-gruen.webp`, alt: "Blick über die Wiese auf den Campingplatz mit Bauernhäusern" },
      },
    ],
  },

  story: {
    kicker: "Seit 1996",
    heading: "Die Geschichte der Sommerfrische",
    intro: "Vom Bauernhof der Familie Temel zu einem Ort, an dem eine alte Tradition weiterlebt.",
    chapters: [
      {
        no: "01",
        kicker: "1996",
        title: "Ein Bauernhof wird Campingplatz",
        text: "Auf dem Hof der Familie Temel senior entstand 1996 der Campingplatz — mitten in den Wiesen und Feldern des Ausseerlandes.",
        image: { src: `${IMG}/story-luftbild.webp`, alt: "Luftbild von Camping Temel zwischen Wiesen und Wald" },
      },
      {
        no: "02",
        kicker: "Sommerfrische",
        title: "Eine alte Tradition, neu entdeckt",
        text: "Schon im 19. Jahrhundert kamen Gäste zur „Sommerfrische“ ins Ausseerland — zum langsamen Reisen, Wandern und süßen Nichtstun. Diese Tradition lebt hier weiter.",
        image: { src: `${IMG}/story-sommerfrische.webp`, alt: "Gast mit Fahrrad am Eingang von Camping Temel — grüne Wiesen und Berge des Ausseerlandes" },
      },
      {
        no: "03",
        kicker: "Seit 2012",
        title: "Līga und Stefan führen weiter",
        text: "Seit dem Frühjahr 2012 führen Līga und Stefan den Platz, seit 2018 auf einem neuen, ruhigen Weg: Erholung statt Trubel, Zeit statt Hektik.",
        image: { src: `${IMG}/story-liga-stefan.webp`, alt: "Alltag am Platz: Wohnmobile und Fahrräder vor der Bergkulisse" },
      },
    ],
  },

  anreise: {
    heading: "Anreise ins Ausseerland",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die B145 Richtung Altaussee und dann der Beschilderung zu Camping Temel folgen. An- und Abreise täglich 8:30–20:00 Uhr, Mittagspause 12:00–15:00 Uhr.",
      },
      {
        title: "Mit der Bahn",
        text: "Bahnhof Bad Aussee, rund 3 km entfernt — von dort weiter mit Bus oder Taxi nach Altaussee.",
      },
    ],
  },

  galerie: {
    heading: "Eindrücke vom Ausseerland",
    headingEmphasis: "Ausseerland",
    intro: "Wolken über den Gipfeln, ein Almhüttchen auf der Wiese, Abendlicht am Stellplatz — ein paar Bilder vom Platz und seiner Umgebung.",
    tag: "Mai bis September",
    moreCount: 20,
    images: [
      { src: `${IMG}/galerie-wolken.webp`, alt: "Wolken ziehen über die Berge hinter dem Campingplatz" },
      { src: `${IMG}/galerie-almhuette.webp`, alt: "Bergspitze mit Nebel über dem Ausseerland" },
      { src: `${IMG}/galerie-glaskunst.webp`, alt: "Kunstvolle Glas-Stele im Abendlicht am Platz" },
      { src: `${IMG}/galerie-abendlicht.webp`, alt: "Abendlicht auf der Trisselwand — Wohnmobile am Stellplatz in der Abendsonne" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz für den Sommer",
    headingEmphasis: "deinen Platz",
    intro:
      "Wähle Zeitraum und Platzart — Līga meldet sich persönlich mit deiner Verfügbarkeit. In der Hauptsaison (Juli/August) ab vier Nächten.",
    pricesArePlaceholder: false,
    priceNote:
      "Richtpreise pro Nacht für 2 Erwachsene inkl. Platz- (€ 5) und Müllgebühr (€ 1) — zzgl. Strom € 4 und Ortstaxe € 3 je Erwachsenem/Nacht; Kinder 3–15 J. € 5. Saison 2026, Zahlung bar vor Ort.",
    highlight: {
      title: "Keine Anzahlung",
      text: "Reservieren ohne Anzahlung — bezahlt wird bar bei der Abreise.",
    },
    categories: [
      { id: "zelt", label: "Zeltplatz", perNight: 30, perExtraGuest: 10.5 },
      { id: "wohnwagen", label: "Wohnwagen", perNight: 32, perExtraGuest: 10.5 },
      { id: "wohnmobil", label: "Wohnmobil", perNight: 35, perExtraGuest: 10.5 },
    ],
  },

  kontakt: {
    tel: "+43 3622 71968",
    telHref: "tel:+43362271968",
    mail: "liga.temel@gmx.at",
    adresse: "Puchen 137 · 8992 Altaussee · Österreich",
    coords: { lat: 47.6286088, lng: 13.7737789 },
  },

  languages: ["DE", "EN"],

  nav: [
    { label: "Camping", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Ausstattung", href: "#camping" },
    ]},
    { label: "Geschichte", href: "#story" },
    { label: "Galerie", href: "#galerie" },
    { label: "Anfragen", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default campingAltaussee;
