import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero.webp";
import andalouse from "@/assets/14-Andalouse.webp";
import samurai from "@/assets/13-Samurai.webp";
import mango_chilli_aioli from "@/assets/12-Mango Chilli Aioli.webp";
import pink_tartare from "@/assets/11-Pink Tartar.webp";
import tomato_ketchup from "@/assets/10-Ketchup.webp";
import premium_mayo from "@/assets/9-Premium Mayo.webp";
import truffle_aioli from "@/assets/2-Truffle Aioli.webp";
import peanut_satay_sauce from "@/assets/8-Peanut Satay.webp";
import sriracha_hot_chilli_sauce from "@/assets/7-Sriracha.webp";
import chilli_garlic_mayo from "@/assets/6-Chilli Garlic Mayo.webp";
import ghost_sweet_chilli from "@/assets/5-Ghost Sweet Chilli.webp";
import cajun_mayo from "@/assets/4-Frietsaus.webp";
import hot_sweet_ketchup from "@/assets/3-Hot&Sweet Ketchup.webp";
import sriracha_mayo from "@/assets/1-Vegan Sriracha Mayo.webp";

// Fry Size Asset Imports
import regularSize from "@/assets/(23) Regular.webp";
import mediumSize from "@/assets/(24) Medium.webp";
import largeSize from "@/assets/(25) groot.webp";

// Left Grid Layout Custom Assets
import amfriesReview1 from "@/assets/amfries2.jpg";
import amfriesReview2 from "@/assets/amfries3.png";
import amfriesReview3 from "@/assets/amfries4.jpg";
import amfriesReview4 from "@/assets/amfries5.jpg";
import amfriesReview5 from "@/assets/amfries6.jpg";
import amfriesReview7 from "@/assets/amfries8.jpg";
import amfriesReview8 from "@/assets/amfries9.jpg";
import amfriesReview9 from "@/assets/amfries10.jpg";
import amfriesReview10 from "@/assets/amfries11.jpg";
import amfriesReview11 from "@/assets/amfries12.jpg";
import amfriesReview12 from "@/assets/amfries13.jpg";
import amfriesReview13 from "@/assets/amfries14.jpg";
import amfriesReview14 from "@/assets/amfries15.jpg";
import amfriesReview15 from "@/assets/amfries16.jpg";
import amfriesReview17 from "@/assets/amfries18.jpg";
import { LocationsGrid } from "@/components/LocationsGrid";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({ component: Home });

type SizeKey = "small" | "medium" | "large";

interface SizeConfig {
  name: string;
  label: string;
  imgAsset: string;
  transformScale: string;
}

function Home() {
  const { t } = useI18n();
  const [sizeTier, setSizeTier] = useState<SizeKey>("medium");
  const [sliderVal, setSliderVal] = useState<number>(50);

  const sauces = [
    { name: "Andalouse", visual: andalouse, tag: undefined as "spicy" | "signature" | undefined },
    { name: "Samurai", visual: samurai, tag: undefined },
    { name: "Mango Chilli Aioli", visual: mango_chilli_aioli, tag: undefined },
    { name: "Pink Tartare", visual: pink_tartare, tag: undefined },
    { name: "Ketchup", visual: tomato_ketchup, tag: undefined },
    { name: "Premium Mayo", visual: premium_mayo, tag: undefined },
    { name: "Truffle Aioli", visual: truffle_aioli, tag: undefined },
    { name: "Peanut Satay", visual: peanut_satay_sauce, tag: undefined },
    { name: "Sriracha", visual: sriracha_hot_chilli_sauce, tag: undefined },
    { name: "Chilli Garlic Mayo", visual: chilli_garlic_mayo, tag: undefined },
    { name: "Ghost Sweet Chilli", visual: ghost_sweet_chilli, tag: undefined },
    { name: "Cajun Mayo", visual: cajun_mayo, tag: undefined },
    { name: "Hot & Sweet Ketchup", visual: hot_sweet_ketchup, tag: undefined },
    { name: "Vegan Sriracha Mayo", visual: sriracha_mayo, tag: undefined },
  ];

  const sizingMap: Record<SizeKey, SizeConfig> = {
    small: {
      name: "Regular",
      label: "Regular",
      imgAsset: regularSize,
      transformScale: "scale-[0.75]"
    },
    medium: {
      name: "Medium",
      label: "Medium",
      imgAsset: mediumSize,
      transformScale: "scale-[1.125]"
    },
    large: {
      name: "Groot",
      label: "Groot / Large",
      imgAsset: largeSize,
      transformScale: "scale-[1.50]"
    },
  };

  const leftGridImages = [
    amfriesReview1,
    amfriesReview2,
    amfriesReview3,
    amfriesReview4,
    amfriesReview5,
    amfriesReview7,
    amfriesReview8,
    amfriesReview9,
    amfriesReview10,
    amfriesReview11,
    amfriesReview12,
    amfriesReview13,
    amfriesReview14,
    amfriesReview15,
    amfriesReview17,
  ];

  // 16 images total (allows for perfect 4x4 grid on tablet/desktop)
  const collageImages = [
    ...leftGridImages,
    amfriesReview1,
  ];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    setSliderVal(val);

    if (val < 35) setSizeTier("small");
    else if (val < 68) setSizeTier("medium");
    else setSizeTier("large");
  };

  return (
    <>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        
        .slider-box input[type="range"] {
          -webkit-appearance: none;
          appearance: none;
          width: 8px;
          height: 340px;
          background: linear-gradient(to top, #f63d16 var(--slider-fill), #e2e8f0 var(--slider-fill));
          border-radius: 99px;
          outline: none;
          writing-mode: vertical-lr;
          direction: rtl;
          cursor: pointer;
        }

        /* FIX FOR IOS SAFARI: Add -webkit-appearance: none AND background: transparent explicitly */
        .slider-box input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none !important;
          appearance: none !important;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: transparent;
          border: none;
          cursor: grab;
        }

        .slider-box input[type="range"]::-webkit-slider-thumb:active {
          cursor: grabbing;
        }

        .slider-box input[type="range"]::-moz-range-thumb {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: transparent;
          border: none;
          cursor: grab;
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
          <h1 className="text-3xl leading-[0.95] sm:text-4xl md:text-6xl lg:text-7xl normal-case">
            {t("hero.title")}
          </h1>
          <div className="mt-5 flex flex-wrap justify-center gap-3 sm:mt-6 md:mt-8">
            <a
              href="https://www.instagram.com/amfries.in/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center text-sm font-bold tracking-wide text-slate-700 border-slate-700 hover:bg-slate-50 hover:text-slate-900"
            >
              Our Videos
            </a>
          </div>
        </div>
      </section>

      <LocationsGrid />

      {/* Sauce Carousel Section */}
      <section id="assortment" className="overflow-hidden bg-gradient-to-b from-[#f63d16] to-[#b32b0f] text-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl normal-case">
            Choose from 10+ sauces
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-orange-100/90">
            Pick a flavour that fits your mood, from mellow classics to fiery favourites.
          </p>
        </div>

        <div className="relative mt-14 flex w-full overflow-hidden">
          {/* Marquee Container */}
          <div className="animate-marquee gap-8 py-4">
            {[...sauces, ...sauces].map((sauce, i) => (
              <div
                key={`${sauce.name}-${i}`}
                /* Expanded overall width to w-60 / sm:w-72 to accommodate larger sauce images */
                className="flex w-60 shrink-0 flex-col items-center gap-3 sm:w-72 bg-transparent p-0 text-white"
              >
                {/* 
                  Visual Container - Scaled up size to w-48 sm:w-56 with zero borders or backgrounds
                */}
                <div className="relative aspect-square w-48 sm:w-56 p-0 bg-transparent flex items-center justify-center">
                  <img
                    src={sauce.visual}
                    alt={sauce.name}
                    className="h-full w-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.25)]"
                  />
                </div>

                {/* Info Text Area Directly Below */}
                <div className="text-center min-h-[4rem] flex flex-col items-center justify-start mt-2">
                  <h3 className="text-base font-bold tracking-wide line-clamp-2 px-1 text-white normal-case">
                    {sauce.name}
                  </h3>

                  {sauce.tag === 'spicy' && (
                    <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold uppercase text-yellow-300">
                      <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                        <path d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      </svg>
                      Spicy
                    </span>
                  )}

                  {sauce.tag === 'signature' && (
                    <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold uppercase text-emerald-300">
                      <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      Signature
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sizer Section */}
      <section className="bg-white text-gray-900 flex flex-col-reverse lg:flex-row items-stretch w-full overflow-hidden lg:min-h-[400px]">

        {/* Left Side - Review Collage */}
        <div className="w-full lg:w-1/2 flex content-start bg-gray-50/50">

          {/* Mobile - 3 columns, Exactly 15 images (5 rows) to avoid empty spaces */}
          <div className="grid grid-cols-3 sm:hidden w-full h-max gap-0">
            {collageImages.slice(0, 15).map((img, i) => (
              <div key={i} className="relative aspect-square overflow-hidden">
                <img
                  src={img}
                  alt={`Amfries customer review ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Tablet & Desktop - 4 columns, Exactly 16 images (4 rows) */}
          <div className="hidden sm:grid grid-cols-4 w-full h-max gap-0">
            {collageImages.slice(0, 16).map((img, i) => (
              <div key={i} className="relative aspect-square overflow-hidden">
                <img
                  src={img}
                  alt={`Amfries customer review ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

        </div>

        {/* Right Side - Size Selector */}
        <div className="w-full lg:w-1/2 flex items-center px-6 md:px-16 xl:px-24 bg-white">
          <div className="w-full max-w-xl">
            <h2 className="text-center lg:text-left text-[#000000] font-extrabold text-3xl md:text-4xl lg:text-5xl mb-12 tracking-tight normal-case">
              Which size fits you?
            </h2>

            <div className="flex flex-row items-center justify-center lg:justify-start gap-12 md:gap-16 lg:gap-20 h-[400px]">
              <div className="flex h-full items-center relative select-none">
                <div className="flex items-center slider-box relative h-[340px]">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderVal}
                    onChange={handleSliderChange}
                    className="z-10"
                    style={
                      { "--slider-fill": `${sliderVal}%` } as React.CSSProperties
                    }
                  />

                  <div
                    className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-20 h-5 w-5 rounded-full bg-[#f63d16] ring-2 ring-white shadow-[0_2px_5px_rgba(246,61,22,0.4),inset_0_1px_2px_rgba(255,255,255,0.3)] transition-all duration-150 ease-out"
                    style={{ bottom: `calc(${sliderVal}% - 10px)` }}
                  />
                </div>

                <div className="flex flex-col-reverse justify-between h-[340px] ml-6 pl-6 border-l-2 border-slate-100">
                  {(["small", "medium", "large"] as SizeKey[]).map((tier) => (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => {
                        setSizeTier(tier);
                        setSliderVal(
                          tier === "small" ? 15 : tier === "medium" ? 50 : 85
                        );
                      }}
                      className="text-left group outline-none focus:outline-none py-2"
                    >
                      <span
                        className={`text-xl block tracking-tight transition-all duration-200 ${sizeTier === tier
                          ? "text-[#000000] font-black scale-102"
                          : "text-gray-400 font-bold"
                          }`}
                      >
                        {sizingMap[tier].name}
                      </span>

                      <span
                        className={`text-xs block tracking-wider uppercase transition-all duration-200 mt-0.5 ${sizeTier === tier
                          ? "text-slate-500 font-semibold"
                          : "text-gray-300 font-medium"
                          }`}
                      >
                        {sizingMap[tier].label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="w-56 md:w-64 h-[340px] flex items-center justify-center overflow-visible">
                <img
                  src={sizingMap[sizeTier].imgAsset}
                  alt={sizingMap[sizeTier].name}
                  className={`w-full h-full object-contain transition-transform duration-300 ease-out ${sizingMap[sizeTier].transformScale}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Banner */}
      <a
        href="https://share.google/nt45dk2loT2kWOBNz"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-[#f63d16] hover:bg-[#de3714] transition-colors text-white py-10 px-4 sm:px-6 xl:px-0"
        itemProp="review"
        itemScope
        itemType="https://schema.org/Review"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 max-w-7xl">

          <div className="flex items-center space-x-1 px-4 py-2 rounded-full bg-white/10">
            {[...Array(4)].map((_, i) => (
              <svg key={i} className="fill-[#fbbc05] text-[#fbbc05] h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
            <svg className="text-[#fbbc05] h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="half-star">
                  <stop offset="50%" stopColor="#fbbc05" />
                  <stop offset="50%" stopColor="#b32b0f" />
                </linearGradient>
              </defs>
              <polygon fill="url(#half-star)" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>

          <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-sm p-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-10 h-10">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
              <path fill="#4285F4" d="M46.5 24c0-1.61-.15-3.16-.42-4.69H24v8.89h12.66c-.55 2.91-2.19 5.38-4.66 7.03l7.26 5.63C43.5 36.1 46.5 30.73 46.5 24z" />
              <path fill="#FBBC05" d="M10.54 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.98-6.19z" />
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.26-5.63c-2.03 1.37-4.63 2.19-8.63 2.19-6.26 0-11.57-4.22-13.46-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
            </svg>
          </div>

          <div className="text-2xl sm:text-3xl font-medium tracking-tight text-white flex items-center space-x-2 group flex-row">
            <span className="font-extrabold text-white">75</span>
            <span className="text-white/90 font-normal">Google Reviews</span>
            <span className="text-xl text-white inline-block transition-transform duration-150 transform group-hover:translate-x-1">→</span>
          </div>
        </div>
      </a>
    </>
  );
}