import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import { createPinia } from 'pinia'
import '@mdi/font/css/materialdesignicons.css'
import App from './App.vue'
import router from './router'
import i18n from './locales' // Import i18n

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)
const pinia = createPinia() // 👈 Tạo instance Pinia

app.use(router)
app.use(vuetify)
app.use(i18n)
app.use(pinia) // 👈 Sử dụng Pinia

app.mount('#app')
