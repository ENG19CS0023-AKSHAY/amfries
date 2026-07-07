import { createFileRoute } from "@tanstack/react-router";
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
  return (
    <>
      <section className="bg-brand py-16 text-brand-foreground md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <h1 className="text-4xl md:text-6xl">{t("nav.locations")}</h1>
          <p className="mt-4 opacity-90">{t("locations.title")}</p>
        </div>
      </section>
      <LocationsGrid />
    </>
  );
}
