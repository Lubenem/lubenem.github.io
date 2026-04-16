import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/components/LanguageContext";
import { Menu, X, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@assets/favicon_1766927706139.jpg";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.gallery, href: "#gallery" },
    { name: t.nav.contact, href: "#contact" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-primary/95 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4 md:py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group" onClick={(e) => handleScrollTo(e, '#home')}>
          <div className="relative overflow-hidden rounded-full w-10 h-10 md:w-12 md:h-12 border-2 border-accent shadow-lg group-hover:scale-105 transition-transform duration-300">
            <img src={logoImg} alt="Nichols Automotive" className="object-cover w-full h-full" />
          </div>
          <div className={`flex flex-col ${scrolled ? 'text-white' : 'text-white drop-shadow-md'}`}>
            <span className="font-display font-bold text-lg md:text-xl leading-none tracking-wide">NICHOLS</span>
            <span className="text-xs font-light tracking-widest opacity-90">AUTOMOTIVE</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className={`text-sm font-medium tracking-wide uppercase hover:text-accent transition-colors duration-200 ${
                scrolled ? "text-white/90" : "text-white drop-shadow-sm"
              }`}
            >
              {link.name}
            </a>
          ))}
          
          <div className="h-6 w-px bg-white/20" />
          
          <button 
            onClick={() => setLang(lang === 'en' ? 'ua' : 'en')}
            className={`flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors ${
               scrolled ? "text-white/90" : "text-white"
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>{lang.toUpperCase()}</span>
          </button>

          <Button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wider shadow-lg shadow-accent/20"
          >
            {t.nav.book}
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary border-t border-white/10"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-white/90 hover:text-accent font-medium text-lg uppercase py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center justify-between pt-4">
                <button 
                  onClick={() => setLang(lang === 'en' ? 'ua' : 'en')}
                  className="flex items-center gap-2 text-white/80 hover:text-white"
                >
                  <Globe className="w-5 h-5" />
                  <span>{lang === 'en' ? 'English' : 'Українська'}</span>
                </button>
                <Button 
                  onClick={() => {
                    setIsOpen(false);
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-accent"
                >
                  {t.nav.book}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
