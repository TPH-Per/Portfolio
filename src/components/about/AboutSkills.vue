<template>
  <v-row justify="center" class="mb-8">
    <v-col cols="12" md="10" lg="8">
      <v-card elevation="4" class="pa-6 floating-card">
        <v-card-title class="text-h4 mb-6 slide-in-right">
          <v-icon left color="orange" size="large" class="rotate-icon"> mdi-tools </v-icon>
          {{ $t('about.skills') }}
        </v-card-title>
        <v-row>
          <v-col cols="12" md="6">
            <SkillSection
              :title="$t('about.frontendTech')"
              :skills="frontendSkills"
              :animated-skills="animatedSkills"
            />
          </v-col>
          <v-col cols="12" md="6">
            <SkillSection
              :title="$t('about.backendTech')"
              :skills="backendSkills"
              :animated-skills="animatedSkills"
              :delay-offset="4"
            />
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
defineOptions({
  name: 'AboutSkills',
})

import { ref, onMounted } from 'vue'
import SkillSection from '@/components/about/SkillSection.vue'

const animatedSkills = ref({})

const frontendSkills = ref([
  { name: 'Vue.js', level: 90, color: 'green' },
  { name: 'JavaScript/TypeScript', level: 85, color: 'yellow-darken-2' },
  { name: 'HTML/CSS', level: 95, color: 'blue' },
  { name: 'Vuetify', level: 80, color: 'indigo' },
])

const backendSkills = ref([
  { name: 'Node.js', level: 75, color: 'green-darken-2' },
  { name: 'Python', level: 70, color: 'blue-darken-2' },
  { name: 'MySQL/PostgreSQL', level: 80, color: 'orange' },
  { name: 'Git/GitHub', level: 85, color: 'grey-darken-2' },
])

const animateSkills = () => {
  setTimeout(() => {
    ;[...frontendSkills.value, ...backendSkills.value].forEach((skill, index) => {
      setTimeout(() => {
        animatedSkills.value[skill.name] = skill.level
      }, index * 300)
    })
  }, 1000)
}

onMounted(() => {
  setTimeout(animateSkills, 2000)
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

.slide-in-right {
  animation: slideInRight 0.8s ease-out forwards;
  opacity: 0;
  transform: translateX(100px);
}

@keyframes slideInRight {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.rotate-icon {
  animation: wobble 2s ease-in-out infinite;
}

@keyframes wobble {
  0%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(5deg);
  }
  75% {
    transform: rotate(-5deg);
  }
}

@media (max-width: 600px) {
  .text-h4 {
    font-size: 1.5rem !important;
  }
}
</style>
