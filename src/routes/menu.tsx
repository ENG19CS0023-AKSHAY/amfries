import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero.webp";
import { useI18n } from "@/lib/i18n";

// Fries imports
import regularSize from "@/assets/(23) Regular.webp";
import mediumSize from "@/assets/(24) Medium.webp";
import largeSize from "@/assets/(25) groot.webp";

// Frites Specials imports
import dutchOriginal from "@/assets/(27) Dutch Originals.webp";
import ghostBuster from "@/assets/(28) Ghost Busters.webp";
import dutchWar from "@/assets/(29) Dutch War Fries.webp";
import mangoChills from "@/assets/(30) Mango Chilli Tartare.webp";
import truffle from "@/assets/(31)Truffle Luxe.webp";
import oldAmsterdam from "@/assets/(32) Old Amsterdam Cheese Fries.webp";

// Sauce imports
import andalouse from "@/assets/(01Andalouse.webp";
import samurai from "@/assets/(02) Samurai.webp";
import mango_chilli_aioli from "@/assets/(04) Mango Chilli Aioli.webp";
import pink_tartare from "@/assets/(05)Pink Tartare.webp";
import tomato_ketchup from "@/assets/(06) Tomato Ketchup.webp";
import premium_mayo from "@/assets/(07) Premium Mayonnaise.webp";
import truffle_aioli from "@/assets/(12) Truffle Aioli.webp";
import peanut_satay_sauce from "@/assets/(08) Peanut Satay Sauce.webp";
import sriracha_hot_chilli_sauce from "@/assets/(09) Sriracha Hot Chilli Sauce.webp";
import chilli_garlic_mayo from "@/assets/(10) Chilli Garlic Mayo.webp";
import ghost_sweet_chilli from "@/assets/(11) Ghost Sweet Chilli.webp";
import cajun_mayo from "@/assets/(03) Cajun Mayo.webp";
import hot_sweet_ketchup from "@/assets/(13) Hot & Sweet Ketchup.webp";
import sriracha_mayo from "@/assets/(14) Sriracha Mayo.webp";

// Drinks imports
import deit_coke from "@/assets/(21) Diet coke.webp";
import coca_zero from "@/assets/(22) Coca zero.webp";
import coke_classic from "@/assets/(23) Coke classic.webp";

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
    { category: "Fries", img: regularSize, title: "Regular", desc: "", price: "" },
    { category: "Fries", img: mediumSize, title: "Medium", desc: "", price: "" },
    { category: "Fries", img: largeSize, title: "Groot", desc: "", price: "" },
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
        <div className="mx-auto max-w-7xl px-4 flex flex-wrap justify-center gap-2 sm:gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-bold text-sm sm:text-base transition ${activeCategory === cat ? "bg-brand text-white" : "bg-white hover:bg-brand/10"}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="bg-cream py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4">
          {activeCategory === "All Products" ? (
            groupedItems.map((group) => (
              <div key={group.category} className="mb-12 sm:mb-16 last:mb-0">
                <h2 className="text-2xl font-bold text-brand mb-6 uppercase tracking-wider">{group.category}</h2>
                {/* Single column on mobile (grid-cols-1), responsive layout up to desktop */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {group.items.map((it, i) => <MenuCard key={i} item={it} />)}
                </div>
              </div>
            ))
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
    <article className="group relative animate-fade-up overflow-hidden rounded-2xl bg-card border border-border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(246,61,22,0.15)] hover:border-brand/30">
      {/* 
        Key Fix: Using aspect-square on mobile with generous p-6 padding ensures 
        circular tubs never hit the top/bottom/left/right container bounds.
      */}
      <div className="relative aspect-square sm:aspect-[4/3] w-full overflow-hidden bg-white p-6 sm:p-4 flex items-center justify-center">
        <img 
          src={item.img} 
          alt={item.title} 
          className="h-full w-full object-contain object-center transition-transform duration-500 group-hover:scale-105" 
        />
      </div>
      <div className="p-5 flex flex-col items-center text-center">
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-lg font-bold leading-tight text-foreground">{item.title}</h3>
          {item.price && <span className="inline-block w-fit rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand">{item.price}</span>}
        </div>
        {item.desc && <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{item.desc}</p>}
      </div>
    </article>
  );
}