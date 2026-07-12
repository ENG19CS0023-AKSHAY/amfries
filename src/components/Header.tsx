import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useI18n, type Lang } from "@/lib/i18n";
import mainLogo from "@/assets/Amfries_logo.jpg";

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

  const flags: Record<Lang, string> = { en: "🇬🇧", nl: "nl" };

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = open ? "hidden" : "";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  return (
    <header className="sticky top-0 z-[70] bg-[#ffffff] text-[#000000]">
      <div className="mx-auto grid min-h-16 max-w-7xl gap-4 px-4 py-4 md:min-h-20 md:px-8 lg:min-h-0 lg:grid-cols-[auto_1fr_auto] grid-cols-1 items-center lg:justify-start justify-center relative">
        <Link to="/" className="flex shrink-0 items-start leading-none -ml-2 lg:static absolute left-1/2 -translate-x-1/2 lg:translate-x-0">
          <img src={mainLogo} alt="Amfries" className="h-8 md:h-12 w-auto" />
        </Link>

        <nav className="hidden min-w-0 items-center justify-end gap-6 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="font-display text-sm font-semibold uppercase tracking-wider transition hover:text-[#000000] [&.active]:text-[#000000] [&.active]:underline [&.active]:underline-offset-8"
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 absolute right-4 top-1/2 -translate-y-1/2 lg:relative lg:translate-y-0 lg:right-auto">
          <div className="relative">
            {/* <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1.5 rounded-full border border-[#000000]/30 px-3 py-1.5 text-sm font-semibold uppercase transition hover:bg-[#000000]/10"
              aria-label="Language"
            >
              <span>{flags[lang]}</span>
              <span>{lang.toUpperCase()}</span>
              <ChevronDown className="h-3.5 w-3.5" />
            </button> */}
            {/* {langOpen && (
              <div className="animate-scale-in absolute right-0 mt-2 min-w-[8rem] overflow-hidden rounded-lg bg-[#00000] text-[#000000] shadow-lg">
                {(["en", "nl"] as Lang[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setLangOpen(false); }}
                    className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm font-semibold uppercase hover:bg-[#000000]/10"
                  >
                    <span>{flags[l]}</span> {l === "en" ? "English" : "Kannada"}
                  </button>
                ))}
              </div>
            )} */}
          </div>
          <button
            className="lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-16 md:top-20 bottom-0 z-[60] overflow-hidden bg-[#ffffff] lg:hidden">
          <div className="flex h-full flex-col items-center justify-center">
            <nav className="flex w-full flex-col items-center justify-center">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="w-full px-4 py-3 font-display text-2xl font-bold uppercase tracking-wider text-center text-[#000000] hover:bg-[#000000]/10 [&.active]:font-extrabold [&.active]:text-[#000000]"
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}