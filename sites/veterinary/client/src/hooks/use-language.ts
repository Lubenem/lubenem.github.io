import { useState, useEffect } from 'react';

type Locale = 'en' | 'ua';

export const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      patients: "Happy Patients",
      contact: "Contact",
      book: "Book Visit"
    },
    hero: {
      title: "Compassionate Care for Your Best Friend",
      subtitle: "Professional veterinary services with a warm heart. We treat your pets like our own family.",
      cta: "Schedule a Checkup"
    },
    services: {
      title: "Our Services",
      wellness: "Wellness Exams",
      emergency: "Emergency Care",
      dental: "Dental Care",
      surgery: "Surgery",
      vaccines: "Vaccinations"
    },
    booking: {
      title: "Book an Appointment",
      selectDate: "Select a Date",
      selectTime: "Select a Time",
      yourDetails: "Your Details",
      name: "Pet Parent Name",
      email: "Email Address",
      type: "Appointment Type",
      confirm: "Confirm Booking",
      success: "High Five! Booking Confirmed!"
    },
    testimonials: {
      title: "What Pet Parents Say"
    }
  },
  ua: {
    nav: {
      home: "Головна",
      services: "Послуги",
      patients: "Щасливі пацієнти",
      contact: "Контакти",
      book: "Записатись"
    },
    hero: {
      title: "Турботливий догляд за вашим найкращим другом",
      subtitle: "Професійні ветеринарні послуги з теплим серцем. Ми ставимося до ваших улюбленців як до членів власної родини.",
      cta: "Записатись на огляд"
    },
    services: {
      title: "Наші послуги",
      wellness: "Огляди здоров'я",
      emergency: "Невідкладна допомога",
      dental: "Стоматологія",
      surgery: "Хірургія",
      vaccines: "Вакцинація"
    },
    booking: {
      title: "Записатись на прийом",
      selectDate: "Оберіть дату",
      selectTime: "Оберіть час",
      yourDetails: "Ваші дані",
      name: "Ім'я власника",
      email: "Електронна пошта",
      type: "Тип візиту",
      confirm: "Підтвердити запис",
      success: "Дай п'ять! Запис підтверджено!"
    },
    testimonials: {
      title: "Відгуки власників"
    }
  }
};

export function useLanguage() {
  const [locale, setLocale] = useState<Locale>('en');

  useEffect(() => {
    // Simple auto-detect
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.includes('ua') || browserLang.includes('uk')) {
      setLocale('ua');
    }
  }, []);

  const t = translations[locale];

  return { locale, setLocale, t };
}
