import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import logoImg from "@assets/favicon_1766934074012.jpg";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language, setLanguage } = useLanguage();
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.whyUs"), href: "#why-us" },
    { name: t("nav.work"), href: "#work" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      setLocation(href);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img 
              src={logoImg} 
              alt="Military City Air" 
              className="w-12 h-12 rounded-full border-2 border-white shadow-lg transition-transform group-hover:scale-105" 
            />
            <div className={`font-display font-bold text-xl leading-tight ${scrolled ? "text-primary" : "text-white"}`}>
              MILITARY CITY<br />
              <span className="text-accent">AIR & HEAT</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-semibold uppercase tracking-wider hover:text-accent transition-colors ${
                  scrolled ? "text-primary" : "text-white/90"
                }`}
              >
                {link.name}
              </button>
            ))}

            <div className="flex items-center gap-4 ml-4">
              <button
                onClick={() => setLanguage(language === "en" ? "ua" : "en")}
                className={`px-3 py-1 rounded-full border text-xs font-bold transition-all ${
                  scrolled 
                    ? "border-primary text-primary hover:bg-primary hover:text-white" 
                    : "border-white text-white hover:bg-white hover:text-primary"
                }`}
              >
                {language === "en" ? "UA" : "EN"}
              </button>

              <a
                href="tel:210-555-0123"
                className="flex items-center gap-2 px-5 py-2.5 bg-accent text-white rounded-lg font-bold shadow-lg hover:bg-accent/90 hover:-translate-y-0.5 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>(210) 555-0123</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg ${scrolled ? "text-primary" : "text-white"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-primary font-semibold py-2 px-4 hover:bg-gray-50 rounded-lg"
            >
              {link.name}
            </button>
          ))}
          <div className="border-t border-gray-100 pt-4 flex flex-col gap-4">
            <button
              onClick={() => {
                setLanguage(language === "en" ? "ua" : "en");
                setIsOpen(false);
              }}
              className="text-left text-gray-600 font-medium py-2 px-4"
            >
              Switch Language: <span className="text-primary font-bold">{language === "en" ? "Українська" : "English"}</span>
            </button>
            <a
              href="tel:210-555-0123"
              className="flex justify-center items-center gap-2 w-full bg-accent text-white py-3 rounded-xl font-bold"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
