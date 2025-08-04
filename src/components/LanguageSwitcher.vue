<template>
  <v-menu offset-y>
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" icon size="small" class="language-btn">
        <span class="flag-emoji">{{ localeStore.currentLocale.flag }}</span>
      </v-btn>
    </template>

    <v-list density="compact">
      <v-list-item
        v-for="lang in localeStore.availableLocales"
        :key="lang.code"
        @click="localeStore.setLocale(lang.code)"
        :active="lang.code === localeStore.locale"
      >
        <template v-slot:prepend>
          <span class="flag-emoji me-2">{{ lang.flag }}</span>
        </template>
        <v-list-item-title>{{ lang.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup>
import { useLocaleStore } from '@/stores/locale' // 👈 Import store

const localeStore = useLocaleStore() // 👈 Sử dụng store
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
