<template>
  <div class="particles-container">
    <div v-for="n in 20" :key="n" class="particle" :style="getParticleStyle(n)"></div>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const getParticleStyle = (n) => {
  return {
    left: Math.random() * 100 + '%',
    animationDelay: Math.random() * 10 + 's',
    animationDuration: Math.random() * 10 + 5 + 's',
  }
}
</script>

<style scoped>
.particles-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
  border-radius: 50%;
  animation: float 10s infinite linear;
  opacity: 0.7;
  will-change: transform, opacity;
}

@keyframes float {
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.7;
  }
  90% {
    opacity: 0.7;
  }
  100% {
    transform: translateY(-10vh) rotate(360deg);
    opacity: 0;
  }
}

@media (max-width: 600px) {
  .particle {
    width: 2px;
    height: 2px;
  }
}
</style>
