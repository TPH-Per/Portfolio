<template>
  <div v-if="show" class="celebration-container">
    <div
      v-for="n in 30"
      :key="'celebration-' + n"
      class="celebration-particle"
      :style="getCelebrationStyle(n)"
    ></div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'CelebrationEffect',
})

defineProps({
  show: {
    type: Boolean,
    default: false,
  },
})

const getCelebrationStyle = (n) => {
  const colors = [
    '#ff6b6b',
    '#4ecdc4',
    '#45b7d1',
    '#96ceb4',
    '#feca57',
    '#ff9ff3',
    '#54a0ff',
    '#5f27cd',
    '#00d2d3',
    '#ff9f43',
  ]

  return {
    left: Math.random() * 100 + '%',
    top: Math.random() * 100 + '%',
    animationDelay: n * 0.1 + 's',
    background: `radial-gradient(circle, ${colors[n % colors.length]}, ${colors[(n + 1) % colors.length]})`,
    animationDuration: 2 + Math.random() * 2 + 's',
  }
}
</script>

<style scoped>
.celebration-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
}

.celebration-particle {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  animation: celebrate 3s ease-out forwards;
}

@keyframes celebrate {
  0% {
    transform: translateY(100vh) scale(0) rotate(0deg);
    opacity: 1;
  }
  50% {
    transform: translateY(50vh) scale(1) rotate(180deg);
    opacity: 1;
  }
  100% {
    transform: translateY(-10vh) scale(0) rotate(360deg);
    opacity: 0;
  }
}

/* Celebration particles with different shapes */
.celebration-particle:nth-child(3n) {
  border-radius: 0;
  transform: rotate(45deg);
}

.celebration-particle:nth-child(5n) {
  width: 6px;
  height: 6px;
  animation: celebrateHeart 3s ease-out forwards;
}

@keyframes celebrateHeart {
  0% {
    transform: translateY(100vh) scale(0) rotate(0deg);
    opacity: 1;
  }
  25% {
    transform: translateY(75vh) scale(1.5) rotate(90deg);
    opacity: 1;
  }
  50% {
    transform: translateY(50vh) scale(1) rotate(180deg);
    opacity: 1;
  }
  75% {
    transform: translateY(25vh) scale(1.2) rotate(270deg);
    opacity: 0.8;
  }
  100% {
    transform: translateY(-10vh) scale(0) rotate(360deg);
    opacity: 0;
  }
}

/* Stars effect */
.celebration-particle:nth-child(7n) {
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  width: 12px;
  height: 12px;
  animation: celebrateStar 4s ease-out forwards;
}

@keyframes celebrateStar {
  0% {
    transform: translateY(100vh) scale(0) rotate(0deg);
    opacity: 1;
  }
  30% {
    transform: translateY(70vh) scale(1.5) rotate(120deg);
    opacity: 1;
  }
  60% {
    transform: translateY(40vh) scale(1) rotate(240deg);
    opacity: 1;
  }
  100% {
    transform: translateY(-20vh) scale(0) rotate(360deg);
    opacity: 0;
  }
}

/* Confetti ribbons */
.celebration-particle:nth-child(11n) {
  width: 15px;
  height: 4px;
  border-radius: 2px;
  animation: celebrateRibbon 3.5s ease-out forwards;
}

@keyframes celebrateRibbon {
  0% {
    transform: translateY(100vh) rotateX(0deg) rotateY(0deg);
    opacity: 1;
  }
  50% {
    transform: translateY(50vh) rotateX(180deg) rotateY(180deg);
    opacity: 1;
  }
  100% {
    transform: translateY(-10vh) rotateX(360deg) rotateY(360deg);
    opacity: 0;
  }
}
</style>
