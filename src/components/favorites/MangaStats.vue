<template>
  <div class="manga-stats">
    <v-chip size="small" color="orange" variant="flat">
      <v-icon start size="small">mdi-book</v-icon>
      {{ manga.chapters }} chapters
    </v-chip>
    <v-chip size="small" :color="manga.statusColor" variant="flat" class="status-chip">
      <v-icon start size="small" :icon="getStatusIcon(manga.status)"></v-icon>
      {{ manga.status }}
    </v-chip>
  </div>
</template>

<script setup>
defineProps({
  manga: {
    type: Object,
    required: true,
  },
})

const getStatusIcon = (status) => {
  const iconMap = {
    Ongoing: 'mdi-clock-outline',
    Completed: 'mdi-check-circle',
    Hiatus: 'mdi-pause-circle',
    Cancelled: 'mdi-close-circle',
  }
  return iconMap[status] || 'mdi-help-circle'
}
</script>

<style scoped>
.manga-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.status-chip {
  animation: slide-in-left 0.6s ease-out 0.3s forwards;
  opacity: 0;
  transform: translateX(-20px);
}

@keyframes slide-in-left {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
