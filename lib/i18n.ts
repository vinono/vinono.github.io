import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    common: {
      "title": "My Awesome Website",
      "home": "Home",
      "about": "About",
      "blog": "Blog"
    }
  },
  zh: {
    common: {
      "title": "我的很棒的网站",
      "home": "首页",
      "about": "关于",
      "blog": "博客"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    defaultNS: 'common',
    debug: process.env.NODE_ENV === 'development',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
