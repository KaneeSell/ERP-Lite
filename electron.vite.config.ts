import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    build: {
      lib: {
        entry: resolve(__dirname, 'src/main/index.ts'), // Defina o ponto de entrada do processo principal
      },
    },
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
    build: {
      lib: {
        entry: resolve(__dirname, 'src/preload/index.ts'), // Defina o ponto de entrada do preload
      },
    },
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve(__dirname, 'src/renderer/src')
      }
    },
    server: {
      host: true,
      port: 8000, // Agora a porta será usada corretamente
    },
    plugins: [react()],
    assetsInclude: ['**/*.md']
  }
})
