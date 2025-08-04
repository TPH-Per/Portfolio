<template>
  <div class="particles-container">
    <div v-for="i in particleCount" :key="i" class="particle" :style="getParticleStyle(i)"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const particleCount = ref(20)

const getParticleStyle = () => {
  const delay = Math.random() * 2
  const duration = 3 + Math.random() * 4
  const size = 2 + Math.random() * 4

  return {
    '--delay': delay + 's',
    '--duration': duration + 's',
    '--size': size + 'px',
    left: Math.random() * 100 + '%',
    animationDelay: delay + 's',
  }
}
</script>

<style scoped>
.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
}

.particle {
  position: absolute;
  width: var(--size);
  height: var(--size);
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1);
  border-radius: 50%;
  opacity: 0.6;
  animation: float var(--duration) ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-100px) rotate(180deg);
    opacity: 0.2;
  }
}
</style>
