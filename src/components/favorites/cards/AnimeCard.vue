<template>
  <v-card class="media-card anime-card" elevation="0">
    <div class="card-image-wrapper">
      <v-img
        :src="anime.image"
        :lazy-src="lazyPlaceholder"
        :alt="anime.title"
        height="280"
        cover
        class="card-image"
        loading="lazy"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-row>
        </template>

        <div class="image-overlay">
          <v-chip class="rating-chip" :color="anime.ratingColor" variant="flat">
            ⭐ {{ anime.rating }}
          </v-chip>
        </div>

        <div class="hover-overlay">
          <v-btn icon variant="flat" color="white" class="play-btn">
            <v-icon size="x-large">mdi-play</v-icon>
          </v-btn>
        </div>
      </v-img>
    </div>

    <v-card-title class="media-title">{{ anime.title }}</v-card-title>
    <v-card-subtitle class="media-subtitle">{{ anime.studio }}</v-card-subtitle>

    <v-card-text>
      <p class="media-description">{{ anime.description }}</p>
      <GenreTags :genres="anime.genres" />
    </v-card-text>
  </v-card>
</template>

<script setup>
import GenreTags from '../GenreTags.vue'

defineProps({
  anime: {
    type: Object,
    required: true,
  },
})

// Data URL placeholder nhỏ
const lazyPlaceholder =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZWVlIi8+PC9zdmc+'
</script>

<style scoped>
.media-card {
  height: 100%;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  /* Performance optimization */
  contain: layout style paint;
  will-change: transform;
}

.media-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.card-image-wrapper {
  position: relative;
  overflow: hidden;
}

.card-image {
  transition: transform 0.4s ease;
}

.card-image-wrapper:hover .card-image {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 2;
}

.hover-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card-image-wrapper:hover .hover-overlay {
  opacity: 1;
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
  animation: fade-in 0.6s ease-out 0.5s forwards;
  opacity: 0;
}

.play-btn {
  transform: scale(0);
  transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.media-card:hover .play-btn {
  transform: scale(1);
}

@keyframes fade-in {
  to {
    opacity: 1;
  }
}

/* Performance */
@media (prefers-reduced-motion: reduce) {
  .media-card,
  .card-image,
  .hover-overlay,
  .play-btn {
    transition: none !important;
  }

  .rating-chip {
    animation: none !important;
    opacity: 1;
  }
}
</style>
