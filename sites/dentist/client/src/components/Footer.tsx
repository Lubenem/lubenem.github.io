import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import logoImg from "@assets/favicon_1766906019376.png";

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="Logo" className="w-10 h-10 rounded-full object-contain" />
              <span className="font-display text-2xl font-bold">Gray Family Dental</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors" data-testid="social-facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors" data-testid="social-instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors" data-testid="social-twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-6">{t.footer.quickLinks}</h4>
            <ul className="space-y-4">
              <li><a href="/" className="text-white/80 hover:text-white hover:underline transition-all">Home</a></li>
              <li><a href="#about" className="text-white/80 hover:text-white hover:underline transition-all">{t.nav.about}</a></li>
              <li><a href="#services" className="text-white/80 hover:text-white hover:underline transition-all">{t.nav.services}</a></li>
              <li><a href="#testimonials" className="text-white/80 hover:text-white hover:underline transition-all">{t.nav.testimonials}</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white hover:underline transition-all">{t.nav.contact}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-6">{t.nav.services}</h4>
            <ul className="space-y-4">
              <li className="text-white/80">{t.services.generalDentistry}</li>
              <li className="text-white/80">{t.services.cosmeticDentistry}</li>
              <li className="text-white/80">{t.services.orthodontics}</li>
              <li className="text-white/80">{t.services.oralSurgery}</li>
              <li className="text-white/80">{t.services.emergencyCare}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-6">{t.footer.contactInfo}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 shrink-0 text-accent" />
                <span className="text-white/80">123 Woodward Ave,<br />Detroit, MI 48201</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0 text-accent" />
                <span className="text-white/80">(313) 555-0123</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0 text-accent" />
                <span className="text-white/80">info@grayfamilydental.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Gray Family Dental. {t.footer.rights}
          </p>
          <div className="flex gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
