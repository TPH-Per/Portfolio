<template>
  <BaseSection
    :title="$t('favorites.learningTech')"
    icon="mdi-code-tags"
    :items="techList"
    :grid-columns="{ cols: 12, sm: 12, md: 6, lg: 4 }"
    :has-subsections="false"
  >
    <template #item="{ item }">
      <TechCard :tech="item" />
    </template>
  </BaseSection>
</template>

<script setup>
import BaseSection from './BaseSection.vue'
import TechCard from '../cards/TechCard.vue'
import { useFavoritesData } from '@/composables/useFavoritesData'

const { techList } = useFavoritesData()
</script>
