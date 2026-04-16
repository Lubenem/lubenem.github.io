import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ua';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.gallery': 'Gallery',
    'nav.book': 'Book Session',
    'hero.title': 'Restore Your Balance',
    'hero.subtitle': 'Expert massage therapy tailored to your body’s needs. Find peace, relief, and rejuvenation in a calming atmosphere.',
    'hero.cta': 'Reserve Your Spot',
    'services.title': 'Our Treatments',
    'services.subtitle': 'Holistic therapies designed for deep relaxation and healing.',
    'service.deep': 'Deep Tissue',
    'service.deep.desc': 'Intense pressure to release chronic muscle tension.',
    'service.swedish': 'Swedish Massage',
    'service.swedish.desc': 'Gentle, flowing strokes to promote relaxation.',
    'service.thai': 'Thai Stretching',
    'service.thai.desc': 'Assisted yoga and stretching for flexibility.',
    'service.cupping': 'Cupping Therapy',
    'service.cupping.desc': 'Ancient technique to improve blood flow and reduce pain.',
    'gallery.title': 'The Space',
    'booking.title': 'Book Your Session',
    'booking.step1': 'Select Date',
    'booking.step2': 'Select Time',
    'booking.step3': 'Your Details',
    'booking.success': 'Booking Confirmed!',
    'booking.success.msg': 'We look forward to seeing you.',
    'footer.contact': 'Contact Us',
    'footer.rights': 'All rights reserved.',
  },
  ua: {
    'nav.home': 'Головна',
    'nav.services': 'Послуги',
    'nav.gallery': 'Галерея',
    'nav.book': 'Записатися',
    'hero.title': 'Відновіть Свій Баланс',
    'hero.subtitle': 'Професійний масаж, адаптований до потреб вашого тіла. Знайдіть спокій, полегшення та оновлення.',
    'hero.cta': 'Забронювати Місце',
    'services.title': 'Наші Послуги',
    'services.subtitle': 'Цілісні терапії для глибокого розслаблення та зцілення.',
    'service.deep': 'Глибокий Масаж',
    'service.deep.desc': 'Інтенсивний тиск для зняття хронічної напруги м\'язів.',
    'service.swedish': 'Шведський Масаж',
    'service.swedish.desc': 'Ніжні, плавні рухи для сприяння релаксації.',
    'service.thai': 'Тайський Стретчинг',
    'service.thai.desc': 'Асистована йога та розтяжка для гнучкості.',
    'service.cupping': 'Вакуумна Терапія',
    'service.cupping.desc': 'Стародавня техніка для покращення кровообігу.',
    'gallery.title': 'Простір',
    'booking.title': 'Запис на Сеанс',
    'booking.step1': 'Оберіть Дату',
    'booking.step2': 'Оберіть Час',
    'booking.step3': 'Ваші Дані',
    'booking.success': 'Запис Підтверджено!',
    'booking.success.msg': 'Ми чекаємо на вас.',
    'footer.contact': 'Контакти',
    'footer.rights': 'Всі права захищено.',
  }
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
