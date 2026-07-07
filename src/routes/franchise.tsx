import { createFileRoute } from "@tanstack/react-router";
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
      <section className="bg-brand py-16 text-brand-foreground md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <h1 className="text-4xl md:text-6xl">{t("franchise.title")}</h1>
          <p className="mt-4 opacity-90">{t("franchise.body")}</p>
        </div>
      </section>
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-2xl px-4 md:px-8">
          {sent ? (
            <div className="animate-scale-in rounded-2xl bg-white p-10 text-center shadow">
              <h2 className="text-3xl text-brand">Thank you!</h2>
              <p className="mt-3 text-muted-foreground">We'll get back to you within 3 business days.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="grid gap-4 rounded-2xl bg-white p-8 shadow"
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
