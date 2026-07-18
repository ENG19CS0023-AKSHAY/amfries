import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useI18n, type Lang } from "@/lib/i18n";
import mainLogo from "@/assets/Amfries_logo.jpg";

export function Header() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);

  const nav = [
    { to: "/", label: t("nav.home") },
    { to: "/locations", label: t("nav.locations") },
    { to: "/menu", label: t("nav.menu") },
    { to: "/story", label: t("nav.story") },
    { to: "/franchise", label: t("nav.franchise") },
  ] as const;

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = open ? "hidden" : "";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  return (
    <header className="sticky top-0 z-[70] bg-white text-black border-b border-border transition-colors duration-300">
      <div className="mx-auto grid min-h-16 max-w-7xl gap-4 px-4 py-4 md:min-h-20 md:px-8 lg:min-h-0 lg:grid-cols-[auto_1fr] grid-cols-1 items-center lg:justify-start justify-center relative">
        <Link to="/" className="flex shrink-0 items-start leading-none -ml-2 lg:static absolute left-1/2 -translate-x-1/2 lg:translate-x-0">
          <img src={mainLogo} alt="Amfries" className="h-12 sm:h-14 md:h-16 w-auto" />
        </Link>

        <nav className="hidden min-w-0 items-center justify-end gap-6 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="font-display text-sm font-semibold tracking-wider transition hover:text-black [&.active]:text-black [&.active]:underline [&.active]:underline-offset-8"
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 absolute right-4 top-1/2 -translate-y-1/2 lg:hidden">
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="absolute inset-x-0 top-full h-[calc(100vh-100%)] z-[60] overflow-y-auto bg-white lg:hidden pb-10">
          <div className="flex h-full flex-col items-center justify-start pt-10">
            <nav className="flex w-full flex-col items-center justify-start gap-[40px]">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="block w-full text-center text-2xl font-light capitalize tracking-[0.15em] text-black hover:bg-black/5 py-2 transition-all duration-300 [&.active]:font-medium [&.active]:text-brand"
                  style={{ 
                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
                  }}
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