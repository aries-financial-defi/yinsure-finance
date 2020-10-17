import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { reactI18nextModule } from "react-i18next";

import translationEN from './locales/en/translation.json';
import translationJA from './locales/ja/translation.json';
import translationCN from './locales/cn/translation.json';
import translationTW from './locales/tw/translation.json';

// the translations
const resources = {
    en: {
        translation: translationEN
    },
    tw: {
        translation: translationTW
    },
    ja: {
        translation: translationJA
    },
    cn: {
        translation: translationCN
    }
};

i18n
    .use(detector)
    .use(reactI18nextModule) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "ja",//default
        fallbackLng: "en",

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });
const i18nKeys = Object.keys(resources).reduce((obj,key)=>{
    obj[key]=key;
    return obj;
}, {});
console.log(i18nKeys)
export { i18nKeys };
export default i18n;
