import * as path from "node:path"
import {defineConfig} from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import compression from "vite-plugin-compression"

export default defineConfig({
    plugins: [vue(), vueJsx()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        }
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    'naive-ui': ['naive-ui'],
                    'vue-vendor': ['vue', 'vue-router']
                }
            }
        }
    }
})
