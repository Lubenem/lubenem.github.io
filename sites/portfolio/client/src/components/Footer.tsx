import { Link } from 'wouter';
import { useLanguage } from '@/lib/i18n';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-center md:text-left">
          <p className="text-xs text-muted-foreground" data-testid="text-business-entity">
            {t('footer.businessEntity')}
          </p>
          <div className="flex items-center justify-center md:justify-end gap-4">
            <Link
              href="/refund-policy"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-footer-refund-policy"
            >
              {t('nav.refundPolicy')}
            </Link>
            <Link
              href="/terms-of-service"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-footer-terms-of-service"
            >
              {t('nav.termsOfService')}
            </Link>
          </div>
          <p className="text-xs text-muted-foreground" data-testid="text-copyright">
            © {new Date().getFullYear()} LiuTech. {t('footer.allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
}
