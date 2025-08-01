import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export function useProjectsData() {
  const { t } = useI18n()

  const projects = computed(() => [
    {
      id: 1,
      title: t('projects.project1.title'),
      subtitle: t('projects.project1.subtitle'),
      description: t('projects.project1.description'),
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400',
      github: 'https://github.com/TPH-Per/ecommerce-platform',
      demo: 'https://demo-ecommerce.com',
      technologies: [
        { name: 'Vue.js', icon: 'mdi-vuejs', color: 'green' },
        { name: 'Node.js', icon: 'mdi-nodejs', color: 'green-darken-2' },
        { name: 'MongoDB', icon: 'mdi-database', color: 'green-darken-4' },
        { name: 'Express', icon: 'mdi-server', color: 'grey' },
      ],
    },
    {
      id: 2,
      title: t('projects.project2.title'),
      subtitle: t('projects.project2.subtitle'),
      description: t('projects.project2.description'),
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400',
      github: 'https://github.com/TPH-Per/task-manager',
      demo: null,
      technologies: [
        { name: 'React', icon: 'mdi-react', color: 'blue' },
        { name: 'Firebase', icon: 'mdi-firebase', color: 'orange' },
        { name: 'Material-UI', icon: 'mdi-material-design', color: 'blue-darken-2' },
        { name: 'TypeScript', icon: 'mdi-language-typescript', color: 'blue-darken-4' },
      ],
    },
  ])

  return {
    projects,
  }
}
