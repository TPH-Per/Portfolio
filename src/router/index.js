import { createRouter, createWebHistory } from 'vue-router'

// Layout chính
import DefaultLayout from '@/components/DefaultLayout.vue'

// Import chính xác các file view với đúng tên và chữ hoa/thường
import About from '../views/About.vue'
import Project from '../views/Projects.vue'
import Favourites from '../views/Favorites.vue'
import Targets from '../views/Targets.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    redirect: '/about',
    children: [
      {
        path: '/about',
        name: 'About',
        component: About,
      },
      {
        path: '/project',
        name: 'Project',
        component: Project,
      },
      {
        path: '/favourites',
        name: 'Favourites',
        component: Favourites,
      },
      {
        path: '/targets',
        name: 'Targets',
        component: Targets,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Thêm hàm này để luôn cuộn lên đầu trang khi điều hướng
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
