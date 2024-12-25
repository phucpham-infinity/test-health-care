import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  css:{
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "src/assets/styles/_variables";
          @import "src/assets/styles/_mixins";
        `,
      },
    }
  }
})
