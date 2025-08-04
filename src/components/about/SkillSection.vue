<template>
  <div>
    <h3
      class="text-h6 mb-4 text-orange bounce-in-skill"
      :style="{ animationDelay: delayOffset * 0.1 + 's' }"
    >
      {{ title }}
    </h3>
    <div
      v-for="(skill, index) in skills"
      :key="skill.name"
      class="mb-4 skill-item"
      :style="{ animationDelay: ((delayOffset || 0) + index) * 0.2 + 's' }"
    >
      <div class="d-flex justify-space-between mb-1">
        <span class="skill-name">{{ skill.name }}</span>
        <span class="skill-percentage">{{ skill.level }}%</span>
      </div>
      <v-progress-linear
        :color="skill.color"
        :model-value="animatedSkills[skill.name] || 0"
        height="12"
        rounded
        class="glowing-progress"
      ></v-progress-linear>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'SkillSection',
})

defineProps({
  title: {
    type: String,
    required: true,
  },
  skills: {
    type: Array,
    required: true,
  },
  animatedSkills: {
    type: Object,
    required: true,
  },
  delayOffset: {
    type: Number,
    default: 0,
  },
})
</script>

<style scoped>
.bounce-in-skill {
  animation: bounceInSkill 0.8s ease-out forwards;
  opacity: 0;
  transform: scale(0.5);
}

@keyframes bounceInSkill {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.skill-item {
  animation: slideInSkill 0.6s ease-out forwards;
  opacity: 0;
  transform: translateX(-50px);
}

@keyframes slideInSkill {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.glowing-progress {
  animation: glow 2s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    filter: drop-shadow(0 0 5px rgba(33, 150, 243, 0.3));
  }
  to {
    filter: drop-shadow(0 0 15px rgba(33, 150, 243, 0.8));
  }
}

.skill-name,
.skill-percentage {
  transition: all 0.3s ease;
  font-weight: 500;
}

.skill-item:hover .skill-name,
.skill-item:hover .skill-percentage {
  color: #1976d2;
  transform: scale(1.05);
}

.skill-name {
  font-size: 0.95rem;
}

.skill-percentage {
  font-size: 0.9rem;
  font-weight: 600;
}
</style>
