import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationTR from './assets/locales/tr/translationTR.json'
import translationEN from './assets/locales/en/translationEN.json'

const resources = {
    en: {
        translation: translationEN
    },
    tr: {
        translation: translationTR
    }
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng:'tr',

        keySeparator: false,
    })

export default i18n