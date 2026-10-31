import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import terser from '@rollup/plugin-terser'

const packageJson = require('./package.json')

// react, react-dom and subpaths like react/jsx-runtime are provided by the consumer
const external = [/^react(-dom)?($|\/)/]

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true,
            },
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
            },
        ],
        plugins: [
            typescript({
                tsconfig: './tsconfig.json',
                declaration: false,
            }),
            terser(),
        ],
        external,
    },
    {
        input: 'src/index.ts',
        // .d.ts for require, .d.mts for import, so each build gets matching types
        output: [
            { file: packageJson.types, format: 'esm' },
            { file: packageJson.types.replace(/\.d\.ts$/, '.d.mts'), format: 'esm' },
        ],
        plugins: [dts.default()],
        external,
    },
]
