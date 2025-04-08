import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import json from "@rollup/plugin-json"; 
import polyfillNode from "rollup-plugin-polyfill-node";
import image from '@rollup/plugin-image';
import url from '@rollup/plugin-url';


export default [
    {
      input: "src/index.ts",
      output: [
        {
          file: "dist/index.js",
          format: "cjs",
          sourcemap: true,
        },
        {
          file: "dist/index.esm.js",
          format: "esm",
          sourcemap: true,
        },
      ],
      plugins: [
        resolve({
          browser: true, 
          preferBuiltins: false
        }),
        commonjs(),
        polyfillNode(),
        json(),
        image(),
        url({
          include: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.gif'],
          limit: 0, // Set to 0 to always copy instead of inlining as base64
          publicPath: '', // Optional
          emitFiles: true,
          fileName: '[name][hash][extname]',
        }),
        typescript({
          tsconfig: "./tsconfig.json",
          exclude: ["**/*.test.tsx", "**/*.test.ts", "**/*.stories.ts"],
          declaration: true, // Generate .d.ts files
          declarationDir: 'dist/types', // Output directory for .d.ts files
          outDir: 'dist', // Output directory for compiled JS files
        }),
        postcss({ extensions: [".css"], inject: true, extract: "styles.css", minimize: true }),
      ],
      external: ["react", "react-dom", "react/jsx-runtime", "fs", "path"],
    },
    {
      input: "dist/types/index.d.ts",
      output: [{ file: "dist/index.d.ts", format: "esm" }],
      plugins: [dts()],
      external: [/\.css$/],
    },
  ];