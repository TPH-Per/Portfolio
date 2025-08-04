<template>
  <div class="timeline-item" :class="positionClass" :style="{ animationDelay }">
    <div class="timeline-content">
      <div class="timeline-date">
        <v-icon size="small" class="me-1">mdi-calendar</v-icon>
        {{ milestone.date }}
      </div>
      <h4 class="timeline-title">
        <v-icon :icon="milestone.icon" size="small" :color="milestone.color" class="me-1"></v-icon>
        {{ milestone.title }}
      </h4>
      <p class="timeline-description">{{ milestone.description }}</p>

      <v-progress-linear
        v-if="milestone.progress !== undefined"
        :model-value="milestone.progress"
        :color="milestone.color"
        height="6"
        rounded
        class="mb-2"
      ></v-progress-linear>

      <v-chip
        :color="milestone.completed ? 'success' : 'warning'"
        size="small"
        class="timeline-status"
      >
        {{ milestone.completed ? $t('targets.completed') : `${milestone.progress}%` }}
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
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.timeline-content:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.timeline-date {
  color: #666;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
}

.timeline-title {
  color: #333;
  font-size: 1.2rem;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.timeline-description {
  color: #666;
  margin-bottom: 12px;
  line-height: 1.5;
}

.timeline-dot {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  background: #ddd;
  border-radius: 50%;
  border: 3px solid white;
}

.timeline-dot.completed {
  background: #4caf50;
}

@keyframes fade-in-timeline {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

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
