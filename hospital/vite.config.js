import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
  ],
  build: {

    minify: 'oxc',
    cssMinify: 'lightningcss',
    chunkSizeWarningLimit: 1000,
  },
  server: {
    warmup: {
      clientFiles: ['./src/main.jsx', './src/App.jsx']
    }
  },
  preview: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 5173, 
    strictPort: false,
  }
})
