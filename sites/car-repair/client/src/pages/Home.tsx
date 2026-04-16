import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/components/LanguageContext";
import { motion } from "framer-motion";
import { Wrench, Disc, Activity, Thermometer, Car, Star, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookingCalendar } from "@/components/BookingCalendar";

// Images
import heroBg from "@assets/multiple-cars-banner_1766927706111.jpg";
import car1 from "@assets/car1_1766927706144.jpg";
import car2 from "@assets/car2_1766927706126.jpg";
import car3 from "@assets/car3_1766927706117.jpg";

export default function Home() {
  const { t } = useLanguage();

  const handleBookingSubmit = (data: { date: string; time: string }) => {
    alert(`Appointment requested for ${data.date} at ${data.time}!`);
  };

  const services = [
    { icon: Wrench, ...t.services.items.alignment },
    { icon: Disc, ...t.services.items.brakes },
    { icon: Activity, ...t.services.items.diagnostics },
    { icon: Thermometer, ...t.services.items.hvac },
    { icon: Car, ...t.services.items.maintenance },
  ];

  const galleryImages = [car1, car2, car3];

  const testimonials = [
    { text: t.testimonials.t1, author: "Jeff Moore", stars: 5 },
    { text: t.testimonials.t2, author: "Colleen Lofgren", stars: 5 },
    { text: t.testimonials.t3, author: "Dinkle Burg", stars: 5 },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Parallax-ish */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Auto Service Shop" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/70 to-primary/40" />
        </div>

        <div className="container relative z-10 px-4 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block py-1 px-3 border border-white/20 rounded-full bg-white/10 backdrop-blur-md text-accent-foreground text-sm font-bold uppercase tracking-widest mb-6"
          >
            {t.hero.subtitle}
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white uppercase leading-tight mb-6 max-w-4xl mx-auto drop-shadow-xl"
          >
            {t.hero.title}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-white/80 font-light mb-10 tracking-wide"
          >
            {t.hero.since}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button 
              size="lg" 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wider text-lg px-8 py-6 rounded-none skew-x-[-10deg] shadow-[5px_5px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              <span className="skew-x-[10deg]">{t.hero.cta}</span>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading title={t.services.title} subtitle={t.services.subtitle} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                  <CardContent className="p-8">
                    <div className="mb-6 w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                      <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 font-display uppercase tracking-wide text-primary">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.desc}
                    </p>
                  </CardContent>
                  <div className="h-1 w-0 bg-accent group-hover:w-full transition-all duration-500" />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading title={t.gallery.title} subtitle={t.gallery.subtitle} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative group aspect-[4/3] overflow-hidden rounded-xl shadow-md cursor-pointer"
              >
                <img 
                  src={img} 
                  alt={`Gallery car ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading title={t.testimonials.title} light />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-accent/50 transition-colors"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(item.stars)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-lg italic text-white/90 mb-6 leading-relaxed">"{item.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center font-bold font-display">
                    {item.author[0]}
                  </div>
                  <span className="font-medium font-display tracking-wider">{item.author}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Booking Section */}
      <section id="contact" className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-2xl overflow-hidden">
            
            {/* Info Panel */}
            <div className="bg-primary text-white p-12 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
              
              <div className="relative z-10">
                <h3 className="text-3xl font-display font-bold mb-2">{t.contact.title}</h3>
                <p className="text-white/70 mb-10">{t.contact.subtitle}</p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Expert Mechanics</h4>
                      <p className="text-sm text-white/60">ASE Certified technicians with decades of experience.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Fair Pricing</h4>
                      <p className="text-sm text-white/60">Transparent quotes and no hidden fees ever.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Quality Parts</h4>
                      <p className="text-sm text-white/60">We use only high-quality OEM or equivalent parts.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
                <p className="font-display text-2xl font-bold text-accent">+1 706-650-3130</p>
                <p className="text-white/50 text-sm">Call us directly for immediate assistance</p>
              </div>
            </div>

            {/* Booking Calendar Panel */}
            <div className="p-8 bg-white dark:bg-card">
              <h4 className="text-lg font-bold text-primary mb-4 uppercase tracking-wider">{t.contact.bookAppointment}</h4>
              <BookingCalendar onBookingSubmit={handleBookingSubmit} />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
