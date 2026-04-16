export type Language = "en" | "ua";

export interface TranslationKeys {
  nav: {
    about: string;
    testimonials: string;
    gallery: string;
    contact: string;
  };
  hero: {
    tagline: string;
    cta: string;
  };
  about: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
  };
  testimonials: {
    title: string;
  };
  gallery: {
    title: string;
  };
  contact: {
    title: string;
    bookingTitle: string;
    selectDate: string;
    selected: string;
    confirmButton: string;
    successTitle: string;
    successMessage: string;
    contactInfoTitle: string;
    instagramLabel: string;
    addressLabel: string;
    hoursLabel: string;
    weekdayHours: string;
    weekendHours: string;
    locationTitle: string;
    mapTitle: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    connect: string;
    copyright: string;
  };
}

export const translations: Record<Language, TranslationKeys> = {
  en: {
    nav: {
      about: "ABOUT",
      testimonials: "TESTIMONIALS",
      gallery: "GALLERY",
      contact: "CONTACT",
    },
    hero: {
      tagline: "Strength. Dedication. Community.",
      cta: "START YOUR JOURNEY",
    },
    about: {
      title: "ABOUT US",
      paragraph1: "At Boise Iron Gym, we believe in the transformative power of strength training. Our facility is more than just a gym—it's a community of dedicated individuals pushing their limits every single day.",
      paragraph2: "With top-tier equipment, an motivating atmosphere, and a supportive community, we provide everything you need to achieve your fitness goals. Whether you're a seasoned lifter or just starting your journey, you'll find your place here.",
      paragraph3: "Join us and become part of something bigger. Where champions are created and limits are broken.",
    },
    testimonials: {
      title: "WHAT OUR MEMBERS SAY",
    },
    gallery: {
      title: "OUR FACILITY",
    },
    contact: {
      title: "GET IN TOUCH",
      bookingTitle: "BOOK AN APPOINTMENT",
      selectDate: "Select a Date",
      selected: "Selected:",
      confirmButton: "Confirm Appointment",
      successTitle: "Request Sent!",
      successMessage: "We'll contact you soon to confirm your appointment on",
      contactInfoTitle: "CONTACT INFO",
      instagramLabel: "Follow Us on Instagram:",
      addressLabel: "Address:",
      hoursLabel: "Hours:",
      weekdayHours: "Mon-Fri: 4 AM – 11 PM",
      weekendHours: "Sat-Sun: 6 AM – 9 PM",
      locationTitle: "LOCATION",
      mapTitle: "Boise Iron Gym Location",
    },
    footer: {
      tagline: "Where Champions Are Created",
      quickLinks: "QUICK LINKS",
      connect: "CONNECT WITH US",
      copyright: "All rights reserved.",
    },
  },
  ua: {
    nav: {
      about: "ПРО НАС",
      testimonials: "ВІДГУКИ",
      gallery: "ГАЛЕРЕЯ",
      contact: "КОНТАКТИ",
    },
    hero: {
      tagline: "Сила. Відданість. Спільнота.",
      cta: "ПОЧНИ СВІЙ ШЛЯХ",
    },
    about: {
      title: "ПРО НАС",
      paragraph1: "У Boise Iron Gym ми віримо в трансформаційну силу силових тренувань. Наш заклад — це більше, ніж просто спортзал — це спільнота відданих людей, які щодня долають свої межі.",
      paragraph2: "З найкращим обладнанням, мотивуючою атмосферою та підтримуючою спільнотою ми надаємо все необхідне для досягнення ваших фітнес-цілей. Незалежно від того, чи ви досвідчений атлет, чи тільки починаєте свій шлях, ви знайдете своє місце тут.",
      paragraph3: "Приєднуйтесь до нас і станьте частиною чогось більшого. Там, де створюються чемпіони і долаються межі.",
    },
    testimonials: {
      title: "ЩО КАЖУТЬ НАШІ ЧЛЕНИ",
    },
    gallery: {
      title: "НАШ ЗАКЛАД",
    },
    contact: {
      title: "ЗВ'ЯЖІТЬСЯ З НАМИ",
      bookingTitle: "ЗАПИСАТИСЯ НА ПРИЙОМ",
      selectDate: "Оберіть дату",
      selected: "Обрано:",
      confirmButton: "Підтвердити запис",
      successTitle: "Запит надіслано!",
      successMessage: "Ми зв'яжемося з вами найближчим часом для підтвердження вашого запису на",
      contactInfoTitle: "КОНТАКТНА ІНФОРМАЦІЯ",
      instagramLabel: "Слідкуйте за нами в Instagram:",
      addressLabel: "Адреса:",
      hoursLabel: "Години роботи:",
      weekdayHours: "Пн-Пт: 4:00 – 23:00",
      weekendHours: "Сб-Нд: 6:00 – 21:00",
      locationTitle: "РОЗТАШУВАННЯ",
      mapTitle: "Розташування Boise Iron Gym",
    },
    footer: {
      tagline: "Там, де створюються чемпіони",
      quickLinks: "ШВИДКІ ПОСИЛАННЯ",
      connect: "ЗВ'ЯЖІТЬСЯ З НАМИ",
      copyright: "Усі права захищено.",
    },
  },
};
