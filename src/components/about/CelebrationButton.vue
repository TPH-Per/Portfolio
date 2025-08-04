<template>
  <v-fab
    location="bottom end"
    color="primary"
    icon="mdi-rocket"
    class="floating-rocket"
    @click="handleCelebrate"
    size="large"
  ></v-fab>
</template>

<script setup>
defineOptions({
  name: 'CelebrationButton',
})

const emit = defineEmits(['celebrate'])

const handleCelebrate = () => {
  emit('celebrate')
}
</script>

<style scoped>
.floating-rocket {
  animation: rocketFloat 3s ease-in-out infinite;
  z-index: 1000;
}

@keyframes rocketFloat {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-10px) rotate(5deg);
  }
  75% {
    transform: translateY(-5px) rotate(-5deg);
  }
}

.floating-rocket:hover {
  animation: rocketBoost 0.5s ease-out forwards;
}

@keyframes rocketBoost {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2) rotate(10deg);
  }
  100% {
    transform: scale(1.1) rotate(0deg);
  }
}

/* Glow effect khi hover */
.floating-rocket:hover {
  box-shadow: 0 0 20px rgba(33, 150, 243, 0.6);
  animation:
    rocketBoost 0.5s ease-out forwards,
    rocketGlow 2s ease-in-out infinite;
}

@keyframes rocketGlow {
  0%,
  100% {
    box-shadow: 0 0 20px rgba(33, 150, 243, 0.6);
  }
  50% {
    box-shadow: 0 0 30px rgba(33, 150, 243, 0.8);
  }
}
</style>
