import { createI18n } from 'vue-i18n'
import en from './en.js'
import vi from './vi.js'
import ja from './ja.js'

const messages = {
  en,
  vi,
  ja,
}

// Lấy locale từ localStorage hoặc mặc định 'en'
const locale = localStorage.getItem('locale') || 'en'

const i18n = createI18n({
  legacy: false,
  locale,
  fallbackLocale: 'en',
  messages,
  globalInjection: true,
})

export default i18n
