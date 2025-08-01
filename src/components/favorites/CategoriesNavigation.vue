<template>
  <div class="categories-nav">
    <v-btn
      v-for="(category, index) in categories"
      :key="category.id"
      :class="['category-btn', { active: activeCategory === category.id }]"
      :style="{ animationDelay: index * 0.1 + 's' }"
      @click="$emit('category-change', category.id)"
      variant="flat"
      rounded="xl"
    >
      <v-icon start>{{ category.icon }}</v-icon>
      {{ category.name }}
    </v-btn>
  </div>
</template>

<script setup>
defineProps({
  categories: {
    type: Array,
    required: true,
  },
  activeCategory: {
    type: String,
    required: true,
  },
})

defineEmits(['category-change'])
</script>

<style scoped>
.categories-nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
}

.category-btn {
  font-weight: 600;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  opacity: 0;
  transform: translateY(30px);
  animation: slide-in-up 0.6s ease-out forwards;
}

.category-btn:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.category-btn.active {
  background: linear-gradient(45deg, #ff69b4, #ff1493);
  color: white;
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 15px 35px rgba(255, 20, 147, 0.3);
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
