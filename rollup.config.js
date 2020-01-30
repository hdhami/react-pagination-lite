import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'cjs'
    },
    external: ['react'],
    plugins: [
        resolve({
            extensions: ['.js', '.jsx']
        }),
        babel(),
        commonjs({
            extensions: ['.js', '.jsx'],
            exclude: 'node_modules/**'
        })
    ]
};
