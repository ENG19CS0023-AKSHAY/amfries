import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useI18n, type Lang } from "@/lib/i18n";

export function Header() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const nav = [
    { to: "/", label: t("nav.home") },
    { to: "/locations", label: t("nav.locations") },
    { to: "/menu", label: t("nav.menu") },
    { to: "/story", label: t("nav.story") },
    { to: "/franchise", label: t("nav.franchise") },
  ] as const;

  const flags: Record<Lang, string> = { en: "🇬🇧", nl: "🇳🇱" };

  return (
    <header className="sticky top-0 z-50 bg-brand text-brand-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-4 md:px-8">
        <Link to="/" className="flex shrink-0 flex-col items-center leading-none">
          <span className="font-display text-2xl font-extrabold tracking-widest md:text-3xl">AMFRIES</span>
          <span className="mt-0.5 text-[0.6rem] tracking-[0.3em] opacity-80 md:text-[0.65rem]">
            • {t("footer.tagline").toUpperCase()} •
          </span>
        </Link>

        <nav className="hidden min-w-0 items-center justify-end gap-6 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="font-display text-sm font-semibold uppercase tracking-wider transition hover:text-accent-yellow [&.active]:text-accent-yellow [&.active]:underline [&.active]:underline-offset-8"
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1.5 rounded-full border border-white/30 px-3 py-1.5 text-sm font-semibold uppercase transition hover:bg-white/10"
              aria-label="Language"
            >
              <span>{flags[lang]}</span>
              <span>{lang.toUpperCase()}</span>
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {langOpen && (
              <div className="animate-scale-in absolute right-0 mt-2 min-w-[8rem] overflow-hidden rounded-lg bg-white text-foreground shadow-lg">
                {(["en", "nl"] as Lang[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setLangOpen(false); }}
                    className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm font-semibold uppercase hover:bg-muted"
                  >
                    <span>{flags[l]}</span> {l === "en" ? "English" : "Nederlands"}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            className="lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="animate-fade-up flex flex-col gap-1 border-t border-white/10 bg-brand-deep px-4 py-4 lg:hidden">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 font-display text-base font-semibold uppercase tracking-wider hover:bg-white/10 [&.active]:text-accent-yellow"
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
