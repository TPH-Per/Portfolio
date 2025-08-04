<template>
  <div class="about-page">
    <ParticlesBackground />
    <AboutHeader />
    <AboutSummary />
    <AboutEducation />
    <AboutCertificates />
    <AboutSkills />
    <AboutExperience />
    <CelebrationButton @celebrate="triggerCelebration" />
    <CelebrationEffect :show="showCelebration" />
  </div>
</template>

<script setup>
defineOptions({
  name: 'AboutPage',
})

import { ref } from 'vue'
import ParticlesBackground from '@/components/about/ParticlesBackground.vue'
import AboutHeader from '@/components/about/AboutHeader.vue'
import AboutSummary from '@/components/about/AboutSummary.vue'
import AboutEducation from '@/components/about/AboutEducation.vue'
import AboutSkills from '@/components/about/AboutSkills.vue'
import AboutExperience from '@/components/about/AboutExperience.vue'
import AboutCertificates from '@/components/about/AboutCertificates.vue'
import CelebrationButton from '@/components/about/CelebrationButton.vue'
import CelebrationEffect from '@/components/about/CelebrationEffect.vue'

// Celebration state
const showCelebration = ref(false)

const triggerCelebration = () => {
  showCelebration.value = true
  setTimeout(() => {
    showCelebration.value = false
  }, 4000) // 4 giây để animation hoàn thành
}
</script>

<style scoped>
.v-container {
  animation: containerFadeIn 1s ease-out forwards;
  opacity: 0;
  position: relative;
  min-height: 100vh;
}

@keyframes containerFadeIn {
  to {
    opacity: 1;
  }
}

/* Responsive Design */
@media (max-width: 600px) {
  .v-container {
    padding: 12px !important;
  }
}

/* Smooth scrolling behavior */
@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}

/* Overall page styling */
.v-container {
  background: linear-gradient(
    135deg,
    rgba(240, 242, 245, 0.8) 0%,
    rgba(248, 250, 252, 0.9) 50%,
    rgba(255, 255, 255, 0.95) 100%
  );
  backdrop-filter: blur(10px);
}

/* Enhanced z-index management */
.v-container > * {
  position: relative;
  z-index: 1;
}
</style>
