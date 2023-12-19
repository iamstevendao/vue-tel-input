import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/vue-tel-input/',
  build: {
    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
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
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'vue-tel-input.css';
          }
          return assetInfo.name;
        },
      },
    },
  },
})
