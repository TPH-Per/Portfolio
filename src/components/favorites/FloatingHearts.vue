<template>
  <div class="hearts-container">
    <div v-for="i in heartCount" :key="i" class="floating-heart" :style="getHeartStyle(i)">💖</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const heartCount = ref(15)

const getHeartStyle = () => {
  const delay = Math.random() * 5
  const duration = 5 + Math.random() * 5

  return {
    '--delay': delay + 's',
    '--duration': duration + 's',
    left: Math.random() * 100 + 'vw',
    animationDelay: delay + 's',
    animationDuration: duration + 's',
  }
}
</script>

<style scoped>
.hearts-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 999;
}

.floating-heart {
  position: absolute;
  font-size: 1.5rem;
  opacity: 0;
  animation: float-heart var(--duration) linear infinite;
  animation-delay: var(--delay);
}

@keyframes float-heart {
  0% {
    transform: translateY(110vh) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(-10vh) rotate(720deg);
    opacity: 0;
  }
}
</style>
