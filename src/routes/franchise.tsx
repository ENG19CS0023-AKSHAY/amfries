import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.png";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/franchise")({
  head: () => ({
    meta: [
      { title: "Franchise & collaboration — Amfries" },
      { name: "description", content: "Open your own Amfries shop. Partner with us to bring Belgian fries to your city." },
    ],
  }),
  component: FranchisePage,
});

function FranchisePage() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);
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
          <h1 className="text-3xl leading-[0.95] sm:text-4xl md:text-6xl lg:text-7xl">{t("franchise.title")}</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm opacity-90 sm:mt-4 sm:text-base md:mt-6 md:text-lg">{t("franchise.body")}</p>
        </div>
      </section>
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-2xl px-4 md:px-8">
          {sent ? (
            <div className="animate-scale-in rounded-2xl bg-cream p-10 text-center shadow">
              <h2 className="text-3xl text-brand">Thank you!</h2>
              <p className="mt-3 text-muted-foreground">We'll get back to you within 3 business days.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="grid gap-4 rounded-2xl bg-cream p-8 shadow"
            >
              <label className="grid gap-1.5">
                <span className="text-sm font-semibold uppercase tracking-wider">Name</span>
                <input required className="rounded-lg border border-border px-4 py-3 focus:border-brand focus:outline-none" />
              </label>
              <label className="grid gap-1.5">
                <span className="text-sm font-semibold uppercase tracking-wider">Email</span>
                <input type="email" required className="rounded-lg border border-border px-4 py-3 focus:border-brand focus:outline-none" />
              </label>
              <label className="grid gap-1.5">
                <span className="text-sm font-semibold uppercase tracking-wider">City</span>
                <input required className="rounded-lg border border-border px-4 py-3 focus:border-brand focus:outline-none" />
              </label>
              <label className="grid gap-1.5">
                <span className="text-sm font-semibold uppercase tracking-wider">Message</span>
                <textarea rows={5} className="rounded-lg border border-border px-4 py-3 focus:border-brand focus:outline-none" />
              </label>
              <button type="submit" className="btn-primary mt-2">{t("franchise.cta")}</button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
