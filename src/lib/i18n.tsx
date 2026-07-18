import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "nl";

type Dict = Record<string, string>;

const en: Dict = {
  "nav.home": "Homepage",
  "nav.locations": "Locations",
  "nav.menu": "Assortment",
  "nav.story": "Our story",
  "nav.franchise": "Franchise & Collaboration",
  "hero.title": "THE BEST FRIES OF BANGALORE",
  "hero.subtitle": "Freshly cut. Twice fried. The Belgian way — served hot in Koramangala.",
  "hero.cta1": "Find a location",
  "hero.cta2": "Our menu",
  "locations.title": "Where can you find Amfries?",
  "locations.all": "All Locations",
  "locations.viewmaps": "View on maps",
  "locations.open": "Open until",
  "menu.title": "OUR ASSORTMENT",
  "menu.subtitle": "Crispy on the outside, fluffy on the inside. Loaded with sauces you'll dream about.",
  "menu.classic": "Classic Fries",
  "menu.classic.desc": "Hand-cut potatoes, double-fried to golden perfection. Served with signature mayo.",
  "menu.loaded": "Loaded Fries",
  "menu.loaded.desc": "Piled high with cheese sauce, jalapeños, peri-peri and our secret drizzle.",
  "menu.chicken": "Crispy Chicken",
  "menu.chicken.desc": "Buttermilk-marinated tenders in a crunchy spiced crust with dipping sauces.",
  "story.title": "Our story",
  "story.body": "Amfries started with one obsession: bringing the real Belgian frite experience to India. We source premium potatoes, hand-cut them daily and fry them twice — the way it should be done. From Koramangala to your fingertips, fresh in every bite.",
  "story.cta": "Read more",
  "franchise.title": "FRANCHISE & COLLABORATION",
  "franchise.body": "Want to bring Amfries to your city? We're opening a limited number of franchise locations across India.",
  "franchise.cta": "Get in touch",
  "footer.rights": "All rights reserved.",
  "footer.tagline": "Fresh Belgian fries",
  "hours.today": "Open today",
};

const nl: Dict = {
  "nav.home": "Startpagina",
  "nav.locations": "Locaties",
  "nav.menu": "Assortiment",
  "nav.story": "Ons verhaal",
  "nav.franchise": "Franchise & samenwerking",
  "hero.title": "De lekkerste friet van Bangalore",
  "hero.subtitle": "Vers gesneden. Twee keer gebakken. Op zijn Belgisch — geserveerd in Koramangala.",
  "hero.cta1": "Vind een locatie",
  "hero.cta2": "Ons menu",
  "locations.title": "Waar vind je Amfries?",
  "locations.all": "Alle locaties",
  "locations.viewmaps": "Bekijk op kaart",
  "locations.open": "Open tot",
  "menu.title": "Ons assortiment",
  "menu.subtitle": "Krokant van buiten, zacht van binnen. Met sauzen om van te dromen.",
  "menu.classic": "Klassieke Friet",
  "menu.classic.desc": "Handgesneden aardappelen, dubbel gebakken tot goudbruine perfectie. Met huisgemaakte mayo.",
  "menu.loaded": "Loaded Friet",
  "menu.loaded.desc": "Bedekt met kaassaus, jalapeños, peri-peri en onze geheime drizzle.",
  "menu.chicken": "Krokante Kip",
  "menu.chicken.desc": "In karnemelk gemarineerde tenders in een krokante gekruide korst met dipsauzen.",
  "story.title": "Ons verhaal",
  "story.body": "Amfries begon met één obsessie: de echte Belgische friet naar India brengen. We halen premium aardappelen, snijden ze dagelijks met de hand en bakken ze twee keer — zoals het hoort. Van Koramangala tot je vingertoppen, in elke hap vers.",
  "story.cta": "Lees meer",
  "franchise.title": "Franchise & samenwerking",
  "franchise.body": "Wil je Amfries naar jouw stad brengen? We openen een beperkt aantal franchisevestigingen in heel India.",
  "franchise.cta": "Neem contact op",
  "footer.rights": "Alle rechten voorbehouden.",
  "footer.tagline": "Verse Belgische friet",
  "hours.today": "Vandaag geopend",
};

const dicts: Record<Lang, Dict> = { en, nl };

const I18nContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string }>({
  lang: "en",
  setLang: () => {},
  t: (k) => k,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  useEffect(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("amfries.lang") as Lang | null) : null;
    if (saved === "en" || saved === "nl") setLangState(saved);
  }, []);
  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("amfries.lang", l);
  };
  const t = (k: string) => dicts[lang][k] ?? k;
  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);
