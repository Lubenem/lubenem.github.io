import { Hand, Heart, Activity, Flame, Flower } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";

const servicesList = [
  { id: "deep", icon: Hand },
  { id: "swedish", icon: Heart },
  { id: "thai", icon: Activity },
  { id: "cupping", icon: Flame },
];

export function Services() {
  const { t } = useI18n();

  return (
    <section id="services" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-primary font-medium tracking-wider uppercase text-sm">
            <Flower className="w-4 h-4" /> Services
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            {t("services.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, index) => (
            <div 
              key={service.id} 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <Card className="group h-full p-8 hover:shadow-xl transition-all duration-300 border-none bg-white hover:-translate-y-1">
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <service.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3 text-foreground">
                  {t(`service.${service.id}`)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(`service.${service.id}.desc`)}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
