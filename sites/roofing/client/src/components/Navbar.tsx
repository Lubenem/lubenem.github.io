import { Link, useLocation } from "wouter";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { Globe, Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import favicon from "@assets/favicon_1766947893471.jpg";

export function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: t('nav.home'), href: "/" },
    { label: t('nav.services'), action: () => scrollToSection('services') },
    { label: t('nav.projects'), action: () => scrollToSection('projects') },
    { label: t('nav.contact'), action: () => scrollToSection('contact') },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md py-2 border-b border-border/50" 
          : "bg-transparent py-4 lg:py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <img 
            src={favicon} 
            alt="Northern Generations Logo" 
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-primary/20 transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className={`font-display text-lg md:text-xl font-bold uppercase leading-tight tracking-wider ${isScrolled ? "text-secondary" : "text-white"}`}>
              Northern
            </span>
            <span className={`font-display text-lg md:text-xl font-bold uppercase leading-tight tracking-wider text-primary`}>
              Generations
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            link.href ? (
              <Link 
                key={idx} 
                href={link.href}
                className={`text-sm font-semibold tracking-wide uppercase hover:text-primary transition-colors ${
                  isScrolled ? "text-secondary" : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={idx}
                onClick={link.action}
                className={`text-sm font-semibold tracking-wide uppercase hover:text-primary transition-colors ${
                  isScrolled ? "text-secondary" : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            )
          ))}

          <div className="flex items-center gap-4 pl-4 border-l border-white/20">
            <button 
              onClick={toggleLanguage}
              className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
                isScrolled ? "text-secondary hover:text-primary" : "text-white hover:text-white/80"
              }`}
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'en' ? 'UA' : 'EN'}</span>
            </button>

            <Button 
              onClick={() => scrollToSection('appointment')}
              className="bg-primary hover:bg-primary/90 text-white font-bold tracking-wide rounded-sm shadow-lg shadow-primary/25"
            >
              {t('nav.free_estimate')}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 lg:hidden">
          <button 
            onClick={toggleLanguage}
            className={`flex items-center gap-1 text-sm font-bold ${
              isScrolled ? "text-secondary" : "text-white"
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>{language.toUpperCase()}</span>
          </button>
          
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className={`p-2 ${isScrolled ? "text-secondary" : "text-white"}`}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-background z-50 flex flex-col"
          >
            <div className="p-4 flex justify-between items-center border-b">
              <span className="font-display text-xl font-bold text-secondary uppercase">Menu</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-secondary">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link, idx) => (
                link.href ? (
                  <Link 
                    key={idx} 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-display font-bold text-secondary hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={idx}
                    onClick={link.action}
                    className="text-left text-2xl font-display font-bold text-secondary hover:text-primary"
                  >
                    {link.label}
                  </button>
                )
              ))}
              
              <div className="mt-8 pt-8 border-t flex flex-col gap-4">
                <Button 
                  onClick={() => scrollToSection('appointment')}
                  size="lg" 
                  className="w-full bg-primary text-white"
                >
                  {t('nav.free_estimate')}
                </Button>
                
                <a 
                  href="tel:+12622022481" 
                  className="flex items-center justify-center gap-2 text-secondary font-medium py-3 border border-border rounded-sm"
                >
                  <Phone className="w-4 h-4" />
                  +1 262-202-2481
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
