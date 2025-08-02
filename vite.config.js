import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
// Bạn có thể xóa các import không còn sử dụng

export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // Bạn có thể xóa toàn bộ key "build" ở đây.
  // Vite sẽ tự động áp dụng các cài đặt tối ưu nhất.
})
