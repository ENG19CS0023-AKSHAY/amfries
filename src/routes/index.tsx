import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef } from "react";
import heroImg from "@/assets/hero.png";
import mascot from "@/assets/potato-mascot.png";
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
import { LocationsGrid } from "@/components/LocationsGrid";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const { t } = useI18n();
  
  const sauces = [
    { name: "Andalouse", visual: andalouse, description: "", spicy: false, signature: false },
    { name: "Samurai", visual: samurai, description: "", spicy: true, signature: false },
    { name: "Mango Chilli Aioli", visual: mango_chilli_aioli, description: "", spicy: false, signature: false },
    { name: "Pink Tartare", visual: pink_tartare, description: "", spicy: false, signature: false },
    { name: "Ketchup", visual: tomato_ketchup, description: "", spicy: false, signature: false },
    { name: "Premium Mayo", visual: premium_mayo, description: "", spicy: false, signature: false },
    { name: "Truffle Aioli", visual: truffle_aioli, description: "", spicy: false, signature: true },
    { name: "Peanut Satay", visual: peanut_satay_sauce, description: "", spicy: false, signature: false },
    { name: "Sriracha", visual: sriracha_hot_chilli_sauce, description: "", spicy: false, signature: false },
    { name: "Chilli Garlic Mayo", visual: chilli_garlic_mayo, description: "", spicy: true, signature: false },
    { name: "Ghost Sweet Chilli", visual: ghost_sweet_chilli, description: "", spicy: true, signature: false },
    { name: "Cajun Mayo", visual: cajun_mayo, description: "", spicy: false, signature: false },
    { name: "Hot & Sweet Ketchup", visual: hot_sweet_ketchup, description: "", spicy: true, signature: false },
    { name: "Vegan Sriracha Mayo", visual: sriracha_mayo, description: "", spicy: false, signature: true },
  ];

  // Duplicate the array to create a seamless infinite circular scroll effect
  const doubleSauces = [...sauces, ...sauces];

  return (
    <>
      {/* Injecting CSS keyframes directly into the file for smooth marquee control */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Hero */}
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
          <h1 className="text-3xl leading-[0.95] sm:text-4xl md:text-6xl lg:text-7xl">
            {t("hero.title")}
          </h1>
          <div className="mt-5 flex flex-wrap justify-center gap-3 sm:mt-6 md:mt-8">
            <Link to="/locations" className="btn-outline">{t("hero.cta1")}</Link>
            <Link to="/menu" className="btn-outline">{t("hero.cta2")}</Link>
          </div>
        </div>
      </section>

      <LocationsGrid />

      {/* Sauce Carousel Section */}
      <section className="overflow-hidden bg-brand py-16 text-brand-foreground md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl">Choose from 10+ sauces</h2>
            <p className="mx-auto mt-4 max-w-2xl opacity-80">
              Pick a flavour that fits your mood, from mellow classics to fiery favourites.
            </p>
          </div>
        </div>

        {/* Outer track wrapper */}
        <div className="relative w-full overflow-hidden py-4">
          {/* Infinite Moving Loop (Pauses on Hover for accessibility) */}
          <div className="animate-marquee gap-6 px-4">
            {doubleSauces.map((sauce, idx) => (
              <div
                key={`${sauce.name}-${idx}`}
                className="w-[240px] flex-shrink-0 rounded-[2rem] border border-brand-foreground/10 bg-black/10 p-6 text-center backdrop-blur-xs md:w-[280px]"
              >
                {/* Visual Image / Emoji Wrapper */}
                <div className="mx-auto flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-brand-foreground/5 text-6xl shadow-inner md:h-40 md:w-40 md:text-7xl">
                  {typeof sauce.visual === "string" && sauce.visual.length <= 4 ? (
                    <span>{sauce.visual}</span>
                  ) : (
                    <img 
                      src={sauce.visual} 
                      alt={sauce.name} 
                      className="h-full w-full object-contain p-2"
                    />
                  )}
                </div>

                {/* Sauce Info */}
                <div className="mt-6">
                  <h3 className="text-xl font-bold md:text-2xl">{sauce.name}</h3>
                  <p className="mt-2 min-h-[1.5rem] text-sm opacity-80 line-clamp-2">
                    {sauce.description}
                  </p>
                </div>

                {/* Badges */}
                <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                  {sauce.spicy && (
                    <span className="rounded-full bg-brand-foreground/10 px-2.5 py-0.5 text-xs font-semibold">
                      🌶️ Spicy
                    </span>
                  )}
                  {sauce.signature && (
                    <span className="rounded-full bg-accent-yellow px-2.5 py-0.5 text-xs font-semibold text-brand-deep">
                      👨‍🍳 Signature
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="relative overflow-hidden bg-cream py-16 text-foreground md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:items-center md:px-8">
          <div className="animate-fade-up">
            <h2 className="text-3xl md:text-5xl">{t("story.title")}</h2>
            <p className="mt-6 text-lg text-muted-foreground">{t("story.body")}</p>
            <div className="mt-8">
              <Link to="/story" className="btn-outline border-foreground text-foreground hover:bg-foreground hover:text-white">
                {t("story.cta")}
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <img src={mascot} alt="Amfries mascot" width={512} height={512}
              className="animate-float h-64 w-64 md:h-80 md:w-80" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Franchise CTA */}
      <section className="bg-accent-yellow py-16 text-brand-deep md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <h2 className="text-3xl md:text-5xl">{t("franchise.title")}</h2>
          <p className="mx-auto mt-4 max-w-2xl">{t("franchise.body")}</p>
          <div className="mt-8">
            <Link to="/franchise" className="btn-primary">{t("franchise.cta")}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
