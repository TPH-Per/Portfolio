<template>
  <v-row justify="center" class="mb-8">
    <v-col cols="12" md="10" lg="8">
      <v-card elevation="4" class="pa-6 floating-card pulse-card">
        <v-card-title class="text-h4 text-center mb-4 rotate-in">
          <v-icon left color="primary" size="large" class="heartbeat-icon">
            mdi-account-heart
          </v-icon>
          {{ $t('about.summary') }}
        </v-card-title>
        <v-card-text>
          <p class="text-h6 text-center text-grey-darken-1 line-height-relaxed typewriter-text">
            {{ displayedSummary }}
            <span class="cursor">|</span>
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const summaryText = computed(() => t('about.summary'))
const displayedSummary = ref('')

const typewriterEffect = () => {
  displayedSummary.value = '' // Reset
  let index = 0
  const text = summaryText.value
  const interval = setInterval(() => {
    if (index < text.length) {
      displayedSummary.value += text[index]
      index++
    } else {
      clearInterval(interval)
    }
  }, 30)
}

// Watch for language changes
watch(summaryText, () => {
  typewriterEffect()
})

onMounted(() => {
  setTimeout(typewriterEffect, 1000)
})
</script>

<style scoped>
.floating-card {
  animation: floatUp 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(50px);
  position: relative;
  z-index: 1;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.95) !important;
}

@keyframes floatUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.pulse-card {
  animation:
    floatUp 0.8s ease-out forwards,
    gentlePulse 4s ease-in-out infinite 2s;
}

@keyframes gentlePulse {
  0%,
  100% {
    transform: translateY(0) scale(1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  50% {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
  }
}

.heartbeat-icon {
  animation: heartbeat 2s ease-in-out infinite;
}

@keyframes heartbeat {
  0%,
  100% {
    transform: scale(1);
  }
  25%,
  75% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1.2);
  }
}

.rotate-in {
  animation: rotateIn 1s ease-out forwards;
  opacity: 0;
}

@keyframes rotateIn {
  0% {
    opacity: 0;
    transform: rotate(-180deg) scale(0.5);
  }
  100% {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }
}

.typewriter-text {
  position: relative;
}

.cursor {
  animation: blink 1s infinite;
  color: #1976d2;
  font-weight: bold;
}

@keyframes blink {
  0%,
  50% {
    opacity: 1;
  }
  51%,
  100% {
    opacity: 0;
  }
}

.line-height-relaxed {
  line-height: 1.8;
}

@media (max-width: 600px) {
  .text-h4 {
    font-size: 1.5rem !important;
  }
}
</style>
