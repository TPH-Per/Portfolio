<template>
  <v-card
    class="music-card"
    :class="cardClass"
    elevation="0"
    :href="song.url"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div class="music-card-content">
      <div class="album-art">
        <v-img
          :src="song.image"
          height="120"
          cover
          class="rounded"
          :alt="`${song.title} by ${song.artist}`"
        >
          <div class="music-overlay">
            <v-btn
              icon
              color="white"
              class="play-music-btn"
              size="large"
              @click.prevent="$emit('play-song', song)"
            >
              <v-icon>mdi-play</v-icon>
            </v-btn>
          </div>
        </v-img>
      </div>

      <div class="music-info">
        <h4 class="music-title">{{ song.title }}</h4>
        <p class="music-artist">{{ song.artist }}</p>
        <MusicTags :song="song" :type="type" />
      </div>
    </div>
  </v-card>
</template>

<script setup>
import { computed } from 'vue'
import MusicTags from '../MusicTags.vue'

const props = defineProps({
  song: {
    type: Object,
    required: true,
    // Giả sử đối tượng song giờ đây có dạng:
    // { title: String, artist: String, image: String, url: String, ... }
  },
  type: {
    type: String,
    required: true,
    validator: (value) => ['anison', 'vocaloid'].includes(value),
  },
})

defineEmits(['play-song'])

const cardClass = computed(() => `${props.type}-card`)
</script>

<style scoped>
/* CSS không thay đổi */
.music-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(15px);
  border-radius: 15px;
  transition: all 0.3s ease;
  overflow: hidden;
  height: 100%;
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: block; /* Thêm để đảm bảo thẻ <a> hoạt động đúng */
  text-decoration: none; /* Bỏ gạch chân của link */
}

.music-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.anison-card:hover {
  box-shadow: 0 15px 30px rgba(233, 30, 99, 0.2);
}

.vocaloid-card:hover {
  box-shadow: 0 15px 30px rgba(0, 188, 212, 0.2);
}

.music-card-content {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  align-items: center;
  height: 100%;
}

.album-art {
  position: relative;
  flex-shrink: 0;
}

.music-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 8px;
}

.album-art:hover .music-overlay {
  opacity: 1;
}

.play-music-btn {
  transform: scale(0.8);
  transition: transform 0.3s ease;
}

.album-art:hover .play-music-btn {
  transform: scale(1);
  animation: pulse-music 2s infinite;
}

.music-info {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-width: 0;
}

.music-title {
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
  color: #2c3e50;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.music-artist {
  color: #555;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@keyframes pulse-music {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

@media (max-width: 600px) {
  .music-card-content {
    flex-direction: column;
    text-align: center;
  }

  .music-info {
    align-items: center;
  }
}
</style>
