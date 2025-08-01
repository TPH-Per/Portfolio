<template>
  <v-row justify="center" class="mb-8">
    <v-col cols="12" md="10" lg="8">
      <v-card elevation="4" class="pa-6 floating-card">
        <v-card-title class="text-h4 mb-6 slide-in-right">
          <v-icon left color="purple" size="large" class="shake-icon"> mdi-certificate </v-icon>
          {{ $t('about.certificates') }}
        </v-card-title>
        <v-row>
          <v-col cols="12" md="6" v-for="(cert, index) in certificates" :key="cert.title">
            <v-card
              elevation="2"
              class="pa-4 mb-4 certificate-card floating-certificate"
              color="grey-lighten-5"
              :style="{ animationDelay: index * 0.2 + 's' }"
              @click="openCertificate(cert)"
            >
              <v-card-title class="text-h6 d-flex align-center">
                <v-icon
                  :icon="cert.icon"
                  :color="cert.color"
                  class="cert-icon me-2"
                  size="large"
                ></v-icon>
                <div>
                  {{ cert.title }}
                  <v-chip
                    v-if="cert.verified"
                    color="success"
                    size="x-small"
                    variant="flat"
                    class="ms-2"
                  >
                    <v-icon icon="mdi-check-circle" size="x-small" class="me-1"></v-icon>
                    {{ $t('about.verified') }}
                  </v-chip>
                </div>
              </v-card-title>

              <v-card-subtitle class="d-flex align-center mt-1">
                <v-icon icon="mdi-school" color="grey" size="small" class="me-1"></v-icon>
                {{ cert.issuer }}
                <v-spacer></v-spacer>
                <v-rating
                  v-if="cert.rating"
                  :model-value="cert.rating"
                  color="amber"
                  density="compact"
                  size="small"
                  readonly
                ></v-rating>
              </v-card-subtitle>

              <v-card-text>
                <p class="text-body-2 mb-3 cert-description">
                  {{ cert.description }}
                </p>

                <div v-if="cert.skills" class="mb-3">
                  <v-chip
                    v-for="skill in cert.skills"
                    :key="skill"
                    color="grey-darken-1"
                    size="x-small"
                    variant="outlined"
                    class="me-1 mb-1 skill-chip"
                  >
                    {{ skill }}
                  </v-chip>
                </div>

                <div class="d-flex align-center justify-space-between">
                  <v-chip :color="cert.color" variant="outlined" class="pulsing-chip" size="small">
                    <v-icon icon="mdi-calendar" size="x-small" class="me-1"></v-icon>
                    {{ cert.date }}
                  </v-chip>

                  <div class="d-flex align-center">
                    <v-chip
                      v-if="cert.credentialId"
                      color="info"
                      size="x-small"
                      variant="tonal"
                      class="me-2"
                    >
                      ID: {{ cert.credentialId }}
                    </v-chip>

                    <v-btn
                      v-if="cert.url"
                      :href="cert.url"
                      target="_blank"
                      icon="mdi-open-in-new"
                      size="small"
                      color="primary"
                      variant="text"
                      class="view-cert-btn"
                    ></v-btn>
                  </div>
                </div>
              </v-card-text>

              <!-- Progress bar for course completion -->
              <v-card-actions v-if="cert.progress">
                <v-progress-linear
                  :model-value="cert.progress"
                  color="success"
                  height="6"
                  rounded
                  class="flex-grow-1"
                ></v-progress-linear>
                <span class="text-caption ms-2"
                  >{{ cert.progress }}% {{ $t('about.complete') }}</span
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>

  <!-- Certificate Detail Dialog -->
  <v-dialog v-model="certDialog" max-width="600px">
    <v-card v-if="selectedCert">
      <v-card-title class="d-flex align-center">
        <v-icon
          :icon="selectedCert.icon"
          :color="selectedCert.color"
          class="me-2"
          size="large"
        ></v-icon>
        {{ selectedCert.title }}
      </v-card-title>

      <v-card-text>
        <v-chip :color="selectedCert.color" variant="tonal" class="mb-3">
          {{ selectedCert.issuer }}
        </v-chip>

        <p class="mb-3">{{ selectedCert.description }}</p>

        <div v-if="selectedCert.details" class="mb-3">
          <h4 class="text-h6 mb-2">{{ $t('about.courseDetails') }}:</h4>
          <ul>
            <li v-for="detail in selectedCert.details" :key="detail">
              {{ detail }}
            </li>
          </ul>
        </div>

        <div v-if="selectedCert.skills">
          <h4 class="text-h6 mb-2">{{ $t('about.skillsCovered') }}:</h4>
          <v-chip
            v-for="skill in selectedCert.skills"
            :key="skill"
            color="primary"
            size="small"
            variant="outlined"
            class="me-1 mb-1"
          >
            {{ skill }}
          </v-chip>
        </div>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          v-if="selectedCert.url"
          :href="selectedCert.url"
          target="_blank"
          color="primary"
          variant="elevated"
          prepend-icon="mdi-certificate"
        >
          {{ $t('about.viewCertificate') }}
        </v-btn>
        <v-btn color="grey" @click="certDialog = false">{{ $t('about.close') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
defineOptions({
  name: 'AboutCertificates',
})

import { ref } from 'vue'

const certDialog = ref(false)
const selectedCert = ref(null)

const certificates = ref([
  {
    title: 'Vue.js Developer Certification',
    issuer: 'Vue Mastery',
    description:
      'Advanced Vue.js concepts and best practices including Composition API, Pinia state management, and performance optimization.',
    date: '2024',
    color: 'green',
    icon: 'mdi-vuejs',
    verified: true,
    rating: 5,
    credentialId: 'VM-2024-001',
    url: 'https://vuejs.org',
    skills: ['Vue 3', 'Composition API', 'Pinia', 'Vue Router'],
    details: [
      'Advanced component patterns and composition',
      'State management with Pinia',
      'Performance optimization techniques',
      'Testing Vue applications',
    ],
  },
  {
    title: 'JavaScript ES6+ Certification',
    issuer: 'freeCodeCamp',
    description:
      'Modern JavaScript features and programming concepts including async/await, modules, and advanced array methods.',
    date: '2023',
    color: 'yellow-darken-2',
    icon: 'mdi-language-javascript',
    verified: true,
    rating: 4,
    credentialId: 'FCC-JS-2023',
    url: 'https://freecodecamp.org',
    skills: ['ES6+', 'Async/Await', 'Modules', 'Destructuring'],
    details: [
      'Modern JavaScript syntax and features',
      'Asynchronous programming patterns',
      'Module system and imports/exports',
      'Functional programming concepts',
    ],
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    description:
      'HTML, CSS, and responsive design principles for creating mobile-first, accessible web applications.',
    date: '2023',
    color: 'blue',
    icon: 'mdi-web',
    verified: true,
    rating: 5,
    credentialId: 'FCC-RWD-2023',
    url: 'https://freecodecamp.org',
    skills: ['HTML5', 'CSS3', 'Flexbox', 'Grid', 'Media Queries'],
    details: [
      'Semantic HTML and accessibility',
      'Advanced CSS layouts with Flexbox and Grid',
      'Responsive design patterns',
      'CSS animations and transitions',
    ],
  },
  {
    title: 'Git Version Control',
    issuer: 'GitHub',
    description:
      'Version control and collaboration workflows using Git and GitHub for team development.',
    date: '2022',
    color: 'grey-darken-2',
    icon: 'mdi-git',
    verified: true,
    rating: 4,
    credentialId: 'GH-GIT-2022',
    url: 'https://github.com',
    skills: ['Git', 'GitHub', 'Branching', 'Merging', 'Collaboration'],
    details: [
      'Git fundamentals and commands',
      'Branching and merging strategies',
      'Collaborative workflows',
      'GitHub Actions and CI/CD',
    ],
  },
  {
    title: 'Node.js Backend Development',
    issuer: 'Coursera',
    description:
      'Server-side JavaScript development with Node.js, Express.js, and database integration.',
    date: '2023',
    color: 'green-darken-2',
    icon: 'mdi-nodejs',
    verified: true,
    rating: 4,
    progress: 95,
    credentialId: 'COUR-NODE-2023',
    url: 'https://coursera.org',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    details: [
      'Node.js fundamentals and modules',
      'Building REST APIs with Express.js',
      'Database integration with MongoDB',
      'Authentication and security',
    ],
  },
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    description:
      'Cloud computing fundamentals and AWS services overview for developers and IT professionals.',
    date: '2024',
    color: 'orange',
    icon: 'mdi-aws',
    verified: false,
    rating: 3,
    progress: 60,
    credentialId: 'AWS-CP-2024',
    skills: ['AWS', 'Cloud Computing', 'EC2', 'S3', 'Lambda'],
    details: [
      'Cloud computing concepts and benefits',
      'AWS core services overview',
      'Security and compliance in AWS',
      'Pricing and support models',
    ],
  },
])

const openCertificate = (cert) => {
  selectedCert.value = cert
  certDialog.value = true
}

// Add animation delays for staggered effect
certificates.value.forEach((cert, index) => {
  cert.animationDelay = index * 0.2
})
</script>

<!-- CSS giữ nguyên như cũ -->
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

.shake-icon {
  animation: shake 2s ease-in-out infinite;
}

@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-2px);
  }
  75% {
    transform: translateX(2px);
  }
}

.certificate-card {
  animation: floatInCert 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(50px) scale(0.8);
  cursor: pointer;
  transition: all 0.3s ease;
  border-left: 4px solid transparent;
}

@keyframes floatInCert {
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.floating-certificate {
  animation:
    floatInCert 0.8s ease-out forwards,
    gentleFloat 6s ease-in-out infinite 1s;
}

@keyframes gentleFloat {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  33% {
    transform: translateY(-3px) rotate(0.5deg);
  }
  66% {
    transform: translateY(3px) rotate(-0.5deg);
  }
}

.certificate-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  border-left-color: currentColor;
}

.cert-icon {
  animation: rotateIcon 3s ease-in-out infinite;
}

@keyframes rotateIcon {
  0%,
  100% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(10deg) scale(1.1);
  }
}

.pulsing-chip {
  animation: pulseChip 2s ease-in-out infinite;
}

@keyframes pulseChip {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
}

.skill-chip {
  transition: all 0.3s ease;
}

.skill-chip:hover {
  transform: scale(1.1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.view-cert-btn {
  transition: all 0.3s ease;
}

.view-cert-btn:hover {
  transform: scale(1.1);
}

.cert-description {
  line-height: 1.6;
  color: #555;
}

/* Purple color theme */
.text-h4 {
  color: #7b1fa2;
}

/* Card styling based on verification status */
.certificate-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 245, 255, 0.95) 100%);
}

.certificate-card:hover {
  background: linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(240, 235, 255, 1) 100%);
}

/* Verified badge animation */
.v-chip:has(.mdi-check-circle) {
  animation: verifiedPulse 3s ease-in-out infinite;
}

@keyframes verifiedPulse {
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.4);
  }
  50% {
    box-shadow: 0 0 0 4px rgba(76, 175, 80, 0);
  }
}

/* Progress bar styling */
.v-progress-linear {
  border-radius: 8px;
}

/* Responsive design */
@media (max-width: 600px) {
  .text-h4 {
    font-size: 1.5rem !important;
  }

  .certificate-card {
    padding: 16px !important;
  }

  .cert-icon {
    transform: scale(0.8);
  }

  .skill-chip {
    font-size: 0.7rem;
  }
}

/* Dialog animations */
.v-dialog .v-card {
  animation: dialogSlideIn 0.3s ease-out;
}

@keyframes dialogSlideIn {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Certificate grid layout improvements */
.v-row .v-col {
  display: flex;
  flex-direction: column;
}

.certificate-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.v-card-text {
  flex-grow: 1;
}
</style>
