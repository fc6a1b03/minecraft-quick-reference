import {defineConfig} from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import compression from "vite-plugin-compression"

export default defineConfig({
    plugins: [vue(), vueJsx(), compression({
        ext: ".gz",
        verbose: false,
        disable: false,
        threshold: 1024,
        algorithm: "gzip",
        deleteOriginFile: true
    })],
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