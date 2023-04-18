import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from "vite-plugin-windicss";
import px2vp from 'postcss-px2vp' // 用于将设计稿的 px 转换为 vw 单位
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),WindiCSS(),vueJsx()],
  server: {
    host: '0.0.0.0',
    port: 8080, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
    // 设置代理，根据我们项目实际情况配置
    proxy: {
      '/tools-api': { 
        target: 'https://gadgets-api-test.iyingdi.com',
        changeOrigin: true, //是否跨域
        rewrite: (path) => path.replace(/^\/tools-api/, '')
      }
    }
  },
  resolve:{
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
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
