import { createContext, useContext, useState, type ReactNode } from "react";

type Language = "en" | "ua";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.whyUs": "Why Us",
    "nav.work": "Our Work",
    "nav.contact": "Contact",
    "hero.title": "Serving San Antonio with Honor & Excellence",
    "hero.subtitle": "Veteran-owned HVAC services you can trust. We don't just fix ACs, we restore comfort.",
    "hero.cta": "Book an Appointment",
    "services.title": "Our Services",
    "services.ac": "AC Repair & Install",
    "services.heat": "Heating Solutions",
    "services.maint": "Preventative Maintenance",
    "services.air": "Air Quality",
    "services.emerg": "24/7 Emergency",
    "why.title": "Why Choose Military City?",
    "why.subtitle": "We take our work seriously, but not ourselves...",
    "work.title": "Before & After",
    "contact.title": "Get In Touch",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.submit": "Send Message",
    "contact.service": "Service Type",
    "footer.rights": "All rights reserved.",
  },
  ua: {
    "nav.home": "Головна",
    "nav.services": "Послуги",
    "nav.whyUs": "Чому ми",
    "nav.work": "Наші роботи",
    "nav.contact": "Контакти",
    "hero.title": "Служимо Сан-Антоніо з честю та майстерністю",
    "hero.subtitle": "Послуги HVAC від ветеранів, яким можна довіряти. Ми не просто ремонтуємо кондиціонери, ми відновлюємо комфорт.",
    "hero.cta": "Записатися на прийом",
    "services.title": "Наші послуги",
    "services.ac": "Ремонт та встановлення кондиціонерів",
    "services.heat": "Опалення",
    "services.maint": "Профілактичне обслуговування",
    "services.air": "Якість повітря",
    "services.emerg": "Цілодобова допомога",
    "why.title": "Чому обирають Military City?",
    "why.subtitle": "Ми серйозно ставимося до роботи, але не до себе...",
    "work.title": "До та Після",
    "contact.title": "Зв'яжіться з нами",
    "contact.name": "Ім'я",
    "contact.email": "Електронна пошта",
    "contact.message": "Повідомлення",
    "contact.submit": "Надіслати повідомлення",
    "contact.service": "Тип послуги",
    "footer.rights": "Всі права захищено.",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
}
