import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-brand-deep text-brand-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-8">
        <div>
          <div className="font-display text-2xl font-extrabold tracking-widest">AMFRIES</div>
          <p className="mt-1 text-xs uppercase tracking-[0.3em] opacity-70">• {t("footer.tagline")} •</p>
          <p className="mt-4 text-sm opacity-80">
            Hand-cut potatoes, double-fried the Belgian way. Fresh in every bite.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">Explore</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li><Link to="/locations" className="hover:text-accent-yellow">{t("nav.locations")}</Link></li>
            <li><Link to="/menu" className="hover:text-accent-yellow">{t("nav.menu")}</Link></li>
            <li><Link to="/story" className="hover:text-accent-yellow">{t("nav.story")}</Link></li>
            <li><Link to="/franchise" className="hover:text-accent-yellow">{t("nav.franchise")}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">Visit us</h4>
          <p className="flex items-start gap-2 text-sm opacity-90">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
            80 Feet Road, 4th Block, Koramangala,<br />Bangalore, 560034
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">Follow</h4>
          <div className="flex gap-3">
            <a href="#" aria-label="Instagram" className="rounded-full border border-brand-foreground/30 p-2 transition hover:bg-brand-foreground hover:text-brand">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Facebook" className="rounded-full border border-brand-foreground/30 p-2 transition hover:bg-brand-foreground hover:text-brand">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-brand-foreground/10 py-4 text-center text-xs opacity-70">
        © {new Date().getFullYear()} Amfries. {t("footer.rights")}
      </div>
    </footer>
  );
}
