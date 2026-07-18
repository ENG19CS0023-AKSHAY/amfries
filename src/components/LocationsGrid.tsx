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
    <section className="bg-background py-20 md:py-32 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {t("locations.title")}
          </h2>
          <div className="mt-4 h-1 w-20 bg-brand"></div>
        </div>

        <div className="relative isolate flex flex-col md:flex-row w-full rounded-[2rem] bg-card p-4 sm:p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border transition-all duration-300 hover:shadow-[0_20px_40px_rgba(246,61,22,0.1)] hover:border-brand/30 group">
          {/* Visual Side */}
          <div className="relative w-full md:w-[55%] overflow-hidden rounded-2xl aspect-[4/3] md:aspect-auto md:min-h-[400px]">
            <img
              src={heroImg}
              alt="Amfries hero"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent"></div>
            <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md px-4 py-2 text-white font-medium shadow-sm border border-white/30">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand"></span>
              </span>
              Now Open
            </div>
          </div>

          {/* Content Side */}
          <div className="flex flex-col justify-center w-full md:w-[45%] p-6 sm:p-8 md:pl-12">
            <div className="text-xs font-bold uppercase tracking-widest text-brand mb-3">{location.city}</div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">{location.name}</h3>
            
            <div className="flex items-start gap-4 mb-6">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{location.address}</p>
            </div>

            <div className="flex items-center gap-4 mb-10">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t("locations.open")}</div>
                <div className="text-sm sm:text-base font-medium text-foreground">{location.hours}</div>
              </div>
            </div>

            <a
              href={location.maps}
              target="_blank"
              rel="noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              {t("locations.viewmaps")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}