<template>
  <v-card class="tech-card" elevation="0">
    <div class="tech-icon-wrapper">
      <v-icon :color="tech.color" size="60" class="tech-icon">{{ tech.icon }}</v-icon>
      <div class="tech-glow" :style="{ boxShadow: `0 0 30px ${tech.color}` }"></div>
    </div>
    <h3 class="tech-name">{{ tech.name }}</h3>
    <p class="tech-description">{{ tech.description }}</p>
    <div class="progress-wrapper">
      <div class="progress-label">{{ $t('about.learningProgress') }}</div>
      <v-progress-linear
        :model-value="tech.progress"
        :color="tech.color"
        height="8"
        rounded
        class="progress-bar"
      ></v-progress-linear>
      <span class="progress-text">{{ tech.progress }}%</span>
    </div>
    <div class="tech-tags">
      <v-chip
        v-for="tag in tech.tags"
        :key="tag"
        size="small"
        :color="tech.color"
        variant="outlined"
        class="tech-tag"
      >
        {{ tag }}
      </v-chip>
    </div>
  </v-card>
</template>

<script setup>
defineProps({
  tech: {
    type: Object,
    required: true,
  },
})
</script>

<!-- CSS giữ nguyên -->

<style scoped>
.tech-card {
  padding: 2rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.tech-icon-wrapper {
  position: relative;
  margin-bottom: 1rem;
}
.tech-icon {
  margin-bottom: 1rem;
}
.tech-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: transparent;
  border-radius: 50%;
  z-index: -1;
}
.tech-name {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.tech-description {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 1rem;
  flex-grow: 1;
}
.progress-wrapper {
  position: relative;
  margin-bottom: 1rem;
}
.progress-label {
  font-size: 0.8rem;
  color: #777;
  margin-bottom: 0.25rem;
}
.progress-text {
  position: absolute;
  right: 0;
  top: 0;
  font-size: 0.8rem;
  font-weight: bold;
}
.tech-tags {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}
</style>
