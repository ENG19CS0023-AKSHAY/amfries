import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Play, X } from "lucide-react";
import heroImg from "@/assets/hero.png";
import mascot from "@/assets/potato-mascot.png";
import icon from "@/assets/icon.svg";
import video from "@/assets/2.mp4";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "Our story — Amfries" },
      { name: "description", content: "From Amsterdam streets to Bangalore: The Amfries journey." },
    ],
  }),
  component: StoryPage,
});

function StoryPage() {
  const { t } = useI18n();
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex h-[331.2px] items-center justify-center overflow-hidden bg-brand text-brand-foreground md:h-[475px]">
        <img src={heroImg} alt="Amfries counter" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover opacity-90 blur-[2.5px]" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="animate-fade-up relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl md:text-7xl font-bold">Amsterdam Original</h1>
          <p className="mt-4 text-xl md:text-2xl opacity-90">A fresh, bold fries revolution in Bangalore.</p>
          <div className="mt-5 sm:mt-6 md:mt-8">
            <Link to="/menu" className="btn-outline">
              {t("nav.menu")}
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:items-center md:px-8">
          <img src={heroImg} alt="Amfries storefront" width={1280} height={800} className="rounded-2xl shadow-xl" />
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Fresh & Disruptive</h2>
            <p className="text-lg text-muted-foreground">
              Amfries is a premium QSR venture bringing authentic Amsterdam-style fries to India. 
              We are here to disrupt the snacking scene, offering 11mm fries double-fried to perfection, 
              served the Dutch way—in cones with signature sauces.
            </p>
            <p className="text-lg text-muted-foreground">
              We fill a critical gap in the market for high-quality, specialty fries that go beyond the ordinary.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Vision and Ambition */}
      <section className="py-16 md:py-24 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Brand Vision and Ambition</h2>
          <p className="text-lg text-muted-foreground">
            Our mission is to create a brand synonymous with quality, authenticity, and innovation. 
            We are here for the long haul, with a vision to scale to 100+ outlets across major cities, 
            establishing Amfries as a national brand that sets new standards for quick-service snacks.
          </p>
        </div>
      </section>

      {/* R&D Journey */}
      <section className="py-16 md:py-24 px-4 bg-cream">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold mb-12">Two Years in the Making</h2>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { h: "European R&D", p: "We spent months in Amsterdam learning from fry masters to capture authentic magic." },
              { h: "Cloud Kitchen", p: "FnB experts developed SOPs for our Dutch-style Broodje Kroket burger." },
              { h: "Sauce Laboratory", p: "15 custom sauces crafted, from classic Dutch Andalouse to bold Indian fusion." },
              { h: "Constant Iteration", p: "Every aspect, from frying techniques to packaging, has been fine-tuned for two years." },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-brand/10 p-8 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(246,61,22,0.15)] hover:border-brand/30">
                <h3 className="text-xl font-semibold mb-3">{item.h}</h3>
                <p className="text-muted-foreground">{item.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Amfries Unique */}
      <section className="py-16 md:py-24 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">What Makes Amfries Unique</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border border-border rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(246,61,22,0.15)] hover:border-brand/30">
              <h3 className="font-bold text-xl mb-2">Double-Fried Perfection</h3>
              <p className="text-muted-foreground">Time-honored Amsterdam technique for a crispy outside and soft, fluffy inside.</p>
            </div>
            <div className="p-8 border border-border rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(246,61,22,0.15)] hover:border-brand/30">
              <h3 className="font-bold text-xl mb-2">100% Sunflower Oil</h3>
              <p className="text-muted-foreground">Zero trans-fat and no palm oil for a cleaner, healthier, and superior taste.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Credibility and Growth Plans */}
      <section className="py-16 md:py-24 px-4 bg-cream">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Brand Credibility and Growth Plans</h2>
          <p className="text-lg text-muted-foreground">
            Backed by experienced food entrepreneurs and secured investment, we have built a robust 
            backend including sourcing agreements and standardized processes. Our goal is to build 
            a community of fry-lovers through aggressive growth and consistent quality across all outlets.
          </p>
        </div>
      </section>

      {/* Video Spotlight Section */}
      <section className="bg-brand py-20 px-4 text-brand-foreground">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <img
              src={icon}
              alt="Amfries"
              className="mx-auto mb-6 h-24 w-24 md:mx-0"
              style={{ filter: "brightness(0) saturate(100%) invert(100%)" }}
            />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">See the Fries Revolution</h2>
            <p className="text-lg opacity-80">Experience the journey from Amsterdam to Bangalore. See how we redefine the snacking experience, one fry at a time.</p>
          </div>

          {/* Video Thumbnail / Trigger */}
          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            className="group relative aspect-video w-full overflow-hidden rounded-xl bg-black shadow-2xl cursor-pointer"
            aria-label="Play video"
          >
            <img
              src={heroImg}
              alt="Watch the Amfries story"
              className="h-full w-full object-cover opacity-70 transition-opacity group-hover:opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-110">
                <Play className="h-7 w-7 md:h-8 md:w-8 text-brand fill-brand ml-1" />
              </span>
            </div>
          </button>
        </div>
      </section>

      {/* Video Modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setVideoOpen(false)}
        >
          <button
            type="button"
            onClick={() => setVideoOpen(false)}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-[101] flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Close video"
          >
            <X className="h-6 w-6" />
          </button>
          <div
            className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={video}
              className="h-full w-full"
              controls
              autoPlay
              playsInline
            >
              Sorry, your browser does not support embedded videos.
            </video>
          </div>
        </div>
      )}
    </>
  );
}