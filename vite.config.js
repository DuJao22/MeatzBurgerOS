import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        menu: resolve(__dirname, 'menu.html'),
        adminDashboard: resolve(__dirname, 'admin-dashboard.html'),
        login: resolve(__dirname, 'login.html'),
      },
    },
  },
})
