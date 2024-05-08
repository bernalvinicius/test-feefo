import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './en.json';
import translationPT from './pt.json';

const resources = {
  en: {
    translation: translationEN,
  },
  pt: {
    translation: translationPT,
  },
};

/**
 * In this case it is a simulation of a multi-language application,
 * if the language is not identified in hypothetical localstorage then
 * the default value will be 'en'
 */
i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language')
    ? `${localStorage.getItem('language')}`
    : 'en',
  fallbackLng: 'en',
  supportedLngs: ['en', 'pt'],
  load: 'languageOnly',
  lowerCaseLng: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
