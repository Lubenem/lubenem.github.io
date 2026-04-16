import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type Language = "en" | "ua";

interface Translations {
  nav: {
    home: string;
    services: string;
    gallery: string;
    contact: string;
    bookNow: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: {
      mensHaircut: { title: string; description: string };
      beardTrim: { title: string; description: string };
      hotTowelShave: { title: string; description: string };
      lineUp: { title: string; description: string };
      kidsHaircut: { title: string; description: string };
    };
  };
  gallery: {
    title: string;
    subtitle: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
  };
  appointment: {
    title: string;
    subtitle: string;
    hours: string;
    availability: string;
    selectDate: string;
    selectTime: string;
    confirm: string;
    confirmed: string;
  };
  contact: {
    title: string;
    subtitle: string;
    address: string;
    phone: string;
    followUs: string;
  };
  footer: {
    copyright: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      gallery: "Gallery",
      contact: "Contact",
      bookNow: "Book Now",
    },
    hero: {
      headline: "Sharp Cuts, Classic Style.",
      subheadline: "The best fade in Little Rock. Experience authentic grooming.",
      cta: "Book Your Cut",
    },
    services: {
      title: "Our Services",
      subtitle: "Premium grooming services tailored to your style",
      items: {
        mensHaircut: {
          title: "Men's Haircut",
          description: "Fades, tapers, and classic cuts tailored to your style.",
        },
        beardTrim: {
          title: "Beard Trim",
          description: "Sculpting and shaping with razor finish.",
        },
        hotTowelShave: {
          title: "Hot Towel Shave",
          description: "Traditional straight razor shave experience.",
        },
        lineUp: {
          title: "Line Up",
          description: "Crisp edge-ups for a sharp look.",
        },
        kidsHaircut: {
          title: "Kids Haircut",
          description: "Patient and stylish cuts for the little ones.",
        },
      },
    },
    gallery: {
      title: "Our Work",
      subtitle: "Check out some of our best cuts",
    },
    testimonials: {
      title: "What Our Clients Say",
      subtitle: "Real reviews from satisfied customers",
    },
    appointment: {
      title: "Book an Appointment",
      subtitle: "Schedule your visit with us",
      hours: "Mon-Sat: 9 AM - 7 PM",
      availability: "Walk-ins welcome, appointments preferred",
      selectDate: "Select Date",
      selectTime: "Select Time",
      confirm: "Confirm Appointment",
      confirmed: "Appointment Confirmed!",
    },
    contact: {
      title: "Visit Us",
      subtitle: "Find us at our location",
      address: "Address",
      phone: "Phone",
      followUs: "Follow Us",
    },
    footer: {
      copyright: "Latinos Barbershop. All rights reserved.",
    },
  },
  ua: {
    nav: {
      home: "Головна",
      services: "Послуги",
      gallery: "Галерея",
      contact: "Контакти",
      bookNow: "Записатися",
    },
    hero: {
      headline: "Чіткі Стрижки, Класичний Стиль.",
      subheadline: "Найкращий фейд у Літл-Рок. Відчуйте справжній грумінг.",
      cta: "Записатися",
    },
    services: {
      title: "Наші Послуги",
      subtitle: "Преміум послуги грумінгу під ваш стиль",
      items: {
        mensHaircut: {
          title: "Чоловіча Стрижка",
          description: "Фейди, тейпери та класичні стрижки під ваш стиль.",
        },
        beardTrim: {
          title: "Корекція Бороди",
          description: "Скульптурування та оформлення з бритвеною фінішем.",
        },
        hotTowelShave: {
          title: "Гаряче Гоління",
          description: "Традиційне гоління небезпечною бритвою.",
        },
        lineUp: {
          title: "Контурування",
          description: "Чіткі контури для гострого вигляду.",
        },
        kidsHaircut: {
          title: "Дитяча Стрижка",
          description: "Терплячі та стильні стрижки для малечі.",
        },
      },
    },
    gallery: {
      title: "Наші Роботи",
      subtitle: "Погляньте на деякі з наших найкращих робіт",
    },
    testimonials: {
      title: "Відгуки Клієнтів",
      subtitle: "Реальні відгуки задоволених клієнтів",
    },
    appointment: {
      title: "Записатися на Прийом",
      subtitle: "Заплануйте візит до нас",
      hours: "Пн-Сб: 9:00 - 19:00",
      availability: "Приймаємо без запису, але краще записатися",
      selectDate: "Оберіть Дату",
      selectTime: "Оберіть Час",
      confirm: "Підтвердити Запис",
      confirmed: "Запис Підтверджено!",
    },
    contact: {
      title: "Завітайте до Нас",
      subtitle: "Знайдіть нас за адресою",
      address: "Адреса",
      phone: "Телефон",
      followUs: "Слідкуйте за Нами",
    },
    footer: {
      copyright: "Latinos Barbershop. Усі права захищено.",
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
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("language");
      if (stored === "en" || stored === "ua") return stored;
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith("uk")) return "ua";
    }
    return "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language === "ua" ? "uk" : "en";
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
