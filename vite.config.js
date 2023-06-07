import { sentryVitePlugin } from '@sentry/vite-plugin'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
    outDir: 'dist',
  },
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    sentryVitePlugin({
      sourcemaps: {
        assets: `./dist/**`,
        ignore: ['node_modules', 'vite.config.ts']
      },
      org: 'org',
      project: 'project',
      authToken: '123',
      release: {
        name: 'name',
        dist: 'dist',
        deploy: {
          env: 'env',
        },
      },
      telemetry: false,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
