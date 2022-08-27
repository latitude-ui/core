
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel from "@rollup/plugin-babel";
import { nodeResolve } from '@rollup/plugin-node-resolve';
// development
import serve from "rollup-plugin-serve";
import livereload from 'rollup-plugin-livereload'
import replace from '@rollup/plugin-replace';

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
        nodeResolve({
          extensions: [".js"],
        }),
        replace({
          'process.env.NODE_ENV': JSON.stringify( 'development' )
        }),
        babel({
          presets: ["@babel/preset-react"],
        }),    
        typescript({tsconfig: 'tsconfig.json'}),
        commonjs(),
        serve({
          // Launch in browser (default: false)
          open: true,
        
          // Page to navigate to when opening the browser.
          // Will not do anything if open=false.
          // Remember to start with a slash.
          openPage: '/',
        
          // Show server address in console (default: true)
          verbose: false,
        
          // Folder to serve files from
          contentBase: './test/demo',
        
          // Multiple folders to serve from
          // contentBase: ['dist', 'static'],
        
          // Set to true to return index.html (200) instead of error page (404)
          historyApiFallback: false,
        
          // Path to fallback page
          // historyApiFallback: '/200.html',
        
          // Options used in setting up server
          host: 'localhost',
          port: 8080,
        
          // By default server will be served over HTTP (https: false). It can optionally be served over HTTPS
          // https: {
          //   key: fs.readFileSync('/path/to/server.key'),
          //   cert: fs.readFileSync('/path/to/server.crt'),
          //   ca: fs.readFileSync('/path/to/ca.pem')
          // },
        
          //set headers
          headers: {
            'Access-Control-Allow-Origin': '*',
            foo: 'bar'
          },
        
          // set custom mime types, usage https://github.com/broofa/mime#mimedefinetypemap-force--false
          mimeTypes: {
            'application/javascript': ['js_commonjs-proxy']
          }
        
          // execute function after server has begun listening
          // onListening: function (server) {
          //   const address = server.address()
          //   const host = address.address === '::' ? 'localhost' : address.address
          //   // by using a bound function, we can access options as `this`
          //   const protocol = this.https ? 'https' : 'http'
          //   console.log(`Server listening at ${protocol}://${host}:${address.port}/`)
          // }
        }),
        livereload({})
      ],
};