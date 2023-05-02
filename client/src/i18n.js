import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import translations_en from '../public/locales/en/translation.json';
import translations_uk from '../public/locales/uk/translation.json';

i18n.use(initReactI18next).init({
    lng: 'uk',
    fallbackLng: 'uk',
    debug: true,
    detection: {
        order: ['queryString', 'cookie'],
        cache: ['cookie']
    },
    resources: {
        en: {translation: translations_en},
        uk: {translation: translations_uk}
    },
    interpolation: {
        escapeValue: false,
    },
}).catch((error) => {
    console.error('Failed to initialize localization', err)
});

export default i18n;
