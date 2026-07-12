import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
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

// Fry Size Asset Imports
import regularSize from "@/assets/(23) Regular.jpg";
import mediumSize from "@/assets/(24) Medium.jpg";
import largeSize from "@/assets/(25) groot.jpg";

// Left Grid Layout Custom Assets
import dutchOriginal from "@/assets/(27) Dutch Originals.jpg";
import ghostBuster from "@/assets/(28) Ghost Busters.jpg";
import dutchWar from "@/assets/(29) Dutch War Fries.jpg";
import mangoChills from "@/assets/(30) Mango Chilli Tartare.jpg";
import truffle from "@/assets/(31)Truffle Luxe.jpg";
import oldAmsterdam from "@/assets/(32) Old Amsterdam Cheese Fries.jpg";

import { LocationsGrid } from "@/components/LocationsGrid";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({ component: Home });

type SizeKey = "small" | "medium" | "large";

interface SizeConfig {
  name: string;
  label: string;
  moodEmoji: string;
  imgAsset: string;
  transformScale: string;
}

function Home() {
  const { t } = useI18n();
  const [sizeTier, setSizeTier] = useState<SizeKey>("medium");
  const [sliderVal, setSliderVal] = useState<number>(50);
  
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

  const sizingMap: Record<SizeKey, SizeConfig> = {
    small: { 
      name: "Regular", 
      label: "Regular", 
      moodEmoji: "🙂", 
      imgAsset: regularSize,
      transformScale: "scale-[0.75]" 
    },
    medium: { 
      name: "Medium", 
      label: "Medium", 
      moodEmoji: "😋", 
      imgAsset: mediumSize,
      transformScale: "scale-[1.125]" 
    },
    large: { 
      name: "Groot", 
      label: "Groot / Large", 
      moodEmoji: "🥳", 
      imgAsset: largeSize,
      transformScale: "scale-[1.50]" 
    },
  };

  const leftGridImages = [
    dutchOriginal,
    ghostBuster,
    dutchWar,
    mangoChills,
    truffle,
    oldAmsterdam,
    heroImg,
    mascot
  ];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    setSliderVal(val);
    
    if (val < 35) setSizeTier("small");
    else if (val < 68) setSizeTier("medium");
    else setSizeTier("large");
  };

  const currentEmoji = sizingMap[sizeTier].moodEmoji;
  const doubleSauces = [...sauces, ...sauces];

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
          animation: marquee 75s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        
        .slider-box input[type="range"] {
          -webkit-appearance: none;
          appearance: none;
          width: 6px;
          height: 340px;
          background: #e2e8f0;
          border-radius: 99px;
          outline: none;
          writing-mode: vertical-lr;
          direction: rtl;
          cursor: pointer;
        }

        .slider-box input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: transparent;
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
          <h1 className="text-3xl leading-[0.95] sm:text-4xl md:text-6xl lg:text-7xl">
            {t("hero.title")}
          </h1>
          <div className="mt-5 flex flex-wrap justify-center gap-3 sm:mt-6 md:mt-8">
            <Link to="/locations" className="btn-outline">{t("hero.cta1")}</Link>
            <a 
              href="https://www.instagram.com/amfries.in/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-outline inline-flex items-center"
            >
              Our Videos
            </a>
          </div>
        </div>
      </section>

      <LocationsGrid />

      {/* Sauce Carousel Section */}
      <section className="overflow-hidden bg-white py-16 text-slate-900 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl text-black uppercase">Choose from 10+ sauces</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-500 font-medium">
              Pick a flavour that fits your mood, from mellow classics to fiery favourites.
            </p>
          </div>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee gap-16">
            {doubleSauces.map((sauce, idx) => (
              <div
                key={`${sauce.name}-${idx}`}
                className="w-[180px] flex-shrink-0 flex flex-col items-center justify-start text-center md:w-[220px]"
              >
                {/* Meta Header Wrapper with Fixed Height and Relative Bounds */}
                <div className="relative w-full h-20 flex flex-col items-center justify-center mb-2">
                  <h3 className="text-sm font-black tracking-wider text-slate-900 uppercase line-clamp-2 px-2">
                    {sauce.name}
                  </h3>
                  
                  {/* Badges Absolute Anchored directly below text bounds */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-1 h-5">
                    {sauce.spicy && (
                      <span className="inline-flex items-center rounded-full bg-red-50 text-red-600 px-2 py-0.5 text-[10px] font-black tracking-wide uppercase">
                        🌶️ Spicy
                      </span>
                    )}
                    {sauce.signature && (
                      <span className="inline-flex items-center rounded-full bg-amber-50 text-amber-700 px-2 py-0.5 text-[10px] font-black tracking-wide uppercase">
                        ⭐ Signature
                      </span>
                    )}
                  </div>
                </div>

                {/* Main Product Frame directly kissing the text block above */}
                <div className="flex h-36 w-36 items-center justify-center overflow-visible md:h-44 md:w-44">
                  {typeof sauce.visual === "string" && sauce.visual.length <= 4 ? (
                    <span className="text-6xl">{sauce.visual}</span>
                  ) : (
                    <img 
                      src={sauce.visual} 
                      alt={sauce.name} 
                      className="h-full w-full object-contain transform hover:scale-105 transition-transform duration-200"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sizer Section */}
      <section className="bg-white text-gray-900 flex flex-wrap flex-col-reverse lg:flex-row items-stretch w-full overflow-hidden">
        <div className="w-full lg:w-1/2 flex items-stretch">
          <div className="grid grid-cols-2 md:hidden w-full gap-0">
            {leftGridImages.slice(0, 4).map((img, i) => (
              <div key={i} className="relative overflow-hidden w-full aspect-square">
                <img className="h-full w-full object-cover" src={img} alt="Amfries Fry Spread Selection" />
              </div>
            ))}
          </div>

          <div className="grid-cols-2 hidden md:grid lg:hidden w-full gap-0">
            {leftGridImages.slice(0, 6).map((img, i) => (
              <div key={i} className="relative overflow-hidden w-full h-64">
                <img className="h-full w-full object-cover shadow-xs" src={img} alt="Amfries Fry Spread Selection" />
              </div>
            ))}
          </div>

          <div className="hidden lg:grid grid-cols-2 xl:grid-cols-3 w-full gap-0 min-h-[600px]">
            {leftGridImages.slice(0, 6).map((img, i) => (
              <div key={i} className="relative overflow-hidden w-full h-full min-h-[220px]">
                <img className="h-full w-full object-cover" src={img} alt="Amfries Fry Spread Selection" />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2 py-12 md:py-20 flex flex-col justify-center items-center lg:items-start px-6 md:px-16 xl:px-24 bg-white">
          <div className="w-full max-w-xl">
            <h2 className="text-center lg:text-left text-[#000000] font-extrabold text-3xl md:text-4xl lg:text-5xl mb-12 tracking-tight">
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
                  />
                  <span 
                    className="absolute left-1/2 -translate-x-1/2 pointer-events-none text-4xl select-none filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.15)] z-20"
                    style={{ bottom: `calc(${sliderVal}% - 20px)` }}
                  >
                    {currentEmoji}
                  </span>
                </div>

                <div className="flex flex-col-reverse justify-between h-[340px] ml-6 pl-6 border-l-2 border-slate-100">
                  {(["small", "medium", "large"] as SizeKey[]).map((tier) => (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => {
                        setSizeTier(tier);
                        setSliderVal(tier === "small" ? 15 : tier === "medium" ? 50 : 85);
                      }}
                      className="text-left group outline-none focus:outline-none py-2"
                    >
                      <span className={`text-xl block tracking-tight transition-all duration-200 ${
                        sizeTier === tier ? "text-[#000000] font-black scale-102" : "text-gray-400 font-bold"
                      }`}>
                        {sizingMap[tier].name}
                      </span>
                      <span className={`text-xs block tracking-wider uppercase transition-all duration-200 mt-0.5 ${
                        sizeTier === tier ? "text-slate-500 font-semibold" : "text-gray-300 font-medium"
                      }`}>
                        {sizingMap[tier].label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="w-56 md:w-64 h-[340px] flex items-center justify-center bg-transparent overflow-visible">
                <img 
                  src={sizingMap[sizeTier].imgAsset} 
                  alt={sizingMap[sizeTier].name} 
                  className={`w-full h-full object-contain transition-transform duration-300 ease-out origin-center transform ${sizingMap[sizeTier].transformScale}`}
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
        className="block bg-white hover:bg-slate-50 border-t border-b border-slate-100 transition-colors text-gray-800 py-10 px-4 sm:px-6 xl:px-0"
        itemProp="review" 
        itemScope 
        itemType="https://schema.org/Review"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 max-w-7xl">
          <div className="flex items-center space-x-1 px-4 py-2 rounded-full">
            {[...Array(4)].map((_, i) => (
              <svg key={i} className="fill-[#fbbc05] text-[#fbbc05] h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
            <svg className="text-[#fbbc05] h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="half-star">
                  <stop offset="50%" stopColor="#fbbc05" />
                  <stop offset="50%" stopColor="#e2e8f0" />
                </linearGradient>
              </defs>
              <polygon fill="url(#half-star)" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>

          <div className="flex items-center justify-center w-10 h-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-9 h-9">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
              <path fill="#4285F4" d="M46.5 24c0-1.61-.15-3.16-.42-4.69H24v8.89h12.66c-.55 2.91-2.19 5.38-4.66 7.03l7.26 5.63C43.5 36.1 46.5 30.73 46.5 24z" />
              <path fill="#FBBC05" d="M10.54 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.98-6.19z" />
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.26-5.63c-2.03 1.37-4.63 2.19-8.63 2.19-6.26 0-11.57-4.22-13.46-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
            </svg>
          </div>

          <div className="text-2xl sm:text-3xl font-medium tracking-tight text-gray-900 flex items-center space-x-2 group">
            <span className="font-extrabold text-[#1a73e8]">75</span> 
            <span className="text-gray-500 font-normal">Google Reviews</span>
            <span className="text-xl text-[#1a73e8] inline-block transition-transform duration-150 transform group-hover:translate-x-1">→</span>
          </div>
        </div>
      </a>
    </>
  );
}