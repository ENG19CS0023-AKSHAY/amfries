import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import mainLogo from "@/assets/Amfries_logo.jpg";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-white text-black border-t border-gray-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-8">
        <div className="flex items-start">
          <Link to="/" className="inline-block leading-none">
            <img src={mainLogo} alt="Amfries" className="h-20 w-auto rounded-md object-contain" />
          </Link>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">Explore</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link to="/locations" className="hover:text-black transition-colors">{t("nav.locations")}</Link></li>
            <li><Link to="/menu" className="hover:text-black transition-colors">{t("nav.menu")}</Link></li>
            <li><Link to="/story" className="hover:text-black transition-colors">{t("nav.story")}</Link></li>
            <li><Link to="/franchise" className="hover:text-black transition-colors">{t("nav.franchise")}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">Visit us</h4>
          <p className="flex items-start gap-2 text-sm text-gray-600">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-black" />
            80 Feet Road, 4th Block, Koramangala,<br />Bangalore, 560034
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">Follow</h4>
          <div className="flex gap-3">
            <a 
              href="https://www.instagram.com/amfries.in/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram" 
              className="rounded-full border border-gray-300 p-2 text-black transition hover:bg-black hover:text-white"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a 
              href="https://www.facebook.com/people/Amfries-India/61590638226816/#" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook" 
              className="rounded-full border border-gray-300 p-2 text-black transition hover:bg-black hover:text-white"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-100 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Amfries. {t("footer.rights")}
      </div>
    </footer>
  );
}