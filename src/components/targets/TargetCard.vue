<template>
  <v-card class="target-card" elevation="4" :style="{ animationDelay: animationDelay }">
    <div class="card-header" :style="{ background: target.gradient }">
      <v-icon :icon="target.icon" size="60" color="white"></v-icon>
      <h3 class="target-title">{{ target.title }}</h3>
      <v-chip :color="statusColor" size="small" class="status-chip" variant="flat">
        {{ target.status }}
      </v-chip>
    </div>

    <v-card-text class="card-content">
      <div class="progress-section">
        <div class="progress-header">
          <span class="progress-label">Progress</span>
          <span class="progress-value">{{ target.progress }}%</span>
        </div>
        <v-progress-linear
          :model-value="target.progress"
          :color="target.color"
          height="10"
          rounded
        ></v-progress-linear>
      </div>

      <p class="target-description">{{ target.description }}</p>

      <div class="target-info">
        <div class="info-item" v-if="target.details">
          <v-icon size="small" :color="target.color">mdi-calendar</v-icon>
          <span>{{ getTargetDate(target) }}</span>
        </div>
        <div class="info-item" v-if="target.details">
          <v-icon size="small" :color="target.color">mdi-tag</v-icon>
          <span>{{ getCategory(target) }}</span>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  target: {
    type: Object,
    required: true,
  },
  animationDelay: {
    type: String,
    default: '0s',
  },
})

const statusColor = computed(() => {
  const statusText = props.target.status.toLowerCase()
  if (statusText.includes('progress')) return 'white'
  if (statusText.includes('planning')) return 'white'
  if (statusText.includes('completed')) return 'success'
  return 'grey'
})

// Helper functions để lấy data từ details
const getTargetDate = (target) => {
  const dateDetail = target.details?.find((d) => d.label.toLowerCase().includes('date'))
  return dateDetail?.value || 'TBD'
}

const getCategory = (target) => {
  const categoryDetail = target.details?.find((d) => d.label.toLowerCase().includes('category'))
  return categoryDetail?.value || 'General'
}
</script>

<style scoped>
.target-card {
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.6s ease-out forwards;
}

.target-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.card-header {
  padding: 24px;
  text-align: center;
  color: white;
  position: relative;
}

.target-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin: 12px 0 8px 0;
  line-height: 1.3;
}

.status-chip {
  margin-top: 8px;
  font-weight: 600;
  font-size: 0.75rem;
  background: rgba(255, 255, 255, 0.2) !important;
  backdrop-filter: blur(10px);
}

.card-content {
  padding: 20px;
}

.progress-section {
  margin-bottom: 20px;
}

.progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.progress-label {
  font-size: 0.875rem;
  color: #666;
  font-weight: 500;
}

.progress-value {
  font-size: 1rem;
  font-weight: 600;
  color: #333;
}

.target-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 16px;
  font-size: 0.95rem;
}

.target-info {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding-top: 12px;
  border-top: 1px solid #eee;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.875rem;
  color: #555;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .target-title {
    font-size: 1.1rem;
  }

  .target-description {
    font-size: 0.9rem;
  }

  .target-info {
    flex-direction: column;
    gap: 8px;
  }
}
</style>
