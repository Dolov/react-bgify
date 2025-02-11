import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'react-bgify',
  },
  headScripts: [`https://unpkg.com/@tailwindcss/browser@4`],
});
