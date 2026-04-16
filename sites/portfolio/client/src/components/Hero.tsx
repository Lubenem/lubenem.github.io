import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/lib/i18n';
import portraitImage from '@assets/Liu_1766950903070.jpeg';

export function Hero() {
  const { t } = useLanguage();

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-[85vh] flex items-center py-12 md:py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1" data-aos="fade-right">
            <div className="space-y-3">
              <p className="text-base text-muted-foreground font-medium" data-testid="text-greeting">
                {t('hero.greeting')}
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight" data-testid="text-hero-title">
                {t('hero.title')}
              </h1>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-xl" data-testid="text-hero-subtitle">
                {t('hero.subtitle')}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                size="default"
                onClick={() => handleScrollTo('contact')}
                className="group"
                data-testid="button-start-project"
              >
                {t('hero.cta')}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="default"
                onClick={() => handleScrollTo('services')}
                data-testid="button-view-services"
              >
                {t('hero.ctaSecondary')}
              </Button>
            </div>

            <Badge variant="secondary" className="text-xs" data-testid="badge-trusted">
              {t('hero.trustedBy')}
            </Badge>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end" data-aos="fade-left">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur-xl opacity-50" />
              <img
                src={portraitImage}
                alt="Liubomyr Chahoub - Software Developer"
                className="relative rounded-xl border border-primary/20 shadow-lg w-full max-w-[200px] md:max-w-[240px] lg:max-w-[280px] object-cover aspect-[3/4]"
                data-testid="img-portrait"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
