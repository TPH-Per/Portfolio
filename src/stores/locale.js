import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import i18n from '@/locales' // 👈 Import trực tiếp i18n instance

export const useLocaleStore = defineStore('locale', () => {
  // Lấy locale từ localStorage hoặc mặc định là 'en'
  const locale = ref(localStorage.getItem('locale') || 'en')

  const availableLocales = ref([
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
  ])

  const currentLocale = computed(() => {
    return availableLocales.value.find((l) => l.code === locale.value) || availableLocales.value[0]
  })

  function setLocale(newLocale) {
    locale.value = newLocale
    i18n.global.locale.value = newLocale // Cập nhật locale của vue-i18n
    localStorage.setItem('locale', newLocale) // Lưu vào localStorage
  }

  return {
    locale,
    availableLocales,
    currentLocale,
    setLocale,
  }
})
