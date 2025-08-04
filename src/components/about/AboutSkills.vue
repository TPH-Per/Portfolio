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
              :title="$t('about.webTechs')"
              :skills="webSkills"
              :animated-skills="animatedSkills"
            />
          </v-col>
          <v-col cols="12" md="6">
            <SkillSection
              :title="$t('about.otherTechs')"
              :skills="otherSkills"
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

import { ref, onMounted, onUnmounted } from 'vue' // Thêm onUnmounted
import SkillSection from '@/components/about/SkillSection.vue'

const animatedSkills = ref({})
const timeoutIds = [] // Mảng để lưu trữ các ID của timeout

const webSkills = ref([
  { name: 'Vue.js', level: 80, color: 'green' },
  { name: 'Asp.net', level: 85, color: 'yellow-darken-2' },
  { name: 'PHP', level: 85, color: 'blue' },
  { name: 'FastAPI', level: 80, color: 'indigo' },
  { name: 'Azure', level: 70, color: 'orange' },
])

const otherSkills = ref([
  { name: 'MySQL and SQL server', level: 85, color: 'green-darken-2' },
  { name: 'MongoDB (can use vectorDB)', level: 70, color: 'blue-darken-2' },
  { name: 'NLP (RAG), classification (DT), CNN', level: 70, color: 'grey-darken-2' },
  { name: '日本語の会話', level: 80, color: 'orange' },
  { name: 'Speaking english fluently', level: 80, color: 'blue' },
])

const animateSkills = () => {
  const mainTimeout = setTimeout(() => {
    ;[...webSkills.value, ...otherSkills.value].forEach((skill, index) => {
      const skillTimeout = setTimeout(() => {
        // Kiểm tra xem animatedSkills còn tồn tại không trước khi cập nhật
        if (animatedSkills.value) {
          animatedSkills.value[skill.name] = skill.level
        }
      }, index * 300)
      timeoutIds.push(skillTimeout) // Lưu ID của timeout con
    })
  }, 1000)
  timeoutIds.push(mainTimeout) // Lưu ID của timeout chính
}

onMounted(() => {
  const initialTimeout = setTimeout(animateSkills, 2000)
  timeoutIds.push(initialTimeout)
})

// Dọn dẹp tất cả các timeout khi component bị hủy
onUnmounted(() => {
  timeoutIds.forEach((id) => clearTimeout(id))
})
</script>

<style scoped>
/* ... (CSS giữ nguyên) ... */
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
