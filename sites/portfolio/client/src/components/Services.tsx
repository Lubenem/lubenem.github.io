import { Code, Smartphone, Layers } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/lib/i18n';

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Code,
      title: t('services.webDev.title'),
      description: t('services.webDev.description'),
      price: t('services.webDev.price'),
      testId: 'service-web',
    },
    {
      icon: Smartphone,
      title: t('services.mobileDev.title'),
      description: t('services.mobileDev.description'),
      price: t('services.mobileDev.price'),
      testId: 'service-mobile',
    },
    {
      icon: Layers,
      title: t('services.customSoftware.title'),
      description: t('services.customSoftware.description'),
      price: t('services.customSoftware.price'),
      testId: 'service-custom',
    },
  ];

  return (
    <section id="services" className="py-12 md:py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-2 mb-10" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight" data-testid="text-services-title">
            {t('services.title')}
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto" data-testid="text-services-subtitle">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-5 space-y-3 hover-elevate transition-all duration-300"
                data-testid={service.testId}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold" data-testid={`text-${service.testId}-title`}>
                  {service.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed" data-testid={`text-${service.testId}-description`}>
                  {service.description}
                </p>
                <p className="text-base font-semibold text-primary" data-testid={`text-${service.testId}-price`}>
                  {service.price}
                </p>
              </Card>
            );
          })}
        </div>

        <p className="text-center text-xs text-muted-foreground max-w-xl mx-auto" data-testid="text-pricing-note" data-aos="fade-up">
          {t('services.pricingNote')}
        </p>
      </div>
    </section>
  );
}
