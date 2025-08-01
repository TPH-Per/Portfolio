<template>
  <v-row justify="center" class="mb-8">
    <v-col cols="12" md="10" lg="8">
      <div class="text-center header-section">
        <h1 class="display-1 font-weight-bold text-primary mb-4 bounce-in-title">
          <span
            v-for="(char, index) in titleChars"
            :key="index"
            class="animated-char"
            :style="{ animationDelay: index * 0.1 + 's' }"
          >
            {{ char === ' ' ? '\u00A0' : char }}
          </span>
        </h1>
        <p class="subtitle fade-in-up">{{ $t('favorites.subtitle') }}</p>
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
const titleText = computed(() => t('favorites.title'))
const titleChars = computed(() => titleText.value.split(''))
</script>

<style scoped>
.header-section {
  position: relative;
  z-index: 2;
}

.display-1 {
  font-size: 3rem !important;
  color: #1976d2; /* Màu primary của Vuetify */
}

.bounce-in-title .animated-char {
  display: inline-block;
  opacity: 0;
  animation: bounce-in 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
  transform: translateY(50px);
}

.subtitle {
  font-size: 1.3rem;
  color: #4a4a4a;
  font-style: italic;
  font-weight: 500;
  opacity: 0;
  animation: fade-in-up 1s ease-out 1.2s forwards;
  max-width: 600px;
  margin: 0 auto 1.5rem auto; /* Căn giữa và thêm khoảng cách với divider */
}

.animated-divider {
  opacity: 0;
  animation: grow-divider 1s ease-out 1s forwards;
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
  .subtitle {
    font-size: 1.1rem;
  }
}
</style>
