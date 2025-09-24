// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })




import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = resolve(__filename, '..')

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), // főoldal
        qr: resolve(__dirname, 'qr.html'),      // QR oldal
        weather: resolve(__dirname, 'weather.html'),
        // UFO: resolve(__dirname, 'UFO/index.html'),
        // ha kell több oldal, itt sorold fel:
        // about: resolve(__dirname, 'about.html'),
      },
    },
  },
})

