import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import vueJsx from '@vue/babel-plugin-jsx'

const pathResolve = (dir: string): any => {
  return resolve(__dirname, ".", dir)
}
const alias: Record<string, string> = {
  '@': pathResolve("src")
}
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({})
  ],
  resolve: {
    alias
  },
  /* 未所有模块导入h函数 */
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

  build: {
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
    lib: {
      entry: './src/index.ts',
      name: 'vue3Compontents',
    },
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