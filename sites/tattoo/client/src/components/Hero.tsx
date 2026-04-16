import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";
import bannerImg from "@assets/banner_1762631894817.jpg";

export default function Hero() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1
          className="font-['Bebas_Neue'] text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-primary mb-6 tracking-wider"
          data-testid="text-hero-title"
        >
          {t.hero.title}
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-white mb-4 font-light max-w-2xl mx-auto leading-relaxed">
          {t.hero.subtitle}
        </p>
        
        <p className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          {t.hero.description}
        </p>
        
        <Button
          size="lg"
          className="text-lg px-8 py-6 bg-primary/90 backdrop-blur-md hover:bg-primary text-primary-foreground font-semibold"
          onClick={scrollToContact}
          data-testid="button-book-consultation"
        >
          {t.hero.cta}
        </Button>
      </div>
    </section>
  );
}
