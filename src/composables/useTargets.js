import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export function useTargets() {
  const { t } = useI18n()

  const targets = computed(() => [
    // 👈 Chuyển thành computed property
    {
      id: 1,
      title: t('targets.jlptN2Title'), // 👈 Dùng t()
      description: t('targets.jlptN2Description'), // 👈 Dùng t()
      progress: 75,
      status: t('targets.inProgress'), // 👈 Dùng t()
      color: 'red',
      // ... các thuộc tính khác giữ nguyên
    },
    {
      id: 2,
      title: t('targets.ielts7Title'), // 👈 Dùng t()
      description: t('targets.ielts7Description'), // 👈 Dùng t()
      progress: 60,
      status: t('targets.inProgress'), // 👈 Dùng t()
      color: 'blue',
      // ...
    },
    {
      id: 3,
      title: t('targets.aiMlProjectsTitle'), // 👈 Dùng t()
      description: t('targets.aiMlProjectsDescription'), // 👈 Dùng t()
      progress: 45,
      status: t('targets.planning'), // 👈 Dùng t()
      color: 'purple',
      // ...
    },
  ])

  const overallProgress = computed(() => {
    if (!targets.value.length) return 0
    const total = targets.value.reduce((sum, target) => sum + target.progress, 0)
    return total / targets.value.length
  })

  const addTarget = (target) => {
    targets.value.push({
      id: Date.now(),
      ...target,
    })
  }

  const updateTargetProgress = (id, progress) => {
    const target = targets.value.find((t) => t.id === id)
    if (target) {
      target.progress = progress
    }
  }

  const removeTarget = (id) => {
    const index = targets.value.findIndex((t) => t.id === id)
    if (index > -1) {
      targets.value.splice(index, 1)
    }
  }

  return {
    targets,
    overallProgress,
    addTarget,
    updateTargetProgress,
    removeTarget,
  }
}
