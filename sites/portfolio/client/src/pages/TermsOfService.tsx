import { useLanguage } from '@/lib/i18n';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';

export default function TermsOfService() {
  const { t } = useLanguage();
  const terms = t('legal.termsOfService');

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-24 pb-16 px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight" data-testid="text-terms-title">
              {terms.title}
            </h1>
            <p className="text-sm text-muted-foreground" data-testid="text-last-updated">
              {terms.lastUpdated}
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed" data-testid="text-intro">
              {terms.intro}
            </p>
          </div>

          <div className="space-y-8">
            {Object.entries(terms.sections).map(([key, section]: [string, any]) => (
              <Card key={key} className="p-8" data-testid={`section-${key}`}>
                <h2 className="text-2xl font-semibold mb-4" data-testid={`text-${key}-title`}>
                  {section.title}
                </h2>
                <p className="text-foreground/70 leading-relaxed" data-testid={`text-${key}-content`}>
                  {section.content}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
