import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import VueRouter from 'unplugin-vue-router/vite'
import Layouts from 'vite-plugin-vue-layouts'
import Progress from 'vite-plugin-progress'
import AutoImport from 'unplugin-auto-import/vite'
import ViteImagemin from 'vite-plugin-imagemin'
import SvgComponent from 'unplugin-svg-component/vite'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig((args) => {
  const IS_DEV = args.mode === 'dev'
  const IS_PROD = args.mode === 'prod'

  return {
    base: './',
    define: {
      __IS_DEV__: IS_DEV,
      __IS_PROD__: IS_PROD,
    },
    plugins: [
      tailwindcss(),
      VueJsx(),
      Vue({
        include: [/\.vue$/],
      }),
      ViteImagemin({
        optipng: {
          optimizationLevel: 7,
        },
      }),
      SvgComponent({
        iconDir: ['./src/assets/svgs'],
        componentStyle: '',
        dts: false,
        preserveColor: /fill\.svg$/,
        dtsDir: './src/types',
      }),
      AutoImport({
        imports: ['vue', 'vue-router'],
        dts: './src/types/auto-imports.d.ts',
        eslintrc: {
          enabled: true,
        },
      }),
      Layouts({
        layoutsDirs: 'src/layouts',
      }),
      Progress(),
      VueI18n({
        runtimeOnly: true,
        compositionOnly: true,
        fullInstall: true,
      }),
      VueRouter({
        importMode: 'async',
        extensions: ['.vue', '.tsx'],
        routesFolder: [{ src: 'src/pages' }],
      }),
    ],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
    optimizeDeps: { include: [], exclude: [] },
  }
})
