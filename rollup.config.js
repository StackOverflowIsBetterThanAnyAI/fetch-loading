import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import terser from '@rollup/plugin-terser'
import postcss from 'rollup-plugin-postcss'

const packageJson = require('./package.json')

const commonPlugins = [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    postcss(),
    terser(),
]

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true,
            },
        ],
        plugins: [
            ...commonPlugins,
            typescript({
                tsconfig: './tsconfig.json',
                declaration: false,
                compilerOptions: { module: 'ESNext' },
            }),
        ],
        external: ['react', 'react-dom'],
    },
    {
        input: 'src/index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
            },
        ],
        plugins: [
            ...commonPlugins,
            typescript({
                tsconfig: './tsconfig.json',
                declaration: false,
            }),
        ],
        external: ['react', 'react-dom'],
    },
    {
        input: 'src/index.ts',
        output: [{ file: packageJson.types, format: 'esm' }],
        plugins: [dts.default()],
        external: [/\.css$/],
    },
]
