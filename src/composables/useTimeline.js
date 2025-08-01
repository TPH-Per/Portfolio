import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export function useTimeline() {
  const { t } = useI18n()

  const timeline = computed(() => [
    {
      id: 1,
      date: 'July 2025',
      title: t('timeline.milestone1.title'),
      description: t('timeline.milestone1.description'),
      completed: false,
    },
    {
      id: 2,
      date: 'September 2025',
      title: t('timeline.milestone2.title'),
      description: t('timeline.milestone2.description'),
      completed: false,
    },
    {
      id: 3,
      date: 'December 2025',
      title: t('timeline.milestone3.title'),
      description: t('timeline.milestone3.description'),
      completed: false,
    },
    {
      id: 4,
      date: 'March 2026',
      title: t('timeline.milestone4.title'),
      description: t('timeline.milestone4.description'),
      completed: false,
    },
  ])

  const addMilestone = (milestone) => {
    timeline.value.push({
      id: Date.now(),
      completed: false,
      ...milestone,
    })
  }

  const toggleMilestoneCompletion = (id) => {
    const milestone = timeline.value.find((m) => m.id === id)
    if (milestone) {
      milestone.completed = !milestone.completed
    }
  }

  const removeMilestone = (id) => {
    const index = timeline.value.findIndex((m) => m.id === id)
    if (index > -1) {
      timeline.value.splice(index, 1)
    }
  }

  return {
    timeline,
    addMilestone,
    toggleMilestoneCompletion,
    removeMilestone,
  }
}
