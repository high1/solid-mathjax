import { defineConfig } from 'vite';
import mdx from '@mdx-js/rollup';
import solid from 'vite-plugin-solid';
import uno from 'unocss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';

export default defineConfig({
  base: '/solid-mathjax/',
  plugins: [
    mdx({
      jsxImportSource: 'solid-jsx',
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeMathjax],
    }),
    solid(),
    uno(),
    tsconfigPaths(),
  ],
});
