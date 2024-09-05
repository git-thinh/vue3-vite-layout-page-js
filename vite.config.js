import path from 'path'
import Vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
import { defineConfig } from 'vite'

// https://github.com/unplugin/unplugin-vue-components
import Components from 'unplugin-vue-components/vite'

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

const PATH_SRC = path.resolve(__dirname, 'src');
//console.log('PATH_SRC =', PATH_SRC);

export default defineConfig({
    root: PATH_SRC,
    plugins: [
        Vue({
            include: [/\.vue$/, /\.md$/],
        }),
        Icons(),
        Components({
            dirs: [
                'components',
                'components/**'
            ],
            extensions: ['vue', 'md', 'svg'],
            directoryAsNamespace: true,
            dts: true,
            globalNamespaces: ['global'],
            include: [/\.vue($|\?)/, /\.md($|\?)/],
            resolvers: [
                (name) => {
                    if (name === 'MyCustom')
                        return path.resolve(__dirname, 'src/CustomResolved.vue').replaceAll('\\', '/')
                },
                //VantResolver(),
                IconsResolver({
                    componentPrefix: 'i',
                }),
            ],

            /*
// relative paths to the directory to search for components.
  dirs: ['src/components'],

  // valid file extensions for components.
  extensions: ['vue'],

  // Glob patterns to match file names to be detected as components.
  // When specified, the `dirs`, `extensions`, and `directoryAsNamespace` options will be ignored.
  // If you want to exclude components being registered, use negative globs with leading `!`.
  globs: ['src/components/*.{vue}'],

  // search for subdirectories
  deep: true,

  // resolvers for custom components
  resolvers: [],

  // generate `components.d.ts` global declarations,
  // also accepts a path for custom filename
  // default: `true` if package typescript is installed
  dts: false,

  // Allow subdirectories as namespace prefix for components.
  directoryAsNamespace: false,

  // Collapse same prefixes (camel-sensitive) of folders and components
  // to prevent duplication inside namespaced component name.
  // works when `directoryAsNamespace: true`
  collapseSamePrefixes: false,

  // Subdirectory paths for ignoring namespace prefixes.
  // works when `directoryAsNamespace: true`
  globalNamespaces: [],

  // auto import for directives
  // default: `true` for Vue 3, `false` for Vue 2
  // Babel is needed to do the transformation for Vue 2, it's disabled by default for performance concerns.
  // To install Babel, run: `npm install -D @babel/parser`
  directives: true,

  // Transform path before resolving
  importPathTransform: v => v,

  // Allow for components to override other components with the same name
  allowOverrides: false,

  // Filters for transforming targets (components to insert the auto import)
  // Note these are NOT about including/excluding components registered - use `globs` or `excludeNames` for that
  include: [/\.vue$/, /\.vue\?vue/],
  exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],

  // Filters for component names that will not be imported
  // Use for globally imported async components or other conflicts that the plugin cannot detect
  excludeNames: [/^Async.+/],

  // Vue version of project. It will detect automatically if not specified.
  // Acceptable value: 2 | 2.7 | 3
  version: 2.7,

  // Only provide types of components in library (registered globally)
  types: [] 
            */
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
    build: {
        minify: true,
        emptyOutDir: true,
        outDir: '../dist',
    },
    server: {
        port: 5123
    }
})