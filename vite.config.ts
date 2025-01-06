/// <reference types="vitest" />
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({ tsconfigPath: './tsconfig.app.json', rollupTypes: true  })
  ],
  base: '/vue-tel-input/',
  build: {
    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VueTelInput',
      fileName: 'vue-tel-input',
    },
    modulePreload: {
      polyfill: true,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        // fix for future vite v6
        exports: 'named',
        assetFileNames: 'vue-tel-input.[ext]',
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  }
})
