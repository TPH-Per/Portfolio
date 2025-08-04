<template>
  <div class="category-section">
    <SectionHeader :title="$t('favorites.animeWatching')" icon="mdi-television-play" />
    <v-row>
      <v-col
        v-for="(anime, index) in animeList"
        :key="anime.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        class="fade-in-item"
        :style="{ animationDelay: index * 0.2 + 's' }"
      >
        <AnimeCard :anime="anime" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import SectionHeader from '../SectionHeader.vue'
import AnimeCard from '../cards/AnimeCard.vue'
import { useFavoritesData } from '@/composables/useFavoritesData'

const { animeList } = useFavoritesData()
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
