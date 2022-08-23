
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';


export default {
    input: 'index.js',
    output: [
        {
          file: packageJson.main,
          format: 'cjs',
          sourcemap: true,
        },
        {
          file: packageJson.module,
          format: 'esm',
          sourcemap: true,
        },
      ],
};