<template>
  <v-row justify="center" class="mb-8">
    <v-col cols="12" md="10" lg="8">
      <div class="text-center header-section">
        <h1 class="display-1 font-weight-bold text-primary mb-4 bounce-in-title">
          <span
            v-for="(char, index) in headerChars"
            :key="index"
            class="animated-char"
            :style="{ animationDelay: index * 0.1 + 's' }"
          >
            {{ char === ' ' ? '\u00A0' : char }}
          </span>
        </h1>
        <p class="header-subtitle fade-in-up">{{ $t('projects.subtitle') }}</p>
        <v-divider
          class="mx-auto animated-divider"
          style="max-width: 200px; height: 3px"
          color="primary"
        ></v-divider>
      </div>
    </v-col>
  </v-row>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const headerText = computed(() => t('projects.title'))
const headerChars = computed(() => headerText.value.split(''))
</script>

<style scoped>
.header-section {
  position: relative;
  z-index: 2;
}

.display-1 {
  font-size: 3rem !important;
  color: #1976d2;
  font-weight: 900; /* Tăng độ đậm cho tiêu đề */
}

/* Hiệu ứng mới cho tiêu đề */
.bounce-in-title .animated-char {
  display: inline-block;
  opacity: 0;
  transform: translateY(40px);
  animation: slide-in-fwd 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.header-subtitle {
  font-size: 1.25rem;
  color: #55606e;
  font-weight: 500;
  letter-spacing: 0.5px;
  opacity: 0;
  animation: fade-in-up 1s ease-out 1s forwards; /* Tăng delay */
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;
}

.animated-divider {
  opacity: 0;
  animation: grow-divider 1s ease-out 1.2s forwards; /* Tăng delay */
}

/* Keyframes cho hiệu ứng mới */
@keyframes slide-in-fwd {
  0% {
    transform: translateY(40px) scale(0.9);
    opacity: 0;
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
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

@keyframes grow-divider {
  from {
    width: 0;
    opacity: 0;
  }
  to {
    width: 200px;
    opacity: 1;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .display-1 {
    font-size: 2.5rem !important;
  }
  .header-subtitle {
    font-size: 1.1rem;
  }
}
</style>
