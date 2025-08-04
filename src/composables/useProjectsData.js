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
      image:
        'https://s3-hn-2.cloud.cmctelecom.vn/tapchicongthuong.vn/tcct-media/23/7/14/dh-cong-thuong.jpg',
      github: 'https://github.com/CaoPhu2305/java',
      //demo: 'https://demo-ecommerce.com',
      technologies: [
        { name: 'JSP', icon: 'mdi-language-java', color: 'green' },
        { name: 'Spring boot', icon: 'mdi-leaf', color: 'green-darken-2' },
        { name: 'SQL server', icon: 'mdi-database', color: 'green-darken-4' },
      ],
    },
    {
      id: 2,
      title: t('projects.project2.title'),
      subtitle: t('projects.project2.subtitle'),
      description: t('projects.project2.description'),
      image: 'https://media.tenor.com/9LH4AwWJB2oAAAAM/agnes-tachyon-uma-musume.gif',
      github: 'https://github.com/TPH-Per/Portfolio',
      demo: null,
      technologies: [
        { name: 'Vuejs', icon: 'mdi-vuejs', color: 'blue' },
        { name: 'FastAPI', icon: 'mdi-language-python', color: 'orange' },
        { name: 'SQL server', icon: 'mdi-database', color: 'blue-darken-2' },
      ],
    },
  ])

  return {
    projects,
  }
}
