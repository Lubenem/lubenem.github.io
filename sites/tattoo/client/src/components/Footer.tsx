import { Facebook, Instagram } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-background border-t border-primary/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary mb-2 tracking-wider">REBEL ROSE TATTOOS</h3>
            <p className="text-muted-foreground" data-testid="text-footer-address">
              930 16th St, Bedford, IN 47421, United States
            </p>
            <p className="text-muted-foreground mt-1">
              <a href="tel:5419040566" className="hover:text-primary transition-colors">
                (541) 904-0566
              </a>
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/rebelrosetattoos/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center hover-elevate"
              data-testid="link-facebook"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-primary" />
            </a>
            <a
              href="https://www.instagram.com/rebelrosetattoos/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center hover-elevate"
              data-testid="link-instagram"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-primary" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Rebel Rose Tattoos. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
