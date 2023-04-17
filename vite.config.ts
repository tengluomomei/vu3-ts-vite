import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from "vite-plugin-windicss";
import px2vp from 'postcss-px2vp' // 用于将设计稿的 px 转换为 vw 单位

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),WindiCSS()],
  css: {
    postcss: {
      plugins: [
        px2vp({
          viewportWidth(rule) {
            const file = rule.source && rule.source?.input.file
            // 根据文件名动态配置viewport width
            if (file && file?.includes('vant')) return 375
            return 750
          },
          unitToConvert: 'px',
          unitPrecision: 3,
          propList: ['*'],
          viewportUnit: 'vw',
          fontViewportUnit: 'vw',
          selectorBlackList: ['ignore-'],
          minPixelValue: 1,
          mediaQuery: false,
          replace: true,
          exclude: [],
          landscape: false,
          landscapeUnit: 'vw',
          landscapeWidth: 750,
        }),
      ],
    },
  },
})
