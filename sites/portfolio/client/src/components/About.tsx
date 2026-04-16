import { Lightbulb, BookOpen, Building2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/lib/i18n';

export function About() {
  const { t } = useLanguage();

  const principles = [
    {
      icon: Lightbulb,
      title: t('about.simplicity.title'),
      description: t('about.simplicity.description'),
      testId: 'principle-simplicity',
    },
    {
      icon: BookOpen,
      title: t('about.learning.title'),
      description: t('about.learning.description'),
      testId: 'principle-learning',
    },
    {
      icon: Building2,
      title: t('about.background.title'),
      description: t('about.background.description'),
      testId: 'principle-background',
    },
  ];

  return (
    <section id="about" className="py-12 md:py-16 px-4 md:px-6 lg:px-8 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-2 mb-10" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight" data-testid="text-about-title">
            {t('about.title')}
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto" data-testid="text-about-subtitle">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <Card
                key={index}
                className="p-5 space-y-3 hover-elevate transition-all duration-300"
                data-testid={principle.testId}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold" data-testid={`text-${principle.testId}-title`}>
                  {principle.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed" data-testid={`text-${principle.testId}-description`}>
                  {principle.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
