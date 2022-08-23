
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import serve from "rollup-plugin-serve";



export default {
    input: './test/demo/index.js',
    output: [
        {
          file: './test/demo/bundle.js',
          format: 'esm',
          sourcemap: true,
        },
      ],
      plugins: [
        resolve(),
        commonjs(),
        typescript({tsconfig: 'tsconfig.json'}),
        serve('./test/demo'),
      ],
};