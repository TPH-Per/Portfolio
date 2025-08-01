<template>
  <div class="category-section">
    <SectionHeader title="Music Taste" icon="mdi-music-note" />

    <MusicSubsection
      title="Anison"
      icon="mdi-microphone"
      icon-color="pink"
      :songs="anisonList"
      type="anison"
      @play-song="handlePlaySong"
    />

    <MusicSubsection
      title="Vocaloid"
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
  // Xử lý logic phát nhạc ở đây
  console.log('Playing song:', song.title, 'by', song.artist)
  // Có thể emit event lên parent hoặc gọi service phát nhạc
}
</script>

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
