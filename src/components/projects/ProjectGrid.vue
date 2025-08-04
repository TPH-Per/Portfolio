<template>
  <v-row class="projects-grid">
    <v-col
      v-for="(project, index) in projects"
      :key="project.id"
      cols="12"
      md="6"
      lg="4"
      class="project-col"
      :style="{ animationDelay: index * 0.2 + 's' }"
    >
      <ProjectCard
        :project="project"
        :index="index"
        @card-hover="handleCardHover"
        @card-leave="handleCardLeave"
      />
    </v-col>
  </v-row>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue'

defineProps({
  projects: {
    type: Array,
    required: true,
  },
})

const handleCardHover = (index) => {
  // Xử lý logic hover nếu cần
  console.log('Card hovered:', index)
}

const handleCardLeave = (index) => {
  // Xử lý logic leave nếu cần
  console.log('Card left:', index)
}
</script>

<style scoped>
.projects-grid {
  position: relative;
  z-index: 2;
}

.project-col {
  opacity: 0;
  transform: translateY(50px);
  animation: slide-in-up 0.8s ease-out forwards;
}

@keyframes slide-in-up {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .project-col {
    margin-bottom: 2rem;
  }
}
</style>
