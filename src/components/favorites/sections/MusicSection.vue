<template>
  <div class="category-section">
    <SectionHeader :title="$t('favorites.musicTaste')" icon="mdi-music-note" />

    <MusicSubsection
      :title="$t('favorites.anison')"
      icon="mdi-microphone"
      icon-color="pink"
      :songs="anisonList"
      type="anison"
      @play-song="handlePlaySong"
    />

    <MusicSubsection
      :title="$t('favorites.vocaloid')"
      icon="mdi-robot"
      icon-color="cyan"
      :songs="vocaloidList"
      type="vocaloid"
      @play-song="handlePlaySong"
    />
  </div>
</template>

<script setup>
import SectionHeader from '../SectionHeader.vue'
import MusicSubsection from '../MusicSubsection.vue'
import { useFavoritesData } from '@/composables/useFavoritesData'

const { anisonList, vocaloidList } = useFavoritesData()

const handlePlaySong = (song) => {
  console.log('Playing song:', song.title, 'by', song.artist)
}
</script>

<!-- CSS giữ nguyên -->

<style scoped>
.category-section {
  animation: fade-in 0.8s ease-out;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
