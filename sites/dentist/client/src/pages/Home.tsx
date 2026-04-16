import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AppointmentForm } from "@/components/AppointmentForm";
import { useLanguage } from "@/lib/LanguageContext";
import { 
  Stethoscope, 
  Sparkles, 
  Smile, 
  HeartPulse, 
  Clock, 
  ArrowRight,
  CheckCircle2,
  Quote,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";

import heroBg from "@assets/clinic-exterior_1766906019377.jpg";
import teamImg from "@assets/crew-group-picture_1766906019379.jpg";
import interiorImg from "@assets/clinic-Interior_1766906019377.jpg";

export default function Home() {
  const { t, language } = useLanguage();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      offset: 100,
    });
  }, []);

  const services = [
    {
      icon: <Stethoscope className="w-8 h-8 text-white" />,
      title: t.services.generalDentistry,
      description: t.services.generalDesc,
    },
    {
      icon: <Sparkles className="w-8 h-8 text-white" />,
      title: t.services.cosmeticDentistry,
      description: t.services.cosmeticDesc,
    },
    {
      icon: <Smile className="w-8 h-8 text-white" />,
      title: t.services.orthodontics,
      description: t.services.orthodonticsDesc,
    },
    {
      icon: <HeartPulse className="w-8 h-8 text-white" />,
      title: t.services.pediatricDentistry,
      description: t.services.pediatricDesc,
    },
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      title: t.services.emergencyCare,
      description: t.services.emergencyDesc,
    },
  ];

  const testimonials = language === "ua" ? [
    {
      quote: "Найкращий досвід відвідування стоматолога! Доктор Грей та команда такі ніжні та привітні!",
      author: "Марія Коваленко",
      role: "Пацієнтка з 2019"
    },
    {
      quote: "Нарешті стоматолог, якого я не боюся відвідувати. Офіс красивий, а персонал ставиться як до рідних.",
      author: "Олександр Петренко",
      role: "Пацієнт з 2021"
    },
    {
      quote: "Неймовірні результати з Invisalign. Не можу перестати посміхатися завдяки Gray Family Dental.",
      author: "Анна Шевченко",
      role: "Пацієнтка ортодонтії"
    }
  ] : [
    {
      quote: "The best dental experience I've ever had. Dr. Gray and the team are so gentle and welcoming!",
      author: "Sarah Jenkins",
      role: "Patient since 2019"
    },
    {
      quote: "Finally a dentist I don't dread visiting. The office is beautiful and the staff makes you feel like family.",
      author: "Michael Ross",
      role: "Patient since 2021"
    },
    {
      quote: "Incredible results with my Invisalign treatment. I can't stop smiling thanks to Gray Family Dental.",
      author: "Jessica Lee",
      role: "Orthodontics Patient"
    }
  ];

  const aboutFeatures = language === "ua" 
    ? ["Сучасні технології", "Комфортне середовище", "Дитяча та доросла стоматологія", "Індивідуальні плани лікування"]
    : ["State-of-the-art Technology", "Comfortable, Relaxing Environment", "Pediatric & Adult Care", "Personalized Treatment Plans"];

  return (
    <div className="min-h-screen font-sans bg-background overflow-x-hidden">
      <Navigation />

      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Clinic Exterior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40 md:to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6 pt-20">
          <div className="max-w-2xl" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              {language === "ua" ? "Приймаємо нових пацієнтів" : "Accepting New Patients"}
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {language === "ua" ? (
                <>Ваша посмішка — <br /><span className="text-secondary">наш пріоритет.</span></>
              ) : (
                <>Your Smile, <br /><span className="text-secondary">Our Passion.</span></>
              )}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-lg">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="h-14 px-8 rounded-full text-lg bg-white text-primary hover:bg-white/90 shadow-xl shadow-black/10"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                data-testid="hero-book-appointment"
              >
                {t.hero.bookAppointment}
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="h-14 px-8 rounded-full text-lg border-white/40 text-white hover:bg-white/10 backdrop-blur-sm"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                data-testid="hero-learn-more"
              >
                {t.hero.learnMore}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-border/40 relative z-20 -mt-8 mx-4 md:mx-auto max-w-6xl rounded-2xl shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          <div className="flex items-center gap-4 border-b md:border-b-0 md:border-r border-border/50 pb-6 md:pb-0">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg">{language === "ua" ? "Гнучкий графік" : "Flexible Hours"}</h3>
              <p className="text-muted-foreground text-sm">{language === "ua" ? "Відкрито вечорами та у вихідні" : "Open evenings & weekends"}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 border-b md:border-b-0 md:border-r border-border/50 pb-6 md:pb-0">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <HeartPulse className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg">{language === "ua" ? "Приймаємо страхування" : "Insurance Accepted"}</h3>
              <p className="text-muted-foreground text-sm">{language === "ua" ? "Ми займаємося документами" : "We handle the paperwork"}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg">{language === "ua" ? "Експертна команда" : "Expert Team"}</h3>
              <p className="text-muted-foreground text-sm">{language === "ua" ? "Сертифіковані професіонали" : "Certified professionals"}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-padding bg-secondary/30 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative" data-aos="fade-right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] z-10">
                <img 
                  src={teamImg} 
                  alt="Our Dental Team" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-0"></div>
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-0"></div>
              <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-xs animate-bounce-slow hidden md:block">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
                    ))}
                  </div>
                  <span className="font-bold text-primary">5000+</span>
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  {language === "ua" ? "Щасливих посмішок створено в Детройті." : "Happy smiles created across Detroit."}
                </p>
              </div>
            </div>

            <div data-aos="fade-left">
              <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">
                {language === "ua" ? "Хто ми" : "Who We Are"}
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                {language === "ua" ? (
                  <>Досконалість у стоматології, <br/> заснована на сімейних цінностях.</>
                ) : (
                  <>Excellence in Dentistry, <br/> Rooted in Family Values.</>
                )}
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {t.about.description}
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t.about.mission}
              </p>
              
              <ul className="space-y-4 mb-8">
                {aboutFeatures.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Button variant="outline" className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-white transition-colors" size="lg" data-testid="meet-dr-gray">
                {language === "ua" ? "Познайомтеся з доктором Грей" : "Meet Dr. Gray"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section-padding bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <span className="text-white/70 font-bold tracking-wider uppercase text-sm mb-2 block">
              {language === "ua" ? "Наш досвід" : "Our Expertise"}
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">{t.services.title}</h2>
            <p className="text-white/80 text-lg">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/20 transition-all hover:-translate-y-1 duration-300 group"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                data-testid={`service-card-${idx}`}
              >
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-white transition-colors">
                  {language === "ua" ? "Дізнатися більше" : "Learn More"} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-secondary/20 rounded-3xl p-8 md:p-12 lg:p-16 border border-border/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div data-aos="fade-right">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                  {language === "ua" ? (
                    <>Сучасний комфорт зустрічає <br/> передові технології</>
                  ) : (
                    <>Modern Comfort Meets <br/> Advanced Technology</>
                  )}
                </h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  {language === "ua" 
                    ? "Наша клініка розроблена з урахуванням вашого комфорту. Від заспокійливої зони очікування до кабінетів, обладнаних шумопоглинаючими навушниками та телевізорами на стелі — ми робимо стоматологію розслаблюючою."
                    : "Our clinic is designed with your comfort in mind. From our calming waiting area to our treatment rooms equipped with noise-cancelling headphones and ceiling-mounted TVs, we make dentistry relaxing."
                  }
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 bg-white rounded-xl shadow-sm border border-border/50">
                    <h4 className="font-bold text-lg mb-1">{language === "ua" ? "Цифрові рентгени" : "Digital X-Rays"}</h4>
                    <p className="text-sm text-muted-foreground">{language === "ua" ? "Низьке випромінювання, миттєві результати" : "Low radiation, instant results"}</p>
                  </div>
                  <div className="p-4 bg-white rounded-xl shadow-sm border border-border/50">
                    <h4 className="font-bold text-lg mb-1">{language === "ua" ? "Інтраоральні камери" : "Intraoral Cameras"}</h4>
                    <p className="text-sm text-muted-foreground">{language === "ua" ? "Бачте те, що бачимо ми" : "See what we see"}</p>
                  </div>
                </div>
              </div>
              <div className="relative h-full min-h-[300px]" data-aos="fade-left">
                <img 
                  src={interiorImg} 
                  alt="Modern Dental Interior" 
                  className="rounded-2xl shadow-xl w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">{t.testimonials.title}</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-2xl shadow-lg border border-border/50 flex flex-col relative"
                data-aos="fade-up"
                data-aos-delay={idx * 150}
                data-testid={`testimonial-card-${idx}`}
              >
                <Quote className="w-10 h-10 text-accent/20 absolute top-6 right-6" />
                <div className="flex-1 mb-6">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(star => (
                      <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground italic text-lg leading-relaxed">"{testimonial.quote}"</p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.author}</h4>
                  <p className="text-sm text-accent font-medium">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-padding bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            <div data-aos="fade-right">
              <AppointmentForm />
            </div>

            <div className="space-y-8" data-aos="fade-left">
              <div>
                <h2 className="text-4xl font-display font-bold text-primary mb-4">{t.contact.title}</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  {t.contact.subtitle}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-border/50">
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-accent" /> {t.contact.hours}
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li className="flex justify-between"><span>{language === "ua" ? "Пн - Чт:" : "Mon - Thu:"}</span> <span>8:00 AM - 6:00 PM</span></li>
                      <li className="flex justify-between"><span>{language === "ua" ? "П'ятниця:" : "Friday:"}</span> <span>8:00 AM - 2:00 PM</span></li>
                      <li className="flex justify-between"><span>{language === "ua" ? "Вихідні:" : "Weekend:"}</span> <span>{language === "ua" ? "За записом" : "By Appointment"}</span></li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-border/50">
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <Phone className="w-5 h-5 text-accent" /> {t.contact.phone}
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>(313) 555-0123</li>
                      <li>info@grayfamilydental.com</li>
                      <li>{language === "ua" ? "Екстрена лінія:" : "Emergency line:"} (313) 555-9999</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-lg border border-border/50 relative bg-gray-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.3364969248235!2d-83.06346912346937!3d42.35637283526955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2d31215b4971%3A0xc30424a1b025d5d8!2sMidtown%2C%20Detroit%2C%20MI!5e0!3m2!1sen!2sus!4v1716928000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Clinic Location"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
