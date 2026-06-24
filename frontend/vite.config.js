import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // ----- Development Server -----
  server: {
    port: 5173,
    // Dev mein /api calls backend (port 4000) par proxy ho jaayein
    // Isse CORS ki zaroorat nahi aur production jaisa behavior milta hai
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      },
    },
  },

  // ----- Production Build -----
  build: {
    outDir: 'dist',       // Nginx yahan se static files serve karega
    emptyOutDir: true,    // Purani dist clear karo pehle
  },
})
