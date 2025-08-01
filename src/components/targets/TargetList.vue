<template>
  <v-row>
    <v-col
      v-for="(target, index) in targets"
      :key="target.id"
      cols="12"
      md="6"
      lg="4"
      class="target-col"
    >
      <TargetCard
        :target="target"
        :is-flipped="flippedStates[index]"
        :animation-delay="`${index * 0.2}s`"
        @flip="flipCard(index)"
      />
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, watch } from 'vue'
import TargetCard from './TargetCard.vue'

const props = defineProps({
  targets: {
    type: Array,
    required: true,
  },
})

const flippedStates = ref([])

// Initialize flipped states
watch(
  () => props.targets,
  (newTargets) => {
    flippedStates.value = new Array(newTargets.length).fill(false)
  },
  { immediate: true },
)

const flipCard = (index) => {
  flippedStates.value[index] = !flippedStates.value[index]
}
</script>

<style scoped>
.target-col {
  perspective: 1000px;
}
</style>
