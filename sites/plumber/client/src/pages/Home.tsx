import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLanguage } from "@/lib/i18n";
import { Navbar } from "@/components/Navbar";
import { BookingForm } from "@/components/BookingForm";
import { MapPin, Phone, Droplets, Wrench, Settings, Sun, Star } from "lucide-react";

// Assets
import heroBg from "@assets/cool-company-car-banner_1766934286436.jpg";
import beforeImg from "@assets/before-dirty-pool_1766934286433.jpg";
import afterImg from "@assets/after-cleen-pool_1766934286432.jpg";
import pipesImg from "@assets/pipes_1766934286434.jpg";
import workImg from "@assets/plumber-at-work_1766934286435.jpg";

export default function Home() {
  const { t } = useLanguage();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-cyan-200 selection:text-cyan-900">
      <Navbar />

      {/* Hero Section */}
      <section 
        id="hero" 
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Pool Service Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
        </div>

        <div className="relative z-10 container px-4 text-center">
          <h1 
            data-aos="fade-up" 
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg"
          >
            {t.hero.title}
          </h1>
          <p 
            data-aos="fade-up" 
            data-aos-delay="100"
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light"
          >
            {t.hero.subtitle}
          </p>
          <div data-aos="fade-up" data-aos-delay="200">
            <button 
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-primary hover:bg-cyan-400 text-white font-bold rounded-full text-lg transition-all shadow-lg hover:shadow-cyan-500/50 hover:-translate-y-1"
            >
              {t.hero.cta}
            </button>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 z-[5] translate-y-1 pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#f8fafc" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">{t.nav.services}</span>
            <h2 className="text-4xl md:text-5xl mt-2 text-slate-900">{t.services.title}</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Droplets, title: t.services.cleaning.title, desc: t.services.cleaning.desc, color: "text-cyan-500", bg: "bg-cyan-50" },
              { icon: Settings, title: t.services.maintenance.title, desc: t.services.maintenance.desc, color: "text-blue-500", bg: "bg-blue-50" },
              { icon: Wrench, title: t.services.repair.title, desc: t.services.repair.desc, color: "text-indigo-500", bg: "bg-indigo-50" },
              { icon: Sun, title: t.services.opening.title, desc: t.services.opening.desc, color: "text-amber-500", bg: "bg-amber-50" },
            ].map((service, idx) => (
              <div 
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all border border-slate-100 group"
              >
                <div className={`w-14 h-14 ${service.bg} ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Transformation</span>
              <h2 className="text-4xl md:text-5xl mt-2 mb-6 text-slate-900 leading-tight">{t.beforeAfter.title}</h2>
              <p className="text-lg text-muted-foreground mb-8">{t.beforeAfter.subtitle}</p>
              
              <div className="flex gap-4">
                 <div className="flex items-center gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500" />
                   <span className="font-semibold text-slate-700">Dirty & Unsafe</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <div className="w-3 h-3 rounded-full bg-green-500" />
                   <span className="font-semibold text-slate-700">Clean & Balanced</span>
                 </div>
              </div>
            </div>

            <div data-aos="fade-left" className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-[2.5rem] opacity-30 blur-lg group-hover:opacity-50 transition-opacity" />
              <div className="relative grid grid-cols-2 gap-4">
                <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[3/4] translate-y-8">
                  <img src={beforeImg} alt="Dirty Pool" className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm">
                    {t.beforeAfter.before}
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[3/4]">
                  <img src={afterImg} alt="Clean Pool" className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    {t.beforeAfter.after}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-slate-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">{t.gallery.title}</h2>
            <p className="text-muted-foreground mt-4 text-lg">{t.gallery.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div data-aos="zoom-in" className="rounded-3xl overflow-hidden shadow-xl h-[300px] md:h-[400px] group relative">
              <img src={workImg} alt="Plumber at work" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <p className="text-white font-medium text-lg">Equipment Installation</p>
              </div>
            </div>
            <div data-aos="zoom-in" data-aos-delay="100" className="rounded-3xl overflow-hidden shadow-xl h-[300px] md:h-[400px] group relative">
              <img src={pipesImg} alt="Pipes system" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <p className="text-white font-medium text-lg">Filter Systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-12">{t.nav.reviews}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah J.", text: "Best pool service in Knoxville! They saved my green pool in just two visits.", stars: 5 },
              { name: "Mike T.", text: "Professional, punctual, and fair pricing. Highly recommend for weekly maintenance.", stars: 5 },
              { name: "Elena K.", text: "Чудовий сервіс! Хлопці знають свою справу. Басейн завжди чистий.", stars: 5 },
            ].map((review, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <div className="flex gap-1 mb-4 text-amber-400">
                  {[...Array(review.stars)].map((_, j) => <Star key={j} className="fill-current w-5 h-5" />)}
                </div>
                <p className="text-slate-600 mb-6 italic">"{review.text}"</p>
                <p className="font-bold text-slate-900">- {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-24 bg-gradient-to-b from-slate-50 to-blue-50/50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto" data-aos="fade-up">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-bold text-sm tracking-wide uppercase">Book Online</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 text-slate-900">{t.booking.title}</h2>
            <p className="text-lg text-muted-foreground">{t.booking.subtitle}</p>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="bg-slate-900 text-slate-300 py-16">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6 text-white">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-display font-bold text-xl text-primary">P</div>
                <span className="font-display font-bold text-xl">Pool Service.</span>
              </div>
              <p className="text-slate-400 mb-6">
                Professional pool care services serving the greater Knoxville area.
              </p>
              <div className="flex gap-4">
                {/* Social icons could go here */}
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span>Knoxville, TN<br/>United States</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <a href="tel:+18657425355" className="hover:text-white transition-colors">+1 865-742-5355</a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2 rounded-2xl overflow-hidden h-64 lg:h-full bg-slate-800">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206253.49129487545!2d-84.06836657997864!3d35.95837272895697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885c162246ce42a9%3A0x7faee9bc1e58b816!2sKnoxville%2C%20TN!5e0!3m2!1sen!2sus!4v1703612345678!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Service Area Map"
              ></iframe>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-16 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Pool Service Knoxville. {t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
