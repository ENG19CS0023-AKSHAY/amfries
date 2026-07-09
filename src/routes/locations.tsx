import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.png";
import { LocationsGrid } from "@/components/LocationsGrid";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Locations — Amfries" },
      { name: "description", content: "Find your nearest Amfries store across Bangalore." },
    ],
  }),
  component: LocationsPage,
});

function LocationsPage() {
  const { t } = useI18n();
  const query = "Amfries Koramangala, 105, 1st A Cross, adjacent to Boho, KHB Colony, 5th Block, Koramangala, Bengaluru, Karnataka 560095";
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed&z=16`;

  return (
    <>
      <section className="relative flex h-[331.2px] items-center justify-center overflow-hidden bg-brand text-brand-foreground md:h-[475px]">
        <img
          src={heroImg}
          alt="Amfries counter"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-90 blur-[2.5px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />
        <div className="animate-fade-up relative z-10 mx-auto flex max-w-4xl flex-col items-center justify-center px-4 py-6 text-center sm:py-8 md:py-10">
          <h1 className="text-3xl leading-[0.95] sm:text-4xl md:text-6xl lg:text-7xl">{t("nav.locations")}</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm opacity-90 sm:mt-4 sm:text-base md:mt-6 md:text-lg">{t("locations.title")}</p>
        </div>
      </section>
      <LocationsGrid />
      <section className="bg-cream pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="overflow-hidden rounded-xl border border-border bg-cream shadow-sm">
            <iframe
              title="Amfries Koramangala location"
              src={embedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[320px] w-full md:h-[420px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
