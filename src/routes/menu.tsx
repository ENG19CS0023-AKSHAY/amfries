import { createFileRoute } from "@tanstack/react-router";
import friesCone from "@/assets/fries-cone.jpg";
import loadedFries from "@/assets/loaded-fries.jpg";
import chicken from "@/assets/chicken.jpg";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Assortment — Amfries" },
      { name: "description", content: "Discover our menu: classic Belgian fries, loaded fries, crispy chicken and sauces." },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const { t } = useI18n();
  const items = [
    { img: friesCone, title: t("menu.classic"), desc: t("menu.classic.desc"), price: "₹149" },
    { img: loadedFries, title: t("menu.loaded"), desc: t("menu.loaded.desc"), price: "₹249" },
    { img: chicken, title: t("menu.chicken"), desc: t("menu.chicken.desc"), price: "₹299" },
    { img: friesCone, title: "Peri Peri Fries", desc: "Spicy peri-peri seasoning on our signature fries.", price: "₹179" },
    { img: loadedFries, title: "Cheesy Bacon Fries", desc: "Molten cheese, crispy bacon bits, chives.", price: "₹279" },
    { img: chicken, title: "Chicken Popcorn", desc: "Bite-sized, ultra crispy with garlic aioli.", price: "₹229" },
  ];
  return (
    <>
      <section className="bg-brand py-16 text-brand-foreground md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <h1 className="text-4xl md:text-6xl">{t("menu.title")}</h1>
          <p className="mt-4 opacity-90">{t("menu.subtitle")}</p>
        </div>
      </section>
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 md:px-8 lg:grid-cols-3">
          {items.map((it, i) => (
            <article key={i} className="animate-fade-up overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={it.img} alt={it.title} loading="lazy" width={1024} height={768} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl">{it.title}</h3>
                  <span className="shrink-0 rounded-full bg-brand px-3 py-1 text-sm font-bold text-brand-foreground">{it.price}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
