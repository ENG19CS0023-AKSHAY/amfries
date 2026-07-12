import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero.png";
import { useI18n } from "@/lib/i18n";

// Fries imports
import regularSize from "@/assets/(23) Regular.jpg";
import mediumSize from "@/assets/(24) Medium.jpg";
import largeSize from "@/assets/(25) groot.jpg";

// Frites Specials imports
import dutchOriginal from "@/assets/(27) Dutch Originals.jpg";
import ghostBuster from "@/assets/(28) Ghost Busters.jpg";
import dutchWar from "@/assets/(29) Dutch War Fries.jpg";
import mangoChills from "@/assets/(30) Mango Chilli Tartare.jpg";
import truffle from "@/assets/(31)Truffle Luxe.jpg";
import oldAmsterdam from "@/assets/(32) Old Amsterdam Cheese Fries.jpg";

// Sauce imports
import andalouse from "@/assets/(01) Andalouse.jpg";
import samurai from "@/assets/(02) Samurai.jpg";
import mango_chilli_aioli from "@/assets/(04) Mango Chilli Aioli.jpg";
import pink_tartare from "@/assets/(05)Pink Tartare.jpg";
import tomato_ketchup from "@/assets/(06) Tomato Ketchup.jpg";
import premium_mayo from "@/assets/(07) Premium Mayonnaise.jpg";
import truffle_aioli from "@/assets/(12) Truffle Aioli.jpg";
import peanut_satay_sauce from "@/assets/(08) Peanut Satay Sauce.jpg";
import sriracha_hot_chilli_sauce from "@/assets/(09) Sriracha Hot Chilli Sauce.jpg";
import chilli_garlic_mayo from "@/assets/(10) Chilli Garlic Mayo.jpg";
import ghost_sweet_chilli from "@/assets/(11) Ghost Sweet Chilli.jpg";
import cajun_mayo from "@/assets/(03) Cajun Mayo.jpg";
import hot_sweet_ketchup from "@/assets/(13) Hot & Sweet Ketchup.jpg";
import sriracha_mayo from "@/assets/(14) Sriracha Mayo.jpg";

// Drinks imports
import deit_coke from "@/assets/(21) Diet coke.jpg";
import coca_zero from "@/assets/(22) Coca zero.jpg";
import coke_classic from "@/assets/(23) Coke classic.jpg";

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
  const [activeCategory, setActiveCategory] = useState("All Products");

  const menuItems = [
    { category: "Fries", img: regularSize, title: "Regular Fries", desc: "", price: "" },
    { category: "Fries", img: mediumSize, title: "Medium Fries", desc: "", price: "" },
    { category: "Fries", img: largeSize, title: "Groot Fries", desc: "", price: "" },
    { category: "Frites Specials", img: dutchOriginal, title: "Dutch Originals", desc: "", price: "" },
    { category: "Frites Specials", img: dutchWar, title: "Dutch War Fries", desc: "", price: "" },
    { category: "Frites Specials", img: ghostBuster, title: "Ghost Busters", desc: "", price: "" },
    { category: "Frites Specials", img: mangoChills, title: "Mango Chilli Tartare", desc: "", price: "" },
    { category: "Frites Specials", img: truffle, title: "Truffle Luxe", desc: "", price: "" },
    { category: "Frites Specials", img: oldAmsterdam, title: "Old Amsterdam Cheese Fries", desc: "", price: "" },
    { category: "Sauces", img: andalouse, title: "Andalouse", desc: "", price: "" },
    { category: "Sauces", img: samurai, title: "Samurai", desc: "", price: "" },
    { category: "Sauces", img: mango_chilli_aioli, title: "Mango Chilli Aioli", desc: "", price: "" },
    { category: "Sauces", img: pink_tartare, title: "Pink Tartare", desc: "", price: "" },
    { category: "Sauces", img: tomato_ketchup, title: "Ketchup", desc: "", price: "" },
    { category: "Sauces", img: premium_mayo, title: "Premium Mayo", desc: "", price: "" },
    { category: "Sauces", img: truffle_aioli, title: "Truffle Aioli", desc: "", price: "" },
    { category: "Sauces", img: peanut_satay_sauce, title: "Peanut Satay", desc: "", price: "" },
    { category: "Sauces", img: sriracha_hot_chilli_sauce, title: "Sriracha", desc: "", price: "" },
    { category: "Sauces", img: chilli_garlic_mayo, title: "Chilli Garlic Mayo", desc: "", price: "" },
    { category: "Sauces", img: ghost_sweet_chilli, title: "Ghost Sweet Chilli", desc: "", price: "" },
    { category: "Sauces", img: cajun_mayo, title: "Cajun Mayo", desc: "", price: "" },
    { category: "Sauces", img: hot_sweet_ketchup, title: "Hot & Sweet Ketchup", desc: "", price: "" },
    { category: "Sauces", img: sriracha_mayo, title: "Vegan Sriracha Mayo", desc: "", price: "" },
    { category: "Drinks", img: coke_classic, title: "Coca-Cola", desc: "", price: "" },
    { category: "Drinks", img: deit_coke, title: "Diet Coke", desc: "", price: "" },
    { category: "Drinks", img: coca_zero, title: "Coca-Cola Zero", desc: "", price: "" },
  ];

  const categories = ["All Products", "Fries", "Frites Specials", "Sauces", "Drinks"];
  const groupedItems = categories.slice(1).map(cat => ({
    category: cat,
    items: menuItems.filter(item => item.category === cat)
  }));

  return (
    <>
      <section className="relative flex h-[331.2px] items-center justify-center overflow-hidden bg-brand text-brand-foreground md:h-[475px]">
        <img src={heroImg} alt="Amfries counter" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover opacity-90 blur-[2.5px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/25" />
        <div className="animate-fade-up relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl">{t("menu.title")}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">{t("menu.subtitle")}</p>
        </div>
      </section>

      <section className="py-8 bg-cream border-b">
        <div className="mx-auto max-w-7xl px-4 flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-bold transition ${activeCategory === cat ? "bg-brand text-white" : "bg-white hover:bg-brand/10"}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4">
          {activeCategory === "All Products" ? (
            groupedItems.map((group) => (
              <div key={group.category} className="mb-16 last:mb-0">
                <h2 className="text-2xl font-bold text-brand mb-6 uppercase tracking-wider">{group.category}</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((it, i) => <MenuCard key={i} item={it} />)}
                </div>
              </div>
            ))
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {menuItems.filter(item => item.category === activeCategory).map((it, i) => <MenuCard key={i} item={it} />)}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function MenuCard({ item }: { item: any }) {
  return (
    <article className="animate-fade-up overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={item.img} alt={item.title} className="h-full w-full object-cover" />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold">{item.title}</h3>
          {item.price && <span className="shrink-0 rounded-full bg-brand/10 px-3 py-1 text-sm font-bold text-brand">{item.price}</span>}
        </div>
        {item.desc && <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>}
      </div>
    </article>
  );
}
