import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'
import { presetUno } from 'unocss'
import { HstVue } from '@histoire/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  histoire: {
    plugins: [HstVue()],
    setupFile: 'histoire.setup.ts'
  },
  plugins: [
    vue(),
    unocss({
      presets: [presetUno()]
    })
  ],
})
