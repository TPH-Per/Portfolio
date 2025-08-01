<template>
  <v-card
    class="target-card"
    :class="{ 'card-flipped': isFlipped }"
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
import { computed } from 'vue'

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
.target-card {
  height: 350px;
  cursor: pointer;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  animation: slide-up 0.8s ease-out both;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
}

.target-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.card-flipped {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 20px;
}

.card-back {
  transform: rotateY(180deg);
}

.card-header {
  padding: 30px 20px;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;
}

.card-header::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  animation: shimmer 3s linear infinite;
}

.target-icon {
  margin-bottom: 10px;
}

.floating-icon {
  animation: float 2s ease-in-out infinite;
}

.target-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
}

.card-content {
  padding: 20px;
  height: calc(100% - 120px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.progress-section {
  margin-bottom: 15px;
}

.animated-progress {
  animation: pulse-glow 2s ease-in-out infinite alternate;
}

.progress-label {
  color: white;
  font-weight: bold;
}

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

.status-badge {
  text-align: center;
}

.pulsing-chip {
  animation: pulse 2s infinite;
}

/* Back card content */
.back-content {
  padding: 20px;
}

.detail-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  animation: fade-in-left 0.5s ease-out;
}

.detail-item:nth-child(n) {
  animation-delay: calc(var(--i, 0) * 0.1s);
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

/* Animations */
@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
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

@keyframes pulse-glow {
  0% {
    box-shadow: 0 0 5px rgba(66, 165, 245, 0.5);
  }
  100% {
    box-shadow: 0 0 20px rgba(66, 165, 245, 0.8);
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) translateY(100%) rotate(45deg);
  }
}

@keyframes fade-in-left {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .target-card {
    height: 300px;
  }
}
</style>
