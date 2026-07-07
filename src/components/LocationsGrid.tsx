import { useState } from "react";
import { useI18n } from "@/lib/i18n";

type Loc = { city: string; name: string; address: string; hours: string; maps: string };

const locations: Loc[] = [
  { city: "Koramangala", name: "80 Feet Road", address: "4th Block, Koramangala, Bangalore", hours: "23:00", maps: "https://maps.google.com" },
  { city: "Koramangala", name: "5th Block", address: "Jyoti Nivas College Rd, Bangalore", hours: "22:30", maps: "https://maps.google.com" },
  { city: "Indiranagar", name: "100 Feet Road", address: "12th Main, Indiranagar, Bangalore", hours: "23:00", maps: "https://maps.google.com" },
  { city: "HSR Layout", name: "Sector 1", address: "27th Main, HSR Layout, Bangalore", hours: "22:30", maps: "https://maps.google.com" },
  { city: "Whitefield", name: "Phoenix Marketcity", address: "Whitefield Main Rd, Bangalore", hours: "22:00", maps: "https://maps.google.com" },
  { city: "MG Road", name: "Church Street", address: "Church Street, Bangalore", hours: "23:59", maps: "https://maps.google.com" },
];

const cities = ["All", "Koramangala", "Indiranagar", "HSR Layout", "Whitefield", "MG Road"];

export function LocationsGrid() {
  const { t } = useI18n();
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? locations : locations.filter((l) => l.city === filter);

  const countBy = (c: string) => (c === "All" ? locations.length : locations.filter((l) => l.city === c).length);

  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="text-center text-3xl md:text-5xl">{t("locations.title")}</h2>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {cities.map((c) => {
            const active = filter === c;
            return (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`group relative flex aspect-square flex-col items-center justify-center rounded-xl border-2 p-4 transition ${
                  active ? "border-brand bg-brand text-brand-foreground" : "border-transparent bg-white text-foreground hover:border-brand/40"
                }`}
              >
                <span className={`absolute right-2 top-2 grid h-6 w-6 place-items-center rounded-full text-xs font-bold ${active ? "bg-white text-brand" : "bg-brand text-white"}`}>
                  {countBy(c)}
                </span>
                <div className={`mb-2 grid h-12 w-12 place-items-center rounded-full ${active ? "bg-white/10" : "bg-brand/5"}`}>
                  <svg viewBox="0 0 24 24" className={`h-8 w-8 ${active ? "stroke-white" : "stroke-brand"}`} fill="none" strokeWidth="1.5">
                    <circle cx="12" cy="8" r="3" />
                    <path d="M6 22c0-4 3-6 6-6s6 2 6 6" />
                  </svg>
                </div>
                <span className="text-center font-display text-sm font-bold uppercase">{c === "All" ? t("locations.all") : c}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((l) => (
            <a
              key={l.name}
              href={l.maps}
              target="_blank"
              rel="noreferrer"
              className="group animate-fade-up overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[16/10] overflow-hidden bg-brand/10">
                <div className="flex h-full items-center justify-center bg-gradient-to-br from-brand to-brand-deep">
                  <span className="font-display text-4xl font-extrabold text-white/90">{l.city}</span>
                </div>
              </div>
              <div className="p-5">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{l.city}</div>
                <div className="mt-1 font-display text-xl font-bold">{l.name}</div>
                <div className="mt-1 text-sm text-muted-foreground">{l.address}</div>
                <div className="mt-3 text-xs font-semibold uppercase tracking-wider text-brand">
                  {t("locations.open")} {l.hours}
                </div>
                <div className="mt-3 text-sm font-semibold text-brand group-hover:underline">
                  {t("locations.viewmaps")} →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
