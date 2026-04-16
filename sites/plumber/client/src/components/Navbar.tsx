import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/i18n";
import { Link } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@assets/favicon_1766934286435.jpg";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "glass py-3" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection("hero")}>
          <img src={logo} alt="Pool Service Knoxville" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white shadow-md" />
          <span className={cn(
            "font-display font-bold text-xl md:text-2xl tracking-tight",
            isScrolled ? "text-primary" : "text-white"
          )}>
            Pool Service<span className="text-cyan-400">.</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { id: "hero", label: t.nav.home },
            { id: "services", label: t.nav.services },
            { id: "gallery", label: t.nav.gallery },
            { id: "reviews", label: t.nav.reviews },
            { id: "contact", label: t.nav.contact },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-cyan-400",
                isScrolled ? "text-foreground" : "text-white/90"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Toggle */}
          <div className="flex bg-black/10 rounded-full p-1 backdrop-blur-sm">
            <button
              onClick={() => setLanguage("en")}
              className={cn("px-3 py-1 rounded-full text-xs font-bold transition-all", language === "en" ? "bg-white text-primary shadow-sm" : "text-current")}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("ua")}
              className={cn("px-3 py-1 rounded-full text-xs font-bold transition-all", language === "ua" ? "bg-white text-primary shadow-sm" : "text-current")}
            >
              UA
            </button>
          </div>

          <Button 
            onClick={() => scrollToSection("booking")}
            className="rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 border-none"
          >
            {t.nav.cta}
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-8 h-8 text-foreground" /> : <Menu className={cn("w-8 h-8", isScrolled ? "text-foreground" : "text-white")} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border p-6 shadow-xl flex flex-col gap-6 animate-in slide-in-from-top-5">
           {[
            { id: "hero", label: t.nav.home },
            { id: "services", label: t.nav.services },
            { id: "gallery", label: t.nav.gallery },
            { id: "reviews", label: t.nav.reviews },
            { id: "booking", label: t.nav.cta },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-lg font-medium text-foreground text-left"
            >
              {item.label}
            </button>
          ))}
          <div className="h-px bg-border w-full" />
          <div className="flex justify-between items-center">
             <span className="text-muted-foreground text-sm">Language / Мова</span>
             <div className="flex bg-secondary rounded-full p-1">
              <button
                onClick={() => setLanguage("en")}
                className={cn("px-4 py-1.5 rounded-full text-sm font-bold transition-all", language === "en" ? "bg-white shadow-sm text-primary" : "text-muted-foreground")}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("ua")}
                className={cn("px-4 py-1.5 rounded-full text-sm font-bold transition-all", language === "ua" ? "bg-white shadow-sm text-primary" : "text-muted-foreground")}
              >
                UA
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
