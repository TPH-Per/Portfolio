<template>
  <v-container fluid class="projects-container">
    <PageHeader />
    <ProjectsGrid :projects="projects" />
    <FloatingParticles />
  </v-container>
</template>

<script setup>
defineOptions({ name: 'ProjectsView' })

import PageHeader from '@/components/projects/PageHeader.vue'
import ProjectsGrid from '@/components/projects/ProjectGrid.vue'
import FloatingParticles from '@/components/projects/FloatingParticles.vue'
import { useProjectsData } from '@/composables/useProjectsData'

// Sử dụng composable để quản lý data
const { projects } = useProjectsData()
</script>

<style scoped>
.projects-container {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  padding: 2rem 1rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .projects-container {
    padding: 1rem 0.5rem;
  }
}
</style>
