<template>
  <div class="genre-tags">
    <v-chip
      v-for="(genre, i) in genres"
      :key="genre"
      size="small"
      variant="outlined"
      class="genre-chip"
      :style="{ '--i': i }"
    >
      {{ genre }}
    </v-chip>
  </div>
</template>

<script setup>
defineProps({
  genres: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped>
.genre-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.genre-chip {
  opacity: 0;
  animation: pop-in 0.5s ease-out forwards;
  animation-delay: calc(var(--i, 0) * 0.1s + 0.5s);
}

@keyframes pop-in {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
