import { createI18n } from 'vue-i18n'
import localesEN from '@/locales/en.json'
import localesUA from '@/locales/ua.json'


const i18n = createI18n({
    locale: import.meta.env.VUE_APP_I18N_LOCALE || 'ua',
    fallbackLocale: import.meta.env.VUE_APP_I18N_FALLBACK_LOCALE || 'ua',
    messages: {
        en: localesEN,
        ua: localesUA,
    },
})


export default i18n