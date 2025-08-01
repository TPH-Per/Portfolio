<template>
  <div class="page-header">
    <h1 class="main-title">
      <span
        v-for="(char, index) in titleChars"
        :key="index"
        class="title-char"
        :style="{ animationDelay: index * 0.1 + 's' }"
      >
        {{ char === ' ' ? '\u00A0' : char }}
      </span>
    </h1>
    <p class="subtitle">Những thứ tôi yêu thích và đam mê</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const titleText = 'MY FAVORITES'
const titleChars = computed(() => titleText.split(''))
</script>

<style scoped>
.page-header {
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  z-index: 2;
}

.main-title {
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 900;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #ff69b4, #ff1493, #9370db, #4169e1);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient-flow 5s ease-in-out infinite;
}

.title-char {
  display: inline-block;
  animation: bounce-in 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
  opacity: 0;
  transform: translateY(50px);
}

.subtitle {
  font-size: 1.25rem;
  color: #555;
  opacity: 0;
  animation: fade-in-up 1s ease-out 1s forwards;
}

@keyframes gradient-flow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: translateY(50px) rotateX(90deg);
  }
  60% {
    transform: translateY(-20px) rotateX(0deg);
  }
  80% {
    transform: translateY(5px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
