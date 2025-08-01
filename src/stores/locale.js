import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

export const useLocaleStore = defineStore('locale', () => {
  const { locale } = useI18n()

  const availableLocales = ref([
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
  ])

  const currentLocaleName = computed(() => {
    const current = availableLocales.value.find((l) => l.code === locale.value)
    return current ? current.name : 'English'
  })

  const setLocale = (newLocale) => {
    locale.value = newLocale
    localStorage.setItem('locale', newLocale)
  }

  return {
    locale,
    availableLocales,
    currentLocaleName,
    setLocale,
  }
})
