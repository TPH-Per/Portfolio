<template>
  <BaseSection title="Learning Technology" icon="mdi-code-tags">
    <div class="tech-grid">
      <div
        v-for="(tech, index) in techList"
        :key="tech.id"
        class="tech-item fade-in-item"
        :style="{ animationDelay: index * 0.1 + 's' }"
      >
        <TechCard :tech="tech" />
      </div>
    </div>
  </BaseSection>
</template>

<script setup>
import BaseSection from './BaseSection.vue'
import TechCard from '../cards/TechCard.vue'

defineProps({
  techList: Array,
})
</script>

<style scoped>
.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.fade-in-item {
  opacity: 0;
  transform: translateY(50px);
  animation: slide-in-up 0.8s ease-out forwards;
}

@keyframes slide-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
