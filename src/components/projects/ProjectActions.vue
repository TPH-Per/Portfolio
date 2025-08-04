<template>
  <v-card-actions class="project-actions">
    <v-btn
      :href="project.github"
      target="_blank"
      variant="outlined"
      color="primary"
      class="action-btn"
      prepend-icon="mdi-github"
    >
      GitHub
    </v-btn>
    <v-btn
      v-if="project.demo"
      :href="project.demo"
      target="_blank"
      variant="flat"
      color="success"
      class="action-btn demo-btn"
      prepend-icon="mdi-eye"
    >
      Demo
    </v-btn>
  </v-card-actions>
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
.project-actions {
  padding: 1rem;
  gap: 0.5rem;
}

.action-btn {
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.action-btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.5s ease;
}

.action-btn:hover::before {
  width: 300px;
  height: 300px;
}

.demo-btn:hover {
  animation: rainbow-bg 2s linear infinite;
}

@keyframes rainbow-bg {
  0% {
    background-color: #ff6b6b;
  }
  16.66% {
    background-color: #4ecdc4;
  }
  33.33% {
    background-color: #45b7d1;
  }
  50% {
    background-color: #96ceb4;
  }
  66.66% {
    background-color: #ffeaa7;
  }
  83.33% {
    background-color: #dda0dd;
  }
  100% {
    background-color: #ff6b6b;
  }
}
</style>
