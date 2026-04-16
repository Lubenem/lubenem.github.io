import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import heroImg from "@assets/interior-banner_1766933985315.jpg";

export function Hero() {
  const { t } = useI18n();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Spa Interior"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 bg-gradient-to-b from-black/50 via-transparent to-black/20 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 text-center text-white space-y-8 max-w-4xl mx-auto">
        <h1 
          data-aos="fade-up" 
          className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold tracking-wide drop-shadow-sm leading-tight"
        >
          {t("hero.title")}
        </h1>
        
        <p 
          data-aos="fade-up" 
          data-aos-delay="200"
          className="text-lg md:text-2xl font-light max-w-2xl mx-auto text-white/90 leading-relaxed"
        >
          {t("hero.subtitle")}
        </p>
        
        <div data-aos="fade-up" data-aos-delay="400">
          <Button 
            onClick={scrollToBooking}
            size="lg"
            className="rounded-full px-10 py-8 text-lg bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-xl border-none"
          >
            {t("hero.cta")}
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </div>
  );
}
