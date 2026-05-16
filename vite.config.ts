import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    allowedHosts: [
      'paragogic-grant-noninternational.ngrok-free.dev'
    ]
  },
  // Ensure markdown files are properly handled during build
  assetsInclude: ['**/*.md'],
  // Support raw markdown imports
  optimizeDeps: {
    exclude: ['@vueuse/core']
  }
})
