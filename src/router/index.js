import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/components/DefaultLayout.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    redirect: '/about',
    children: [
      {
        path: '/about',
        name: 'About',
        // Lazy loading component About.vue
        component: () => import('../views/About.vue'),
      },
      {
        path: '/project',
        name: 'Project',
        // Lazy loading component Projects.vue
        component: () => import('../views/Projects.vue'),
      },
      {
        path: '/favourites',
        name: 'Favourites',
        // Lazy loading component Favorites.vue
        component: () => import('../views/Favorites.vue'),
      },
      {
        path: '/targets',
        name: 'Targets',
        // Lazy loading component Targets.vue
        component: () => import('../views/Targets.vue'),
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
