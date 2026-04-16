import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { BookingWizard } from "@/components/BookingWizard";
import { Footer } from "@/components/Footer";
import { useI18n } from "@/lib/i18n";

export default function Home() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <Gallery />
        
        {/* Booking Section */}
        <section id="booking" className="py-24 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                {t("booking.title")}
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                {t("hero.subtitle")}
              </p>
            </div>
            
            <BookingWizard />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
