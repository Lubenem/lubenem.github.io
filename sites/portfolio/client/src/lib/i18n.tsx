import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ua';

interface Translations {
  en: Record<string, any>;
  ua: Record<string, any>;
}

const translations: Translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      contact: 'Contact',
      legal: 'Legal',
      refundPolicy: 'Refund Policy',
      termsOfService: 'Terms of Service',
    },
    hero: {
      greeting: "Hi, I'm Liubomyr",
      title: 'Building Simple Solutions for Complex Problems',
      subtitle: 'A passionate developer from Ukraine crafting elegant digital solutions across web, mobile, and custom software. Guided by the KISS principle and driven by continuous learning.',
      cta: 'Start a Project',
      ctaSecondary: 'View Services',
      trustedBy: 'Trusted by clients worldwide',
    },
    about: {
      title: 'Building Simple Solutions',
      subtitle: 'Philosophy & Approach',
      simplicity: {
        title: 'Simplicity',
        description: 'I live by the KISS principle - Keep It Simple, Stupid. I strive to create code that\'s not just effective, but also intuitive and easy to work with. I believe in removing complexity where it\'s unnecessary, making the development process more efficient and enjoyable.',
      },
      learning: {
        title: 'Continuous Learning',
        description: 'I embrace new challenges and constantly expand my knowledge. From architecture to programming, I love exploring different domains and applying fresh perspectives to every project.',
      },
      background: {
        title: 'Background',
        description: 'From architecture to code, my journey reflects a passion for creating structured, elegant solutions. This unique perspective allows me to approach software development with both creative vision and systematic precision.',
      },
    },
    services: {
      title: 'Services',
      subtitle: 'What I Offer',
      webDev: {
        title: 'Web Development',
        description: 'Custom web applications built with modern technologies. From landing pages to complex web platforms, delivering responsive and performant solutions.',
        price: 'Starting from $500',
      },
      mobileDev: {
        title: 'Mobile Applications',
        description: 'Native and cross-platform mobile apps that provide seamless user experiences across iOS and Android devices.',
        price: 'Starting from $1,200',
      },
      customSoftware: {
        title: 'Custom Software Solutions',
        description: 'Tailored software solutions designed to solve your specific business challenges. From automation tools to enterprise applications.',
        price: 'Starting from $1,500',
      },
      pricingNote: 'Prices shown are starting estimates. Final cost depends on project scope, complexity, and specific requirements. Contact for a detailed quote.',
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Start Your Project',
      form: {
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'your@email.com',
        projectType: 'Project Type',
        projectTypePlaceholder: 'Select project type',
        message: 'Message',
        messagePlaceholder: 'Tell me about your project...',
        submit: 'Send Message',
        submitting: 'Sending...',
      },
      projectTypes: {
        web: 'Web Development',
        mobile: 'Mobile App',
        custom: 'Custom Software',
        consulting: 'Consulting',
        other: 'Other',
      },
      info: {
        email: 'Email',
        responseTime: 'Usually responds within 24 hours',
        social: 'Connect',
      },
      success: 'Message sent successfully! I\'ll get back to you soon.',
      error: 'Failed to send message. Please try again or email me directly.',
    },
    legal: {
      refundPolicy: {
        title: 'Refund Policy',
        lastUpdated: 'Last updated: October 22, 2025',
        intro: 'At LiuTech, we are committed to client satisfaction. This refund policy outlines the terms and conditions for refunds on our services.',
        sections: {
          eligibility: {
            title: 'Refund Eligibility',
            content: 'Refund requests must be made within 14 days of project initiation. Refunds are considered on a case-by-case basis depending on project progress and deliverables completed.',
          },
          process: {
            title: 'Refund Process',
            content: 'To request a refund, please contact us at lubenemkrkm@gmail.com with your project details. We will review your request and respond within 5 business days. If approved, refunds will be processed within 10 business days.',
          },
          nonRefundable: {
            title: 'Non-Refundable Items',
            content: 'Completed project deliverables, third-party service fees, and consultation hours are non-refundable. Custom development work that has been delivered and approved cannot be refunded.',
          },
          modifications: {
            title: 'Policy Modifications',
            content: 'We reserve the right to modify this refund policy at any time. Changes will be posted on this page with an updated revision date.',
          },
        },
      },
      termsOfService: {
        title: 'Terms of Service',
        lastUpdated: 'Last updated: October 22, 2025',
        intro: 'By engaging LiuTech for services, you agree to the following terms and conditions.',
        sections: {
          services: {
            title: 'Services Description',
            content: 'LiuTech provides custom software development services including web development, mobile applications, and custom software solutions. All services are provided on a project basis with terms agreed upon before work begins.',
          },
          payment: {
            title: 'Payment Terms',
            content: 'Payment terms are established for each project individually. Typically, a deposit is required before work begins, with the balance due upon completion. Specific payment schedules will be outlined in the project agreement.',
          },
          delivery: {
            title: 'Delivery & Timeline',
            content: 'Project timelines are estimated based on scope and complexity. While we strive to meet all deadlines, timelines may be adjusted based on project changes or unforeseen circumstances. Deliverables will be provided electronically unless otherwise agreed.',
          },
          intellectual: {
            title: 'Intellectual Property',
            content: 'Upon full payment, all custom code and deliverables created specifically for your project become your property. Pre-existing code, frameworks, and tools remain the property of their respective owners.',
          },
          liability: {
            title: 'Limitation of Liability',
            content: 'LiuTech is not liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability is limited to the amount paid for the specific project.',
          },
          contact: {
            title: 'Contact Information',
            content: 'For questions about these terms, please contact us at lubenemkrkm@gmail.com.',
          },
        },
      },
    },
    footer: {
      quickLinks: 'Quick Links',
      legal: 'Legal',
      businessEntity: 'Liubomyr Chahoub',
      address: '32316, Ukraine, Khmelnytska region, Kamianets-Podilskyi, Hetmana Skoropadskoho street, building 16, Housing A, flat 34',
      allRightsReserved: 'All rights reserved.',
    },
    theme: {
      light: 'Light',
      dark: 'Dark',
    },
  },
  ua: {
    nav: {
      home: 'Головна',
      about: 'Про мене',
      services: 'Послуги',
      contact: 'Контакти',
      legal: 'Юридична інформація',
      refundPolicy: 'Політика повернення',
      termsOfService: 'Умови надання послуг',
    },
    hero: {
      greeting: "Привіт, я Любомир",
      title: 'Створюю прості рішення для складних завдань',
      subtitle: 'Ентузіаст-розробник з України, що створює елегантні цифрові рішення для веб, мобільних та кастомних додатків. Керуюсь принципом KISS і прагну постійного навчання.',
      cta: 'Почати проєкт',
      ctaSecondary: 'Переглянути послуги',
      trustedBy: 'Довіра клієнтів з усього світу',
    },
    about: {
      title: 'Створюю прості рішення',
      subtitle: 'Філософія та підхід',
      simplicity: {
        title: 'Простота',
        description: 'Я дотримуюсь принципу KISS - Keep It Simple, Stupid (Роби це просто, дурню). Я прагну створювати код, який не тільки ефективний, але й інтуїтивний і зручний у роботі. Я вірю в усунення зайвої складності, що робить процес розробки більш ефективним і приємним.',
      },
      learning: {
        title: 'Постійне навчання',
        description: 'Я приймаю нові виклики та постійно розширюю свої знання. Від архітектури до програмування - люблю досліджувати різні сфери та застосовувати свіжий погляд у кожному проєкті.',
      },
      background: {
        title: 'Досвід',
        description: 'Від архітектури до коду - моя подорож відображає пристрасть до створення структурованих, елегантних рішень. Ця унікальна перспектива дозволяє мені підходити до розробки програмного забезпечення з творчим баченням та систематичною точністю.',
      },
    },
    services: {
      title: 'Послуги',
      subtitle: 'Що я пропоную',
      webDev: {
        title: 'Веб-розробка',
        description: 'Кастомні веб-додатки, створені з сучасними технологіями. Від лендінгів до складних веб-платформ, з адаптивним та продуктивним виконанням.',
        price: 'Від 20,000 грн',
      },
      mobileDev: {
        title: 'Мобільні додатки',
        description: 'Нативні та кросплатформні мобільні додатки, що забезпечують безшовний користувацький досвід на iOS та Android пристроях.',
        price: 'Від 50,000 грн',
      },
      customSoftware: {
        title: 'Кастомні програмні рішення',
        description: 'Індивідуальні програмні рішення, розроблені для вирішення ваших специфічних бізнес-завдань. Від інструментів автоматизації до корпоративних додатків.',
        price: 'Від 60,000 грн',
      },
      pricingNote: 'Вказані ціни є початковими орієнтирами. Остаточна вартість залежить від обсягу проєкту, складності та специфічних вимог. Зв\'яжіться для детального розрахунку.',
    },
    contact: {
      title: 'Зв\'яжіться зі мною',
      subtitle: 'Почніть свій проєкт',
      form: {
        name: 'Ім\'я',
        namePlaceholder: 'Ваше ім\'я',
        email: 'Email',
        emailPlaceholder: 'your@email.com',
        projectType: 'Тип проєкту',
        projectTypePlaceholder: 'Оберіть тип проєкту',
        message: 'Повідомлення',
        messagePlaceholder: 'Розкажіть про ваш проєкт...',
        submit: 'Надіслати',
        submitting: 'Надсилання...',
      },
      projectTypes: {
        web: 'Веб-розробка',
        mobile: 'Мобільний додаток',
        custom: 'Кастомне ПЗ',
        consulting: 'Консалтинг',
        other: 'Інше',
      },
      info: {
        email: 'Email',
        responseTime: 'Зазвичай відповідаю протягом 24 годин',
        social: 'Соціальні мережі',
      },
      success: 'Повідомлення успішно надіслано! Я зв\'яжуся з вами найближчим часом.',
      error: 'Не вдалося надіслати повідомлення. Спробуйте ще раз або напишіть мені на email.',
    },
    legal: {
      refundPolicy: {
        title: 'Політика повернення коштів',
        lastUpdated: 'Останнє оновлення: 22 жовтня 2025',
        intro: 'У LiuTech ми прагнемо до задоволення клієнтів. Ця політика повернення коштів описує умови повернення за наші послуги.',
        sections: {
          eligibility: {
            title: 'Право на повернення',
            content: 'Запити на повернення коштів мають бути подані протягом 14 днів від початку проєкту. Повернення розглядаються індивідуально залежно від прогресу проєкту та виконаних завдань.',
          },
          process: {
            title: 'Процес повернення',
            content: 'Щоб запитати повернення, зв\'яжіться з нами за адресою lubenemkrkm@gmail.com з деталями вашого проєкту. Ми розглянемо ваш запит і відповімо протягом 5 робочих днів. У разі схвалення повернення буде оброблено протягом 10 робочих днів.',
          },
          nonRefundable: {
            title: 'Неповернення',
            content: 'Завершені результати проєкту, витрати на сторонні сервіси та години консультацій не підлягають поверненню. Кастомна розробка, яка була доставлена та схвалена, не може бути повернена.',
          },
          modifications: {
            title: 'Зміни політики',
            content: 'Ми залишаємо за собою право змінювати цю політику повернення в будь-який час. Зміни будуть опубліковані на цій сторінці з оновленою датою.',
          },
        },
      },
      termsOfService: {
        title: 'Умови надання послуг',
        lastUpdated: 'Останнє оновлення: 22 жовтня 2025',
        intro: 'Користуючись послугами LiuTech, ви погоджуєтесь з наступними умовами.',
        sections: {
          services: {
            title: 'Опис послуг',
            content: 'LiuTech надає послуги з кастомної розробки програмного забезпечення, включаючи веб-розробку, мобільні додатки та індивідуальні програмні рішення. Усі послуги надаються на основі проєкту з умовами, узгодженими до початку роботи.',
          },
          payment: {
            title: 'Умови оплати',
            content: 'Умови оплати встановлюються індивідуально для кожного проєкту. Зазвичай потрібна передоплата перед початком роботи, а залишок сплачується після завершення. Конкретний графік платежів буде викладений у договорі проєкту.',
          },
          delivery: {
            title: 'Доставка та терміни',
            content: 'Терміни проєкту оцінюються на основі обсягу та складності. Хоча ми прагнемо дотримуватися всіх термінів, вони можуть бути скориговані через зміни проєкту або непередбачені обставини. Результати надаються в електронному вигляді, якщо не узгоджено інше.',
          },
          intellectual: {
            title: 'Інтелектуальна власність',
            content: 'Після повної оплати весь кастомний код і результати, створені спеціально для вашого проєкту, стають вашою власністю. Існуючий код, фреймворки та інструменти залишаються власністю їх відповідних власників.',
          },
          liability: {
            title: 'Обмеження відповідальності',
            content: 'LiuTech не несе відповідальності за будь-які непрямі, випадкові або непрямі збитки, що виникають внаслідок використання наших послуг. Наша загальна відповідальність обмежена сумою, сплаченою за конкретний проєкт.',
          },
          contact: {
            title: 'Контактна інформація',
            content: 'З питань щодо цих умов звертайтеся до нас за адресою lubenemkrkm@gmail.com.',
          },
        },
      },
    },
    footer: {
      quickLinks: 'Швидкі посилання',
      legal: 'Юридична інформація',
      businessEntity: 'ФОП Любомир Шахуб',
      address: '32316, Україна, Хмельницька область, місто Кам\'янець-Подільський, вулиця Гетьмана Скоропадського, будинок 16, корпус А, квартира 34',
      allRightsReserved: 'Усі права захищені.',
    },
    theme: {
      light: 'Світла',
      dark: 'Темна',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'ua' || saved === 'en') ? saved : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  };

  const t = (key: string): any => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return value || key;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
