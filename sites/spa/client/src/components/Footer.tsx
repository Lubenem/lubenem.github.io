import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold tracking-wide">Flex Flow</h3>
            <p className="text-white/60 leading-relaxed max-w-xs">
              Restoring balance to your body and mind through expert therapeutic touch.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">{t("footer.contact")}</h4>
            <div className="space-y-3 text-white/70">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-primary" />
                <p>123 Wellness Ave, Serenity City<br/>SC 90210</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0 text-primary" />
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0 text-primary" />
                <p>hello@flexflow.com</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden h-48 bg-white/5 relative">
            {/* Using a static placeholder or generic iframe for demo */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.5471465225435!2d30.5234!3d50.4501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDI3JzAwLjQiTiAzMMKwMzEnMjQuMiJF!5e0!3m2!1sen!2sua!4v1600000000000!5m2!1sen!2sua"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy"
              className="grayscale opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Flex Flow. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}
