<template>
  <div class="category-section">
    <SectionHeader :title="$t('favorites.mangaReading')" icon="mdi-book-open-page-variant" />
    <v-row>
      <v-col
        v-for="(manga, index) in mangaList"
        :key="manga.id"
        cols="12"
        sm="6"
        md="4"
        class="fade-in-item"
        :style="{ animationDelay: index * 0.2 + 's' }"
      >
        <MangaCard :manga="manga" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import SectionHeader from '../SectionHeader.vue'
import MangaCard from '../cards/MangaCard.vue'
import { useFavoritesData } from '@/composables/useFavoritesData'

const { mangaList } = useFavoritesData()
</script>

<!-- CSS giữ nguyên -->

<style scoped>
.category-section {
  animation: fade-in 0.8s ease-out;
}

.fade-in-item {
  opacity: 0;
  transform: translateY(50px);
  animation: slide-in-up 0.8s ease-out forwards;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slide-in-up {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
