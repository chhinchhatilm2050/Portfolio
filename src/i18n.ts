import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enTranslation from './locales/en/translation.json'
import kmTranslation from './locales/km/translation.json'

const resources = {
  en: { translation: enTranslation },
  km: { translation: kmTranslation },
}

const savedLang = localStorage.getItem('language') ?? 'en'

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLang,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already handles XSS
    },
  })

// Sync <html lang="..."> and CSS classes dynamically on language change
const applyHtmlLanguage = (lng: string) => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = lng
    document.documentElement.setAttribute('data-lang', lng)
    if (lng === 'km') {
      document.documentElement.classList.add('lang-km')
    } else {
      document.documentElement.classList.remove('lang-km')
    }
  }
}

// Apply on initial load
applyHtmlLanguage(savedLang)

// Listen to runtime language changes
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng)
  applyHtmlLanguage(lng)
})

export default i18n
