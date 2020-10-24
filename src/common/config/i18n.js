import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationVI from 'public/locales/translation/vi_VN.json';
import translationUS from 'public/locales/translation/en_US.json';


// the translations
const resources = {
    vi_VN: {
        translation: translationVI
    },
    en_US: {
        translation: translationUS
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en_US",

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });


export default i18n;