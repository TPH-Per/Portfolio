<template>
  <v-row>
    <v-col v-for="(target, index) in targets" :key="target.id" cols="12" md="6" lg="4">
      <TargetCard :target="target" :animation-delay="`${index * 0.2}s`" />
    </v-col>
  </v-row>
</template>

<script setup>
import TargetCard from './TargetCard.vue'

defineProps({
  targets: {
    type: Array,
    required: true,
  },
})
</script>
