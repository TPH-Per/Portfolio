<template>
  <div class="timeline-item" :class="positionClass" :style="{ animationDelay }">
    <div class="timeline-content">
      <div class="timeline-date">{{ milestone.date }}</div>
      <h4 class="timeline-title">{{ milestone.title }}</h4>
      <p class="timeline-description">{{ milestone.description }}</p>
      <v-chip
        :color="milestone.completed ? 'success' : 'warning'"
        size="small"
        class="timeline-status"
      >
        {{ milestone.completed ? 'Completed' : 'Target' }}
      </v-chip>
    </div>
    <div class="timeline-dot" :class="{ completed: milestone.completed }"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  milestone: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
})

const positionClass = computed(() => (props.index % 2 === 0 ? 'timeline-left' : 'timeline-right'))

const animationDelay = computed(() => `${props.index * 0.3}s`)
</script>

<style scoped>
.timeline-item {
  position: relative;
  margin-bottom: 40px;
  animation: fade-in-timeline 0.8s ease-out both;
}

.timeline-left .timeline-content {
  margin-right: 60%;
  text-align: right;
}

.timeline-right .timeline-content {
  margin-left: 60%;
  text-align: left;
}

.timeline-content {
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  position: relative;
  animation: bounce-in 0.6s ease-out;
}

.timeline-content:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
}

.timeline-date {
  color: #845ec2;
  font-weight: bold;
  font-size: 0.9rem;
  margin-bottom: 8px;
}

.timeline-title {
  color: #333;
  font-size: 1.3rem;
  margin-bottom: 10px;
}

.timeline-description {
  color: #666;
  margin-bottom: 15px;
  line-height: 1.5;
}

.timeline-dot {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background: #ddd;
  border-radius: 50%;
  border: 4px solid white;
  animation: pulse-dot 2s infinite;
}

.timeline-dot.completed {
  background: #4caf50;
}

/* Animations */
@keyframes fade-in-timeline {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes bounce-in {
  0% {
    transform: scale(0.3);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes pulse-dot {
  0%,
  100% {
    transform: translate(-50%, -50%) scale(1);
    box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.7);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1);
    box-shadow: 0 0 0 10px rgba(76, 175, 80, 0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .timeline-left .timeline-content,
  .timeline-right .timeline-content {
    margin-left: 60px;
    margin-right: 20px;
    text-align: left;
  }

  .timeline-dot {
    left: 30px;
  }
}
</style>
