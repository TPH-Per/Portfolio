<template>
  <v-row justify="center" class="mb-8">
    <v-col cols="12" md="10" lg="8">
      <v-card elevation="4" class="pa-6 floating-card">
        <v-card-title class="text-h4 mb-6 slide-in-left">
          <v-icon left color="blue" size="large" class="bounce-icon"> mdi-briefcase </v-icon>
          {{ $t('about.experience') }}
        </v-card-title>
        <v-timeline side="end" density="compact">
          <v-timeline-item
            v-for="(exp, index) in experience"
            :key="index"
            dot-color="blue"
            size="small"
            class="slide-in-timeline"
            :style="{ animationDelay: index * 0.4 + 's' }"
          >
            <template v-slot:opposite>
              <div
                class="text-h6 font-weight-bold fade-in-up"
                :style="{ animationDelay: index * 0.4 + 0.1 + 's' }"
              >
                {{ exp.period }}
              </div>
            </template>
            <v-card elevation="2" class="pa-4 flip-card">
              <v-card-title class="text-h6 d-flex align-center">
                <v-icon :icon="exp.icon" :color="exp.iconColor" class="me-2" size="small"></v-icon>
                {{ exp.position }}
              </v-card-title>
              <v-card-subtitle class="d-flex align-center mb-2">
                <v-icon icon="mdi-domain" color="grey" size="x-small" class="me-1"></v-icon>
                {{ exp.company }}
                <v-chip
                  v-if="exp.type"
                  :color="exp.chipColor"
                  size="x-small"
                  variant="outlined"
                  class="ms-2"
                >
                  {{ exp.type }}
                </v-chip>
              </v-card-subtitle>
              <v-card-text>
                <ul class="experience-list">
                  <li
                    v-for="(detail, detailIndex) in exp.details"
                    :key="detailIndex"
                    class="mb-2 experience-item"
                    :style="{ animationDelay: index * 0.4 + detailIndex * 0.1 + 0.2 + 's' }"
                  >
                    {{ detail }}
                  </li>
                </ul>
                <div v-if="exp.technologies" class="mt-3">
                  <v-chip
                    v-for="tech in exp.technologies"
                    :key="tech.name"
                    :color="tech.color"
                    size="small"
                    variant="outlined"
                    class="me-1 mb-1 tech-chip"
                  >
                    <v-icon v-if="tech.icon" :icon="tech.icon" size="x-small" class="me-1"></v-icon>
                    {{ tech.name }}
                  </v-chip>
                </div>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
defineOptions({
  name: 'AboutExperience',
})

import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const experience = computed(() => [
  {
    period: '2024 - Present',
    position: t('experience.position1'),
    company: t('experience.company1'),
    type: t('experience.type1'),
    icon: 'mdi-code-tags',
    iconColor: 'primary',
    chipColor: 'success',
    details: [
      t('experience.details1.item1'),
      t('experience.details1.item2'),
      t('experience.details1.item3'),
      t('experience.details1.item4'),
      t('experience.details1.item5'),
    ],
    technologies: [
      { name: 'Vue.js', color: 'green', icon: 'mdi-vuejs' },
      { name: 'JavaScript', color: 'yellow-darken-2', icon: 'mdi-language-javascript' },
      { name: 'Vuetify', color: 'indigo', icon: 'mdi-material-design' },
      { name: 'Git', color: 'orange', icon: 'mdi-git' },
    ],
  },
  {
    period: '2023 - 2024',
    position: t('experience.position2'),
    company: t('experience.company2'),
    type: t('experience.type2'),
    icon: 'mdi-school-outline',
    iconColor: 'info',
    chipColor: 'info',
    details: [
      t('experience.details2.item1'),
      t('experience.details2.item2'),
      t('experience.details2.item3'),
      t('experience.details2.item4'),
      t('experience.details2.item5'),
    ],
    technologies: [
      { name: 'HTML/CSS', color: 'blue', icon: 'mdi-language-html5' },
      { name: 'JavaScript', color: 'yellow-darken-2', icon: 'mdi-language-javascript' },
      { name: 'Bootstrap', color: 'purple', icon: 'mdi-bootstrap' },
      { name: 'WordPress', color: 'blue-grey', icon: 'mdi-wordpress' },
    ],
  },
  {
    period: '2022 - 2023',
    position: t('experience.position3'),
    company: t('experience.company3'),
    type: t('experience.type3'),
    icon: 'mdi-laptop',
    iconColor: 'success',
    chipColor: 'warning',
    details: [
      t('experience.details3.item1'),
      t('experience.details3.item2'),
      t('experience.details3.item3'),
      t('experience.details3.item4'),
      t('experience.details3.item5'),
    ],
    technologies: [
      { name: 'React', color: 'blue', icon: 'mdi-react' },
      { name: 'Node.js', color: 'green', icon: 'mdi-nodejs' },
      { name: 'MongoDB', color: 'green-darken-2', icon: 'mdi-database' },
      { name: 'Figma', color: 'purple', icon: 'mdi-figma' },
    ],
  },
])
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

.slide-in-left {
  animation: slideInLeft 0.8s ease-out forwards;
  opacity: 0;
  transform: translateX(-100px);
}

@keyframes slideInLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.bounce-icon {
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

.slide-in-timeline {
  animation: slideInTimeline 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(30px);
}

@keyframes slideInTimeline {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.flip-card {
  transition: all 0.5s ease;
  transform-style: preserve-3d;
  border-left: 4px solid #2196f3;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 252, 255, 0.95) 100%);
}

.flip-card:hover {
  transform: translateY(-8px) rotateY(2deg);
  box-shadow: 0 15px 35px rgba(33, 150, 243, 0.2);
  border-left-color: #1976d2;
  background: linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(240, 248, 255, 1) 100%);
}

/* Experience list styling */
.experience-list {
  padding-left: 0;
  list-style: none;
}

.experience-item {
  position: relative;
  padding-left: 20px;
  animation: slideInItem 0.6s ease-out forwards;
  opacity: 0;
  transform: translateX(-20px);
  line-height: 1.6;
  color: #444;
}

@keyframes slideInItem {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.experience-item::before {
  content: '▶';
  position: absolute;
  left: 0;
  color: #2196f3;
  font-size: 0.8rem;
  top: 2px;
}

/* Technology chips */
.tech-chip {
  transition: all 0.3s ease;
  cursor: pointer;
}

.tech-chip:hover {
  transform: scale(1.05);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

/* Card content styling */
.v-card-title {
  color: #1976d2;
  font-weight: 600;
}

.v-card-subtitle {
  color: #666;
  font-size: 0.9rem;
}

/* Timeline customization */
:deep(.v-timeline-item__body) {
  padding-top: 8px;
}

:deep(.v-timeline-item__opposite) {
  padding-top: 12px;
}

:deep(.v-timeline-item__dot) {
  box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.2);
  transition: all 0.3s ease;
}

:deep(.v-timeline-item__dot:hover) {
  box-shadow: 0 0 0 6px rgba(33, 150, 243, 0.3);
  transform: scale(1.1);
}

/* Responsive design */
@media (max-width: 600px) {
  .text-h4 {
    font-size: 1.5rem !important;
  }

  .text-h6 {
    font-size: 1.1rem !important;
  }

  :deep(.v-timeline) {
    padding-left: 0;
  }

  :deep(.v-timeline-item__opposite) {
    display: none;
  }

  .floating-card {
    padding: 16px !important;
  }

  .experience-item {
    font-size: 0.9rem;
  }

  .tech-chip {
    font-size: 0.75rem;
  }
}

/* Blue color theme */
.text-primary {
  color: #1976d2 !important;
}

/* Enhanced animations */
@keyframes slideInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Chip animations */
.tech-chip {
  animation: chipFadeIn 0.5s ease-out forwards;
  opacity: 0;
}

@keyframes chipFadeIn {
  to {
    opacity: 1;
  }
}

/* Period styling */
.fade-in-up {
  font-size: 1rem;
  color: #1976d2;
  font-weight: 700;
}
</style>
