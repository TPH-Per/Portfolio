<template>
  <v-card
    class="target-card"
    :class="{
      'card-flipped': isFlipped,
      mounted: isMounted,
    }"
    elevation="8"
    @click="emit('flip')"
    :style="{ animationDelay: animationDelay }"
  >
    <!-- Front Side -->
    <div class="card-front">
      <div class="card-header" :style="{ background: target.gradient }">
        <v-icon
          :icon="target.icon"
          size="60"
          class="target-icon floating-icon"
          color="white"
        ></v-icon>
        <h3 class="target-title">{{ target.title }}</h3>
      </div>

      <v-card-text class="card-content">
        <div class="progress-section">
          <v-progress-linear
            :model-value="target.progress"
            :color="target.color"
            height="8"
            rounded
            class="animated-progress"
          >
            <template v-slot:default="{ value }">
              <small class="progress-label">{{ Math.ceil(value) }}%</small>
            </template>
          </v-progress-linear>
        </div>

        <div class="target-description">
          <p>{{ target.description }}</p>
        </div>

        <div class="status-badge">
          <v-chip :color="statusColor" size="small" class="pulsing-chip">
            {{ target.status }}
          </v-chip>
        </div>
      </v-card-text>
    </div>

    <!-- Back Side -->
    <div class="card-back">
      <div class="card-header" :style="{ background: target.gradient }">
        <v-icon icon="mdi-information-outline" size="40" color="white" class="info-icon"></v-icon>
        <h3>Details</h3>
      </div>

      <v-card-text class="back-content">
        <div class="detail-item" v-for="detail in target.details" :key="detail.label">
          <v-icon :icon="detail.icon" size="20" :color="target.color"></v-icon>
          <span class="detail-label">{{ detail.label }}:</span>
          <span class="detail-value">{{ detail.value }}</span>
        </div>
      </v-card-text>
    </div>
  </v-card>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'

const props = defineProps({
  target: {
    type: Object,
    required: true,
  },
  isFlipped: {
    type: Boolean,
    default: false,
  },
  animationDelay: {
    type: String,
    default: '0s',
  },
})

const emit = defineEmits(['flip'])
const isMounted = ref(false)

onMounted(() => {
  // Delay animation start
  requestAnimationFrame(() => {
    isMounted.value = true
  })
})

const statusColor = computed(() => {
  switch (props.target.status) {
    case 'In Progress':
      return 'orange'
    case 'Planning':
      return 'blue'
    case 'Completed':
      return 'green'
    default:
      return 'grey'
  }
})
</script>

<style scoped>
/* Base card styles with GPU optimization */
.target-card {
  height: 350px;
  cursor: pointer;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 20px;
  overflow: hidden;
  position: relative;

  /* GPU acceleration */
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;

  /* Initial state - hidden */
  opacity: 0;
  transform: translateY(50px) translateZ(0);
}

/* Mounted state with animation */
.target-card.mounted {
  animation: slide-up 0.8s ease-out both;
  opacity: 1;
}

/* Hover state */
.target-card:hover {
  transform: translate3d(0, -10px, 0) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

/* Flipped state */
.target-card.card-flipped {
  transform: rotateY(180deg) translateZ(0);
}

/* Card sides */
.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 20px;
  transform: translateZ(0);
}

.card-back {
  transform: rotateY(180deg);
}

/* Card header */
.card-header {
  padding: 30px 20px;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;
}

/* Shimmer effect - optimized */
.card-header::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  transform: translate3d(-100%, -100%, 0) rotate(45deg);
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* Active shimmer when mounted */
.mounted .card-header::before {
  opacity: 1;
  animation: shimmer 3s linear infinite;
}

/* Icons */
.target-icon {
  margin-bottom: 10px;
  transform: translateZ(0);
}

.floating-icon {
  opacity: 0;
  transform: translateY(20px);
}

.mounted .floating-icon {
  opacity: 1;
  transform: translateY(0);
  animation: float 2s ease-in-out infinite;
  animation-delay: 0.5s;
}

/* Title */
.target-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
}

/* Card content */
.card-content {
  padding: 20px;
  height: calc(100% - 120px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Progress section */
.progress-section {
  margin-bottom: 15px;
}

.animated-progress {
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 1s ease-out;
}

.mounted .animated-progress {
  transform: scaleX(1);
}

.progress-label {
  color: white;
  font-weight: bold;
}

/* Description */
.target-description {
  flex-grow: 1;
  display: flex;
  align-items: center;
}

.target-description p {
  color: #666;
  line-height: 1.5;
  margin: 0;
}

/* Status badge */
.status-badge {
  text-align: center;
}

.pulsing-chip {
  transform: scale(0);
  transition: transform 0.3s ease-out;
}

.mounted .pulsing-chip {
  transform: scale(1);
  animation: pulse 2s infinite;
  animation-delay: 0.8s;
}

/* Back card content */
.back-content {
  padding: 20px;
}

.detail-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.3s ease-out;
}

.mounted .card-flipped .detail-item {
  opacity: 1;
  transform: translateX(0);
}

.detail-item:nth-child(1) {
  transition-delay: 0.1s;
}
.detail-item:nth-child(2) {
  transition-delay: 0.2s;
}
.detail-item:nth-child(3) {
  transition-delay: 0.3s;
}
.detail-item:nth-child(4) {
  transition-delay: 0.4s;
}

.detail-label {
  margin-left: 10px;
  font-weight: 600;
  color: #555;
  min-width: 80px;
}

.detail-value {
  margin-left: 10px;
  color: #333;
}

/* Optimized animations */
@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(50px) translateZ(0);
  }
  to {
    opacity: 1;
    transform: translateY(0) translateZ(0);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, -20px, 0);
  }
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

@keyframes shimmer {
  0% {
    transform: translate3d(-100%, -100%, 0) rotate(45deg);
  }
  100% {
    transform: translate3d(100%, 100%, 0) rotate(45deg);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .target-card {
    height: 300px;
  }

  .target-title {
    font-size: 1.2rem;
  }

  .target-icon {
    font-size: 48px !important;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .target-card,
  .animated-progress,
  .pulsing-chip,
  .detail-item {
    transition: none !important;
    animation: none !important;
  }

  .mounted .floating-icon,
  .mounted .card-header::before,
  .mounted .pulsing-chip {
    animation: none !important;
  }
}
</style>
