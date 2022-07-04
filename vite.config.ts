import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      plugins: [
        vue(),
      ],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        }
      },
      build: {
        rollupOptions: {
          input: { app: './examples/module/index.html' },
        }
      },
      server: {
        open: '/examples/module/',
      }
    }
  }

  return {
    plugins: [
      vue(),
      viteStaticCopy({
        targets: [
          { src: 'src/assets/component.css', dest: 'css' },
          { src: 'src/assets/sprite.css', dest: 'css' },
        ]
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    build: {
      lib: {
        formats: ['es', 'cjs', 'iife'],
        entry: path.resolve(__dirname, 'src/index.js'),
        name: 'VueTelInput',
        fileName: (format) => `vue-tel-input.${format}.js`
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          exports: 'named',
          globals: {
            vue: 'Vue'
          },
          assetFileNames: (assetInfo) => {
            if (assetInfo.name === 'style.css') return 'vue-tel-input.css';
            return assetInfo.name;
          },
        },
      }
    },
  };
})
