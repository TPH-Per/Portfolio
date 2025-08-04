<template>
  <v-row class="mt-12">
    <v-col cols="12">
      <h2 class="section-title">
        <v-icon icon="mdi-timeline-clock" size="30" color="primary"></v-icon>
        {{ $t('targets.achievementTimeline') }}
      </h2>

      <div class="timeline-container">
        <TimelineItem
          v-for="(milestone, index) in timeline"
          :key="milestone.id"
          :milestone="milestone"
          :index="index"
        />
      </div>
    </v-col>
  </v-row>
</template>

<script setup>
import TimelineItem from './TimelineItem.vue'

defineProps({
  timeline: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped>
/* Giữ nguyên styles */
.section-title {
  text-align: center;
  color: white;
  font-size: 2rem;
  margin-bottom: 40px;
  animation: fade-in-down 1s ease-out;
}

.timeline-container {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
}

.timeline-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 100%;
  background: linear-gradient(to bottom, #4dabf7, #845ec2);
  animation: draw-line 2s ease-out;
}

@keyframes fade-in-down {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes draw-line {
  from {
    height: 0;
  }
  to {
    height: 100%;
  }
}

@media (max-width: 768px) {
  .timeline-container::before {
    left: 30px;
  }
}
</style>
