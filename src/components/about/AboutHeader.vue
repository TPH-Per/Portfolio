<template>
  <v-row justify="center" class="mb-8">
    <v-col cols="12" md="10" lg="8">
      <div class="text-center header-section">
        <h1 class="display-1 font-weight-bold text-primary mb-4 bounce-in-title">
          <span
            v-for="(char, index) in aboutMeText"
            :key="index"
            class="animated-char"
            :style="{ animationDelay: index * 0.1 + 's' }"
          >
            {{ char === ' ' ? '\u00A0' : char }}
          </span>
        </h1>
        <v-divider
          class="mx-auto animated-divider"
          style="max-width: 200px; height: 3px"
          color="primary"
        ></v-divider>
      </div>
    </v-col>
  </v-row>
</template>

<script setup>
const aboutMeText = 'About Me'
</script>

<style scoped>
.header-section {
  position: relative;
  z-index: 1;
}

.animated-char {
  display: inline-block;
  animation: bounceIn 0.8s ease-out forwards;
  opacity: 0;
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0) rotate(180deg);
  }
  50% {
    opacity: 1;
    transform: scale(1.3) rotate(90deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

.animated-divider {
  animation: expandWidth 2s ease-out 1s forwards;
  transform: scaleX(0);
}

@keyframes expandWidth {
  to {
    transform: scaleX(1);
  }
}

@media (max-width: 600px) {
  .display-1 {
    font-size: 2rem !important;
  }

  .animated-char {
    font-size: 1.8rem;
  }
}
</style>
