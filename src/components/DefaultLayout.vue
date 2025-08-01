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

      <v-btn :icon="drawer ? 'mdi-close' : 'mdi-menu'" @click="drawer = !drawer"></v-btn>
    </v-app-bar>

    <v-main style="background-color: #f0f2f5">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import avatarImage from '../assets/suipadoru.jpg'
import { ref } from 'vue'

const drawer = ref(true)
const navItems = ref([
  { title: 'About me', icon: 'mdi-account', path: '/about' },
  { title: 'Project', icon: 'mdi-gavel', path: '/project' },
  { title: 'Favorites', icon: 'mdi-heart', path: '/favourites' },
  { title: 'Target', icon: 'mdi-target', path: '/targets' },
])

// 1. Định nghĩa chuỗi tiêu đề
const titleText = "Welcome to Per's Portfolio"
// 2. Tách chuỗi thành một mảng các chữ cái
const titleChars = titleText.split('')
</script>

<style scoped>
/* Profile avatar styling */
.profile-avatar {
  border-radius: 20px;
  margin: 16px;
  box-shadow: 0 4px 8px rgb(0, 0, 0);
}

/* Title container - căn giữa */
.title-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

/* Animated title characters */
.cool-title-char {
  display: inline-block;
  position: relative;
  font-size: 1.4rem;
  font-weight: 700;
  color: #ffffff;

  /* RGB animated border cho viền chữ */
  -webkit-text-stroke-width: 0.3px;
  -webkit-text-stroke-color: #ff0000;

  /* Shadow và glow effects */
  text-shadow:
    0 0 5px rgba(255, 255, 255, 0.3),
    0 2px 4px rgba(0, 0, 0, 0.2);

  /* Animations */
  animation:
    gentle-bounce 3s ease-in-out infinite,
    rgb-stroke 2s linear infinite,
    rgb-glow 4s ease-in-out infinite alternate;
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
    -webkit-text-stroke-color: #ff0000; /* Đỏ */
  }
  16.66% {
    -webkit-text-stroke-color: #ff7700; /* Cam */
  }
  33.33% {
    -webkit-text-stroke-color: #ffdd00; /* Vàng */
  }
  50% {
    -webkit-text-stroke-color: #00ff00; /* Xanh lá */
  }
  66.66% {
    -webkit-text-stroke-color: #0099ff; /* Xanh dương */
  }
  83.33% {
    -webkit-text-stroke-color: #6600ff; /* Tím */
  }
  100% {
    -webkit-text-stroke-color: #ff0099; /* Hồng */
  }
}

@keyframes rgb-glow {
  0% {
    filter: drop-shadow(0 0 8px rgba(255, 0, 0, 0.6));
  }
  16.66% {
    filter: drop-shadow(0 0 8px rgba(255, 119, 0, 0.6));
  }
  33.33% {
    filter: drop-shadow(0 0 8px rgba(255, 221, 0, 0.6));
  }
  50% {
    filter: drop-shadow(0 0 8px rgba(0, 255, 0, 0.6));
  }
  66.66% {
    filter: drop-shadow(0 0 8px rgba(0, 153, 255, 0.6));
  }
  83.33% {
    filter: drop-shadow(0 0 8px rgba(102, 0, 255, 0.6));
  }
  100% {
    filter: drop-shadow(0 0 8px rgba(255, 0, 153, 0.6));
  }
}

/* Hover effect cho title */
.title-container:hover .cool-title-char {
  animation-duration: 1.5s, 1s, 2s;
  transform: scale(1.1);
  -webkit-text-stroke-width: 3px;
  filter: drop-shadow(0 0 12px rgba(255, 255, 255, 0.8)) !important;
}

/* Responsive cho mobile */
@media (max-width: 600px) {
  .cool-title-char {
    font-size: 1.1rem;
  }
}
</style>
