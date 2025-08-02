<template>
  <v-card class="media-card anime-card" elevation="0">
    <MediaImage
      :image="anime.image"
      :title="anime.title"
      type="anime"
      loading="lazy"
      placeholder="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
    >
      <template #overlay>
        <v-chip class="rating-chip" :color="anime.ratingColor" variant="flat">
          ⭐ {{ anime.rating }}
        </v-chip>
      </template>
      <template #hover-action>
        <v-btn icon variant="flat" color="white" class="play-btn">
          <v-icon size="x-large">mdi-play</v-icon>
        </v-btn>
      </template>
    </MediaImage>

    <v-card-title class="media-title">{{ anime.title }}</v-card-title>
    <v-card-subtitle class="media-subtitle">{{ anime.studio }}</v-card-subtitle>

    <v-card-text>
      <p class="media-description">{{ anime.description }}</p>
      <GenreTags :genres="anime.genres" />
    </v-card-text>
  </v-card>
</template>

<script setup>
import MediaImage from '../MediaImage.vue'
import GenreTags from '../GenreTags.vue'

defineProps({
  anime: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.media-card {
  height: 100%;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  overflow: hidden;
  position: relative;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  will-change: transform, box-shadow;
}

.media-card:hover {
  transform: translateY(-15px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

.media-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #2c3e50;
  line-height: 1.3;
}

.media-subtitle {
  color: #7f8c8d;
  font-weight: 500;
}

.media-description {
  color: #34495e;
  line-height: 1.6;
  font-size: 0.9rem;
}

.rating-chip {
  animation: slide-in-right 0.6s ease-out 0.5s forwards;
  opacity: 0;
  transform: translateX(50px);
}

.play-btn {
  transform: scale(0);
  transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.media-card:hover .play-btn {
  transform: scale(1);
}

@keyframes slide-in-right {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
