import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/AguasMarinas/', // 👈 nombre exacto del repositorio (sensible a mayúsculas)
  build: {
    outDir: 'dist' // 👈 carpeta donde se genera el sitio al hacer build
  }
})
