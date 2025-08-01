<template>
  <v-menu offset-y>
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" icon size="small" class="language-btn">
        <span class="flag-emoji">{{ currentLocale.flag }}</span>
      </v-btn>
    </template>

    <v-list density="compact">
      <v-list-item
        v-for="locale in availableLocales"
        :key="locale.code"
        @click="changeLanguage(locale.code)"
        :active="locale.code === $i18n.locale.value"
      >
        <template v-slot:prepend>
          <span class="flag-emoji me-2">{{ locale.flag }}</span>
        </template>
        <v-list-item-title>{{ locale.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const availableLocales = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
]

const currentLocale = computed(() => {
  return availableLocales.find((l) => l.code === locale.value) || availableLocales[0]
})

const changeLanguage = (newLocale) => {
  locale.value = newLocale
  localStorage.setItem('locale', newLocale)
}
</script>

<style scoped>
.language-btn {
  transition: all 0.3s ease;
}

.language-btn:hover {
  transform: scale(1.1);
}

.flag-emoji {
  font-size: 1.2rem;
}
</style>
