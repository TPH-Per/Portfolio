import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
export function useTargets() {
  const { t } = useI18n()

  const targets = computed(() => [
    {
      id: 1,
      title: t('targets.jlptN2Title'),
      description: t('targets.jlptN2Description'),
      progress: 75,
      status: t('targets.inProgress'),
      color: 'red',
      icon: 'mdi-translate', // Icon MDI bình thường
      gradient: 'linear-gradient(135deg, #ff6b6b 0%, #ff8787 100%)',
      details: [
        { label: t('targets.details.targetDate'), value: '2026/07', icon: 'mdi-calendar' },
        { label: t('targets.details.category'), value: 'Language', icon: 'mdi-school' },
        { label: t('targets.details.priority'), value: 'High', icon: 'mdi-star' },
      ],
    },
    {
      id: 2,
      title: t('targets.ielts7Title'),
      description: t('targets.ielts7Description'),
      progress: 60,
      status: t('targets.inProgress'),
      color: 'blue',
      icon: 'mdi-school', // Icon MDI bình thường
      gradient: 'linear-gradient(135deg, #4dabf7 0%, #339af0 100%)',
      details: [
        { label: t('targets.details.targetDate'), value: '2027/03', icon: 'mdi-calendar' },
        { label: t('targets.details.category'), value: 'Language', icon: 'mdi-school' },
        { label: t('targets.details.priority'), value: 'High', icon: 'mdi-star' },
      ],
    },
    {
      id: 3,
      title: t('targets.gojp'),
      description: t('targets.gojpDescription'),
      progress: 45,
      status: t('targets.planning'),
      color: 'purple',
      icon: 'mdi-airplane',
      gradient: 'linear-gradient(135deg, #845ec2 0%, #b39cd0 100%)',
      details: [
        { label: t('targets.details.targetDate'), value: '2027/5', icon: 'mdi-calendar-check' },
        { label: t('targets.details.category'), value: '日本で働く', icon: 'mdi-briefcase' },
        { label: t('targets.details.priority'), value: 'Medium', icon: 'mdi-star-half' },
      ],
    },
  ])

  const overallProgress = computed(() => {
    if (!targets.value.length) return 0
    const total = targets.value.reduce((sum, target) => sum + target.progress, 0)
    return total / targets.value.length
  })

  return {
    targets,
    overallProgress,
  }
}
