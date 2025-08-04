import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
// Chỉ import các components thực sự cần dùng
import {
  VApp,
  VNavigationDrawer,
  VImg,
  VListItem,
  VList,
  VDivider,
  VAppBar,
  VAppBarTitle,
  VBtn,
  VMain,
  VContainer,
  VRow,
  VCol,
  VCard,
  VCardTitle,
  VCardSubtitle,
  VCardText,
  VCardActions,
  VChip,
  VIcon,
  VProgressLinear,
  VProgressCircular,
  VTimeline,
  VTimelineItem,
  VDialog,
  VMenu,
  VRating,
  VFab,
} from 'vuetify/components'
import { Intersect, Ripple } from 'vuetify/directives'
import 'vuetify/styles'
import { createPinia } from 'pinia'
import '@mdi/font/css/materialdesignicons.css'
import App from './App.vue'
import router from './router'
import i18n from './locales'

const vuetify = createVuetify({
  components: {
    VApp,
    VNavigationDrawer,
    VImg,
    VListItem,
    VList,
    VDivider,
    VAppBar,
    VAppBarTitle,
    VBtn,
    VMain,
    VContainer,
    VRow,
    VCol,
    VCard,
    VCardTitle,
    VCardSubtitle,
    VCardText,
    VCardActions,
    VChip,
    VIcon,
    VProgressLinear,
    VProgressCircular,
    VTimeline,
    VTimelineItem,
    VDialog,
    VMenu,
    VRating,
    VFab,
  },
  directives: {
    Intersect,
    Ripple,
  },
})

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(vuetify)
app.use(i18n)
app.use(pinia)

// Performance monitoring trong production
if (import.meta.env.PROD) {
  app.config.performance = true

  // Web Vitals monitoring
  import('web-vitals').then(({ onCLS, onFID, onLCP, onFCP, onTTFB }) => {
    onCLS(console.log)
    onFID(console.log)
    onLCP(console.log)
    onFCP(console.log)
    onTTFB(console.log)
  })
}

app.mount('#app')
