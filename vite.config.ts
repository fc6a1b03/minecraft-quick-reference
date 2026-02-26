import * as path from 'node:path'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import compression from 'vite-plugin-compression'

export default defineConfig(({mode}) => {
    const isProd = mode === 'production'

    return {
        plugins: [
            vue(),
            vueJsx(),
            // Gzip 压缩
            compression({
                algorithm: 'gzip',
                ext: '.gz',
                threshold: 1024,
            }),
            // Brotli 压缩（比 gzip 小 15-25%）
            compression({
                algorithm: 'brotliCompress',
                ext: '.br',
                threshold: 1024,
            }),
        ],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        build: {
            // 禁用 sourcemap 提升构建速度
            sourcemap: false,
            // CSS 代码分割
            cssCodeSplit: true,
            // esbuild 压缩（比 terser 快 10-20 倍）
            minify: 'esbuild',
            esbuild: {
                target: 'es2020',
                drop: isProd ? ['console', 'debugger'] : [],
            },
            // 禁用报告压缩大小（节省构建时间）
            reportCompressedSize: false,
            // chunk 大小警告阈值
            chunkSizeWarningLimit: 500,
            // 资源内联阈值
            assetsInlineLimit: 4096,
            rollupOptions: {
                output: {
                    // 智能代码分割
                    manualChunks: {
                        'vue-vendor': ['vue', 'vue-router'],
                        'naive-ui': ['naive-ui'],
                    },
                    // 文件命名
                    entryFileNames: 'assets/[name]-[hash:8].js',
                    chunkFileNames: 'assets/[name]-[hash:8].js',
                    assetFileNames: (assetInfo) => {
                        const info = assetInfo.name || ''
                        if (info.endsWith('.css')) {
                            return 'assets/css/[name]-[hash:8][extname]'
                        }
                        return 'assets/[name]-[hash:8][extname]'
                    },
                },
            },
        },
        server: {
            // 预热常用文件
            warmup: {
                clientFiles: ['./src/main.ts', './src/App.vue'],
            },
        },
    }
})
