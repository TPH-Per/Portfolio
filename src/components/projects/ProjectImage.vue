<template>
  <div class="project-image-container">
    <v-img
      :src="project.image"
      height="200"
      cover
      class="project-image"
      :alt="project.title"
      loading="lazy"
    >
    </v-img>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.project-image-container {
  position: relative;
  overflow: hidden;
}

.project-image {
  transition: transform 0.4s ease;
}

.project-card:hover .project-image {
  transform: scale(1.1);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-image-container:hover .overlay {
  opacity: 1;
}

.github-btn {
  transform: scale(0);
  transition: transform 0.3s ease 0.1s;
}

.project-image-container:hover .github-btn {
  transform: scale(1);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}
</style>
