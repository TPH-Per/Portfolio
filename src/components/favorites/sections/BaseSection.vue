<template>
  <div class="category-section">
    <SectionHeader :title="title" :icon="icon" :subtitle="subtitle" />

    <div v-if="hasSubsections" class="subsections-container">
      <slot name="subsections" />
    </div>

    <v-row v-else class="items-grid">
      <v-col
        v-for="(item, index) in items"
        :key="getItemKey(item, index)"
        v-bind="getColProps()"
        class="fade-in-item"
        :style="{ animationDelay: getAnimationDelay(index) }"
      >
        <slot name="item" :item="item" :index="index" />
      </v-col>
    </v-row>

    <!-- Loading state -->
    <div v-if="loading" class="loading-container">
      <v-progress-circular indeterminate color="primary" size="64" />
      <p class="loading-text">{{ loadingText }}</p>
    </div>

    <!-- Empty state -->
    <div v-else-if="isEmpty" class="empty-container">
      <v-icon size="80" color="grey-lighten-2" class="empty-icon">
        {{ emptyIcon }}
      </v-icon>
      <h3 class="empty-title">{{ emptyTitle }}</h3>
      <p class="empty-message">{{ emptyMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import SectionHeader from '../SectionHeader.vue'

const props = defineProps({
  // Section info
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },

  // Data
  items: {
    type: Array,
    default: () => [],
  },

  // Layout configuration
  gridColumns: {
    type: Object,
    default: () => ({
      cols: 12,
      sm: 6,
      md: 4,
      lg: 3,
    }),
  },

  // Animation
  animationDelay: {
    type: Number,
    default: 0.2,
  },

  // States
  loading: {
    type: Boolean,
    default: false,
  },
  loadingText: {
    type: String,
    default: 'Đang tải...',
  },

  // Empty state
  emptyIcon: {
    type: String,
    default: 'mdi-inbox',
  },
  emptyTitle: {
    type: String,
    default: 'Không có dữ liệu',
  },
  emptyMessage: {
    type: String,
    default: 'Chưa có mục nào được thêm vào.',
  },

  // Layout type
  hasSubsections: {
    type: Boolean,
    default: false,
  },
})

// Computed properties
const isEmpty = computed(() => {
  return !props.loading && props.items.length === 0
})

// Methods
const getItemKey = (item, index) => {
  return item.id || item.key || index
}

const getColProps = () => {
  return props.gridColumns
}

const getAnimationDelay = (index) => {
  return `${index * props.animationDelay}s`
}
</script>

<style scoped>
.category-section {
  animation: fade-in 0.8s ease-out;
  margin-bottom: 2rem;
}

.subsections-container {
  position: relative;
}

.items-grid {
  position: relative;
}

.fade-in-item {
  opacity: 0;
  transform: translateY(50px);
  animation: slide-in-up 0.8s ease-out forwards;
}

/* Loading state */
.loading-container {
  text-align: center;
  padding: 4rem 2rem;
  opacity: 0;
  animation: fade-in-up 0.6s ease-out forwards;
}

.loading-text {
  margin-top: 1rem;
  color: #666;
  font-size: 1.1rem;
}

/* Empty state */
.empty-container {
  text-align: center;
  padding: 4rem 2rem;
  opacity: 0;
  animation: fade-in-up 0.6s ease-out 0.3s forwards;
}

.empty-icon {
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: bounce-in 0.8s ease-out 0.5s forwards;
}

.empty-title {
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.empty-message {
  color: #999;
  font-size: 1rem;
  max-width: 400px;
  margin: 0 auto;
  line-height: 1.5;
}

/* Keyframes */
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slide-in-up {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .loading-container,
  .empty-container {
    padding: 3rem 1rem;
  }

  .empty-icon {
    font-size: 60px !important;
  }

  .empty-title {
    font-size: 1.3rem;
  }
}
</style>
