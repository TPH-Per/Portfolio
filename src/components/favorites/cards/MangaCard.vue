<template>
  <v-card class="media-card manga-card" elevation="0">
    <MediaImage :image="manga.image" :title="manga.title" type="manga">
      <template #overlay>
        <v-chip class="author-chip" color="deep-purple" variant="flat">
          {{ manga.author }}
        </v-chip>
      </template>
      <template #hover-action>
        <v-btn icon variant="flat" color="white" class="read-btn">
          <v-icon size="x-large">mdi-book-open</v-icon>
        </v-btn>
      </template>
    </MediaImage>

    <v-card-title class="media-title">{{ manga.title }}</v-card-title>

    <v-card-text>
      <p class="media-description">{{ manga.description }}</p>
      <MangaStats :manga="manga" />
    </v-card-text>
  </v-card>
</template>

<script setup>
import MediaImage from '../MediaImage.vue'
import MangaStats from '../MangaStats.vue'

defineProps({
  manga: {
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

.media-description {
  color: #34495e;
  line-height: 1.6;
  font-size: 0.9rem;
}

.author-chip {
  animation: slide-in-right 0.6s ease-out 0.5s forwards;
  opacity: 0;
  transform: translateX(50px);
}

.read-btn {
  transform: scale(0);
  transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.media-card:hover .read-btn {
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
