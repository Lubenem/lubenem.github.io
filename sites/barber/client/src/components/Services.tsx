import { Scissors, Wind, Sparkles, Ruler, Baby } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n";

const serviceIcons = {
  mensHaircut: Scissors,
  beardTrim: Wind,
  hotTowelShave: Sparkles,
  lineUp: Ruler,
  kidsHaircut: Baby,
};

export function Services() {
  const { t } = useLanguage();

  const services = [
    { key: "mensHaircut" as const, ...t.services.items.mensHaircut },
    { key: "beardTrim" as const, ...t.services.items.beardTrim },
    { key: "hotTowelShave" as const, ...t.services.items.hotTowelShave },
    { key: "lineUp" as const, ...t.services.items.lineUp },
    { key: "kidsHaircut" as const, ...t.services.items.kidsHaircut },
  ];

  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-background"
      data-testid="section-services"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 
            className="font-display text-4xl md:text-5xl uppercase tracking-wider text-foreground mb-4"
            data-testid="text-services-title"
          >
            {t.services.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.key];
            return (
              <Card
                key={service.key}
                className="group hover-elevate transition-all duration-300 overflow-visible"
                style={{ animationDelay: `${index * 100}ms` }}
                data-testid={`card-service-${service.key}`}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl uppercase tracking-wide text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
