import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navbar } from "@/components/Navbar";
import { useLanguage } from "@/hooks/use-language";
import { ServiceCard } from "@/components/ServiceCard";
import { BeforeAfter } from "@/components/BeforeAfter";
import { ContactForm } from "@/components/ContactForm";
import { Fan, Thermometer, Wrench, Wind, Siren, Star, CalendarCheck } from "lucide-react";

// Assets
import heroBg from "@assets/cool-company-car-banner_1766934074011.jpg";
import memeImg from "@assets/funny-meme-about-company_1766934074012.jpg";
import gridImg from "@assets/before-after-4-tiles_1766934074012.jpg";

export default function Home() {
  const { t } = useLanguage();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const services = [
    { icon: Fan, title: t("services.ac"), desc: "Expert diagnosis and repair for all major brands. Stay cool all summer long." },
    { icon: Thermometer, title: t("services.heat"), desc: "Efficient heating solutions for those chilly desert nights. Safety first." },
    { icon: Wrench, title: t("services.maint"), desc: "Regular tune-ups to extend unit life and lower energy bills." },
    { icon: Wind, title: t("services.air"), desc: "Breathe easier with advanced filtration and duct cleaning services." },
    { icon: Siren, title: t("services.emerg"), desc: "24/7 rapid response when your system fails at the worst time." },
  ];

  const testimonials = [
    { name: "Mark R.", text: "Best HVAC company in San Antonio! They arrived on time, fixed the issue quickly, and didn't try to upsell me.", rating: 5 },
    { name: "Sarah Jenkins", text: "As a military family, we appreciate supporting veteran-owned businesses. The service was impeccable.", rating: 5 },
    { name: "David G.", text: "Honest pricing and great work. My AC runs quieter and colder than ever before.", rating: 5 },
  ];

  return (
    <div className="min-h-screen font-body overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/70 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
          <img 
            src={heroBg} 
            alt="Company Van" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 z-20 text-center text-white pt-20">
          <div data-aos="fade-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-shadow-lg">
              {t("hero.title")}
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200 font-medium">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#appointment" 
                className="px-8 py-4 bg-accent text-white rounded-xl font-bold text-lg hover:bg-accent/90 transform hover:-translate-y-1 transition-all shadow-xl shadow-accent/20 flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-5 h-5" />
                {t("hero.cta")}
              </a>
              <a 
                href="#services" 
                className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center"
              >
                {t("nav.services")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-primary mb-4">{t("services.title")}</h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ServiceCard 
                key={idx}
                icon={service.icon}
                title={service.title}
                description={service.desc}
                delay={idx * 100}
              />
            ))}
            
            {/* CTA Card */}
            <div 
              className="bg-primary rounded-2xl p-8 flex flex-col items-center justify-center text-center text-white shadow-xl"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <h3 className="text-2xl font-bold mb-4">Need Something Else?</h3>
              <p className="mb-6 opacity-90">We handle custom residential and commercial projects.</p>
              <a href="#contact" className="text-accent font-bold hover:text-white transition-colors underline">
                Contact Us Today &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US / MEME SECTION */}
      <section id="why-us" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2" data-aos="fade-right">
              <h2 className="text-4xl font-bold text-primary mb-6">{t("why.title")}</h2>
              <p className="text-xl text-muted-foreground mb-8 italic border-l-4 border-accent pl-6">
                "{t("why.subtitle")}"
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Veteran Owned & Operated",
                  "Honest Upfront Pricing",
                  "No High-Pressure Sales",
                  "Licensed & Insured"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-medium text-foreground">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-green-600" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:w-1/2 relative" data-aos="fade-left">
              <div className="absolute -inset-4 bg-accent/10 rounded-3xl transform rotate-3" />
              <img 
                src={memeImg} 
                alt="Funny Team Meme" 
                className="relative rounded-2xl shadow-2xl w-full transform -rotate-2 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OUR WORK SECTION */}
      <section id="work" className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-4">{t("work.title")}</h2>
            <p className="text-white/70 max-w-2xl mx-auto">See the difference professional cleaning and maintenance makes.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Interactive Before/After */}
            <div data-aos="fade-right">
              <div className="bg-white/5 p-2 rounded-3xl">
                <BeforeAfter />
              </div>
              <p className="text-center mt-4 text-sm opacity-60">Deep cleaning of a neglected outdoor unit.</p>
            </div>

            {/* Grid of work */}
            <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
               <img 
                 src={gridImg} 
                 alt="Recent Work Collage" 
                 className="col-span-2 rounded-xl shadow-lg border-2 border-white/10 hover:border-accent transition-colors duration-300"
               />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-16">What Our Neighbors Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((review, i) => (
              <div 
                key={i} 
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow border-t-4 border-accent"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="flex gap-1 mb-4 text-accent">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="fill-current w-5 h-5" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">"{review.text}"</p>
                <p className="font-bold text-primary">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPOINTMENT & CONTACT */}
      <section id="appointment" className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left: Contact Form */}
            <div className="lg:w-1/2" data-aos="fade-right">
              <ContactForm />
            </div>

            {/* Right: Info & Map */}
            <div className="lg:w-1/2 space-y-8" data-aos="fade-left">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">Visit Us</h2>
                <p className="text-muted-foreground mb-6">
                  Serving San Antonio, TX and surrounding areas.
                </p>
                
                {/* Embedded Map */}
                <div className="w-full h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-inner border border-gray-200">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d444221.782565126!2d-98.81078736340803!3d29.481230040775837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c58af04d00eaf%3A0x856e13b10a016dfc!2sSan%20Antonio%2C%20TX!5e0!3m2!1sen!2sus!4v1709400000000!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Service Area Map"
                  />
                </div>
              </div>

              <div className="bg-primary text-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-4">Hours of Operation</h3>
                <div className="space-y-2 text-white/80">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>Monday - Friday</span>
                    <span className="font-bold text-white">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>Saturday</span>
                    <span className="font-bold text-white">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-accent font-bold">Emergency Only</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary py-12 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-8 opacity-80">
            <div className="font-display font-bold text-2xl text-white">
              MILITARY CITY <span className="text-accent">AIR</span>
            </div>
          </div>
          
          <div className="flex justify-center gap-8 mb-8 text-white/60">
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Yelp</a>
          </div>
          
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Military City Air Conditioning and Heat. {t("footer.rights")}
          </p>
        </div>
      </footer>
    </div>
  );
}
