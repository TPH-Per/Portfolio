<template>
  <v-row class="mt-12">
    <v-col cols="12" class="text-center">
      <v-card class="quote-card" elevation="12">
        <v-card-text>
          <div class="quote-content">
            <v-icon
              icon="mdi-format-quote-open"
              size="40"
              color="primary"
              class="quote-icon"
            ></v-icon>
            <p class="quote-text">
              {{ quote.text }}
            </p>
            <div class="quote-author">- {{ quote.author }}</div>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
defineProps({
  quote: {
    type: Object,
    default: () => ({
      text: 'The future belongs to those who believe in the beauty of their dreams',
      author: 'Eleanor Roosevelt',
    }),
  },
})
</script>

<style scoped>
.quote-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7));
  border-radius: 20px;
  max-width: 800px;
  margin: 0 auto;
  animation: fade-in-scale 1s ease-out;
}

.quote-content {
  text-align: center;
  padding: 20px;
}

.quote-icon {
  opacity: 0.3;
  margin-bottom: 20px;
}

.quote-text {
  font-size: 1.5rem;
  font-style: italic;
  color: #333;
  margin-bottom: 20px;
  line-height: 1.6;
}

.quote-author {
  color: #666;
  font-weight: 500;
}

/* Animations */
@keyframes fade-in-scale {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .quote-text {
    font-size: 1.2rem;
  }
}
</style>
