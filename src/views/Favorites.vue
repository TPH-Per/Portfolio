<template>
  <v-container fluid class="favorites-container">
    <AnimatedBackground />
    <FavoritesHeader />
    <CategoriesNavigation
      :categories="categories"
      :active-category="activeCategory"
      @category-change="setActiveCategory"
    />
    <FavoritesContent :active-category="activeCategory" />
    <FloatingHearts />
  </v-container>
</template>

<script setup>
defineOptions({ name: 'FavoritesView' })
import { ref } from 'vue'
import AnimatedBackground from '@/components/favorites/AnimatedBackground.vue'
import FavoritesHeader from '@/components/favorites/FavoritesHeader.vue'
import CategoriesNavigation from '@/components/favorites/CategoriesNavigation.vue'
import FavoritesContent from '@/components/favorites/FavoritesContent.vue'
import FloatingHearts from '@/components/favorites/FloatingHearts.vue'
import { useFavoritesData } from '@/composables/useFavoritesData'

// State
const activeCategory = ref('anime')

// Data
const { categories } = useFavoritesData()

// Methods
const setActiveCategory = (categoryId) => {
  activeCategory.value = categoryId
}
</script>

<style scoped>
.favorites-container {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  padding: 4rem 2rem;
  background: #f0f2f5;
}

@media (max-width: 768px) {
  .favorites-container {
    padding: 2rem 1rem;
  }
}
</style>
