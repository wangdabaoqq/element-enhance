import path from 'path'
import { defineConfig } from 'vite'
import plugins from './src/plugin/common-plugins'

export default defineConfig({
  base: '/element-enhance/',
  resolve: {
    alias: {
      '/@src': path.resolve(__dirname, '../src'),
    },
  },
  plugins,
})
