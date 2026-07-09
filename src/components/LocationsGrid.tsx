import heroImg from "@/assets/hero.png";
import { useI18n } from "@/lib/i18n";

type Loc = {
  city: string;
  name: string;
  address: string;
  hours: string;
  maps: string;
  query: string;
};

const location: Loc = {
  city: "Koramangala",
  name: "Amfries Koramangala",
  address: "105, 1st A Cross, adjacent to Boho, KHB Colony, 5th Block, Koramangala, Bengaluru, Karnataka 560095",
  hours: "23:00",
  maps: "https://www.google.com/maps/search/?api=1&query=Amfries%20Koramangala%2C%20105%2C%201st%20A%20Cross%2C%20adjacent%20to%20Boho%2C%20KHB%20Colony%2C%205th%20Block%2C%20Koramangala%2C%20Bengaluru%2C%20Karnataka%20560095",
  query: "Amfries Koramangala, 105, 1st A Cross, adjacent to Boho, KHB Colony, 5th Block, Koramangala, Bengaluru, Karnataka 560095",
};

export function LocationsGrid() {
  const { t } = useI18n();

  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Centered Title */}
        <h2 className="text-center text-3xl md:text-5xl">{t("locations.title")}</h2>

        {/* Grid container that defaults to 1 column on mobile 
          and switches to 2 columns on desktop (md: grid-cols-2).
          Since there is only one item, it sits on the left side.
        */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:mt-10 md:grid-cols-2 lg:gap-8">
          <a
            href={location.maps}
            target="_blank"
            rel="noreferrer"
            className="group block w-full animate-fade-up overflow-hidden rounded-2xl bg-cream shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={heroImg}
                alt="Amfries hero"
                loading="lazy"
                width={1600}
                height={1000}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{location.city}</div>
              <div className="mt-1 font-display text-xl font-bold">{location.name}</div>
              <div className="mt-1 text-sm text-muted-foreground">{location.address}</div>
              <div className="mt-3 text-xs font-semibold uppercase tracking-wider text-brand">
                {t("locations.open")} {location.hours}
              </div>
              <div className="mt-3 text-sm font-semibold text-brand group-hover:underline">
                {t("locations.viewmaps")} →
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}