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
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n()
const aboutMeText = computed(() => t('about.title'))
</script>
