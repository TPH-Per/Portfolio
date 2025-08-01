import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useLocaleStore = defineStore('locale', () => {
  // State
  const currentLocale = ref(localStorage.getItem('locale') || 'en')
  const availableLocales = ref([
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
  ])

  // Getters
  const currentLocaleName = computed(() => {
    const locale = availableLocales.value.find((l) => l.code === currentLocale.value)
    return locale ? locale.name : 'English'
  })

  const currentLocaleFlag = computed(() => {
    const locale = availableLocales.value.find((l) => l.code === currentLocale.value)
    return locale ? locale.flag : '🇺🇸'
  })

  // Actions
  const setLocale = (locale) => {
    currentLocale.value = locale
    localStorage.setItem('locale', locale)
  }

  const toggleLocale = () => {
    const currentIndex = availableLocales.value.findIndex((l) => l.code === currentLocale.value)
    const nextIndex = (currentIndex + 1) % availableLocales.value.length
    setLocale(availableLocales.value[nextIndex].code)
  }

  return {
    currentLocale,
    availableLocales,
    currentLocaleName,
    currentLocaleFlag,
    setLocale,
    toggleLocale,
  }
})
