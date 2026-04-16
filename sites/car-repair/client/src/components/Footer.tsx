import { useLanguage } from "@/components/LanguageContext";
import { Facebook, MapPin, Phone, Clock, PenTool as Tool } from "lucide-react";
import logoImg from "@assets/favicon_1766927706139.jpg";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-white border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20">
                <img src={logoImg} alt="Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-display tracking-wider">Nichols</h3>
                <p className="text-xs text-white/50 tracking-widest uppercase">Automotive Center</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              {t.hero.since}. {t.hero.title}.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:scale-110 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold font-display tracking-wider text-accent">{t.nav.contact}</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-white/80">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span>3901 Washington Rd,<br />Augusta, GA 30907</span>
              </li>
              <li className="flex gap-3 text-sm text-white/80">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:+17066503130" className="hover:text-white transition-colors">+1 706-650-3130</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold font-display tracking-wider text-accent">Hours</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Mon - Fri</span>
                <span>8:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2 opacity-50">
                <span>Saturday</span>
                <span>Closed</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2 opacity-50">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="h-48 bg-white/5 rounded-xl overflow-hidden border border-white/10">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.068367988358!2d-82.0833215848126!3d33.53232198075053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f9cd0071375d05%3A0xa2c3905c11100f94!2s3901%20Washington%20Rd%2C%20Martinez%2C%20GA%2030907!5e0!3m2!1sen!2sus!4v1677682934123!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-xs text-white/40">
          <p>{t.footer.rights} &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
