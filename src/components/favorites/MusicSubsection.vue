<template>
  <div class="music-subsection">
    <h3 class="subsection-title">
      <v-icon :color="iconColor">{{ icon }}</v-icon>
      {{ title }}
    </h3>
    <v-row>
      <v-col
        v-for="(song, index) in songs"
        :key="song.id"
        cols="12"
        sm="6"
        md="4"
        class="fade-in-item"
        :style="{ animationDelay: index * 0.15 + 's' }"
      >
        <MusicCard :song="song" :type="type" @play-song="$emit('play-song', $event)" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import MusicCard from './cards/MusicCard.vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  iconColor: {
    type: String,
    required: true,
  },
  songs: {
    type: Array,
    required: true,
  },
  type: {
    type: String,
    required: true,
    validator: (value) => ['anison', 'vocaloid'].includes(value),
  },
})

defineEmits(['play-song'])
</script>

<style scoped>
.music-subsection {
  margin-bottom: 3rem;
}

.subsection-title {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #2c3e50;
  opacity: 0;
  animation: slide-in-left 0.8s ease-out 0.2s forwards;
}

.fade-in-item {
  opacity: 0;
  transform: translateY(30px);
  animation: slide-in-up 0.6s ease-out forwards;
}

@keyframes slide-in-left {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slide-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
