// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite'
// eslint-disable-next-line import/no-extraneous-dependencies
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      components: resolve(__dirname, 'src/components'),
      api: resolve(__dirname, 'src/api'),
      router: resolve(__dirname, 'src/router'),
      store: resolve(__dirname, 'src/store'),
      styles: resolve(__dirname, 'src/styles'),
      views: resolve(__dirname, 'src/views'),
      layouts: resolve(__dirname, 'src/layouts'),
      utils: resolve(__dirname, 'src/utils'),
      plugins: resolve(__dirname, 'src/plugins'),
      dirs: resolve(__dirname, 'src/directives'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
  server: {
    https: false,
    port: 3000,
    host: '0.0.0.0',
    open: true,
    cors: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api/, ''), // stage
      },
    },
  },
  build: {
    target: 'es2015',
    sourcemap: false,
    chunkSizeWarningLimit: 2000,
    reportCompressedSize: true,
  },
})
