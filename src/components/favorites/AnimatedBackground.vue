<template>
  <div class="animated-bg">
    <div v-for="i in iconCount" :key="i" class="floating-icon" :style="getFloatingIconStyle()">
      {{ getRandomIcon() }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const iconCount = ref(30)

const getFloatingIconStyle = () => {
  const delay = Math.random() * 10
  const duration = 10 + Math.random() * 10

  return {
    '--delay': delay + 's',
    '--duration': duration + 's',
    left: Math.random() * 100 + 'vw',
    top: Math.random() * 100 + 'vh',
    transform: `scale(${Math.random() * 0.5 + 0.5})`,
    animationDelay: delay + 's',
    animationDuration: duration + 's',
  }
}

const getRandomIcon = () => {
  const icons = ['🎌', '🎵', '📚', '💻', '⭐', '🎮', '🌸', '🔥']
  return icons[Math.floor(Math.random() * icons.length)]
}
</script>

<style scoped>
.animated-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 0;
}

.floating-icon {
  position: absolute;
  font-size: 2rem;
  opacity: 0;
  animation: float-icon var(--duration) linear infinite;
  animation-delay: var(--delay);
}

@keyframes float-icon {
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0.1;
  }
  100% {
    transform: translateY(-100vh) rotate(360deg);
    opacity: 0.1;
  }
}
</style>
