import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      strategies: 'generateSW',
      srcDir: 'src',
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      injectRegister: 'auto',
      includeAssets: ['favicon.ico', 'icon.jpg'],
      manifest: {
        name: 'Table Verbs',
        short_name: 'TableVerbs',
        description: 'Table Verbs Learning',
        theme_color: '#f1f1f1',
        icons: [
          {
            src: 'icon.jpg',
            sizes: '192x192',
            type: 'image/jpg'
          },
          {
            src: 'icon.jpg',
            sizes: '512x512',
            type: 'image/jpg'
          }
        ]
      }
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
