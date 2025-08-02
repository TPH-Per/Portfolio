<template>
  <div class="card-image-wrapper">
    <v-img :src="image" :height="imageHeight" cover class="card-image" :alt="title" loading="lazy">
    </v-img>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'default',
  },
})

const imageHeight = computed(() => {
  switch (props.type) {
    case 'anime':
      return 280
    case 'manga':
      return 320
    default:
      return 200
  }
})
</script>

<style scoped>
.card-image-wrapper {
  position: relative;
  overflow: hidden;
}

.card-image {
  transition: all 0.4s ease;
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
</style>
