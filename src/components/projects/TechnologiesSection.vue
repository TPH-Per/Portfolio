<template>
  <v-card-text class="tech-section">
    <div class="tech-label">{{ $t('projects.technologies') }}</div>
    <div class="tech-chips">
      <v-chip
        v-for="(tech, techIndex) in technologies"
        :key="tech.name"
        :color="tech.color"
        variant="flat"
        size="small"
        class="tech-chip"
        :style="{
          animationDelay: techIndex * 0.1 + 's',
          '--hover-delay': techIndex * 0.05 + 's',
        }"
      >
        <v-icon start :icon="tech.icon"></v-icon>
        {{ tech.name }}
      </v-chip>
    </div>
  </v-card-text>
</template>

<script setup>
defineProps({
  technologies: {
    type: Array,
    required: true,
  },
})
</script>

<!-- CSS giữ nguyên -->

<style scoped>
.tech-section {
  padding-top: 1rem;
}

.tech-label {
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.tech-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-chip {
  opacity: 0;
  transform: translateY(20px);
  animation: chip-appear 0.5s ease-out forwards;
  transition: all 0.3s ease;
}

.tech-chip:hover {
  transform: translateY(-2px) scale(1.05);
  animation-delay: var(--hover-delay);
}

@keyframes chip-appear {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .tech-chips {
    justify-content: center;
  }
}
</style>
