import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import BookingCalendar from "./BookingCalendar";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="font-['Bebas_Neue'] text-4xl sm:text-5xl md:text-6xl text-primary mb-4 tracking-wider"
            data-testid="text-contact-title"
          >
            {t.contact.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <BookingCalendar />

          <div className="space-y-8">
            <Card className="hover-elevate">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{t.contact.phone}</h3>
                    <a
                      href="tel:5419040566"
                      className="text-primary text-xl font-semibold hover:underline"
                      data-testid="link-phone"
                    >
                      (541) 904-0566
                    </a>
                    <p className="text-muted-foreground text-sm mt-2">
                      {t.contact.phoneNote}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{t.contact.location}</h3>
                    <p className="text-muted-foreground" data-testid="text-address">
                      930 16th St<br />
                      Bedford, IN 47421<br />
                      United States
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="rounded-md overflow-hidden border border-border" data-testid="map-location">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3078.7299999999996!2d-86.4861861!3d38.8609262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886c139a839ad967%3A0x6fef3a90cf067307!2sRebel%20Rose%20Tattoos!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rebel Rose Tattoos Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
