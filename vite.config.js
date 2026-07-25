import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/pharma-1/', // Replace 'pharma-app' with your actual GitHub repository name!
})