import { Mail } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { useLanguage } from '@/lib/i18n';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-10 md:py-12 px-4 md:px-6 lg:px-8 bg-card/30">
      <div className="max-w-3xl mx-auto" data-aos="fade-up">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight whitespace-nowrap" data-testid="text-contact-title">
            {t('contact.title')}
          </h2>
          
          <div className="h-px md:h-8 w-16 md:w-px bg-border" />
          
          <div className="flex items-center gap-4 md:gap-6">
            <a
              href="mailto:liutech@proton.me"
              className="group flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
              data-testid="link-email"
            >
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">liutech@proton.me</span>
            </a>
            
            <a
              href="https://wa.me/380672666363"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
              data-testid="link-whatsapp"
            >
              <SiWhatsapp className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
