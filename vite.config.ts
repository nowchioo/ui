import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// import vueJsx from '@vue/babel-plugin-jsx'

const pathResolve = (dir: string): any => {
  return resolve(__dirname, ".", dir)
}
const alias: Record<string, string> = {
  '@': pathResolve("src")
}
export default defineConfig({
  plugins: [
    vue(),
    // vueJsx('')
  ],
  resolve: {
    alias
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: "import { h } from 'vue';"
  },
  css: {
    modules: {
      generateScopedName: '[local]__[hash:base64:5]',
      hashPrefix: 'prefix'
    },
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve('src/style/index.less')}";`,/* 配置less全局样式 */

        },
        javascriptEnabled: true,
      }
    }
  },
})
/* 
vite 进行导入时使用 @ 未指向src 安装下方@types/node并配置vite.config.ts可将@指向src

1.npm install --save-dev @types/node 

2.const pathResolve = (dir: string): any => {
  return resolve(__dirname, ".", dir)
}
const alias: Record<string, string> = {
  '@': pathResolve("src")
}


*/

/*
less的安装与全局配置
 npm i less    npm i less-loader
css: {

   modules: {
      generateScopedName: '[local]__[hash:base64:5]',
      hashPrefix: 'prefix'
    },//配置css模块化
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve('src/style/index.less')}";`,// 配置less全局样式 

        },
        javascriptEnabled: true,
      }
    }
  }

*/