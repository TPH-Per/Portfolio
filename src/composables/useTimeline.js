import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export function useTimeline() {
  const { t } = useI18n()

  const timeline = computed(() => [
    {
      id: 1,
      date: '2026/07', // Đồng bộ với targets
      title: t('targets.jlptN2Title'), // Dùng chung translation với targets
      description: t('targets.jlptN2Description'),
      completed: false,
      icon: 'mdi-translate',
      color: 'red',
      progress: 75,
    },
    {
      id: 0, // Thêm mốc tốt nghiệp
      date: '2026/08',
      title: t('timeline.graduation.title'),
      description: t('timeline.graduation.description'),
      completed: true, // Đã hoàn thành
      icon: 'mdi-school-outline',
      color: 'green',
      progress: 100,
    },
    {
      id: 2,
      date: '2027/03', // Đồng bộ với targets
      title: t('targets.ielts7Title'),
      description: t('targets.ielts7Description'),
      completed: false,
      icon: 'mdi-school',
      color: 'blue',
      progress: 60,
    },
    {
      id: 3,
      date: '2027/05', // Đồng bộ với targets
      title: t('targets.gojp'),
      description: t('targets.gojpDescription'),
      completed: false,
      icon: 'mdi-airplane',
      color: 'purple',
      progress: 45,
    },
  ])

  return {
    timeline,
  }
}
