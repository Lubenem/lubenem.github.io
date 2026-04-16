import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { useLanguage } from "@/lib/language-context";
import { Instagram, Mail, Star, Menu, X, Calendar as CalendarIcon, CheckCircle } from "lucide-react";
import logoImage from "@assets/318350077_206733795155671_5570383728523966967_n_1760601349950.jpg";
import heroImage from "@assets/337550173_1582060322273026_2404740228277806956_n_1760601349944.jpg";
import dumbbellsImage from "@assets/287265549_754399532303198_6849415501864139598_n_1760601349946.jpg";
import equipmentImage from "@assets/292208448_125632853300398_3411236962286694924_n_1760601349945.jpg";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const handleConfirmBooking = () => {
    if (selectedDate) {
      setBookingSuccess(true);
      setTimeout(() => {
        setBookingSuccess(false);
        setSelectedDate(undefined);
      }, 3000);
    }
  };

  const testimonials = [
    {
      name: "Kim Poumos",
      text: "We were looking for somewhere to train while on vacation, hands down this was the best gym that was super friendly, well equipped, clean gym. Great gym for some serious training. Will definitely be back again if we are ever in Boise again. Biggie (the dog) was the icing on the cake!!",
      rating: 5,
    },
    {
      name: "John U Guzel",
      text: "This gym truly exceeded my expectations! From the moment I walked in, I noticed how clean and organized everything was—it felt welcoming and motivating. The equipment is top-notch, making every workout feel like I'm getting the best.",
      rating: 5,
    },
    {
      name: "Cassie Reavis",
      text: "Boise Iron Gym is hands down the best gym! The equipment is top-notch, with a mix of new and old school equipment that will take your workouts to the next level. The environment and energy are unmatched, and the owner truly cares about the members.",
      rating: 5,
    },
  ];

  const galleryImages = [
    { src: heroImage, alt: "Gym interior with equipment" },
    { src: dumbbellsImage, alt: "Dumbbell rack" },
    { src: equipmentImage, alt: "Gym logo" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={logoImage}
              alt="Boise Iron Gym Logo"
              className="h-12 w-12 rounded-full object-cover"
              data-testid="img-logo-header"
            />
            <span className="font-display text-2xl tracking-wider" data-testid="text-brand-name">
              BOISE IRON GYM
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-semibold hover:text-primary transition-colors"
              data-testid="link-about"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-sm font-semibold hover:text-primary transition-colors"
              data-testid="link-testimonials"
            >
              {t.nav.testimonials}
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-sm font-semibold hover:text-primary transition-colors"
              data-testid="link-gallery"
            >
              {t.nav.gallery}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-semibold hover:text-primary transition-colors"
              data-testid="link-contact"
            >
              {t.nav.contact}
            </button>
            <div className="flex items-center gap-1 ml-4 border-l border-border pl-4" data-testid="language-toggle">
              <button
                onClick={() => setLanguage("en")}
                className={`text-sm font-semibold px-2 py-1 rounded transition-colors ${language === "en" ? "bg-primary text-primary-foreground" : "hover:text-primary"}`}
                data-testid="button-lang-en"
              >
                EN
              </button>
              <span className="text-muted-foreground">|</span>
              <button
                onClick={() => setLanguage("ua")}
                className={`text-sm font-semibold px-2 py-1 rounded transition-colors ${language === "ua" ? "bg-primary text-primary-foreground" : "hover:text-primary"}`}
                data-testid="button-lang-ua"
              >
                UA
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            data-testid="button-mobile-menu"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <nav className="flex flex-col p-6 gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-lg font-semibold hover:text-primary transition-colors"
                data-testid="link-about-mobile"
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-left text-lg font-semibold hover:text-primary transition-colors"
                data-testid="link-testimonials-mobile"
              >
                {t.nav.testimonials}
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-left text-lg font-semibold hover:text-primary transition-colors"
                data-testid="link-gallery-mobile"
              >
                {t.nav.gallery}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-lg font-semibold hover:text-primary transition-colors"
                data-testid="link-contact-mobile"
              >
                {t.nav.contact}
              </button>
              <div className="flex items-center gap-2 pt-4 border-t border-border" data-testid="language-toggle-mobile">
                <button
                  onClick={() => setLanguage("en")}
                  className={`text-lg font-semibold px-3 py-1 rounded transition-colors ${language === "en" ? "bg-primary text-primary-foreground" : "hover:text-primary"}`}
                  data-testid="button-lang-en-mobile"
                >
                  EN
                </button>
                <span className="text-muted-foreground">|</span>
                <button
                  onClick={() => setLanguage("ua")}
                  className={`text-lg font-semibold px-3 py-1 rounded transition-colors ${language === "ua" ? "bg-primary text-primary-foreground" : "hover:text-primary"}`}
                  data-testid="button-lang-ua-mobile"
                >
                  UA
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center z-10">
          <img
            src={logoImage}
            alt="Boise Iron Gym"
            className="h-32 w-32 mx-auto mb-8 rounded-full object-cover"
            data-testid="img-logo-hero"
          />
          <h1
            className="font-display text-6xl md:text-8xl mb-6 tracking-wider"
            data-testid="text-hero-title"
          >
            BOISE IRON GYM
          </h1>
          <p className="text-2xl md:text-3xl mb-4 text-muted-foreground font-semibold" data-testid="text-tagline">
            {t.hero.tagline}
          </p>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto" data-testid="text-hero-subtitle">
            {t.footer.tagline}
          </p>
          <Button
            size="lg"
            variant="default"
            onClick={() => scrollToSection("contact")}
            className="text-lg px-8 py-6 font-bold"
            data-testid="button-cta-hero"
          >
            {t.hero.cta}
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src={dumbbellsImage}
                alt="Gym equipment"
                className="w-full h-[400px] object-cover rounded-md"
                data-testid="img-about"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-display text-5xl md:text-6xl mb-6 tracking-wider" data-testid="text-about-title">
                {t.about.title}
              </h2>
              <p className="text-lg mb-4 text-muted-foreground leading-relaxed" data-testid="text-about-paragraph-1">
                {t.about.paragraph1}
              </p>
              <p className="text-lg mb-4 text-muted-foreground leading-relaxed" data-testid="text-about-paragraph-2">
                {t.about.paragraph2}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-about-paragraph-3">
                {t.about.paragraph3}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="font-display text-5xl md:text-6xl text-center mb-12 tracking-wider"
            data-testid="text-testimonials-title"
          >
            {t.testimonials.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover-elevate transition-transform duration-300"
                data-testid={`card-testimonial-${index}`}
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{testimonial.text}</p>
                  <p className="font-semibold" data-testid={`text-reviewer-${index}`}>
                    — {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="font-display text-5xl md:text-6xl text-center mb-12 tracking-wider"
            data-testid="text-gallery-title"
          >
            {t.gallery.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-md group cursor-pointer"
                data-testid={`img-gallery-${index}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="font-display text-5xl md:text-6xl text-center mb-12 tracking-wider"
            data-testid="text-contact-title"
          >
            {t.contact.title}
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Appointment Booking */}
            <div className="lg:col-span-1">
              <h3 className="font-display text-3xl mb-6 tracking-wider" data-testid="text-booking-title">{t.contact.bookingTitle}</h3>
              <Card data-testid="card-book-appointment">
                <CardContent className="p-6 flex flex-col items-center">
                  {bookingSuccess ? (
                    <div className="flex flex-col items-center gap-4 py-8">
                      <CheckCircle className="h-16 w-16 text-green-500" />
                      <p className="text-xl font-semibold text-green-500" data-testid="text-booking-success">
                        {t.contact.successTitle}
                      </p>
                      <p className="text-muted-foreground text-center">
                        {t.contact.successMessage}{" "}
                        <span className="font-semibold text-foreground">
                          {selectedDate?.toLocaleDateString(language === "ua" ? "uk-UA" : "en-US", { weekday: "long", month: "long", day: "numeric" })}
                        </span>
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center gap-2 mb-4">
                        <CalendarIcon className="h-5 w-5 text-primary" />
                        <p className="text-lg font-semibold">{t.contact.selectDate}</p>
                      </div>
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                        className="rounded-md border border-border"
                        data-testid="calendar-picker"
                      />
                      {selectedDate && (
                        <div className="mt-4 w-full text-center">
                          <p className="text-sm text-muted-foreground mb-3">
                            {t.contact.selected} <span className="font-semibold text-foreground">{selectedDate.toLocaleDateString(language === "ua" ? "uk-UA" : "en-US", { weekday: "long", month: "long", day: "numeric" })}</span>
                          </p>
                          <Button 
                            size="lg" 
                            className="w-full" 
                            onClick={handleConfirmBooking}
                            data-testid="button-confirm-booking"
                          >
                            {t.contact.confirmButton}
                          </Button>
                        </div>
                      )}
                    </>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Map */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="font-display text-3xl mb-6 tracking-wider" data-testid="text-contact-info-title">{t.contact.contactInfoTitle}</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <a
                      href="mailto:flexdaddy43@gmail.com"
                      className="text-lg hover:text-primary transition-colors"
                      data-testid="link-email"
                    >
                      flexdaddy43@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-lg mb-2 font-semibold" data-testid="text-instagram-label">{t.contact.instagramLabel}</p>
                    <div className="flex flex-col gap-1">
                      <a
                        href="https://www.instagram.com/boise_iron_gym/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                        data-testid="link-instagram-1"
                      >
                        <Instagram className="h-5 w-5 text-primary" />
                        <span data-testid="text-instagram-1">@boise_iron_gym</span>
                      </a>
                      <a
                        href="https://www.instagram.com/boise.iron.gym/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                        data-testid="link-instagram-2"
                      >
                        <Instagram className="h-5 w-5 text-primary" />
                        <span data-testid="text-instagram-2">@boise.iron.gym</span>
                      </a>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-lg font-semibold mb-1" data-testid="text-address-label">{t.contact.addressLabel}</p>
                      <p className="text-muted-foreground text-sm" data-testid="text-address-line1">10379 Fairview Ave</p>
                      <p className="text-muted-foreground text-sm" data-testid="text-address-line2">Boise, ID 83704</p>
                    </div>
                    <div>
                      <p className="text-lg font-semibold mb-1" data-testid="text-hours-label">{t.contact.hoursLabel}</p>
                      <p className="text-muted-foreground text-sm" data-testid="text-hours-weekday">{t.contact.weekdayHours}</p>
                      <p className="text-muted-foreground text-sm" data-testid="text-hours-weekend">{t.contact.weekendHours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div>
                <h3 className="font-display text-3xl mb-4 tracking-wider" data-testid="text-location-title">{t.contact.locationTitle}</h3>
                <div className="w-full h-[280px] rounded-md overflow-hidden">
                  <iframe
                    src="https://maps.google.com/maps?q=10379+Fairview+Ave,+Boise,+ID+83704&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={t.contact.mapTitle}
                    data-testid="iframe-map"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center md:items-start">
              <img
                src={logoImage}
                alt="Boise Iron Gym"
                className="h-16 w-16 rounded-full object-cover mb-4"
                data-testid="img-logo-footer"
              />
              <p className="font-display text-xl tracking-wider" data-testid="text-footer-brand">BOISE IRON GYM</p>
              <p className="text-sm text-muted-foreground mt-2" data-testid="text-footer-tagline">{t.footer.tagline}</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-4" data-testid="text-footer-quicklinks">{t.footer.quickLinks}</h4>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-primary transition-colors"
                  data-testid="link-footer-about"
                >
                  {t.nav.about}
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="hover:text-primary transition-colors"
                  data-testid="link-footer-testimonials"
                >
                  {t.nav.testimonials}
                </button>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="hover:text-primary transition-colors"
                  data-testid="link-footer-gallery"
                >
                  {t.nav.gallery}
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-primary transition-colors"
                  data-testid="link-footer-contact"
                >
                  {t.nav.contact}
                </button>
              </div>
            </div>
            <div className="text-center md:text-right">
              <h4 className="font-semibold mb-4" data-testid="text-footer-connect">{t.footer.connect}</h4>
              <div className="flex gap-4 justify-center md:justify-end">
                <a
                  href="https://www.instagram.com/boise_iron_gym/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  data-testid="link-footer-instagram-1"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://www.instagram.com/boise.iron.gym/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  data-testid="link-footer-instagram-2"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="mailto:flexdaddy43@gmail.com"
                  className="hover:text-primary transition-colors"
                  data-testid="link-footer-email"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p data-testid="text-copyright">
              © {new Date().getFullYear()} Boise Iron Gym. {t.footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
