import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/LanguageContext";
import logoImg from "@assets/favicon_1766906019376.png";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", translatedName: "Home", href: "/" },
    { name: "Services", translatedName: t.nav.services, href: "/#services" },
    { name: "About", translatedName: t.nav.about, href: "/#about" },
    { name: "Testimonials", translatedName: t.nav.testimonials, href: "/#testimonials" },
    { name: "Contact", translatedName: t.nav.contact, href: "/#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    if (href.startsWith("/#")) {
      const id = href.split("#")[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else if (location !== "/") {
        setLocation("/");
        setTimeout(() => {
          const el = document.getElementById(id);
          el?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      setLocation(href);
      window.scrollTo(0, 0);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-border/40 py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group" onClick={() => window.scrollTo(0, 0)}>
            <img 
              src={logoImg} 
              alt="Gray Family Dental Logo" 
              className="w-10 h-10 object-contain rounded-full transition-transform group-hover:scale-105" 
            />
            <div className="flex flex-col">
              <span className={cn("font-display text-xl font-bold leading-none", isScrolled ? "text-primary" : "text-primary md:text-white")}>
                Gray Family Dental
              </span>
              <span className={cn("text-xs tracking-wider uppercase font-medium", isScrolled ? "text-muted-foreground" : "text-primary-foreground/80 md:text-white/80")}>
                Detroit, MI
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full",
                  isScrolled ? "text-foreground" : "text-white"
                )}
                data-testid={`nav-${link.name.toLowerCase()}`}
              >
                {link.translatedName}
              </button>
            ))}
            
            <div className={cn(
              "flex items-center gap-1 text-sm font-medium border rounded-full px-1 py-0.5",
              isScrolled ? "border-border" : "border-white/30"
            )}>
              <button
                onClick={() => setLanguage("en")}
                className={cn(
                  "px-2 py-1 rounded-full transition-colors",
                  language === "en" 
                    ? (isScrolled ? "bg-primary text-white" : "bg-white text-primary")
                    : (isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white")
                )}
                data-testid="lang-toggle-en"
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("ua")}
                className={cn(
                  "px-2 py-1 rounded-full transition-colors",
                  language === "ua"
                    ? (isScrolled ? "bg-primary text-white" : "bg-white text-primary")
                    : (isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white")
                )}
                data-testid="lang-toggle-ua"
              >
                UA
              </button>
            </div>

            <Button 
              size="lg"
              className={cn(
                "rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 font-semibold gap-2",
                isScrolled 
                  ? "bg-primary text-white hover:bg-primary/90" 
                  : "bg-white text-primary hover:bg-white/90"
              )}
              onClick={() => handleNavClick("/#contact")}
              data-testid="nav-book-now"
            >
              <Phone className="w-4 h-4" />
              {t.nav.bookNow}
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <div className={cn(
              "flex items-center gap-1 text-xs font-medium border rounded-full px-1 py-0.5",
              isScrolled ? "border-border" : "border-white/30"
            )}>
              <button
                onClick={() => setLanguage("en")}
                className={cn(
                  "px-2 py-0.5 rounded-full transition-colors",
                  language === "en" 
                    ? (isScrolled ? "bg-primary text-white" : "bg-white text-primary")
                    : (isScrolled ? "text-muted-foreground" : "text-white/70")
                )}
                data-testid="lang-toggle-en-mobile"
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("ua")}
                className={cn(
                  "px-2 py-0.5 rounded-full transition-colors",
                  language === "ua"
                    ? (isScrolled ? "bg-primary text-white" : "bg-white text-primary")
                    : (isScrolled ? "text-muted-foreground" : "text-white/70")
                )}
                data-testid="lang-toggle-ua-mobile"
              >
                UA
              </button>
            </div>
            <button
              className={cn("p-2 rounded-lg", isScrolled ? "text-foreground" : "text-white")}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-xl animate-in slide-in-from-top-5">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-lg font-medium text-foreground py-2 border-b border-border/30 last:border-0"
                data-testid={`mobile-nav-${link.name.toLowerCase()}`}
              >
                {link.translatedName}
              </button>
            ))}
            <Button className="w-full mt-4 rounded-xl" size="lg" onClick={() => handleNavClick("/#contact")} data-testid="mobile-book-appointment">
              {t.nav.bookNow}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
