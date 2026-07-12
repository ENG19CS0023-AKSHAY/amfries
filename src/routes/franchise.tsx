import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.png";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/franchise")({
  head: () => ({
    meta: [
      { title: "Franchise & collaboration — Amfries" },
      { name: "description", content: "Open your own Amfries shop. Partner with us to bring authentic fries to your city." },
    ],
  }),
  component: FranchisePage,
});

function FranchisePage() {
  const { t } = useI18n();

  return (
    <>
      {/* Hero Section */}
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
          <h1 className="text-3xl leading-[0.95] sm:text-4xl md:text-6xl lg:text-7xl">{t("franchise.title")}</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm opacity-90 sm:mt-4 sm:text-base md:mt-6 md:text-lg">{t("franchise.body")}</p>
          
          {/* Redirect Button to Our Story */}
          <div className="mt-5 sm:mt-6 md:mt-8">
            <Link 
              to="/story" 
              className="btn-outline bg-white text-black hover:bg-black hover:text-white transition-colors duration-200"
            >
              {t("nav.story")}
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Amfries */}
      <section className="bg-cream py-16 md:py-24 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Partner With Amfries?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join a disruptive premium QSR brand that bridges the gap for high-quality, authentic snacking in India.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: "Standardized Operations", desc: "Rigorous SOPs tested in our cloud kitchens ensure consistent quality and easy daily management." },
              { title: "Premium Menu & R&D", desc: "Authentic double-fried techniques, 15+ custom sauces, and high-quality 100% sunflower oil." },
              { title: "Robust Supply Chain", desc: "Reliable backend sourcing agreements negotiated by experienced FnB entrepreneurs." },
              { title: "High Demand Gap", desc: "Fulfilling the massive market whitespace for premium, specialized fry-focused QSRs." },
              { title: "Marketing & Brand Support", desc: "Comprehensive brand guidelines, launch playbooks, and continuous marketing backing." },
              { title: "Attractive ROI", desc: "Optimized unit economics designed for rapid break-even and sustainable profitability." },
            ].map((feature, i) => (
              <div key={i} className="rounded-2xl border border-brand/10 bg-white p-8 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Growth Plan */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Our Aggressive Growth Plan</h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Amfries is not just another food stall; it is a venture built for scale. Starting with our flagship 
              experiences, we have mapped out a strategic 5-year expansion pipeline to dominate the Indian QSR landscape.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mt-8 text-left">
              <div className="bg-cream p-8 rounded-2xl border border-brand/10">
                <h4 className="font-bold text-2xl text-brand mb-3">Phase 1: Establish</h4>
                <p className="text-base">Launching stronghold flagship outlets in major hubs like Bangalore, perfecting the customer experience and finalizing franchise unit economics.</p>
              </div>
              <div className="bg-cream p-8 rounded-2xl border border-brand/10">
                <h4 className="font-bold text-2xl text-brand mb-3">Phase 2: Scale</h4>
                <p className="text-base">Aggressive franchise rollout targeting 100+ locations across major Indian cities over the next five years, backed by heavy marketing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-brand py-20 px-4 text-center text-brand-foreground">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to build the future of snacking?</h2>
          <p className="text-lg opacity-90 mb-8">
            Connect with our franchise development team to discuss opportunities in your city.
          </p>
          <a 
            href="mailto:amfriesoriginal@gmail.com" 
            className="inline-block bg-white text-brand px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform"
          >
            Contact Our Team
          </a>
        </div>
      </section>
    </>
  );
}