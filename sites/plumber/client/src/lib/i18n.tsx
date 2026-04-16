import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ua';

type Translations = {
  nav: {
    home: string;
    services: string;
    gallery: string;
    reviews: string;
    contact: string;
    cta: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  services: {
    title: string;
    cleaning: { title: string; desc: string };
    maintenance: { title: string; desc: string };
    repair: { title: string; desc: string };
    opening: { title: string; desc: string };
  };
  beforeAfter: {
    title: string;
    subtitle: string;
    before: string;
    after: string;
  };
  gallery: {
    title: string;
    subtitle: string;
  };
  booking: {
    title: string;
    subtitle: string;
    step1: string;
    step2: string;
    step3: string;
    nameLabel: string;
    emailLabel: string;
    serviceLabel: string;
    submit: string;
    submitting: string;
    selectDate: string;
    selectTime: string;
  };
  footer: {
    rights: string;
  };
};

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      gallery: "Gallery",
      reviews: "Reviews",
      contact: "Contact",
      cta: "Request Service",
    },
    hero: {
      title: "Crystal Clear Pools, Hassle-Free Summer",
      subtitle: "Professional pool maintenance, cleaning, and repair services in Knoxville, TN. We do the dirty work so you can just swim.",
      cta: "Book Now",
    },
    services: {
      title: "Our Services",
      cleaning: { title: "Regular Cleaning", desc: "Weekly or bi-weekly cleaning, skimming, and chemical balancing." },
      maintenance: { title: "Maintenance", desc: "Filter cleaning, pump checks, and equipment maintenance." },
      repair: { title: "Repairs", desc: "Fixing leaks, broken pumps, and heater issues quickly." },
      opening: { title: "Opening & Closing", desc: "Seasonal preparation to keep your pool safe year-round." },
    },
    beforeAfter: {
      title: "Real Results",
      subtitle: "See the difference professional care makes.",
      before: "Before",
      after: "After",
    },
    gallery: {
      title: "Our Work",
      subtitle: "Projects we're proud of around Knoxville.",
    },
    booking: {
      title: "Schedule Service",
      subtitle: "Choose a time that works for you.",
      step1: "Select Date",
      step2: "Select Time",
      step3: "Your Details",
      nameLabel: "Full Name",
      emailLabel: "Email Address",
      serviceLabel: "Service Needed",
      submit: "Confirm Booking",
      submitting: "Booking...",
      selectDate: "Please select a date first.",
      selectTime: "Please select a time slot.",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  ua: {
    nav: {
      home: "Головна",
      services: "Послуги",
      gallery: "Галерея",
      reviews: "Відгуки",
      contact: "Контакти",
      cta: "Замовити",
    },
    hero: {
      title: "Кришталево чисті басейни для вашого літа",
      subtitle: "Професійне обслуговування, чистка та ремонт басейнів у Ноксвіллі. Ми робимо брудну роботу, щоб ви могли просто плавати.",
      cta: "Замовити зараз",
    },
    services: {
      title: "Наші послуги",
      cleaning: { title: "Регулярне чищення", desc: "Щотижневе чищення, збирання сміття та балансування хімії." },
      maintenance: { title: "Технічне обслуговування", desc: "Чищення фільтрів, перевірка насосів та обладнання." },
      repair: { title: "Ремонт", desc: "Швидке усунення протікань, поломок насосів та нагрівачів." },
      opening: { title: "Відкриття та закриття", desc: "Сезонна підготовка для безпеки вашого басейну цілий рік." },
    },
    beforeAfter: {
      title: "Реальні результати",
      subtitle: "Побачте різницю, яку робить професійний догляд.",
      before: "До",
      after: "Після",
    },
    gallery: {
      title: "Наші роботи",
      subtitle: "Проекти, якими ми пишаємося в Ноксвіллі.",
    },
    booking: {
      title: "Записатися на сервіс",
      subtitle: "Оберіть зручний для вас час.",
      step1: "Оберіть дату",
      step2: "Оберіть час",
      step3: "Ваші дані",
      nameLabel: "ПІБ",
      emailLabel: "Електронна пошта",
      serviceLabel: "Тип послуги",
      submit: "Підтвердити",
      submitting: "Обробка...",
      selectDate: "Будь ласка, оберіть дату.",
      selectTime: "Будь ласка, оберіть час.",
    },
    footer: {
      rights: "Всі права захищено.",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('uk') || browserLang.startsWith('ua')) {
      setLanguage('ua');
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}
