// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // <- esto asegura que los recursos carguen correctamente desde cualquier dominio
  plugins: [react()],
})
