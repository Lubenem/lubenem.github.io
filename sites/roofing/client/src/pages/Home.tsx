import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navbar } from "@/components/Navbar";
import { useLanguage } from "@/hooks/use-language";
import { ServiceCard } from "@/components/ServiceCard";
import { SimpleBookingCalendar } from "@/components/SimpleBookingCalendar";
import { useToast } from "@/hooks/use-toast";
import { 
  Hammer, 
  Home as HomeIcon, 
  ShieldAlert, 
  Wrench, 
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Star
} from "lucide-react";

// Assets
import heroBg from "@assets/crew-on-roof-banner_1766947893472.jpg";
import roofTopDown from "@assets/roof-top-down-cool-angle_1766947893473.jpg";
import rooferWork1 from "@assets/roofer-at-work_1766947893473.jpg";
import rooferWork2 from "@assets/roofer-at-work-2_1766947893472.jpg";
import favicon from "@assets/favicon_1766947893471.jpg";

export default function Home() {
  const { t } = useLanguage();
  const { toast } = useToast();

  const onBookingComplete = (date: string, time: string) => {
    toast({
      title: "Appointment Requested!",
      description: `Appointment requested for ${date} at ${time}!`,
    });
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const services = [
    {
      id: "roofing",
      icon: HomeIcon,
      title: t('services.roofing'),
      description: t('services.roofing_desc')
    },
    {
      id: "repair",
      icon: Hammer,
      title: t('services.repair'),
      description: t('services.repair_desc')
    },
    {
      id: "siding",
      icon: ShieldAlert,
      title: t('services.siding'),
      description: t('services.siding_desc')
    },
    {
      id: "remodeling",
      icon: Wrench,
      title: t('services.remodeling'),
      description: t('services.remodeling_desc')
    }
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden font-sans">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Roofing Crew" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 md:bg-black/50" /> 
        </div>

        <div className="container relative z-10 px-4 text-center">
          <div data-aos="fade-up" className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              {t('hero.headline')}
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light tracking-wide">
              {t('hero.subhead')}
            </p>
            <button 
              onClick={() => setIsCalendlyOpen(true)}
              className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold text-lg uppercase tracking-wider rounded-sm shadow-xl shadow-primary/20 hover:transform hover:-translate-y-1 transition-all duration-300"
            >
              {t('hero.cta')}
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">
              Professional Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary">
              {t('services.title')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <ServiceCard 
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={idx * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS GALLERY */}
      <section id="projects" className="py-24 bg-white border-y border-border/40 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div data-aos="fade-right">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">
                Portfolio
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary">
                {t('projects.title')}
              </h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-md" data-aos="fade-left">
              {t('projects.caption')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
            {/* Main Featured Image */}
            <div 
              className="md:col-span-8 h-[300px] md:h-full relative overflow-hidden group rounded-sm"
              data-aos="zoom-in"
            >
              <img 
                src={roofTopDown} 
                alt="Featured Project" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
            </div>

            {/* Side Grid */}
            <div className="md:col-span-4 flex flex-col gap-6 h-full">
              <div 
                className="flex-1 relative overflow-hidden group rounded-sm h-[250px] md:h-auto"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <img 
                  src={rooferWork1} 
                  alt="Work in Progress 1" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div 
                className="flex-1 relative overflow-hidden group rounded-sm h-[250px] md:h-auto"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <img 
                  src={rooferWork2} 
                  alt="Work in Progress 2" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-secondary text-white relative z-0 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" data-aos="fade-up">
            {t('testimonials.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "Incredible attention to detail. The crew was professional and cleaned up perfectly.", author: "James Peterson", location: "Wauwatosa, WI" },
              { text: "My roof looks amazing. Northern Generations delivered exactly what they promised.", author: "Sarah Miller", location: "Milwaukee, WI" },
              { text: "Honest pricing and high-quality workmanship. Highly recommend!", author: "Michael Kors", location: "Brookfield, WI" }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white/5 p-8 rounded-sm backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="flex gap-1 mb-4 text-primary">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">"{item.text}"</p>
                <div>
                  <h4 className="text-white font-bold font-display tracking-wide">{item.author}</h4>
                  <span className="text-sm text-gray-400">{item.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPOINTMENT / CONTACT */}
      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Contact Info */}
            <div data-aos="fade-right">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">
                Get In Touch
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-8">
                {t('contact.title')}
              </h2>
              <p className="text-muted-foreground text-lg mb-10">
                Ready to start your project? Contact us for a free estimate or emergency service. We respond within 24 hours.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white border border-border rounded-sm text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-secondary mb-1">Address</h5>
                    <p className="text-muted-foreground">6326 W Bluemound Rd,<br/>Wauwatosa, WI 53213</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white border border-border rounded-sm text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-secondary mb-1">Phone</h5>
                    <a href="tel:+12622022481" className="text-muted-foreground hover:text-primary transition-colors">
                      +1 262-202-2481
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white border border-border rounded-sm text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-secondary mb-1">Email</h5>
                    <a href="mailto:info@northerngenerations.com" className="text-muted-foreground hover:text-primary transition-colors">
                      info@northerngenerations.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-3 bg-secondary text-white rounded-sm hover:bg-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-3 bg-secondary text-white rounded-sm hover:bg-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Booking Calendar Section */}
            <div id="appointment" className="bg-white p-8 md:p-10 rounded-sm shadow-xl shadow-black/5 border border-border" data-aos="fade-left">
              <h3 className="text-2xl font-bold mb-2 text-secondary">{t('contact.schedule_title')}</h3>
              <p className="text-muted-foreground mb-6">Select a convenient time for your free inspection</p>
              <SimpleBookingCalendar onBookingComplete={onBookingComplete} />
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <div className="h-[400px] w-full grayscale contrast-125">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2915.289656499898!2d-88.0039235!3d43.0408544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88051a6932468f7f%3A0x98096f625902bfaa!2s6326%20W%20Bluemound%20Rd%2C%20Wauwatosa%2C%20WI%2053213!5e0!3m2!1sen!2sus!4v1709325942353!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
        ></iframe>
      </div>

      {/* FOOTER */}
      <footer className="bg-secondary py-12 text-white border-t border-white/10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img 
              src={favicon} 
              alt="Logo" 
              className="w-12 h-12 rounded-full border-2 border-white/20"
            />
            <div>
              <h3 className="font-display font-bold text-xl uppercase tracking-wider text-white">Northern Generations</h3>
              <p className="text-sm text-gray-400">Roofing & Remodeling Specialists</p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Northern Generations. {t('footer.rights')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
