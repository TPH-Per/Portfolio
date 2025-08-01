// composables/useProjectsData.js
import { ref } from 'vue'

export function useProjectsData() {
  const projects = ref([
    {
      id: 1,
      title: 'E-Commerce Platform',
      subtitle: 'Vue.js & Node.js',
      description:
        'Một nền tảng thương mại điện tử hoàn chỉnh với quản lý sản phẩm, giỏ hàng và thanh toán trực tuyến.',
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
      title: 'Task Management App',
      subtitle: 'React & Firebase',
      description:
        'Ứng dụng quản lý công việc với tính năng real-time collaboration và notification system.',
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
    // ... các project khác
  ])

  return {
    projects,
  }
}
