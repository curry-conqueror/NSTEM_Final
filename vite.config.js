import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Production (npm run build): for GitHub Pages .../NSTEM_Final/
  base: process.env.NODE_ENV === 'production' ? '/NSTEM_Final/' : '/',
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
})
