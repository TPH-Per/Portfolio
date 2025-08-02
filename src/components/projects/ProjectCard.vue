<template>
  <v-card
    class="project-card"
    elevation="0"
    @mouseenter="$emit('card-hover', index)"
    @mouseleave="$emit('card-leave', index)"
  >
    <ProjectImage :project="project" />

    <v-card-title class="project-title">
      {{ project.title }}
    </v-card-title>

    <v-card-subtitle class="project-subtitle">
      {{ project.subtitle }}
    </v-card-subtitle>

    <v-card-text class="project-description">
      {{ project.description }}
    </v-card-text>

    <TechnologiesSection :technologies="project.technologies" />

    <ProjectActions :project="project" />
  </v-card>
</template>

<script setup>
import ProjectImage from './ProjectImage.vue'
import TechnologiesSection from './TechnologiesSection.vue'
import ProjectActions from './ProjectActions.vue'

defineProps({
  project: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
})

defineEmits(['card-hover', 'card-leave'])
</script>

<style scoped>
.project-card {
  height: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  overflow: hidden;
  position: relative;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  will-change: transform, box-shadow;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s;
  z-index: 1;
}

.project-card:hover::before {
  transform: translateX(100%);
}

.project-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.2),
    0 0 50px rgba(0, 123, 255, 0.1);
}

.project-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #2c3e50;
  padding-bottom: 0.5rem;
}

.project-subtitle {
  color: #7f8c8d;
  font-weight: 600;
  font-size: 0.9rem;
}

.project-description {
  color: #34495e;
  line-height: 1.6;
  font-size: 0.95rem;
}
</style>
