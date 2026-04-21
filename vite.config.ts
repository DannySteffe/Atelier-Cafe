import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Atelier-Cafe/',
  plugins: [
    tailwindcss(),
  ],
})