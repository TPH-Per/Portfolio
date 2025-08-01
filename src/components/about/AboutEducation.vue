<template>
  <v-row justify="center" class="mb-8">
    <v-col cols="12" md="10" lg="8">
      <v-card elevation="4" class="pa-6 floating-card">
        <v-card-title class="text-h4 mb-6 slide-in-left">
          <v-icon left color="success" size="large" class="spinning-icon"> mdi-school </v-icon>
          Education
        </v-card-title>
        <v-timeline side="end" density="compact">
          <v-timeline-item
            v-for="(edu, index) in education"
            :key="index"
            dot-color="success"
            size="small"
            class="slide-in-timeline"
            :style="{ animationDelay: index * 0.3 + 's' }"
          >
            <template v-slot:opposite>
              <div
                class="text-h6 font-weight-bold fade-in-up"
                :style="{ animationDelay: index * 0.3 + 0.1 + 's' }"
              >
                {{ edu.period }}
              </div>
            </template>
            <v-card elevation="2" class="pa-4 wobble-card">
              <v-card-title class="text-h6">{{ edu.degree }}</v-card-title>
              <v-card-subtitle>{{ edu.school }}</v-card-subtitle>
              <v-card-text>
                <p v-for="detail in edu.details" :key="detail" class="mb-1">
                  {{ detail }}
                </p>
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
  name: 'AboutEducation',
})

import { ref } from 'vue'

const education = ref([
  {
    period: '2020 - 2024',
    degree: 'Bachelor of Computer Science',
    school: 'University of Technology',
    details: [
      'Major: Software Engineering',
      'GPA: 3.5/4.0',
      'Relevant coursework: Data Structures, Algorithms, Database Systems, Web Development',
    ],
  },
  {
    period: '2017 - 2020',
    degree: 'High School Diploma',
    school: 'Technology High School',
    details: ['Specialized in Mathematics and Computer Science', 'Graduated with honors'],
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

.spinning-icon {
  animation: spin 3s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
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

.wobble-card {
  transition: all 0.3s ease;
}

.wobble-card:hover {
  transform: translateY(-8px) rotate(1deg);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

/* Timeline customization */
:deep(.v-timeline-item__body) {
  padding-top: 8px;
}

:deep(.v-timeline-item__opposite) {
  padding-top: 12px;
}

/* Card content styling */
.v-card-title {
  color: #2e7d32;
  font-weight: 600;
}

.v-card-subtitle {
  color: #666;
  font-style: italic;
  margin-bottom: 8px;
}

.v-card-text p {
  font-size: 0.9rem;
  line-height: 1.5;
  color: #444;
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
}

/* Enhanced timeline styling */
:deep(.v-timeline-item__dot) {
  box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.2);
  transition: all 0.3s ease;
}

:deep(.v-timeline-item__dot:hover) {
  box-shadow: 0 0 0 6px rgba(76, 175, 80, 0.3);
  transform: scale(1.1);
}

/* Success color theme */
.text-success {
  color: #2e7d32 !important;
}

/* Card hover effects */
.wobble-card {
  border-left: 4px solid #4caf50;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 255, 248, 0.95) 100%);
}

.wobble-card:hover {
  border-left-color: #2e7d32;
  background: linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(240, 255, 240, 1) 100%);
}
</style>
