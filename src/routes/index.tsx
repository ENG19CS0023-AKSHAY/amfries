import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import friesCone from "@/assets/fries-cone.jpg";
import loadedFries from "@/assets/loaded-fries.jpg";
import chicken from "@/assets/chicken.jpg";
import mascot from "@/assets/potato-mascot.png";
import { LocationsGrid } from "@/components/LocationsGrid";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const { t } = useI18n();
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-brand text-brand-foreground">
        <img
          src={heroImg}
          alt="Amfries counter"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand/70 via-brand/50 to-brand/90" />
        <div className="animate-fade-up relative z-10 mx-auto max-w-4xl px-4 py-24 text-center">
          <h1 className="text-4xl leading-[0.9] sm:text-6xl md:text-7xl lg:text-8xl">
            {t("hero.title")}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base opacity-90 md:text-lg">
            {t("hero.subtitle")}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/locations" className="btn-outline">{t("hero.cta1")}</Link>
            <Link to="/menu" className="btn-outline">{t("hero.cta2")}</Link>
          </div>
        </div>
      </section>

      <LocationsGrid />

      {/* Menu preview */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl">{t("menu.title")}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{t("menu.subtitle")}</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { img: friesCone, title: t("menu.classic"), desc: t("menu.classic.desc") },
              { img: loadedFries, title: t("menu.loaded"), desc: t("menu.loaded.desc") },
              { img: chicken, title: t("menu.chicken"), desc: t("menu.chicken.desc") },
            ].map((item) => (
              <div key={item.title} className="group animate-fade-up overflow-hidden rounded-2xl bg-cream transition hover:-translate-y-1 hover:shadow-xl">
                <div className="aspect-square overflow-hidden">
                  <img src={item.img} alt={item.title} loading="lazy" width={1024} height={1024}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="relative overflow-hidden bg-brand py-16 text-brand-foreground md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:items-center md:px-8">
          <div className="animate-fade-up">
            <h2 className="text-3xl md:text-5xl">{t("story.title")}</h2>
            <p className="mt-6 text-lg opacity-90">{t("story.body")}</p>
            <div className="mt-8">
              <Link to="/story" className="btn-outline">{t("story.cta")}</Link>
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
