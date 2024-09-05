import path from 'path'
import Vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
import { defineConfig } from 'vite'

const PATH_SRC = path.resolve(__dirname, 'src');
//console.log('PATH_SRC =', PATH_SRC);

export default defineConfig({
    plugins: [
        Vue({
            include: [/\.vue$/, /\.md$/],
        }),
    ],
    resolve: {
        alias: {
            '@': PATH_SRC,
            //'^': `${root}/src/${projectDir}/${projectCode}`,
            //'^runtime': path.resolve(__dirname, './src/runtime'),
            //'^runtimejs': path.resolve(__dirname, './src/runtime/js'),
            //'^runtime': `${root}/src/${projectDir}/${projectCode}/runtime`,
            //'^runtimejs': `${root}/src/${projectDir}/${projectCode}/runtime/js`,
        },
    },
    root: PATH_SRC,
    build: {
        minify: true,
        emptyOutDir: true,
        outDir: '../dist',
    },
    server: {
        port: 5123
    }
})