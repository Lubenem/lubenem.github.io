import { useState, createContext, useContext, useEffect } from 'react';

type Language = 'en' | 'ua';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

// Simple translation dictionary
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.free_estimate': 'Free Estimate',

    // Hero
    'hero.headline': 'BUILT TO LAST. GENERATIONS OF QUALITY.',
    'hero.subhead': 'Premier roofing and remodeling services in Wauwatosa and beyond.',
    'hero.cta': 'Get a Free Estimate',

    // Services
    'services.title': 'OUR EXPERTISE',
    'services.roofing': 'Roof Replacement',
    'services.roofing_desc': 'Complete tear-offs and installation of premium asphalt, metal, and flat roofing systems.',
    'services.repair': 'Roof Repair',
    'services.repair_desc': 'Targeted fixes for leaks, storm damage, and wear to extend your roof\'s life.',
    'services.siding': 'Siding & Gutters',
    'services.siding_desc': 'Durable vinyl and fiber cement siding installation combined with seamless gutter systems.',
    'services.remodeling': 'Remodeling',
    'services.remodeling_desc': 'Interior and exterior renovations to modernize and add value to your property.',
    'services.emergency': 'Emergency Tarping',
    'services.emergency_desc': '24/7 rapid response to secure your home after severe weather events.',

    // Projects
    'projects.title': 'OUR WORK',
    'projects.caption': 'Precision in every shingle.',
    'projects.view_more': 'View More Projects',

    // Testimonials
    'testimonials.title': 'CLIENT STORIES',
    
    // Contact / Appointment
    'contact.title': 'CONTACT US',
    'contact.schedule_title': 'Schedule an Inspection',
    'contact.form_title': 'Send us a Message',
    'contact.name': 'Your Name',
    'contact.email': 'Email Address',
    'contact.phone': 'Phone Number',
    'contact.message': 'How can we help?',
    'contact.submit': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success': 'Message sent successfully!',
    
    // Footer
    'footer.rights': 'All rights reserved.',
  },
  ua: {
    // Nav
    'nav.home': 'Головна',
    'nav.services': 'Послуги',
    'nav.projects': 'Проекти',
    'nav.contact': 'Контакти',
    'nav.free_estimate': 'Безкоштовна Оцінка',

    // Hero
    'hero.headline': 'ЗБУДОВАНО НА ВІКИ. ПОКОЛІННЯ ЯКОСТІ.',
    'hero.subhead': 'Першокласні послуги покрівлі та ремонту у Воватосі та за її межами.',
    'hero.cta': 'Отримати Оцінку',

    // Services
    'services.title': 'НАШІ ПОСЛУГИ',
    'services.roofing': 'Заміна Даху',
    'services.roofing_desc': 'Повна заміна та монтаж преміальної бітумної, металевої та плоскої покрівлі.',
    'services.repair': 'Ремонт Даху',
    'services.repair_desc': 'Цільовий ремонт протікань, пошкоджень від штормів та зносу для продовження терміну служби.',
    'services.siding': 'Сайдинг та Ринви',
    'services.siding_desc': 'Монтаж довговічного вінілового та фіброцементного сайдингу з безшовними водостічними системами.',
    'services.remodeling': 'Реконструкція',
    'services.remodeling_desc': 'Внутрішні та зовнішні ремонтні роботи для модернізації та підвищення вартості вашої нерухомості.',
    'services.emergency': 'Аварійне Перекриття',
    'services.emergency_desc': 'Цілодобове реагування для захисту вашого будинку після негоди.',

    // Projects
    'projects.title': 'НАШІ РОБОТИ',
    'projects.caption': 'Точність у кожній деталі.',
    'projects.view_more': 'Більше Проектів',

    // Testimonials
    'testimonials.title': 'ВІДГУКИ КЛІЄНТІВ',

    // Contact / Appointment
    'contact.title': 'КОНТАКТИ',
    'contact.schedule_title': 'Запланувати Огляд',
    'contact.form_title': 'Надіслати Повідомлення',
    'contact.name': "Ваше Ім'я",
    'contact.email': 'Електронна Пошта',
    'contact.phone': 'Номер Телефону',
    'contact.message': 'Як ми можемо допомогти?',
    'contact.submit': 'Надіслати',
    'contact.sending': 'Відправлення...',
    'contact.success': 'Повідомлення успішно надіслано!',

    // Footer
    'footer.rights': 'Всі права захищено.',
  }
};

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export { translations };
export type { Language };
