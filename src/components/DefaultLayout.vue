<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      permanent
      theme="dark"
      image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
      :width="321"
    >
      <v-img :src="avatarImage" height="257" cover class="profile-avatar"></v-img>
      <v-list-item title="Thái Phúc Hưng" class="pa-4">
        <template v-slot:subtitle>
          <div class="mt-2">
            <v-icon size="x-small" icon="mdi-email-outline"></v-icon>
            phuchung3322@gmail.com
            <br />
            <v-icon size="x-small" icon="mdi-phone-outline"></v-icon>
            0559601038
            <br />
            <v-icon size="x-small" icon="mdi-github"></v-icon>
            <a href="https://github.com/TPH-Per" target="_blank" class="text-white"> My GitHub </a>
          </div>
        </template>
      </v-list-item>
      <v-divider></v-divider>
      <v-list nav density="compact">
        <v-list-item
          v-for="item in navItems"
          :key="item.title"
          :prepend-icon="item.icon"
          :title="item.title"
          :to="item.path"
          link
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="light-blue-lighten-2" elevation="0">
      <v-app-bar-title>
        <div class="title-container">
          <span
            v-for="(char, index) in titleChars"
            :key="index"
            class="cool-title-char"
            :style="{ animationDelay: index * 0.1 + 's' }"
          >
            <span v-if="char === ' '">&nbsp;</span>
            <span v-else>{{ char }}</span>
          </span>
        </div>
      </v-app-bar-title>
      <LanguageSwitcher />
      <v-btn :icon="drawer ? 'mdi-close' : 'mdi-menu'" @click="drawer = !drawer"></v-btn>
    </v-app-bar>

    <v-main ref="mainContent" class="main-container" @wheel="handleWheel">
      <router-view v-slot="{ Component }">
        <transition name="page-transition" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import avatarImage from '../assets/suipadoru.jpg'
import LanguageSwitcher from './LanguageSwitcher.vue'
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()
const drawer = ref(true)

const navItems = computed(() => [
  { title: t('navigation.about'), icon: 'mdi-account', path: '/about' },
  { title: t('navigation.projects'), icon: 'mdi-gavel', path: '/project' },
  { title: t('navigation.favorites'), icon: 'mdi-heart', path: '/favourites' },
  { title: t('navigation.targets'), icon: 'mdi-target', path: '/targets' },
])

const titleText = "Welcome to Per's Portfolio"
const titleChars = titleText.split('')

// --- LOGIC CUỘN CHUỘT HOÀN CHỈNH ---
const mainContent = ref(null)
let canNavigate = true

const handleWheel = (event) => {
  const el = mainContent.value?.$el
  if (!el || !canNavigate) {
    return
  }

  const isScrollingDown = event.deltaY > 0
  const isScrollingUp = event.deltaY < 0
  const isAtBottom = Math.ceil(el.scrollTop) + el.clientHeight >= el.scrollHeight
  const isAtTop = el.scrollTop === 0

  const currentPath = route.path
  const currentIndex = navItems.value.findIndex((item) => item.path === currentPath)
  let targetPath = null

  if (isScrollingDown && isAtBottom && currentIndex < navItems.value.length - 1) {
    targetPath = navItems.value[currentIndex + 1].path
  } else if (isScrollingUp && isAtTop && currentIndex > 0) {
    targetPath = navItems.value[currentIndex - 1].path
  }

  if (targetPath) {
    canNavigate = false
    router.push(targetPath)
    setTimeout(() => {
      canNavigate = true
    }, 1000) // Thời gian chờ để tránh cuộn liên tục
  }
}
</script>

<style scoped>
/* Class này rất quan trọng để logic cuộn hoạt động */
.main-container {
  height: 100vh;
  overflow-y: auto;
}

/* Các style khác giữ nguyên */
.profile-avatar {
  border-radius: 20px;
  margin: 16px;
  box-shadow: 0 4px 8px rgb(0 0 0);
}
.title-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.cool-title-char {
  display: inline-block;
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
  -webkit-text-stroke: 0.3px #f00;
  text-shadow:
    0 0 5px #fff5,
    0 2px 4px #0003;
  animation:
    gentle-bounce 3s ease-in-out infinite,
    rgb-stroke 2s linear infinite,
    rgb-glow 4s ease-in-out infinite alternate;
}
.page-transition-enter-active,
.page-transition-leave-active {
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}
.page-transition-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.page-transition-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
@keyframes gentle-bounce {
  0%,
  100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-3px) scale(1.05);
  }
}
@keyframes rgb-stroke {
  0% {
    -webkit-text-stroke-color: #f00;
  }
  16.66% {
    -webkit-text-stroke-color: #ff7700;
  }
  33.33% {
    -webkit-text-stroke-color: #ffdd00;
  }
  50% {
    -webkit-text-stroke-color: #0f0;
  }
  66.66% {
    -webkit-text-stroke-color: #09f;
  }
  83.33% {
    -webkit-text-stroke-color: #60f;
  }
  to {
    -webkit-text-stroke-color: #ff0099;
  }
}
@keyframes rgb-glow {
  0% {
    filter: drop-shadow(0 0 8px #ff000099);
  }
  16.66% {
    filter: drop-shadow(0 0 8px #ff770099);
  }
  33.33% {
    -webkit-text-stroke-color: #ffdd00;
  }
  50% {
    filter: drop-shadow(0 0 8px #00ff0099);
  }
  66.66% {
    -webkit-text-stroke-color: #09f;
  }
  83.33% {
    -webkit-text-stroke-color: #60f;
  }
  to {
    filter: drop-shadow(0 0 8px #ff009999);
  }
}
.title-container:hover .cool-title-char {
  animation-duration: 1.5s, 1s, 2s;
  transform: scale(1.1);
  -webkit-text-stroke-width: 3px;
  filter: drop-shadow(0 0 12px #fff8) !important;
}
@media (max-width: 600px) {
  .cool-title-char {
    font-size: 1.1rem;
  }
}
</style>
