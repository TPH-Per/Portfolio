<template>
  <div class="content-wrapper">
    <AnimeSection v-show="activeCategory === 'anime'" />
    <MangaSection v-show="activeCategory === 'manga'" />
    <MusicSection v-show="activeCategory === 'music'" />
    <TechnologySection v-show="activeCategory === 'tech'" />
  </div>
</template>

<script setup>
import AnimeSection from './sections/AnimeSection.vue'
import MangaSection from './sections/MangaSection.vue'
import MusicSection from './sections/MusicSection.vue'
import TechnologySection from './sections/TechSection.vue'

defineProps({
  activeCategory: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.content-wrapper {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
