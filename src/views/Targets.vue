<template>
  <v-container fluid class="target-container">
    <HeroSection :hero-title="heroTitle" :subtitle="heroSubtitle" :progress="overallProgress" />

    <TargetList :targets="targets" />

    <TimelineSection :timeline="timeline" />

    <QuoteCard :quote="inspirationalQuote" />
  </v-container>
</template>

<script setup>
defineOptions({ name: 'TargetsView' })
import { ref } from 'vue'
import HeroSection from '@/components/targets/HeroSection.vue'
import TargetList from '@/components/targets/TargetList.vue'
import TimelineSection from '@/components/targets/TimelineSection.vue'
import QuoteCard from '@/components/targets/QuoteCard.vue'
import { useTargets } from '@/composables/useTargets.js'
import { useTimeline } from '@/composables/useTimeline.js'
// import { useScrollAnimation } from '@/composables/useAnimation.js'

// Data from composables

const { targets, overallProgress } = useTargets()

const { timeline } = useTimeline()

// Component data

const heroTitle = ref('My Targets & Goals')

const heroSubtitle = ref('Chasing dreams with passion and determination')

const inspirationalQuote = ref({
  text: 'The future belongs to those who believe in the beauty of their dreams',

  author: 'Eleanor Roosevelt',
})

// onMounted(() => {
//   // Any initialization logic
// })
</script>

<style scoped>
.target-container {
  min-height: 100vh;

  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

  padding: 20px;
}

/* Responsive */

@media (max-width: 768px) {
  .target-container {
    padding: 10px;
  }
}
</style>
