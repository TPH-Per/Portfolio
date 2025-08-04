<template>
  <v-row class="hero-section mb-8">
    <v-col cols="12" class="text-center">
      <h1 class="hero-title">
        <span
          v-for="(char, index) in heroTitle"
          :key="index"
          class="hero-char"
          :style="{ animationDelay: index * 0.1 + 's' }"
        >
          {{ char === ' ' ? '\u00A0' : char }}
        </span>
      </h1>
      <p class="hero-subtitle">{{ subtitle }}</p>
      <div class="progress-indicator">
        <v-progress-circular
          :model-value="progress"
          size="120"
          width="8"
          color="primary"
          class="floating-progress"
        >
          <span class="progress-text">{{ Math.round(progress) }}%</span>
        </v-progress-circular>
      </div>
    </v-col>
  </v-row>
</template>

<script setup>
defineProps({
  heroTitle: {
    type: String,
    required: true,
  },
  progress: {
    type: Number,
    required: true,
  },
})
</script>

<style scoped>
.hero-section {
  margin-bottom: 40px;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-char {
  display: inline-block;
  animation:
    wave-bounce 2s ease-in-out infinite,
    color-shift 3s linear infinite;
  transform-origin: center bottom;
  /* gpu  */
  will-change: transform;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  animation: fade-in-up 1s ease-out;
}

.progress-indicator {
  margin-top: 2rem;
}

.floating-progress {
  animation: float 3s ease-in-out infinite;
}

.progress-text {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
}

/* Animations */
@keyframes wave-bounce {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-10px) rotate(5deg);
  }
  75% {
    transform: translateY(-5px) rotate(-3deg);
  }
}

@keyframes color-shift {
  0% {
    color: #ff6b6b;
  }
  20% {
    color: #4ecdc4;
  }
  40% {
    color: #45b7d1;
  }
  60% {
    color: #96ceb4;
  }
  80% {
    color: #ffeaa7;
  }
  100% {
    color: #ff6b6b;
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
