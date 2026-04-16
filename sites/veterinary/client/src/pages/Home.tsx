import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link as ScrollLink } from "react-scroll";
import { useLanguage } from "@/hooks/use-language";
import { LanguageToggle } from "@/components/LanguageToggle";
import { AppointmentForm } from "@/components/AppointmentForm";
import { ServiceCard } from "@/components/ServiceCard";
import { 
  Heart, 
  Stethoscope, 
  Syringe, 
  Scissors, 
  Bone, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram,
  Clock,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

// Images imports
import logo from "@assets/favicon.jpg";
import heroBg from "@assets/cute-small-dogs-banner.jpg";
import gallery1 from "@assets/funny-dog.jpg";
import gallery2 from "@assets/funny-dog-2.jpg";
import gallery3 from "@assets/funny-cat.jpg";

export default function Home() {
  const { t, locale, setLocale } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const navItems = [
    { key: 'home', to: 'home' },
    { key: 'services', to: 'services' },
    { key: 'patients', to: 'patients' },
    { key: 'contact', to: 'contact' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      
      {/* --- HEADER --- */}
      <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="La Fond Vet Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-primary object-cover shadow-sm" />
            <div className="leading-tight">
              <h1 className="font-bold text-lg md:text-xl text-primary tracking-tight">La Fond</h1>
              <span className="text-xs text-muted-foreground tracking-widest uppercase">Veterinary Hospital</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <ScrollLink 
                key={item.key} 
                to={item.to} 
                smooth={true} 
                offset={-100}
                className="text-sm font-semibold text-gray-600 hover:text-primary cursor-pointer transition-colors relative group"
              >
                {t.nav[item.key as keyof typeof t.nav]}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </ScrollLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <LanguageToggle current={locale} onChange={setLocale} />
            <ScrollLink to="booking" smooth={true} offset={-100}>
              <button className="bg-accent hover:bg-accent/90 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5 active:translate-y-0 text-sm">
                {t.nav.book}
              </button>
            </ScrollLink>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <LanguageToggle current={locale} onChange={setLocale} />
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-gray-600">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 p-4 shadow-lg absolute w-full">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <ScrollLink 
                  key={item.key} 
                  to={item.to} 
                  smooth={true} 
                  offset={-80}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-800 py-2 border-b border-gray-50"
                >
                  {t.nav[item.key as keyof typeof t.nav]}
                </ScrollLink>
              ))}
              <ScrollLink to="booking" smooth={true} offset={-80} onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full bg-primary text-white py-3 rounded-xl font-bold mt-2">
                  {t.nav.book}
                </button>
              </ScrollLink>
            </div>
          </div>
        )}
      </header>

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Cute dogs banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-xl" data-aos="fade-right">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-bold mb-6 shadow-sm border border-secondary-foreground/10">
              Open Mon-Sat • 9AM - 6PM
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1]">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
              {t.hero.subtitle}
            </p>
            <div className="flex gap-4">
              <ScrollLink to="booking" smooth={true} offset={-100}>
                <button className="px-8 py-4 bg-primary text-white rounded-full font-bold text-lg shadow-xl shadow-primary/30 hover:shadow-2xl hover:bg-primary/90 hover:-translate-y-1 transition-all">
                  {t.hero.cta}
                </button>
              </ScrollLink>
              <ScrollLink to="services" smooth={true} offset={-100}>
                <button className="px-8 py-4 bg-white text-foreground rounded-full font-bold text-lg shadow-lg border border-gray-100 hover:border-primary/20 hover:text-primary transition-all">
                  {t.nav.services}
                </button>
              </ScrollLink>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-24 bg-secondary/20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">{t.services.title}</h2>
            <div className="h-1.5 w-20 bg-primary mx-auto rounded-full"></div>
            <p className="mt-4 text-muted-foreground text-lg">Comprehensive veterinary care tailored to your pet's specific needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              icon={Stethoscope} 
              title={t.services.wellness} 
              description="Comprehensive physical exams to keep your pet healthy and catch issues early." 
              delay={0}
            />
            <ServiceCard 
              icon={Syringe} 
              title={t.services.vaccines} 
              description="Core and non-core vaccines tailored to your pet's lifestyle and risk factors." 
              delay={100}
            />
            <ServiceCard 
              icon={Scissors} 
              title={t.services.surgery} 
              description="State-of-the-art surgical suite for spays, neuters, and soft tissue procedures." 
              delay={200}
            />
            <ServiceCard 
              icon={Bone} 
              title={t.services.dental} 
              description="Professional cleaning and polishing to prevent periodontal disease and tooth loss." 
              delay={300}
            />
          </div>
        </div>
      </section>

      {/* --- BOOKING SECTION --- */}
      <section id="booking" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            <div className="lg:w-1/2 space-y-6" data-aos="fade-right">
              <h2 className="text-4xl font-bold text-foreground leading-tight">
                Ready for a visit?<br/>
                <span className="text-primary">Book online instantly.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Skip the phone call! Select a time that works for you using our real-time scheduler. We look forward to meeting you and your furry friend.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 p-4 bg-secondary/20 rounded-2xl">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary-dark" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Hours of Operation</h4>
                    <p className="text-sm text-muted-foreground">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-secondary/20 rounded-2xl">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary-dark" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Urgent Questions?</h4>
                    <p className="text-sm text-muted-foreground">Call us at (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full" data-aos="fade-left">
              <AppointmentForm />
            </div>

          </div>
        </div>
      </section>

      {/* --- HAPPY PATIENTS GALLERY --- */}
      <section id="patients" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">{t.nav.patients}</h2>
            <div className="h-1.5 w-20 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-3xl overflow-hidden shadow-lg group relative aspect-square" data-aos="zoom-in">
              <img src={gallery1} alt="Funny dog" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-bold text-xl">Max, 3 years</p>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg group relative aspect-square" data-aos="zoom-in" data-aos-delay="100">
              <img src={gallery2} alt="Funny dog 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-bold text-xl">Bella, 5 years</p>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg group relative aspect-square" data-aos="zoom-in" data-aos-delay="200">
              <img src={gallery3} alt="Funny cat" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-bold text-xl">Whiskers, 2 years</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER / CONTACT --- */}
      <section id="contact" className="bg-foreground text-white pt-20 pb-10 rounded-t-[3rem]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <img src={logo} alt="Logo" className="w-12 h-12 rounded-full border-2 border-primary/50" />
                <h3 className="text-2xl font-bold">La Fond Vet</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Dedicated to providing the highest quality veterinary care with compassion and integrity.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-bold text-primary">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-gray-300">123 Pet Wellness Lane<br/>San Francisco, CA 94110</span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-gray-300">(555) 123-4567</span>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-gray-300">hello@lafondvet.com</span>
                </li>
              </ul>
            </div>

            <div className="h-64 rounded-2xl overflow-hidden border border-white/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.063683074092!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter+HQ!5e0!3m2!1sen!2sus!4v1532986423984"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </div>

          </div>

          <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} La Fond Veterinary Hospital. All rights reserved.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
