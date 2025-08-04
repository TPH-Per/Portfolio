<template>
  <div class="section-header">
    <h2 class="section-title">
      <v-icon class="pulse-icon">{{ icon }}</v-icon>
      {{ title }}
    </h2>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.8rem;
  font-weight: 800;
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
}

.pulse-icon {
  animation: pulse-glow 2.5s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%,
  100% {
    text-shadow:
      0 0 10px currentColor,
      0 0 20px currentColor;
    transform: scale(1);
  }
  50% {
    text-shadow:
      0 0 20px currentColor,
      0 0 40px currentColor;
    transform: scale(1.1);
  }
}
</style>
