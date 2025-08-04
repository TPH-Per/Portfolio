import { fileURLToPath, URL } from 'node:url' // Thêm dòng này

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // PHẦN 1: Sửa lỗi routing khi deploy
  // Giữ nguyên cấu hình này để Vite biết cần phục vụ trang web từ thư mục con
  base: '/',

  // PHẦN 2: Cấu hình bí danh @
  resolve: {
    alias: {
      // Dòng này nói rằng: bất cứ khi nào thấy @ trong đường dẫn import,
      // hãy thay thế nó bằng đường dẫn tuyệt đối tới thư mục 'src'
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
