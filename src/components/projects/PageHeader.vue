<template>
  <div class="page-header">
    <h1 class="animated-header">
      <span
        v-for="(char, index) in headerChars"
        :key="index"
        class="header-char"
        :style="{ animationDelay: index * 0.1 + 's' }"
      >
        {{ char === ' ' ? '\u00A0' : char }}
      </span>
    </h1>
    <p class="header-subtitle fade-in-up">Khám phá những dự án tôi đã thực hiện</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const headerText = 'MY PROJECTS'
const headerChars = computed(() => headerText.split(''))
</script>

<style scoped>
.page-header {
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  z-index: 2;
}

.animated-header {
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient-shift 3s ease-in-out infinite;
}

.header-char {
  display: inline-block;
  animation: bounce-in 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(50px) scale(0);
}

.header-subtitle {
  font-size: 1.2rem;
  color: #666;
  opacity: 0;
  animation: fade-in-up 1s ease-out 0.5s forwards;
}

/* Keyframes */
@keyframes gradient-shift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes bounce-in {
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes fade-in-up {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .animated-header {
    font-size: 2.5rem;
  }

  .header-subtitle {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .animated-header {
    font-size: 2rem;
  }
}
</style>
