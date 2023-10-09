import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // Auto import functions from Vue, e.g. ref, reactive, toRef...
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue', 'vue-router'],
      // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
      // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
      resolvers: [
        ElementPlusResolver(),
        // Auto import icon components 自动导入图标组件
        IconsResolver({
          prefix: 'Icon',
        }),
      ],
      dts: resolve(__dirname, 'src/build/auto-imports.d.ts'),
    }),
    Components({
      resolvers: [
        // Auto register Element Plus components 自动导入 Element Plus 组件
        ElementPlusResolver(),
        // Auto register icon components 自动注册图标组件
        IconsResolver({
          enabledCollections: ['ep'],
        }),
      ],

      dts: resolve(__dirname, 'src/build/components.d.ts'),
    }),
    Icons({
      autoInstall: true,
    }),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), "src/assets/svg")],
      symbolId: "icon-[dir]-[name]",
    }),
  ],
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
