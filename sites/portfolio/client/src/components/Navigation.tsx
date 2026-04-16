import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/lib/i18n';

export function Navigation() {
  const [location, setLocation] = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/#home', label: t('nav.home') },
    { href: '/#about', label: t('nav.about') },
    { href: '/#services', label: t('nav.services') },
    { href: '/#contact', label: t('nav.contact') },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    
    if (href.startsWith('/#')) {
      const id = href.substring(2);
      
      // If we're not on the home page, navigate there first
      if (location !== '/') {
        setLocation('/');
        // Wait for navigation then scroll
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => {
              if (location !== '/') {
                setLocation('/');
              }
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xl font-mono font-bold text-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md transition-all"
            data-testid="button-logo"
          >
            LiuTech
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all hover-elevate active-elevate-2 ${
                  location === link.href
                    ? 'text-primary'
                    : 'text-foreground/80'
                }`}
                data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
              </button>
            ))}

            {/* Legal Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="default"
                  data-testid="button-legal-menu"
                >
                  {t('nav.legal')}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <Link href="/refund-policy">
                  <DropdownMenuItem data-testid="link-refund-policy">
                    {t('nav.refundPolicy')}
                  </DropdownMenuItem>
                </Link>
                <Link href="/terms-of-service">
                  <DropdownMenuItem data-testid="link-terms-of-service">
                    {t('nav.termsOfService')}
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  data-testid="button-language-toggle"
                >
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() => setLanguage('en')}
                  data-testid="button-language-en"
                >
                  English
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage('ua')}
                  data-testid="button-language-ua"
                >
                  Українська
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg">
            <div className="py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground/80 hover-elevate active-elevate-2 rounded-md"
                  data-testid={`mobile-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.label}
                </button>
              ))}
              <Link
                href="/refund-policy"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground/80 hover-elevate active-elevate-2 rounded-md"
                data-testid="mobile-link-refund-policy"
              >
                {t('nav.refundPolicy')}
              </Link>
              <Link
                href="/terms-of-service"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground/80 hover-elevate active-elevate-2 rounded-md"
                data-testid="mobile-link-terms-of-service"
              >
                {t('nav.termsOfService')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
