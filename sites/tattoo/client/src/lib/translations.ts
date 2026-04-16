export type Language = "en" | "ua";

export const translations = {
  en: {
    nav: {
      home: "Home",
      gallery: "Gallery",
      services: "Services",
      testimonials: "Testimonials",
      contact: "Contact",
    },
    hero: {
      title: "REBEL ROSE TATTOOS",
      subtitle: "Custom Tattoo Artistry in Bedford, Indiana",
      description: "Where creativity meets craftsmanship. Owner Vicki Baker is an incredible artist who truly cares about custom creating pieces of artwork for you to wear. Every tattoo is a unique masterpiece designed just for you.",
      cta: "Book Consultation",
    },
    gallery: {
      title: "OUR WORK",
      subtitle: "Browse our portfolio of custom tattoos and artistic creations",
    },
    services: {
      title: "SERVICES",
      subtitle: "Professional tattoo artistry with a personal touch",
      items: [
        {
          title: "Custom Tattoo Design",
          description: "Unique, personalized tattoo designs created in collaboration with you. We bring your vision to life with custom artwork tailored to your story and style.",
        },
        {
          title: "Color Ink Tattoos",
          description: "Vibrant, high-quality color tattoos that stand the test of time. From bold and bright to soft and subtle, we create stunning pieces with expert color application.",
        },
        {
          title: "Consultation & Collaboration",
          description: "Every tattoo starts with a conversation. We take the time to understand your ideas, offer professional guidance, and ensure you're completely confident before we begin.",
        },
      ],
    },
    testimonials: {
      title: "TESTIMONIALS",
      subtitle: "What our clients say about us",
      reviews: "Google reviews",
      items: [
        {
          name: "Kristin L",
          review: "The owner, Vicki Baker, is the most amazing human. Not only is she an incredible artist who truly cares about custom creating pieces of artwork for you to wear, she's a stellar communicator, she's very fair, and I'll never go to anyone else.",
        },
        {
          name: "Tonya K",
          review: "Excellent service and beautiful color ink tattoos. The attention to detail and professionalism is outstanding. Highly recommend Rebel Rose Tattoos!",
        },
      ],
    },
    contact: {
      title: "BOOK YOUR APPOINTMENT",
      subtitle: "Ready to bring your tattoo vision to life? Schedule your consultation today",
      phone: "Phone",
      phoneNote: "Call us for immediate inquiries",
      location: "Location",
      calendar: {
        title: "Book Your Consultation",
        selectTime: "Available times for",
        confirmButton: "Request Appointment for",
        availability: "Available Monday - Friday, 9 AM - 5 PM",
        success: "Appointment Requested!",
        successMessage: "Your consultation has been submitted. We will contact you shortly to confirm.",
      },
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  ua: {
    nav: {
      home: "Головна",
      gallery: "Галерея",
      services: "Послуги",
      testimonials: "Відгуки",
      contact: "Контакти",
    },
    hero: {
      title: "REBEL ROSE TATTOOS",
      subtitle: "Авторські татуювання в Бедфорді, Індіана",
      description: "Де креативність зустрічає майстерність. Власниця Вікі Бейкер — неймовірна художниця, яка дбає про створення унікальних творів мистецтва для вас. Кожне татуювання — це унікальний шедевр, створений спеціально для вас.",
      cta: "Записатися на консультацію",
    },
    gallery: {
      title: "НАШІ РОБОТИ",
      subtitle: "Перегляньте наше портфоліо авторських татуювань та художніх робіт",
    },
    services: {
      title: "ПОСЛУГИ",
      subtitle: "Професійне мистецтво татуювання з індивідуальним підходом",
      items: [
        {
          title: "Індивідуальний дизайн татуювання",
          description: "Унікальні, персоналізовані дизайни татуювань, створені у співпраці з вами. Ми втілюємо вашу ідею в життя з авторськими роботами, адаптованими до вашої історії та стилю.",
        },
        {
          title: "Кольорові татуювання",
          description: "Яскраві, високоякісні кольорові татуювання, що витримують випробування часом. Від яскравих до ніжних — ми створюємо вражаючі роботи з експертним нанесенням кольору.",
        },
        {
          title: "Консультація та співпраця",
          description: "Кожне татуювання починається з розмови. Ми приділяємо час, щоб зрозуміти ваші ідеї, надати професійні поради та переконатися, що ви повністю впевнені перед початком.",
        },
      ],
    },
    testimonials: {
      title: "ВІДГУКИ",
      subtitle: "Що кажуть наші клієнти про нас",
      reviews: "відгуків Google",
      items: [
        {
          name: "Крістін Л",
          review: "Власниця, Вікі Бейкер — найдивовижніша людина. Вона не тільки неймовірна художниця, яка дійсно дбає про створення творів мистецтва для вас, вона чудово спілкується, вона дуже справедлива, і я ніколи не піду до когось іншого.",
        },
        {
          name: "Тоня К",
          review: "Відмінний сервіс і красиві кольорові татуювання. Увага до деталей і професіоналізм на найвищому рівні. Дуже рекомендую Rebel Rose Tattoos!",
        },
      ],
    },
    contact: {
      title: "ЗАПИШІТЬСЯ НА ПРИЙОМ",
      subtitle: "Готові втілити вашу ідею татуювання в життя? Запишіться на консультацію сьогодні",
      phone: "Телефон",
      phoneNote: "Зателефонуйте нам для термінових запитів",
      location: "Адреса",
      calendar: {
        title: "Запишіться на консультацію",
        selectTime: "Доступний час на",
        confirmButton: "Записатися на",
        availability: "Доступно Понеділок - П'ятниця, 9:00 - 17:00",
        success: "Запит на прийом надіслано!",
        successMessage: "Вашу консультацію надіслано. Ми зв'яжемося з вами найближчим часом для підтвердження.",
      },
    },
    footer: {
      rights: "Всі права захищені.",
    },
  },
};

export function detectUserLanguage(): Language {
  if (typeof navigator !== "undefined") {
    const browserLang = navigator.language || (navigator as any).userLanguage;
    if (browserLang && browserLang.toLowerCase().startsWith("uk")) {
      return "ua";
    }
  }
  return "en";
}
