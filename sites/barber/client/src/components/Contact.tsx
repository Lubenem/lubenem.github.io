import { MapPin, Phone } from "lucide-react";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-background"
      data-testid="section-contact"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 
            className="font-display text-4xl md:text-5xl uppercase tracking-wider text-foreground mb-4"
            data-testid="text-contact-title"
          >
            {t.contact.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 h-80 md:h-96 rounded-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.9563!2d-92.2985!3d34.7042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d2a58f5c0c3d1f%3A0x9f6f0dc40e0f0165!2s7212%20Geyer%20Springs%20Rd%20%235%2C%20Little%20Rock%2C%20AR%2072209!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Latinos Barbershop Location"
              data-testid="map-embed"
            />
          </div>

          <div className="lg:col-span-2 space-y-6">
            <Card className="overflow-visible">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {t.contact.address}
                    </h3>
                    <p className="text-muted-foreground">
                      7212 Geyer Springs Rd #5<br />
                      Little Rock, AR 72209
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-visible">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {t.contact.phone}
                    </h3>
                    <a 
                      href="tel:+15012659880" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-phone"
                    >
                      +1 501-265-9880
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-visible">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">
                  {t.contact.followUs}
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/LatinosBarbershopLR/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    aria-label="Facebook"
                    data-testid="link-facebook"
                  >
                    <SiFacebook className="w-6 h-6 text-primary" />
                  </a>
                  <a
                    href="https://www.instagram.com/LatinosBarbershopandSalonLLC/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    aria-label="Instagram"
                    data-testid="link-instagram"
                  >
                    <SiInstagram className="w-6 h-6 text-primary" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
