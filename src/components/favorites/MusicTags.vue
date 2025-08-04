<template>
  <div class="music-tags">
    <v-chip size="x-small" :color="primaryTagColor" variant="flat" class="primary-tag">
      {{ primaryTagLabel }}
    </v-chip>

    <v-chip
      v-if="secondaryTag"
      size="x-small"
      :color="secondaryTagColor"
      variant="outlined"
      class="secondary-tag"
    >
      {{ secondaryTag }}
    </v-chip>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  song: {
    type: Object,
    required: true,
  },
  type: {
    type: String,
    required: true,
    validator: (value) => ['anison', 'vocaloid'].includes(value),
  },
})

const primaryTagColor = computed(() => {
  return props.type === 'anison' ? 'pink' : 'cyan'
})

const primaryTagLabel = computed(() => {
  return props.type === 'anison' ? 'Anison' : 'Vocaloid'
})

const secondaryTag = computed(() => {
  if (props.type === 'anison') {
    return props.song.anime
  } else if (props.type === 'vocaloid') {
    return props.song.vocaloid
  }
  return null
})

const secondaryTagColor = computed(() => {
  if (props.type === 'anison') {
    return 'blue'
  } else if (props.type === 'vocaloid') {
    return props.song.vocaloidColor || 'teal'
  }
  return 'grey'
})
</script>

<style scoped>
.music-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.primary-tag {
  animation: tag-appear 0.5s ease-out 0.2s forwards;
  opacity: 0;
  transform: scale(0.8);
}

.secondary-tag {
  animation: tag-appear 0.5s ease-out 0.4s forwards;
  opacity: 0;
  transform: scale(0.8);
}

@keyframes tag-appear {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
