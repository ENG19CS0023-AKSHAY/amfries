import { createFileRoute } from "@tanstack/react-router";
import storefront from "@/assets/storefront.jpg";
import mascot from "@/assets/potato-mascot.png";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "Our story — Amfries" },
      { name: "description", content: "How Amfries brought authentic Belgian fries from Brussels streets to Bangalore." },
    ],
  }),
  component: StoryPage,
});

function StoryPage() {
  const { t } = useI18n();
  return (
    <>
      <section className="bg-brand py-16 text-brand-foreground md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <h1 className="text-4xl md:text-6xl">{t("story.title")}</h1>
        </div>
      </section>
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:items-center md:px-8">
          <img src={storefront} alt="Amfries storefront" width={1280} height={800} loading="lazy" className="animate-fade-up rounded-2xl object-cover shadow-lg" />
          <div className="animate-fade-up space-y-4 text-lg text-muted-foreground">
            <p>{t("story.body")}</p>
            <p>
              Every fry begins as a whole potato — sorted by hand, cut fresh each morning, blanched
              slowly and finished at a higher heat until the outside cracks and the inside stays
              pillow-soft.
            </p>
            <p>
              We don't cut corners. We cut potatoes. And we do it the same way, every day, in every
              Amfries shop.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3 md:px-8">
          {[
            { n: "01", h: "Hand-cut daily", p: "Fresh potatoes, sliced in-store every morning." },
            { n: "02", h: "Double-fried", p: "Blanched low, finished hot — Belgian technique." },
            { n: "03", h: "House sauces", p: "Twelve sauces made in-house, from mayo to peri." },
          ].map((s) => (
            <div key={s.n} className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="font-display text-5xl font-extrabold text-brand/20">{s.n}</div>
              <h3 className="mt-3 text-2xl">{s.h}</h3>
              <p className="mt-2 text-muted-foreground">{s.p}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-brand py-16 text-brand-foreground">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-4 text-center">
          <img src={mascot} alt="" width={512} height={512} className="animate-float h-40 w-40" loading="lazy" />
          <p className="mt-4 font-display text-2xl uppercase tracking-widest">Fresh in every bite</p>
        </div>
      </section>
    </>
  );
}
