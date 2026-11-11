import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vercel detecta Vite automáticamente: build = `vite build`, salida = `dist`.
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2019',
    // Separa framer-motion en su propio chunk para que cargue en paralelo.
    rollupOptions: {
      output: {
        manualChunks: {
          motion: ['framer-motion'],
        },
      },
    },
  },
})
