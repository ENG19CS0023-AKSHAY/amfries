import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.png";
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
          <h1 className="text-3xl leading-[0.95] sm:text-4xl md:text-6xl lg:text-7xl">{t("menu.title")}</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm opacity-90 sm:mt-4 sm:text-base md:mt-6 md:text-lg">{t("menu.subtitle")}</p>
        </div>
      </section>
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 md:px-8 lg:grid-cols-3">
          {items.map((it, i) => (
            <article key={i} className="animate-fade-up overflow-hidden rounded-2xl bg-cream shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
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
