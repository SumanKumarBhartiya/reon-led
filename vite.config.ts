import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'reon-led' with your actual GitHub repository name
export default defineConfig({
  plugins: [react()],
  base: '/reon-led/',
})
