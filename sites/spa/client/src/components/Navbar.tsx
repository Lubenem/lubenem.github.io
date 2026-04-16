import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import favicon from "@assets/favicon_1766933985314.jpg";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useI18n();
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: t("nav.home"), id: "hero" },
    { label: t("nav.services"), id: "services" },
    { label: t("nav.gallery"), id: "gallery" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <img 
              src={favicon} 
              alt="Logo" 
              className="h-10 w-10 rounded-full object-cover shadow-md border-2 border-white/20"
            />
            <span className={`text-xl font-display font-bold tracking-wide ${isScrolled ? 'text-primary' : 'text-primary'}`}>
              Flex Flow
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-foreground/80 hover:text-primary font-medium transition-colors text-sm uppercase tracking-wider"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === "en" ? "ua" : "en")}
              className="flex items-center gap-1.5 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              <Globe className="h-4 w-4" />
              {language.toUpperCase()}
            </button>
            <Button 
              onClick={() => scrollToSection("booking")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 shadow-lg shadow-primary/20"
            >
              {t("nav.book")}
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-t shadow-lg md:hidden p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-left py-2 px-4 hover:bg-muted rounded-lg font-medium text-foreground/80"
            >
              {link.label}
            </button>
          ))}
          <div className="flex items-center justify-between px-4 pt-2 border-t">
            <button
              onClick={() => setLanguage(language === "en" ? "ua" : "en")}
              className="flex items-center gap-2 text-sm font-medium"
            >
              <Globe className="h-4 w-4" />
              {language === "en" ? "Switch to UA" : "Switch to EN"}
            </button>
            <Button onClick={() => scrollToSection("booking")} size="sm" className="rounded-full">
              {t("nav.book")}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
